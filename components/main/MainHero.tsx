import Image from "next/image";

export default function MainHero() {
  return (
    <div className="flex w-full contrast-[0.9] justify-center pb-20  absolute top-0 bg-[#0C0C0C] xl:px-48">
      <div className=" relative xl:flex xl:w-full xl:space-x-32  ">
        <div className="absolute flex flex-col px-20 space-y-6 justify-center -translate-y-10 h-full text-center  z-10 text-white xl:relative xl:max-w-sm xl:text-left xl:items-start xl:px-0 ">
          <h2>NEW PRODUCT</h2>
          <h1>XX99 MARK II HEADPHONE</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>SEE PRODUCT</button>
        </div>
        <Image
          src="/images/image-hero.jpg"
          className="w-[500px] h-[650px] scale-125  pt-10  "
          alt="hero mobile"
          width={4000}
          height={4000}
        />
      </div>
    </div>
  );
}
