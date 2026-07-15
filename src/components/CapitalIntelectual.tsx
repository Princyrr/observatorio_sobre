import capital from "../assets/capital.svg";

import {
  BrainCircuit,
  Activity,
  FileSearch,
  MapPinned,
  LayoutDashboard,
} from "lucide-react";

const strategicFronts = [
  {
    icon: Activity,
    title: "Monitoramento",
    subtitle: "Monitoramento contínuo do ambiente econômico e industrial",
    description:
      "Acompanhamento de indicadores de desempenho, emprego, comércio exterior e inovação.",
  },
  {
    icon: FileSearch,
    title: "Análises",
    subtitle: "Estudos e diagnósticos para direcionar estratégia",
    description:
      "Produção de relatórios setoriais, estudos personalizados e análises periódicas orientadas à ação.",
  },
  {
    icon: MapPinned,
    title: "Território",
    subtitle: "Inteligência territorial para decisões regionais",
    description:
      "Análise de dinâmicas locais para apoiar políticas públicas, atração de investimentos e desenvolvimento.",
  },
  {
    icon: LayoutDashboard,
    title: "Plataformas",
    subtitle: "Soluções digitais para leitura executiva",
    description:
      "Dashboards e sistemas que tornam dados complexos acessíveis, visuais e prontos para uso estratégico.",
  },
];

export default function CapitalIntelectual() {
  return (
    <section
      id="capital"
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

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/10">
            <BrainCircuit className="w-4 h-4 text-secondary-light" />

            <span className="text-secondary-light text-sm font-semibold">
              Capital Intelectual
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Capital Intelectual
            <span className="block mt-2 bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              Especializado
            </span>
          </h2>

          <p className="max-w-4xl mx-auto text-lg lg:text-xl text-white/70 leading-relaxed">
            A estrutura da Rede Nacional de Observatórios consolida expertise
            coletiva e conhecimento especializado para suportar a tomada de
            decisão industrial.
          </p>
        </div>

        {/* IMAGE CARD */}
        <div className="relative max-w-6xl mx-auto mb-24 group">
          {/* GLOW */}
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 via-primary-light/20 to-secondary/30 rounded-[36px] blur-2xl opacity-70 group-hover:opacity-100 transition duration-700" />

          {/* CARD */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-[36px] border border-white/10 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="p-6 lg:p-10">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#182235] via-[#101826] to-[#0B1120] p-4 lg:p-6">
                {/* Glow */}
                <div className="absolute inset-0 bg-secondary/10 blur-3xl" />

                <img
                  src={capital}
                  alt="Capital Intelectual Especializado"
                  className="relative z-10 w-auto max-w-full mx-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-14">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Frentes Estratégicas
          </h3>

          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary-light mx-auto rounded-full mb-5" />

          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Atuação orientada por impacto, inteligência estratégica e suporte à
            tomada de decisão industrial.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {strategicFronts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative bg-white/10 backdrop-blur-md rounded-[28px] border border-white/10 p-8 overflow-hidden
                shadow-[0_10px_40px_rgba(0,0,0,0.20)]
                hover:-translate-y-2 hover:bg-white/[0.14]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                transition-all duration-500"
              >
                {/* BACKGROUND EFFECT */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

                {/* ICON */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center shadow-lg shadow-secondary/30 mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h4>

                  <p className="text-secondary-light font-medium mb-4 leading-relaxed">
                    {item.subtitle}
                  </p>

                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
