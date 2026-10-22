import { useState } from "react";
import ScreenSaver from "./ScreenSaver";
import {
  TrendingUp,
  BarChart3,
  ChevronDown,
  Monitor,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import HeroVisual from "./HeroVisual";
import RobotScene from "./RobotScene";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [showScreenSaver, setShowScreenSaver] = useState(false);
  const [showRobot, setShowRobot] = useState(true);

  const toggleVisual = () => {
    setShowRobot((prev) => !prev);
  };

  {
    /* useEffect(() => {
    const interval = setInterval(() => {
      setShowRobot((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []); */
  }

  return (
    <section
      id="home"
      className="
  min-h-fit
  md:min-h-screen
  flex
  items-center
  justify-center
  relative
  overflow-hidden
  bg-gradient-to-br
  from-primary
  via-primary-dark
  to-primary
"
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

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-4">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center mt-14">
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
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
        </div>
        <div
          className="
    relative
    group
    w-full
    h-[320px]
    sm:h-[420px]
    md:h-[520px]
    lg:h-[650px]
    xl:h-[750px]
    flex
    items-center
    justify-center
  "
        >
          {/* Seta esquerda */}
          <button
            onClick={toggleVisual}
            className="
  absolute
  left-2
  md:left-6
  z-20
  w-10
  h-10
  rounded-full
  bg-white/10
  backdrop-blur-md
  border
  border-white/10
  flex
  items-center
  justify-center

  opacity-0
  group-hover:opacity-100

  transition-all
  duration-300

  text-white/60
  hover:text-white
  hover:bg-white/20
"
          >
            <ChevronLeft size={22} />
          </button>

          {showRobot ? <RobotScene /> : <HeroVisual />}

          {/* Seta direita */}
          <button
            onClick={toggleVisual}
            className="
  absolute
  right-2
  md:right-6
  z-20
  w-10
  h-10
  rounded-full
  bg-white/10
  backdrop-blur-md
  border
  border-white/10
  flex
  items-center
  justify-center

  opacity-0
  group-hover:opacity-100

  transition-all
  duration-300

  text-white/60
  hover:text-white
  hover:bg-white/20
"
          >
            <ChevronRight size={22} />
          </button>
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
