/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
};
export default meta;

export const PurchaseConfirm = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.innerHTML = `
      <div class="modal-card" style="position:static;max-width:380px;width:100%;animation:none;">
        <div class="modal-header">
          <h3>구매 확인</h3>
          <button class="modal-close">\u2715</button>
        </div>
        <div style="padding:20px 24px 24px;">
          <p style="color:var(--text-secondary);font-size:14px;margin-bottom:20px;">이 상품을 구매하시겠습니까?</p>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-top:1px dashed var(--border-color);border-bottom:1px dashed var(--border-color);margin-bottom:20px;">
            <span style="color:var(--text-secondary);font-size:14px;">가격</span>
            <span style="color:var(--accent-gold);font-size:18px;font-weight:800;">5억 골드</span>
          </div>
          <div style="display:flex;gap:10px;">
            <button class="sp-cancel-btn" style="flex:1;position:static;">취소</button>
            <button class="sp-confirm-btn" style="flex:1;position:static;">구매</button>
          </div>
        </div>
      </div>
    `;
    return div;
  },
};

export const NicknameEdit = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.innerHTML = `
      <div class="modal-card" style="position:static;max-width:340px;width:100%;animation:none;">
        <div class="modal-header">
          <h3>닉네임 수정</h3>
          <button class="modal-close">\u2715</button>
        </div>
        <div style="padding:20px 24px 24px;display:flex;flex-direction:column;gap:12px;">
          <input type="text" class="login-input" placeholder="닉네임" style="margin-bottom:0;">
          <button class="modal-apply-btn" style="width:100%;margin:0;position:static;">저장</button>
        </div>
      </div>
    `;
    return div;
  },
};

export const TournamentRegister = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.innerHTML = `
      <div class="modal-card" style="position:static;max-width:380px;width:100%;animation:none;">
        <div class="modal-header">
          <h3>토너먼트 등록</h3>
          <button class="modal-close">\u2715</button>
        </div>
        <div style="padding:20px 24px 24px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
            <span class="tn-badge registering">등록중</span>
            <span style="color:var(--text-secondary);font-size:13px;">POKER LULU Weekly Championship</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">
            <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:var(--text-muted);">시작 시간</span><span style="color:var(--text-primary);">호스트 수동시작</span></div>
            <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:var(--text-muted);">바이인</span><span style="color:var(--text-primary);">무료</span></div>
          </div>
          <div style="display:flex;gap:10px;">
            <button class="sp-cancel-btn" style="flex:1;position:static;">취소</button>
            <button class="sp-confirm-btn" style="flex:1;position:static;">등록</button>
          </div>
        </div>
      </div>
    `;
    return div;
  },
};
