// Live data dashboard panels rendered to canvas, used as 3D textures.

export type PanelKind = "line" | "bar" | "gauge" | "area";

export interface Gauge {
  label: string;
  value: number;
  target: number;
  max: number;
}

export interface PanelState {
  kind: PanelKind;
  title: string;
  color: string;
  values: number[];
  target: number;
  stats: { label: string; value: string }[];
  gauges: Gauge[];
}

export const PANEL_W = 640;
export const PANEL_H = 400;

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

export function createPanelState(
  kind: PanelKind,
  title: string,
  color: string,
): PanelState {
  const len = 44;
  const values: number[] = [];
  let v = 50;
  for (let i = 0; i < len; i++) {
    v += (Math.random() - 0.5) * 18;
    v = clamp(v, 12, 92);
    values.push(v);
  }
  const gauges: Gauge[] =
    kind === "gauge"
      ? [
          { label: "CPU", value: 64, target: 64, max: 100 },
          { label: "MEM", value: 48, target: 48, max: 100 },
          { label: "NET", value: 82, target: 82, max: 100 },
        ]
      : [];
  return {
    kind,
    title,
    color,
    values,
    target: 50,
    stats: [
      { label: "CURRENT", value: "0" },
      { label: "AVG", value: "0" },
      { label: "PEAK", value: "0" },
    ],
    gauges,
  };
}

export function updatePanelState(state: PanelState) {
  if (state.kind === "line" || state.kind === "area") {
    if (Math.random() < 0.08) state.target = 20 + Math.random() * 65;
    const last = state.values[state.values.length - 1];
    const next = clamp(
      last + (state.target - last) * 0.15 + (Math.random() - 0.5) * 8,
      8,
      95,
    );
    state.values.push(next);
    state.values.shift();
    const avg = state.values.reduce((a, b) => a + b, 0) / state.values.length;
    const peak = Math.max(...state.values);
    state.stats[0].value = next.toFixed(1);
    state.stats[1].value = avg.toFixed(1);
    state.stats[2].value = peak.toFixed(1);
  } else if (state.kind === "bar") {
    if (Math.random() < 0.1) state.target = 30 + Math.random() * 60;
    const last = state.values[state.values.length - 1];
    const next = clamp(
      last + (state.target - last) * 0.2 + (Math.random() - 0.5) * 12,
      5,
      98,
    );
    state.values.push(next);
    state.values.shift();
    const peak = Math.max(...state.values);
    state.stats[2].value = peak.toFixed(0);
  } else if (state.kind === "gauge") {
    for (const g of state.gauges) {
      if (Math.random() < 0.05) g.target = 20 + Math.random() * 75;
      g.value += (g.target - g.value) * 0.1;
    }
    const avg =
      state.gauges.reduce((a, g) => a + g.value, 0) / state.gauges.length;
    state.stats[1].value = avg.toFixed(0) + "%";
  }
}

export function drawPanel(
  ctx: CanvasRenderingContext2D,
  state: PanelState,
  blink: boolean,
) {
  const W = PANEL_W;
  const H = PANEL_H;
  const { title, color } = state;

  ctx.clearRect(0, 0, W, H);

  // Background
  roundRect(ctx, 4, 4, W - 8, H - 8, 18);
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "rgba(14,22,40,0.94)");
  bg.addColorStop(1, "rgba(8,12,22,0.94)");
  ctx.fillStyle = bg;
  ctx.fill();

  // Glowing border
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = 20;
  ctx.lineWidth = 2;
  ctx.strokeStyle = color;
  roundRect(ctx, 4, 4, W - 8, H - 8, 18);
  ctx.stroke();
  ctx.restore();

  // Inner subtle border
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255,255,255,0.06)";
  roundRect(ctx, 11, 11, W - 22, H - 22, 13);
  ctx.stroke();

  // Title
  ctx.fillStyle = color;
  ctx.font = "700 19px Inter, system-ui, sans-serif";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(title.toUpperCase(), 22, 22);

  // Live indicator
  const dotX = W - 28;
  const dotY = 30;
  ctx.beginPath();
  ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
  ctx.fillStyle = blink ? color : "rgba(255,255,255,0.15)";
  ctx.fill();
  if (blink) {
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "600 10px monospace";
  ctx.textAlign = "right";
  ctx.fillText("LIVE", dotX - 10, 24);

  // Divider
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(22, 54);
  ctx.lineTo(W - 22, 54);
  ctx.stroke();

  // Content
  ctx.save();
  ctx.translate(0, 60);
  const ch = H - 60 - 16;
  if (state.kind === "line") drawLine(ctx, W, ch, state);
  else if (state.kind === "bar") drawBars(ctx, W, ch, state);
  else if (state.kind === "gauge") drawGauges(ctx, W, ch, state);
  else if (state.kind === "area") drawArea(ctx, W, ch, state);
  ctx.restore();
}

function drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.strokeStyle = "rgba(255,255,255,0.04)";
  ctx.lineWidth = 1;
  for (let i = 1; i < 4; i++) {
    const y = (h / 4) * i;
    ctx.beginPath();
    ctx.moveTo(22, y);
    ctx.lineTo(w - 22, y);
    ctx.stroke();
  }
}

function drawLine(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  state: PanelState,
) {
  drawGrid(ctx, w, h);
  const vals = state.values;
  const n = vals.length;
  const left = 22;
  const right = w - 22;
  const top = 14;
  const bottom = h - 30;
  const px = (i: number) => left + (i / (n - 1)) * (right - left);
  const py = (v: number) => bottom - (v / 100) * (bottom - top);

  // Area fill
  const grad = ctx.createLinearGradient(0, top, 0, bottom);
  grad.addColorStop(0, state.color + "55");
  grad.addColorStop(1, state.color + "00");
  ctx.beginPath();
  ctx.moveTo(px(0), bottom);
  for (let i = 0; i < n; i++) ctx.lineTo(px(i), py(vals[i]));
  ctx.lineTo(px(n - 1), bottom);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.save();
  ctx.shadowColor = state.color;
  ctx.shadowBlur = 8;
  ctx.strokeStyle = state.color;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    if (i === 0) ctx.moveTo(px(i), py(vals[i]));
    else ctx.lineTo(px(i), py(vals[i]));
  }
  ctx.stroke();
  ctx.restore();

  // End dot
  const lastX = px(n - 1);
  const lastY = py(vals[n - 1]);
  ctx.beginPath();
  ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
  ctx.fillStyle = state.color;
  ctx.shadowColor = state.color;
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.shadowBlur = 0;

  // Big current value
  ctx.fillStyle = "#fff";
  ctx.font = "700 30px Inter, system-ui, sans-serif";
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.fillText(vals[n - 1].toFixed(1), w - 24, 4);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "600 11px monospace";
  ctx.fillText("%", w - 24, 38);

  // Axis labels
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = "500 10px monospace";
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillText("-60s", left, bottom + 16);
  ctx.textAlign = "right";
  ctx.fillText("now", right, bottom + 16);
}

function drawBars(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  state: PanelState,
) {
  const vals = state.values;
  const n = vals.length;
  const left = 22;
  const right = w - 22;
  const top = 16;
  const bottom = h - 30;
  const slot = (right - left) / n;
  const bw = slot * 0.6;

  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(left, bottom);
  ctx.lineTo(right, bottom);
  ctx.stroke();

  for (let i = 0; i < n; i++) {
    const v = vals[i];
    const x = left + i * slot + (slot - bw) / 2;
    const bh = (v / 100) * (bottom - top);
    const y = bottom - bh;
    const isHi = v > 80;
    const grad = ctx.createLinearGradient(0, y, 0, bottom);
    grad.addColorStop(0, isHi ? "#ff6b9d" : state.color);
    grad.addColorStop(1, state.color + "22");
    ctx.fillStyle = grad;
    roundRect(ctx, x, y, bw, bh, Math.min(3, bw / 2));
    ctx.fill();
  }

  // Peak label
  ctx.fillStyle = "#fff";
  ctx.font = "700 26px Inter, system-ui, sans-serif";
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.fillText(state.stats[2].value, w - 24, 4);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "600 11px monospace";
  ctx.fillText("PEAK Mb/s", w - 24, 34);
}

function drawGauge(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  g: Gauge,
  color: string,
) {
  // Track
  ctx.lineWidth = 9;
  ctx.strokeStyle = "rgba(255,255,255,0.07)";
  ctx.beginPath();
  ctx.arc(cx, cy, r, Math.PI * 0.75, Math.PI * 0.75 + Math.PI * 1.5);
  ctx.stroke();

  // Value arc
  const frac = clamp(g.value / g.max, 0, 1);
  const start = Math.PI * 0.75;
  const end = start + Math.PI * 1.5 * frac;
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = 14;
  ctx.strokeStyle = color;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(cx, cy, r, start, end);
  ctx.stroke();
  ctx.restore();

  // Value text
  ctx.fillStyle = "#fff";
  ctx.font = "700 24px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(Math.round(g.value) + "%", cx, cy - 2);

  // Label
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.font = "600 11px monospace";
  ctx.fillText(g.label, cx, cy + r + 16);
}

function drawGauges(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  state: PanelState,
) {
  const gs = state.gauges;
  const r = 46;
  const cy = h / 2 - 6;
  const positions = [w * 0.25, w * 0.5, w * 0.75];
  gs.forEach((g, i) => drawGauge(ctx, positions[i], cy, r, g, state.color));
}

function drawArea(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  state: PanelState,
) {
  // KPI big number
  ctx.fillStyle = "#fff";
  ctx.font = "700 44px Inter, system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(state.values[state.values.length - 1].toFixed(1), 24, 6);
  ctx.fillStyle = state.color;
  ctx.font = "600 13px monospace";
  ctx.fillText("kW", 24, 56);

  // Sparkline
  const vals = state.values;
  const n = vals.length;
  const left = 24;
  const right = w - 24;
  const top = h - 70;
  const bottom = h - 18;
  const px = (i: number) => left + (i / (n - 1)) * (right - left);
  const py = (v: number) => bottom - (v / 100) * (bottom - top);

  const grad = ctx.createLinearGradient(0, top, 0, bottom);
  grad.addColorStop(0, state.color + "66");
  grad.addColorStop(1, state.color + "00");
  ctx.beginPath();
  ctx.moveTo(px(0), bottom);
  for (let i = 0; i < n; i++) ctx.lineTo(px(i), py(vals[i]));
  ctx.lineTo(px(n - 1), bottom);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.save();
  ctx.shadowColor = state.color;
  ctx.shadowBlur = 8;
  ctx.strokeStyle = state.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    if (i === 0) ctx.moveTo(px(i), py(vals[i]));
    else ctx.lineTo(px(i), py(vals[i]));
  }
  ctx.stroke();
  ctx.restore();

  // Side stats
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.font = "600 10px monospace";
  ctx.textAlign = "right";
  ctx.fillText("AVG " + state.stats[1].value, w - 24, 12);
  ctx.fillText("PEAK " + state.stats[2].value, w - 24, 28);
}
