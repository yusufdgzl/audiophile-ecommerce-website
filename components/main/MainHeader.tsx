import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

export default function MainHeader() {
  return (
    <div className="flex justify-between items-center mx-8  xl:mx-48 h-24 text-white text-3xl font-bold border-b border-gray-500">
      <div className="md:hidden hover:text-[#b36042] duration-300">
        <TiThMenu />
      </div>
      <div className="flex  md:justify-start  md:w-full">
        <Link
          className=" hover:text-[#b36042] duration-300"
          href="/"
        >
          audiophile
        </Link>
      </div>

      <div className="hidden md:flex text-[12px] tracking-[0.2rem] justify-center w-full space-x-8">
        <div className="flex flex-col group">
          <Link className="hover:text-[#b36042] duration-300" href="/">
            HOME
          </Link>
          <span className="group-hover:border-b mx-3 translate-y-1 "></span>
        </div>
        <div className="flex flex-col group">
          <Link className="hover:text-[#b36042] duration-300" href="/">
            HEADPHONES
          </Link>
          <span className="group-hover:border-b mx-5 translate-y-1"></span>
        </div>
        <div className="flex flex-col group">
          <Link className="hover:text-[#b36042] duration-300" href="/">
            SPEAKERS
          </Link>
          <span className="group-hover:border-b mx-5 translate-y-1"></span>
        </div>
        <div className="flex flex-col group">
          <Link className="hover:text-[#b36042] duration-300" href="/">
            EARPHONES
          </Link>
          <span className="group-hover:border-b mx-5 translate-y-1"></span>
        </div>
      </div>
      <div className="flex md:justify-end hover:text-[#b36042] duration-300 md:w-full">
        <IoCartOutline />
      </div>
    </div>
  );
}
