import CartSummary from "@/components/cart/CartSummary";
import CheckoutForm from "@/components/forms/CheckoutForm";

export default function Checkout(){
    return(
        <div className="flex flex-col space-y-8  bg-gray-200 px-6 py-6 lg:space-y-0 lg:space-x-8 lg:items-start lg:justify-center  lg:flex-row lg:px-20">
            <CheckoutForm/>
            <CartSummary/>
        </div>
    )
}