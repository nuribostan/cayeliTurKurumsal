const TurListItem = ({ desc }: { desc: string }) => {
  return (
    <li className="flex justify-start items-start w-full gap-4 border-b border-gray-100 py-4 last:border-b-0 group hover:bg-gray-50 transition-colors px-2 rounded-lg">
      <span className="rounded-full w-3 h-3 bg-blue-600 shrink-0 mt-1.5"></span>
      <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium text-justify">
        {desc}
      </p>
    </li>
  );
};

export default TurListItem;