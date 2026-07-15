import impacto from "../assets/impacto.png";
import { useEffect, useRef, useState } from "react";
import { Sparkles, TrendingUp } from "lucide-react";

export default function ImpactoSistemico() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impacto"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary"
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

      {/* GRID OVERLAY */}
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

      <div ref={contentRef} className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div
          className={`
    text-center mb-16
    transition-all duration-1000
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
  `}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <Sparkles className="w-4 h-4 text-secondary-light" />

            <span className="text-secondary-light text-sm font-semibold">
              Impacto Estratégico
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Impacto Sistêmico
            <span className="block mt-2 bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              da Rede Nacional
            </span>
          </h2>

          <p className="max-w-4xl mx-auto text-lg lg:text-xl text-white/70 leading-relaxed">
            A atuação em rede amplia resultados estratégicos e gera efeitos
            estruturantes para a indústria, com integração de inteligência,
            colaboração e inovação entre os observatórios.
          </p>
        </div>

        {/* CARD PRINCIPAL */}
        <div
          className={`
    relative group max-w-6xl mx-auto
    transition-all duration-1000 delay-300
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
  `}
        >
          {/* GLOW */}
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 via-primary-light/20 to-secondary/30 rounded-[36px] blur-2xl opacity-70 group-hover:opacity-100 transition duration-700" />

          {/* CONTAINER */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-[36px] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            {/* TOP CONTENT */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 px-8 lg:px-10 py-8 border-b border-white/10">
              {/* TEXT */}
              <div className="max-w-3xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Impacto Sistêmico da Rede
                </h3>

                <p className="text-white/70 text-lg leading-relaxed">
                  Integração de inteligência, colaboração e inovação para
                  fortalecer decisões estratégicas da indústria brasileira,
                  promovendo crescimento sustentável e desenvolvimento regional.
                </p>
              </div>

              {/* INFO CARD */}
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-5 py-4 rounded-2xl border border-white/10 self-start shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shadow-xl shadow-secondary/30">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>

                <div>
                  <p className="text-white font-semibold text-lg">
                    Desenvolvimento
                  </p>

                  <p className="text-white/60 text-sm">
                    Estratégico Industrial
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className={`
    p-6 lg:p-8
    transition-all duration-1000 delay-500
    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
  `}
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#182235] via-[#101826] to-[#0B1120] p-4 lg:p-6">
                {/* Glow */}
                <div className="absolute inset-0 bg-secondary/10 blur-3xl" />

                <img
                  src={impacto}
                  alt="Impacto Sistêmico da Rede"
                  className="relative z-10 w-auto max-w-full mx-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
