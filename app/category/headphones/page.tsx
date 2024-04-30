import CategoriesSection from "@/components/categories/CategoriesSection";
import AudioGearHero from "@/components/main/section/AudioGearHero";

export default function HeadPhones() {
  return (
    <>
      <div className="flex flex-col ">
        <h1 className="bg-black text-3xl font-semibold tracking-wider w-full text-center text-white py-8 xl:py-20 ">
          HEADPHONES
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto">
        <div></div>
        <div className="px-6 pt-40">
          <CategoriesSection />
          <AudioGearHero />
        </div>
      </div>
    </>
  );
}
