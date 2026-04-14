/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Toggle',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', description: 'ON/OFF 상태' },
    label: { control: 'text', description: '라벨 텍스트' },
  },
};
export default meta;

export const On = {
  args: { checked: true, label: '타임뱅크' },
  render: ({ checked, label }) => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.gap = '12px';
    div.innerHTML = `
      <label class="gs-toggle">
        <input type="checkbox" ${checked ? 'checked' : ''}>
        <span class="gs-toggle-slider"></span>
      </label>
      <span style="font-size:14px;color:var(--text-primary);">${label}</span>
    `;
    return div;
  },
};

export const Off = {
  args: { checked: false, label: '자동 바이인' },
  render: ({ checked, label }) => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.gap = '12px';
    div.innerHTML = `
      <label class="gs-toggle">
        <input type="checkbox" ${checked ? 'checked' : ''}>
        <span class="gs-toggle-slider"></span>
      </label>
      <span style="font-size:14px;color:var(--text-primary);">${label}</span>
    `;
    return div;
  },
};

export const ToggleGroup = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.gap = '16px';
    div.style.maxWidth = '300px';

    const items = [
      ['타임뱅크', true],
      ['자동 바이인', false],
      ['사운드', true],
      ['진동', false],
    ];

    items.forEach(([label, checked]) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.justifyContent = 'space-between';
      row.innerHTML = `
        <span style="font-size:14px;color:var(--text-primary);">${label}</span>
        <label class="gs-toggle">
          <input type="checkbox" ${checked ? 'checked' : ''}>
          <span class="gs-toggle-slider"></span>
        </label>
      `;
      div.appendChild(row);
    });
    return div;
  },
};
