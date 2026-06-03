import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Camera,
  ChevronRight,
  ClipboardCheck,
  Clock,
  CreditCard,
  FileQuestion,
  MapPin,
  MapPinned,
  Menu,
  MessageCircle,
  Microscope,
  Navigation,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  UsersRound,
  Video,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroClinic from "./assets/hero-clinic-2.jpeg";
import microscopeImage from "./assets/dental-microscope-2.jpeg";
import familyCareImage from "./assets/family-care-2.jpeg";
import drgReszaUtomo from "./assets/drg-resza-utomo.png";
import drgShafaPrasita from "./assets/drg-shafa-prasita.png";
import drgAnnisaFurqoni from "./assets/drg-annisa-furqoni.png";
import bridgePfmBefore from "./assets/bridge-pfm-01-before.png";
import bridgePfmAfter from "./assets/bridge-pfm-01-after.png";
import directVeneerBefore from "./assets/direct-veneer-01-before.png";
import directVeneerAfter from "./assets/direct-veneer-01-after.png";
import gigiPalsuAkrilikBefore from "./assets/gigi-palsu-akrilik-01-before.png";
import gigiPalsuAkrilikAfter from "./assets/gigi-palsu-akrilik-01-after.png";
import gigiPalsuValplastBefore from "./assets/gigi-palsu-valplast-01-before.png";
import gigiPalsuValplastAfter from "./assets/gigi-palsu-valplast-01-after.png";
import pasangBehelBefore from "./assets/pasang-behel-01-before.png";
import pasangBehelAfter from "./assets/pasang-behel-01-after.png";

const whatsappPrimary = "https://api.whatsapp.com/send?phone=6281515337453";
const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=ID%20Dental%20Care%20Sidoarjo%20Puri%20Indah%20Suko";

const navItems = [
  { href: "#profil", label: "Profil" },
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#dokter", label: "Dokter" },
  { href: "#hasil", label: "Hasil" },
  { href: "#alur", label: "Alur" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

const proofs = [
  {
    icon: UserRoundCheck,
    title: "Dokter Umum & Spesialis",
    text: "Pasien bisa memulai dari pemeriksaan umum, lalu diarahkan ke dokter spesialis bila membutuhkan tindakan lanjutan.",
  },
  {
    icon: Microscope,
    title: "Pemeriksaan Lebih Presisi",
    text: "Dukungan alat seperti dental microscope membantu dokter melihat detail kecil pada gigi dengan lebih jelas.",
  },
  {
    icon: MessageCircle,
    title: "Konsultasi Awal via WhatsApp",
    text: "Pasien bisa tanya keluhan, jadwal dokter, dan estimasi alur perawatan sebelum datang ke klinik.",
  },
];

const serviceGroups = [
  {
    key: "keluarga",
    label: "Keluarga",
    title: "Perawatan Gigi Harian untuk Anak, Remaja, dan Orang Tua",
    copy: "Untuk keluhan harian seperti gigi berlubang, karang gigi, pemeriksaan rutin, dan edukasi kebiasaan merawat gigi keluarga.",
    items: [
      "Konsultasi dokter gigi",
      "Tambal gigi berlubang",
      "Scaling karang gigi",
      "Perawatan gigi anak",
      "Edukasi kebiasaan sikat gigi",
    ],
    icon: UsersRound,
    image: familyCareImage,
    imageAlt: "Ilustrasi konsultasi keluarga di klinik gigi modern",
  },
  {
    key: "estetik",
    label: "Estetik",
    title: "Perawatan Estetik untuk Senyum yang Lebih Rapi dan Natural",
    copy: "Pasien bisa berkonsultasi mengenai bentuk, warna, dan kebutuhan restorasi gigi agar hasil perawatan terasa lebih terencana.",
    items: [
      "Crown estetik sementara",
      "Bridge PFM",
      "Gigi tiruan Valplast",
      "Perencanaan senyum",
      "Konsultasi warna dan bentuk gigi",
    ],
    icon: Sparkles,
    image: heroClinic,
    imageAlt: "Ilustrasi konsultasi perawatan estetik gigi",
  },
  {
    key: "spesialis",
    label: "Spesialis",
    title: "Dukungan dokter spesialis untuk kasus lebih kompleks.",
    copy: "Untuk kasus yang membutuhkan analisis lebih mendalam, pasien dapat diarahkan ke dokter spesialis sesuai kebutuhan perawatan.",
    items: ["Ortodonti", "Bedah mulut", "Konservasi gigi", "Prostodonti", "Rujukan tindakan lanjutan"],
    icon: Stethoscope,
    image: microscopeImage,
    imageAlt: "Ilustrasi ruang perawatan dengan dental microscope",
  },
];

const advantages = [
  {
    icon: UserRoundCheck,
    title: "Dokter Umum & Spesialis",
    text: "Pemeriksaan awal bisa dimulai dari dokter gigi umum, lalu diarahkan sesuai kebutuhan kasus pasien.",
  },
  {
    icon: Microscope,
    title: "Dental Microscope",
    text: "Membantu pemeriksaan detail pada kasus tertentu agar dokter dapat merencanakan tindakan dengan lebih cermat.",
  },
  {
    icon: MessageCircle,
    title: "Konsultasi Awal via WhatsApp",
    text: "Pasien bisa menyampaikan keluhan, menanyakan jadwal, dan memahami alur sebelum datang ke klinik.",
  },
  {
    icon: MapPinned,
    title: "Lokasi Puri Indah Sidoarjo",
    text: "Berada di kawasan Suko, Sidoarjo. Detail blok dan patokan lokasi dapat dikonfirmasi melalui admin.",
  },
  {
    icon: Smile,
    title: "Keluarga, Estetik, dan Spesialis",
    text: "Satu klinik untuk pemeriksaan rutin, perawatan anak, kebutuhan estetik, dan tindakan lanjutan.",
  },
  {
    icon: Video,
    title: "Edukasi Rutin di Media Sosial",
    text: "Pasien bisa mengenal suasana klinik, edukasi perawatan, dan informasi layanan melalui Instagram dan TikTok.",
  },
];

const journey = [
  {
    title: "Konsultasi Awal via WhatsApp",
    text: "Pasien mengirim keluhan, foto bila diperlukan, dan memilih jadwal kedatangan.",
    icon: MessageCircle,
  },
  {
    title: "Pemeriksaan Dokter",
    text: "Dokter melakukan pemeriksaan dan menjelaskan opsi perawatan sesuai kebutuhan pasien.",
    icon: ClipboardCheck,
  },
  {
    title: "Tindakan Perawatan",
    text: "Perawatan dilakukan sesuai kebutuhan, mulai dari tindakan ringan sampai spesialis.",
    icon: Smile,
  },
  {
    title: "Kontrol & Follow Up",
    text: "Pasien mendapatkan arahan kontrol, edukasi perawatan, dan follow up lanjutan bila diperlukan.",
    icon: CalendarCheck,
  },
];

const contacts = [
  { label: "Tanya Jadwal Dokter", number: "0815-1533-7453", href: "https://api.whatsapp.com/send?phone=6281515337453" },
  { label: "Konsultasi Keluhan", number: "0877-7600-8848", href: "https://api.whatsapp.com/send?phone=6287776008848" },
  { label: "Informasi Layanan", number: "0822-2595-8657", href: "https://api.whatsapp.com/send?phone=6282225958657" },
];

const doctors = [
  {
    name: "drg. Resza Utomo",
    role: "Prostodontik & Konservasi Gigi",
    photo: drgReszaUtomo,
    bio: "Lulusan profesi dokter gigi Universitas Jember dan pernah mengabdi di RS Tentara Dr. Soejdono Magelang. Memiliki passion di bidang prostodonti (gigi palsu) dan conservative dentistry.",
    focus: ["Gigi palsu / prostodonti", "Perawatan saluran akar", "Restorasi gigi"],
    schedule: ["Senin – Sabtu: 09.00 – 12.00", "Rabu – Jum'at: 16.00 – 21.00"],
  },
  {
    name: "drg. Shafa Prasita",
    role: "Dokter Gigi Umum",
    photo: drgShafaPrasita,
    bio: "Menyelesaikan pendidikan SMA dalam 2 tahun dan menempuh pendidikan dokter gigi di Universitas Airlangga, lulus sebagai lulusan terbaik.",
    focus: ["Konsultasi gigi", "Tambal gigi", "Scaling", "Perawatan estetik"],
    schedule: ["Senin – Kamis: 16.00 – 21.00"],
  },
  {
    name: "drg. Annisa Furqoni",
    role: "Kedokteran Gigi Anak",
    photo: drgAnnisaFurqoni,
    bio: "Lulusan profesi dokter gigi Universitas Jember dan pernah mengabdi di RSU Universitas Sebelas Maret, Sukoharjo, Jawa Tengah. Memiliki passion di bidang kedokteran gigi anak.",
    focus: ["Perawatan gigi anak", "Konsultasi keluarga", "Edukasi gigi anak"],
    schedule: ["Jum'at – Minggu: 16.00 – 21.00"],
  },
  {
    name: "drg. Reza Al Fessi, Sp.BM",
    role: "Spesialis Bedah Mulut & Maksilofasial",
    bio: "Dokter spesialis bedah mulut yang menangani tindakan seperti odontektomi (operasi gigi impaksi) dan kasus bedah mulut lainnya.",
    focus: ["Odontektomi", "Kasus impaksi", "Konsultasi bedah mulut"],
    schedule: ["Jadwal praktik dikonfirmasi melalui admin"],
  },
];

const cases = [
  {
    title: "Bridge PFM",
    text: "Restorasi gigi yang hilang dengan bridge porcelain fused to metal untuk hasil yang rapi dan fungsional.",
    before: bridgePfmBefore,
    after: bridgePfmAfter,
  },
  {
    title: "Direct Veneer",
    text: "Perbaikan bentuk dan warna gigi depan untuk senyum yang lebih rapi dalam satu kali kunjungan.",
    before: directVeneerBefore,
    after: directVeneerAfter,
  },
  {
    title: "Gigi Palsu Valplast",
    text: "Gigi tiruan lepasan fleksibel tanpa kawat yang nyaman dan terlihat lebih natural.",
    before: gigiPalsuValplastBefore,
    after: gigiPalsuValplastAfter,
  },
  {
    title: "Gigi Palsu Akrilik",
    text: "Gigi tiruan lepasan berbahan akrilik sebagai solusi mengembalikan fungsi kunyah dan estetika.",
    before: gigiPalsuAkrilikBefore,
    after: gigiPalsuAkrilikAfter,
  },
  {
    title: "Pasang Behel",
    text: "Perawatan ortodonti untuk merapikan susunan gigi agar lebih sejajar dan mudah dibersihkan.",
    before: pasangBehelBefore,
    after: pasangBehelAfter,
  },
];

const faqs = [
  {
    question: "Apakah bisa konsultasi dulu lewat WhatsApp?",
    answer:
      "Bisa. Pasien dapat menyampaikan keluhan, menanyakan jadwal dokter, dan mendapatkan arahan awal sebelum datang ke ID Dental Care Sidoarjo.",
  },
  {
    question: "Apakah melayani perawatan gigi anak?",
    answer:
      "Ya, ID Dental Care melayani pemeriksaan dan perawatan gigi keluarga, termasuk anak-anak, sesuai kondisi pasien.",
  },
  {
    question: "Apakah tersedia dokter spesialis?",
    answer:
      "Untuk kasus tertentu, pasien dapat diarahkan ke dokter spesialis sesuai kebutuhan perawatan dan jadwal yang tersedia.",
  },
  {
    question: "Apakah biaya bisa ditanyakan dulu?",
    answer:
      "Bisa. Estimasi dapat dikonsultasikan terlebih dahulu, namun biaya final tetap menyesuaikan hasil pemeriksaan dokter.",
  },
  {
    question: "Di mana lokasi ID Dental Care Sidoarjo?",
    answer:
      "Klinik berada di kawasan Perum Puri Indah, Suko, Sidoarjo. Detail blok, nomor, dan patokan lokasi sebaiknya dikonfirmasi ke admin sebelum datang.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <m.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </m.div>
  );
}

function IconBubble({ icon: Icon }) {
  return (
    <span className="icon-bubble">
      <Icon size={20} aria-hidden="true" />
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(serviceGroups[0]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="site-shell">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="ID Dental Care Sidoarjo">
            <span className="brand-mark">ID</span>
            <span>
              <strong>ID Dental Care</strong>
              <small>Sidoarjo</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="button button-primary button-small" href={whatsappPrimary} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              Konsultasi WA
            </a>
            <button
              className="icon-button menu-button"
              type="button"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <m.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                  <ChevronRight size={17} aria-hidden="true" />
                </a>
              ))}
            </m.div>
          )}
        </AnimatePresence>

        <main id="home">
          <section className="hero-section">
            <div className="hero-media" aria-hidden="true">
              <img src={heroClinic} alt="" />
              <div className="hero-overlay" />
            </div>
            <div className="container hero-grid">
              <m.div
                className="hero-copy"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="eyebrow">
                  <Sparkles size={16} aria-hidden="true" />
                  Klinik gigi umum & spesialis di Sidoarjo
                </p>
                <h1>Perawatan Gigi Umum, Estetik, dan Spesialis di Sidoarjo</h1>
                <p className="hero-lead">
                  Mulai dari konsultasi awal, pemeriksaan, tindakan perawatan, hingga kontrol lanjutan dengan alur
                  yang mudah melalui WhatsApp.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href={whatsappPrimary} target="_blank" rel="noreferrer">
                    <MessageCircle size={19} aria-hidden="true" />
                    Konsultasi via WhatsApp
                  </a>
                  <a className="button button-secondary" href="#layanan">
                    Lihat Layanan Klinik
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </m.div>

              <m.aside
                className="hero-panel"
                initial={{ opacity: 0, y: 34, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="panel-top">
                  <span className="live-dot" />
                  <span>Kenapa pasien memilih kami</span>
                </div>
                <div className="hero-stats">
                  <div>
                    <strong>Dokter umum & spesialis</strong>
                    <span>Mulai dari pemeriksaan awal sampai tindakan lanjutan.</span>
                  </div>
                  <div>
                    <strong>Konsultasi awal via WhatsApp</strong>
                    <span>Tanya keluhan, jadwal dokter, dan alur perawatan dulu.</span>
                  </div>
                  <div>
                    <strong>Puri Indah, Sidoarjo</strong>
                    <span>Lokasi di kawasan Suko dengan detail alamat via admin.</span>
                  </div>
                </div>
              </m.aside>
            </div>
          </section>

          <section id="profil" className="section profile-section">
            <div className="container">
              <Reveal className="section-heading">
                <p className="section-kicker">Tentang Klinik</p>
                <h2>Satu Klinik untuk Kebutuhan Gigi Keluarga, Estetik, dan Spesialis</h2>
                <p>
                  ID Dental Care Sidoarjo membantu pasien mendapatkan perawatan gigi yang lebih jelas, nyaman, dan
                  terarah sejak konsultasi pertama.
                </p>
              </Reveal>

              <div className="proof-grid">
                {proofs.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.08}>
                    <article className="proof-card">
                      <IconBubble icon={item.icon} />
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="layanan" className="section service-section">
            <div className="container service-layout">
              <Reveal className="section-heading compact">
                <p className="section-kicker">Layanan Klinik</p>
                <h2>Pilihan Perawatan untuk Keluhan Harian, Estetik, dan Kasus Spesialis</h2>
              </Reveal>

              <Reveal delay={0.08} className="service-tabs" aria-label="Kategori layanan">
                {serviceGroups.map((group) => {
                  const Icon = group.icon;
                  const isActive = activeService.key === group.key;
                  return (
                    <button
                      key={group.key}
                      className={isActive ? "tab-button active" : "tab-button"}
                      type="button"
                      onClick={() => setActiveService(group)}
                    >
                      <Icon size={18} aria-hidden="true" />
                      <span className="tab-label">{group.label}</span>
                      {isActive && <m.span className="tab-indicator" layoutId="tab-indicator" />}
                    </button>
                  );
                })}
              </Reveal>

              <div className="service-showcase">
                <Reveal delay={0.12}>
                  <div className="image-frame service-image">
                    <AnimatePresence mode="wait">
                      <m.img
                        key={activeService.key}
                        src={activeService.image}
                        alt={activeService.imageAlt}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.32 }}
                      />
                    </AnimatePresence>
                  </div>
                </Reveal>
                <Reveal delay={0.16}>
                  <AnimatePresence mode="wait">
                    <m.article
                      key={activeService.key}
                      className="service-detail"
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: 0.28 }}
                    >
                      <span className="service-badge">Kategori {activeService.label}</span>
                      <h3>{activeService.title}</h3>
                      <p>{activeService.copy}</p>
                      <ul className="check-list">
                        {activeService.items.map((item) => (
                          <li key={item}>
                            <BadgeCheck size={18} aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </m.article>
                  </AnimatePresence>
                </Reveal>
              </div>
              <Reveal delay={0.12}>
                <div className="inline-cta">
                  <div>
                    <strong>Belum yakin layanan mana yang cocok untuk keluhan Anda?</strong>
                    <span>Konsultasikan dulu lewat WhatsApp agar admin bisa membantu arah awal dan jadwal dokter.</span>
                  </div>
                  <a className="button button-primary" href={whatsappPrimary} target="_blank" rel="noreferrer">
                    <MessageCircle size={18} aria-hidden="true" />
                    Tanya Keluhan Saya
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="keunggulan" className="section advantage-section">
            <div className="container feature-grid">
              <Reveal>
                <div className="image-frame microscope-frame">
                  <img src={microscopeImage} alt="Ilustrasi dental microscope di ruang perawatan gigi" />
                  <div className="image-note">
                    <Microscope size={18} aria-hidden="true" />
                    Dental microscope untuk pemeriksaan detail pada kasus tertentu
                  </div>
                </div>
              </Reveal>

              <div>
                <Reveal className="section-heading left">
                  <p className="section-kicker">Kenapa Memilih Kami</p>
                  <h2>Perawatan Lebih Terarah dengan Dokter, Fasilitas, dan Alur Konsultasi yang Jelas</h2>
                </Reveal>

                <div className="advantage-list">
                  {advantages.map((item, index) => (
                    <Reveal key={item.title} delay={index * 0.07}>
                      <article className="advantage-item">
                        <IconBubble icon={item.icon} />
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="dokter" className="section doctors-section">
            <div className="container">
              <Reveal className="section-heading">
                <p className="section-kicker">Dokter & Jadwal</p>
                <h2>Tim Dokter ID Dental Care dan Jadwal Praktiknya</h2>
                <p>
                  Kenali dokter yang menangani perawatan Anda. Jadwal praktik dapat berubah, jadi jadwal terbaru tetap
                  sebaiknya dikonfirmasi melalui WhatsApp admin sebelum datang.
                </p>
              </Reveal>

              <div className="doctor-grid">
                {doctors.map((doctor, index) => (
                  <Reveal key={doctor.name} delay={index * 0.08}>
                    <article className="doctor-card">
                      <div className="doctor-avatar">
                        {doctor.photo ? (
                          <img src={doctor.photo} alt={`Foto ${doctor.name}`} />
                        ) : (
                          <Stethoscope size={28} aria-hidden="true" />
                        )}
                      </div>
                      <div>
                        <span className="doctor-role">{doctor.role}</span>
                        <h3>{doctor.name}</h3>
                        {doctor.bio && <p className="doctor-bio">{doctor.bio}</p>}
                        <ul className="check-list compact-list">
                          {doctor.focus.map((item) => (
                            <li key={item}>
                              <BadgeCheck size={17} aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="schedule-note">
                          <Clock size={17} aria-hidden="true" />
                          <span>
                            {doctor.schedule.map((slot) => (
                              <span key={slot} className="schedule-slot">
                                {slot}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="hasil" className="section results-section">
            <div className="container">
              <Reveal className="section-heading">
                <p className="section-kicker">Before & After</p>
                <h2>Beberapa Hasil Perawatan di ID Dental Care Sidoarjo</h2>
                <p>
                  Geser untuk melihat perbandingan sebelum dan sesudah perawatan. Hasil dapat berbeda pada setiap pasien
                  tergantung kondisi gigi dan rencana perawatan dari dokter.
                </p>
              </Reveal>

              <div className="results-grid">
                {cases.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.07}>
                    <article className="result-card">
                      <div className="result-media">
                        <figure>
                          <img src={item.before} alt={`Sebelum ${item.title}`} loading="lazy" />
                          <figcaption>Sebelum</figcaption>
                        </figure>
                        <figure>
                          <img src={item.after} alt={`Sesudah ${item.title}`} loading="lazy" />
                          <figcaption className="after">Sesudah</figcaption>
                        </figure>
                      </div>
                      <div className="result-body">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.12}>
                <div className="inline-cta">
                  <div>
                    <strong>Ingin tahu hasil seperti apa yang bisa dicapai untuk kondisi gigi Anda?</strong>
                    <span>Kirim foto dan keluhan Anda lewat WhatsApp, admin akan bantu arahkan ke dokter yang tepat.</span>
                  </div>
                  <a className="button button-primary" href={whatsappPrimary} target="_blank" rel="noreferrer">
                    <MessageCircle size={18} aria-hidden="true" />
                    Konsultasi Hasil Perawatan
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="section estimate-section">
            <div className="container estimate-card">
              <Reveal>
                <div className="estimate-copy">
                  <p className="section-kicker">Estimasi Biaya</p>
                  <h2>Ingin Tahu Gambaran Biaya Perawatan?</h2>
                  <p>
                    Biaya perawatan dapat berbeda sesuai kondisi gigi dan tindakan yang dibutuhkan. Pasien bisa
                    berkonsultasi via WhatsApp untuk mendapatkan arahan awal sebelum datang ke klinik.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="estimate-actions">
                  <CreditCard size={34} aria-hidden="true" />
                  <a className="button button-primary" href={whatsappPrimary} target="_blank" rel="noreferrer">
                    Tanya Estimasi Perawatan
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="alur" className="section journey-section">
            <div className="container">
              <Reveal className="section-heading">
                <p className="section-kicker">Alur Pasien</p>
                <h2>Dari WhatsApp sampai Kontrol Lanjutan, Semua Dibuat Lebih Mudah</h2>
              </Reveal>
              <div className="journey-grid">
                {journey.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <Reveal key={step.title} delay={index * 0.08}>
                      <article className="journey-card">
                        <span className="step-number">0{index + 1}</span>
                        <Icon size={24} aria-hidden="true" />
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
              <Reveal delay={0.12}>
                <div className="inline-cta inline-cta-dark">
                  <div>
                    <strong>Mulai dari chat admin, lalu pilih jadwal pemeriksaan yang paling sesuai.</strong>
                    <span>Anda bisa menjelaskan keluhan terlebih dahulu sebelum datang ke klinik.</span>
                  </div>
                  <a className="button button-primary" href={whatsappPrimary} target="_blank" rel="noreferrer">
                    Mulai Konsultasi Sekarang
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="faq" className="section faq-section">
            <div className="container">
              <Reveal className="section-heading">
                <p className="section-kicker">FAQ</p>
                <h2>Pertanyaan yang Sering Ditanyakan Sebelum Booking</h2>
                <p>
                  Jawaban singkat untuk pasien yang ingin memastikan alur konsultasi, layanan, dokter, lokasi, dan
                  estimasi biaya sebelum datang ke klinik gigi Sidoarjo.
                </p>
              </Reveal>
              <div className="faq-grid">
                {faqs.map((faq, index) => (
                  <Reveal key={faq.question} delay={index * 0.05}>
                    <article className="faq-card">
                      <FileQuestion size={22} aria-hidden="true" />
                      <div>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="section social-section">
            <div className="container social-layout">
              <Reveal className="section-heading left">
                <p className="section-kicker">Edukasi Digital</p>
                <h2>Kenali ID Dental Care Lebih Dekat lewat Instagram dan TikTok</h2>
                <p>
                  Lihat edukasi ringan seputar perawatan gigi, informasi layanan, aktivitas klinik, dan suasana ID
                  Dental Care Sidoarjo sebelum berkonsultasi langsung dengan admin.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="channel-grid">
                  <a className="channel-card" href="https://www.instagram.com/id_dental_care_sidoarjo" target="_blank" rel="noreferrer">
                    <Camera size={24} aria-hidden="true" />
                    <span>
                      <strong>@id_dental_care_sidoarjo</strong>
                      <small>Info layanan, promo, before-after, edukasi</small>
                    </span>
                  </a>
                  <a className="channel-card" href="https://www.tiktok.com/@id.dentalcare.sidoarjo" target="_blank" rel="noreferrer">
                    <Video size={24} aria-hidden="true" />
                    <span>
                      <strong>@id.dentalcare.sidoarjo</strong>
                      <small>Video pendek, ambience klinik, konten Gen Z</small>
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="kontak" className="section contact-section">
            <div className="container contact-grid">
              <Reveal className="contact-copy">
                <p className="section-kicker">Kontak & Lokasi</p>
                <h2>Konsultasikan Keluhan Gigi Anda Sebelum Datang ke Klinik</h2>
                <p>
                  Lokasi dikomunikasikan berada di kawasan Perum Puri Indah, Suko, Sidoarjo. Untuk alamat ruko yang
                  paling akurat, jam operasional, dan jadwal dokter terbaru, silakan konfirmasi melalui WhatsApp admin.
                </p>
                <div className="contact-highlights">
                  <span>
                    <Clock size={17} aria-hidden="true" />
                    Jam buka dikonfirmasi via admin
                  </span>
                  <span>
                    <MessageCircle size={17} aria-hidden="true" />
                    Bisa tanya jadwal dokter dulu
                  </span>
                  <span>
                    <ShieldCheck size={17} aria-hidden="true" />
                    Informasi website tidak menggantikan pemeriksaan dokter
                  </span>
                </div>
                <div className="address-box">
                  <MapPin size={20} aria-hidden="true" />
                  <span>
                    <strong>Perum Puri Indah, Suko, Sidoarjo</strong>
                    <small>Konfirmasi blok dan nomor melalui WhatsApp admin</small>
                  </span>
                </div>
                <div className="contact-actions">
                  <a className="button button-primary" href={whatsappPrimary} target="_blank" rel="noreferrer">
                    <MessageCircle size={18} aria-hidden="true" />
                    Konsultasi via WhatsApp
                  </a>
                  <a className="button button-light" href={googleMapsUrl} target="_blank" rel="noreferrer">
                    <Navigation size={18} aria-hidden="true" />
                    Buka Maps
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="contact-card">
                  <div className="contact-card-head">
                    <span className="brand-mark">ID</span>
                    <div>
                      <strong>ID Dental Care Sidoarjo</strong>
                      <small>Klinik gigi umum & spesialis</small>
                    </div>
                  </div>
                  <div className="contact-list">
                    {contacts.map((contact) => (
                      <a key={contact.number} href={contact.href} target="_blank" rel="noreferrer">
                        <Phone size={18} aria-hidden="true" />
                        <span>
                          <strong>{contact.label}</strong>
                          <small>{contact.number}</small>
                        </span>
                        <ChevronRight size={18} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                  <a className="button button-primary full" href={whatsappPrimary} target="_blank" rel="noreferrer">
                    <MessageCircle size={19} aria-hidden="true" />
                    Booking Konsultasi via WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <span className="footer-brand">ID Dental Care Sidoarjo</span>
              <p>
                Klinik gigi umum dan spesialis di kawasan Puri Indah, Suko, Sidoarjo. Informasi di website tidak
                menggantikan pemeriksaan langsung oleh dokter gigi.
              </p>
            </div>
            <div>
              <strong>Layanan Utama</strong>
              <a href="#layanan">Tambal, scaling, dan konsultasi</a>
              <a href="#layanan">Perawatan gigi anak</a>
              <a href="#layanan">Estetik dan prostodontik</a>
              <a href="#layanan">Tindakan spesialis</a>
            </div>
            <div>
              <strong>Kontak</strong>
              <a href={whatsappPrimary} target="_blank" rel="noreferrer">WhatsApp Admin</a>
              <a href={googleMapsUrl} target="_blank" rel="noreferrer">Google Maps</a>
              <a href="https://www.instagram.com/id_dental_care_sidoarjo" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.tiktok.com/@id.dentalcare.sidoarjo" target="_blank" rel="noreferrer">TikTok</a>
            </div>
          </div>
        </footer>

        <a className="floating-wa" href={whatsappPrimary} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp">
          <MessageCircle size={22} aria-hidden="true" />
        </a>
      </div>
    </LazyMotion>
  );
}

export default App;
