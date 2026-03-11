
import DevamEdenTurListGrid from "../DevamEdenTurList"
import devamEdenTurlarDb from "@/db/devamEdenTurlar/konaklamali/db";
const DevamEdenTurlar = () => {
  return (
    <div className=" bg-white w-full h-auto flex flex-col items-start justify-center pb-20 pt-0 gap-10">
      <div className="gunubirlik-turlar-title  w-[85%] m-auto">
        <h1 className="text-5xl text-[#1f2c42] font-bold">
          Güncel Popüler Turlarımız
        </h1>
      </div>

      <DevamEdenTurListGrid data={devamEdenTurlarDb} />
    </div>
  );
};

export default DevamEdenTurlar;
