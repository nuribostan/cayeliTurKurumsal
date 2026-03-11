import Image from "next/image";
import gunubirlik from "@/assets/turlarimiz/gunurbirlik-hero-bg.webp";
import badge1 from "@/assets/badges/Katman 2.png";
import badge2 from "@/assets/badges/Katman 3.png";
import badge3 from "@/assets/badges/Katman 4.png";
import badge4 from "@/assets/badges/Katman 5.png";
import badge5 from "@/assets/badges/Katman 6.png";

const GunubirlikHero = () => {
  return (
    <div className="GunubirlikTurlar w-full min-h-[calc(85vh-80px)] lg:h-[calc(85vh-80px)] mt-10 flex flex-col items-center justify-start relative pt-12 px-4 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={gunubirlik}
          alt="gunubirlikTurlar"
          className="object-cover w-full h-full"
          quality={100}
          priority
        />
        {/* Mobilde rozetlerin belirgin olması için hafif siyah katman */}
        <div className="absolute inset-0 bg-black/30 lg:bg-black/10"></div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center text-center gap-6 lg:gap-10 w-full max-w-6xl mx-auto mt-10 lg:mt-20">
        <div className="flex justify-center items-center gap-3 lg:gap-5 flex-wrap w-full">
          <Image src={badge2} alt="badge1" className="w-24 sm:w-32 md:w-40 lg:w-40 object-contain" />
          <Image src={badge1} alt="badge2" className="w-24 sm:w-32 md:w-40 lg:w-40 object-contain" />
          <Image src={badge3} alt="badge3" className="w-24 sm:w-32 md:w-40 lg:w-40 object-contain" />
          <Image src={badge4} alt="badge4" className="w-24 sm:w-32 md:w-40 lg:w-40 object-contain" />
        </div>
        <div className="w-full flex justify-center mt-4">
          <Image src={badge5} alt="badge5" className="w-64 sm:w-80 md:w-96 lg:w-90 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default GunubirlikHero;