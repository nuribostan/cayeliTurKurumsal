import Image from "next/image";
import Link from "next/link";
import pin from "@/assets/mevcutTurlarimiz/icons8-pin-50.png";

const TurCard = ({
  img,
  title,
  url,
  location,
  duration,
}: {
  img: string;
  title: string;
  url: string;
  location: string;
  duration: string;
}) => {
  // Boş string kontrolü - eğer img yoksa placeholder kullan
  const imageSource = img && img.trim() ? img : "/assets/mevcutTurlarimiz/placeholder.webp";
  const validUrl = url && url.trim() ? url : "#";
  
  return (
    <div className="rounded-2xl flex flex-col justify-between items-center gap-5 p-5 shadow-lg bg-white w-full h-full border border-gray-50">
      <div className="w-full h-56 sm:h-64 overflow-hidden rounded-2xl shrink-0">
        <Image
          src={imageSource}
          alt={title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col gap-3 justify-start items-start w-full grow">
        <h2 className="font-bold text-2xl lg:text-3xl text-[#1f2c42] line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-500 font-medium text-sm md:text-base">{duration}</p>
        
        {/* Alt Kısım - Buton ve Konum her zaman en altta hizalı kalır */}
        <div className="flex justify-between items-center w-full gap-4 mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-start items-center gap-2">
            <Image src={pin} alt="pin" width={20} height={20} className="shrink-0" />
            <p className="text-black font-medium text-sm md:text-base line-clamp-1">{location}</p>
          </div>

          <div className="bg-blue-600 text-center py-2 px-4 rounded-lg text-white font-medium hover:bg-blue-500 transition-colors shrink-0">
            <Link className="font-bold text-sm md:text-base" href={validUrl}>
              Turu İncele
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurCard;