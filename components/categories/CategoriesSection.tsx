import Image from "next/image";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";


export default function CategoriesSection(){
    return(
        <div className="grid space-y-14 gap-4 pb-20 px-4 md:grid-cols-3 md:space-y-0 ">
        <Link href="/category/headphones">
          <div className="flex flex-col rounded-md justify-center items-center relative py-6 space-y-2 bg-[#dfd5d54b] transition-all group hover:bg-[#eeeeee]">
            <Image
              src="/images/headphone.png"
              className="absolute md:w-[250px] -top-16"
              width={200}
              height={200}
              alt="headphone"
            />
            <h2 className="pt-12 md:pt-24 tracking-wider text-sm font-semibold">HEADPHONES</h2>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-semibold opacity-60 group-hover:text-[#e38962] group-hover:opacity-100">
                SHOP
              </p>
              <GoChevronRight className="w-5 h-5 text-[#e38962]" />
            </div>
          </div>
        </Link>

        <Link href="/category/speakers">
          <div className="flex flex-col rounded-md justify-center items-center relative py-6 space-y-2 bg-[#dfd5d54b] transition-all group hover:bg-[#eeeeee]">
            <Image
              src="/images/speakers.png"
              className="absolute md:w-[250px] -top-24"
              width={200}
              height={200}
              alt="speakers"
            />
            <h2 className="pt-12 md:pt-24 tracking-wider text-sm font-semibold">SPEAKERS</h2>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-semibold opacity-60 group-hover:text-[#e38962] group-hover:opacity-100">
                SHOP
              </p>
              <GoChevronRight className="w-5 h-5 text-[#e38962]" />
            </div>
          </div>
        </Link>

        <Link href="/category/earphones">
          <div className="flex flex-col rounded-md justify-center items-center relative py-6 space-y-2 bg-[#dfd5d54b] transition-all group hover:bg-[#eeeeee]">
            <Image
              src="/images/earphone.png"
              className="absolute md:w-[250px] -top-24 md:-top-24"
              width={200}
              height={200}
              alt="earphone"
            />
            <h2 className="pt-12 md:pt-24 tracking-wider text-sm font-semibold">EARPHONES</h2>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-semibold opacity-60 group-hover:text-[#e38962] group-hover:opacity-100">
                SHOP
              </p>
              <GoChevronRight className="w-5 h-5 text-[#e38962]" />
            </div>
          </div>
        </Link>
      </div>
    )
}