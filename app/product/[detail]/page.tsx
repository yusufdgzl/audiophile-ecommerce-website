"use client";

import { ProductsType } from "@/app/category/headphones/page";
import ProductDetailCard from "@/components/products/ProductDetailCard";
import { getProduct } from "@/components/util/http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();

  const { data, isPending, isError, error } = useQuery<ProductsType[]>({
    queryKey: ["products", params.detail],
    queryFn: () => getProduct({ id: params.detail }),
  });

  let content;

  if (isPending) {
    content = (
      <ul>
        <p>Loading...</p>
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
    content = <div>{data.map((item)=> <ProductDetailCard {...item}/>)}</div>;
  }

  return <div> {content} </div>;
}
