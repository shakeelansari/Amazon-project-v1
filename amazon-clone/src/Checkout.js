// rfce
import React from 'react'
import './Checkout.css';


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout--left">
                <img className="checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />
                <div>
                    <h3 className="checkout--title">Your shoptting details</h3>
                    {/* Cart item here */}
                    {/* Cart item here */}
                    </div>
            </div>

            <div className="checkout--right">
                <div>
                   <h3>Sub Total (2 items)</h3>
                 </div>
            </div>

        </div>
    )
}
 
export default Checkout
