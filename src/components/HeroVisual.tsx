import { Factory, TrendingUp, BarChart3 } from "lucide-react";
import iconLogo from "../assets/iconlogo.png";

export default function HeroVisual() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        {/* Círculo externo */}
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
            backdrop-blur-sm
            border
            border-white/10
            flex
            items-center
            justify-center
            animate-scale-in
          "
        >
          {/* Círculo interno */}
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
              shadow-2xl
              shadow-secondary/30
              animate-float
              p-6
              md:p-8
              xl:p-10
              flex
              items-center
              justify-center
            "
          >
            <img
              src={iconLogo}
              alt="Observatório da Indústria"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Card 1 */}
        <div
          className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>

            <div>
              <p className="text-white font-semibold">Painéis</p>
              <p className="text-white/60 text-xs">Indicadores estratégicos</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20 animate-float"
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

        {/* Card 3 */}
        <div
          className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20 animate-float"
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
  );
}
