interface CrysNode {
  tx: number;
  ty: number;
  ph: number;
  hx: number;
  hy: number;
  sz: number;
  hub: boolean;
}

const smoothstep = (p: number): number => {
  const clamped = Math.min(1, Math.max(0, p));
  return clamped * clamped * (3 - 2 * clamped);
};

/**
 * Signature hero motif: ~90 nodes laid out beyond the canvas edges on a
 * jittered grid, cycling crystallise (6s) -> hold (5s) -> decohere (3.5s) ->
 * gap (1.5s). See design_handoff README "Hero crystallisation animation".
 */
export class HeroCanvas {
  private readonly ctx: CanvasRenderingContext2D;
  private raf: number | null = null;
  private nodes: CrysNode[] = [];
  private edges: Array<[number, number]> = [];
  private w = 0;
  private h = 0;
  private t = 0;
  private last: number | null = null;
  private readonly reducedMotion: boolean;

  constructor(private readonly canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('2D canvas context unavailable');
    this.ctx = ctx;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.resize();
    this.buildNetwork();

    if (this.reducedMotion) {
      this.renderSettledFrame();
    } else {
      this.raf = requestAnimationFrame(this.loop);
    }
  }

  private resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = this.canvas.clientWidth || 420;
    this.h = this.canvas.clientHeight || 300;
    this.canvas.width = this.w * dpr;
    this.canvas.height = this.h * dpr;
    this.ctx.scale(dpr, dpr);
  }

  private buildNetwork(): void {
    const cols = 13;
    const rows = 7;
    const x0 = -this.w * 0.12;
    const x1 = this.w * 1.12;
    const y0 = -this.h * 0.14;
    const y1 = this.h * 1.14;
    const gw = (x1 - x0) / (cols - 1);
    const gh = (y1 - y0) / (rows - 1);

    this.nodes = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const jx = (Math.random() - 0.5) * gw * 0.7;
        const jy = (Math.random() - 0.5) * gh * 0.7;
        const sz = 1.5 + Math.pow(Math.random(), 1.8) * 5.2;
        this.nodes.push({
          tx: x0 + c * gw + jx,
          ty: y0 + r * gh + jy,
          ph: Math.random() * 6.28,
          hx: Math.random() - 0.5,
          hy: Math.random() - 0.5,
          sz,
          hub: Math.random() < 0.14,
        });
      }
    }

    const thr = Math.max(gw, gh) * 1.15;
    this.edges = [];
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const a = this.nodes[i];
        const b = this.nodes[j];
        const dx = a.tx - b.tx;
        const dy = a.ty - b.ty;
        if (dx * dx + dy * dy < thr * thr) this.edges.push([i, j]);
      }
    }
  }

  private loop = (now: number): void => {
    const t = now / 1000;
    const dt = this.last != null ? Math.min(0.05, t - this.last) : 0.016;
    this.last = t;
    this.t += dt;
    this.draw(this.t);
    this.raf = requestAnimationFrame(this.loop);
  };

  private draw(t: number): void {
    const ctx = this.ctx;
    ctx.fillStyle = '#1d2333';
    ctx.fillRect(0, 0, this.w, this.h);

    const Tc = 6;
    const Th = 5;
    const Td = 3.5;
    const period = Tc + Th + Td + 1.5;
    const ct = t % period;

    const computed = this.nodes.map((p) => {
      let raw: number;
      if (ct < Tc) {
        const front = -this.w * 0.15 + this.w * 1.42 * (ct / Tc);
        raw = (front - p.tx) / 70 + 0.5;
      } else if (ct < Tc + Th) {
        raw = 1.6;
      } else if (ct < Tc + Th + Td) {
        raw = 1.6 * (1 - (ct - (Tc + Th)) / Td);
      } else {
        raw = 0;
      }
      const es = smoothstep(raw);
      return {
        x:
          p.tx +
          (p.hx * 118 + Math.sin(t * 1.4 + p.ph) * 10) * (1 - es) +
          Math.sin(t * 0.55 + p.ph) * 6 * es,
        y:
          p.ty +
          (p.hy * 90 + Math.cos(t * 1.2 + p.ph) * 10) * (1 - es) +
          Math.cos(t * 0.48 + p.ph * 1.6) * 5 * es,
        es,
        sz: p.sz,
        hub: p.hub,
      };
    });

    ctx.strokeStyle = 'rgba(214,220,232,0.9)';
    ctx.lineWidth = 1.1;
    for (const [i, j] of this.edges) {
      const a = computed[i];
      const b = computed[j];
      const al = Math.min(a.es, b.es);
      if (al > 0.5) {
        ctx.globalAlpha = ((al - 0.5) / 0.5) * 0.42;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;

    for (const p of computed) {
      const rad = p.sz * (0.55 + p.es * 0.5);
      ctx.fillStyle = p.hub
        ? `rgba(240,160,127,${0.55 + p.es * 0.45})`
        : `rgba(255,255,255,${0.5 + p.es * 0.5})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad, 0, 6.2832);
      ctx.fill();
    }
  }

  /** For prefers-reduced-motion: paint one fully-cohered, still frame. */
  private renderSettledFrame(): void {
    const ctx = this.ctx;
    ctx.fillStyle = '#1d2333';
    ctx.fillRect(0, 0, this.w, this.h);

    ctx.strokeStyle = 'rgba(214,220,232,0.9)';
    ctx.lineWidth = 1.1;
    ctx.globalAlpha = 0.42;
    for (const [i, j] of this.edges) {
      const a = this.nodes[i];
      const b = this.nodes[j];
      ctx.beginPath();
      ctx.moveTo(a.tx, a.ty);
      ctx.lineTo(b.tx, b.ty);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    for (const p of this.nodes) {
      const rad = p.sz * 1.05;
      ctx.fillStyle = p.hub ? 'rgba(240,160,127,1)' : 'rgba(255,255,255,1)';
      ctx.beginPath();
      ctx.arc(p.tx, p.ty, rad, 0, 6.2832);
      ctx.fill();
    }
  }

  destroy(): void {
    if (this.raf != null) cancelAnimationFrame(this.raf);
  }
}
