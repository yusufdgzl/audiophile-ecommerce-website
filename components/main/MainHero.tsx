import Image from "next/image";
import Link from "next/link";

export default function MainHero() {
  return (
    <div className="flex w-full  contrast-[0.9] justify-center -translate-y-[100px] top-0 bg-[#0C0C0C]  xl:pb-20 ">
      <div className=" relative pt-16 h-[580px] overflow-hidden w-full items-center justify-center flex xl:space-x-20 xl:max-w-[1100px] xl:pt-24 xl:justify-normal ">
        <div className="absolute flex flex-col px-20 space-y-6 justify-center items-center  h-full text-center z-10 text-white xl:relative w-[420px] xl:text-left xl:items-start xl:px-0 ">
          <h2 className="opacity-40 tracking-[8px]">NEW PRODUCT</h2>
          <h1 className="text-3xl font-semibold xl:text-5xl">XX99 MARK II HEADPHONE</h1>
          <p className="opacity-80 xl:text-sm xl:max-w-[320px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/product/1" className="bg-[#f6874b] font-semibold px-6 py-2 xl:py-3 hover:bg-[#FBAD83] transition-all text-sm">
            SEE PRODUCT
          </Link>
        </div>
        <Image
          src="/images/image-main-hero.jpg"
          className="w-[500px] max-h-[700px] scale-[1.2]  pt-10 "
          alt="hero mobile"
          width={4000}
          height={4000}
          priority
        />
      </div>
    </div>
  );
}
