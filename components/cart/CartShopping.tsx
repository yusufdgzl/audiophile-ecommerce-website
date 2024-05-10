"use client";

import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import CartShoppingProductsItem from "./CartShoppingProductsItem";

export default function CartShopping() {
  const cartTotal = useAppSelector((state) => state.cart.total);
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotalAmount = useAppSelector((state)=> state.cart.totalAmount)


  return (
    <div className="bg-white space-y-6 p-6  lg:w-[350px] rounded-xl ">
        <div className="flex justify-between">
        <h2 className="text-lg font-semibold tracking-widest">CART({cartTotalAmount})</h2>
        <button className=" underline opacity-40 hover:text-orange-700">Remove all</button>
        </div>
      
      {cartItems.map((item) => (
        <CartShoppingProductsItem key={item.id} {...item} />
      ))}

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="opacity-45">TOTAL</p>
          <p className="font-semibold text-lg tracking-wider">${cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
      </div>
      <Link href="/checkout" className="btn-orange w-full flex justify-center">CHECKOUT</Link>
    </div>
  );
}
