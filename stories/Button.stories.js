/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
};
export default meta;

function btn(cls, text) {
  const b = document.createElement('button');
  b.className = cls;
  b.textContent = text;
  b.style.position = 'static';
  return b;
}

export const Primary = {
  render: () => btn('login-btn', '로그인'),
};

export const Buy = {
  render: () => btn('pkg-buy-btn', '구매하기'),
};

export const Join = {
  render: () => btn('table-join-btn', '입장하기'),
};

export const TournamentRegister = {
  render: () => btn('td-register-btn', '참가 신청'),
};

export const TournamentSpectate = {
  render: () => btn('td-spectate-btn', '관전하기'),
};

export const DateRange = {
  render: () => btn('date-range-btn', '조회'),
};

export const SocialButtons = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.gap = '10px';
    div.style.maxWidth = '360px';
    div.innerHTML = `
      <button class="social-btn google-btn" style="position:static;">
        <img class="social-icon" src="images/google.svg" alt="Google">
        <span>Google 계정으로 로그인</span>
      </button>
      <button class="social-btn naver-btn" style="position:static;">
        <img class="social-icon" src="images/naver.svg" alt="Naver" style="background:rgba(255,255,255,0.2);border-radius:4px;padding:2px;">
        <span>네이버 계정으로 로그인</span>
      </button>
    `;
    return div;
  },
};

export const AllVariants = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '12px';
    div.style.flexWrap = 'wrap';
    div.style.alignItems = 'center';
    [
      ['login-btn', '로그인'],
      ['pkg-buy-btn', '구매하기'],
      ['table-join-btn', '입장하기'],
      ['td-register-btn', '참가 신청'],
      ['td-spectate-btn', '관전하기'],
      ['date-range-btn', '조회'],
      ['sp-cancel-btn', '취소'],
      ['sp-confirm-btn', '확인'],
    ].forEach(([cls, text]) => {
      div.appendChild(btn(cls, text));
    });
    return div;
  },
};
