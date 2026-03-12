'use client'

import { useState } from "react";
import gunubirlikDb from "@/db/gunubirlik/db";
import TurListGrid from "../TurListGrid";

const Turlar = () => {
  const [turlar, setTurlar] = useState(gunubirlikDb);

  return (
    <div className="bg-white w-full h-auto flex flex-col items-center justify-center pt-12 lg:pt-10 gap-8 lg:gap-10">
      <div className="w-[90%] lg:w-[85%] mx-auto flex items-center justify-center lg:justify-start">
        <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold text-center lg:text-left">Günübirlik Turlarımız</h1>
      </div>

      <TurListGrid data={turlar} />
    </div>
  );
};

export default Turlar;