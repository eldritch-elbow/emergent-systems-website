/**
 * Faint dot field behind the Approach section's bridge chain. For each cell
 * in a grid, a scalar is summed from travelling sine waves plus a radial
 * term; where it crosses a threshold a coral dot is drawn. See design_handoff
 * README "Life cells field (Approach section background)".
 */
export class LifeCellsCanvas {
  private readonly ctx: CanvasRenderingContext2D;
  private raf: number | null = null;
  private w = 0;
  private h = 0;
  private t = 0;
  private last: number | null = null;
  private readonly cell = 19;
  private readonly threshold = 0.64;
  private readonly hiMin = 0.95;
  private readonly maxAlpha = 0.2;
  private readonly color = '240,160,127';
  private readonly reducedMotion: boolean;

  constructor(private readonly canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('2D canvas context unavailable');
    this.ctx = ctx;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.resize();

    if (this.reducedMotion) {
      this.draw(0);
    } else {
      this.raf = requestAnimationFrame(this.loop);
    }
  }

  private resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = this.canvas.clientWidth || 600;
    this.h = this.canvas.clientHeight || 300;
    this.canvas.width = this.w * dpr;
    this.canvas.height = this.h * dpr;
    this.ctx.scale(dpr, dpr);
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
    ctx.clearRect(0, 0, this.w, this.h);
    const cell = this.cell;

    for (let gy = cell / 2; gy < this.h; gy += cell) {
      for (let gx = cell / 2; gx < this.w; gx += cell) {
        const v =
          Math.sin(gx * 0.045 + t * 0.7) +
          Math.sin(gy * 0.06 - t * 0.5) +
          Math.sin((gx + gy) * 0.035 + t * 0.9) +
          Math.sin(Math.hypot(gx - this.w / 2, gy - this.h / 2) * 0.03 - t * 0.8);
        const n = (v + 4) / 8;
        if (n > this.threshold) {
          const k = (n - this.threshold) / (1 - this.threshold);
          const alpha = Math.min(this.maxAlpha, 0.12 + k * 0.6);
          ctx.beginPath();
          ctx.fillStyle = `rgba(${this.color},${alpha})`;
          ctx.arc(gx, gy, k * cell * 0.5, 0, 6.2832);
          ctx.fill();
        }
      }
    }
  }

  destroy(): void {
    if (this.raf != null) cancelAnimationFrame(this.raf);
  }
}
