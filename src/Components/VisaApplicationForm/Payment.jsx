// Payment.jsx
import React, { useState } from 'react';
import './Payment.css'; // Import the CSS stylesheet to style the component
import processingGif from '../Assets/Payment-Processing.gif';

const Payment = ({handleSaveAndContinue}) => {
 const [isProcessing, setIsProcessing] = useState(false);

 const handlePlaceOrder = (e) => {
  e.preventDefault();
  setIsProcessing(true); //show gif

  setTimeout(() => {
    setIsProcessing(false); //Hide teh processing gif 
    handleSaveAndContinue();
  }, 5000);
 };
 




  // Render the component's content
  return (
    <div className="payment-page-container">
      {isProcessing && (
        <div className="processing-overlay">
          <img src={processingGif} alt="Processing payment" />
        </div>
      )}
      <div className="checkout-container">
        <h2>Checkout</h2>

        {/* Shipping information section */}
        <section className="shipping-info">
          <h3>Shipping</h3>
          <p>Joshua Doyle</p>
          <p>Sheffield Hallam University</p>
          <p>Standard Shipping</p>
          <p>Arriving on or before 08.01.2024</p>
        </section>

        {/* Payment method section */}
        <section className="payment-method">
          <h3>Payment Method</h3>

          {/* PayPal button */}
          <button className="paypal-button">PayPal</button>
          <span>or</span>

          {/* Payment form */}
          <form onSubmit={handlePlaceOrder}>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Expiration" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="Billing zip code" />
            <button type="submit" className='place-order-button'>Place Order</button>
          </form>
        </section>
      </div>

      {/* Order summary section */}
      <aside className="order-summary">
        <h3>Checkout Information</h3>
        <div className="order-items">
          {/* Map through items in the cart here */}
          <div className="item">
            <p>Tourist Visa</p>
          </div>
        </div>
        <div className="order-total">
          <p>Subtotal: £100</p>
          <p>Shipping Fee: Free</p>
          <p>Tax: £4.00</p>
          <h4>Order Total: £104</h4>
        </div>
      </aside>
    </div>
  );
};

export default Payment; // Export the Payment component as the default export
