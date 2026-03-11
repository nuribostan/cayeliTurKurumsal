import Header from "@/components/Header";
import TurDetayHero from "@/components/TurDetay/Hero";
import TurProgrami from "@/components/TurDetay/TurProgrami";
import db from "@/db/turDetayList/db";

interface TurDetayProps {
  params: {
    tur_ismi: string;
  };
}

export default async function TurDetay({ params }: TurDetayProps) {
  const resolvedParams = await params;
  const tur = db.find((item) => item.turURL === resolvedParams.tur_ismi);

  return (
    <div className="turDetay w-full min-h-screen bg-white">
      <Header />
      <div className="turDetay-content w-full bg-white pb-20 text-black">
        <TurDetayHero tur={tur} />
        <TurProgrami tur={tur} />
      </div>
    </div>
  );
}