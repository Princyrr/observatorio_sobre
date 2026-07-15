import { useEffect, useRef, useState } from "react";
import { Factory, Target, Eye, Lightbulb, ArrowRight } from "lucide-react";
import videoObservatorio from "../assets/video_observatorio.mp4";

const cards = [
  {
    icon: Lightbulb,
    title: "Propósito",
    description:
      "Impulsionar crescimento, competitividade e sustentabilidade da indústria e da sociedade.",
  },
  {
    icon: Target,
    title: "Missão",
    description:
      "Fortalecer a competitividade da indústria paraibana por meio de inteligência de dados aplicada.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em prospecção, estudos e soluções analíticas para decisões estratégicas.",
  },
  {
    icon: Lightbulb,
    title: "Valores",
    description:
      "Ética, credibilidade, integridade, inovação, estratégia e transparência.",
  },
];

interface AboutProps {
  onNavigate: (section: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    const element = sectionRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />

        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`
    text-center mb-16
    transition-all duration-1000
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <Factory className="w-4 h-4 text-secondary-light" />

            <span className="text-secondary-light text-sm font-semibold">
              Vídeo Institucional
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Observatório da Indústria
            <span className="block mt-2 bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              da FIEPB
            </span>
          </h2>

          <p className="max-w-4xl mx-auto text-lg lg:text-xl text-white/70 leading-relaxed">
            Uma visão estratégica sobre a atuação, as entregas e o impacto do
            Observatório no fortalecimento da indústria paraibana, transformando
            dados em conhecimento e decisões inteligentes.
          </p>
        </div>

        {/* Main Content */}
        <div
          className={`
    grid lg:grid-cols-2 gap-16 items-center mb-20
    transition-all duration-1000 delay-200
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
        >
          {/* Image/Visual Side */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <video
                src={videoObservatorio}
                autoPlay
                loop
                playsInline
                controls
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              >
                Seu navegador não suporta vídeo.
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />

            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-primary-light/20 rounded-full blur-3xl" />
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-white">
              Inteligência institucional para orientar decisões com precisão
            </h3>
            <p className="text-white/70 text-lg leading-8">
              O Observatório da Indústria da FIEPB é uma iniciativa estratégica
              dedicada à produção, organização e disseminação de inteligência de
              dados para apoiar decisões no setor industrial e no
              desenvolvimento econômico regional.
            </p>
            <p className="text-white/70 text-lg leading-8">
              Como plataforma de convergência entre dados, tecnologia e
              conhecimento territorial, transforma informação em análises,
              estudos e soluções digitais para lideranças públicas, empresariais
              e institucionais.
            </p>

            <button
              onClick={() => onNavigate("portfolio")}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary rounded-xl text-white font-semibold shadow-lg shadow-secondary/30 hover:bg-secondary-light hover:scale-105 transition-all duration-300"
            >
              Portfólio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`
    group
    relative
    bg-white/10
    backdrop-blur-xl
    border
    border-white/20
    rounded-2xl
    p-8
    overflow-hidden
    shadow-lg
    hover:shadow-2xl
    hover:shadow-secondary/20
    hover:bg-white/15
    hover:-translate-y-2
    transition-all
    duration-700

    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
  `}
                duration-500
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* Glow interno */}
                <div
                  className="
          absolute
          -top-10
          -right-10
          w-32
          h-32
          bg-secondary/20
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
                />

                {/* Icon */}
                <div
                  className="
            relative
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-secondary
            to-secondary-dark
            flex
            items-center
            justify-center
            mb-6
            shadow-xl
            shadow-secondary/30
            group-hover:scale-110
            transition-transform
            duration-500
          "
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h4
                  className="
          text-white
          text-2xl
          font-bold
          mb-4
        "
                >
                  {card.title}
                </h4>

                <p
                  className="
          text-white/70
          leading-relaxed
          text-base
        "
                >
                  {card.description}
                </p>

                {/* Linha decorativa */}
                <div
                  className="
          mt-6
          h-1
          w-12
          rounded-full
          bg-gradient-to-r
          from-secondary
          to-secondary-light
          group-hover:w-24
          transition-all
          duration-500
        "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
