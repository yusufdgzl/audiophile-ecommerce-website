"use client";

import CategoriesSection from "@/components/categories/CategoriesSection";
import AudioGearHero from "@/components/main/section/AudioGearHero";
import ProductCard from "@/components/products/ProductCard";
import { getProducts } from "@/components/util/http";


import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export type ProductsType = {
  title: string;
  description: string;
  price: number;
  type: string;
  id: number;
  features: string;
  inTheBox: {
    headphoneUnit: number;
    earcups: number;
    userManual: number;
    audioCable: number;
    travelBag: number;
  };
  images: {
    main: string;
  };
};

export default function HeadPhones() {
  const { data, isPending, isError, error } = useQuery<ProductsType[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  

  return (
    <>
      <div className="flex flex-col  ">
        <h1 className="bg-black text-3xl font-semibold tracking-wider w-full text-center text-white py-8 xl:py-20 ">
          HEADPHONES
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto ">
        <div className=" -space-y-40">
          {data?.map((item) => (
          <ProductCard key={item.id} {...item}/>
          ))}
        </div>

        <div className="px-6  pt-20 md:pt-40">
          <CategoriesSection />
          <AudioGearHero />
        </div>
      </div>
    </>
  );
}
