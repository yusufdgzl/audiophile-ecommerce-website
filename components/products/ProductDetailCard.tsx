import { ProductsType } from "@/app/category/headphones/page";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailCard(props: ProductsType) {
  const { description, features, images, inTheBox, price, title, type, id } =
    props;

  return (
    <div className="flex flex-col px-6 max-w-[1200px] mx-auto">
      <div
        key={title}
        className=" grid  gap-4   py-12  md:py-20 md:grid-cols-2"
      >
        <Image
          className={` bg-black rounded-xl h-[380px] md:h-auto ${
            id % 2 === 0 && "md:order-2"
          } `}
          src={images.main}
          width={500}
          height={500}
          alt="audio gear"
        />
        <div className="flex flex-col items-left justify-center text-left space-y-6 mx-auto py-4  md:max-w-[500px] md:items-start md:text-left">
          <h2 className="text-3xl font-semibold  md:max-w-[350px] md:text-5xl ">
            {title}
          </h2>
          <p className="text-md  md:max-w-none md:text-xl opacity-60">
            {description}
          </p>
          <p className="text-xl font-semibold">${price}</p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-4 px-4 font-bold bg-gray-200">
              <button>-</button>
              <input
                className="w-10 bg-gray-200 text-center"
                type="text"
                defaultValue={1}
              />
              <button>+</button>
            </div>
            <button className="btn-orange">ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-20 my-14 md:flex-row md:justify-between md:space-y-0 md:items-center ">
        <div className="space-y-6 md:max-w-[600px] ">
          <h2 className="text-2xl font-semibold">FEATURES</h2>
          <p className="opacity-70">{features}</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">IN THE BOX</h2>
          <div className="space-y-2 opacity-70">
            <p>{inTheBox.headphoneUnit}x Headphone Unit</p>
            <p>{inTheBox.earcups}x Replacement Earcups</p>
            <p>{inTheBox.userManual}x User Manual</p>
            <p>{inTheBox.audioCable}x 3.5mm 5m Audio Cable</p>
            <p>{inTheBox.travelBag}x Travel Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
}
