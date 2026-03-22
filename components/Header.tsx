"use client";

import Image from "next/image";
import logo from "@/assets/cayeli-logo.jpg";
import downArrow from "@/assets/down-arrow.png";
import close from "@/assets/icons8-close-48 (1).png";
import menu from "@/assets/icons8-menu-30.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import instagram from "@/assets/iletisim/instagram.png";
import facebook from "@/assets/iletisim/facebook.png";

interface MenuItem {
  menu: string;
  url: string;
  subMenu?: MenuItem[];
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileGunubirlikOpen, setIsMobileGunubirlikOpen] = useState(false);
  const [isMobileKonaklamaOpen, setIsMobileKonaklamaOpen] = useState(false);
  const [isMobileYurtdisiOpen, setIsMobileYurtdisiOpen] = useState(false);

  const [gunubirlikMenu, setGunubirlikMenu] = useState<MenuItem[]>([]);
  const [konaklamaMenu, setKonaklamaMenu] = useState<MenuItem[]>([]);
  const [yurtdisiMenu, setYurtdisiMenu] = useState<MenuItem[]>([]);
  const [menuDB, setMenuDB] = useState<MenuItem[]>([]);

  useEffect(() => {
    const res = fetch(
      "https://raw.githubusercontent.com/nuribostan/cayeliTurKurumsalData/refs/heads/main/menu.json",
      {
        next: { revalidate: 3600 },
      },
    );

    if (res) {
      res
        .then((response) => response.json())
        .then((data) => {
          setMenuDB(data);
        })
        .catch((error) => {
          console.error("Veri çekme hatası:", error);
        });
    } else {
      console.error("Veri çekilemedi!");
    }
  }, [menuDB]);

  useEffect(() => {
    menuDB.forEach((item) => {
      if (item.menu === "Gunubirlik Turlar") {
        setGunubirlikMenu(item.subMenu ?? []);
      } else if (item.menu === "Konaklamalı Turlar") {
        setKonaklamaMenu(item.subMenu ?? []);
      } else if (item.menu === "Yurtdışı Turları") {
        setYurtdisiMenu(item.subMenu ?? []);
      }
    });
  }, [menuDB]);

  // Mobil menü açıkken arka planın kaymasını engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* ================= DESKTOP HEADER (Büyük Ekranlar) ================= */}
      {/* lg (1024px) altı ekranlarda gizlenir */}
      <header className="hidden lg:flex fixed top-0 left-0 w-full h-20 bg-white shadow-md z-50 transition-all duration-300">
        {/* Responsive padding ve gap yapısı ile taşmalar engellendi */}
        <div className="flex justify-between items-center w-full h-full max-w-480 mx-auto px-4 lg:px-6 xl:px-12 2xl:px-24">
          {/* Logo - Cihaza göre küçülür */}
          <div className="logo shrink-0 flex items-center h-full">
            <Link href="/">
              <Image
                src={logo}
                alt="Cayeli Tur Logo"
                width={200}
                height={80}
                className="object-contain w-40 xl:w-48 2xl:w-52"
                priority
              />
            </Link>
          </div>

          {/* Menü Linkleri - Responsive font ve gap */}
          <ul className="menu flex gap-4 lg:gap-5 xl:gap-8 2xl:gap-10 items-center list-none text-sm xl:text-base font-bold text-[#1f2c42] h-full whitespace-nowrap">
            <li className="cursor-pointer hover:text-blue-600 transition-colors">
              <Link href="/">Ana Sayfa</Link>
            </li>

            {/* Günübirlik Turlar - Hover */}
            <li className="cursor-pointer relative group flex items-center h-full gap-1">
              <Link
                href="/gunubirlik-turlar"
                className="hover:text-blue-600 transition-colors"
              >
                Günübirlik Turlar
              </Link>
              <Image
                src={downArrow}
                alt="ok"
                width={12}
                height={12}
                className="group-hover:rotate-180 transition-transform duration-300 opacity-80"
              />

              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-b-xl flex-col hidden group-hover:flex z-50 border-t-4 border-blue-600 overflow-hidden py-2">
                {gunubirlikMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="w-full border-b border-gray-100 last:border-0 py-3 px-5 hover:bg-blue-50 hover:text-blue-600 transition-colors text-[14px] xl:text-[15px] font-medium text-gray-700 whitespace-normal"
                  >
                    {item.menu}
                  </Link>
                ))}
              </div>
            </li>

            {/* Konaklamalı Turlar - Hover */}
            <li className="cursor-pointer relative group flex items-center h-full gap-1">
              <Link
                href="/konaklamali-turlar"
                className="hover:text-blue-600 transition-colors"
              >
                Konaklamalı Turlar
              </Link>
              <Image
                src={downArrow}
                alt="ok"
                width={12}
                height={12}
                className="group-hover:rotate-180 transition-transform duration-300 opacity-80"
              />

              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-b-xl flex-col hidden group-hover:flex z-50 border-t-4 border-blue-600 overflow-hidden py-2">
                {konaklamaMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="w-full border-b border-gray-100 last:border-0 py-3 px-5 hover:bg-blue-50 hover:text-blue-600 transition-colors text-[14px] xl:text-[15px] font-medium text-gray-700 whitespace-normal"
                  >
                    {item.menu}
                  </Link>
                ))}
              </div>
            </li>

            {/* Yurtdışı Turlar - Hover */}
            <li className="cursor-pointer relative group flex items-center h-full gap-1">
              <Link
                href="/yurtdisi-turlar"
                className="hover:text-blue-600 transition-colors"
              >
                Yurtdışı Turları
              </Link>
              <Image
                src={downArrow}
                alt="ok"
                width={12}
                height={12}
                className="group-hover:rotate-180 transition-transform duration-300 opacity-80"
              />

              <div className="absolute top-full left-0 w-60 bg-white shadow-2xl rounded-b-xl flex-col hidden group-hover:flex z-50 border-t-4 border-blue-600 overflow-hidden py-2">
                {yurtdisiMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="w-full border-b border-gray-100 last:border-0 py-3 px-5 hover:bg-blue-50 hover:text-blue-600 transition-colors text-[14px] xl:text-[15px] font-medium text-gray-700 whitespace-normal"
                  >
                    {item.menu}
                  </Link>
                ))}
              </div>
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition-colors">
              <Link href="/hakkimizda">Hakkımızda</Link>
            </li>
          </ul>

          {/* İletişim Butonu ve Sosyal Medya */}
          <div className="flex items-center gap-3 lg:gap-4 xl:gap-6 shrink-0 h-full">
            <Link
              href="/iletisim"
              className="px-4 py-2 xl:px-6 xl:py-2.5 bg-[#2f73be] hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md text-sm xl:text-base"
            >
              İletişim
            </Link>
          </div>
        </div>
      </header>

      {/* ================= MOBILE HEADER (Küçük Ekranlar) ================= */}
      {/* lg (1024px) ve üzeri ekranlarda gizlenir */}
      <header className="lg:hidden fixed top-0 left-0 w-full h-20 flex justify-between items-center bg-white shadow-md px-5 z-50">
        <div className="logo shrink-0 h-full py-3 flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Cayeli Tur Logo"
              width={180}
              height={60}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <button
          className="menu-icon p-2 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Image src={menu} alt="Menu" width={32} height={32} />
        </button>
      </header>

      {/* MOBİL AÇILIR MENÜ EKRANI */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-60 flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobil Menü Üst Kısım */}
        <div className="flex justify-between items-center h-20 px-5 border-b border-gray-100 shrink-0">
          <Image
            src={logo}
            alt="Cayeli Tur Logo"
            width={160}
            height={60}
            className="object-contain"
          />
          <button
            className="p-2 focus:outline-none bg-gray-50 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <Image src={close} alt="Close" width={24} height={24} />
          </button>
        </div>

        {/* Mobil Menü Linkleri */}
        <div className="flex flex-col grow overflow-y-auto px-5 py-6 gap-6 text-[#1f2c42]">
          <Link
            href="/"
            className="text-xl font-bold border-b border-gray-100 pb-4 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Anasayfa
          </Link>

          {/* Mobil Akordiyon: Günübirlik Turlar */}
          <div className="flex flex-col border-b border-gray-100 pb-4">
            <div className="flex justify-between items-center w-full">
              {/* Yazıya tıklayınca sayfaya gider */}
              <Link
                href="/gunubirlik-turlar"
                className="text-xl font-bold hover:text-blue-600 transition-colors grow"
                onClick={() => setIsOpen(false)}
              >
                Günübirlik Turlar
              </Link>

              {/* Oka tıklayınca alt menüyü açar (Dokunma alanını p-2 ile genişlettik) */}
              <div
                className="p-2 cursor-pointer"
                onClick={() =>
                  setIsMobileGunubirlikOpen(!isMobileGunubirlikOpen)
                }
              >
                <Image
                  src={downArrow}
                  alt="ok"
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${isMobileGunubirlikOpen ? "rotate-180" : ""}`}
                />
              </div>
            </div>

            {/* Alt Menü İçeriği */}
            <div
              className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${isMobileGunubirlikOpen ? "max-h-96 mt-4" : "max-h-0"}`}
            >
              {gunubirlikMenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="text-base text-gray-600 py-2 pl-4 border-l-2 border-transparent hover:border-blue-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.menu}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobil Akordiyon: Konaklamalı Turlar */}
          <div className="flex flex-col border-b border-gray-100 pb-4">
            <div className="flex justify-between items-center w-full">
              {/* Yazıya tıklayınca sayfaya gider */}
              <Link
                href="/konaklamali-turlar"
                className="text-xl font-bold hover:text-blue-600 transition-colors grow"
                onClick={() => setIsOpen(false)}
              >
                Konaklamalı Turlar
              </Link>

              {/* Oka tıklayınca alt menüyü açar */}
              <div
                className="p-2 cursor-pointer"
                onClick={() => setIsMobileKonaklamaOpen(!isMobileKonaklamaOpen)}
              >
                <Image
                  src={downArrow}
                  alt="ok"
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${isMobileKonaklamaOpen ? "rotate-180" : ""}`}
                />
              </div>
            </div>

            {/* Alt Menü İçeriği */}
            <div
              className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${isMobileKonaklamaOpen ? "max-h-96 mt-4" : "max-h-0"}`}
            >
              {konaklamaMenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="text-base text-gray-600 py-2 pl-4 border-l-2 border-transparent hover:border-blue-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.menu}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobil Akordiyon: Yurtdışı Turlar */}
          <div className="flex flex-col border-b border-gray-100 pb-4">
            <div className="flex justify-between items-center w-full">
              {/* Yazıya tıklayınca sayfaya gider */}
              <Link
                href="/yurtdisi-turlar"
                className="text-xl font-bold hover:text-blue-600 transition-colors grow"
                onClick={() => setIsOpen(false)}
              >
                Yurtdışı Turları
              </Link>

              {/* Oka tıklayınca alt menüyü açar */}
              <div
                className="p-2 cursor-pointer"
                onClick={() => setIsMobileYurtdisiOpen(!isMobileYurtdisiOpen)}
              >
                <Image
                  src={downArrow}
                  alt="ok"
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${isMobileYurtdisiOpen ? "rotate-180" : ""}`}
                />
              </div>
            </div>

            {/* Alt Menü İçeriği */}
            <div
              className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${isMobileYurtdisiOpen ? "max-h-96 mt-4" : "max-h-0"}`}
            >
              {yurtdisiMenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="text-base text-gray-600 py-2 pl-4 border-l-2 border-transparent hover:border-blue-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.menu}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/hakkimizda"
            className="text-xl font-bold border-b border-gray-100 pb-4 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Hakkımızda
          </Link>

          {/* Mobil İletişim Butonu ve Sosyal Medya */}
          <div className="mt-auto pt-6 flex flex-col gap-6">
            <Link
              href="/iletisim"
              className="w-full py-4 bg-[#2f73be] text-white text-center text-lg font-bold rounded-xl shadow-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>

            <div className="flex justify-center gap-6 pb-6">
              <Link
                href="https://www.instagram.com/cayeliturizm/"
                target="_blank"
              >
                <Image src={instagram} alt="Instagram" width={40} height={40} />
              </Link>
              <Link
                href="https://www.facebook.com/cayeliturizmtr/"
                target="_blank"
              >
                <Image src={facebook} alt="Facebook" width={36} height={36} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
