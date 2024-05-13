"use client";

import { useAppSelector } from "@/lib/hooks";
import CartProductsItem from "./CartProductsItem";
import { useDispatch } from "react-redux";
import { cartSlice } from "@/lib/features/cart/cartSlice";

type CartSummaryProps = {
  onSetIsVisibleCompletedCheckout: (prev: boolean) => void;
};

export default function CartSummary({onSetIsVisibleCompletedCheckout}:CartSummaryProps) {
  const cartTotal = useAppSelector((state) => state.cart.total);
  const cartItems = useAppSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  
  const vat = cartTotal * 20 / 100;

  function paymentHandler(){
    onSetIsVisibleCompletedCheckout(true);
    dispatch(cartSlice.actions.clearAllCart());
  }


  return (
    <div className="bg-white space-y-6 p-6  lg:w-[350px] rounded-xl ">
      <h2 className="text-lg font-semibold">SUMMARY</h2>

      {cartItems.map((item) => (
        <CartProductsItem key={item.id} {...item} />
      ))}

      <div className="space-y-2">
        <div className="flex justify-between">
          <p>TOTAL</p>
          <p className="font-semibold text-lg">${cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <div className="flex justify-between">
          <p>SHIPPING</p>
          <p className="font-semibold text-lg">$50</p>
        </div>
        <div className="flex justify-between">
          <p>VAT (INCLUDED)</p>
          <p className="font-semibold text-lg">${vat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <div className="flex justify-between ">
          <p>GRAND TOTAL</p>
          <p className="font-semibold text-lg text-orange-600">${(cartTotal + 50 + vat).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
      </div>
      <button onClick={paymentHandler} className="btn-orange w-full">CONTINUE & PAY</button>
    </div>
  );
}
