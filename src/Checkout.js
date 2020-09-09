import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/33/img20/Prime/Nonshoppers/Promo2/PrimeNewsletter_3000x540._CB1591815874_.jpg"
                    alt="adcheckout" />
                <div>
                    <h2 className="checkout_title">Your shopping cart</h2>
                </div>

            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
