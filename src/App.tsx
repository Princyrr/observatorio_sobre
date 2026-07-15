import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import NationalNetwork from "./components/NationalNetwork";
import ImpactoSistemico from "./components/ImpactoSistemico";
import CapitalIntelectual from "./components/CapitalIntelectual";
import Portfolio from "./components/Portfolio";
import Platforms from "./components/Platforms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const [collapsed, setCollapsed] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "network",
        "impacto",
        "capital",
        "portfolio",
        "inteligencia",
        "contact",
        "team",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* MAIN */}
      <main
        className={`
          transition-all duration-500
          ${collapsed ? "lg:ml-24" : "lg:ml-72"}
        `}
      >
        <Hero onNavigate={handleNavigate} />

        <About onNavigate={handleNavigate} />

        <NationalNetwork />

        <ImpactoSistemico />

        <CapitalIntelectual />
        <Portfolio />
        <Platforms />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
