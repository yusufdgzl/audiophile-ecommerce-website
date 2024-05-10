import { ProductsType } from "@/app/category/headphones/page";
import { cartSlice } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";

export default function CartShoppingProductsItem(props: ProductsType) {
  const { images, title, price, amount, id } = props;


  const dispatch = useAppDispatch();
  
  function increaseItemHandler(){
    dispatch(cartSlice.actions.addItemToCart(props))
  }

  function decreaseItemHandler(){
    dispatch(cartSlice.actions.deleteItemFromCart(props))
  }


  return (
    <div className="flex justify-between items-center">
      <Link
        href={`/product/${id}`}
        className="flex group items-center space-x-4"
      >
        <Image
          src={images.main}
          className=" rounded-xl group-hover:scale-105 duration-300"
          alt="products"
          width={64}
          height={64}
        />
        <div>
          <p className="group-hover:text-orange-500">{title.substring(0, 4)}</p>
          <p className=" opacity-60">${price}</p>
        </div>
      </Link>
      <div className="flex flex-col items-end ">
        <div className="bg-gray-200 py-2 px-2 flex justify-around rounded-sm">
          <button onClick={decreaseItemHandler} className="px-3 hover:text-orange-500">-</button>
          <label htmlFor="amount">
            <input className=" outline-none bg-gray-200 w-6 text-center " type="text" id="amount"  maxLength={2} value={amount} />
          </label>
          <button onClick={increaseItemHandler} className="px-3 hover:text-orange-500">+</button>
        </div>
        <button className="underline opacity-40 hover:text-orange-700">
          Remove
        </button>
      </div>
    </div>
  );
}
