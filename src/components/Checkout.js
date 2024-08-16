import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    navigate("/order-confirmation");
  };

  return (
    <div className="bg-white p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center pb-6 border-b-2 mb-6">
        <h1 className="text-3xl font-semibold">Checkout</h1>
      </div>
      <div className="overflow-y-auto">
        {cartProducts.length === 0 ? (
          <p className="font-bold text-2xl text-center">Your cart is empty</p>
        ) : (
          <>
            <ul className="space-y-6">
              {cartProducts.map((item, index) => (
                <li key={index} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src={item.img}
                      alt={item.name}
                    />
                    <div>
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <p className="text-gray-600">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-bold text-lg">${item.totalPrice}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center bg-black text-white text-2xl uppercase p-4 mt-6 rounded-lg shadow-lg">
              <span>Total:</span>
              <span>${totalAmount}</span>
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={handleConfirmPurchase}
              >
                Confirm Purchase
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
