import React from "react";
import { usecart } from "./cart/cart";

const CartItems = () => {
  const cart = usecart((state) => state.cart);
  const removeFromCart = usecart((state) => state.removeFromCart);
  return (
    <div className="cart">
      
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-green-600 rounded-xl px-3 py-2"
        >
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm opacity-80">{item.name}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-sm bg-red-500 px-2 py-1 rounded-lg"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
