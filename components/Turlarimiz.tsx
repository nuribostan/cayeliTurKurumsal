import gunubirlik from "@/assets/turlarimiz/la-so-vk4vjTNVrTg-unsplash.jpg";
import konaklamali from "@/assets/turlarimiz/bjorn-snelders-PeLkhi_B3wI-unsplash.jpg";
import yurtdisi from "@/assets/turlarimiz/clay-banks-hi_52O-h5G8-unsplash.jpg";
import Image from "next/image";
import Link from "next/link";

const Turlarimiz = () => {
  return (
    <section className="turlarimiz bg-white w-full h-fit py-10 lg:py-10 flex flex-col gap-10">
      <div className="turlarimiz-title text-left w-[90%] lg:w-[85%] mx-auto">
        <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold">
          Turlarımız
        </h1>
      </div>

      <div className="turlarimiz-grid flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-10 w-[85%]  mx-auto">
        {/* Kart 1 */}
        <div className="turlarimiz-card rounded-2xl flex flex-col justify-between items-center gap-5 p-5 shadow-xl w-full lg:w-1/3">
          <div className="turlarimiz-card-img w-full h-64">
            <Image
              src={gunubirlik}
              alt="Günübirlik Turlar"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div className="turlarimiz-card-desc flex flex-col gap-2 justify-start items-start w-full grow">
            <h2 className="turlarimiz-card-title font-bold text-2xl md:text-3xl text-[#1f2c42]">
              Günübirlik Turlar
            </h2>
            <p className="w-full text-left text-black font-medium flex items-center gap-3">
              <span className="rounded-full w-2 h-2 bg-black shrink-0"></span>{" "}
              Şehir kaçamakları
            </p>
            <p className="w-full text-left text-black font-medium flex items-center gap-3">
              <span className="rounded-full w-2 h-2 bg-black shrink-0"></span>{" "}
              Kültür & doğa turları
            </p>
            <p className="w-full text-left text-black font-medium flex items-center gap-3">
              <span className="rounded-full w-2 h-2 bg-black shrink-0"></span>{" "}
              Hafta sonu için ideal
            </p>
          </div>
          <Link
            className="bg-blue-600 w-full text-center py-3 rounded-lg text-white font-bold hover:bg-blue-500 transition-colors mt-4"
            href="/gunubirlik-turlar"
          >
            Turları İncele
          </Link>
        </div>

        {/* Kart 2 */}
        <div className="turlarimiz-card rounded-2xl flex flex-col justify-between items-center gap-5 p-5 shadow-xl w-full lg:w-1/3">
          <div className="turlarimiz-card-img w-full h-64">
            <Image
              src={konaklamali}
              alt="Konaklamalı Turlar"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div className="turlarimiz-card-desc flex flex-col gap-2 justify-start items-start w-full grow">
            <h2 className="turlarimiz-card-title font-bold text-2xl md:text-3xl text-[#1f2c42]">
              Konaklamalı Turlar
            </h2>
            <p className="w-full text-left text-black font-medium flex items-center gap-3">
              <span className="rounded-full w-2 h-2 bg-black shrink-0"></span>{" "}
              2-3-5 gecelik programlar
            </p>
            <p className="w-full text-left text-black font-medium flex items-center gap-3">
              <span className="rounded-full w-2 h-2 bg-black shrink-0"></span>{" "}
              Otel-rehberli tur
            </p>
            <p className="w-full text-left text-black font-medium flex items-center gap-3">
              <span className="rounded-full w-2 h-2 bg-black shrink-0"></span>{" "}
              Aile & Grup turları
            </p>
          </div>
          <Link
            className="bg-blue-600 w-full text-center py-3 rounded-lg text-white font-bold hover:bg-blue-500 transition-colors mt-4"
            href="/konaklamali-turlar"
          >
            Turları İncele
          </Link>
        </div>

        {/* Kart 3 */}
        <div className="turlarimiz-card rounded-2xl flex flex-col justify-between items-center gap-5 p-5 shadow-xl w-full lg:w-1/3">
          <div className="turlarimiz-card-img w-full h-64">
            <Image
              src={yurtdisi}
              alt="Yurtdışı Turları"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div className="turlarimiz-card-desc flex flex-col gap-2 justify-start items-start w-full grow">
            <h2 className="turlarimiz-card-title font-bold text-2xl md:text-3xl text-[#1f2c42]">
              Yurtdışı Turları
            </h2>
            <p className="w-full text-left text-black font-medium flex items-center gap-3">
              <span className="rounded-full w-2 h-2 bg-black shrink-0"></span>{" "}
              Vizesiz & vizeli ülkeler
            </p>
            <p className="w-full text-left text-black font-medium flex items-center gap-3">
              <span className="rounded-full w-2 h-2 bg-black shrink-0"></span>{" "}
              Kültür & alışveriş keşfi
            </p>
            <p className="w-full text-left text-black font-medium flex items-center gap-3">
              <span className="rounded-full w-2 h-2 bg-black shrink-0"></span>{" "}
              Profesyonel rehberlik
            </p>
          </div>
          <Link
            className="bg-blue-600 w-full text-center py-3 rounded-lg text-white font-bold hover:bg-blue-500 transition-colors mt-4"
            href="/yurtdisi-turlar"
          >
            Turları İncele
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Turlarimiz;
