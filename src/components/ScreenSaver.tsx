import { useEffect, useState } from "react";
import logoAzul from "../assets/logoazul.png";
import logoSistema from "../assets/sistemafiepb.png";
import FloatingPanel from "./FloatingPanel";

interface ScreenSaverProps {
  onClose: () => void;
}

export default function ScreenSaver({ onClose }: ScreenSaverProps) {
  const [currentLogo, setCurrentLogo] = useState(0);

  const logos = [logoAzul, logoSistema];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const close = () => onClose();

    window.addEventListener("mousemove", close);
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", close);
    window.addEventListener("touchstart", close);

    return () => {
      window.removeEventListener("mousemove", close);
      window.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", close);
      window.removeEventListener("touchstart", close);
    };
  }, [onClose]);
  return (
    <div
      className="
      fixed
      inset-0
      z-[99999]
      overflow-hidden
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-primary-dark
      via-primary
      to-[#06152f]
      "
    >
      {/* Luz principal */}
      <div
        className="
        absolute
        w-[1000px]
        h-[1000px]
        rounded-full
        bg-blue-300/20
        blur-[180px]
        animate-pulse
        "
      />

      {/* Luz secundária em movimento */}
      <div
        className="
        absolute
        w-[600px]
        h-[600px]
        rounded-full
        bg-blue-200/90
        blur-[140px]
        animate-float
        "
      />

      {/* Feixe de luz passando */}
      <div
        className="
        absolute
        w-[180px]
        h-[900px]
        bg-gradient-to-b
        from-transparent
        via-blue-200/30
        to-transparent
        blur-[60px]
        rotate-45
        animate-light-beam
        "
      />

      <FloatingPanel top="10%" delay="0s" duration="22s" scale={1} />

      <FloatingPanel top="28%" delay="-8s" duration="28s" scale={0.8} />

      <FloatingPanel top="56%" delay="-15s" duration="24s" scale={1.2} />

      <FloatingPanel top="74%" delay="-4s" duration="30s" scale={0.7} />

      {/* Esfera holográfica */}
      <div
        className="
        absolute
        w-[650px]
        h-[650px]
        rounded-full
        bg-gradient-to-br
        from-white/20
        via-blue-300/10
        to-transparent
        backdrop-blur-xl
        border
        border-white/20
        shadow-2xl
        shadow-blue-400/50
        animate-float
        "
      />

      {/* Ondas de energia */}
      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        border
        border-blue-200/20
        animate-wave
        "
      />

      <div
        className="
        absolute
        w-[650px]
        h-[650px]
        rounded-full
        border
        border-blue-200/10
        animate-wave-delay
        "
      />

      {/* Anéis 3D */}
      <div
        className="
        absolute
        w-[760px]
        h-[760px]
        rounded-full
        border
        border-blue-200/20
        animate-spin-slow
        "
      />

      {/* Partículas digitais */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="
            absolute
            w-1.5
            h-1.5
            rounded-full
            bg-white/40
            animate-particle
            "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div
        className="
        relative
        flex
        items-center
        justify-center
        "
      >
        {/* Glow */}
        <div
          className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-300/40
          blur-[100px]
          animate-pulse
          "
        />

        <img
          key={currentLogo}
          src={logos[currentLogo]}
          alt="Logo"
          className="
          relative
          w-[360px]
          md:w-[500px]
          object-contain
          animate-logo-3d
          drop-shadow-[0_0_40px_rgba(147,197,253,0.8)]
          "
        />
      </div>

      {/* Texto */}
      <div
        className="
        absolute
        bottom-16
        text-center
        "
      >
        <p
          className="
          text-white/90
          text-sm
          tracking-[0.5em]
          "
        >
          OBSERVATÓRIO DA INDÚSTRIA
        </p>

        <p
          className="
          text-white/50
          text-xs
          mt-3
          tracking-widest
          "
        >
          Inteligência • Dados • Estratégia
        </p>
      </div>
    </div>
  );
}
