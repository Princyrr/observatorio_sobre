import { useState } from "react";
import ScreenSaver from "./ScreenSaver";
import {
  Factory,
  TrendingUp,
  BarChart3,
  ChevronDown,
  Monitor,
} from "lucide-react";
import iconLogo from "../assets/iconlogo.png";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [showScreenSaver, setShowScreenSaver] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary"
    >
      {/* BOTÃO */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setShowScreenSaver(true)}
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-2xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            text-white
            font-medium
            shadow-xl
            hover:bg-white/20
            hover:scale-105
            transition-all
            duration-300
          "
        >
          <Monitor size={20} />
        </button>
      </div>

      {/* PROTETOR DE TELA */}
      {showScreenSaver && (
        <ScreenSaver onClose={() => setShowScreenSaver(false)} />
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-light/40 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 3px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="hero-grid gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in mt-10">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary-light text-sm font-medium">
                Observatório da Indústria da FIEPB
              </span>
            </div>

            <h1 className="text-5xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Inteligência de dados para decisões
              <span className="block mt-2 bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                estratégicas na indústria paraibana
              </span>
            </h1>

            <p
              className="text-xl text-white/70 mb-8 max-w-lg mx-auto animate-fade-in-up"
              style={{ animationDelay: "150ms" }}
            >
              Plataforma de integração de dados, análises e estudos técnicos
              voltada ao suporte de decisões estratégicas no setor industrial,
              gestão pública e desenvolvimento econômico regional.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up mb-14"
              style={{ animationDelay: "300ms" }}
            >
              <button
                onClick={() => onNavigate("about")}
                className="group px-8 py-4 bg-secondary rounded-xl text-white font-semibold shadow-lg shadow-secondary/30
                  hover:bg-secondary-light hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <BarChart3 size={20} />
                Sobre o Observatório
                <TrendingUp
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => onNavigate("portfolio")}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20
                  hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Portfólio de Estudos
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className="flex justify-center animate-fade-in-right order-2 lg:order-none mb-24"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative">
              {/* Central Circle */}

              <div
                className="
    w-[320px]
    h-[320px]
    md:w-[420px]
    md:h-[420px]
    lg:w-[500px]
    lg:h-[500px]
    xl:w-[620px]
    xl:h-[620px]
    rounded-full
    bg-gradient-to-br
    from-secondary/30
    to-secondary/10
    flex
    items-center
    justify-center
    backdrop-blur-sm
    border
    border-white/10
    animate-scale-in
"
              >
                <div
                  className="
    w-[230px]
    h-[230px]
    md:w-[310px]
    md:h-[310px]
    lg:w-[380px]
    lg:h-[380px]
    xl:w-[460px]
    xl:h-[460px]
    rounded-full
    bg-gradient-to-br
    from-blue-200
    to-blue-300
    flex
    items-center
    justify-center
    shadow-2xl
    shadow-secondary/30
    animate-float
    p-6
    md:p-8
    xl:p-10
"
                >
                  <img
                    src={iconLogo}
                    alt="Observatório da Indústria FIEPB"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg animate-float border border-white/20"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Painéis</p>
                    <p className="text-white/60 text-xs">
                      Indicadores estratégicos
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg animate-float border border-white/20"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Estudos</p>
                    <p className="text-white/60 text-xs">Análises setoriais</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg animate-float border border-white/20"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary-light flex items-center justify-center">
                    <Factory className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Dados</p>
                    <p className="text-white/60 text-xs">
                      Inteligência para decisões
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => onNavigate("about")}
            className="text-white/50 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
