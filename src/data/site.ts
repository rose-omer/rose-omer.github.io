/**
 * Kişisel bilgiler tek yerde durur. Kaynak: GitHub profili (herkese açık) ve
 * sahibin kendi portföy deposundaki `data.ts`. Telefon ve referans bilgisi
 * bilerek eklenmedi.
 */
export const site = {
  name: 'Ömer Faruk Köse',
  shortName: 'Ömer Köse',
  role: 'Yapay zekâ ve bilgisayarlı görü mühendisi',
  roleEn: 'AI & Computer Vision Engineer',
  intro:
    "İyex Teknoloji'de yazılım mühendisiyim. Nesne tespiti (YOLO), metin tanıma (OCR) ve görsel-dil modelleri (VLM) üzerinde çalışıyorum.",
  description:
    'Ömer Faruk Köse: yapay zekâ ve bilgisayarlı görü mühendisi. YOLO, OCR ve VLM projeleri; metrikler, ekranlar ve kod bağlantılarıyla.',
  location: 'Türkiye',
  email: 'koseomer332@gmail.com',
  links: {
    github: 'https://github.com/rose-omer',
    linkedin: 'https://www.linkedin.com/in/%C3%B6merk%C3%B6se38/',
    medium: 'https://medium.com/@koseomer',
  },
  /** Alan adı çözülünce doldur: 'https://omerksoft.com.tr/'. Boşken bağlantı gösterilmez. */
  personalSite: '',
} as const;

export const focusAreas = [
  {
    term: 'YOLO',
    name: 'Nesne tespiti',
    text: 'Kameradan gelen karede engelleri bulup mesafe ile birleştiriyorum. Gecikmeyi CPU üzerinde ölçüp düşürüyorum.',
    project: { slug: 'goren-goz', label: 'Gören Göz' },
  },
  {
    term: 'OCR',
    name: 'Metin tanıma',
    text: 'Belge ve görüntüden metin çıkarma üzerinde çalışıyorum. Bu alanda henüz herkese açık bir depom yok.',
    project: null,
  },
  {
    term: 'VLM',
    name: 'Görsel-dil modelleri',
    text: 'Görüntüyü soruyla birlikte modele verip Türkçe yanıt alıyorum. El çizimini koda çeviren bir araç da yazdım.',
    project: { slug: 'sketch-to-code-ai', label: 'Sketch-to-Code AI' },
  },
] as const;

export const experience = [
  {
    role: 'Yazılım Mühendisi',
    org: 'İyex Teknoloji',
    period: 'Güncel',
    text: 'Görüntü işleme ve yapay zekâ: YOLO, OCR ve VLM tabanlı sistemler.',
  },
  {
    role: 'Yazılım Programcısı',
    org: 'SeaSoftw',
    period: 'Eylül 2025 – Ekim 2025',
    text: 'Bir kurumsal web sitesinin arayüzünü tasarladım, barındırma ve yayına alma sürecini yürüttüm, teknik SEO düzenlemelerini yaptım.',
  },
  {
    role: 'Stajyer Yazılım Geliştirici',
    org: 'Emar Proje Yazılım Danışmanlık',
    period: 'Haziran 2025 – Ağustos 2025',
    text: 'CRM panelini Laravel ile yeniden yazdım. Gemini tabanlı kişilik testi ve çok katmanlı spam analiz servisi geliştirdim.',
  },
  {
    role: 'Arama Kalitesi Geliştirme Uzmanı',
    org: 'Gini Talent',
    period: 'Eylül 2024 – Ocak 2025',
    text: 'Arama sonuçlarının kalitesini veri analizi ve içerik değerlendirmesiyle ölçtüm, iyileştirme raporları hazırladım.',
  },
] as const;

export const education = [
  {
    degree: 'Yazılım Mühendisliği (lisans)',
    org: 'Mehmet Akif Ersoy Üniversitesi',
    period: 'Ekim 2022 – devam ediyor',
  },
] as const;

export const skills = [
  { group: 'Bilgisayarlı görü', items: ['YOLO', 'OpenCV', 'MediaPipe', 'MiDaS', 'TensorFlow / Keras'] },
  { group: 'Diller', items: ['Python', 'SQL', 'Java', 'Kotlin', 'JavaScript / TypeScript'] },
  { group: 'Servis ve web', items: ['FastAPI', 'Flask', 'Django', 'Laravel', 'Node.js'] },
  { group: 'Veri ve araçlar', items: ['Pandas', 'NumPy', 'Matplotlib', 'Docker', 'Selenium'] },
] as const;

export const certificates = [
  { title: 'Python ile makine öğrenmesi atölyesi (70 saat)', issuer: 'Atölye' },
  { title: 'Görüntü İşleme Bootcamp', issuer: 'Aygaz' },
  { title: 'Veri Analizi Bootcamp', issuer: 'Aygaz' },
] as const;
