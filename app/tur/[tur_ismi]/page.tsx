import Header from "@/components/Header";
import TurDetayHero from "@/components/TurDetay/Hero";
import TurProgrami from "@/components/TurDetay/TurProgrami";

export interface TurItem {
  turURL: string;
  turName: string;
  turType: string;
  turBanner: string;
  location: string;
  kalkis: string;
  kalkis_saat_1: string;
  kalkis_saat_2: string;
  donus_saat: string;
  turFotograflari?: {
    anaResim: string;
    galeri: Array<{ id: number; url: string }>;
  };

  list: Array<{ id: number; desc: string }>;
  gezilecekYerler: Array<{ id: number; desc: string }>;
  tavsiyeler: Array<{ id: number; desc: string }>;
}
interface TurDetayProps {
  params: Promise<{
    tur_ismi: string;
  }>;
}

async function getTurDetaylari(): Promise<TurItem[]> {
  const res = await fetch(
    "https://raw.githubusercontent.com/nuribostan/cayeliTurKurumsalData/refs/heads/main/turDetayList.json",
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    console.error("Veri çekilemedi!");
    return [];
  }

  return res.json();
}

export default async function TurDetay({ params }: TurDetayProps) {
  const resolvedParams = await params;

  const db = await getTurDetaylari();

  const tur = db.find(
    (item: TurItem) => item.turURL === resolvedParams.tur_ismi,
  );

  if (!tur) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-white text-black">
        <h1 className="text-2xl font-bold">Aradığınız tur bulunamadı.</h1>
      </div>
    );
  }

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
