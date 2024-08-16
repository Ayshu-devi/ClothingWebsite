import React, { useState } from "react";

const OrderConfirmation = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePlaceOrder = () => {
    if (selectedPaymentMethod) {
      setOrderPlaced(true);
    } else {
      alert('Please select a payment method before placing the order.');
    }
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="bg-white p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center pb-6 border-b-2 mb-6">
        <h1 className="text-3xl font-semibold">Order Confirmation</h1>
      </div>
      <div className="space-y-6">
        {/* Shipping Details */}
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
          <p className="text-lg">Ayshwariyaa</p>
          <p className="text-lg">Jafferkhanpet</p>
          <p className="text-lg">Chennai</p>
          <p className="text-lg">India</p>
        </div>

        {/* Payment Method */}
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
          <div className="space-y-2">
            <label className="flex items-center text-lg">
              <input
                type="radio"
                name="paymentMethod"
                value="Visa"
                checked={selectedPaymentMethod === 'Visa'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Visa **** 1234
            </label>
            <label className="flex items-center text-lg">
              <input
                type="radio"
                name="paymentMethod"
                value="Paytm"
                checked={selectedPaymentMethod === 'Paytm'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Paytm
            </label>
            <label className="flex items-center text-lg">
              <input
                type="radio"
                name="paymentMethod"
                value="GPay"
                checked={selectedPaymentMethod === 'GPay'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Google Pay (GPay)
            </label>
            <label className="flex items-center text-lg">
              <input
                type="radio"
                name="paymentMethod"
                value="Credit/Debit Card"
                checked={selectedPaymentMethod === 'Credit/Debit Card'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Credit/Debit Card
            </label>
            <label className="flex items-center text-lg">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={selectedPaymentMethod === 'Cash on Delivery'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Cash on Delivery
            </label>
          </div>
        </div>

        {/* Order Success Message */}
        {orderPlaced && (
          <div className="border p-4 rounded-lg bg-green-100 text-green-800">
            <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
          </div>
        )}

        {/* Order Success Button */}
        <div className="flex justify-end mt-6">
          <button 
            className="bg-green-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
