import {create} from "zustand";

export const usecart = create((set)=>({
    cart: [],
    addToCart: (item) => set((state) =>({
        cart: [...state.cart, item],
    })),
    removeFromCart: (foodid)=> set((state)=>({
        cart: state.cart.filter((item)=>item.id !== foodid),
    }))
}))