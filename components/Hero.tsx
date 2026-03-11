import van from "@/assets/van.png";
import bed from "@/assets/bed.png";
import plane from "@/assets/plane.png";
import Image from "next/image";
import bg from "@/assets/herobanner.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-[calc(85vh-80px)] lg:h-[calc(85vh-80px)] mt-20 relative overflow-hidden flex items-center justify-center text-center text-white"
    >
      <div className="background absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={bg}
          alt="Hero Banner"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
        {/* Mobilde yazının okunabilirliği için hafif bir karartma eklendi */}
        <div className="absolute inset-0 bg-black/20 lg:hidden"></div>
      </div>
      <div className="hero-content w-full h-full flex flex-col justify-center lg:justify-start items-center lg:items-start gap-10 p-5 lg:pl-24 lg:pt-24 z-10">
        <div className="hero-title flex flex-col justify-center lg:justify-start items-center lg:items-start gap-5 z-10">
          <h1 className="text-4xl lg:text-5xl text-white lg:text-[#1f2c42] font-bold text-center lg:text-start drop-shadow-md lg:drop-shadow-none">
            Hayalinizdeki Turu <br className="hidden md:block" />
            Birlikte Planlayalım
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-200 lg:text-[#263144] font-medium text-center lg:text-start drop-shadow-md lg:drop-shadow-none">
            Günübirlik, konaklamalı ve yurtdışı turlarda <br className="hidden md:block" />
            güvenilir seyahat deneyimi
          </h2>
        </div>

        <div className="hero-tours flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4 z-10 w-full">
          <div className="hero-tours-item w-full sm:w-70 h-auto md:h-20 bg-white rounded-xl flex justify-start items-center p-4 gap-4 shadow-2xl">
            <div className="hero-tours-item-img bg-[#597e59] rounded-full flex justify-center items-center p-2.5 w-12 h-12 md:w-15 md:h-15 shrink-0">
              <Image src={van} alt="" width={60} height={60} className="w-full h-full object-contain" />
            </div>
            <p className="text-lg md:text-xl font-medium text-black">
              Günübirlik Turlar
            </p>
          </div>
          <div className="hero-tours-item w-full sm:w-70 h-auto md:h-20 bg-white rounded-xl flex justify-start items-center p-4 gap-4 shadow-2xl">
            <div className="hero-tours-item-img bg-[#597e59] rounded-full flex justify-center items-center p-2.5 w-12 h-12 md:w-15 md:h-15 shrink-0">
              <Image src={bed} alt="" width={60} height={60} className="w-full h-full object-contain mb-2" />
            </div>
            <p className="text-lg md:text-xl font-medium text-black">
              Konaklamalı Turlar
            </p>
          </div>
          <div className="hero-tours-item w-full sm:w-70 h-auto md:h-20 bg-white rounded-xl flex justify-start items-center p-4 gap-4 shadow-2xl">
            <div className="hero-tours-item-img bg-[#597e59] rounded-full flex justify-center items-center p-2.5 w-12 h-12 md:w-15 md:h-15 shrink-0">
              <Image src={plane} alt="" width={80} height={80} className="w-full h-full object-contain w-30" />
            </div>
            <p className="text-lg md:text-xl font-medium text-black">
              Yurtdışı Turlar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;