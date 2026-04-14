/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
};
export default meta;

export const LoginForm = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '360px';
    div.innerHTML = `
      <div class="login-form" style="margin-bottom:0;">
        <input type="text" class="login-input" placeholder="포커룰루 아이디">
        <input type="password" class="login-input" placeholder="비밀번호">
        <button class="login-btn" style="position:static;">로그인</button>
      </div>
    `;
    return div;
  },
};

export const SearchInput = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '500px';
    div.style.display = 'flex';
    div.style.gap = '8px';
    div.innerHTML = `
      <input type="text" class="login-input" placeholder="질문을 검색하세요." style="flex:1;">
      <button class="signup-inline-btn" style="padding:14px 24px;position:static;">검색</button>
    `;
    return div;
  },
};

export const DateRangeBox = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '300px';
    div.innerHTML = `
      <div class="date-range-box" style="position:static;">
        <span style="color:var(--text-primary);font-size:14px;font-weight:500;">2025.01.01 ~ 2025.02.28</span>
      </div>
    `;
    return div;
  },
};
