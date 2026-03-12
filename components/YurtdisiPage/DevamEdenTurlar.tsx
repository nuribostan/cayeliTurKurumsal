"use client";

import { useFetchData } from "@/hooks/useFetchData";
import DevamEdenTurListGrid from "../DevamEdenTurList";

const DevamEdenTurlar = () => {
  const {
    data: turlar,
    loading,
    error,
  } = useFetchData(
    "https://raw.githubusercontent.com/nuribostan/cayeliTurKurumsalData/refs/heads/main/devamEdenTurlar/yurtDisiTurlar.json",
  );

  if (loading)
    return (
      <div className="text-center py-20 text-xl">Turlar yükleniyor...</div>
    );
  if (error)
    return <div className="text-center py-20 text-red-500">Hata: {error}</div>;

  return (
    <div className=" bg-white w-full h-auto flex flex-col items-start justify-center pb-20 pt-0 gap-10">
      <div className="gunubirlik-turlar-title  w-[85%] m-auto">
        <h1 className="text-4xl text-[#1f2c42] font-bold max-md:text-center">
          Güncel Popüler Turlarımız
        </h1>
      </div>

      {turlar && turlar.length > 0 ? (
        <DevamEdenTurListGrid data={turlar} />
      ) : (
        <p>Şu an gösterilecek tur bulunmuyor.</p>
      )}
    </div>
  );
};

export default DevamEdenTurlar;
