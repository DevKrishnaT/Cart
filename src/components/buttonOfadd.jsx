import React from "react";
import { usecart } from "./cart/cart";


const ButtonOfadd = ({ item }) => {
  const addToCart = usecart((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(item)}
      className="flex items-center gap-2 px-3 py-2 rounded-3xl bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
    >
      <span>Add to cart</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
        />
      </svg>
    </button>
  );
};

export default ButtonOfadd;
