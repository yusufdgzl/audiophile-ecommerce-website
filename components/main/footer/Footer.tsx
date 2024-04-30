import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

export default function Footer() {
  return (
    <div className="flex flex-col px-4 bg-[#151414] text-white md:pb-10 md:px-48">
      <span className="w-24 h-[5px] bg-[#e58536] mx-auto md:mx-0"></span>
      <div className="flex flex-col items-center text-center space-y-10 py-10 md:flex-row md:justify-between md:space-y-0">
        <Link
          href="/"
          className="text-3xl font-bold hover:text-[#D97E4A] transition-all"
        >
          audiophile
        </Link>
        <div className="flex flex-col space-y-5 py-4 md:flex-row md:space-y-0 md:space-x-10">
          <Link
            className="font-bold text-sm hover:text-[#D97E4A] transition-all"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="font-bold text-sm hover:text-[#D97E4A] transition-all"
            href="/category/headphones"
          >
            HEADPHONES
          </Link>
          <Link
            className="font-bold text-sm hover:text-[#D97E4A] transition-all"
            href="/category/speakers"
          >
            SPEAKERS
          </Link>
          <Link
            className="font-bold text-sm hover:text-[#D97E4A] transition-all"
            href="/category/earphones"
          >
            EARPHONES
          </Link>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row md: justify-between md:space-x-8">
        <div className="flex flex-col text-center space-y-14 md:max-w-[550px] md:text-left">
          <p className=" opacity-60">
            Audiophile is an all in one stop to fulfill your audio needs. We‘re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we‘re open 7 days a week.
          </p>
          <p className=" opacity-60">Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="flex items-center justify-center py-10 space-x-6">
          <Link href="https://www.facebook.com/">
            <ImFacebook2 className="h-6 w-6 hover:text-[#D97E4A] transition-all" />
          </Link>
          <Link href="https://www.twitter.com/">
            <FaTwitter className="h-6 w-6 hover:text-[#D97E4A] transition-all" />
          </Link>
          <Link href="https://www.instagram.com/">
            <FaInstagram className="h-6 w-6 hover:text-[#D97E4A] transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
}
