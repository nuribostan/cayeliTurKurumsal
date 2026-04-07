import Image from "next/image";
import pin2 from "@/assets/pin2.png";


{/* eslint-disable-next-line */}
interface TurProgramiProps { tur: any; }

const GezilecekYerler = ({ tur }: TurProgramiProps) => {
  return (
    <div className="bg-white rounded-2xl w-full shadow-lg border border-gray-200 p-6 lg:p-8 flex flex-col gap-6">
      <div className="flex justify-start items-center gap-3 border-b border-gray-200 pb-4">
        <Image src={pin2} alt="pin" width={32} height={32} className="shrink-0" />
        <h2 className="text-xl lg:text-2xl font-bold text-[#1f2c42]">Gezilecek Yerler</h2>
      </div>

      <ul className="flex flex-col gap-3 w-full">
        {/* eslint-disable-next-line */}
        {tur?.gezilecekYerler.map((item:any, index:number) => (
          <li key={index} className="flex justify-start items-start gap-3 w-full">
            <span className="rounded-full w-2 h-2 bg-green-500 shrink-0 mt-2"></span>
            <p className="text-base text-gray-800 leading-relaxed font-medium text-justify">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GezilecekYerler;