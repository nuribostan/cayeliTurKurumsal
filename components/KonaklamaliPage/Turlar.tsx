'use client'

import TurListGrid from "../TurListGrid";
import { useFetchData } from "@/hooks/useFetchData";

const Turlar = () => {
  const { data: turlar, loading, error } = useFetchData(
    "https://raw.githubusercontent.com/nuribostan/cayeliTurKurumsalData/refs/heads/main/konaklamaliTurlar.json" 
  );

  if (loading) return <div className="text-center py-20 text-xl">Turlar yükleniyor...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Hata: {error}</div>;

  return (
    <div className="bg-white w-full h-auto flex flex-col items-center justify-center pt-12 lg:pt-10 gap-8 lg:gap-10">
      <div className="w-[90%] lg:w-[85%] mx-auto flex items-center justify-center lg:justify-start">
        <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold text-center lg:text-center border-b border-gray-200 pb-4 w-full">
          Konaklamalı Turlarımız
        </h1>
      </div>

      {turlar && turlar.length > 0 ? (
        <TurListGrid data={turlar} />
      ) : (
        <p>Şu an gösterilecek tur bulunmuyor.</p>
      )}
    </div>
  );
};

export default Turlar;
