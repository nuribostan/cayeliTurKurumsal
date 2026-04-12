import Image from "next/image";
import bg from "@/assets/urunDetay/urun_detay_ayder.png";
import pin from "@/assets/pin2.png";
import tl from "@/assets/tl.png";
import bus from "@/assets/bus2.png";
import Link from "next/link";
import phone from "@/assets/icons8-phone-30.png";
import wp from "@/assets/icons8-whatsapp-48.png";

interface TurProgramiProps {
  tur:
    | {
        turName: string;
        turType: string;
        turBanner: string;
        location: string;
        kalkis: string;
        kalkis_saat_1?: string;
        kalkis_saat_2?: string;
        kalkis_saat_3?: string;
        fiyat?: string;
        donus_saat?: string;
        list: Array<{ id: number; desc: string }>;
      }
    | undefined;
}

const TurDetayHero = ({ tur }: TurProgramiProps) => {
  const saatListesi = [
    tur?.kalkis_saat_1,
    tur?.kalkis_saat_2,
    tur?.kalkis_saat_3,
    tur?.donus_saat,
  ].filter(Boolean);

  const gridClass =
    saatListesi.length === 4 ? "xl:grid-cols-4" : "xl:grid-cols-3";

  const contactCardWidth =
    saatListesi.length === 4
      ? "lg:w-[280px] xl:w-[290px]"
      : "lg:w-[320px] xl:w-[350px]";

  return (
    <div className="turDetay-hero w-full relative flex flex-col pb-0 mt-20">
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[calc(85vh-80px)]">
        <Image
          src={tur?.turBanner || bg}
          alt={tur?.turName || "Tur"}
          fill
          priority
          className="object-cover object-[0%_90%]"
        />
        <div className="absolute inset-0 bg-black/30 lg:bg-black/10"></div>

        <div className="absolute top-1/7 sm:top-1/4 left-[5%] lg:left-[7.5%] z-10 w-[90%]">
          <h1 className="text-shadow-lg text-shadow-black  text-4xl md:text-5xl lg:text-6xl text-white font-bold flex flex-col lg:flex-row items-start lg:items-end gap-2 lg:gap-4 drop-shadow-lg lg:drop-shadow-none">
            <span>{tur?.turName}</span>
            <span className="font-medium text-white text-2xl md:text-3xl lg:text-4xl">
              {tur?.turType}
            </span>
          </h1>
        </div>

        <div className="absolute top-1/2 lg:top-1/3 mt-0 lg:mt-10 left-[5%] lg:left-[7.5%] flex flex-col sm:flex-row items-start sm:items-center gap-4 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 sm:py-3 rounded-xl flex items-center gap-3 shadow-lg min-w-38">
            <Image
              src={pin}
              alt="pin"
              width={24}
              height={24}
              className="shrink-0 sm:w-6 sm:h-6 w-4 h-4"
            />
            <h4 className="text-[#1f2c42] font-bold text-[12px] md:text-lg">
              {tur?.location}
            </h4>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 sm:py-3 rounded-xl flex items-center gap-3 shadow-lg min-w-38">
            <Image
              src={bus}
              alt="bus"
              width={24}
              height={24}
              className="shrink-0 sm:w-6 sm:h-6 w-4 h-4"
            />
            <h4 className="text-[#1f2c42] font-bold text-[12px] md:text-lg">
              {tur?.kalkis}
            </h4>
          </div>

          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 sm:py-3 rounded-xl flex items-center gap-3 shadow-lg min-w-38">
            <Image
              src={tl}
              alt="tl"
              width={24}
              height={24}
              className="shrink-0 sm:w-6 sm:h-6 w-4 h-4"
            />
            <h4 className="text-[#1f2c42] font-bold text-[12px] md:text-lg">
              {tur?.fiyat} TL
            </h4>
          </div>
        </div>
      </div>

      <div className="w-[90%] lg:w-[95%] mx-auto relative z-20 -mt-12 md:mt-6 lg:-mt-10 xl:-mt-30 flex flex-col lg:flex-row justify-between items-end gap-6 lg:gap-8 xl:gap-10">
        <div
          className={`w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 ${gridClass} gap-3 xl:gap-4 max-[769px]:mt-16`}
        >
          {saatListesi.map((saat, idx) => (
            <div
              key={idx}
              className="bg-white p-3 xl:px-2 xl:py-4 rounded-2xl flex justify-center items-center gap-2 shadow-xl border border-gray-100"
            >
              <Image
                src={bus}
                alt="bus"
                width={22}
                height={22}
                className="shrink-0"
              />
              <h4 className="text-[#1f2c42] font-bold text-[13px] 2xl:text-sm text-center whitespace-nowrap">
                {saat as string}
              </h4>
            </div>
          ))}
        </div>

        {/* Rezervasyon Kartı (Sağ Taraf) */}
        {/* contactCardWidth değişkeni ile dinamik genişlik veriyoruz */}
        <div
          className={`w-full ${contactCardWidth} shrink-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 flex flex-col items-center justify-center gap-4 transition-all duration-300`}
        >
          <h4 className="text-[#1f2c42] font-bold text-base lg:text-lg xl:text-xl text-center">
            Bilgi ve Rezervasyon İçin
          </h4>

          <div className="flex justify-center items-center gap-2 xl:gap-3">
            <Image src={phone} alt="phone" width={28} height={28} />
            <Link
              href="tel:05300735242"
              className="text-[#1f2c42] font-bold text-lg xl:text-2xl hover:text-blue-600 transition-colors"
            >
              0 530 073 52 42
            </Link>
          </div>

          <Link
            href="https://wa.me/905300735242"
            className="bg-[#008236] hover:bg-[#006b2c] transition-colors w-full rounded-xl py-3 xl:py-4 flex flex-col justify-center items-center gap-1 shadow-lg mt-1"
          >
            <div className="flex justify-center items-center gap-2">
              <Image src={wp} alt="whatsapp" width={24} height={24} />
              <h2 className="text-white font-bold text-lg xl:text-xl">
                WhatsApp
              </h2>
            </div>
            <h4 className="text-white font-medium text-xs xl:text-sm">
              Üzerinden Bilgi Alın
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TurDetayHero;
