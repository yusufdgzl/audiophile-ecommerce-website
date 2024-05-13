import { ProductsType } from "@/app/category/headphones/page";
import { cartSlice } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";


export default function CounterButtons(props: ProductsType) {
  const dispatch = useAppDispatch();

  function increaseAmountHandler() {
    if (props.amount !== 1) {
      dispatch(
        cartSlice.actions.deleteItemFromCart({
          ...props,
          amount: -1,
        })
      );
    }
  }

  function decreaseAmountHandler() {
    dispatch(
      cartSlice.actions.addItemToCart({
        ...props,
        amount: 1,
      })
    );
  }

  function removeItemHandler() {
    dispatch(
      cartSlice.actions.clearItem(props)
    );
   console.log(props)
  }

  return (
    <div className="flex flex-col items-end ">
      <div className="bg-gray-200 py-2 px-2 flex justify-around rounded-sm">
        <button
          onClick={increaseAmountHandler}
          className="px-3 hover:text-orange-500"
        >
          -
        </button>
        <label htmlFor="amount">
          <input
            className=" outline-none bg-gray-200 w-6 text-center "
            type="text"
            id="amount"
            maxLength={2}
            value={props.amount}
          />
        </label>
        <button
          onClick={decreaseAmountHandler}
          className="px-3 hover:text-orange-500"
        >
          +
        </button>
      </div>
      <button onClick={removeItemHandler} className="underline opacity-40 hover:text-orange-700">
        Remove
      </button>
    </div>
  );
}
