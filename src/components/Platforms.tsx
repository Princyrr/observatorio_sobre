import {
  Building2,
  Factory,
  Users,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Database,
  School,
  Globe,
  Map,
  ArrowUpRight,
  Sparkles,
  BarChart3,
} from "lucide-react";

const fiepbPlatforms = [
  {
    title: "Estabelecimentos",
    icon: Building2,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/estabelecimentos",
  },
  {
    title: "Empresas Ativas",
    icon: Factory,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/empresas-ativas",
  },
  {
    title: "Trabalhadores",
    icon: Users,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/trabalhadores",
  },
  {
    title: "Movimentação",
    icon: TrendingUp,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/movimentacao-nova",
  },
  {
    title: "Mercado",
    icon: Briefcase,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/mercado",
  },
  {
    title: "Análise de Egressos",
    icon: GraduationCap,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/analise-egresso",
  },
  {
    title: "POD",
    icon: Database,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/pod",
  },
  {
    title: "Previsão de Cursos",
    icon: School,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/previsao-de-curso",
  },
  {
    title: "Educação Básica",
    icon: School,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/educacao-basica",
  },
  {
    title: "Infraestrutura",
    icon: Globe,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/infraestrutura",
  },
  {
    title: "Potencial Colégio SESI",
    icon: Building2,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/potencial-colegio-sesi",
  },
  {
    title: "Potencial de Atuação",
    icon: Map,
    url: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/potencial-atuacao",
  },
];

const nationalPlatforms = [
  {
    title: "Atlas da Inovação",
    icon: BarChart3,
    url: "https://cni.reportload.com/a89bacfc-fb14-4340-975f-6e44eb606367/reports/view",
  },
  {
    title: "Catálogo de Dados - ONI",
    icon: Database,
    url: "https://cni.reportload.com/e9ab10b2-feaa-4574-8839-f065004b35c7/reports/view",
  },
  {
    title: "Plataforma de Inteligência Eleitoral",
    icon: TrendingUp,
    url: "https://cni.reportload.com/c18762b1-30f4-4af7-8034-c408d3dfd294/reports/view",
  },
  {
    title: "Geografia da Indústria Brasileira",
    icon: Globe,
    url: "https://cni.reportload.com/1ca99b77-98ae-4dd9-85dd-08a39e04cbf0/reports/view",
  },
  {
    title: "Indicadores da Juventude",
    icon: Users,
    url: "https://cni.reportload.com/fe2145fa-7925-43ef-a85c-78187395e03c/reports/view",
  },
  {
    title: "Monitor Nacional de Investimentos",
    icon: TrendingUp,
    url: "https://cni.reportload.com/6e2c2e49-bba6-4bca-9cf7-92727bd418f3/reports/view",
  },
  {
    title: "Mapa do Trabalho Industrial",
    icon: Map,
    url: "https://cni.reportload.com/2021b43e-5c98-4d7f-a144-9b0d8c391467/reports/view",
  },
  {
    title: "Monitor de Acidentes",
    icon: Briefcase,
    url: "https://cni.reportload.com/4d19c45e-37d9-454f-864a-12f3e8261e5d/reports/view",
  },
  {
    title: "Análise de Acidentes",
    icon: BarChart3,
    url: "https://cni.reportload.com/acdbbf7d-3221-425f-b66f-4134a2f954de/reports/view",
  },
  {
    title: "Cadastro Nacional de Obras",
    icon: Building2,
    url: "https://cni.reportload.com/9365582c-f55f-4325-a4cc-5bad3524f7ea/reports/view",
  },
  {
    title: "Mercado de Trabalho - Gênero",
    icon: Users,
    url: "https://cni.reportload.com/4eac1e9b-06bf-44d7-961a-0bf37b47a7f5/reports/view",
  },
  {
    title: "Oportunidade SENAI",
    icon: GraduationCap,
    url: "https://cni.reportload.com/825a3b41-c615-4bad-b4e3-d1be34ac8de3/reports/view",
  },
  {
    title: "Polos Industriais",
    icon: Factory,
    url: "https://cni.reportload.com/19e0e7a4-039b-464e-8aab-7c49b4831295/reports/view",
  },
];

function Section({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: any[];
}) {
  return (
    <div className="mb-24">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
          <Sparkles className="w-4 h-4 text-secondary-light" />
          <span className="text-secondary-light text-sm font-semibold">
            Plataformas
          </span>
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title.split(" ").slice(0, -1).join(" ")}

          <span className="block mt-2 bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
            {title.split(" ").slice(-1)}
          </span>
        </h2>

        <p className="text-white/70 text-lg max-w-3xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {data.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-md border border-white/10 hover:border-secondary/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/5 to-secondary/20 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative p-8 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shadow-xl shadow-secondary/30 mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/10">
                  <span className="text-secondary-light font-semibold">
                    Acessar plataforma
                  </span>

                  <ArrowUpRight className="w-5 h-5 text-secondary-light transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function Platforms() {
  return (
    <section
      id="inteligencia"
      className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />

        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

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
        <Section
          title="Sala Prospectiva FIEPB"
          subtitle="Acesse painéis estratégicos com indicadores econômicos, mercado de trabalho, educação, infraestrutura e inteligência territorial."
          data={fiepbPlatforms}
        />

        <Section
          title="Plataformas Nacionais"
          subtitle="Ferramentas nacionais de inteligência desenvolvidas pela Rede de Observatórios do Sistema Indústria."
          data={nationalPlatforms}
        />
      </div>
    </section>
  );
}
