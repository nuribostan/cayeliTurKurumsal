"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type HeroData = {
  status: boolean;
  image: string;
  title_line1: string;
  title_line2: string;
  subtitle_line1: string;
  subtitle_line2: string;
};

const Hero = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const FETCH_URL =
          "https://raw.githubusercontent.com/nuribostan/cayeliTurKurumsalData/refs/heads/main/anasayfaHero.json";

        const response = await fetch(FETCH_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("Hero verisi çekilemedi");

        const data = await response.json();

        if (data.status === true && data.image) {
          setHeroData(data);
        }
      } catch (error) {
        console.error("Hero verisi alınırken hata oluştu:", error);
      }
    };

    fetchHeroData();
  }, []);

  if (!heroData) return null;

  return (
    <section
      id="hero"
      className="w-full min-h-[calc(85vh-80px)] lg:h-[calc(85vh-80px)] mt-20 relative overflow-hidden flex items-center justify-center text-center text-white"
    >
      <div className="background absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={heroData.image}
          alt="Hero Banner"
          fill
          priority
          className="object-cover w-full h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20 lg:hidden"></div>
      </div>

      <div className="hero-content w-full h-full flex flex-col justify-center lg:justify-start items-center lg:items-start gap-10 p-5 lg:pl-24 lg:pt-24 z-10">
        <div className="hero-title flex flex-col justify-center lg:justify-start items-center lg:items-start gap-5 z-10">
          <h1 className="text-shadow-lg text-shadow-black text-4xl lg:text-5xl text-white  font-bold text-left lg:text-start drop-shadow-md lg:drop-shadow-none">
            {heroData.title_line1} <br className="hidden md:block" />
            {heroData.title_line2}
          </h1>

          <h2 className="text-shadow-lg text-shadow-black text-xl lg:text-2xl text-gray-200 font-medium text-left lg:text-start drop-shadow-md lg:drop-shadow-none">
            {heroData.subtitle_line1} <br className="hidden md:block" />
            {heroData.subtitle_line2}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
