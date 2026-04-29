/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
};
export default meta;

export const TournamentStatus = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '10px';
    div.style.alignItems = 'center';
    [['registering', '등록중'], ['ongoing', '진행중'], ['lateReg', '추가등록'], ['finished', '종료'], ['draft', '임시저장'], ['canceled', '취소']].forEach(([cls, text]) => {
      const span = document.createElement('span');
      span.className = `tn-badge ${cls}`;
      span.textContent = text;
      div.appendChild(span);
    });
    return div;
  },
};

export const SectionTitles = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.gap = '12px';
    div.style.maxWidth = '500px';
    const themes = [
      ['green', 'Deep Stack 챔피언십'],
      ['purple', '주말 메인 이벤트'],
      ['white', '터보 스프린트'],
      ['gold', 'Daily 홀덤'],
      ['red', '바운티 헌터'],
    ];
    themes.forEach(([theme, text]) => {
      const el = document.createElement('div');
      el.className = `tn-section-title tn-section-title--${theme}`;
      el.textContent = text;
      el.style.position = 'relative';
      div.appendChild(el);
    });
    return div;
  },
};

export const ShopTags = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '10px';
    div.style.alignItems = 'center';
    ['hot:HOT', 'sale:SALE', 'vip:BEST'].forEach(item => {
      const [cls, text] = item.split(':');
      const span = document.createElement('span');
      span.className = `shop-item-tag ${cls}`;
      span.textContent = text;
      div.appendChild(span);
    });
    return div;
  },
};

export const LiveIndicator = {
  render: () => {
    const span = document.createElement('span');
    span.className = 'table-live';
    span.innerHTML = '<span class="table-live-dot"></span> LIVE';
    return span;
  },
};
