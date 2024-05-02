"use client";

import ProductDetailCard from "@/components/products/ProductDetailCard";
import { getProduct } from "@/components/util/http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", params.detail],
    queryFn: () => getProduct({ id: params.detail }),
  });

  console.log(data);

  return <div> <ProductDetailCard {...data}/> </div>;
}
