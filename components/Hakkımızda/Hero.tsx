import Image from "next/image";
import arac1 from "@/assets/hakkimizda/1.png";
import arac2 from "@/assets/hakkimizda/2.png";
import arac3 from "@/assets/hakkimizda/3.png";

const HakkimizdaHero = () => {
  return (
    <div className="hakkimizda-wrapper w-full">
      {/* İçerik Kısmı */}
      <div className="hakkimizda-content w-[90%] lg:w-[85%] mx-auto py-12 lg:py-10 flex flex-col gap-6 lg:gap-6">
        {/* Şirket Bilgileri & TURSAB */}
        <div className="hakkimizda-content-item flex flex-col gap-6 border-b border-gray-300 pb-5 relative">
          <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold mx-auto flex w-full justify-center items-center border-b solid pb-5 uppercase">
            Hakkımızda
          </h1>

          <ul className="flex flex-col gap-4 w-full lg:w-3/4 text-gray-800">
            <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span className="text-lg md:text-lg font-bold text-black sm:w-1/3 shrink-0">
                Şirket Ünvanı:
              </span>
              <p className="text-base md:text-lgsm:w-2/3">
                Rize Birlik Çay Turizm Ltd Şti.
              </p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span className="text-lg md:text-lg font-bold text-black sm:w-1/3 shrink-0">
                Vergi Dairesi ve No:
              </span>
              <p className="text-base md:text-lgsm:w-2/3">
                Çayeli V.D. 7350232798
              </p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span className="text-lg md:text-lg font-bold text-black sm:w-1/3 shrink-0">
                Ticaret Sicil No:
              </span>
              <p className="text-base md:text-lgsm:w-2/3">Çayeli - 1581</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span className="text-lg md:text-lg font-bold text-black sm:w-1/3 shrink-0">
                Mersis No:
              </span>
              <p className="text-base md:text-lgsm:w-2/3">0735023279800029</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span className="text-lg md:text-lg font-bold text-black sm:w-1/3 shrink-0">
                Merkez:
              </span>
              <p className="text-base md:text-lgsm:w-2/3">
                Yenipazar Mah. 9Mart Cad. No:108/B Çayeli-RİZE
              </p>
            </li>

            <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span className="text-lg md:text-lg font-bold text-black sm:w-1/3 shrink-0">
                Tursab Belge No:
              </span>
              <p className="text-base md:text-lgsm:w-2/3">9652</p>
            </li>
          </ul>

          <div className="flex flex-col gap-4 mt-4">
            <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed ">
              Rize Birlik Çay Turizm Ltd Şti. 2008 yılında sektöre taşımacılık
              yaparak başlayan, 2011 yılında ise Türsab A-9652 belgesini alarak
              Çayeli Tur markasını kurmuş ve misafirlerine en iyi hizmeti
              sunmayı amaçlamıştır. Karadeniz Bölgesi’nin doğal ve kültürel
              zenginliklerini misafirlerine en doğru ve güvenilir şekilde sunmak
              amacıyla kurulmuş, Rize – Çayeli merkezli bir seyahat acentesidir.
              Kurulduğumuz günden bu yana, bölgeye gelen yerli ve yabancı
              misafirlerimize kaliteli, planlı ve güvenilir tur hizmetleri
              sunmayı ilke edindik.
            </p>
            <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed ">
              Karadeniz coğrafyasını yalnızca bir tur rotası olarak değil,
              içinde yaşadığımız ve yakından tanıdığımız bir değer olarak
              görüyoruz. Bu nedenle hazırladığımız tüm programlar, bölgeyi bilen
              yerel ekibimizin saha deneyimiyle şekillendirilmekte ve her
              ayrıntı misafir memnuniyeti gözetilerek planlanmaktadır.
            </p>
          </div>
        </div>

        {/* Hizmet Anlayışımız */}
        <div className="hakkimizda-content-item flex flex-col gap-6 border-b border-gray-300 pb-10">
          <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold ">
            Hizmet Anlayışımız
          </h1>
          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify">
            Çayeli Tur olarak önceliğimiz; misafirlerimize güvenli, konforlu ve
            nitelikli bir seyahat deneyimi sunmaktır. Turlarımızda;
          </p>
          <ul className="flex flex-col gap-3 pl-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
              <p className="text-gray-800 font-medium text-base md:text-lg lg:text-lg">
                Profesyonel rehberlik hizmeti
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
              <p className="text-gray-800 font-medium text-base md:text-lg lg:text-lg">
                Planlı ve zamanında ulaşım
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
              <p className="text-gray-800 font-medium text-base md:text-lg lg:text-lg">
                Konforlu araçlar
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
              <p className="text-gray-800 font-medium text-base md:text-lg lg:text-lg">
                Özenle seçilmiş rotalar
              </p>
            </li>
          </ul>
          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed">
            esas alınır. Amacımız, misafirlerimizin sadece bir geziye değil, iyi
            organize edilmiş ve keyifli bir deneyime katılmalarını sağlamaktır.
          </p>
        </div>

        {/* Turlarımız */}
        <div className="hakkimizda-content-item flex flex-col gap-6 border-b border-gray-300 pb-10">
          <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold ">
            Turlarımız
          </h1>
          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify">
            Firmamız, Karadeniz’in en özel noktalarını kapsayan geniş bir tur
            yelpazesi sunmaktadır. Başlıca hizmet alanlarımız:
          </p>
          <ul className="flex flex-col gap-3 pl-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
              <p className="text-gray-800 font-medium text-base md:text-lg lg:text-lg">
                Günübirlik turlar
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
              <p className="text-gray-800 font-medium text-base md:text-lg lg:text-lg">
                Konaklamalı Karadeniz ve yayla turları
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
              <p className="text-gray-800 font-medium text-base md:text-lg lg:text-lg">
                Doğa ve kültür turları
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
              <p className="text-gray-800 font-medium text-base md:text-lg lg:text-lg">
                Özel gruplara ve kurumlara yönelik organizasyonlar
              </p>
            </li>
          </ul>
          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed">
            Seyahat acentemiz, Karadeniz’in eşsiz güzelliklerinden ilham alarak
            yola çıkmış; bugün ise Türkiye’nin dört bir yanına ve yurt dışına
            uzanan kapsamlı tur hizmetleri sunmaktadır. Misafirlerimizin
            beklentilerini ön planda tutan anlayışımızla, güvenilir, konforlu ve
            keyifli seyahat deneyimleri tasarlıyoruz. Her yolculuğu özel kılan
            detaylara önem veren ekibimizle, hayal ettiğiniz seyahatleri gerçeğe
            dönüştürüyoruz.
          </p>
        </div>

        {/* Neden Çayeli Tur? */}
        <div className="hakkimizda-content-item flex flex-col gap-6 border-b border-gray-300 pb-10">
          <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold ">
            Neden Çayeli Tur?
          </h1>
          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed ">
            Yerel bir acente olmamız, bölgeyi yüzeysel değil detaylarıyla
            tanımamızı sağlamaktadır. Mevsim koşullarından yol durumlarına,
            ziyaret edilecek noktaların en uygun zamanlarından alternatif
            güzergâhlara kadar her ayrıntı ekibimiz tarafından yakından takip
            edilir.
          </p>
          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed ">
            Bu sayede misafirlerimize standart turların ötesinde, daha verimli,
            daha güvenli ve daha keyifli programlar sunmaktayız.
          </p>
        </div>

        {/* Geniş Araç Yelpazemiz */}
        <div className="hakkimizda-content-item flex flex-col gap-6 border-b border-gray-300 pb-10 overflow-hidden">
          <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold ">
            Geniş Araç Yelpazemiz
          </h1>

          {/* Araç Resimleri: Mobilde yana kaydırılabilir (Carousel), Masaüstünde Grid/Flex */}
          <div className="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="w-[85%] sm:w-[45%] md:w-1/3 shrink-0 snap-center flex justify-center items-end">
              <Image
                src={arac1}
                alt="Otobüs"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
            <div className="w-[85%] sm:w-[45%] md:w-1/3  snap-center flex justify-center items-end max-[769px]:shrink-0">
              <Image
                src={arac3}
                alt="Minibüs 1"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
            <div className="w-[85%] sm:w-[45%] md:w-1/3  snap-center flex justify-center items-end max-[769px]:shrink-0">
              <Image
                src={arac2}
                alt="Minibüs 2"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed  mt-4">
            Farklı kapasitelere sahip modern araç filomuzla; 8, 16, 19, 27 ve 45
            kişilik koltuk düzenlerine kadar uzanan seçenekler sunarak güvenli
            ve konforlu ulaşım hizmetleri sağlıyoruz. Kurumsal hizmet
            anlayışımız, deneyimli sürücü kadromuz ve düzenli bakımları yapılan
            araçlarımızla bireysel ve kurumsal tüm transfer ihtiyaçlarına
            profesyonel çözümler üretiyoruz. Yolcu memnuniyetini esas alarak,
            her yolculuğu planlı, zamanında ve sorunsuz şekilde
            gerçekleştiriyoruz.
          </p>
        </div>

        {/* Servis Hizmetlerimiz */}
        <div className="hakkimizda-content-item flex flex-col gap-6 border-b border-gray-300 pb-10">
          <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold ">
            Servis Hizmetlerimiz
          </h1>
          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed ">
            Turizm faaliyetlerimizin yanı sıra, Çayeli Tur; okul, fabrika ve
            personel servis taşımacılığı alanlarında da hizmet vermektedir.
            Kurumsal taşımacılık süreçleri, planlama, süreklilik ve mevzuata
            uygunluk esas alınarak yürütülmekte; bu kapsamda araç filomuz ve
            operasyon yapımız düzenli olarak denetlenmektedir. Eğitim kurumları
            ve işletmelere yönelik geliştirilen servis çözümleriyle, günlük
            ulaşım ihtiyaçlarına güvenli ve kontrollü bir şekilde yanıt
            verilmektedir.
          </p>
        </div>

        {/* Kalite ve Güven */}
        <div className="hakkimizda-content-item flex flex-col gap-6 border-b border-gray-300 pb-10">
          <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold ">
            Kalite ve Güven
          </h1>
          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed ">
            Çayeli Tur olarak tüm hizmet süreçlerimizde şeffaflık, güvenilirlik
            ve misafir memnuniyeti temel ilkelerimizdir. Tur öncesinden dönüşe
            kadar her aşamada misafirlerimizle birebir iletişim kurar, ihtiyaç
            ve beklentilere göre en uygun çözümleri sunarız.
          </p>
          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed ">
            Bugüne kadar binlerce misafirimizi Karadeniz’in eşsiz doğasıyla
            buluşturmuş olmanın verdiği sorumlulukla, hizmet kalitemizi her
            geçen gün daha da ileri taşımayı hedefliyoruz.
          </p>
        </div>

        {/* Kapanış */}
        <div className="hakkimizda-content-item flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl text-[#1f2c42] font-bold ">
            Sizi de Aramızda Görmekten Memnuniyet Duyarız
          </h1>
          <p className="text-gray-700 text-base md:text-lg lg:text-lg text-justify leading-relaxed  ">
            Karadeniz’i güvenilir bir organizasyonla, doğru rotalar ve
            profesyonel bir ekip eşliğinde keşfetmek istiyorsanız, Çayeli Tur
            olarak sizleri memnuniyetle ağırlamaktan mutluluk duyarız.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HakkimizdaHero;
