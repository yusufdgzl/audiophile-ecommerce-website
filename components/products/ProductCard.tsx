import { ProductsType } from "@/app/category/headphones/page";
import Image from "next/image";

export default function ProductCard(props: ProductsType) {

  const { description, features, images, inTheBox, price, title, type } = props;

  

  return (
    <div
      key={title}
      className=" grid  gap-4  px-6 md:px-20 md:py-40 md:grid-cols-2"
    >
      <Image
        className=" bg-black rounded-xl h-[380px] md:h-auto  "
        src={images.main}
        width={500}
        height={500}
        alt="audio gear"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-6 mx-auto py-4  md:max-w-[500px] md:items-start md:text-left">
        <h2 className="text-3xl font-semibold max-w-[300px] md:text-4xl ">{title}</h2>
        <p className="text-md max-w-[380px] md:text-xl opacity-60">{description}</p>
        <button className="btn-orange">SEE PRODUCT</button>
      </div>
    
    </div>
  );
}
