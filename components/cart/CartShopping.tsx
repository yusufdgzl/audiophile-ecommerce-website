"use client";

import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import CartShoppingProductsItem from "./CartShoppingProductsItem";

export default function CartShopping() {
  const cartTotal = useAppSelector((state) => state.cart.total);
  const cartItems = useAppSelector((state) => state.cart.items);

  



  return (
    <div className="bg-white space-y-6 p-6  lg:w-[350px] rounded-xl ">
      <h2 className="text-lg font-semibold">SUMMARY</h2>

      {cartItems.map((item) => (
        <CartShoppingProductsItem key={item.id} {...item} />
      ))}

      <div className="space-y-2">
        <div className="flex justify-between">
          <p>TOTAL</p>
          <p className="font-semibold text-lg tracking-wider">${cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
      </div>
      <Link href="/checkout" className="btn-orange w-full flex justify-center">CHECKOUT</Link>
    </div>
  );
}
