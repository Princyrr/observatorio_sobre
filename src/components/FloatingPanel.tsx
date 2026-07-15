interface Props {
  top: string;
  delay: string;
  duration: string;
  scale: number;
}

export default function FloatingPanel({ top, delay, duration, scale }: Props) {
  return (
    <div
      className="floating-panel"
      style={{
        top,
        animationDelay: delay,
        animationDuration: duration,
        transform: `scale(${scale})`,
      }}
    >
      {/* Fundo */}
      <div className="absolute inset-0 rounded-[32px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-slate-900/10 to-blue-600/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.18),transparent_35%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,.12),transparent_40%)]" />
      </div>

      {/* Reflexo */}
      <div className="absolute inset-0 overflow-hidden rounded-[32px]">
        <div className="absolute -left-40 top-0 h-full w-28 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl animate-panel-shine" />
      </div>

      {/* Borda */}
      <div className="absolute inset-0 rounded-[32px] border border-cyan-300/15 shadow-[inset_0_0_30px_rgba(34,211,238,.08),0_0_40px_rgba(34,211,238,.08)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Header */}
      <div className="absolute left-6 right-6 top-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />

          <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-100/80">
            OBSERVATÓRIO-PB
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#4ade80]" />

          <span className="text-[10px] tracking-[0.1em] text-emerald-300">
            ONLINE
          </span>
        </div>
      </div>

      <div className="absolute left-6 right-6 top-12 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

      {/* Conteúdo */}
      <div className="absolute left-6 top-[62px]">
        <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100/50">
          Data Flow
        </p>

        <div className="mt-2 flex items-end gap-3">
          <span className="text-5xl font-bold text-cyan-200">100</span>

          <span className="pb-2 text-lg text-cyan-300">%</span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <div className="h-2 w-20 rounded-full bg-white/10">
            <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-cyan-300 to-sky-400" />
          </div>

          <span className="text-xs text-emerald-300">+3.2%</span>
        </div>
      </div>

      {/* Cards */}
      <div className="absolute right-6 top-[62px] w-[118px] space-y-3">
        <div className="rounded-2xl border border-cyan-300/10 bg-white/[0.03] p-3 backdrop-blur">
          <p className="text-[10px] uppercase tracking-wider text-cyan-100/50"></p>

          <p className="mt-1 text-xl font-semibold text-cyan-200">DADOS</p>
        </div>
      </div>

      {/* Gráfico */}
      <div className="absolute left-6 right-6 bottom-6">
        <svg viewBox="0 70 300 10" className="w-full overflow-visible">
          <defs>
            <linearGradient id="panelLine" x1="0" x2="1">
              <stop offset="0%" stopColor="#22d3ee" />

              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>

          <polyline
            fill="none"
            stroke="url(#panelLine)"
            strokeWidth="2.5"
            points="
            0,60
            35,45
            70,48
            105,26
            140,34
            175,18
            210,28
            245,12
            300,20
          "
          />

          {[35, 105, 175, 245].map((x, i) => (
            <circle
              key={i}
              cx={x}
              cy={[45, 26, 18, 12][i]}
              r="3"
              fill="#67e8f9"
            />
          ))}
        </svg>
      </div>

      {/* Footer */}
      <div className="absolute bottom-2 left-6 right-6 flex justify-between text-[9px] uppercase tracking-[0.25em] text-cyan-200/35">
        <span>12 ms</span>

        <span>Cloud Sync</span>

        <span>v2.6</span>
      </div>

      {/* Scan */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-panel-scan" />
    </div>
  );
}
