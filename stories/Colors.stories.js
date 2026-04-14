/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Foundation/Colors',
  tags: ['autodocs'],
};
export default meta;

function createSwatchGrid(colors) {
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
  grid.style.gap = '12px';

  colors.forEach(({ name, value, variable }) => {
    const card = document.createElement('div');
    card.style.borderRadius = '6px';
    card.style.overflow = 'hidden';
    card.style.border = '1px solid var(--border-color)';

    const swatch = document.createElement('div');
    swatch.style.height = '64px';
    swatch.style.background = value;

    const info = document.createElement('div');
    info.style.padding = '10px 12px';
    info.style.background = 'var(--bg-card)';

    const nameEl = document.createElement('div');
    nameEl.style.fontSize = '12px';
    nameEl.style.fontWeight = '700';
    nameEl.style.color = 'var(--text-primary)';
    nameEl.style.marginBottom = '2px';
    nameEl.textContent = name;

    const valueEl = document.createElement('div');
    valueEl.style.fontSize = '11px';
    valueEl.style.color = 'var(--text-muted)';
    valueEl.style.fontFamily = 'monospace';
    valueEl.textContent = variable ? `${variable} \u00B7 ${value}` : value;

    info.appendChild(nameEl);
    info.appendChild(valueEl);
    card.appendChild(swatch);
    card.appendChild(info);
    grid.appendChild(card);
  });

  return grid;
}

export const AccentColors = {
  render: () => createSwatchGrid([
    { name: 'Orange (Primary)', value: '#F96217', variable: '--accent-orange' },
    { name: 'Orange Dark', value: '#d4510f', variable: '--accent-orange-dark' },
    { name: 'Purple', value: '#7c3aed', variable: '--accent-purple' },
    { name: 'Violet', value: '#8b5cf6', variable: '--accent-violet' },
    { name: 'Pink', value: '#ec4899', variable: '--accent-pink' },
    { name: 'Gold', value: '#f59e0b', variable: '--accent-gold' },
    { name: 'Emerald', value: '#10b981', variable: '--accent-emerald' },
  ]),
};

export const BackgroundColors = {
  render: () => createSwatchGrid([
    { name: 'Dark (Body)', value: '#07070d', variable: '--bg-dark' },
    { name: 'Nav', value: '#0d0d18', variable: '--bg-nav' },
    { name: 'Card', value: '#14141f', variable: '--bg-card' },
    { name: 'Card Hover', value: '#1a1a2e', variable: '--bg-card-hover' },
    { name: 'Shop Image', value: 'linear-gradient(135deg, #160e25, #241a3d)', variable: 'pkg-image' },
    { name: 'Border', value: '#1e1e30', variable: '--border-color' },
  ]),
};

export const TextColors = {
  render: () => createSwatchGrid([
    { name: 'Primary', value: '#f1f1f7', variable: '--text-primary' },
    { name: 'Secondary', value: '#9ca3af', variable: '--text-secondary' },
    { name: 'Muted', value: '#6b7280', variable: '--text-muted' },
  ]),
};

export const SectionTitleColors = {
  render: () => createSwatchGrid([
    { name: 'Green', value: '#4ade80', variable: 'section-title--green' },
    { name: 'Purple', value: '#a78bfa', variable: 'section-title--purple' },
    { name: 'White', value: '#e5e7eb', variable: 'section-title--white' },
    { name: 'Gold', value: '#fbbf24', variable: 'section-title--gold' },
    { name: 'Red', value: '#f87171', variable: 'section-title--red' },
  ]),
};
