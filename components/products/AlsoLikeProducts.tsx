"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getProducts } from "../util/http";
import { ProductsType } from "@/app/category/headphones/page";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function AlsoLikeProducts() {
  const params = useParams();

  const { data } = useQuery<ProductsType[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const isNotExists = data?.filter((item) => item.id !== +params.detail);

  return (
    <>
      <h2 className="text-3xl font-semibold text-center py-6 md:mt-16">
        YOU MAY ALSO LİKE
      </h2>
      <div className="grid md:grid-cols-3  p-4 space-y-10 h-[1500px]  md:h-[530px] gap-2 overflow-hidden md:mb-14 md:space-y-0 md:py-20">
        {isNotExists?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-6 items-center justify-center"
          >
            <Image
              src={item.images.main}
              width={600}
              height={600}
              alt="xx59"
              className="h-80 w-80 rounded-xl"
            />
            <h2 className="text-2xl font-semibold">XX59</h2>
            <Link href={`/product/${item.id}`} className="btn-orange">
              SEE PRODUCT
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
