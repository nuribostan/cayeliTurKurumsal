'use client'

import { useState } from "react";
import konaklamaliDb from "@/db/konaklamali/db";
import TurListGrid from "../TurListGrid";

const Turlar = () => {
  const [turlar, setTurlar] = useState(konaklamaliDb);

  console.log(turlar);

  return (
    <div className=" bg-white w-full h-auto flex flex-col items-start justify-center py-20 gap-10">
      <div className="gunubirlik-turlar-title  w-[85%] m-auto">
        <h1 className="text-5xl text-[#1f2c42] font-bold">Konaklamalı Turlarımız</h1>
      </div>

      <TurListGrid data={turlar} />

    </div>
  );
};

export default Turlar;
