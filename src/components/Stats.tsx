import { TrendingUp, TrendingDown, Activity, Factory, Package, Users } from 'lucide-react';

const indicators = [
  {
    icon: Factory,
    title: 'PIB Industrial',
    value: 'R$ 12.8B',
    change: '+7.2%',
    trend: 'up',
    description: 'Participação na economia paraibana',
  },
  {
    icon: Activity,
    title: 'Capacidade Instalada',
    value: '78.5%',
    change: '+2.1%',
    trend: 'up',
    description: 'Utilização média das indústrias',
  },
  {
    icon: Package,
    title: 'Exportações',
    value: 'R$ 856M',
    change: '+12.3%',
    trend: 'up',
    description: 'Produtos industrializados',
  },
  {
    icon: Users,
    title: 'Empregos Formais',
    value: '85.2K',
    change: '+3.5%',
    trend: 'up',
    description: 'Postos de trabalho industriais',
  },
];

const sectors = [
  { name: 'Confecções', percentage: 88, color: 'bg-secondary' },
  { name: 'Software/TI', percentage: 82, color: 'bg-primary-light' },
  { name: 'Alimentos', percentage: 76, color: 'bg-secondary-light' },
  { name: 'Cerâmica', percentage: 71, color: 'bg-primary' },
  { name: 'Calçados', percentage: 68, color: 'bg-secondary-dark' },
];

const monthlyData = [
  { month: 'Jan', value: 78 },
  { month: 'Fev', value: 82 },
  { month: 'Mar', value: 85 },
  { month: 'Abr', value: 81 },
  { month: 'Mai', value: 88 },
  { month: 'Jun', value: 92 },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Activity className="w-4 h-4 text-secondary-light" />
            <span className="text-white/80 text-sm font-medium">Indicadores em Tempo Real</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Indicadores da Paraíba
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Acompanhe os principais indicadores do setor industrial paraibano em tempo real.
          </p>
        </div>

        {/* Indicator Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div
                key={indicator.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                  hover:bg-white/15 hover:border-white/20 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-secondary-light" />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
                    ${indicator.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {indicator.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {indicator.change}
                  </div>
                </div>

                <h3 className="text-white/60 text-sm mb-1">{indicator.title}</h3>
                <p className="text-3xl font-bold text-white mb-2">{indicator.value}</p>
                <p className="text-white/50 text-xs">{indicator.description}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sector Performance */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Setores da Paraíba</h3>
            <div className="space-y-4">
              {sectors.map((sector) => (
                <div key={sector.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">{sector.name}</span>
                    <span className="text-white font-medium">{sector.percentage}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${sector.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${sector.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Evolução Mensal</h3>
            <div className="flex items-end justify-between gap-2 h-48">
              {monthlyData.map((data) => (
                <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col items-center justify-end h-40">
                    <div
                      className="w-full max-w-8 bg-gradient-to-t from-secondary to-secondary-light rounded-t transition-all duration-700 hover:from-secondary-dark hover:to-secondary"
                      style={{ height: `${data.value * 1.5}px` }}
                    />
                  </div>
                  <span className="text-white/60 text-xs">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-white/50">
              <span>Junho/2026</span>
              <span className="text-secondary-light">Índice: 86 pontos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
