const questions = [
  {
    id: 1,
    question: "Tercihlerde genel yüzdelik mi yoksa il yüzdelik mi kullanılır?",
    answer:
      "Tercih yaparken merkezi yerleştirmede iller arası hareketlilik olabileceği için genel yüzdelik dilim kullanılmalıdır.",
  },
  {
    id: 2,
    question: "Yerel yerleştirme yapmak zorunlu mu?",
    answer:
      "Evet, yerel yerleştirmede en az 1 okul tercih etmek zorunludur. Yerel yerleştirme listesinde tercih yapmayan öğrencilere merkezi yerleştirme listesi açılmayacaktır.",
  },
  {
    id: 3,
    question: "Yerel yerleştirmede kaç tercih hakkım var?",
    answer:
      "Yerel yerleştirme listesinde en fazla 5 okul tercih hakkı bulunmaktadır. Yerel yerleştirme listesindeki ilk 3 tercihin kayıt alanından okullar olması zorunludur. Tercih sırası fark etmeksizin aynı türden (Anadolu lisesi, mesleki ve teknik Anadolu lisesi, Anadolu imam hatip lisesi) en fazla 3 okul tercih edilebilir.",
  },
  {
    id: 4,
    question:
      "İstediğim okul komşu kayıt alanında olursa onu tercih edebilir miyim?",
    answer:
      "Yerel yerleştirme listesindeki ilk 3 okul kayıt alanında olmak zorundadır. Ancak 4. ve 5. tercihte komşu kayıt alanından okul yazılabilir. Aynı şekilde diğer kayıt alanından da okul yazılabilir.",
  },
  {
    id: 5,
    question: "Merkezi yerleştirmede kayıt alanı kriteri var mı?",
    answer:
      "Kayıt alanı kriteri sadece yerel yerleştirme tercih grubunda bulunmaktadır. Merkezi yerleştirme listesinde Türkiye’nin her yerinden okul tercih edilebilir.",
  },
  {
    id: 6,
    question:
      "Sınava girdim ama puanımla bir okula gitmek istemiyorum. Yine de merkezi yerleştirme tercihi yapmak zorunda mıyım?",
    answer:
      "Hayır. Merkezi yerleştirme tercih grubunda tercihte bulunmak zorunlu değildir. İstemeyen öğrenciler merkezi yerleştirme grubunda tercihte bulunmayabilirler.",
  },
  {
    id: 7,
    question: "Pansiyonlu okullar ne demek? Tercih etmek zorunlu mu?",
    answer:
      "Pansiyonlu okullar, öğrencinin kayıt ve komşu kayıt alanı dışındaki yani ilçe/il dışındaki (diğer kayıt alanı) pansiyonu olan ve yerel yerleştirme ile öğrenci alan okullar demektir. Pansiyonlu okullar tercih grubunda tercihte bulunmak zorunlu değildir. İstemeyen öğrenciler pansiyonlu okullar grubunda tercihte bulunmayabilir.",
  },
  {
    id: 8,
    question: "Tercihlerimi evde kendim yapabilir miyim?",
    answer:
      "Evet, tercihler e-okuldan yapılabilmektedir. Ancak tercihler e-okul sistemine işlendikten sonra en geç 19 Temmuz’a kadar herhangi bir ortaokul müdürlüğüne gidilerek, öğrenci velisi tarafından onaylanmalıdır.",
  },
  {
    id: 9,
    question: "Onay işlemleri için kendi okuluma gitmek zorunda mıyım?",
    answer:
      "Onaylama işlemini Türkiye’nin tüm il ve ilçelerinde herhangi bir ortaokul/İmam hatip ortaokul müdürlüğünde yapılabilmektedir.",
  },
  {
    id: 10,
    question: "Tercih ettiğim okullardan herhangi biri gelmezse ne olacak?",
    answer:
      "Tercih edilen okullardan hiçbiri gelmezse 1.nakil (24-28 Temmuz) ve 2.nakil (31 Temmuz-4 Ağustos) dönemlerinde tekrar tercih yapılmalıdır.",
  },
  {
    id: 11,
    question:
      "İlk tercihlerde bir okula yerleştim. Nakillerde tekrar bir okul tercihinde bulunabilir miyim?",
    answer:
      "Evet, ilk tercihlerde bir okula yerleşen öğrenciler de nakil tercihinde tekrar tercih yapabilecekler. Öğrenci nakil tercihinde yeni bir okul kazanırsa kaydı o okula geçer, nakillerde bir okul kazanamazsa ilk yerleştirmede kazandığı okulda kaydı devam eder.",
  },
  {
    id: 12,
    question:
      "Özel okula kayıt yaptırdım. LGS tercihi yapmak istiyorum. Bu mümkün mü?",
    answer:
      "Özel okullara kayıt yaptıran öğrencilere tercih sistemi açılmayacaktır. Tercih yapmak isteyen öğrencilerin özel okullardan kaydını sildirmeleri gerekmektedir.",
  },
  {
    id: 13,
    question: "Mesleki eğitim merkezi için tercih yapılacak mı?",
    answer:
      "Hayır. Mesleki eğitim merkezine gitmek isteyen öğrenciler mesleki eğitim merkezlerine direkt giderek kayıt yaptırabilirler.",
  },
  {
    id: 14,
    question: "Sistem tercih listelerinden ilk önce hangisine bakıyor?",
    answer:
      "Öğrencilerin yerleştirmeleri yapılırken ilk önce merkezi yerleştirme listelerine, sonra yerel yerleştirme listelerine, sonra pansiyonlu okullar listelerine bakılır.",
  },
  {
    id: 15,
    question:
      "İlk tercihlerde bir okula yerleşen öğrenci için nakil tercihlerinde kayıt alanı kısıtlaması olur mu?",
    answer:
      "İlk tercihlerde herhangi bir okula yerleşen bir öğrenci için nakil tercihlerinde hiçbir kısıtlama olmaz.",
  },
  {
    id: 16,
    question: "Açık öğretime gidecek bir öğrenci nereye yönlendirilmeli?",
    answer:
      "Açık öğretime gitmek isteyen öğrenciler açık öğretim kayıtlarının yapıldığı Ağustos-Eylül aylarında kayıt için halk eğitim merkezlerine yönlendirilmelilerdir.",
  },
  {
    id: 17,
    question: "Tercih danışmanları sisteme tercih kayıt işlemi yapabilir mi?",
    answer:
      "Kesinlikle hayır. Tercih danışmanlarının sisteme tercih girişi yapmaları 2023 Tercih Danışmanlığı Kılavuzuna göre kesinlikle yasaklanmıştır.",
  },
  {
    id: 18,
    question:
      "Tercihler yapıldı ve onaylandı. Daha sonra değişiklik yapılır mı?",
    answer:
      "Onaylanan tercihler, tercih süresi içerisinde veli dilekçesi içinde okul idaresi tarafından iptal edilebilir. İptal işlemi gerçekleştikten sonra öğrenci tekrar tercih yapabilir.",
  },
  {
    id: 19,
    question: "Tercih danışmanlığı yapılırken EK-1 formu doldurulmalı mı?",
    answer:
      "Hayır böyle bir zorunluluk bulunmamaktadır. Ancak isteyen tercih danışmanları kullanabilir.",
  },
  {
    id: 20,
    question:
      "Yerel yerleştirmeden bir okula yerleşen öğrenci, nakillerde merkezi yerleştirmeden bir okula geçebilir mi?",
    answer:
      "Sınava giren bir öğrenciyse evet, ilk tercihlerde yerel yerleştirmeden bir okula yerleşen öğrenci nakil tercihlerinde merkezi yerleştirme grubundan bir okula geçebilir.",
  },
  {
    id: 21,
    question: "Kaynaştırma öğrencileri için ne yapılmalı?",
    answer:
      "Kaynaştırma öğrencileri ilk tercih, 1.nakil ve 2.nakil dönemlerinde tercihte bulunabilir. Bu tercihlerde bir okula yerleşemeyenler gerekli belgeleri ile il/ilçe komisyonlarına başvuru yapabilirler.",
  },
  {
    id: 22,
    question:
      "Tercih yaparken öğrencinin yüzdelik diliminin ne kadar üstünü ve altını yazmalıyız?",
    answer:
      "Lise tercihlerinde 10 tercih hakkı birçok öğrenci için yeterlidir. Örneğin ilçe dışına çıkmak istemeyen bir öğrenci zaten 10 tercih hakkını dolduramayacaktır. Ya da gitmek istediği birkaç yer olan öğrenci zaten 10 tercih hakkını dolduramayacaktır. Bu öğrenciler için yüzdeliğe bakmadan istedikleri tüm liseler yazılabilir. 10'dan fazla seçeneği olan öğrenciler için yüzdeliğinin yarısından biraz daha yukarıdan (örneğin %5 ise %2'den) yazmak yararlı olacaktır. Alt sınır olarak ise 2 katı kadar (örneğin %5 ise %10) aşağı inilebilir. Ancak gitmek istemediği bir okulu listeye eklemek yerine daha yukarıda (örneğin %6-7'de) tercih bırakılıp, yerel yerleştirme listesine odaklanılabilir.",
  },
  {
    id: 23,
    question: "OBP Puanları nereden gözükür?",
    answer: "Öğrencilerin okul başarı puanları tercih ekranında gözükür.",
  },
  {
    id: 24,
    question:
      "Meslek liselerinin bazılarının yanında (sınavlı) yazıyor, bunun sebebi nedir?",
    answer:
      "Genelde bu okulların aynı alanda sınavsız alan bölümleri de vardır. İki bölüm arasındaki farklılığı göstermek için sınavlı ibaresi bulunur. Zaten merkezi yerleştirmede bu okulu tercih ettiğimiz için sınavlı olduğunu biliyoruz. Yani bu ibare aslında çok önemli bir ibare değildir.",
  },
  {
    id: 25,
    question: "Komşu kayıt alanından puanı yeterse gelme ihtimali nedir?",
    answer:
      "Sistem öğrencilerin önce ikamet adreslerine bakar. Okul kendi kayıt alanındaki tüm öğrenci aldıktan sonra hala boş kontenjanı varsa o zaman komşu kayıttan gelecek öğrencilere bakar ve öğrencinin puanı o zaman önemli olur. Yani kayıt alanındaki 5 OBP puanlı öğrenci, komşu kayıt alanındaki 100 OBP puanlı öğrenciden önceliklidir.",
  },
  {
    id: 26,
    question: "Farklı lise türleri arasında geçişler nasıl oluyor?",
    answer:
      "Liseler arası nakiller lise işleyişiyle ilgili bir durumdur. Bu nakiller hakkında öğrencilerin en sağlıklı bilgiyi lisedeki öğretmenlerinden öğrenebileceklerini belirterek 10. sınıfın sonuna kadar öğrencilerin tüm lise türleri arasında geçiş imkânı bulunmaktadır.",
  },
  {
    id: 27,
    question: "Onay işleminden sonra tercihlerde değişiklik yapılır mı?",
    answer:
      "Okul onayını gerçekleştikten sonra tercih ekranında değişiklik yapılamaz. Tercihleri değiştirmenin tek yolu iptal dilekçesi vermektir. Okul tercihlerimizi iptal eder ve henüz tercih sürecindeysek yeniden tercih yapabiliriz.",
  },
  {
    id: 28,
    question: "Nakil dönemi için okullar belli bir kontenjan ayırıyor mu?",
    answer:
      "Hayır. Okulların ilk tercihlerden boş kalan ya da o okula yerleşen ama yine nakillerde başka okula/özel okula geçen öğrencilerden boşalan yerlere yeni öğrenciler yerleştirilir.",
  },
  {
    id: 29,
    question:
      "Tercih sürecinde adres değişikliğinin sisteme yansıması ne kadar sürer?",
    answer:
      "Bu süre ilçe nüfus müdürlüklerine göre değişmektedir. Onay işlemi ortalama 2-3 gün sürmekte; küçük illerde daha hızlı, büyük illerde daha yavaş olabilmektedir.",
  },
  {
    id: 30,
    question:
      "Tercih danışmanlığı yaptığımıza dair MEBBİS e-Rehberlik'e öğrencileri kaydedecek miyiz?",
    answer:
      "Evet. Tercih danışmanlığı hizmeti alan tüm öğrencilerin T.C. Kimlik Numaralarıyla e-rehberlik sistemine kaydetmemiz gerekmektedir.",
  },
  {
    id: 31,
    question:
      "Yetenek ile öğrenci alan okullara başvuru yapan bir öğrenci tercih işlemlerinde bulunabilir mi?",
    answer:
      "Evet, tercihte bulunabilirler. Ancak yetenek sınavı ile öğrenci alan okullara kesin kayıt işlemini tamamlayan öğrenciler, tercihte bulunamayacaklardır. Ayrıca, bu okullara kayıt (aday kayıt/ön kayıt ya da kesin kayıt) yaptırmadan önce tercih başvurusu yapmış olan öğrencilerin tercihleri, Bakanlık tarafından iptal edilecektir.",
  },
  {
    id: 32,
    question:
      "Özel eğitim/kaynaştırma öğrencilerinin tercih işlemleri nasıl olacak?",
    answer:
      "Özel eğitim/kaynaştırma öğrencileri de diğer öğrenciler gibi tercih ve nakil işlemleri yapabilir. Evlerine yakın okula yerleşen öğrenciler için süreç tamamlanır ancak evlerine yakın okula yerleşemeyen veya herhangi bir okula yerleşemeyen öğrenciler, geçerli 'Engelli Sağlık Kurulu Raporu/Çocuklar İçin Özel Gereksinim Raporu (ÇÖZGER)' ve ortaöğretim kademesine yönelik 'Özel Eğitim Değerlendirme Kurulu Raporu' doğrultusunda ikamet adresleri, yetersizlik durumu ve özellikleri dikkate alınarak yerel yerleştirme ile 08-16 Ağustos 2023 tarihlerinde İl/İlçe Öğrenci Yerleştirme ve Nakil Komisyonu kararı ile yerleştirme başvuruları alınarak 18 Ağustos 2023 tarihinde yerleştirme işlemleri tamamlanacaktır.",
  },
  {
    id: 33,
    question:
      "Açıköğretime kaydolmak isteyen öğrenci ne yapacak, tercih verecek mi?",
    answer:
      "Açıköğretime kaydolmak isteyen öğrenciler direkt halk eğitim merkezlerine başvuru yaparak kaydolabilir. Kayıt işlemleri ağustos ayının ortasından itibaren başlayacaktır.",
  },
];
export default questions;
