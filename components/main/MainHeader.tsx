"use client";

import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import CategoriesSection from "../categories/CategoriesSection";
import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import CartSummary from "../cart/CartSummary";
import CartShopping from "../cart/CartShopping";

export default function MainHeader() {
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
  const [menuAnimation, setMenuAnimation] = useState<boolean>(false);
  const [cartIsVisible, setCartIsVisible] = useState<boolean>(false);

  const totalAmount = useAppSelector((state) => state.cart.totalAmount);

  function menuHandler() {
    setIsVisibleMenu((prev) => !prev);

    setTimeout(() => {
      setMenuAnimation((prev) => !prev);
    }, 1);
  }

  function openCartHandler() {
    setCartIsVisible((prev) => !prev);
  }

  function closeCartHandler() {
    setCartIsVisible(false);
  }

  return (
    <div className="bg-black w-full flex flex-col ">
      <div className="flex w-full  z-10 justify-between items-center px-8  h-24 text-white text-3xl font-bold border-b  border-opacity-30 border-gray-500 max-w-[1100px] mx-auto xl:p-0">
        {isVisibleMenu && (
          <div
            onClick={menuHandler}
            className=" absolute bg-black h-[3000px] bg-opacity-70 text-black left-0 right-0 bottom-0 z-10 top-24 px-10 md:hidden"
          >
            <div
              className={`bg-white overflow-hidden  duration-300 transition-transform  pt-20 z-20 ${
                menuAnimation ? "translate-y-0" : "-translate-y-[1000px]"
              }`}
            >
              <CategoriesSection  />
            </div>
          </div>
        )}

        {cartIsVisible && (
          <div className="absolute bg-black h-auto bg-opacity-70 text-black left-0 right-0 bottom-0 z-10 top-24 px-10">
            <div
              onClick={closeCartHandler}
              className="absolute left-0 right-0 bottom-0 top-0 z-10"
            ></div>
            <div className="absolute z-20 right-0 left-0 px-10 text-sm  py-6 md:left-auto md:right-32 ">
              <CartShopping onCloseCartHandler={closeCartHandler} />
            </div>
          </div>
        )}

        <button
          onClick={menuHandler}
          className="md:hidden  hover:text-[#b36042] focus:text-[#b36042] duration-300"
        >
          <TiThMenu className="w-6 " />
        </button>
        <div className="flex  md:justify-start  md:w-full">
          <Link
            className=" hover:text-[#b36042] focus:text-[#b36042] duration-300"
            href="/"
          >
            audiophile
          </Link>
        </div>

        <div className="hidden md:flex text-[12px] tracking-[0.2rem] justify-center w-full  space-x-8">
          <Link
            className="hover:text-[#b36042] focus:text-[#b36042] duration-300"
            href="/"
          >
            HOME
          </Link>

          <Link
            className="hover:text-[#b36042] focus:text-[#b36042] duration-300"
            href="/category/headphones"
          >
            HEADPHONES
          </Link>

          <Link
            className="hover:text-[#b36042] focus:text-[#b36042] duration-300"
            href="/category/speakers"
          >
            SPEAKERS
          </Link>

          <Link
            className="hover:text-[#b36042] focus:text-[#b36042] duration-300"
            href="/category/earphones"
          >
            EARPHONES
          </Link>
        </div>

        <div className="  flex  md:justify-end  md:w-full">
          <button onClick={openCartHandler} className="relative">
            {totalAmount > 0 && (
              <span className="absolute -left-5 -top-5 text-sm bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full bg-opacity-40">
                {totalAmount}
              </span>
            )}
            <IoCartOutline className="hover:text-[#b36042]  duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
