import { useState } from "react";

import logoAzul from "../assets/logobranca.png";
import sistemaFiepb from "../assets/sistemafiepbbranca.png";
import logoSesi from "../assets/logosesibranca.png";
import logoSenai from "../assets/logosenaibranca.png";
import logoIel from "../assets/logoielbranca.png";

import {
  Home,
  Factory,
  Image,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Network,
  TrendingUp,
  BookOpen,
  Mail,
  Gamepad2,
  LayoutDashboard,
  BrainCircuit,
  FileText,
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;

  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const menuItems = [
  { id: "home", label: "Início", icon: Home },
  { id: "about", label: "Sobre", icon: Factory },
  { id: "network", label: "Rede Nacional", icon: Network },
  { id: "impacto", label: "Impacto Sistêmico", icon: TrendingUp },
  {
    id: "capital",
    label: "Capital Intelectual",
    icon: BrainCircuit,
  },
  { id: "portfolio", label: "Portfólio", icon: Image },

  {
    id: "inteligencia",
    label: "Plataformas",
    icon: LayoutDashboard,
  },
  {
    id: "diagramacao",
    label: "Diagramação",
    icon: FileText,
  },
  { id: "memoria", label: "Memória Estratégica", icon: BookOpen },
  { id: "conexo", label: "Game Conexo", icon: Gamepad2 },
  { id: "contact", label: "Contato", icon: Mail },
];
const partnersLogos = [logoSesi, logoSenai, logoIel];

export default function Sidebar({
  activeSection,
  onNavigate,
  collapsed,
  setCollapsed,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMemoria, setShowMemoria] = useState(false);
  const [showConexo, setShowConexo] = useState(false);

  return (
    <>
      {/* MOBILE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 rounded-xl bg-primary text-white shadow-lg hover:bg-primary-light transition-all duration-300 hover:scale-105"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-40
          bg-gradient-to-b from-primary via-primary-dark to-primary
          shadow-2xl border-r border-white/10
          transition-all duration-500 ease-in-out
          ${collapsed ? "w-24" : "w-72"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            absolute -right-4 top-10 z-50
            w-9 h-9 rounded-full
            bg-secondary text-white
            flex items-center justify-center
            shadow-xl border border-white/20
            hover:scale-110 transition-all duration-300
          "
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        {/* LOGO */}
        <div
          className={`
            border-b border-white/10 transition-all duration-500
            ${collapsed ? "p-4" : "p-6"}
          `}
        >
          <div className="flex items-center justify-center">
            <img
              src={logoAzul}
              alt="Observatório da Paraíba"
              className={`
                object-contain drop-shadow-2xl transition-all duration-500
                ${collapsed ? "h-12" : "h-20"}
              `}
            />
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="mt-8 px-3">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              const isActive = activeSection === item.id;

              return (
                <li key={item.id} style={{ animationDelay: `${index * 50}ms` }}>
                  <button
                    onClick={() => {
                      switch (item.id) {
                        case "diagramacao":
                          window.open(
                            "https://www.canva.com/design/DAHO_WPNYIk/YkL9P8ZGgOS4fo39pe30sg/view?utm_content=DAHO_WPNYIk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf41ea79efd#1tps://www.canva.com/design/SEU_LINK",
                            "_blank",
                            "noopener,noreferrer",
                          );
                          break;

                        case "memoria":
                          setShowMemoria(true);
                          break;

                        case "conexo":
                          setShowConexo(true);
                          break;

                        default:
                          onNavigate(item.id);
                      }

                      setIsOpen(false);
                    }}
                    className={`
                      w-full flex items-center rounded-2xl
                      transition-all duration-300 group relative overflow-hidden
                      ${
                        collapsed
                          ? "justify-center px-2 py-4"
                          : "gap-3 px-4 py-3.5"
                      }
                      ${
                        isActive
                          ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {/* ICON */}
                    <Icon
                      size={22}
                      className={`
                        transition-transform duration-300 shrink-0
                        ${isActive ? "scale-110" : "group-hover:scale-110"}
                      `}
                    />

                    {/* LABEL */}
                    {!collapsed && (
                      <>
                        <span className="font-medium whitespace-nowrap">
                          {item.label}
                        </span>

                        <ChevronRight
                          size={16}
                          className={`
                            ml-auto transition-all duration-300
                            ${
                              isActive
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }
                          `}
                        />
                      </>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* FOOTER */}
        <div
          className={`
    absolute bottom-0 left-0 right-0
    transition-all duration-500
    ${collapsed ? "p-3" : "p-5"}
  `}
        >
          <div
            className={`
      relative
      overflow-hidden
     bg-primary-dark
      rounded-3xl
      shadow-2xl
      border border-white/40
      ${collapsed ? "p-3" : "p-5"}
    `}
          >
            {/* Sistema FIEPB */}
            <div
              className="
        flex
        justify-center
        pb-4
        mb-4
        border-b
        border-gray-100
      "
            >
              <img
                src={sistemaFiepb}
                alt="Sistema FIEPB"
                className={`
          object-contain
          transition-all
          duration-300
          ${collapsed ? "h-22" : "h-24"}
        `}
              />
            </div>

            {/* Parceiros */}
            {!collapsed && (
              <div className="overflow-hidden relative">
                {/* brilho lateral */}
                <div
                  className="
            absolute
            left-0
            top-0
            bottom-0
            w-8
            bg-gradient-to-r
    from-[#062B45]
            to-transparent
            z-10
          "
                />

                <div
                  className="
            absolute
            right-0
            top-0
            bottom-0
            w-8
             bg-gradient-to-l
    from-[#062B45]
            to-transparent
            z-10
          "
                />

                <div className="flex animate-marquee-track">
                  {/* primeira sequência */}
                  <div className="flex shrink-0">
                    {[...partnersLogos, ...partnersLogos].map((logo, index) => (
                      <div
                        key={index}
                        className="
        w-20
        h-12
        flex
        items-center
        justify-center
        mx-0.5
        shrink-0
      "
                      >
                        <img
                          src={logo}
                          alt="Parceiro"
                          className="
          max-w-full
          max-h-full
          object-contain
          opacity-80
          hover:opacity-100
          hover:scale-110
          transition-transform
          duration-300
        "
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex shrink-0">
                    {[...partnersLogos, ...partnersLogos].map((logo, index) => (
                      <div
                        key={`copy-${index}`}
                        className="
        w-20
        h-12
        flex
        items-center
        justify-center
        mx-0.5
        shrink-0
      "
                      >
                        <img
                          src={logo}
                          alt="Parceiro"
                          className="
          max-w-full
          max-h-full
          object-contain
          opacity-80
          hover:opacity-100
          hover:scale-110
          transition-transform
          duration-300
        "
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
      {/* MODAL MEMÓRIA ESTRATÉGICA */}
      {showMemoria && (
        <div
          className="
      fixed
      inset-0
      z-[100]
      bg-black/60
      backdrop-blur-sm
      flex
      items-center
      justify-center
      p-4
    "
        >
          <div
            className="
    relative
    w-[95%]
    max-w-[1400px]
    h-[92vh]
    bg-white
    rounded-3xl
    shadow-2xl
    overflow-hidden
    animate-scale-in
  "
          >
            {/* BOTÃO FECHAR */}
            <button
              onClick={() => setShowMemoria(false)}
              className="
          absolute
          top-4
          right-4
          z-10
          w-10
          h-10
          rounded-full
          bg-primary
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          hover:scale-110
          transition
        "
            >
              <X size={22} />
            </button>

            <iframe
              src="https://memoria-estrategica.netlify.app/"
              className="
          w-full
          h-full
          border-0
        "
              title="Memória Estratégica"
            />
          </div>
        </div>
      )}

      {/* MODAL GAME CONEXO */}
      {showConexo && (
        <div
          className="
      fixed
      inset-0
      z-[100]
      bg-black/60
      backdrop-blur-sm
      flex
      items-center
      justify-center
      p-4
    "
        >
          <div
            className="
        relative
        w-[95%]
        max-w-[1400px]
        h-[92vh]
        bg-white
        rounded-3xl
        shadow-2xl
        overflow-hidden
        animate-scale-in
      "
          >
            {/* BOTÃO FECHAR */}
            <button
              onClick={() => setShowConexo(false)}
              className="
          absolute
          top-4
          right-4
          z-10
          w-10
          h-10
          rounded-full
          bg-primary
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          hover:scale-110
          transition
        "
            >
              <X size={22} />
            </button>

            <iframe
              src="https://game-conexo.netlify.app/"
              className="
          w-full
          h-full
          border-0
        "
              title="Game Conexo"
            />
          </div>
        </div>
      )}
    </>
  );
}
