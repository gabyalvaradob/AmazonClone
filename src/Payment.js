import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from "./firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clienteSecret, setClienteSecret] = useState(true);

    useEffect(() => {
        // genera el secreto especial de stripe para cobrar al cliente, cada que cambia eñ carrito tenemos que generar un nuevo "secreto"
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe espera el total en subunidades (es decir centavos)
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClienteSecret(response.data.clienteSecret);
        }
        getClientSecret();
    }, [basket]);

    console.log('the secret is: ', clienteSecret);

    const handleSubmit = async (event) => {
        //hace todo lo de stripe fancy
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clienteSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = confirmacion del pago

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        // ve cualquier cambio en el CardElement y muestra cualquier error detectado
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment" >
            <div className="payment_container">
                <h1>
                    Checkout (
                    <Link to='/checkout'>{basket?.length} items</Link>
                    )
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Dirección de envío</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 calle React</p>
                        <p>Mérida, México</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Verifica los articulos y los datos</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (

                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />

                        ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Metodo de pago</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit} >
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Orden total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded} >
                                    <span>{processing ? <p>Procesando</p> : "Compra ahora"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div> }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
