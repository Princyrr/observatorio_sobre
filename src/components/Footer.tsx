export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-white">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 py-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Linha decorativa */}
          <div className="w-20 h-1 rounded-full bg-secondary mb-6" />

          <p className="max-w-3xl text-lg font-medium leading-relaxed text-white/90 transition-all duration-500 hover:text-white hover:tracking-wide">
            Observatório da Indústria da FIEPB:
            <span className="font-bold text-secondary">
              {" "}
              inteligência de dados
            </span>{" "}
            a serviço de decisões estratégicas.
          </p>

          <div className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>
    </footer>
  );
}
