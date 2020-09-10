import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/33/img20/Prime/Nonshoppers/Promo2/PrimeNewsletter_3000x540._CB1591815874_.jpg"
                    alt="adcheckout" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your shopping cart</h2>

                    {/* Checkout Product */}
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
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
