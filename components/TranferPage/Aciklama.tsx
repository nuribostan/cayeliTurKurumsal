import TurUyari from "../TurUyari";

const TransferAciklama = () => {
  return (
    <div className="w-[90%] lg:w-[85%] mx-auto py-12 lg:py-10 flex flex-col gap-4 lg:gap-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#1f2c42] border-b border-gray-200 pb-2 max-md:text-center">
        Açıklama
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-5 items-start">
        <div>
          <ul className="flex flex-col w-full bg-white rounded-2xl border border-gray-200 p-2 lg:p-6 shadow-2xl">
            <li className="flex justify-start items-start w-full gap-4 border-b border-gray-100 py-4 last:border-b-0 group hover:bg-gray-50 transition-colors px-2 rounded-lg">
              <span className="rounded-full w-3 h-3 bg-blue-600 shrink-0 mt-1.5"></span>
              <p className="text-base text-gray-800 leading-relaxed font-medium text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur explicabo, ex, delectus blanditiis facere optio,
                tempore doloremque consequatur unde non ut placeat sunt dolorum
                esse dolores! Quibusdam eos nesciunt vel?
              </p>
            </li>
          </ul>
        </div>

        <TurUyari />
      </div>
    </div>
  );
};

export default TransferAciklama;
