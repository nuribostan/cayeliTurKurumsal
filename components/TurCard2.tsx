import Image from "next/image";
import Link from "next/link";
import pin from "@/assets/mevcutTurlarimiz/icons8-pin-50.png";

const TurCard2 = ({
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
  const imageSource =
    img && img.trim() ? img : "/assets/mevcutTurlarimiz/placeholder.webp";
  const validUrl = url && url.trim() ? url : "#";

  return (
    <div className="mevcutTurlarimiz-card rounded-2xl flex flex-col  justify-center items-center gap-5 p-5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] w-full shrink-0 max-md:w-full h-120">
      <div className="mevcutTurlarimiz-card-img w-full h-full">
        <Image
          src={imageSource}
          alt=""
          className="object-cover w-full h-80 rounded-2xl"
          width={500}
          height={500}
        />
      </div>
      <div className="mevcutTurlarimiz-card-desc flex flex-col gap-2 justify-start items-start w-full">
        <h2 className="mevcutTurlarimiz-card-title font-bold text-2xl text-[#1f2c42]">
          {title}
        </h2>
        <p className="text-gray-400">{duration}</p>
        <div className="flex justify-between items-center w-full gap-10">
          <div className="flex justify-center items-center gap-2.5">
            <Image src={pin} alt="pin" width={20} height={20} />
            <p className="text-black font-medium">{location}</p>
          </div>

          <div className="mevcutTurlarimiz-card-button bg-blue-600 w-1/2  text-center py-2 rounded-lg text-white font-medium hover:bg-blue-500 transition-colors">
            <Link className="font-bold" href={validUrl}>
              Turları İncele
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurCard2;
