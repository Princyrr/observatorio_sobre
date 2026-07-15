import { Globe } from "lucide-react";

import fiepLogo from "../assets/sistemafiepb.png";
import senaiLogo from "../assets/logosenai.png";
import sesiLogo from "../assets/logosesi.png";
import ielLogo from "../assets/logoiel.png";
import icsLogo from "../assets/logoics.png";

const partners = [
  {
    name: "FIEP",
    logo: fiepLogo,
    logoClass: "w-32 h-28",
  },
  {
    name: "SENAI-PB",
    logo: senaiLogo,
    logoClass: "w-40 h-30",
  },
  {
    name: "SESI-PB",
    logo: sesiLogo,
    logoClass: "w-40 h-30",
  },
  {
    name: "IEL-PB",
    logo: ielLogo,
    logoClass: "w-40 h-30",
  },
  {
    name: "ICS",
    logo: icsLogo,
    logoClass: "w-36 h-32",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Parceiros</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Conheça nossos parceiros
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Instituições parceiras que contribuem para geração de conhecimento,
            inovação e inteligência estratégica para a indústria.
          </p>
        </div>

        {/* Partners */}
        <div className="bg-primary/5 rounded-3xl p-8 lg:p-12">
          <h3 className="text-xl font-semibold text-primary text-center mb-10">
            Parceiros Institucionais
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="
                  group
                  bg-white
                  rounded-2xl
                  p-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-sm
                  border
                  border-gray-100
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                {/* Área da logo */}
                <div
                  className="
                    w-full
                    h-36
                    mb-6
                    rounded-2xl
                    bg-gradient-to-br
                    from-primary/5
                    to-secondary/10
                    flex
                    items-center
                    justify-center
                    border
                    border-gray-100
                    group-hover:scale-105
                    transition-transform
                    duration-300
                  "
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`
                      ${partner.logoClass}
                      object-contain
                    `}
                  />
                </div>

                <p className="text-primary font-bold text-lg text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
