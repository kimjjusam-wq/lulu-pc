/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Foundation/Typography',
  tags: ['autodocs'],
};
export default meta;

export const Scale = {
  render: () => {
    const container = document.createElement('div');

    const rows = [
      { size: '56px', weight: 900, text: 'Display Title', desc: 'Banner' },
      { size: '28px', weight: 800, text: 'Page Heading', desc: 'Hero' },
      { size: '22px', weight: 800, text: 'Section Title', desc: 'Section' },
      { size: '18px', weight: 700, text: 'Card Title', desc: 'Modal Header' },
      { size: '16px', weight: 600, text: 'Subtitle', desc: 'Chart Title' },
      { size: '14px', weight: 400, text: '기본 본문 텍스트입니다.', desc: 'Body' },
      { size: '13px', weight: 600, text: 'Tab Label / Small', desc: 'Tab' },
      { size: '12px', weight: 600, text: 'LABEL / CAPTION', desc: 'Label', uppercase: true },
      { size: '11px', weight: 700, text: 'Tiny / Badge Text', desc: 'Badge' },
      { size: '10px', weight: 800, text: 'MICRO TAG', desc: 'Tag' },
    ];

    rows.forEach(row => {
      const div = document.createElement('div');
      div.style.display = 'flex';
      div.style.alignItems = 'baseline';
      div.style.gap = '24px';
      div.style.padding = '14px 0';
      div.style.borderBottom = '1px solid var(--border-color)';

      const meta = document.createElement('div');
      meta.style.minWidth = '130px';
      meta.style.fontSize = '11px';
      meta.style.fontFamily = 'monospace';
      meta.style.color = 'var(--text-muted)';
      meta.textContent = `${row.size} / ${row.weight}`;

      const sample = document.createElement('div');
      sample.style.fontSize = row.size;
      sample.style.fontWeight = row.weight;
      sample.style.color = 'var(--text-primary)';
      sample.textContent = row.text;
      if (row.uppercase) {
        sample.style.textTransform = 'uppercase';
        sample.style.letterSpacing = '0.5px';
        sample.style.color = 'var(--text-muted)';
      }

      const desc = document.createElement('div');
      desc.style.fontSize = '11px';
      desc.style.color = 'var(--text-muted)';
      desc.style.marginLeft = 'auto';
      desc.textContent = row.desc;

      div.appendChild(meta);
      div.appendChild(sample);
      div.appendChild(desc);
      container.appendChild(div);
    });

    return container;
  },
};
