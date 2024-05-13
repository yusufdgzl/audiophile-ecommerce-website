'use client'

import CartSummary from "@/components/cart/CartSummary";
import CompletedCheckout from "@/components/checkout/CompletedCheckout";
import CheckoutForm from "@/components/forms/CheckoutForm";
import { useState } from "react";

export default function Checkout(){

    const [isVisibleCompletedCheckout,setIsVisibleCompletedCheckout] = useState<boolean>(false);

    return(
        <div className="flex flex-col space-y-8  bg-gray-200 px-6 py-6 lg:space-y-0 lg:space-x-8 lg:items-start lg:justify-center  lg:flex-row lg:px-20">
            {isVisibleCompletedCheckout && <CompletedCheckout/>}
            <CheckoutForm />
            <CartSummary onSetIsVisibleCompletedCheckout = {setIsVisibleCompletedCheckout}/>
        </div>
    )
}