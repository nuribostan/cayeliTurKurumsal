import Image from "next/image";
import bg from "@/assets/hakkimizda/hakkimizda-hero-bg.jpg";

const YasalBilgilerHero = () => {
  return (
    <div className="yasalBilgiler overflow-x-clip">
      <div className="iletisim-hero-bg w-full h-[calc(85svh-80px)] relative">
        <Image
          src={bg}
          alt="hakkimizda-hero"
          width={1920}
          height={1080}
          className="w-full h-full"
        />
        <div className="tur-title w-full h-fit absolute top-35 left-20 max-md:top-10 max-md:left-5">
          <h1 className="text-6xl text-[#1f2c42] font-bold max-md:text-4xl flex items-start gap-4 max-md:flex-col">
            <span>Yasal Bilgiler</span>
          </h1>
        </div>
      </div>

      <div className="iletisim-content w-full h-full flex-col justify-start items-start bg-white p-10">
        <div className="iletisim-item flex flex-col justify-start items-start gap-2.5 border-b border-[#979797] py-5">
          <div className="iletisim-title">
            <h1 className="text-3xl text-[#1f2c42] font-bold">
              Rezervasyon Bilgileri
            </h1>
          </div>

          <p className="text-black text-2xl text-justify">
            Çayeli Tur Seyahat Acentesi üzerinden yapılan tüm rezervasyonlar,
            müşteri tarafından verilen bilgi ve talepler doğrultusunda
            oluşturulur.
          </p>

          <p className="text-black text-2xl text-justify">
            Rezervasyon işlemleri;
          </p>

          <ul className="flex flex-col items-start justify-start gap-2.5 pl-5">
            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Ofisimizden yüz yüze
              </p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Telefon aracılığıyla
              </p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Web sitemiz üzerindeki iletişim ve talep formları yoluyla
                gerçekleştirilebilir.{" "}
              </p>
            </li>
          </ul>

          <p className="text-black text-2xl text-justify">
            Rezervasyonun kesinleşebilmesi için, ilgili tur/ürün bedelinin
            tamamının veya belirlenen kapora tutarının ödenmiş olması
            gerekmektedir. Ödeme tamamlanmadan yapılan talepler ön rezervasyon
            niteliğindedir ve kesinlik taşımaz.
          </p>

          <p className="text-black text-2xl text-justify">
            Müşteri, rezervasyon sırasında verdiği bilgilerin (isim, soyisim,
            T.C. kimlik numarası, doğum tarihi, iletişim bilgileri vb.) doğru ve
            eksiksiz olduğunu kabul eder. Yanlış veya eksik bilgi verilmesinden
            doğabilecek tüm sorumluluk müşteriye aittir.
          </p>
        </div>

        <div className="iletisim-item flex flex-col justify-start items-start gap-2.5 border-b border-[#979797] py-5">
          <div className="iletisim-title">
            <h1 className="text-3xl text-[#1f2c42] font-bold">
              İptal ve İade Koşulları
            </h1>
          </div>

          <p className="text-black text-2xl text-justify">
            Satın alınan tur, uçak bileti veya hizmetlerin iptal ve iade
            koşulları;
          </p>

          <ul className="flex flex-col items-start justify-start gap-2.5 pl-5">
            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Hizmet sağlayıcı firmaların
              </p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">Havayollarının</p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">Otellerin</p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Tur operatörlerinin belirlediği kurallar doğrultusunda uygulanır
              </p>
            </li>
          </ul>

          <p className="text-black text-2xl text-justify">
            Genel olarak; Tur başlangıç tarihine belirli bir süre kala yapılan
            iptallerde kesinti uygulanabilir.
          </p>
        </div>

        <div className="iletisim-item flex flex-col justify-start items-start gap-2.5 border-b border-[#979797] py-5">
          <div className="iletisim-title">
            <h1 className="text-3xl text-[#1f2c42] font-bold">
              Mesafeli Satış Sözleşmesi
            </h1>
          </div>

          <p className="text-black text-2xl text-justify">
            Bu sözleşme, Çayeli Tur Seyahat Acentesi (Satıcı) ile web sitesi,
            telefon veya elektronik ortam üzerinden hizmet satın alan müşteri
            (Alıcı) arasında düzenlenmiştir. Alıcı, satın aldığı hizmetin temel
            nitelikleri, fiyatı, ödeme şekli ve iptal koşulları hakkında ön
            bilgilendirildiğini kabul eder. Satıcı, satın alınan hizmeti
            eksiksiz ve belirtilen tarihlerde sunmakla yükümlüdür. Alıcı ise
            ödeme yükümlülüğünü yerine getirmekle sorumludur. Mesafeli satış
            sözleşmesi kapsamında sunulan hizmetler, belirli bir tarihte veya
            dönemde ifa edilecek hizmetler kapsamında olduğundan, cayma hakkı
            bazı ürünlerde kullanılamayabilir. Uyuşmazlık halinde, T.C. Ticaret
            Bakanlığı tarafından belirlenen parasal sınırlar dahilinde Tüketici
            Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
          </p>
        </div>

        <div className="iletisim-item flex flex-col justify-start items-start gap-2.5 border-b border-[#979797] py-5">
          <div className="iletisim-title">
            <h1 className="text-3xl text-[#1f2c42] font-bold">
              Gizlilik Politikası{" "}
            </h1>
          </div>

          <p className="text-black text-2xl text-justify">
            Çayeli Tur Seyahat Acentesi olarak, müşterilerimizin gizliliğine
            büyük önem veriyoruz.
          </p>

          <p className="text-black text-2xl text-justify">
            Web sitemiz üzerinden veya iletişim kanallarımız aracılığıyla
            paylaşılan kişisel bilgiler;
          </p>

          <ul className="flex flex-col items-start justify-start gap-2.5 pl-5">
            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Rezervasyon işlemlerinin yürütülmesi
              </p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Müşteri ile iletişim kurulması
              </p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Yasal yükümlülüklerin yerine getirilmesi amaçlarıyla kullanılır.
              </p>
            </li>
          </ul>

          <p className="text-black text-2xl text-justify">
            Kişisel bilgiler, üçüncü kişilerle açık rıza olmaksızın paylaşılmaz,
            yalnızca hizmetin gerektirdiği durumlarda (havayolu, otel, tur
            operatörü vb.) ilgili taraflarla sınırlı olarak paylaşılır.Web
            sitemiz, kullanıcı deneyimini geliştirmek amacıyla çerezler
            (cookies) kullanabilir.
          </p>
        </div>

        <div className="iletisim-item flex flex-col justify-start items-start gap-2.5 py-5">
          <div className="iletisim-title">
            <h1 className="text-3xl text-[#1f2c42] font-bold">
              KVKK Aydınlatma Metni
            </h1>
          </div>
          <p className="text-black text-2xl text-justify">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında,
            Çayeli Tur Seyahat Acentesi veri sorumlusu sıfatıyla kişisel
            verilerinizi işlemektedir.
          </p>
          <p className="text-black text-2xl text-justify">
            İşlenen Kişisel Veriler:
          </p>
          <ul className="flex flex-col items-start justify-start gap-2.5 pl-5">
            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">Ad, soyad</p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Telefon numarası
              </p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">E-posta adresi</p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                T.C. kimlik numarası (gerekli durumlarda)
              </p>
            </li>
          </ul>
          <p className="text-black text-2xl text-justify">İşleme Amaçları:</p>
          <ul className="flex flex-col items-start justify-start gap-2.5 pl-5">
            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Rezervasyon ve satış işlemlerinin yürütülmesi
              </p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Müşteri taleplerinin karşılanması
              </p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Yasal yükümlülüklerin yerine getirilmesi
              </p>
            </li>
          </ul>

          <p className="text-black text-2xl text-justify">
            Kişisel verileriniz, KVKK’nın 5. ve 6. maddelerinde belirtilen
            şartlara uygun olarak işlenmekte ve saklanmaktadır.
          </p>

          <p className="text-black text-2xl text-justify">KVKK kapsamında;</p>

          <ul className="flex flex-col items-start justify-start gap-2.5 pl-5">
            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Kişisel verilerinizin işlenip işlenmediğini öğrenme
              </p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                Düzeltilmesini veya silinmesini talep etme
              </p>
            </li>

            <li className="text-black text-2xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p className="text-black text-2xl text-justify">
                İşlemeye itiraz etme haklarına sahipsiniz.
              </p>
            </li>
          </ul>

          <p className="text-black text-2xl text-justify">
            Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YasalBilgilerHero;
