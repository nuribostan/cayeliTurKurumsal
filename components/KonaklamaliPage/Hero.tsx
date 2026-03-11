import Image from "next/image";
import gunubirlik from "@/assets/turlarimiz/konaklamali-hero-bg.webp";
import badge1 from "@/assets/badges/Katman 2.png";
import badge2 from "@/assets/badges/Katman 3.png";
import badge3 from "@/assets/badges/Katman 4.png";
import badge4 from "@/assets/badges/Katman 5.png";
import badge5 from "@/assets/badges/Katman 6.png";

const GunubirlikHero = () => {
  return (
    <div className="GunubirlikTurlar w-full h-[calc(85svh-80px)] flex flex-col items-center justify-start relative pt-20 pb-10 text-white">
      <div className="gunubirlikTurlar-bg w-full h-full absolute top-0 left-0 -z-10">
        <Image
          src={gunubirlik}
          alt="gunubirlikTurlar"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="gunubirlikTurlar-title pt-20 flex flex-col items-center justify-center text-center gap-10">
        <div className="badges-top w-full flex justify-center items-center gap-5">
          <Image src={badge2} alt="badge1" className="w-48 h-full max-sm:w-1/6" />
          <Image src={badge1} alt="badge2" className="w-48 h-full max-sm:w-1/6" />
          <Image src={badge3} alt="badge3" className="w-48 h-full max-sm:w-1/6" />
          <Image src={badge4} alt="badge4" className="w-48 h-full max-sm:w-1/6" />
        </div>
        <div className="badges-bottom">
          <Image src={badge5} alt="badge5" className="w-lg h-full" />
        </div>
      </div>
    </div>
  );
};

export default GunubirlikHero;
