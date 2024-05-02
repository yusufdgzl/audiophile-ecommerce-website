import { ProductsType } from "@/app/category/headphones/page";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailCard(props: ProductsType) {

  const { description, features, images, inTheBox, price, title, type, id } = props;


  

  return (
    <div
      key={title}
      className=" grid  gap-4  px-6 md:px-20 py-12  md:py-20 md:grid-cols-2"
    >
      <Image
        className={` bg-black rounded-xl h-[380px] md:h-auto ${id % 2 === 0  && 'md:order-2'} `}
        src={images.main}
        width={500}
        height={500}
        alt="audio gear"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-6 mx-auto py-4  md:max-w-[500px] md:items-start md:text-left">
        <h2 className="text-3xl font-semibold max-w-[300px] md:max-w-[350px] md:text-5xl ">{title}</h2>
        <p className="text-md max-w-[380px] md:max-w-none md:text-xl opacity-60">{description}</p>
        <Link href={`/product/${id}`} className="btn-orange">SEE PRODUCT</Link>
      </div>
    
    </div>
  );
}
