"use client";

import { useFetchData } from "@/hooks/useFetchData";
import { useParams } from "next/navigation";

// Veri tipleri
interface TurMadde {
  id: number;
  desc: string;
}

interface TurData {
  turURL: string;
  turName: string;
  dahilOlanlar?: TurMadde[];
  dahilOlmayanlar?: TurMadde[];
}

const TurKapsamlari = () => {
  const params = useParams();
  const activeTurURL = params?.tur_ismi as string;

  const {
    data: turlar,
    loading,
    error,
  } = useFetchData(
    "https://raw.githubusercontent.com/nuribostan/cayeliTurKurumsalData/refs/heads/main/turDetayList.json",
  );

  if (loading)
    return (
      <div className="text-center py-20 text-xl">Turlar yükleniyor...</div>
    );
  if (error)
    return <div className="text-center py-20 text-red-500">Hata: {error}</div>;

  const seciliTur = (turlar as TurData[])?.find(
    (tur) => tur.turURL === activeTurURL,
  );

  if (!seciliTur) {
    return (
      <div className="text-center py-20 text-xl">
        Bu tura ait kapsam bilgisi bulunamadı.
      </div>
    );
  }

 return (

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full pt-5 bg-white">

      <div className="flex flex-col justify-start items-start gap-4 p-10 shadow-lg bg-white border border-gray-200 rounded-2xl">
        <h2 className="text-2xl font-bold text-[#1f2c42] border-b border-gray-200 pb-4 w-full">
          ✔️ Ücrete Dahil Olanlar
        </h2>
        <ul className="flex flex-col gap-2 w-full">
          {seciliTur.dahilOlanlar && seciliTur.dahilOlanlar.length > 0 ? (
            seciliTur.dahilOlanlar.map((item) => (
              <li
                key={item.id}
                className="flex justify-start items-start gap-3 w-full"
              >
                <span className="rounded-full w-2 h-2 bg-green-500 shrink-0 mt-2"></span>
                <p className="text-lg md:text-lg text-gray-700 font-medium">
                  {item.desc}
                </p>
              </li>
            ))
          ) : (
            <p className="text-lg text-gray-500">Bu bilgi henüz eklenmemiş.</p>
          )}
        </ul>
      </div>

      {/* --- TURA DAHİL OLMAYANLAR BÖLÜMÜ --- */}
      {/* Aynı şekilde w-full ve h-full silindi */}
      <div className="flex flex-col justify-start items-start gap-4 p-10 shadow-lg bg-white border border-gray-200 rounded-2xl">
        <h2 className="text-2xl font-bold text-[#1f2c42] border-b border-gray-200 pb-4 w-full">
          ❌ Ücrete Dahil Olmayanlar
        </h2>
        <ul className="flex flex-col gap-2 w-full">
          {seciliTur.dahilOlmayanlar && seciliTur.dahilOlmayanlar.length > 0 ? (
            seciliTur.dahilOlmayanlar.map((item) => (
              <li
                key={item.id}
                className="flex justify-start items-start gap-3 w-full"
              >
                <span className="rounded-full w-2 h-2 bg-red-500 shrink-0 mt-2"></span>
                <p className="text-lg md:text-lg text-gray-700 font-medium">
                  {item.desc}
                </p>
              </li>
            ))
          ) : (
            <p className="text-lg text-gray-500">Bu bilgi henüz eklenmemiş.</p>
          )}
        </ul>
      </div>

    </div>
  );
};

export default TurKapsamlari;