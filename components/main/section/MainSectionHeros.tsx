import Image from "next/image";

export default function MainSectionHeros() {
  return (
    <div className="flex flex-col space-y-6 px-6 py-10">
      <div className="flex flex-col relative md:h-[500px] overflow-hidden justify-center items-center pb-10 bg-[url('/images/orange-hero-bg.jpg')] bg-bottom md:bg-top md:bg-cover rounded-xl md:flex-row md:pr-40 md:pb-0 ">
        <div className="">
          <Image
            className=" w-[270px] md:min-w-[700px] md:translate-y-16 "
            src="/images/speakers.png"
            width={1000}
            height={1000}
            alt="speakers"
          />
        </div>
        <div className="flex flex-col  text-center items-center  space-y-4 max-w-xs text-white -translate-y-6 md:translate-y-0 md:space-y-6 md:text-left md:items-start">
          <h2 className="text-3xl font-bold w-[150px] md:text-5xl">
            ZX9 SPEAKER
          </h2>
          <p>
            Upgrade to premium spekers that are phenomenally built to deliver
            truly remarkable sound
          </p>
          <button className="bg-black font-semibold text-sm px-8 py-3 hover:bg-[#353333]">
            SEE PRODUCT
          </button>
        </div>
      </div>

      <div className="flex relative bg-slate-200 py-24  rounded-xl items-center justify-between pl-10 overflow-hidden ">
        <div className="min-w-[160px] space-y-6 md:pl-20">
          <h2 className="text-2xl font-semibold tracking-wider">ZX7 SPEAKER</h2>
          <button className="border border-black px-8 py-3 text-sm font-semibold hover:text-white hover:bg-black">SEE PRODUCT</button>
        </div>
        <div className="absolute -right-28 md:-right-4 md:-top-40 lg:-top-[460px]">
          <Image className=" w-[250px] md:w-[400px] lg:w-[700px]" src="/images/hero-speaker-zx7.png" width={1000} height={1000} alt="zx7 speaker"/>
        </div>
      </div>


      <div></div>
    </div>
  );
}
