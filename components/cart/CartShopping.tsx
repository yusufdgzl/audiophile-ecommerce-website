"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import CartShoppingProductsItem from "./CartShoppingProductsItem";
import { cartSlice } from "@/lib/features/cart/cartSlice";


type CartShoppingProps = {
  onCloseCartHandler : () => void
}

export default function CartShopping({onCloseCartHandler} : CartShoppingProps) {
  const cartTotal = useAppSelector((state) => state.cart.total);
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotalAmount = useAppSelector((state) => state.cart.totalAmount);

  const dispatch = useAppDispatch();

  function clearCartHandler() {
    dispatch(cartSlice.actions.clearAllCart());
  }

  return (
    <div className="bg-white space-y-6 p-8  lg:w-[350px] rounded-xl ">
      {cartItems.length === 0 ? (
        <p className="font-normal  text-center">Your cart is empty!</p>
      ) : (
        <>
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold tracking-widest">
              CART({cartTotalAmount})
            </h2>
            <button
              onClick={clearCartHandler}
              className=" underline opacity-40 hover:text-orange-700"
            >
              Remove all
            </button>
          </div>
          <div>
            {cartItems.map((item) => (
              <CartShoppingProductsItem key={item.id} {...item} />
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="opacity-45">TOTAL</p>
              <p className="font-semibold text-lg tracking-wider">
                ${cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          </div>
          <Link
            onClick={() => onCloseCartHandler()}
            href="/checkout"
            className="btn-orange w-full flex justify-center"
          >
            CHECKOUT
          </Link>
        </>
      )}
    </div>
  );
}
