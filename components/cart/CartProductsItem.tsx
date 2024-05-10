import { ProductsType } from "@/app/category/headphones/page";
import Image from "next/image";
import Link from "next/link";

export default function CartProductsItem(props:ProductsType){

    const {images,title,price,amount,id} = props;

    return(
        <div className="flex justify-between items-center">
        <Link href={`/product/${id}`} className="flex group items-center space-x-4">
          <Image
            src={images.main}
            className=" rounded-xl group-hover:scale-105 duration-300"
            alt='products'
            width={64}
            height={64}
          />
          <div>
            <p className="group-hover:text-orange-500">{title.substring(0,4)}</p>
            <p className=" opacity-60">${price}</p>
          </div>
        </Link>
        <p className=" opacity-70">x{amount}</p>
      </div>
    )
}