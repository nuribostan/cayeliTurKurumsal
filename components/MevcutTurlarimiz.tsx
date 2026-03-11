"use client";

import { useState } from "react";
import devamEdenTurlarDb from "@/db/devamEdenTurlar/gunubirlik/db";
import DevamEdenTurListGrid from "./DevamEdenTurList";

const Turlar = () => {
  const [turlar, setTurlar] = useState(devamEdenTurlarDb);

  console.log(turlar);

  return (
    <div className=" bg-white w-full h-auto flex flex-col items-start justify-center pb-20 pt-10 gap-10">
      <div className="gunubirlik-turlar-title  w-[85%] m-auto">
        <h1 className="text-5xl text-[#1f2c42] font-bold">
           Güncel Popüler Turlarımız
        </h1>
      </div>

      <DevamEdenTurListGrid data={turlar} />
    </div>
  );
};

export default Turlar;
