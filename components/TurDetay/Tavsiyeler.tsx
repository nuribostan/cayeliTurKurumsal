import Image from "next/image";
import pin2 from "@/assets/icons8-like-64 (2).png"; 

{/* eslint-disable-next-line */}
interface TurProgramiProps { tur: any; }

const Tavsiyeler = ({ tur }: TurProgramiProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 p-6 shadow-lg bg-white border border-gray-200 rounded-2xl">
      <div className="flex justify-start items-center gap-3 border-b border-blue-200 pb-4 w-full">
        <Image src={pin2} alt="tavsiye" width={32} height={32} className="shrink-0" />
        <h2 className="text-xl lg:text-2xl font-bold text-[#1f2c42] w-full">Tavsiyeler</h2>
      </div>

      <ul className="flex flex-col gap-3 w-full">
        {/* eslint-disable-next-line */}
        {tur?.tavsiyeler.map((item:any, index:number) => (
          <li key={index} className="flex justify-start items-start gap-3 w-full">
            <span className="rounded-full w-2 h-2 bg-[#5a7197] shrink-0 mt-2"></span>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium text-justify">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tavsiyeler;