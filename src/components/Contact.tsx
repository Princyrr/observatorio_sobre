import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Globe, MapPin, QrCode, Sparkles } from "lucide-react";

import qrCode from "../assets/qrcode.png";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        py-24
        bg-gradient-to-br
        from-primary
        via-primary-dark
        to-primary
      "
    >
      {/* Luzes */}
      <div
        className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-secondary/20
          rounded-full
          blur-3xl
          animate-float
        "
      />

      <div
        className="
          absolute
          bottom-10
          right-20
          w-96
          h-96
          bg-secondary/10
          rounded-full
          blur-3xl
          animate-float
        "
      />

      <div
        className="
          container
          mx-auto
          px-6
          relative
          z-10
        "
      >
        {/* Cabeçalho */}
        <div
          className="
            text-center
            mb-14
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-secondary/20
              backdrop-blur-sm
              rounded-full
              px-4
              py-2
              border
              border-white/10
              mb-6
            "
          >
            <Sparkles className="w-4 h-4 text-secondary-light" />

            <span className="text-secondary-light text-sm font-semibold">
              Contato
            </span>
          </div>

          <h2
            className="
              text-4xl
              lg:text-6xl
              font-bold
              text-white
            "
          >
            Fale com o
            <span
              className="
                block
                mt-2
                bg-gradient-to-r
                from-secondary
                to-secondary-light
                bg-clip-text
                text-transparent
              "
            >
              Observatório
            </span>
          </h2>

          <p
            className="
              mt-5
              text-white/70
              text-lg
              max-w-3xl
              mx-auto
            "
          >
            Entre em contato para conhecer estudos, indicadores e soluções de
            inteligência para a indústria paraibana.
          </p>
        </div>

        {/* Card principal */}
        <div
          className={`
            max-w-5xl
            mx-auto
            grid
            lg:grid-cols-2
            gap-10
            items-center

            bg-white/10
            backdrop-blur-md

            border
            border-white/10

            rounded-[32px]

            p-8
            md:p-12

            shadow-2xl

            transition-all
            duration-1000

            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }
          `}
        >
          {/* QR */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <div
              className="
                relative
                group
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-secondary/40
                  blur-3xl
                  rounded-full
                  group-hover:bg-secondary/60
                  transition
                "
              />

              <div
                className="
                  relative
                  bg-white
                  p-2
                  rounded-3xl
                  shadow-2xl
                  hover:scale-105
                  transition
                  duration-500
                "
              >
                <img
                  src={qrCode}
                  alt="QR Code Observatório"
                  className="
                    w-56
                    md:w-64
                  "
                />
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                mt-6
                text-white/70
              "
            >
              <QrCode size={18} />

              <span>Aponte a câmera e acesse</span>
            </div>
          </div>

          {/* Informações */}
          <div
            className="
              space-y-6
            "
          >
            <Info icon={<Phone />} title="Telefone" text="(83) 2101-5480" />

            <Info
              icon={<Mail />}
              title="E-mail"
              text="observatorio@fiepb.org.br"
            />

            <Info
              icon={<Globe />}
              title="Site"
              text="www.observatoriopb.com.br"
            />

            <Info
              icon={<MapPin />}
              title="Endereço"
              text="Fipeb - Federação das Indústrias da Paraíba"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
flex
items-center
gap-4
group
"
    >
      <div
        className="
w-14
h-14
rounded-2xl
bg-secondary
flex
items-center
justify-center
text-white
shadow-lg
shadow-secondary/30

group-hover:scale-110

transition
"
      >
        {icon}
      </div>

      <div>
        <p
          className="
text-white/50
text-sm
"
        >
          {title}
        </p>

        <p
          className="
text-white
font-semibold
"
        >
          {text}
        </p>
      </div>
    </div>
  );
}
