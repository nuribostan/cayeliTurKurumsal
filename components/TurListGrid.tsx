"use client";
import TurCard from "./TurCard";

interface TurCardProps {
  img: string;
  title: string;
  url: string;
  location: string;
  duration: string;
}

const TurListGrid = ({ data }: { data: TurCardProps[] }) => {
  return (
    <div className="flex md:grid flex-row items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-[90%] lg:w-[85%] mx-auto pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {data &&
        data.map((item: TurCardProps, idx: number) => (
          <div
            key={idx}
            className="w-[80%] shrink-0 snap-center md:w-auto md:shrink"
          >
            <TurCard
              img={item.img}
              title={item.title}
              url={item.url}
              location={item.location}
              duration={item.duration}
            />
          </div>
        ))}
    </div>
  );
};

export default TurListGrid;
