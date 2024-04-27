import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

export default function MainHeader() {
  return (
    <div className="bg-black w-full flex flex-col ">
      <div className="flex w-full relative z-10 justify-between items-center px-8  h-24 text-white text-3xl font-bold border-b  border-opacity-30 border-gray-500 max-w-[1100px] mx-auto xl:p-0">
        <div className="md:hidden  hover:text-[#b36042] focus:text-[#b36042] duration-300">
          <TiThMenu className="w-6  " />
        </div>
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
        <div className="flex  md:justify-end  md:w-full">
          <IoCartOutline className="hover:text-[#b36042]  duration-300" />
        </div>
      </div>
    </div>
  );
}
