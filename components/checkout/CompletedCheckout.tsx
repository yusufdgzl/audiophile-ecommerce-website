import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function CompletedCheckout() {
  return (
    <div className="fixed z-30 flex w-full h-full md:justify-center items-center -translate-y-32">
      <div className="absolute z-10 w-full scale-110 h-full bg-black opacity-50"></div>
      <div className="absolute flex flex-col items-center text-center space-y-6 bg-white mt-8  md:mt-20 z-20 p-6 md:p-14 w-[435px] md:w-[700px]  rounded-xl ">
        <IoIosCheckmarkCircle className=" text-orange-500 w-20 h-20" />
        <h1 className="font-bold text-3xl max-w-80 ">THANK YOU FOR YOUR ORDER</h1>
        <p className=" opacity-65">You will receive an email confirmation shortly.</p>
        <Link className="btn-orange w-full flex justify-center" href="/">BACK TO HOME</Link>
      </div>
    </div>
  );
}
