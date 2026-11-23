import { ProfileData } from './types';

export const portfolioData: ProfileData = {
  name: "Ömer Faruk Köse",
  title: "Yazılım Mühendisi",
  role: "İyex Teknoloji · Yapay Zekâ ve Görüntü İşleme Mühendisi",
  tagline: "Derin öğrenme modellerini sahada çalışan ürünlere dönüştüren yapay zekâ ve görüntü işleme mühendisi.",
  bio: "Yazılım Mühendisliği mezunuyum (GNO 3,14). İyex Teknoloji'de sahada çalışan iki endüstriyel yapay zekâ ürünü geliştiriyorum: 3 sahada çalışan YOLO tabanlı video yönetim sistemi ve günde 1.200 lastik okuyan OCR sistemi. Derin öğrenme modellerini FastAPI, PostgreSQL ve React ile uçtan uca, kapalı ağda çalışan ürünlere dönüştürüyorum.",
  email: "koseomer332@gmail.com",
  phone: "+90 (507) 496 24 01",
  github: "https://github.com/rose-omer",
  linkedin: "https://linkedin.com/in/omerkose38",
  medium: "https://medium.com/@koseomer",
  cvUrl: "/cv/Omer-Faruk-Kose-CV.pdf",
  location: "Kayseri, Türkiye",
  skills: [
    // Araçlar ve Diller
    { name: "Python", level: 95, category: "Diller" },
    { name: "SQL", level: 90, category: "Diller" },
    { name: "NoSQL", level: 85, category: "Diller" },
    { name: "Java", level: 85, category: "Diller" },
    { name: "NodeJs", level: 80, category: "Diller" },
    { name: "Kotlin", level: 75, category: "Diller" },
    { name: "Html/Css", level: 90, category: "Diller" },
    { name: "Javascript", level: 85, category: "Diller" },
    // Framework
    { name: "Selenium", level: 80, category: "Framework" },
    { name: "Tensorflow", level: 85, category: "Framework" },
    { name: "Flask", level: 80, category: "Framework" },
    { name: "Django", level: 75, category: "Framework" },
    { name: "PyTorch", level: 85, category: "Framework" },
    { name: "FastAPI", level: 85, category: "Framework" },
    { name: "React", level: 80, category: "Framework" },
    // Tanıdık Kütüphane
    { name: "OpenCV", level: 90, category: "Kütüphane" },
    { name: "Pandas", level: 85, category: "Kütüphane" },
    { name: "Numpy", level: 85, category: "Kütüphane" },
    { name: "Matplotlib", level: 80, category: "Kütüphane" },
    { name: "PyQT", level: 75, category: "Kütüphane" },
    { name: "Docker", level: 70, category: "Araçlar" },
    { name: "PostgreSQL", level: 85, category: "Araçlar" },
    { name: "TensorRT", level: 75, category: "Araçlar" },
    { name: "Linux", level: 75, category: "Araçlar" },
    { name: "YOLO", level: 85, category: "Kütüphane" },
    { name: "MediaPipe", level: 80, category: "Kütüphane" },
  ],
  experience: [
    {
      id: "exp-iyex",
      role: "Yapay Zekâ ve Görüntü İşleme Mühendisi",
      company: "İyex Teknoloji",
      period: "Haziran 2026 — Günümüz · Ankara (Şubat – Haziran 2026 stajyer)",
      description: "IyexVMS: güvenlik kameralarını yapay zekâ ile izleyen, kapalı ağda çalışan video yönetim sistemi (3 sahada aktif). YOLO modellerini kameralara bağladım; hangi modelin hangi bölgede ve saatte çalışacağını seçen kural motorunu yazdım. Her kamera ayrı süreçte çalışır; çöken süreç kendiliğinden yeniden başlar.\nLastiksayar: günde ~1.200 lastiğin yanağındaki marka, ebat ve DOT bilgisini okuyup etiketleyen sistem. Birden çok OCR motorunu birleştirerek %94–96 okuma doğruluğuna ulaştım; yazı bulma modelini TensorRT ile hızlandırarak okuma süresini yaklaşık 2,2 kat kısalttım. Siemens S7 PLC, etiket yazıcısı ve QR okuyucu sürücülerini yazdım."
    },
    {
      id: "exp-seasoftw",
      role: "Yazılım Programcısı",
      company: "SeaSoftw",
      period: "Eylül — Ekim 2025 · Proje bazlı",
      description: "arikogluyapi.com arayüzünü tasarladım; hosting ve canlıya alımı CI/CD ile yönettim, teknik SEO ile organik trafiği artırdım."
    },
    {
      id: "exp-emar",
      role: "Stajyer Yazılım Geliştirici",
      company: "Emar Proje Yazılım Danışmanlık",
      period: "Haziran — Ağustos 2025 · Kayseri",
      description: "SQL sorguları ve veri yönetimi üzerinde çalıştım; şirket içi süreçler için CRM yönetim paneli geliştirdim. Yapay zekâ destekli kurumsal uygulamalarla operasyonel verimliliği artırdım."
    },
    {
      id: "exp-gini",
      role: "Arama Kalitesi Geliştirme Uzmanı",
      company: "Gini Talent",
      period: "Ekim 2022 — Eylül 2024 · Yarı zamanlı",
      description: "Arama motoru algoritmalarının doğruluğunu artırmak için veri analizi ve içerik değerlendirme süreçlerini yönettim."
    }
  ],
  education: [
    {
      id: "edu1",
      degree: "Yazılım Mühendisliği, Lisans",
      school: "Mehmet Akif Ersoy Üniversitesi",
      period: "2022 — Haziran 2026",
      description: "GNO: 3,14 / 4,00"
    }
  ],
  projects: [
    {
      id: "goren-goz",
      title: "Gören Göz",
      shortDescription: "Görme engelliler için sesli engel uyarısı ve Türkçe soru-cevap veren mobil asistan.",
      fullDescription: "Telefon kamerası önü izler; uygulama tehlikeyi sesle, titreşimle ve kısa Türkçe cümleyle bildirir. Algılama şimdilik sunucuda MiDaS derinlik ve YOLO ile çalışır. Uyarı motoru çarpışma süresi (TTC), nesne boyundan mesafe ve histerezis kullanır. Baston ya da rehber köpeğin yerini tutmaz; yardımcı bir araçtır.",
      technologies: ["Flutter", "FastAPI", "YOLO", "MiDaS", "Python"],
      githubUrl: "https://github.com/rose-omer/goren_goz_mobil.app",
      category: "Görüntü İşleme",
      features: [
        "Dört bantlı yürüyüş ekranı, TalkBack ve haptik desen",
        "TTC, mesafe ve histerezis ile uyarı motoru",
        "Kameradan Türkçe soru-cevap (VLM)",
        "API anahtarı ve hız sınırı olan FastAPI backend"
      ]
    },
    {
      id: "spam-mail",
      title: "SpamMailD",
      shortDescription: "Bir e-postayı 0–100 risk skoru ve nedenleriyle değerlendiren servis ve web paneli.",
      fullDescription: "Bir .eml dosyasını ya da ham maili alır. İçerik modeli, kimlik doğrulama (SPF/DKIM/DMARC), URL ve ek analizi ayrı ayrı çalışır; sonuç tek bir risk skoru ve okunur nedenlerdir. Servis hiçbir bağlantıyı açmaz ya da indirmez. EMAR Proje stajında geliştirildi.",
      technologies: ["Python", "FastAPI", "Scikit-learn", "NLP"],
      imageUrl: "/projects/spam-mail.png",
      githubUrl: "https://github.com/rose-omer/Spam-Mail-Detection",
      category: "Makine Öğrenmesi",
      features: [
        "Dört ayrı analiz, tek risk skoru",
        "Kararı belirleyen nedenlerin listesi",
        "URL sezgileri: punycode, IP, bağlantı metni uyuşmazlığı",
        "Ek kontrolü: çift uzantı, makro, hash sorgusu"
      ]
    },
    {
      id: "sketch-to-code",
      title: "Sketch-to-Code",
      shortDescription: "Kâğıda çizilmiş sayfa taslağını düzeltir, düzeni algılar ve HTML sayfasına çevirir.",
      fullDescription: "Taslak fotoğrafının perspektifini ve gölgesini düzeltir, kutuları algılar ve bunları Gemini'ye düzen ipucu olarak verir. Üretilen sayfa yalıtılmış bir çerçevede, gerçek cihaz genişliğinde önizlenir. Sayfa sohbetle düzeltilir; her istek yeni bir sürümdür.",
      technologies: ["Python", "OpenCV", "Streamlit", "Gemini"],
      imageUrl: "/projects/sketch-to-code.jpg",
      githubUrl: "https://github.com/rose-omer/Sketch-to-Code-AI",
      category: "Görüntü İşleme",
      features: [
        "Perspektif ve gölge düzeltme",
        "Kutu ve renk paleti algılama",
        "Masaüstü, tablet ve mobil önizleme",
        "Sürüm geçmişi, fark ve ZIP indirme"
      ]
    },
    {
      id: "biz-ikimiz",
      title: "Biz İkimiz",
      shortDescription: "Sevgilimle ikimiz için yazdığım uygulama: gün sayacı, sohbet, anılar, sanal yavru ve 19 oyun.",
      fullDescription: "İki kişilik, ücretsiz bir uygulama. Statik site ve Supabase ile çalışır; telefona PWA ya da Android APK olarak kurulur. Her cihaz odaya onayla girer. Sohbet, anılar, mektuplar ve özel günler ikisi arasında anlık eşitlenir. Birlikte bakılan sanal bir yavru ve iki kişilik 19 oyun içerir.",
      technologies: ["JavaScript", "Supabase", "PWA", "Capacitor", "Firebase"],
      imageUrl: "/projects/biz-ikimiz.png",
      githubUrl: "https://github.com/rose-omer/bizim-oyunlar",
      liveUrl: "https://rose-omer.github.io/bizim-oyunlar/",
      downloadUrl: "https://rose-omer.github.io/bizim-oyunlar/indir/",
      category: "Web",
      features: [
        "Fotoğraflı ve sesli mesajlaşma, tepki, görüldü bilgisi",
        "Sanal yavru: ikiniz de bakınca büyür",
        "19 iki kişilik oyun: tavla, satranç, pişti, amiral battı ve diğerleri",
        "Anlık bildirim (Web Push ve FCM) ve Android ana ekran widget'ı"
      ]
    },
    {
      id: "skin-lesion",
      title: "Dermoskopi Lezyon Sınıflandırma",
      shortDescription: "Dermoskopi görüntüsünden kalibre malign olasılığı ve Grad-CAM açıklaması veren hat.",
      fullDescription: "Eşiği doğrulama kümesinde seçen, olasılığı kalibre eden ve kararını Grad-CAM ile gösteren tekrarlanabilir bir PyTorch/timm hattı. Eğitim ve araştırma demosudur; tıbbi teşhis değildir.",
      technologies: ["PyTorch", "timm", "Grad-CAM", "Python"],
      imageUrl: "/projects/skin-lesion.png",
      githubUrl: "https://github.com/rose-omer/Skin-Cancer-Classification",
      category: "Makine Öğrenmesi",
      features: [
        "Doğrulama kümesinde seçilen karar eşiği",
        "Olasılık kalibrasyonu",
        "Grad-CAM ile görsel açıklama",
        "Model yokken yanıltıcı sonuç göstermeyen demo"
      ]
    },
    {
      id: "stajyer-asistani",
      title: "Stajyer Asistanı",
      shortDescription: "Şirketleri bulan, kaynak göstererek analiz eden ve onaylı başvuru maili yazan asistan.",
      fullDescription: "Staj arayan öğrenci için başvuru asistanı. Şehir ya da teknokentteki şirketleri bulur, her şirketi kaynak göstererek analiz eder ve kişiselleştirilmiş mail taslağı yazar. Mail yalnız kullanıcı okuyup onaylayınca, kullanıcının kendi Gmail hesabından gider.",
      technologies: ["React", "Supabase", "Gemini", "Gmail API"],
      imageUrl: "/projects/stajyer-asistani.png",
      githubUrl: "https://github.com/rose-omer/stajyer-asistani",
      category: "Web",
      features: [
        "PDF özgeçmişten profil önerisi",
        "Kaynaklı şirket analizi",
        "Onay kuyruğu: hiçbir mail onaysız gitmez",
        "Satır düzeyinde güvenlik (RLS)"
      ]
    },
    {
      id: "musteri-paneli",
      title: "Müşteri Yönetim Paneli",
      shortDescription: "İSG firması için harita, filtre, Excel içe aktarım ve rol tabanlı yetkili müşteri paneli.",
      fullDescription: "İş sağlığı ve güvenliği hizmeti veren bir firmanın müşterilerini tehlike sınıfı, fatura ve ödeme durumu ve saha ziyaretiyle birlikte tutar. Yetkiyi rol tabanlı Policy'ler belirler. Excel listesi önizlenerek içe aktarılır; her değişiklik denetim kaydına düşer.",
      technologies: ["Laravel", "Filament", "PHP", "Livewire"],
      imageUrl: "/projects/musteri-paneli.png",
      githubUrl: "https://github.com/rose-omer/MusteriYonetimPaneli",
      category: "Web",
      features: [
        "İl haritasıyla süzülen müşteri listesi",
        "Gösterge paneli ve gecikmiş ödemeler",
        "Önizlemeli Excel içe aktarım",
        "Rol tabanlı yetki ve denetim kaydı"
      ]
    },
    {
      id: "tahmin-oyunu",
      title: "Akıllı Tahmin Oyunu",
      shortDescription: "Aklınızdakini en çok 30 evet/hayır sorusunda bulan ve her oyundan öğrenen oyun.",
      fullDescription: "Soru ağacıyla başlar. Ağaç bitince Bayes güncellemesi ve beklenen bilgi kazancıyla soru seçen öğrenen motor devam eder. Yanlış tahminde doğru cevap kaydedilir; motor o oyunun cevaplarını öğrenir. EMAR Proje stajında geliştirildi.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Gemini"],
      imageUrl: "/projects/tahmin-oyunu.png",
      githubUrl: "https://github.com/rose-omer/Akilli-Tahmin-Oyunu",
      category: "Web",
      features: [
        "Bayes güncellemesi ve bilgi kazancıyla soru seçimi",
        "Her oyundan öğrenen motor",
        "Klavye kısayolları ve ekran okuyucu desteği",
        "Haftalık başarı istatistikleri"
      ]
    },
    {
      id: "kisilik-testi",
      title: "Kişilik ve İlişki Testi",
      shortDescription: "16 soruluk kişilik testi ve iki kişilik uyum testi; cevapları Gemini yorumlar.",
      fullDescription: "Model serbest metin yerine JSON şemasına uyan yapılandırılmış çıktı döner. Sonuç dört eksenli bir kart olarak gösterilir ve Open Graph görseliyle paylaşılabilir bir bağlantı üretilir.",
      technologies: ["Flask", "Postgres", "Gemini", "Pydantic"],
      imageUrl: "/projects/kisilik-testi.png",
      githubUrl: "https://github.com/rose-omer/Personality-and-Relationship",
      liveUrl: "https://personality-and-relationship.onrender.com",
      category: "Web",
      features: [
        "Şemaya bağlı yapılandırılmış AI çıktısı",
        "Dört eksenli sonuç kartı",
        "Paylaşım görseli (1200x630)",
        "CSRF koruması ve hız sınırı"
      ]
    }
  ],
  certificates: [
    {
      id: "cert1",
      title: "Python ile makine öğrenmesi (yapay zeka) atölyesi (70saat)",
      issuer: "Atölye"
    },
    {
      id: "cert2",
      title: "Aygaz Görüntü İşleme Bootcamp",
      issuer: "Aygaz"
    },
    {
      id: "cert3",
      title: "Aygaz Veri Analizi Bootcamp",
      issuer: "Aygaz"
    }
  ],
  references: [
    {
      id: "ref1",
      name: "Çağatay Yağmur",
      role: "Data Engineer",
      company: "BIS",
      email: "cagataygmr@gmail.com",
      phone: "+90 551 220 33 19",
      location: "İstanbul"
    },
    {
      id: "ref2",
      name: "Mehmet Emre Doğan",
      role: "Software Developer",
      company: "Emar Proje",
      email: "med@mehmetemredogan.tr",
      phone: "+90 534 894 85 70",
      location: "Kayseri"
    }
  ]
};
