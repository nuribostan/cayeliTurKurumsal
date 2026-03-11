import Image from "next/image";
import bg from "@/assets/hakkimizda/hakkimizda-hero-bg.jpg";
import pin from "@/assets/iletisim/maps-and-flags.png";
import phone from "@/assets/iletisim/call.png";
import mail from "@/assets/iletisim/email.png";
import clock from "@/assets/iletisim/icons8-clock-50.png";
import Link from "next/link";
import google from "@/assets/iletisim/search.png";
import wp from "@/assets/iletisim/apple.png";
import facebook from "@/assets/iletisim/facebook.png";
import instagram from "@/assets/iletisim/instagram.png";
import bg_iletisim from "@/assets/iletisim/bg_iletisim.png";
import Map from "../Map";

const IletisimHero = () => {
  return (
    <div className="iletisim-hero w-full overflow-hidden py-10">
      {/* Hero Banner Kısmı */}

      {/* İçerik Kısmı */}
      <div className="w-full bg-gray-50 py-12 lg:py-20">
        <div className="iletisim-wrapper w-[90%] lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Sol Kolon: İletişim Bilgileri (Büyük ekranda 2 satır kaplar) */}
          <div className="iletisim-box bg-white shadow-lg rounded-2xl lg:row-span-2 p-6 md:p-8 flex flex-col gap-8 border border-gray-100">
            <h1 className="text-[#1f2c42] text-xl md:text-2xl font-bold border-b border-gray-200 pb-4">
              BİZİMLE İLETİŞİME GEÇİN
            </h1>

            <div className="flex flex-col gap-6 border-b border-gray-200 pb-6">
              <div className="flex items-start gap-4">
                <Image
                  src={pin}
                  alt="adres"
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-8 md:h-8 shrink-0 mt-1"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1f2c42] font-bold text-base md:text-lg">
                    Adres:
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Yenipazar Mah. 9Mart Cad. No:108/B Çayeli-RİZE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src={phone}
                  alt="telefon"
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-8 md:h-8 shrink-0 mt-1"
                />
                <div className="flex flex-col gap-1">
                  <Link
                    href="tel:+9004645325242"
                    className="text-gray-700 text-sm md:text-base hover:text-blue-600 transition-colors"
                  >
                    +90 0464 532 52 42
                  </Link>
                  <Link
                    href="tel:+905300735242"
                    className="text-gray-700 text-sm md:text-base hover:text-blue-600 transition-colors"
                  >
                    +90 530 073 52 42
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src={mail}
                  alt="email"
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-8 md:h-8 shrink-0"
                />
                <a
                  href="mailto:cayelitur@hotmail.com"
                  className="text-gray-700 text-sm md:text-base break-all hover:text-blue-600 transition-colors"
                >
                  cayelitur@hotmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-b border-gray-200 pb-6">
              <h2 className="text-[#1f2c42] font-bold text-lg md:text-xl">
                ÇALIŞMA SAATLERİ
              </h2>
              <div className="flex items-center gap-4">
                <Image
                  src={clock}
                  alt="saat"
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-8 md:h-8 shrink-0"
                />
                <p className="text-gray-700 text-sm md:text-base">
                  Pazartesi - Pazar: 08:00 - 18:00
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[#1f2c42] font-bold text-lg md:text-xl">
                Bizi Takip Edin
              </h2>
              <div className="flex justify-start items-center gap-4 flex-wrap">
                <Link
                  href="https://www.instagram.com/cayeliturizm/"
                  target="_blank"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/cayeliturizmtr/"
                  target="_blank"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src={facebook}
                    alt="facebook"
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src={google}
                    alt="google"
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </Link>
                <Link
                  href="https://wa.me/905300735242"
                  target="_blank"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src={wp}
                    alt="whatsapp"
                    width={48}
                    height={48}
                    className="w-12 h-12 md:w-14 md:h-14"
                  />
                </Link>
              </div>
              <p className="text-gray-500 text-xs md:text-sm mt-2">
                Kampanyalar ve son dakika fırsatları için bizi takip edin.
              </p>
            </div>
          </div>

          {/* Orta Kolon: İletişim Formu */}
          <div className="iletisim-box bg-white shadow-lg rounded-2xl p-6 md:p-8 flex flex-col border border-gray-100">
            <h1 className="text-[#1f2c42] text-xl md:text-2xl font-bold border-b border-gray-200 pb-4 mb-6">
              BİZE MESAJ GÖNDERİN
            </h1>

            <form
              action="https://formspree.io/f/maqelvoq"
              method="post"
              className="flex flex-col gap-5 w-full grow"
            >
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold text-gray-700">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border border-gray-300 p-3 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="ornek@mail.com"
                />
              </div>

              <div className="flex flex-col gap-2 w-full grow">
                <label className="text-sm font-semibold text-gray-700">
                  Mesajınız
                </label>
                <textarea
                  name="message"
                  required
                  className="border border-gray-300 p-3 w-full h-32 md:h-full min-h-30 rounded-lg resize-none text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white font-bold px-4 py-3 rounded-lg w-full hover:bg-blue-700 transition-colors mt-auto"
              >
                Gönder
              </button>
            </form>
          </div>

          {/* Sağ Kolon: Acente Görseli */}
          <div className="iletisim-box bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col border border-gray-100 relative min-h-62.5 lg:min-h-full">
            <Image
              src={bg_iletisim}
              alt="Acente Görseli"
              fill
              className="object-cover"
            />
          </div>

          {/* Alt Kolon: Harita (Büyük ekranda 2 kolon kaplar) */}
          <div className="iletisim-box bg-white shadow-lg rounded-2xl lg:col-span-2 p-6 md:p-8 flex flex-col border border-gray-100">
            <h1 className="text-[#1f2c42] text-xl md:text-2xl font-bold border-b border-gray-200 pb-4 mb-6">
              OFİSİMİZİN KONUMU
            </h1>
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IletisimHero;
