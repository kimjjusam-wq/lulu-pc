/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
};
export default meta;

export const TableCard = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '320px';
    div.innerHTML = `
      <div class="table-card">
        <div class="table-header">
          <span class="table-name">홀덤</span>
          <span class="table-live"><span class="table-live-dot"></span> LIVE</span>
        </div>
        <div class="table-meta">
          <div class="table-meta-row"><span class="table-meta-label">블라인드</span><span class="table-meta-value">10/20</span></div>
          <div class="table-meta-row"><span class="table-meta-label">플레이어</span><span class="table-meta-value">4/9</span></div>
          <div class="table-meta-row"><span class="table-meta-label">스택</span><span class="table-meta-value">32,450</span></div>
        </div>
        <button class="table-join-btn" style="position:static;">입장하기</button>
      </div>
    `;
    return div;
  },
};

export const StatCards = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'grid';
    div.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    div.style.gap = '16px';
    div.style.maxWidth = '700px';
    [
      { value: '128', label: '참가 경기 수', img: 'images/stat_games.png' },
      { value: '52.4K', label: '총 상금', img: 'images/stat_profit.png', color: 'var(--accent-gold)' },
      { value: '23', label: '1위 횟수', img: 'images/stat_winrate.png' },
    ].forEach(s => {
      const card = document.createElement('div');
      card.className = 'stat-card';
      card.innerHTML = `
        <div class="stat-icon"><img src="${s.img}" alt="" style="width:44px;height:44px;object-fit:contain;"></div>
        <div class="stat-info"><div class="stat-value" ${s.color ? `style="color:${s.color}"` : ''}>${s.value}</div><div class="stat-label">${s.label}</div></div>
      `;
      div.appendChild(card);
    });
    return div;
  },
};

export const PackageCard = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '300px';
    div.innerHTML = `
      <div class="pkg-card pkg-tier-a">
        <div class="pkg-image" style="display:flex;align-items:center;justify-content:center;min-height:160px;">
          <img src="images/shop_a.png" alt="Package A" style="max-height:120px;object-fit:contain;">
        </div>
        <div class="pkg-body">
          <div class="pkg-name">스타터 패키지 A</div>
          <ul class="pkg-contents">
            <li><span class="pkg-icon"><img src="images/shop_avatar.png" alt="" style="width:20px;height:20px;"></span><span>아바타 A (15일)</span></li>
            <li><span class="pkg-icon"><img src="images/icon_gold.png" alt="" style="width:20px;height:20px;"></span><span>5억 골드</span></li>
          </ul>
          <div class="pkg-bottom">
            <div class="pkg-price">\u20A91,000</div>
            <button class="pkg-buy-btn" style="position:static;">구매하기</button>
          </div>
        </div>
      </div>
    `;
    return div;
  },
};

export const TournamentCard = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '600px';
    div.innerHTML = `
      <div class="tn-section">
        <div class="tn-section-title tn-section-title--green" style="position:relative;">Deep Stack 챔피언십</div>
        <div class="tn-section-cards">
          <div class="tn-card">
            <div class="tn-card-left">
              <span class="tn-badge registering">등록중</span>
              <span class="tn-starts-label">Starts In</span>
              <span class="tn-starts-value">수동 시작</span>
            </div>
            <div class="tn-card-right">
              <div class="tn-name">POKER LULU Weekly Championship</div>
              <div class="tn-meta">
                <span class="tn-meta-item">무료</span>
                <span class="tn-meta-item">3/10</span>
                <span class="tn-meta-item">500,000G</span>
              </div>
            </div>
          </div>
          <div class="tn-card">
            <div class="tn-card-left">
              <span class="tn-badge ongoing">진행중</span>
              <span class="tn-starts-label">Starts In</span>
              <span class="tn-starts-value">2025-02-24 20:00</span>
            </div>
            <div class="tn-card-right">
              <div class="tn-name">High Roller Tournament</div>
              <div class="tn-meta">
                <span class="tn-meta-item">10,000G</span>
                <span class="tn-meta-item">8/10</span>
                <span class="tn-meta-item">1,000,000G</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return div;
  },
};

export const FaqCard = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '600px';
    div.innerHTML = `
      <div class="faq-item">
        <div class="faq-question"><span>게임은 어떻게 시작하나요?</span><span class="faq-arrow">›</span></div>
      </div>
      <div class="faq-item open">
        <div class="faq-question"><span>토너먼트는 어떻게 참가하나요?</span><span class="faq-arrow">›</span></div>
        <div class="faq-answer" style="max-height:200px;padding:0 20px 16px;"><p>토너먼트 페이지에서 원하는 대회를 선택하고 참가 신청 버튼을 누르면 됩니다.</p></div>
      </div>
    `;
    return div;
  },
};

export const MyMenuItem = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '500px';
    div.innerHTML = `
      <div class="my-menu-item">
        <div class="my-menu-left">
          <div class="my-menu-icon" style="background:rgba(96,165,250,0.15);width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;">📬</div>
          <span class="my-menu-text">보관함</span>
        </div>
        <span class="my-menu-arrow">›</span>
      </div>
      <div class="my-menu-item">
        <div class="my-menu-left">
          <div class="my-menu-icon" style="background:rgba(168,85,247,0.15);width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;">🎮</div>
          <span class="my-menu-text">호스트</span>
        </div>
        <span class="my-menu-arrow">›</span>
      </div>
    `;
    return div;
  },
};

export const MailboxCards = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '600px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.gap = '8px';
    div.innerHTML = `
      <div class="mb-notif-item unread">
        <div class="mb-notif-icon" style="background:rgba(249,98,23,0.1);width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;">🏆</div>
        <div class="mb-notif-body">
          <div class="mb-notif-title">토너먼트 우승!</div>
          <div class="mb-notif-desc" style="font-size:12px;color:var(--text-muted);">주간 챔피언십에서 1위를 달성했습니다.</div>
        </div>
      </div>
      <div class="mb-msg-item">
        <div class="mb-msg-avatar" style="width:40px;height:40px;border-radius:50%;background:#1e1e30;"></div>
        <div class="mb-msg-body">
          <div class="mb-msg-name">포커마스터</div>
          <div class="mb-msg-preview" style="font-size:12px;color:var(--text-muted);">안녕하세요! 게임 한판 하실래요?</div>
        </div>
      </div>
    `;
    return div;
  },
};

export const TicketCard = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '500px';
    div.innerHTML = `
      <div class="tk-summary" style="max-width:none;">
        <div class="tk-summary-icon">🎟️</div>
        <div class="tk-summary-info">
          <div class="tk-summary-label">보유 티켓</div>
          <div class="tk-summary-value">25</div>
        </div>
      </div>
    `;
    return div;
  },
};
