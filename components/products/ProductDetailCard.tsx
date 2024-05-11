"use client";

import { ProductsType } from "@/app/category/headphones/page";
import Image from "next/image";
import Link from "next/link";
import CategoriesSection from "../categories/CategoriesSection";
import AudioGearHero from "../main/section/AudioGearHero";
import AlsoLikeProducts from "./AlsoLikeProducts";
import { useAppDispatch } from "@/lib/hooks";
import { cartSlice } from "@/lib/features/cart/cartSlice";
import { ChangeEvent, useState } from "react";

export default function ProductDetailCard(props: ProductsType) {

  const [enteredValue,setEnteredValue] = useState<number>(1);

  const { description, features, images, inTheBox, price, title, id } = props;

  const dispatch = useAppDispatch();

  function addItemHandler() {
    dispatch(cartSlice.actions.addItemToCart({
      ...props,amount:enteredValue
    }));
  }

  function increaseAmountHandler() {
    if(enteredValue !== 1){
      setEnteredValue((prev) => prev - 1 )
    }
  }

  function decreaseAmountHandler() {
    setEnteredValue((prev) => prev + 1 )
  }

  function counterChangeHandler(event:ChangeEvent<HTMLInputElement>)  {
    setEnteredValue(+event.target.value);
  }


  return (
    <div className="flex flex-col px-6 max-w-[1200px] mx-auto">
      <div
        key={title}
        className=" grid  gap-4   py-12  md:py-20 md:grid-cols-2"
      >
        <Image
          className={` bg-black rounded-xl h-[380px] md:h-auto ${
            id % 2 === 0 && "md:order-2"
          } `}
          src={images.main}
          width={500}
          height={500}
          alt="audio gear"
          priority
        />
        <div className="flex flex-col items-left justify-center text-left space-y-6 mx-auto py-4  md:max-w-[500px] md:items-start md:text-left">
          <h2 className="text-3xl font-semibold  md:max-w-[350px] md:text-5xl ">
            {title}
          </h2>
          <p className="text-md  md:max-w-none md:text-xl opacity-60">
            {description}
          </p>
          <p className="text-xl font-semibold">${price}</p>

          <div className="flex space-x-4">
            <div className="bg-gray-200 py-2 px-4 flex justify-around items-center rounded-sm">
              <button onClick={increaseAmountHandler} className="px-3 hover:text-orange-500 text-lg">-</button>
              <label htmlFor="amount">
                <input
                  className=" outline-none bg-gray-200 w-6 text-center "
                  type="text"
                  id="amount"
                  maxLength={2}
                  value={enteredValue}
                  onChange={counterChangeHandler}
                />
              </label>
              <button onClick={decreaseAmountHandler} className="px-3 hover:text-orange-500 text-lg">+</button>
            </div>
            <button  onClick={addItemHandler} className="btn-orange">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-20 my-14 md:flex-row md:justify-between md:space-y-0 md:items-center ">
        <div className="space-y-6 md:max-w-[600px] ">
          <h2 className="text-2xl font-semibold">FEATURES</h2>
          <p className="opacity-70">{features}</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">IN THE BOX</h2>
          <div className="space-y-2 opacity-70">
            <p>{inTheBox.headphoneUnit}x Headphone Unit</p>
            <p>{inTheBox.earcups}x Replacement Earcups</p>
            <p>{inTheBox.userManual}x User Manual</p>
            <p>{inTheBox.audioCable}x 3.5mm 5m Audio Cable</p>
            <p>{inTheBox.travelBag}x Travel Bag</p>
          </div>
        </div>
      </div>

      <div className="py-10 space-y-8 md:flex md:justify-between md:items-center md:space-y-0 md:space-x-6 md:py-10">
        <div className="flex flex-col space-y-6 justify-between">
          <Image
            className="h-60 rounded-xl md:h-auto "
            src={images.gallery1}
            width={500}
            height={500}
            alt={title}
          />
          <Image
            className="h-60 rounded-xl md:h-auto"
            src={images.gallery2}
            width={500}
            height={500}
            alt={title}
          />
        </div>

        <Image
          className=" rounded-xl  "
          src={images.gallery3}
          width={700}
          height={700}
          alt={title}
        />
      </div>

      <div>
        <AlsoLikeProducts />
      </div>

      <div className="px-6 pt-24 md:pt-40">
        <CategoriesSection />
        <AudioGearHero />
      </div>
    </div>
  );
}
