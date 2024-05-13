"use client";

import CategoriesSection from "@/components/categories/CategoriesSection";
import AudioGearHero from "@/components/main/section/AudioGearHero";
import { ProductsType } from "../headphones/page";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/components/util/http";
import ProductCard from "@/components/products/ProductCard";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

export default function Speakers() {

  const { data, isPending, isError, error } = useQuery<ProductsType[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const speakers = data?.filter((item)=> item.type === "speakers");

  let content;

  if (isPending) {
    content = (
      <ul>
        <LoadingIndicator/>
      </ul>
    );
  }

  if (isError) {
    content = (
      <ul>
        <p>{error.message}</p>
      </ul>
    );
  }

  if (data) {
    content = (
      <>
      <div className="flex flex-col ">
        <h1 className="bg-black text-3xl font-semibold tracking-wider w-full text-center text-white py-8 xl:py-20 ">
          EARPHONES
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto">
        <div>
        {speakers?.map((item) => (
          <ProductCard key={item.id} {...item}/>
          ))}
        </div>
        <div className="px-6 pt-40">
          <CategoriesSection/>
          <AudioGearHero />
        </div>
      </div>
    </>
    )
  }

  return content;
}
