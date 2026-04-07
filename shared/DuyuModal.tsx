"use client";

import close from "@/assets/icons8-close-24.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import arrow from "@/assets/icons8-right-arrow-30.png";

const DuyuruModal = () => {
  // Başlangıçta modal kapalı ve resim listesi boş
  const [isOpen, setIsOpen] = useState(false);
  const [slides, setSlides] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // JSON verisini çekme işlemi
  useEffect(() => {
    const fetchDuyuru = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/nuribostan/cayeliTurKurumsalData/refs/heads/main/duyuru.json",
          // GitHub önbelleğe almasın diye cache'i devre dışı bırakıyoruz ki anlık güncellensin
          { cache: "no-store" } 
        );
        
        if (!response.ok) throw new Error("Veri çekilemedi");

        const data = await response.json();

        // 1. Status true ise
        // 2. Images dizisi var ise
        // 3. Images dizisinde en az 1 resim var ise modalı aç
        if (data.status === true && data.images && data.images.length > 0) {
          setSlides(data.images);
          setIsOpen(true);
        }
      } catch (error) {
        console.error("Duyuru verisi alınırken hata oluştu:", error);
      }
    };

    fetchDuyuru();
  }, []);

  const handleNext = () => setActiveIndex((i) => (i + 1) % slides.length);
  const handlePrev = () =>
    setActiveIndex((i) => (i - 1 + slides.length) % slides.length);

  // Klavye Kontrolleri
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, slides.length]); // slides.length bağımlılığını ekledik

  // Modal kapalıysa veya hiç resim yoksa DOM'u yormamak için hiç render etme
  if (!isOpen || slides.length === 0) return null;

  return (
    // Ana kapsayıcı (Tüm ekranı kaplar, Header'ın üzerine çıkması için z-[100])
    <div className="fixed inset-0 z-[100] flex items-center justify-center w-full h-full p-4 md:p-10">
      {/* Arka plan karartması ve bulanıklık */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm z-40 cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Slider Kutusu: Ekran yüksekliğine göre esner */}
      <div className="relative z-50 w-full max-w-3xl h-[75vh] md:h-[85vh] flex items-center justify-center">
        {/* Kapat Butonu */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-7 right-0 md:-right-12 md:top-0 bg-white/20 hover:bg-red-600 rounded-full p-2 md:p-3 transition-colors z-[60]"
          aria-label="Kapat"
        >
          <Image
            src={close}
            alt="Kapat"
            width={24}
            height={24}
            className="w-5 h-5 md:w-6 md:h-6 invert brightness-0"
          />
        </button>

        {/* Resimler */}
        {slides.map((src, idx) => (
          <div
            key={src + idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              idx === activeIndex
                ? "opacity-100 z-20"
                : "opacity-0 z-10 pointer-events-none"
            }`}
          >
            <Image
              src={src}
              alt={`Duyuru ${idx + 1}`}
              fill
              className="object-contain rounded-xl drop-shadow-2xl"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Tek bir resim varsa okları ve noktaları göstermeye gerek yok */}
        {slides.length > 1 && (
          <>
            {/* Önceki Butonu */}
            <button
              aria-label="Önceki"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white rounded-full p-3 z-30 transition-colors"
            >
              <Image
                src={arrow}
                alt="Önceki"
                width={24}
                height={24}
                className="rotate-180 w-5 h-5 md:w-7 md:h-7"
              />
            </button>

            {/* Sonraki Butonu */}
            <button
              aria-label="Sonraki"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white rounded-full p-3 z-30 transition-colors"
            >
              <Image
                src={arrow}
                alt="Sonraki"
                width={24}
                height={24}
                className="w-5 h-5 md:w-7 md:h-7"
              />
            </button>

            {/* Noktalar (Göstergeler) */}
            <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slayt ${i + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(i);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 shadow-md ${
                    i === activeIndex
                      ? "bg-white scale-125"
                      : "bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DuyuruModal;