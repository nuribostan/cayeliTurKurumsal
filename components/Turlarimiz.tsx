"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type Tur = {
  id: string;
  image: string;
  title: string;
  features: string[];
  link: string;
};

const Turlarimiz = () => {
  const [turlar, setTurlar] = useState<Tur[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchTurlar = async () => {
      try {
        const FETCH_URL =
          "https://raw.githubusercontent.com/nuribostan/cayeliTurKurumsalData/refs/heads/main/anasayfaTurlarimiz.json";

        const response = await fetch(FETCH_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("Tur verisi çekilemedi");

        const data = await response.json();

        if (data.status === true && data.turlar && data.turlar.length > 0) {
          setTurlar(data.turlar);
          setIsVisible(true);
        }
      } catch (error) {
        console.error("Turlar verisi alınırken hata oluştu:", error);
      }
    };

    fetchTurlar();
  }, []);

  if (!isVisible) return null;

  return (
    <section className="turlarimiz bg-white w-full h-fit py-10 lg:py-10 flex flex-col gap-10">
      <div className="turlarimiz-title text-left w-[90%] lg:w-[85%] mx-auto">
        <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold max-md:text-center border-b border-gray-200 pb-4 text-center">
          Turlarımız
        </h1>
      </div>

      <div className="turlarimiz-grid flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-10 w-[85%] mx-auto">
        {turlar.map((tur) => (
          <div
            key={tur.id}
            className="turlarimiz-card rounded-2xl flex flex-col justify-between items-center gap-5 p-5 shadow-xl w-full lg:w-1/3"
          >
            <div className="turlarimiz-card-img w-full h-64 relative">
              <Image
                src={tur.image}
                alt={tur.title}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="turlarimiz-card-desc flex flex-col gap-2 justify-start items-start w-full grow">
              <h2 className="turlarimiz-card-title font-bold text-2xl md:text-3xl text-[#1f2c42]">
                {tur.title}
              </h2>

              {tur.features.map((feature, idx) => (
                <p
                  key={idx}
                  className="w-full text-left text-black font-medium flex items-center gap-3"
                >
                  <span className="rounded-full w-2 h-2 bg-black shrink-0"></span>{" "}
                  {feature}
                </p>
              ))}
            </div>

            <Link
              className="bg-blue-600 w-full text-center py-3 rounded-lg text-white font-bold hover:bg-blue-500 transition-colors mt-4"
              href={tur.link}
            >
              Turları İncele
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Turlarimiz;
