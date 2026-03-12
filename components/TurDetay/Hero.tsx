import Image from "next/image";
import bg from "@/assets/urunDetay/urun_detay_ayder.png";
import pin from "@/assets/pin2.png";
import bus from "@/assets/bus2.png";
import Link from "next/link";
import phone from "@/assets/icons8-phone-30.png";
import wp from "@/assets/icons8-whatsapp-48.png";

interface TurProgramiProps {
  tur:
    | {
        turName: string;
        turType: string;
        location: string;
        kalkis: string;
        kalkis_saat_1: string;
        kalkis_saat_2: string;
        donus_saat: string;
        list: Array<{ id: number; desc: string }>;
      }
    | undefined;
}

const TurDetayHero = ({ tur }: TurProgramiProps) => {
  return (
    <div className="turDetay-hero w-full relative flex flex-col pb-0 mt-20">
      {/* Resim ve Ana Başlık Alanı */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[calc(85vh-80px)]">
        <Image src={bg} alt={tur?.turName || "Tur"} fill priority className="object-cover object-[0%_90%]" />
        {/* Yazıların okunabilmesi için hafif karartma */}
        <div className="absolute inset-0 bg-black/30 lg:bg-black/10"></div> 

        <div className="absolute top-1/4 left-[5%] lg:left-[7.5%] z-10 w-[90%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white lg:text-[#1f2c42] font-bold flex flex-col lg:flex-row items-start lg:items-end gap-2 lg:gap-4 drop-shadow-lg lg:drop-shadow-none">
            <span>{tur?.turName}</span>
            <span className="font-medium text-gray-200 lg:text-[#4d6489] text-2xl md:text-3xl lg:text-4xl">{tur?.turType}</span>
          </h1>
        </div>

        <div className="absolute top-1/2 lg:top-1/3 mt-6 lg:mt-10 left-[5%] lg:left-[7.5%] flex flex-col sm:flex-row items-start sm:items-center gap-4 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl flex items-center gap-3 shadow-lg">
            <Image src={pin} alt="pin" width={24} height={24} className="shrink-0" />
            <h4 className="text-[#1f2c42] font-bold text-sm md:text-lg">{tur?.location}</h4>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl flex items-center gap-3 shadow-lg">
            <Image src={bus} alt="bus" width={24} height={24} className="shrink-0" />
            <h4 className="text-[#1f2c42] font-bold text-sm md:text-lg">{tur?.kalkis}</h4>
          </div>
        </div>
      </div>

      {/* Alt Rozetler ve Whatsapp İletişim Kartı */}
      {/* Resmin üzerine hafif taşması için -mt-16 kullanıldı */}
      <div className="w-[90%] lg:w-[95%] mx-auto relative z-20 -mt-12 lg:-mt-30 flex flex-col lg:flex-row justify-between items-end gap-6 lg:gap-10">
        
        {/* Saat Rozetleri (Sol Taraf) */}
        <div className="w-full lg:w-full grid grid-cols-1 sm:grid-cols-3 gap-4 max-[769px]:mt-16">
          {[tur?.kalkis_saat_1, tur?.kalkis_saat_2, tur?.donus_saat].map((saat, idx) => (
            saat && (
              <div key={idx} className="bg-white p-4 lg:p-5 rounded-2xl flex justify-center items-center gap-3 shadow-xl border border-gray-100">
                <Image src={bus} alt="bus" width={24} height={24} className="shrink-0" />
                <h4 className="text-[#1f2c42] font-bold text-sm lg:text-base text-center">{saat}</h4>
              </div>
            )
          ))}
        </div>

        {/* Rezervasyon Kartı (Sağ Taraf) */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 flex flex-col items-center justify-center gap-4">
          <h4 className="text-[#1f2c42] font-bold text-lg lg:text-xl text-center">Bilgi ve Rezervasyon İçin</h4>
          
          <div className="flex justify-center items-center gap-3">
            <Image src={phone} alt="phone" width={32} height={32} />
            <Link href="tel:05300735242" className="text-[#1f2c42] font-bold text-xl lg:text-2xl hover:text-blue-600 transition-colors">
              0 530 073 52 42
            </Link>
          </div>

          <Link href="https://wa.me/905300735242" className="bg-[#008236] hover:bg-[#006b2c] transition-colors w-full rounded-xl py-4 flex flex-col justify-center items-center gap-1 shadow-lg mt-2">
            <div className="flex justify-center items-center gap-2">
              <Image src={wp} alt="whatsapp" width={28} height={28} />
              <h2 className="text-white font-bold text-xl">WhatsApp</h2>
            </div>
            <h4 className="text-white font-medium text-sm">Üzerinden Bilgi Alın</h4>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TurDetayHero;