/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Navigation',
  tags: ['autodocs'],
};
export default meta;

export const PCNavigation = {
  render: () => {
    const div = document.createElement('div');
    div.style.borderRadius = '12px';
    div.style.overflow = 'hidden';
    div.style.border = '1px solid var(--border-color)';
    div.innerHTML = `
      <div style="display:flex;height:64px;align-items:center;justify-content:space-between;padding:0 24px;background:rgba(7,7,13,0.85);border-bottom:1px solid var(--border-color);">
        <div style="font-size:20px;font-weight:900;color:var(--accent-orange);">LULU</div>
        <div style="display:flex;gap:6px;">
          <a class="nav-link active" style="cursor:pointer;">로비</a>
          <a class="nav-link" style="cursor:pointer;">토너먼트</a>
          <a class="nav-link" style="cursor:pointer;">상점</a>
          <a class="nav-link" style="cursor:pointer;">통계</a>
          <a class="nav-link" style="cursor:pointer;">MY 룰루</a>
        </div>
        <div class="nav-coins" style="cursor:pointer;">
          <span class="coin-icon"><img src="images/icon_gold.png" alt="gold" style="width:16px;height:16px;"></span>
          <span>1,250억</span>
        </div>
      </div>
    `;
    // Interactive tabs
    div.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        div.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
    return div;
  },
};

export const NavLinks = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '6px';
    div.innerHTML = `
      <a class="nav-link active" style="cursor:pointer;">로비</a>
      <a class="nav-link" style="cursor:pointer;">토너먼트</a>
      <a class="nav-link" style="cursor:pointer;">상점</a>
      <a class="nav-link" style="cursor:pointer;">통계</a>
      <a class="nav-link" style="cursor:pointer;">MY 룰루</a>
    `;
    div.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        div.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
    return div;
  },
};

export const CoinDisplay = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '12px';
    div.innerHTML = `
      <div class="nav-coins" style="cursor:pointer;">
        <span class="coin-icon"><img src="images/icon_gold.png" alt="gold" style="width:16px;height:16px;"></span>
        <span>1,250억</span>
      </div>
    `;
    return div;
  },
};
