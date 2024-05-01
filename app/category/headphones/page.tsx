"use client";

import CategoriesSection from "@/components/categories/CategoriesSection";
import AudioGearHero from "@/components/main/section/AudioGearHero";

import headphones from "@/data/products.json";
import Image from "next/image";

export default function HeadPhones() {
  const headphonesData = headphones;

  return (
    <>
      <div className="flex flex-col ">
        <h1 className="bg-black text-3xl font-semibold tracking-wider w-full text-center text-white py-8 xl:py-20 ">
          HEADPHONES
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto">

        <div>
          {headphonesData.map((item) => (
             <div className=" grid gap-4 py-20 md:px-20 md:py-40 md:grid-cols-2">
             <Image
               className=" bg-black rounded-xl md:h-[600px] md:w-[600px]  "
               src={item.images[1]}
               width={700}
               height={600}
               alt="audio gear"
             />
             <div className="flex flex-col items-center justify-center text-center space-y-6 mx-auto py-4 max-w-[500px] md:items-start md:text-left">
               <h2 className="text-3xl font-semibold md:text-4xl">
                 {item.title}
               </h2>
               <p className="text-md md:text-xl opacity-60">
                 {item.description}
               </p>
             </div>
           </div>
          ))}
        </div>


        <div className="px-6 pt-40">
          <CategoriesSection />
          <AudioGearHero />
        </div>
      </div>
    </>
  );
}
