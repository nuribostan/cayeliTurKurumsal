import Image from "next/image";
import bus from "@/assets/nedenBiz/icons8-bus-50.png";
import directory from "@/assets/nedenBiz/icons8-directory-50.png";
import notes from "@/assets/nedenBiz/icons8-notes-64.png";
import support from "@/assets/nedenBiz/icons8-support-50.png";

const NedenBiz = () => {
  return (
    <div className="neden-biz w-full flex flex-col items-center justify-center bg-white gap-8 pb-10 pt-10 lg:pt-0 lg:pb-10">
      <div className="neden-biz-title w-[90%] lg:w-[85%] mx-auto flex items-center justify-center lg:justify-start">
        <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold text-center lg:text-left w-full">Neden Biz?</h1>
      </div>

      <div className="neden-biz-content grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-[90%] lg:w-[85%] mx-auto">
        <div className="neden-biz-item flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start rounded-2xl shadow-lg bg-gray-50 p-6 text-center sm:text-left">
          <Image src={directory} alt="rehber" width={50} height={50} className="shrink-0" />
          <div className="neden-biz-item-content flex flex-col gap-1">
            <h2 className="text-lg text-[#1f2c42] font-bold">22 Yıllık Tecrübe</h2>
            <p className="text-gray-600 text-sm">Uzman ve bilgili rehberler eşliğinde keyifli turlar</p>
          </div>
        </div>

        <div className="neden-biz-item flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-center rounded-2xl shadow-lg bg-gray-50 p-6 text-center sm:text-left">
          <Image src={bus} alt="ulasim" width={50} height={50} className="shrink-0" />
          <div className="neden-biz-item-content flex flex-col gap-1 justify-center">
            <h2 className="text-lg text-[#1f2c42] font-bold">Konforlu Ulaşım</h2>
            <p className="text-gray-600 text-sm">Modern ve rahat şartlarda güvenli ulaşım</p>
          </div>
        </div>

        <div className="neden-biz-item flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start rounded-2xl shadow-lg bg-gray-50 p-6 text-center sm:text-left">
          <Image src={notes} alt="program" width={50} height={50} className="shrink-0" />
          <div className="neden-biz-item-content flex flex-col gap-1">
            <h2 className="text-lg text-[#1f2c42] font-bold">Özenli Programlar</h2>
            <p className="text-gray-600 text-sm">Detaylı ve ilgi çekici tur programları</p>
          </div>
        </div>

        <div className="neden-biz-item flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start rounded-2xl shadow-lg bg-gray-50 p-6 text-center sm:text-left">
          <Image src={support} alt="destek" width={50} height={50} className="shrink-0" />
          <div className="neden-biz-item-content flex flex-col gap-1">
            <h2 className="text-lg text-[#1f2c42] font-bold">Sürekli İletişim</h2>
            <p className="text-gray-600 text-sm">Tur öncesi ve sırasında 7/24 destek</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NedenBiz;