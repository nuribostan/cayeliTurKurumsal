import Image from "next/image";
import tursab from "@/assets/tursab-logo-black-and-white.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer w-full bg-gray-200 border-t border-black">
      <div className="footer-content w-[90%] lg:w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-6">
        
        <div className="footer-col flex flex-col gap-4">
          <h2 className="text-xl font-bold text-black border-b border-gray-400 pb-2">Kurumsal</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-800"><strong>Şirket Ünvanı:</strong> Rize Birlik Çay Turizm Ltd Şti.</li>
            <li className="text-gray-800"><strong>Marka Adı:</strong> Çayeli Tur</li>
            <li className="text-gray-800"><strong>Türsab Belge No:</strong> 9652</li>
            <li className="pt-2">
              <Image src={tursab} alt="Tursab" width={180} height={180} className="object-contain" />
            </li>
          </ul>
        </div>

        <div className="footer-col flex flex-col gap-4">
          <h2 className="text-xl font-bold text-black border-b border-gray-400 pb-2">İletişim</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-800">
              <strong>Adres: </strong><br/>
              Yenipazar Mah. 9Mart Cad. No:108/B Çayeli-RİZE
            </li>
            <li className="text-gray-800 mt-2">
              <strong>Telefon:</strong><br/>
              <a href="tel:+905300735242" className="hover:text-blue-600 transition-colors">+90 530 073 52 42</a><br/>
              <a href="tel:+904645325242" className="hover:text-blue-600 transition-colors">+90 464 532 52 42</a>
            </li>
            <li className="text-gray-800 mt-2">
              <strong>E-posta:</strong><br/>
              <a href="mailto:cayelitur@hotmail.com" className="hover:text-blue-600 transition-colors">cayelitur@hotmail.com</a>
            </li>
            <li className="text-gray-800 mt-2">
              <strong>Çalışma Saatleri:</strong><br/>
              Pzt - Paz 08:00 - 18:00
            </li>
          </ul>
        </div>

        <div className="footer-col flex flex-col gap-4">
          <h2 className="text-xl font-bold text-black border-b border-gray-400 pb-2">Hizmetlerimiz</h2>
          <ul className="flex flex-col gap-2">
            <li><Link href="/gunubirlik-turlar" className="text-gray-800 hover:text-blue-600 transition-colors">Günübirlik Turlar</Link></li>
            <li><Link href="/konaklamali-turlar" className="text-gray-800 hover:text-blue-600 transition-colors">Konaklamalı Turlar</Link></li>
            <li><Link href="/yurtdisi-turlar" className="text-gray-800 hover:text-blue-600 transition-colors">Yurtdışı Turları</Link></li>
            <li className="text-gray-800">Gruplara Özel Turlar</li>
            <li className="text-gray-800">Okul & Personel Servisi</li>
          </ul>
          
          <Link href="/yasal-bilgiler" className="mt-4">
             <h2 className="text-xl font-bold text-black border-b border-gray-400 pb-2">Yasal Bilgiler</h2>
          </Link>
          <ul className="flex flex-col gap-2 mt-2">
            <li><Link href="/yasal-bilgiler" className="text-gray-800 hover:text-blue-600 transition-colors">Gizlilik Politikası</Link></li>
            <li><Link href="/yasal-bilgiler" className="text-gray-800 hover:text-blue-600 transition-colors">İptal ve İade Koşulları</Link></li>
          </ul>
        </div>

        <div className="footer-col flex flex-col gap-4">
          <h2 className="text-xl font-bold text-black border-b border-gray-400 pb-2">Sosyal Medya</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="https://www.instagram.com/cayeliturizm/" target="_blank" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/cayeliturizmtr/" target="_blank" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/905300735242" target="_blank" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                WhatsApp
              </Link>
            </li>
            <li>
              <Link href="https://www.google.com/search?sa=X&sca_esv=b522c9179c1acadb&rlz=1C1FKPE_trTR1109TR1109&sxsrf=ANbL-n733VChE3Hdirv--1Ko7tK8SgViSw:1774204390640&q=%C3%87ayeli+Tur+Yorumlar&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NTAzNDawtLAwsTQ3Nrc0MjKz2MDI-IpR5HB7YmVqTqZCSGmRQmR-UWluTmLRIlaswgCefE61SAAAAA&rldimm=5061309884973792268&tbm=lcl&hl=tr-TR&ved=2ahUKEwiw1dmzkrSTAxUcSfEDHXtxKAYQ9fQKegQIIhAG&biw=1920&bih=929&dpr=1#lkt=LocalPoiReviews" target="_blank" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                Google Yorumlar
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center bg-gray-800 py-4 px-5 lg:px-20 gap-4">
        <p className="text-white text-sm text-center md:text-left">
          © 2026 - Çayeli Tur | Tüm Hakları Saklıdır
        </p>
        <p className="text-gray-400 text-sm text-center md:text-right">
          Bu Web Sitesi <strong><i className="text-white">bosyn.io</i></strong> tarafından oluşturulmuştur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;