import Image from "next/image";

export default function AudioGearHero() {
  return (
    <div className=" grid gap-4 py-20 md:py-40 md:grid-cols-2">
      <Image
        className=" bg-black rounded-xl md:h-[600px] md:w-[1000px]  md:order-2"
        src="/images/audio-gear-hero.webp"
        width={700}
        height={600}
        alt="audio gear"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-6 mx-auto py-4 max-w-[400px] md:text-left">
        <h2 className="text-3xl font-semibold md:text-4xl">
          BRINGING YOU THE <span className="text-[#d79447]">BEST</span> AUDIO
          GEAR
        </h2>
        <p className="text-md md:text-xl opacity-60">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
