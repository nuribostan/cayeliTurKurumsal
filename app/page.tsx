
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MevcutTurlatimiz from "@/components/MevcutTurlarimiz";
import NedenBiz from "@/components/NedenBiz";
import Turlarimiz from "@/components/Turlarimiz";
import DuyuruModal from "@/shared/DuyuModal";
import Whatsapp from "@/shared/Whatsapp";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Turlarimiz />
      <NedenBiz />
      <MevcutTurlatimiz />
      <DuyuruModal />
      <Whatsapp />
    </div>
  );
}
