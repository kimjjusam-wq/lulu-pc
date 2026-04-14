/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
};
export default meta;

function addTabClick(container, cls) {
  container.querySelectorAll(`.${cls}`).forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll(`.${cls}`).forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

export const ShopTabs = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '500px';
    div.innerHTML = `
      <div class="shop-tabs" style="position:static;">
        <button class="shop-tab active">추천상품</button>
        <button class="shop-tab">보석</button>
        <button class="shop-tab">아바타</button>
        <button class="shop-tab">아이템</button>
      </div>
    `;
    addTabClick(div, 'shop-tab');
    return div;
  },
};

export const TournamentTabs = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '500px';
    div.innerHTML = `
      <div class="tn-tabs" style="position:static;">
        <button class="tn-tab active">전체</button>
        <span class="tn-tab-divider"></span>
        <button class="tn-tab">이벤트A</button>
        <button class="tn-tab">이벤트B</button>
        <button class="tn-tab">이벤트C</button>
      </div>
    `;
    addTabClick(div, 'tn-tab');
    return div;
  },
};

export const TournamentDetailTabs = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '500px';
    div.innerHTML = `
      <div class="td-tabs" style="position:static;margin:0;">
        <button class="td-tab active">상세 정보</button>
        <button class="td-tab">플레이어</button>
        <button class="td-tab">상금</button>
        <button class="td-tab">블라인드</button>
      </div>
    `;
    addTabClick(div, 'td-tab');
    return div;
  },
};

export const FaqTabs = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '500px';
    div.innerHTML = `
      <div class="faq-tabs" style="position:static;">
        <button class="faq-tab active">전체</button>
        <button class="faq-tab">일반</button>
        <button class="faq-tab">호스팅</button>
        <button class="faq-tab">기타</button>
      </div>
    `;
    addTabClick(div, 'faq-tab');
    return div;
  },
};

export const SegmentButtons = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '8px';
    div.innerHTML = `
      <button class="gs-segment-btn active">일반</button>
      <button class="gs-segment-btn">프로</button>
      <button class="gs-segment-btn">VIP</button>
    `;
    div.querySelectorAll('.gs-segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        div.querySelectorAll('.gs-segment-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
    return div;
  },
};
