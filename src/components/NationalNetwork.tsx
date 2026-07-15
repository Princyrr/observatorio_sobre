import { useState, useEffect } from "react";
import mapaRede from "../assets/mapa_da_rede.png";
import mapaRedeDetalhado from "../assets/mapa_da_rede_2.png";

import {
  Network,
  BarChart3,
  Globe,
  Calendar,
  Building2,
  X,
  Expand,
} from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "2023",
    label: "Ano de credenciamento do Observatório da FIEPB",
  },
  {
    icon: Building2,
    value: "26",
    label: "Observatórios credenciados em outras federações, além da FIEPB.",
  },
];

export default function NationalNetwork() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("network");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (section) {
      observer.observe(section);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      id="network"
      className="
    py-24 relative overflow-hidden 
    bg-gradient-to-br from-primary via-primary-dark to-primary
  "
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />

        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}

        <div
          className={`
    text-center mb-20
    transition-all duration-1000 delay-200
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <Network className="w-4 h-4 text-secondary-light" />

            <span className="text-secondary-light text-sm font-semibold">
              Rede Nacional de Observatórios
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Conexão Nacional
            <span className="block mt-2 bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              para Inteligência Estratégica
            </span>
          </h2>

          <p className="max-w-4xl mx-auto text-lg lg:text-xl text-white/70 leading-relaxed">
            A Rede Nacional de Observatórios do Sistema Indústria integra
            competências, dados e tecnologia em um ecossistema colaborativo,
            fortalecendo a inteligência estratégica para o desenvolvimento
            industrial brasileiro.
          </p>
        </div>
        <div
          className={`
    grid lg:grid-cols-[1.2fr_.8fr] gap-10 mb-24
    transition-all duration-1000 delay-500
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
        >
          {/* ESQUERDA */}

          <div className="bg-white/10 backdrop-blur-md rounded-[36px] border border-white/10 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shadow-xl shadow-secondary/30">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white">
                Atuação colaborativa e multidisciplinar
              </h3>
            </div>

            <p className="text-white/70 text-lg leading-relaxed mb-6">
              A Rede promove sinergia entre observatórios para desenvolver
              produtos de inteligência, análises, algoritmos, projeções,
              insights e painéis de dados baseados no processamento de
              informações industriais.
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              Com transferência de tecnologias e otimização de recursos,
              impulsiona ações integradas em diversos eixos temáticos,
              fortalecendo decisões orientadas por evidências.
            </p>
          </div>

          {/* CARD FIEPB */}

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 via-primary-light/20 to-secondary/30 rounded-[36px] blur-2xl opacity-70" />

            <div className="relative bg-white/10 backdrop-blur-md rounded-[36px] border border-white/10 p-8 h-full shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-secondary-light" />

                <h3 className="text-2xl font-bold text-white">
                  Observatório da FIEPB
                </h3>
              </div>

              <p className="text-white/70 leading-relaxed mb-8">
                Credenciado na Rede Nacional desde 2023, participa de mentorias,
                avaliações de maturidade e iniciativas de compartilhamento de
                conhecimento e metodologias.
              </p>

              <div
                className={`
    grid md:grid-cols-2 gap-10
    transition-all duration-1000 delay-700
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
              >
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="bg-white/10 rounded-2xl border border-white/10 p-5"
                    >
                      <Icon className="w-6 h-6 text-secondary-light mb-4" />

                      <h4 className="text-3xl font-bold text-white mb-2">
                        {stat.value}
                      </h4>

                      <p className="text-white/60 text-sm">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* TÍTULO MAPAS */}
        <div className="text-center mb-14">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#1a98ce] mb-4">
            Mapa da Rede
          </h3>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-5" />

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Presença e evolução da Rede Nacional de Observatórios da Indústria.
          </p>
        </div>

        {/* MAPAS */}
        <div
          className={`
    grid md:grid-cols-2 gap-10
    transition-all duration-1000 delay-700
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
        >
          {/* MAPA 1 */}
          <div
            className="group relative cursor-pointer rounded-[30px] overflow-hidden bg-[#111827] border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40"
            onClick={() =>
              setSelectedImage({
                src: mapaRede,
                title: "Mapa da Rede",
                description:
                  "Painel de presença nacional dos observatórios credenciados.",
              })
            }
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            <div className="absolute top-5 right-5 z-20">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                <Expand className="w-5 h-5 text-white" />
              </div>
            </div>

            <img
              src={mapaRede}
              className="w-full h-[420px] object-contain bg-[#0B1120] transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Mapa da Rede
              </h3>

              <p className="text-white/70">
                Distribuição nacional dos observatórios credenciados.
              </p>
            </div>
          </div>

          {/* MAPA 2 */}
          <div
            className="group relative cursor-pointer rounded-[30px] overflow-hidden bg-[#111827] border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40"
            onClick={() =>
              setSelectedImage({
                src: mapaRedeDetalhado,
                title: "Mapa detalhado",
                description:
                  "Mapa detalhado com distribuição e destaques por federação.",
              })
            }
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            <div className="absolute top-5 right-5 z-20">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                <Expand className="w-5 h-5 text-white" />
              </div>
            </div>

            <img
              src={mapaRedeDetalhado}
              className="w-full h-[420px] object-contain bg-[#0B1120] transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Mapa Detalhado
              </h3>

              <p className="text-white/70">
                Visão detalhada da Rede por federação.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL PROFISSIONAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          {/* BOTÃO FECHAR */}
          <button
            className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md p-3 rounded-full transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="text-white w-6 h-6" />
          </button>

          {/* CONTAINER */}
          <div
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LEGENDA SUPERIOR */}
            <div className="mb-6 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {selectedImage.title}
              </h3>

              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                {selectedImage.description}
              </p>
            </div>

            {/* IMAGEM */}
            <div className="rounded-[32px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)] border border-white/10">
              <img
                src={selectedImage.src}
                className="w-full max-h-[75vh] object-contain bg-[#0B1120]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
