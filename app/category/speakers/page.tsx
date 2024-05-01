"use client";

import CategoriesSection from "@/components/categories/CategoriesSection";
import AudioGearHero from "@/components/main/section/AudioGearHero";
import { ProductsType } from "../headphones/page";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/components/util/http";
import ProductCard from "@/components/products/ProductCard";

export default function Speakers() {

  const { data, isPending, isError, error } = useQuery<ProductsType[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const speakers = data?.filter((item)=> item.type === "speakers");

  return (
    <>
      <div className="flex flex-col ">
        <h1 className="bg-black text-3xl font-semibold tracking-wider w-full text-center text-white py-8 xl:py-20 ">
          SPEAKERS
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto">
        <div>
        {speakers?.map((item) => (
          <ProductCard key={item.id} {...item}/>
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
