import Image from "next/image";
import AudioGearHero from "./AudioGearHero";
import Link from "next/link";

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
          <Link href="/product/4" className="bg-black font-semibold text-sm px-8 py-3 hover:bg-[#353333]">
            SEE PRODUCT
          </Link>
        </div>
      </div>

      <div className="flex relative bg-slate-200 py-24  rounded-xl items-center justify-between pl-10 overflow-hidden ">
        <div className="min-w-[160px] space-y-6 md:pl-20">
          <h2 className="text-2xl font-semibold tracking-wider mb-8">ZX7 SPEAKER</h2>
          <Link href="/product/5" className="border border-black  px-8 py-3 text-sm font-semibold hover:text-white hover:bg-black">
            SEE PRODUCT
          </Link>
        </div>
        <div className="absolute -right-28 md:-right-4 md:-top-40 lg:-top-[460px]">
          <Image
            className=" w-[250px] md:w-[400px] lg:w-[700px]"
            src="/images/hero-speaker-zx7.png"
            width={1000}
            height={1000}
            alt="zx7 speaker"
          />
        </div>
      </div>

      <div className="grid space-y-6 md:grid-cols-2 md:space-y-0 md:space-x-6">
        <div className="flex flex-col h-44 items-center justify-center  rounded-xl overflow-hidden md:h-64">
          <Image
            className="rounded-xl w-full "
            src="/images/earphones-hero.jpg"
            width={400}
            height={400}
            alt="earphones"
          />
        </div>

        <div className=" justify-between items-start flex flex-col h-44 md:h-full bg-gray-200 rounded-xl  p-6 py-8 md:px-24 md:py-16   ">
          <h2 className="text-2xl font-semibold tracking-wider md:text-3xl">YX1 EARPHONES</h2>
          <Link href="/product/6" className="border border-black px-8 py-3 text-sm font-semibold hover:bg-black hover:text-white ">SEE PRODUCT</Link>
        </div>
      </div>

      <AudioGearHero/>
    </div>
  );
}
