import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

export default function MainHeader() {
  return (
    <div className="flex  justify-between bg-black  items-center px-8  xl:px-48 h-24 text-white text-3xl font-bold border-b  border-opacity-30 border-gray-500">
      <div className="md:hidden  hover:text-[#b36042] focus:text-[#b36042] duration-300">
        <TiThMenu className="w-6 relative z-40 " />
      </div>
      <div className="flex  md:justify-start  md:w-full">
        <Link className="relative z-40 hover:text-[#b36042] focus:text-[#b36042] duration-300" href="/">
          audiophile
        </Link>
      </div>

      <div className="hidden relative z-40 md:flex text-[12px] tracking-[0.2rem] justify-center w-full space-x-8">
        <div className="flex flex-col group">
          <Link className="hover:text-[#b36042] focus:text-[#b36042] duration-300" href="/">
            HOME
          </Link>
          <span className="group-hover:border-b mx-3 translate-y-1 "></span>
        </div>
        <div className="flex flex-col group">
          <Link className="hover:text-[#b36042] focus:text-[#b36042] duration-300" href="/">
            HEADPHONES
          </Link>
          <span className="group-hover:border-b mx-5 translate-y-1"></span>
        </div>
        <div className="flex flex-col group">
          <Link className="hover:text-[#b36042] focus:text-[#b36042] duration-300" href="/">
            SPEAKERS
          </Link>
          <span className="group-hover:border-b mx-5 translate-y-1"></span>
        </div>
        <div className="flex flex-col group">
          <Link className="hover:text-[#b36042] focus:text-[#b36042] duration-300" href="/">
            EARPHONES
          </Link>
          <span className="group-hover:border-b mx-5 translate-y-1"></span>
        </div>
      </div>
      <div className="flex relative z-40 md:justify-end hover:text-[#b36042]  duration-300 md:w-full">
        <IoCartOutline />
      </div>
      
    </div>
  );
}
