import DevamEdenTurlar from "@/components/KonaklamaliPage/DevamEdenTurlar";
import Header from "@/components/Header";
import NedenBiz from "@/components/NedenBiz";
import GunubirlikTurlar from "@/pages/KonaklamaliTurlar";
import Whatsapp from "@/shared/Whatsapp";

const KonaklamaliTurlarPage = () => {
      return ( <>
      <Header />
      <GunubirlikTurlar />
      <NedenBiz />
      <DevamEdenTurlar />
      <Whatsapp />
      </> );
}
 
export default KonaklamaliTurlarPage;