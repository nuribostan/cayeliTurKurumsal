import TurKapsamlari from "../TurKapsamlari";
import TurUyari from "../TurUyari";
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
  return (
    <div className="w-[90%] lg:w-[85%] mx-auto py-12 lg:py-10 flex flex-col gap-4 lg:gap-4">
      <h2 className="text-xl lg:text-2xl font-bold text-[#1f2c42] border-b border-gray-200 pb-2 max-md:text-center">
        Tur Programı
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-5 items-start">
        {/* Sol Kolon: Tur Listesi */}
        <div className="lg:col-span-2 order-1 ">
          <ul className="flex flex-col w-full bg-white rounded-2xl border border-gray-200 p-2 lg:p-6 shadow-2xl">
            {tur?.list.map((item, index) => (
              <TurListItem key={index} desc={item.desc} />
            ))}
          </ul>

          <TurKapsamlari />
          {tur?.turFotograflari && (
            <div className="lg:col-span-2 order-3  flex-col gap-6 pt-6 lg:pt-0 mt-8 hidden md:flex">
              <h2 className="text-xl lg:text-2xl font-bold text-[#1f2c42] border-b border-gray-200 pb-2 max-md:text-center">
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
                    className="relative h-full overflow-hidden rounded-2xl shadow-md bg-gray-100"
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

        {tur?.turFotograflari && (
          <div className="lg:col-span-2 order-3  flex-col gap-6 pt-0 lg:pt-0 mt-8 flex md:hidden">
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
                  className="relative h-44 overflow-hidden rounded-2xl shadow-md bg-gray-100"
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

        <div className="lg:col-span-1 lg:row-span-2 order-2 flex flex-col gap-6 lg:sticky lg:top-24">
          <GezilecekYerler tur={tur} />
          <Tavsiyeler tur={tur} />
          <TurUyari />
        </div>
      </div>
    </div>
  );
};

export default TurProgrami;
