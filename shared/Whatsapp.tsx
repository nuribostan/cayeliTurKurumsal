"use client";

import Image from "next/image";
import wp from "@/assets/icons8-whatsapp-48.png";
import Link from "next/link";
import { useState } from "react";

const Whatsapp = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="wp-container fixed bottom-6 right-6 w-90 h-16"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Link
        href="https://wa.me/905300735242"
        className="whatsapp absolute bottom-0 right-0 bg-green-700 w-16 h-16 rounded-full flex justify-center items-center z-50"
      >
        <Image src={wp} alt="whatsapp" />
      </Link>

      <div className={`hover-wp absolute bottom-2 right-20 w-auto h-auto justify-center items-center ${show ? "flex" : "hidden"} transition-opacity duration-150 pointer-events-auto`}>
        <h2 className="text-white bg-green-700 px-5 py-2 rounded-2xl font-bold">
          Bizimle İletişime Geçin
        </h2>
      </div>
    </div>
  );
};

export default Whatsapp;
