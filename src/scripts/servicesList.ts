/**
 * Hovering or clicking a service row selects it, updating the sticky
 * callout to that service's code + outcome. Default selection is row 0.
 */
export function initServicesList(root: HTMLElement): void {
  const rows = Array.from(root.querySelectorAll<HTMLElement>('.svc-row'));
  const codeEl = root.querySelector<HTMLElement>('.callout-code');
  const outcomeEl = root.querySelector<HTMLElement>('.callout-outcome');
  if (rows.length === 0 || !codeEl || !outcomeEl) return;

  const select = (row: HTMLElement) => {
    rows.forEach((r) => r.classList.toggle('is-selected', r === row));
    codeEl.textContent = row.dataset.code ?? '';
    outcomeEl.textContent = row.dataset.outcome ?? '';
  };

  rows.forEach((row) => {
    row.addEventListener('mouseenter', () => select(row));
    row.addEventListener('click', () => select(row));
  });
}
