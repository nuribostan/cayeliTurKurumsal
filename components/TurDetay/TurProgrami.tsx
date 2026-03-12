import GezilecekYerler from "./GezilecekYerler";
import Tavsiyeler from "./Tavsiyeler";
import TurListItem from "./TurListItem";
import Image from "next/image";

interface TurProgramiProps {
  tur:
    | {
        turName: string;
        gezilecekYerler: Array<{ id: number; desc: string }>;
        tavsiyeler: Array<{ id: number; desc: string }>;
        list: Array<{ id: number; desc: string }>;
        turFotograflari?: {
          anaResim: string;
          galeri: Array<{ id: number; url: string }>;
        };
      }
    | undefined;
}

const TurProgrami = ({ tur }: TurProgramiProps) => {
  console.log("Gelen Tur Verisi:", tur);
  return (
    <div className="w-[90%] lg:w-[85%] mx-auto py-12 lg:py-10 flex flex-col gap-8 lg:gap-10">
      <h1 className="text-3xl md:text-4xl lg:text-4xl text-[#1f2c42] font-bold border-b border-gray-200 pb-4 max-md:text-center">
        Tur Programı
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        {/* Sol Kolon: Tur Listesi */}
        <div className="lg:col-span-2 order-1">
          <ul className="flex flex-col w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-2 lg:p-6">
            {tur?.list.map((item, index) => (
              <TurListItem key={index} desc={item.desc} />
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1 lg:row-span-2 order-2 flex flex-col gap-6 lg:sticky lg:top-24">
          <GezilecekYerler tur={tur} />
          <Tavsiyeler tur={tur} />
        </div>

        {tur?.turFotograflari && (
          <div className="lg:col-span-2 order-3 flex flex-col gap-6 pt-6 lg:pt-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#1f2c42] font-bold border-b border-gray-200 pb-2 max-md:text-center">
              Tur Fotoğrafları
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative col-span-2 row-span-2 h-56 sm:h-64 lg:h-80 overflow-hidden rounded-2xl shadow-md bg-gray-100">
                <Image
                  src={tur.turFotograflari.anaResim}
                  alt={`${tur.turName || "Tur"} Ana Fotoğrafı`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {tur.turFotograflari.galeri.map((foto) => (
                <div
                  key={foto.id}
                  className="relative h-28 sm:h-32 lg:h-36 overflow-hidden rounded-2xl shadow-md bg-gray-100"
                >
                  <Image
                    src={foto.url}
                    alt={`Tur Fotoğrafı ${foto.id}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TurProgrami;
