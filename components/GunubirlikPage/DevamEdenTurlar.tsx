import devamEdenTurlarDb from "@/db/devamEdenTurlar/gunubirlik/db";
import DevamEdenTurListGrid from "../DevamEdenTurList";

const DevamEdenTurlar = () => {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center justify-center pb-12 lg:pb-20 pt-0 gap-8 lg:gap-10">
      <div className="w-[90%] lg:w-[85%] mx-auto flex items-center justify-center lg:justify-start">
        <h1 className="text-3xl md:text-5xl text-[#1f2c42] font-bold text-center lg:text-left">
          Güncel Popüler Turlarımız
        </h1>
      </div>

      <DevamEdenTurListGrid data={devamEdenTurlarDb} />
    </div>
  );
};

export default DevamEdenTurlar;