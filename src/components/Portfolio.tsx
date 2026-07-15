import { useState } from "react";
import { ExternalLink, MonitorSmartphone, X } from "lucide-react";

import guiaIndustrial from "../assets/guia_industrial.png";
import industriaNumeros from "../assets/industria_em_numeros.png";
import prospeccao from "../assets/painel_de_prospeccao.png";
import propostas from "../assets/painel_de_prospostas.png";
import informacoesMercado from "../assets/enriquecimento_empresas.png";
import panoramaSenai from "../assets/mapeamento_senai.png";
import hubObservatorio from "../assets/hub_observatorio.png";
import salaProspectiva from "../assets/sala_prospectiva.png";
import dataEnsight from "../assets/dataensight.png";
import mapaMundi from "../assets/mapa_mundi.png";
import redePaineis from "../assets/rede_de_paineis.png";
import portalSindicatos from "../assets/portal_dos_sindicatos.png";

const portfolio = [
  {
    id: 1,
    image: guiaIndustrial,
    title: "Guia Industrial",
    description:
      "Base consultiva para localizar empresas industriais por CNPJ, nome, CNAE e território, com visualizações em mapa e grafo para análise de relacionamento produtivo.",
    button: "Acessar Plataforma",
    link: "http://guiaindustrial.observatoriopb.com.br/",
  },
  {
    id: 2,
    image: industriaNumeros,
    title: "Dashboard de Indústria em Números",
    description:
      "Painel executivo para acompanhamento de indicadores setoriais e leitura objetiva de desempenho, apoiando decisões baseadas em evidências.",
    button: "Acessar Dashboard",
    link: "https://paineis.observatoriopb.com.br/dash/industriaemnumeros",
  },
  {
    id: 3,
    image: prospeccao,
    title: "Painel de Prospecção (SESI e SENAI)",
    description:
      "Dashboard com filtros gerenciais por empresa, setor, localidade, risco e situação cadastral, estruturando a priorização comercial com maior assertividade.",
    button: "Acessar Dashboard",
    link: "https://paineis.observatoriopb.com.br/dash/sstmercado",
  },
  {
    id: 4,
    image: propostas,
    title: "Painel de Propostas CRM (SESI e SENAI)",
    description:
      "Visualização interativa para monitorar valor de propostas por produto, ticket médio e estágio comercial, com detalhamento por item e unidade de atendimento.",
    button: "Acessar Dashboard",
    link: "https://paineis.observatoriopb.com.br/dash/solucao360",
  },
  {
    id: 5,
    image: informacoesMercado,
    title: "Sistema de Informações Atualizadas de Mercado",
    description:
      "Plataforma para atualização e enriquecimento cadastral, com histórico de relacionamento e governança da qualidade da informação para uso comercial e institucional.",
    button: "Acessar Plataforma",
    link: "https://sistematestemvp.netlify.app/",
  },
  {
    id: 6,
    image: panoramaSenai,
    title: "Panorama SENAI por Mesorregião",
    description:
      "Mapeamento das empresas da Paraíba por segmentos de atendimento educacional do SENAI, com leitura regional de 14 áreas estratégicas do setor produtivo.",
    button: "Acessar Plataforma",
    link: "https://public.observatoriopb.com.br/mapeamentosenai/",
  },
  {
    id: 7,
    image: hubObservatorio,
    title: "Hub do Observatório",
    description:
      "Plataforma com visualização interativa em visão plana ou grafo 3D das conexões entre painéis, funcionando como uma netflix de dados com dashboards próprios e públicos.",
    button: "Acessar Plataforma",
    link: "http://hub.observatoriopb.com.br/panels",
  },
  {
    id: 8,
    image: salaProspectiva,
    title: "Sala Prospectiva",
    description:
      "Plataforma que agrupa painéis desenvolvidos para as casas SESI e SENAI com dados estratégicos, como potencial de atuação de mercado e análises para apoio tático.",
    button: "Acessar Plataforma",
    link: "https://observatorios.fiepr.org.br/salaprospectiva/web/fiepb/potencial-atuacao",
  },
  {
    id: 9,
    image: dataEnsight,
    title: "Data Ensight",
    description:
      "Plataforma desenvolvida para concentrar os painéis voltados à Rede de Observatórios, facilitando acesso unificado e leitura estratégica de dados compartilhados.",
    button: "Acessar Plataforma",
    link: "https://cni.reportload.com/all/reports",
  },
  {
    id: 10,
    image: mapaMundi,
    title: "Mapa Mundí",
    description:
      "Plataforma interativa com indicadores do Banco Mundial e dados relacionados à Paraíba, reunindo visualizações para análise comparativa e suporte a decisões estratégicas.",
    button: "Acessar Plataforma",
    link: "http://world-map.observatoriopb.com.br/",
  },
  {
    id: 11,
    image: redePaineis,
    title: "Rede de Painéis",
    description:
      "Plataforma colaborativa de curadoria e visualização de painéis, com crawler para busca contínua de novos conteúdos e ampliação do acervo analítico.",
    button: "Acessar Plataforma",
    link: "#",
  },
  {
    id: 12,
    image: portalSindicatos,
    title: "Portal dos Sindicatos",
    description:
      "Portal com dados dos sindicatos, das empresas vinculadas e de potenciais empresas, facilitando prospecção, relacionamento institucional e planejamento de atuação.",
    button: "Acessar Plataforma",
    link: "http://redepaineis.hub.observatoriopb.com.br/",
  },
];

export default function Portfolio() {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  return (
    <section
      id="portfolio"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary"
    >
      {/* Background Effects */}
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
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/10">
            <MonitorSmartphone className="w-4 h-4 text-secondary-light" />

            <span className="text-secondary-light text-sm font-semibold">
              Portfólio Digital
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Soluções digitais para
            <span className="block mt-2 bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              inteligência de mercado
            </span>
          </h2>

          <p className="text-white/70 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Plataformas desenvolvidas para transformar dados em inteligência,
            apoiando prospecção, análises estratégicas e decisões no Sistema
            Indústria FIEPB.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className="
              group
              relative
              bg-white/10
              backdrop-blur-md
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              shadow-xl
              hover:-translate-y-3
              hover:border-secondary/40
              transition-all
              duration-500
            "
            >
              {/* Glow */}
              <div
                className="
                absolute
                -top-20
                -right-20
                w-48
                h-48
                bg-secondary/20
                rounded-full
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition
              "
              />

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  w-full
                  h-60
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
                />

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-primary/80
                  via-transparent
                  to-transparent
                "
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col min-h-[330px] relative">
                <h3
                  className="
                text-xl
                font-bold
                text-white
                mb-4
                leading-snug
              "
                >
                  {item.title}
                </h3>

                <p
                  className="
                text-white/70
                leading-relaxed
                flex-1
              "
                >
                  {item.description}
                </p>

                <button
                  onClick={() => setSelectedLink(item.link)}
                  className="
    mt-6
    inline-flex
    items-center
    justify-center
    gap-2
    bg-secondary
    text-white
    rounded-xl
    py-3
    font-semibold
    shadow-lg
    shadow-secondary/30
    hover:bg-secondary-light
    hover:scale-105
    transition-all
    duration-300
  "
                >
                  {item.button}

                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedLink && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm">
          <button
            onClick={() => setSelectedLink(null)}
            className="
        absolute
        top-5
        right-5
        z-10
        w-12
        h-12
        rounded-full
        bg-white/10
        hover:bg-red-500
        text-white
        flex
        items-center
        justify-center
        transition
      "
          >
            <X size={28} />
          </button>

          <iframe
            src={selectedLink}
            className="w-full h-full"
            title="Plataforma"
          />
        </div>
      )}
    </section>
  );
}
