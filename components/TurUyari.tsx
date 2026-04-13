"use client";

import { useFetchData } from "@/hooks/useFetchData";
import { useParams } from "next/navigation";

interface TurMadde {
  id: number;
  desc: string;
}

interface TurData {
  turURL: string;
  turName: string;
  uyarilar?: TurMadde[];
}

const TurUyari = () => {
  const params = useParams();

  const activeTurURL = params?.tur_ismi ? params?.tur_ismi : params?.transfer_ismi as string;


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
    <div className="flex flex-col justify-start items-start gap-4 p-6 shadow-lg bg-white border border-gray-200 rounded-2xl">
      <div
        className={`left-col w-full h-full flex flex-col justify-start items-start gap-4 p-2 `}
      >
        <h2 className="text-xl lg:text-2xl font-bold text-[#1f2c42] w-full border-b border-gray-200 pb-4">
          ❗ Uyarılar
        </h2>
        <ul className="flex flex-col gap-2 w-full">
          {seciliTur.uyarilar && seciliTur.uyarilar.length > 0 ? (
            seciliTur.uyarilar.map((item) => (
              <li
                key={item.id}
                className="flex justify-start items-start gap-3 w-full"
              >
                <span className="rounded-full w-2 h-2 bg-green-500 shrink-0 mt-2"></span>
                <p className="text-base text-gray-800 leading-relaxed font-medium text-justify">
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

export default TurUyari;
