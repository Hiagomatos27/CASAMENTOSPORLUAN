import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import {
  Camera,
  Plane,
  Sparkles,
  Globe2,
  Download,
  Film,
  Plus,
  Minus,
  Check,
  ArrowUpRight,
} from "lucide-react";
import heroAsset from "@/assets/hero.jpg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
const heroImg = heroAsset.url;
import aboutAsset from "@/assets/about.jpg.asset.json";
const aboutImg = aboutAsset.url;
import g1Asset from "@/assets/gallery-1.jpg.asset.json";
import g2Asset from "@/assets/gallery-2.jpg.asset.json";
import g3Asset from "@/assets/gallery-3.jpg.asset.json";
import g4Asset from "@/assets/gallery-4.jpg.asset.json";
const g1 = g1Asset.url;
const g2 = g2Asset.url;
const g3 = g3Asset.url;
const g4 = g4Asset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casamentos por Luan — Proposta Exclusiva" },
      {
        name: "description",
        content:
          "Proposta exclusiva Casamentos por Luan. Filmes de casamento cinematográficos, emocionantes e atemporais.",
      },
    ],
  }),
  component: Proposal,
});

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

const fadeLayer = {
  initial: { opacity: 0, y: 48, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
};

function Proposal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Features />
      <Packages />
      <Deliverables />
      <AddOns />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Payment />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* -------------------------------------------------- NAV */
function Nav() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300, 400], [1, 0.4, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -20]);
  const pointerEvents = useTransform(opacity, (v) => (v < 0.05 ? "none" : "auto"));
  return (
    <motion.header
      style={{ opacity, y, pointerEvents }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#919190]/95 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 md:h-28 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logoAsset.url} alt="Casamentos por Luan" className="h-16 md:h-24 w-auto object-contain mx-0" />
        </a>
        <nav className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-white/70">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#pacotes" className="hover:text-white transition-colors">Pacotes</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Filmes</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <a
          href="#cta"
          className="text-xs tracking-[0.2em] uppercase border border-white/80 text-white px-4 py-2 hover:bg-white hover:text-stone-900 transition-colors"
        >
          Contato
        </a>
      </div>
    </motion.header>
  );
}

/* -------------------------------------------------- HERO */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden pt-16">
      <motion.img
        src={heroImg}
        alt="Casal de noivos em momento íntimo"
        width={1600}
        height={1920}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 pb-16 md:pb-24 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="eyebrow mb-6 text-foreground/70"
        >
          Proposta · 2026/2027
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1 }}
          className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight max-w-5xl"
        >
          Transformando histórias de amor em <em className="italic font-light">memórias eternas</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed"
        >
          Filmes de casamento cinematográficos, emocionantes e atemporais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#cta"
            className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Solicitar orçamento
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-3 border border-foreground/40 px-8 py-4 text-xs tracking-[0.25em] uppercase hover:border-foreground hover:bg-foreground/5 transition-colors"
          >
            <Film className="size-4" />
            Assistir filmes
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- MARQUEE */
function Marquee() {
  const items = ["Cinematográfico", "4K", "Drone Incluso", "Brasil & Exterior", "Atemporal", "Editorial"];
  return (
    <div className="border-y border-border/60 overflow-hidden py-5">
      <div className="flex gap-16 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl italic text-foreground/60">
            {t} <span className="text-foreground/20 not-italic">·</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from {transform:translateX(0)} to {transform:translateX(-33.333%)} }`}</style>
    </div>
  );
}

/* -------------------------------------------------- ABOUT */
function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return (
    <section id="sobre" ref={aboutRef} className="py-24 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        <motion.div {...fadeLayer} className="md:col-span-5">
          <div className="overflow-hidden">
            <motion.img
              src={aboutImg}
              alt="Luan, filmmaker"
              width={1200}
              height={1500}
              loading="lazy"
              style={{ y: imgY }}
              className="w-full grayscale will-change-transform"
            />
          </div>
          <p className="mt-4 eyebrow text-stone">Luan · Filmmaker</p>
        </motion.div>

        <motion.div {...fadeUp} className="md:col-span-7 md:pl-8">
          <p className="eyebrow mb-6 text-foreground/70">— Sobre</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Contando histórias com <em className="italic font-light">arte e amor</em>.
          </h2>

          <div className="mt-10 space-y-6 text-foreground/80 leading-relaxed max-w-xl">
            <p>
              Sou Luan, filmmaker apaixonado por contar histórias de amor reais, intensas e
              cheias de sentimento.
            </p>
            <p>
              Acredito que cada casamento carrega uma essência única e meu papel é transformar
              isso em memória viva, com alma, poesia e verdade.
            </p>
            <p>
              Dos detalhes do making of ao arrepio de pisar no altar, estou ali. Discreto,
              atento e sentindo junto.
            </p>
            <p>
              Fluo com vocês da leveza da cerimônia até a euforia da pista, porque cada
              instante importa e merece ser eternizado com emoção e verdade.
            </p>
          </div>

          <div className="mt-12 hairline" />
          <p className="mt-6 font-display italic text-2xl text-foreground/70">
            "Cada amor merece um filme à sua altura."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- FEATURES */
function Features() {
  const items = [
    { icon: Film, label: "Gravação e entrega em 4K" },
    { icon: Plane, label: "Drone incluso em todos os pacotes" },
    { icon: Camera, label: "Making of dos noivos" },
    { icon: Globe2, label: "Atendimento Brasil e exterior" },
    { icon: Download, label: "Entrega online de alta qualidade" },
    { icon: Sparkles, label: "Linguagem cinematográfica" },
  ];
  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div {...fadeUp} className="max-w-2xl mb-10 md:mb-14">
          <p className="eyebrow text-background/70 mb-3">— O que está incluso</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
            Um padrão de entrega <em className="italic font-light">sem concessões</em>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-background/15">
          {items.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={i}
              {...fadeLayer}
              transition={{ ...fadeLayer.transition, delay: i * 0.05 }}
              className="bg-foreground p-5 md:p-7 flex items-center gap-4 min-h-[96px] md:min-h-[120px]"
            >
              <Icon className="size-5 md:size-6 stroke-[1.2] text-background/85 shrink-0" />
              <p className="font-display text-base md:text-xl leading-snug">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- PACKAGES */
const packages = [
  {
    name: "Momentos",
    price: "R$ 4.000",
    desc: "Pensado para eventos menores e intimistas, com foco especial na cerimônia.",
    items: [
      "Cobertura de até 7 horas",
      "02 filmmakers",
      "Drone incluso",
      "Making of dos noivos",
      "Trailer cinematográfico de 7 a 10 minutos",
      "Teaser de 1 minuto",
      "Material gravado em 4K",
    ],
  },
  {
    name: "Jornada",
    price: "R$ 5.990",
    badge: "Mais escolhido",
    desc: "Uma cobertura mais completa, registrando desde o making of até os principais momentos da festa.",
    items: [
      "Cobertura de até 9 horas",
      "02 filmmakers",
      "Pré-wedding",
      "Trailer de 5 a 7 minutos",
      "Teaser de 1 minuto",
      "Protocolar de 15 a 20 minutos",
      "Material gravado e entregue em 4K",
      "Drone incluso",
      "Making of incluso",
    ],
  },
  {
    name: "Eternizar",
    price: "R$ 12.900",
    badge: "Premium",
    desc: "A experiência mais completa para casais que desejam registrar cada detalhe do grande dia.",
    items: [
      "Cobertura até o final da festa",
      "03 filmmakers",
      "Pré-wedding",
      "Reels de 30 segundos",
      "Teaser de 1 minuto",
      "Cerimônia na íntegra",
      "Trailer cinematográfico de 10 a 12 minutos",
      "Protocolar de 15 a 25 minutos",
      "Entrega física premium",
      "Caixa personalizada em madeira",
      "Pen drive em madeira",
      "Material gravado e entregue em 4K",
      "Drone incluso",
      "Making of incluso",
    ],
  },
];

function Packages() {
  const [selected, setSelected] = useState<number | null>(1);
  const selectedPkg = selected !== null ? packages[selected] : null;
  const whatsappMessage = selectedPkg
    ? `Olá! Gostaria de conversar sobre o pacote *${selectedPkg.name}* (${selectedPkg.price}) para a cobertura do meu casamento.`
    : "Olá! Gostaria de conversar sobre a cobertura do meu casamento.";
  const whatsappUrl = `https://wa.me/5522997664132?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="pacotes" className="py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div {...fadeUp} className="max-w-3xl mb-16 md:mb-24">
          <p className="eyebrow text-stone mb-4">— Pacotes</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Três caminhos para <em className="italic font-light">eternizar</em> o seu dia.
          </h2>
          <p className="mt-6 text-sm text-stone">Selecione um pacote e siga direto para o WhatsApp.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {packages.map((p, i) => {
            const isSelected = selected === i;
            return (
              <motion.article
                key={p.name}
                {...fadeLayer}
                transition={{ ...fadeLayer.transition, delay: i * 0.1 }}
                onClick={() => setSelected(isSelected ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(isSelected ? null : i);
                  }
                }}
                className={`relative cursor-pointer bg-background p-8 md:p-10 flex flex-col transition-all duration-300 outline-none ${
                  isSelected
                    ? "bg-foreground text-background md:-my-6 md:py-14 ring-2 ring-foreground z-10"
                    : "hover:bg-foreground/5"
                }`}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <p className="eyebrow opacity-60">0{i + 1}</p>
                  <div className="flex items-center gap-2">
                    {p.badge && (
                      <span className={`text-[10px] tracking-[0.25em] uppercase px-2 py-1 border ${
                        isSelected ? "border-background/40" : "border-foreground/30"
                      }`}>
                        {p.badge}
                      </span>
                    )}
                    {isSelected && (
                      <span className="text-[10px] tracking-[0.25em] uppercase px-2 py-1 bg-background text-foreground inline-flex items-center gap-1">
                        <Check className="size-3" strokeWidth={2} /> Selecionado
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="font-display text-4xl md:text-5xl mt-4">{p.name}</h3>
                <p className={`mt-4 text-sm leading-relaxed ${isSelected ? "text-background/70" : "text-stone"}`}>
                  {p.desc}
                </p>

                <div className={`mt-8 mb-8 h-px ${isSelected ? "bg-background/20" : "bg-border"}`} />

                <p className="font-display text-3xl md:text-4xl">{p.price}</p>
                <p className={`text-xs uppercase tracking-[0.2em] mt-1 ${isSelected ? "text-background/50" : "text-stone"}`}>
                  Investimento
                </p>

                <ul className="mt-10 space-y-3 text-sm flex-1">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 leading-relaxed">
                      <Check className={`size-4 mt-0.5 shrink-0 ${isSelected ? "text-background/60" : "text-foreground/50"}`} strokeWidth={1.5} />
                      <span className={isSelected ? "text-background/90" : "text-foreground/80"}>{it}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-10 inline-flex items-center justify-between gap-3 px-6 py-4 text-xs tracking-[0.25em] uppercase border transition-colors ${
                    isSelected
                      ? "bg-background text-foreground border-background"
                      : "border-foreground"
                  }`}
                >
                  {isSelected ? "Pacote selecionado" : `Selecionar ${p.name}`}
                  <ArrowUpRight className="size-4" />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          {...fadeUp}
          className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-foreground/15 p-6 md:p-8 bg-background"
        >
          <div className="text-center md:text-left">
            <p className="eyebrow text-stone mb-2">— Próximo passo</p>
            <p className="font-display text-2xl md:text-3xl">
              {selectedPkg ? (
                <>Avançar com o pacote <em className="italic font-light">{selectedPkg.name}</em></>
              ) : (
                <>Selecione um pacote acima para continuar</>
              )}
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!selectedPkg}
            onClick={(e) => {
              if (!selectedPkg) e.preventDefault();
            }}
            className={`group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.3em] uppercase border transition-colors shrink-0 ${
              selectedPkg
                ? "bg-foreground text-background border-foreground hover:bg-foreground/90"
                : "border-foreground/30 text-foreground/40 cursor-not-allowed"
            }`}
          >
            Continuar no WhatsApp
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- DELIVERABLES */
const deliverables = [
  {
    name: "Trailer Cinematográfico",
    desc: "Filme principal com os melhores momentos do casamento de forma dinâmica e emocionante.",
  },
  {
    name: "Teaser",
    desc: "Vídeo moderno para redes sociais, entregue rapidamente após o evento.",
  },
  {
    name: "Protocolar",
    desc: "Registro linear dos momentos mais importantes da cerimônia.",
  },
  {
    name: "Cerimônia na íntegra",
    desc: "Cerimônia completa, sem cortes, com áudio original.",
  },
  {
    name: "Pré-Wedding",
    desc: "Momento leve e descontraído para registrar a conexão do casal antes do grande dia.",
  },
];

function Deliverables() {
  return (
    <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div {...fadeUp} className="max-w-2xl mb-16">
          <p className="eyebrow text-stone mb-4">— Entregáveis</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Cada formato com <em className="italic font-light">um propósito</em>.
          </h2>
        </motion.div>

        <div className="divide-y divide-border border-y border-border">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.name}
              {...fadeLayer}
              transition={{ ...fadeLayer.transition, delay: i * 0.05 }}
              className="grid md:grid-cols-12 gap-6 py-8 md:py-10 items-baseline group"
            >
              <p className="md:col-span-1 eyebrow text-stone">0{i + 1}</p>
              <h3 className="md:col-span-4 font-display text-3xl md:text-4xl group-hover:italic transition-all">
                {d.name}
              </h3>
              <p className="md:col-span-7 text-foreground/70 leading-relaxed md:text-lg">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- ADD-ONS */
const addons = [
  { name: "Filmmaker Extra", price: "R$ 700" },
  { name: "Cerimônia na Íntegra", price: "R$ 750" },
  { name: "Welcome Film", price: "R$ 2.000" },
  { name: "Hora Extra", price: "R$ 2.000" },
];

function AddOns() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12 items-start">
        <motion.div {...fadeUp} className="md:col-span-5">
          <p className="eyebrow text-stone mb-4">— Adicionais</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Personalize <em className="italic font-light">a sua experiência</em>.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed max-w-md">
            Os adicionais podem ser contratados junto ao pacote ou adicionados posteriormente.
          </p>
        </motion.div>

        <div className="md:col-span-7 divide-y divide-border border-y border-border">
          {addons.map((a, i) => (
            <motion.div
              key={a.name}
              {...fadeLayer}
              transition={{ ...fadeLayer.transition, delay: i * 0.05 }}
              className="flex items-center justify-between py-6"
            >
              <span className="font-display text-2xl md:text-3xl">{a.name}</span>
              <span className="text-sm tracking-[0.15em] text-foreground/80">{a.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- PORTFOLIO */
const films: { id: string; title: string; place: string; label?: string }[] = [
  { id: "ZjCXmDPL2e0", title: "Ana Laura & Neto", place: "2026" },
  { id: "tMYVA_8A944", title: "Maju & João", place: "2026", label: "Trailer" },
  { id: "jfKfPfyJRdk", title: "Beatriz & Henrique", place: "Toscana · 2024" },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div {...fadeUp} className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow text-background/60 mb-4">— Portfólio</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Filmes <em className="italic font-light">selecionados</em>.
          </h2>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {films.map((f, i) => (
            <motion.article
              key={f.id}
              {...fadeUp}
              className={`grid md:grid-cols-12 gap-8 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-8 aspect-video bg-background/5 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${f.id}`}
                  title={f.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  allowFullScreen
                />
              </div>
              <div className="md:col-span-4 md:px-4">
                <p className="eyebrow text-background/50 mb-3">{f.label ?? "Filme"} · 0{i + 1}</p>
                <h3 className="font-display text-3xl md:text-4xl leading-tight">{f.title}</h3>
                <p className="mt-2 text-background/60 italic font-display text-lg">{f.place}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Gallery strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-2">
          {[g1, g2, g3, g4].map((src, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/casamentosporluan/"
              target="_blank"
              rel="noopener noreferrer"
              {...fadeLayer}
              transition={{ ...fadeLayer.transition, delay: i * 0.08 }}
              className="block overflow-hidden group relative"
            >
              <img
                src={src}
                alt="Ver no Instagram"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs tracking-[0.25em] uppercase">
                  Ver no Instagram
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- TESTIMONIALS */
const testimonials = [
  {
    quote:
      "Assistir ao nosso filme foi reviver cada emoção. O Luan capturou olhares, silêncios e detalhes que nem nós percebemos. Eterno.",
    name: "Mariana & Pedro",
    place: "Búzios, RJ",
  },
  {
    quote:
      "Sensibilidade absurda. Discreto durante o dia, mas o resultado é cinema puro. Recomendamos de olhos fechados.",
    name: "Júlia & Lucas",
    place: "Trancoso, BA",
  },
  {
    quote:
      "Cada quadro é arte. Trabalhar com o Luan foi como ter um amigo guardando nossas memórias mais preciosas.",
    name: "Beatriz & Henrique",
    place: "Toscana, IT",
  },
];

function Testimonials() {
  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div {...fadeUp} className="mb-16 md:mb-24">
          <p className="eyebrow text-stone mb-4">— Depoimentos</p>
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl">
            Histórias contadas por quem viveu.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              {...fadeLayer}
              transition={{ ...fadeLayer.transition, delay: i * 0.1 }}
              className="border-t border-foreground pt-8"
            >
              <blockquote className="font-display text-xl md:text-2xl leading-snug italic text-foreground/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-display text-lg">{t.name}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-stone mt-1">{t.place}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- FAQ */
const faqs = [
  { q: "Os pacotes são flexíveis?", a: "Sim. Todos os pacotes podem ser adaptados para atender melhor cada casal." },
  { q: "Qual o prazo de entrega?", a: "Os filmes são entregues gradualmente conforme o pacote contratado, com prazo final de até 90 dias úteis." },
  { q: "Você atende quais regiões?", a: "Atendemos todo o Brasil e também casamentos internacionais." },
  { q: "O deslocamento está incluso?", a: "O deslocamento é calculado separadamente conforme a localização do evento. Para casamentos em Campos dos Goytacazes, o deslocamento já está incluso." },
  { q: "Quando a cobertura começa?", a: "O tempo de cobertura começa a contar a partir do making of." },
  { q: "Quando começa o making of?", a: "A cobertura do making of começa aproximadamente duas horas antes da cerimônia." },
  { q: "Até quando o material fica armazenado?", a: "Material bruto armazenado por 6 meses e filmes finalizados por 1 ano." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 bg-muted/40 border-y border-border">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <motion.div {...fadeUp} className="mb-16">
          <p className="eyebrow text-stone mb-4">— Dúvidas frequentes</p>
          <h2 className="font-display text-4xl md:text-5xl">Perguntas comuns.</h2>
        </motion.div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl group-hover:italic transition-all">
                    {f.q}
                  </span>
                  {isOpen ? (
                    <Minus className="size-5 shrink-0" strokeWidth={1.2} />
                  ) : (
                    <Plus className="size-5 shrink-0" strokeWidth={1.2} />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pr-12 text-foreground/75 leading-relaxed max-w-3xl">
                    {f.a}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- PAYMENT */
function Payment() {
  const options = [
    "20% na assinatura do contrato e 80% um mês antes do evento.",
    "30% de entrada e parcelamento em até 10 vezes.",
    "Pagamento à vista com 10% de desconto.",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <motion.div {...fadeUp} className="md:col-span-5">
          <p className="eyebrow text-stone mb-4">— Investimento</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Formas de <em className="italic font-light">pagamento</em>.
          </h2>
        </motion.div>

        <div className="md:col-span-7 space-y-6">
          {options.map((o, i) => (
            <motion.div
              key={i}
              {...fadeLayer}
              transition={{ ...fadeLayer.transition, delay: i * 0.08 }}
              className="flex gap-6 items-baseline border-b border-border pb-6"
            >
              <span className="font-display italic text-2xl text-stone">0{i + 1}</span>
              <p className="text-foreground/85 leading-relaxed md:text-lg">{o}</p>
            </motion.div>
          ))}
          <p className="text-sm text-stone italic pt-2">
            A data só será reservada após a confirmação da entrada ou pagamento integral.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- FINAL CTA */
function FinalCta() {
  return (
    <section id="cta" className="relative py-32 md:py-48 bg-foreground text-background overflow-hidden">
      <img
        src={g4}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/85 to-foreground" />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
        <motion.p {...fadeUp} className="eyebrow text-background/60 mb-8">
          — Vamos conversar
        </motion.p>
        <motion.h2
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02]"
        >
          Vamos contar <em className="italic font-light">a sua história</em>?
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mt-10 text-background/75 leading-relaxed max-w-xl mx-auto md:text-lg"
        >
          Será um prazer conhecer melhor vocês, tomar um café ou marcar uma reunião online
          para conversar sobre o grande dia.
        </motion.p>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5522997664132?text=Olá!%20Gostaria%20de%20conversar%20sobre%20a%20cobertura%20do%20meu%20casamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 text-xs tracking-[0.3em] uppercase hover:bg-background/90 transition-colors"
          >
            Falar no WhatsApp
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://www.instagram.com/casamentosporluan/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-background/40 text-background px-10 py-5 text-xs tracking-[0.3em] uppercase hover:border-background hover:bg-background/10 transition-colors"
          >
            Ver no Instagram
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.4 }}
          className="mt-16 text-xs tracking-[0.2em] uppercase text-background/40"
        >
          Após 30 dias, este orçamento poderá sofrer alterações.
        </motion.p>
      </div>
    </section>
  );
}

/* -------------------------------------------------- FOOTER */
function Footer() {
  return (
    <footer className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row justify-between gap-8 items-start">
        <div>
          <p className="font-display text-3xl">Casamentos por Luan</p>
          <p className="mt-3 text-sm text-stone max-w-sm">
            Filmes de casamento cinematográficos. Brasil e exterior.
          </p>
        </div>
        <div className="text-sm text-stone space-y-1 md:text-right">
          <a
            href="https://www.instagram.com/casamentosporluan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            @casamentosporluan
          </a>
          <p className="pt-4 text-xs tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Casamentos por Luan
          </p>
        </div>
      </div>
    </footer>
  );
}
