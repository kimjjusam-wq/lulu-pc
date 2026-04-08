// === Tab Slider Animation ===
function moveSlider(container, activeEl, prevActiveEl) {
  if (!container || !activeEl) return;
  var slider = container.querySelector('.tab-slider');
  var isNew = !slider;
  if (isNew) {
    slider = document.createElement('div');
    slider.className = 'tab-slider';
    container.appendChild(slider);
    container.classList.add('has-slider');
    var startEl = prevActiveEl || activeEl;
    slider.style.transition = 'none';
    slider.style.width = startEl.offsetWidth + 'px';
    slider.style.height = startEl.offsetHeight + 'px';
    slider.style.left = startEl.offsetLeft + 'px';
    slider.style.top = startEl.offsetTop + 'px';
    slider.offsetHeight;
    slider.style.transition = '';
  }
  slider.style.width = activeEl.offsetWidth + 'px';
  slider.style.height = activeEl.offsetHeight + 'px';
  slider.style.left = activeEl.offsetLeft + 'px';
  slider.style.top = activeEl.offsetTop + 'px';
}

// === i18n / 다국어 지원 ===
const i18n = {
  ko: {
    // 네비게이션
    nav_lobby: '로비',
    nav_tournament: '토너먼트',
    nav_custom_game: '사용자게임',
    nav_analytics: '통계',
    nav_shop: '상점',
    nav_my: 'MY 룰루',
    nav_login: '로그인',
    nav_gold: '1,250억',

    // 배너 서브타이틀
    banner1_sub: '친구들과 함께하는 짜릿한 올나잇 포커',
    banner2_sub: '매주 열리는 토너먼트에서 최고의 실력을 증명하세요',
    banner3_sub: '지금 가입하면 무료 칩 10,000개 즉시 지급!',
    banner4_sub: '친구를 초대하고 프라이빗 룸에서 자유롭게 즐기세요',
    banner5_sub: '발렌타인 시즌 한정 보상과 특별 테이블 오픈!',
    banner6_sub: '다이아몬드 멤버십으로 독점 혜택을 누리세요',

    // 로비 섹션
    lobby_game_modes: '게임 모드',
    lobby_view_all: '전체보기 →',
    lobby_live_tables: '라이브 테이블',
    lobby_more: '재입장 →',
    lobby_my_stats: '내 통계 요약',
    lobby_detail: '자세히 →',

    // 게임 모드
    game_tournament: '토너먼트',
    game_tournament_desc: '실력을 겨루는 정식 토너먼트. 순위에 따른 보상을 획득하세요.',
    game_tournament_players: '1,247명 참가 중',
    // 토너먼트 페이지
    tk_title: '티켓',
    tk_desc: '보유 중인 티켓을 확인하세요',
    tk_summary_label: '보유 티켓',
    tk_expire: '만료일',
    tk_days_left: '일 남음',
    tnh_title: '히스토리',
    tnh_desc: '종료된 토너먼트 기록을 확인하세요',
    tn_title: '토너먼트',
    tn_desc: '다양한 토너먼트에 참가하고 보상을 획득하세요',
    tn_tab_all: '전체',
    tn_tab_my: '내 토너먼트',
    tn_tab_history: '히스토리',
    tn_status_registering: '등록중',
    tn_status_ongoing: '진행중',
    tn_status_finished: '종료',
    tn_starts_in: 'Starts In',
    tn_manual_start: '수동 시작',
    tn_fee_free: '무료',
    tn_empty: '등록된 토너먼트가 없습니다',
    tn_history_empty: '완료된 토너먼트가 없습니다',
    td_tab_info: '자세히',
    td_tab_players: '플레이어',
    td_tab_blinds: '블라인드',
    td_tab_payout: '지급',
    td_blinds: '블라인드',
    td_next: '다음',
    td_players_info: '플레이어',
    td_unique_reentry: '유니크 | 리엔트리',
    td_start_time: '시작 시간',
    td_start_chips: '시작 칩',
    td_late_reg: '추가 등록',
    td_buyin: '바이인',
    td_table_type: '테이블 종류',
    td_rebuy: '리바이인',
    td_timebank: '타임 뱅크',
    td_extra_time: '추가 시간',
    td_action_time: '액션 타임',
    td_cancel_reg: '등록 취소',
    td_blind_interval: '블라인드 간격',
    td_allowed: '허용',
    td_not_allowed: '불가',
    td_players_label: '참가자',
    td_no_players: '아직 참가자가 없습니다',
    td_sec: '초',
    td_hands: '핸드 수',
    td_late_reg_suffix: '레벨 이전',
    td_table_size_suffix: '인',
    td_register: '등록',
    td_spectate: '관전하기',
    td_spectate_msg: '관전 모드 준비 중입니다',
    td_full: '정원이 가득 찼습니다',
    td_reg_title: '등록하기',
    tdr_payment_option: '결제 옵션',
    tdr_balance: '밸런스',
    tdr_registered: '등록이 완료되었습니다',
    td_sit_down: '착석하기',
    td_game_start: '게임 시작',
    game_custom: '사용자 게임',
    game_custom_desc: '나만의 룰로 방을 만들고, 친구를 초대해서 즐기세요.',
    game_custom_players: '856개 방 운영 중',

    // 테이블
    table_rookie: '🃏 루키 테이블',
    table_highroller: '♠️ 하이롤러',
    table_vip: '💎 VIP 라운지',
    table_blind: '블라인드',
    table_players: '플레이어',
    table_buyin: '바이인',
    table_join: '입장하기',

    // 통계
    stat_total_games: '참가 경기 수',
    stat_winrate: '1위 횟수',
    stat_total_profit: '총 상금',
    stat_best_streak: '최대 단일 상금',
    stat_podium: '입상 횟수',
    stat_avg_rank: '평균 순위',
    stat_avg_players: '평균 참가자 수',
    stat_wins: '승리',
    stat_losses: '패배',
    stat_chips: '티켓',
    stat_level: '레벨',

    // 통계 페이지
    analytics_title: '내 통계',
    analytics_desc: '게임 기록과 성과를 한눈에 확인하세요',
    analytics_summary: '내 통계 요약',
    date_range_label: '조회 기간',
    date_range_btn: '조회',
    chart_weekly: '주간 승패 요약',
    chart_hand: '핸드 분석',
    hand_best: '최다 승리 핸드',
    hand_worst: '최다 패배 핸드',
    day_mon: '월', day_tue: '화', day_wed: '수', day_thu: '목',
    day_fri: '금', day_sat: '토', day_sun: '일',

    // 상점
    shop_title: '상점',
    shop_desc: '칩, 아이템, 스킨을 구매하세요',
    shop_tab_recommend: '⭐ 추천 상품',
    shop_tab_gems: '💎 보석',
    shop_tab_avatar: '👤 아바타',
    shop_tab_items: '🎁 아이템',
    shop_buy: '구매하기',
    shop_avatar_title: '아바타 세트',
    shop_recommend_title: '스타터 패키지',
    pkg_a_name: '스타터 패키지 A', pkg_a_item1: '아바타 A (15일)', pkg_a_item2: '5억 골드',
    pkg_b_name: '스타터 패키지 B', pkg_b_item1: '아바타 B (15일)', pkg_b_item2: '15억 골드',
    pkg_c_name: '스타터 패키지 C', pkg_c_item1: '아바타 C (15일)', pkg_c_item2: '바이인 티켓 10억', pkg_c_item3: '15억 골드',
    pkg_d_name: '스타터 패키지 D', pkg_d_item1: '아바타 D (15일)', pkg_d_item2: '바이인 티켓 20억', pkg_d_item3: '30억 골드',
    pkg_e_name: '스타터 패키지 E', pkg_e_item1: '아바타 E (15일)', pkg_e_item2: '바이인 티켓 60억', pkg_e_item3: '90억 골드',
    pkg_f_name: '스타터 패키지 F', pkg_f_item1: '아바타 F (15일)', pkg_f_item2: '바이인 티켓 100억', pkg_f_item3: '150억 골드',

    // 보석 탭
    shop_gem_title: '보석',
    gem_1_name: '보석 10개', gem_1_item1: '보석 10개',
    gem_2_name: '보석 30개', gem_2_item1: '보석 30개', gem_2_item2: '보너스 보석 +2개',
    gem_3_name: '보석 50개', gem_3_item1: '보석 50개', gem_3_item2: '보너스 보석 +5개',
    gem_4_name: '보석 100개', gem_4_item1: '보석 100개', gem_4_item2: '보너스 보석 +15개',
    gem_5_name: '보석 300개', gem_5_item1: '보석 300개', gem_5_item2: '보너스 보석 +60개', gem_5_item3: '5억 골드',
    gem_6_name: '보석 500개', gem_6_item1: '보석 500개', gem_6_item2: '보너스 보석 +125개', gem_6_item3: '10억 골드',
    gem_7_name: '보석 1,000개', gem_7_item1: '보석 1,000개', gem_7_item2: '보너스 보석 +300개', gem_7_item3: '30억 골드', gem_7_item4: '바이인 티켓 10억',
    gem_8_name: '보석 3,000개', gem_8_item1: '보석 3,000개', gem_8_item2: '보너스 보석 +1,000개', gem_8_item3: '100억 골드', gem_8_item4: '바이인 티켓 30억',
    gem_9_name: '보석 5,000개', gem_9_item1: '보석 5,000개', gem_9_item2: '보너스 보석 +2,000개', gem_9_item3: '200억 골드', gem_9_item4: '바이인 티켓 50억', gem_9_item5: 'VIP 아바타 (30일)',

    // 아바타 세트 탭
    avatar_g_name: '아바타 세트 G', avatar_g_item1: '아바타 G (15일)', avatar_g_item2: '보석 10개', avatar_g_item3: '5억 골드',
    avatar_h_name: '아바타 세트 H', avatar_h_item1: '아바타 H (15일)', avatar_h_item2: '보석 30개', avatar_h_item3: '15억 골드',
    avatar_i_name: '아바타 세트 I', avatar_i_item1: '아바타 I (15일)', avatar_i_item2: '보석 50개', avatar_i_item3: '25억 골드',
    avatar_j_name: '아바타 세트 J', avatar_j_item1: '아바타 J (15일)', avatar_j_item2: '보석 100개', avatar_j_item3: '50억 골드',
    avatar_k_name: '아바타 세트 K', avatar_k_item1: '아바타 K (15일)', avatar_k_item2: '보석 300개', avatar_k_item3: '150억 골드',
    avatar_l_name: '아바타 세트 L', avatar_l_item1: '아바타 L (15일)', avatar_l_item2: '보석 500개', avatar_l_item3: '250억 골드',
    avatar_m_name: '아바타 세트 M', avatar_m_item1: '아바타 M (15일)', avatar_m_item2: '보석 1,000개', avatar_m_item3: '500억 골드',
    avatar_n_name: '아바타 세트 N', avatar_n_item1: '아바타 N (15일)', avatar_n_item2: '보석 3,000개', avatar_n_item3: '1,500억 골드',

    // 아이템 탭
    shop_table_skins: '테이블 스킨',
    skin_classic_green: '클래식 그린',
    skin_classic_green_desc: '전통적인 포커 테이블',
    skin_royal_red: '로열 레드',
    skin_royal_red_desc: '프리미엄 레드 테이블',
    skin_cosmic_black: '코스믹 블랙',
    skin_cosmic_black_desc: '우주 컨셉 한정 스킨',
    shop_card_skins: '카드 스킨',
    skin_gold_card: '골드 카드',
    skin_gold_card_desc: '고급 골드 카드 뒷면',
    skin_neon_card: '네온 카드',
    skin_neon_card_desc: '빛나는 네온 카드 디자인',
    skin_brick_pattern: '벽돌 패턴',
    skin_brick_pattern_desc: '클래식 벽돌 패턴 카드',
    skin_diamond_card: '다이아몬드 카드',
    skin_diamond_card_desc: 'VIP 한정 다이아몬드 디자인',
    shop_emotes: '이모티콘',
    emote_pokerface: '포커페이스 팩',
    emote_pokerface_desc: '기본 이모티콘 8종',
    emote_drama: '드라마 팩',
    emote_drama_desc: '연기파 이모티콘 12종',
    emote_allin: '올인 팩',
    emote_allin_desc: '시즌3 한정 이모티콘 6종',

    // MY 페이지
    my_title: 'MY 룰루',
    my_desc: '내 프로필과 게임 정보를 관리하세요',
    my_info_sub: '가입일: 2025.01.15 · 레벨 23',
    my_profile: '회원정보 수정',
    my_history: '거래 내역',
    my_friends: '친구 관리',
    my_items: '내 아이템',
    my_settings: '설정',
    my_message: '우편함',
    my_host: '호스트',
    my_tn_history: '히스토리',
    host_title: '호스트',
    host_desc: '내가 개설한 토너먼트를 관리하세요',
    host_search_ph: '게임 제목을 검색하세요.',
    host_search_btn: '검색',
    host_empty: '개설한 토너먼트가 없습니다',
    mi_title: '내 아이템',
    mi_desc: '구매한 아이템을 확인하고 장착하세요',
    mi_tab_all: '전체',
    mi_tab_table: '테이블 스킨',
    mi_tab_card: '카드 스킨',
    mi_tab_emote: '이모티콘',
    mi_empty: '보유한 아이템이 없습니다',
    mi_purchased: '구매일',
    mi_equipped: '장착중',
    mi_equip: '장착',
    mi_unequip: '해제',
    mi_discard: '버리기',
    mi_discard_title: '아이템 버리기',
    mi_discard_confirm: '정말 이 아이템을 버리시겠습니까?',
    sp_confirm_title: '구매 확인',
    sp_price: '가격',
    sp_balance: '보유',
    sp_cancel: '취소',
    sp_confirm: '구매',
    sp_success: '구매가 완료되었습니다!',
    sp_insufficient_gold: '골드가 부족합니다',
    sp_insufficient_diamond: '다이아가 부족합니다',
    sp_already_owned: '이미 보유한 아이템입니다',
    sp_login_required: '로그인이 필요합니다',
    sp_pay_title: '결제 확인',
    sp_pay_notice: '결제 페이지로 이동합니다',
    sp_pay_btn: '결제하기',
    tx_title: '거래 내역',
    tx_desc: '골드와 다이아의 충전·소모 내역을 확인하세요',
    tx_tab_all: '전체',
    tx_tab_gold: '골드',
    tx_tab_diamond: '다이아',
    tx_empty: '거래 내역이 없습니다',
    tx_after: '잔액',
    mb_title: '우편함',
    mb_desc: '받은 우편을 확인하세요',
    mb_btn_claim: '아이템 받기',
    mb_btn_done: '받기 완료',
    mb_empty: '우편이 없습니다',
    ae_title: '회원정보 수정',
    ae_desc: '비밀번호를 변경할 수 있습니다',
    ae_id_label: '아이디',
    ae_pw_title: '비밀번호 변경',
    ae_current_pw: '현재 비밀번호',
    ae_current_pw_ph: '현재 비밀번호 입력',
    ae_new_pw: '새 비밀번호',
    ae_new_pw_ph: '새 비밀번호 입력',
    ae_confirm_pw: '새 비밀번호 확인',
    ae_confirm_pw_ph: '새 비밀번호 다시 입력',
    ae_pw_btn: '비밀번호 변경',
    ae_pw_success: '비밀번호가 변경되었습니다',
    ae_pw_mismatch: '새 비밀번호가 일치하지 않습니다',
    ae_pw_wrong: '현재 비밀번호가 올바르지 않습니다',
    ae_pw_empty: '모든 항목을 입력해주세요',
    avatar_modal_title: '아바타 선택',
    avatar_modal_apply: '아바타 착용',
    nickname_modal_title: '닉네임 수정',
    nickname_modal_save: '저장',
    nickname_modal_error_empty: '닉네임을 입력하세요',
    nickname_modal_error_short: '닉네임은 2자 이상이어야 합니다',
    nickname_modal_error_duplicate: '이미 사용 중인 닉네임입니다',
    avatar_modal_quit_text: '게임 탈퇴를 하려면?',
    avatar_modal_quit_btn: '계정삭제',
    avatar_modal_limit_text: '1일 한도를 바꾸고 싶다면?',
    avatar_modal_limit_btn: '한도설정',

    // 로그인
    login_back: '돌아가기',
    login_title: '로그인',
    login_subtitle: '무료 플레이, 쉬운 시작 간편하게 친구들과 한판',
    login_id_placeholder: '포커룰루 아이디',
    login_pw_placeholder: '비밀번호',
    login_btn: '로그인',
    login_or: '또는',
    login_google: '구글 로그인',
    login_naver: '네이버 로그인',
    login_find_id: '아이디 찾기',
    login_reset_pw: '비밀번호 재설정',
    login_signup: '회원가입',

    // 회원가입
    signup_title: '회원가입',
    signup_subtitle: '포커룰루에 오신 것을 환영합니다',
    signup_email_placeholder: '이메일',
    signup_code_placeholder: '인증코드',
    signup_send_code: '코드보내기',
    signup_verify_code: '코드확인',
    signup_pw_placeholder: '비밀번호',
    signup_pw_confirm_placeholder: '비밀번호 확인',
    signup_btn: '다음',
    signup_has_account: '이미 계정이 있으신가요?',
    signup_go_login: '로그인',
    signup_subtitle_step2: '계정 정보를 입력하세요',
    signup_terms_all: '전체 동의',
    signup_terms_service: '[필수] 서비스 이용약관 동의',
    signup_terms_privacy: '[필수] 개인정보 수집 및 이용 동의',
    signup_terms_marketing: '[선택] 마케팅 정보 수신 동의',
    signup_next: '다음',
    signup_prev: '이전',
    signup_step1: '약관동의',
    signup_step2: '정보입력',
    signup_step3: '닉네임입력',
    signup_step4: '완료',
    signup_subtitle_step3: '닉네임과 아바타를 선택하세요',
    signup_nickname_placeholder: '닉네임',
    signup_avatar_label: '아바타 선택',
    signup_subtitle_step4: '가입이 완료되었습니다',
    signup_complete_title: '회원가입 성공!',
    signup_complete_desc: '포커룰루에 오신 것을 환영합니다',
    signup_go_mylulu: '마이 룰루',
    signup_go_home: '홈으로',

    // 게임 셋업
    gs_back: '돌아가기',
    gs_title: '사용자 게임',
    gs_desc: '나만의 룰로 방을 만들고, 친구를 초대하세요',
    gs_tab_general: '일반설정',
    gs_tab_blinds: '블라인드',
    gs_tab_prize: '상금',
    gs_tab_advanced: '고급설정',
    gs_label_title: '타이틀',
    gs_label_start_stack: '시작 스택',
    gs_label_rebuy: '리바이인',
    gs_label_table_type: '테이블 종류',
    gs_label_start_time: '시작 시간 (자동 시작)',
    gs_label_start_time_short: '시작 시간',
    gs_label_action_time: '액션 타임 (s)',
    dtp_today: '오늘',
    dtp_cancel: '취소',
    dtp_select: '선택',
    gs_label_level: 'Level',
    gs_label_blind_structure: '블라인드 스트럭처',
    gs_blind_hyper: '하이퍼',
    gs_blind_turbo: '터보',
    gs_blind_normal: '보통',
    gs_blind_slow: '느리게',
    gs_th_ante: 'ALL Ante',
    gs_th_time: 'Time',
    gs_blind_delete: '삭제',
    gs_blind_add: '블라인드',
    gs_blind_break: '브레이크',
    gs_label_total_buyin: '총 바이인',
    gs_label_prize_structure: '상금 구조',
    gs_prize_payout: '지급',
    gs_prize_custom: '커스텀',
    gs_label_itm: '인더머니',
    gs_label_guarantee: '개런티 상금',
    gs_label_timebank: '타임 뱅크',
    gs_label_initial_timebank: '초기 타임 뱅크',
    gs_label_extra_time: '추가 시간',
    gs_create_game: '게임 생성',

    // 푸터
    footer_company: '회사정보',
    footer_terms: '이용약관',
    footer_privacy: '개인정보처리방침',
    footer_youth: '청소년보호정책',
    footer_rating: '심의정보',
    footer_support: '자주묻는질문',
    footer_contact: '문의하기',
    contact_desc: '궁금한 점이나 불편한 사항을 보내주세요.',
    contact_email: '이메일',
    contact_email_ph: '이메일을 입력하세요',
    contact_subject: '제목',
    contact_subject_ph: '제목을 입력하세요',
    contact_message: '내용',
    contact_message_ph: '내용을 입력하세요',
    contact_submit: '보내기',
    contact_success: '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.',
    contact_valid_email: '올바른 이메일 주소를 입력하세요.',
    contact_valid_subject: '제목을 입력하세요.',
    contact_valid_message: '내용을 입력하세요.',
  }
};


let currentLang = 'ko';

function changeLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  if (!dict) return;

  // data-i18n 속성이 있는 모든 요소의 텍스트를 교체
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (dict[key].includes('<br>')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // data-i18n-placeholder 속성이 있는 input 요소의 placeholder를 교체
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // HTML lang 속성 업데이트
  document.documentElement.lang = lang;

  // 페이지 타이틀 업데이트
  document.title = 'POKER LULU - 친구와 함께하는 포커';
}

// === 커스텀 달력 날짜 범위 조회 ===
var calState = { year: 0, month: 0, start: null, end: null, step: 'start' };

function formatDateDot(d) {
  if (!d) return '';
  if (typeof d === 'string') return d.replace(/-/g, '.');
  var y = d.getFullYear(), m = String(d.getMonth()+1).padStart(2,'0'), dd = String(d.getDate()).padStart(2,'0');
  return y+'.'+m+'.'+dd;
}
function toDateStr(d) {
  var y = d.getFullYear(), m = String(d.getMonth()+1).padStart(2,'0'), dd = String(d.getDate()).padStart(2,'0');
  return y+'-'+m+'-'+dd;
}
function sameDay(a,b) { return a && b && a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }

function updateDateRangeText() {
  var el = document.getElementById('dateRangeText');
  if (el && calState.start && calState.end) el.textContent = formatDateDot(calState.start) + ' ~ ' + formatDateDot(calState.end);
}

function initDateRange() {
  var today = new Date();
  var weekAgo = new Date(today);
  weekAgo.setDate(today.getDate() - 6);
  calState.start = weekAgo;
  calState.end = today;
  calState.year = today.getFullYear();
  calState.month = today.getMonth();
  updateDateRangeText();
  document.addEventListener('click', function(e) {
    var popup = document.getElementById('calPopup');
    var fields = document.querySelector('.date-range-fields');
    if (popup && popup.classList.contains('open') && fields && !fields.contains(e.target)) {
      popup.classList.remove('open');
    }
  });
}

function toggleCalendar(e) {
  var popup = document.getElementById('calPopup');
  if (!popup) return;
  if (popup.contains(e.target)) return;
  calState.step = 'start';
  if (calState.start) { calState.year = calState.start.getFullYear(); calState.month = calState.start.getMonth(); }
  popup.classList.toggle('open');
  if (popup.classList.contains('open')) renderCalendar();
}

function calNav(dir) {
  calState.month += dir;
  if (calState.month < 0) { calState.month = 11; calState.year--; }
  if (calState.month > 11) { calState.month = 0; calState.year++; }
  renderCalendar();
}

function renderCalendar() {
  var monthEl = document.getElementById('calMonth');
  var daysEl = document.getElementById('calDays');
  var selEl = document.getElementById('calSelection');
  if (!monthEl || !daysEl) return;
  var y = calState.year, m = calState.month;
  monthEl.textContent = y + '년 ' + (m+1) + '월';
  var firstDay = new Date(y, m, 1).getDay();
  var lastDate = new Date(y, m+1, 0).getDate();
  var prevLast = new Date(y, m, 0).getDate();
  var today = new Date();
  var html = '';
  // previous month days
  for (var i = firstDay - 1; i >= 0; i--) {
    html += '<div class="cal-day other">' + (prevLast - i) + '</div>';
  }
  // current month days
  for (var d = 1; d <= lastDate; d++) {
    var date = new Date(y, m, d);
    var cls = 'cal-day';
    if (sameDay(date, today)) cls += ' today';
    if (calState.start && calState.end) {
      if (sameDay(date, calState.start) && sameDay(date, calState.end)) cls += ' start end';
      else if (sameDay(date, calState.start)) cls += ' start';
      else if (sameDay(date, calState.end)) cls += ' end';
      else if (calState.start && calState.end && date > calState.start && date < calState.end) cls += ' in-range';
    } else if (calState.start && sameDay(date, calState.start)) {
      cls += ' start end';
    }
    html += '<div class="' + cls + '" onclick="calPickDay(' + d + ',event)">' + d + '</div>';
  }
  // next month days
  var total = firstDay + lastDate;
  var remain = (7 - total % 7) % 7;
  for (var n = 1; n <= remain; n++) {
    html += '<div class="cal-day other">' + n + '</div>';
  }
  daysEl.innerHTML = html;
  // selection info
  if (selEl) {
    if (calState.step === 'start') selEl.textContent = '시작 날짜를 선택하세요';
    else if (calState.step === 'end') selEl.textContent = '종료 날짜를 선택하세요';
    else if (calState.start && calState.end) selEl.textContent = formatDateDot(calState.start) + ' ~ ' + formatDateDot(calState.end);
  }
}

function calPickDay(d, e) {
  if (e) e.stopPropagation();
  var picked = new Date(calState.year, calState.month, d);
  if (calState.step === 'start') {
    calState.start = picked;
    calState.end = null;
    calState.step = 'end';
  } else {
    if (picked < calState.start) {
      calState.end = calState.start;
      calState.start = picked;
    } else {
      calState.end = picked;
    }
    calState.step = 'done';
  }
  renderCalendar();
}

function calConfirm() {
  if (!calState.start || !calState.end) return;
  updateDateRangeText();
  document.getElementById('calPopup').classList.remove('open');
}

function searchDateRange() {
  if (!calState.start || !calState.end) return;
  console.log('조회 기간:', toDateStr(calState.start), '~', toDateStr(calState.end));
}

// === 페이지 전환 ===
function switchPage(p) {
  if ((p === 'my' || p === 'analytics') && !getSession()) { p = 'login'; }
  if (p === 'login') { showLogin(); }
  document.querySelectorAll('.page-container').forEach(e => e.classList.remove('active'));
  document.getElementById('page-' + p).classList.add('active');
  const navLinks = document.querySelector('.nav-links');
  const prevNav = navLinks && navLinks.querySelector('.nav-link.active');
  document.querySelectorAll('.nav-link').forEach(e => e.classList.remove('active'));
  const navLink = document.querySelector('.nav-link[data-page="' + p + '"]');
  if (navLink) { navLink.classList.add('active'); moveSlider(navLinks, navLink, prevNav); }
  // 모바일: 탭 유무에 따라 nav 보더 토글
  var pageEl = document.getElementById('page-' + p);
  var hasTabs = pageEl && pageEl.querySelector('.shop-tabs,.tn-tabs,.td-tabs,.gs-tabs,.tx-tabs,.mi-tabs,.faq-tabs,.mb-tabs');
  document.body.classList.toggle('has-page-tabs', !!hasTabs);
  // 모바일 탭바 active 동기화
  mSyncTabbar(p);
  // 모바일 nav 로고/타이틀 전환
  mSyncNavTitle(p);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (p === 'game-setup') { gsInitDefaults(); }
  if (p === 'tournament') { tnRenderList(); switchTournamentTab('all'); }
  if (p === 'tn-history') { tnRenderHistory(); }
  if (p === 'ticket') { tkRenderList(); }
  if (p === 'account-edit') { aeInit(); }
  if (p === 'mailbox') { mbRenderList(); }
  if (p === 'host') { hostRenderList(); }
  if (p === 'transaction') { txRenderList(); }
  if (p === 'myitems') { miRenderList(); }
  if (p === 'tn-detail') { tdRenderDetail(); }
  if (p === 'my') { updateMyMailBadge(); }
}

function updateMyMailBadge() {
  var badge = document.getElementById('myMailBadge');
  if (!badge || typeof demoMails === 'undefined') return;
  var count = demoMails.filter(function(m) { return !m.read; }).length;
  badge.textContent = count > 0 ? count : '';
  badge.style.display = count > 0 ? '' : 'none';
}

// === 모바일 하단 탭바 ===
function mTabSwitch(el, page) {
  document.querySelectorAll('.m-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  switchPage(page);
}

function mSyncTabbar(page) {
  var tabMap = { lobby:'lobby', shop:'shop', analytics:'ranking', my:'my' };
  var tabName = null;
  for (var key in tabMap) {
    if (key === page) { tabName = tabMap[key]; break; }
  }
  if (!tabName) return; // 서브 페이지면 탭바 변경 안함
  document.querySelectorAll('.m-tab').forEach(function(t) {
    t.classList.toggle('active', t.getAttribute('data-tab') === tabName);
  });
}

// 모바일 nav 로고/타이틀 전환
function mSyncNavTitle(page) {
  var logo = document.getElementById('mNavLogo');
  var title = document.getElementById('mNavTitle');
  if (!logo || !title) return;
  var mainTabs = ['lobby', 'shop', 'analytics', 'my', 'login'];
  var titles = {
    shop: '상점', my: 'MY 룰루', analytics: '통계',
    mailbox: '우편함', chat: '채팅', myitems: '내 아이템',
    transaction: '거래 내역', host: '호스트',
    ticket: '티켓', tournament: '토너먼트',
    'tn-history': '히스토리', 'tn-detail': '토너먼트',
    'game-setup': '사용자 게임', login: '로그인',
    'account-edit': '회원정보 수정',
    terms: '이용약관', privacy: '개인정보처리방침',
    youth: '청소년 보호정책', rating: '게임등급분류',
    company: '회사소개', faq: 'FAQ', contact: '문의하기'
  };
  var parentMap = {
    mailbox: 'my', chat: 'mailbox', myitems: 'my', transaction: 'my',
    host: 'my', ticket: 'my', 'account-edit': 'my',
    tournament: 'lobby', 'tn-history': 'my',
    'tn-detail': 'tournament', 'game-setup': 'lobby',
    terms: 'lobby', privacy: 'lobby', youth: 'lobby',
    rating: 'lobby', company: 'lobby', faq: 'lobby', contact: 'lobby'
  };
  if (titles[page]) {
    logo.style.display = 'none';
    title.style.display = '';
    var isSub = mainTabs.indexOf(page) === -1;
    if (isSub) {
      var parent = parentMap[page] || 'lobby';
      title.innerHTML = '<svg class="m-nav-back" onclick="switchPage(\'' + parent + '\')" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' + titles[page];
    } else {
      title.textContent = titles[page];
    }
  } else {
    logo.style.display = '';
    title.style.display = 'none';
  }
  // 법적고지 페이지에서 골드/다이아 숨김
  var legalPages = ['terms','privacy','youth','rating','company','faq','contact'];
  var isLegal = legalPages.indexOf(page) !== -1;
  var mGoldWrap = document.getElementById('mNavGoldWrap');
  var mDiaWrap = document.getElementById('mNavDiamondWrap');
  if (mGoldWrap) mGoldWrap.style.display = isLegal ? 'none' : '';
  if (mDiaWrap) mDiaWrap.style.display = isLegal ? 'none' : '';
  // 로그인 페이지이거나 로그인 상태면 로그인 버튼 숨김
  var loginBtn = document.getElementById('mNavLoginBtn');
  if (loginBtn) loginBtn.style.display = (page === 'login' || getSession()) ? 'none' : '';
}

// 모바일 네비 골드/다이아 동기화
function mSyncNavCoins() {
  var goldEl = document.getElementById('navGold');
  var diaEl = document.getElementById('navDiamond');
  var mGold = document.getElementById('mNavGold');
  var mDia = document.getElementById('mNavDiamond');
  if (goldEl && mGold) mGold.textContent = goldEl.textContent;
  if (diaEl && mDia) mDia.textContent = diaEl.textContent;
}

// === 가상 로그인 토글 FAB ===
function toggleFakeLogin() {
  var fab = document.getElementById('mFabLogin');
  var session = getSession();
  var loggedIn = !!session;
  if (loggedIn) {
    clearSession();
  } else {
    saveSession({
      id: 'lulu_test',
      nickname: '룰루Player',
      email: 'test@lulu.com',
      avatar: 'avatar_o.png',
      joinDate: '2026-04-01',
      gold: '1,250억',
      diamond: '300'
    });
  }
  fab.classList.toggle('active', !loggedIn);
  fab.textContent = loggedIn ? 'OUT' : 'IN';
  updateAuthUI();
  updateMyPage();
}

// === 모바일 상태바 토글 FAB ===
function toggleMobileStatusbar() {
  var sb = document.querySelector('.m-statusbar');
  var nav = document.querySelector('.m-nav');
  var fab = document.getElementById('mFabStatus');
  var overlay = document.querySelector('.slide-menu-overlay');
  var slide = document.querySelector('.slide-menu');
  if (!sb || !fab) return;
  var hidden = sb.style.display === 'none';
  sb.style.display = hidden ? '' : 'none';
  if (nav) nav.style.top = hidden ? '' : '0';
  var slideTop = hidden ? '' : '64px';
  if (overlay) overlay.style.top = slideTop;
  if (slide) slide.style.top = slideTop;
  // 탭 메뉴 top 값도 함께 업데이트 (상태바 52px 제거 시 116→64)
  var tabsTop = hidden ? '' : '64px';
  document.querySelectorAll('.shop-tabs,.tn-tabs,.td-tabs,.gs-tabs,.tx-tabs,.mi-tabs,.faq-tabs,.mb-tabs').forEach(function(t) {
    t.style.top = tabsTop;
  });
  fab.classList.toggle('active', hidden);
  fab.textContent = hidden ? 'ON' : 'OFF';
  // 채팅 페이지 열려있으면 chat-wrap 위치 조정
  var chatWrap = document.querySelector('.chat-wrap');
  if (chatWrap && document.body.classList.contains('chat-open')) {
    chatWrap.style.top = hidden ? '52px' : '0';
    chatWrap.style.height = hidden ? 'calc(100vh - 52px)' : '100vh';
  }
}

// === 로비 아바타 캐러셀 자동 스크롤 ===
(function() {
  var carousel = document.getElementById('lobbyCarousel');
  if (!carousel) return;
  var items = carousel.children;
  var idx = 0;
  function scroll() {
    if (window.innerWidth > 768) { carousel.style.transform = ''; idx = 0; return; }
    var max = items.length - 3;
    idx++;
    if (idx > max) idx = 0;
    var gap = 16;
    var itemW = items[0].offsetWidth + gap;
    carousel.style.transform = 'translateX(-' + (idx * itemW) + 'px)';
  }
  setInterval(scroll, 3000);
})();

// === 모바일 상태바 시계 ===
(function() {
  function updateStatusTime() {
    var el = document.getElementById('mStatusTime');
    if (!el) return;
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var h12 = h % 12 || 12;
    el.textContent = h12 + ':' + (m < 10 ? '0' : '') + m;
  }
  updateStatusTime();
  setInterval(updateStatusTime, 30000);
})();

// === 인증 시스템 ===
function getUsers() {
  return JSON.parse(localStorage.getItem('lulu_users') || '[]');
}
function saveUsers(users) {
  localStorage.setItem('lulu_users', JSON.stringify(users));
}
function getSession() {
  return JSON.parse(localStorage.getItem('lulu_session') || 'null');
}
function saveSession(user) {
  localStorage.setItem('lulu_session', JSON.stringify(user));
}
function clearSession() {
  localStorage.removeItem('lulu_session');
}

function hideAllAuthSections() {
  ['loginSection','signupStep1','signupStep2','signupStep3','signupStep4','signupStep5'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}
function showLogin() {
  hideAllAuthSections();
  const loginSec = document.getElementById('loginSection');
  if (loginSec) loginSec.style.display = '';
  clearLoginErrors();
}
function showSignup() {
  hideAllAuthSections();
  document.getElementById('signupStep1').style.display = '';
  clearLoginErrors();
}
function showSignupStep1() {
  hideAllAuthSections();
  document.getElementById('signupStep1').style.display = '';
}
function showSignupStep2() {
  hideAllAuthSections();
  document.getElementById('signupStep2').style.display = '';
  // 인증 상태 초기화
  signupVerificationCode = null;
  signupEmailVerified = false;
  const codeInput = document.getElementById('signupCode');
  if (codeInput) { codeInput.disabled = true; codeInput.value = ''; }
  const verifyBtn = document.getElementById('verifyCodeBtn');
  if (verifyBtn) { verifyBtn.disabled = true; verifyBtn.classList.add('disabled'); }
  const sendBtn = document.getElementById('sendCodeBtn');
  if (sendBtn) { sendBtn.disabled = false; sendBtn.classList.remove('disabled'); }
  const emailInput = document.getElementById('signupEmail');
  if (emailInput) { emailInput.disabled = false; }
  clearLoginErrors();
}
function toggleAllTerms() {
  const allCheck = document.getElementById('termAll');
  const checks = document.querySelectorAll('.signup-terms input[type="checkbox"]');
  checks.forEach(c => c.checked = allCheck.checked);
  updateTermsBtn();
}
function updateTermsBtn() {
  const required = document.querySelectorAll('.term-required');
  const allChecked = Array.from(required).every(c => c.checked);
  const btn = document.getElementById('signupNextBtn');
  if (allChecked) { btn.classList.remove('disabled'); } else { btn.classList.add('disabled'); }
  // 전체 동의 체크박스 동기화
  const allInputs = document.querySelectorAll('.signup-terms input[type="checkbox"]:not(#termAll)');
  document.getElementById('termAll').checked = Array.from(allInputs).every(c => c.checked);
}
function clearLoginErrors() {
  const le = document.getElementById('loginError');
  const se = document.getElementById('signupError');
  if (le) { le.style.display = 'none'; le.textContent = ''; }
  if (se) { se.style.display = 'none'; se.textContent = ''; }
}
function showError(elId, msg) {
  const el = document.getElementById(elId);
  el.textContent = msg;
  el.style.display = 'block';
}

function handleLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pw = document.getElementById('loginPw').value;
  if (!id || !pw) { showError('loginError', '아이디와 비밀번호를 입력하세요'); return; }
  const users = getUsers();
  const user = users.find(u => u.id === id);
  if (!user || user.password !== pw) { showError('loginError', '아이디 또는 비밀번호가 일치하지 않습니다'); return; }
  saveSession({ id: user.id, nickname: user.nickname, email: user.email || '', joinDate: user.joinDate });
  document.getElementById('loginId').value = '';
  document.getElementById('loginPw').value = '';
  clearLoginErrors();
  updateAuthUI();
  updateMyPage();
  switchPage('my');
}

// 이메일 인증 상태
let signupVerificationCode = null;
let signupEmailVerified = false;

function handleSendCode() {
  const email = document.getElementById('signupEmail').value.trim();
  if (!email) { showError('signupError', '이메일을 입력하세요'); return; }
  // 6자리 랜덤 코드 생성 (localStorage 데모용)
  signupVerificationCode = String(Math.floor(100000 + Math.random() * 900000));
  signupEmailVerified = false;
  // 코드 입력 활성화
  const codeInput = document.getElementById('signupCode');
  codeInput.disabled = false;
  codeInput.value = '';
  codeInput.focus();
  // 코드확인 버튼은 아직 비활성
  const verifyBtn = document.getElementById('verifyCodeBtn');
  verifyBtn.disabled = true;
  verifyBtn.classList.add('disabled');
  // 보내기 버튼 텍스트 변경
  const sendBtn = document.getElementById('sendCodeBtn');
  sendBtn.textContent = '재전송';
  // 데모: 알림으로 코드 표시 (실제 서비스에서는 이메일 발송)
  alert('인증코드: ' + signupVerificationCode + '\n(데모용 - 실제로는 이메일로 전송됩니다)');
  clearLoginErrors();
}

function updateVerifyBtn() {
  const code = document.getElementById('signupCode').value.trim();
  const verifyBtn = document.getElementById('verifyCodeBtn');
  if (code.length >= 1) {
    verifyBtn.disabled = false;
    verifyBtn.classList.remove('disabled');
  } else {
    verifyBtn.disabled = true;
    verifyBtn.classList.add('disabled');
  }
}

function handleVerifyCode() {
  const code = document.getElementById('signupCode').value.trim();
  if (true) { // 테스트: 코드 무조건 통과
    signupEmailVerified = true;
    document.getElementById('signupCode').disabled = true;
    document.getElementById('verifyCodeBtn').disabled = true;
    document.getElementById('verifyCodeBtn').classList.add('disabled');
    document.getElementById('sendCodeBtn').disabled = true;
    document.getElementById('sendCodeBtn').classList.add('disabled');
    document.getElementById('signupEmail').disabled = true;
    showError('signupError', '✓ 이메일 인증 완료');
    document.getElementById('signupError').style.color = '#22c55e';
    document.getElementById('signupError').style.display = '';
  } else {
    showError('signupError', '인증코드가 일치하지 않습니다');
  }
}

// Step2 → Step3 이동 (정보입력 검증 후 닉네임 입력으로)
function handleSignup() {
  const email = document.getElementById('signupEmail').value.trim();
  const pw = document.getElementById('signupPw').value;
  const pwConfirm = document.getElementById('signupPwConfirm').value;
  if (!email || !pw) { showError('signupError', '모든 항목을 입력하세요'); return; }
  if (!signupEmailVerified) { showError('signupError', '이메일 인증을 완료하세요'); return; }
  if (pw.length < 4) { showError('signupError', '비밀번호는 4자 이상이어야 합니다'); return; }
  if (pw !== pwConfirm) { showError('signupError', '비밀번호가 일치하지 않습니다'); return; }
  const users = getUsers();
  if (users.find(u => u.email === email)) { showError('signupError', '이미 사용 중인 이메일입니다'); return; }
  // Step3(본인인증)으로 이동
  showSignupStep3();
}

// Step3: 본인인증
function showSignupStep3() {
  hideAllAuthSections();
  document.getElementById('signupStep3').style.display = '';
  clearLoginErrors();
}

function updateVerifyAgreeBtn() {
  const checks = document.querySelectorAll('.verify-check');
  const allChecked = Array.from(checks).every(c => c.checked);
  const btn = document.getElementById('verifyAgreeBtn');
  if (allChecked) { btn.classList.remove('disabled'); btn.disabled = false; }
  else { btn.classList.add('disabled'); btn.disabled = true; }
}

function handleIdentityVerify() {
  // 본인인증 시뮬레이션 (실제 서비스에서는 PASS/KCB 등 연동)
  alert('본인인증이 완료되었습니다.');
  showSignupStep4();
}

// Step4: 닉네임 & 아바타
function showSignupStep4() {
  hideAllAuthSections();
  document.getElementById('signupStep4').style.display = '';
  clearLoginErrors();
}

// Step4 아바타 선택
let signupSelectedAvatar = 'avatar_o.png';
function selectSignupAvatar(el) {
  document.querySelectorAll('.signup-avatar-item').forEach(item => item.classList.remove('selected'));
  el.classList.add('selected');
  signupSelectedAvatar = el.getAttribute('data-avatar');
}

// Step4 → 가입 완료
function handleSignupStep4() {
  const nickname = document.getElementById('signupNickname').value.trim();
  if (!nickname) { showError('signupStep4Error', '닉네임을 입력하세요'); return; }
  if (nickname.length < 2) { showError('signupStep4Error', '닉네임은 2자 이상이어야 합니다'); return; }
  const users = getUsers();
  if (users.find(u => u.nickname === nickname)) { showError('signupStep4Error', '이미 사용 중인 닉네임입니다'); return; }
  const email = document.getElementById('signupEmail').value.trim();
  const pw = document.getElementById('signupPw').value;
  const today = new Date();
  const joinDate = today.getFullYear() + '.' + String(today.getMonth()+1).padStart(2,'0') + '.' + String(today.getDate()).padStart(2,'0');
  const newUser = { id: email, password: pw, nickname, email, avatar: signupSelectedAvatar, joinDate };
  users.push(newUser);
  saveUsers(users);
  saveSession({ id: newUser.id, nickname: newUser.nickname, email: newUser.email, avatar: newUser.avatar, joinDate: newUser.joinDate });
  // 폼 초기화
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupCode').value = '';
  document.getElementById('signupPw').value = '';
  document.getElementById('signupPwConfirm').value = '';
  document.getElementById('signupNickname').value = '';
  signupVerificationCode = null;
  signupEmailVerified = false;
  signupSelectedAvatar = 'avatar_o.png';
  clearLoginErrors();
  updateAuthUI();
  updateMyPage();
  // Step5 완료 화면으로 이동
  showSignupStep5();
}

function showSignupStep5() {
  hideAllAuthSections();
  document.getElementById('signupStep5').style.display = '';
}

function handleLogout() {
  clearSession();
  updateAuthUI();
  switchPage('lobby');
}

function updateAuthUI() {
  const session = getSession();
  const loginBtn = document.getElementById('navLoginBtn');
  const goldEl = document.getElementById('navGold');
  const diamondEl = document.getElementById('navDiamond');
  var pcAvatar = document.getElementById('navAvatar');
  var pcAvatarImg = document.getElementById('navAvatarImg');
  var mLoginBtn = document.getElementById('mNavLoginBtn');
  var mGoldWrap = document.getElementById('mNavGoldWrap');
  var mDiaWrap = document.getElementById('mNavDiamondWrap');
  var tabMyIcon = document.querySelector('.m-tab-my-icon');
  var tabMyAvatar = document.getElementById('mTabMyAvatar');
  var mNavMenu = document.getElementById('mNavMenu');
  if (session) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (goldEl) goldEl.textContent = session.gold || '1,250억';
    if (diamondEl) diamondEl.textContent = session.diamond || '300';
    if (pcAvatar) pcAvatar.style.display = '';
    if (pcAvatarImg && session.avatar) pcAvatarImg.src = 'images/' + session.avatar;
    if (mLoginBtn) mLoginBtn.style.display = 'none';
    if (mNavMenu) mNavMenu.style.display = '';
    if (mGoldWrap) mGoldWrap.style.display = '';
    if (mDiaWrap) mDiaWrap.style.display = '';
    // 탭바 MY 아이콘을 아바타로 전환
    if (tabMyIcon) tabMyIcon.style.display = 'none';
    if (tabMyAvatar) { tabMyAvatar.style.display = ''; if (session.avatar) tabMyAvatar.src = 'images/' + session.avatar; }
    var lobbyLive = document.getElementById('lobbyLiveTables');
    var lobbyStats = document.getElementById('lobbyStats');
    if (lobbyLive) lobbyLive.style.display = '';
    if (lobbyStats) lobbyStats.style.display = '';
  } else {
    if (loginBtn) loginBtn.style.display = '';
    if (goldEl) goldEl.textContent = '0';
    if (diamondEl) diamondEl.textContent = '0';
    if (pcAvatar) pcAvatar.style.display = 'none';
    if (mLoginBtn) mLoginBtn.style.display = '';
    if (mNavMenu) mNavMenu.style.display = 'none';
    if (mGoldWrap) mGoldWrap.style.display = 'none';
    if (mDiaWrap) mDiaWrap.style.display = 'none';
    // 탭바 MY 아이콘을 기본 사람 아이콘으로
    if (tabMyIcon) tabMyIcon.style.display = '';
    if (tabMyAvatar) tabMyAvatar.style.display = 'none';
    var lobbyLive = document.getElementById('lobbyLiveTables');
    var lobbyStats = document.getElementById('lobbyStats');
    if (lobbyLive) lobbyLive.style.display = 'none';
    if (lobbyStats) lobbyStats.style.display = 'none';
  }
  mSyncNavCoins();
  updateAvatarReddot();
}

function updateMyPage() {
  const session = getSession();
  if (!session) return;
  const nicknameEl = document.getElementById('myNickname');
  const emailEl = document.getElementById('myEmail');
  const joinEl = document.getElementById('myJoinInfo');
  if (nicknameEl) nicknameEl.textContent = session.nickname;
  if (emailEl) emailEl.textContent = session.email || session.id;
  if (joinEl) joinEl.textContent = '가입일: ' + session.joinDate + ' · 레벨 1';
}

// 페이지 로드 시 인증 상태 확인
(function checkAuth() {
  updateAuthUI();
  const session = getSession();
  if (session) updateMyPage();
})();

// === CAROUSEL ===
const TOTAL_SLIDES = 5;
let currentSlide = 0;
let autoTimer;

const slides = document.querySelectorAll('.banner-slide');
const dotsContainer = document.getElementById('bannerDots');
const bannerTrack = document.getElementById('bannerTrack');

function isMobile() {
  return window.matchMedia('(max-width:768px)').matches;
}

for (let i = 0; i < TOTAL_SLIDES; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goSlide(i);
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.querySelectorAll('.dot');

function goSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = ((n % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  if (isMobile()) {
    bannerTrack.style.transform = 'translateX(-' + (currentSlide * 100 / TOTAL_SLIDES) + '%)';
  } else {
    bannerTrack.style.transform = '';
  }
  resetAutoPlay();
}

function nextSlide() {
  goSlide(currentSlide + 1);
}

function prevSlide() {
  goSlide(currentSlide - 1);
}

function resetAutoPlay() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => goSlide(currentSlide + 1), 5000);
}

resetAutoPlay();

// === 모바일 구매버튼 가격 표시 ===
function updateBuyBtnPrice() {
  document.querySelectorAll('.pkg-bottom').forEach(function(el) {
    var price = el.querySelector('.pkg-price');
    var btn = el.querySelector('.pkg-buy-btn');
    if (!price || !btn) return;
    if (isMobile()) {
      btn.innerHTML = price.innerHTML;
    } else {
      btn.textContent = btn.getAttribute('data-i18n') ? (i18n[currentLang] || {})[btn.getAttribute('data-i18n')] || '구매하기' : '구매하기';
    }
  });
}
updateBuyBtnPrice();

// === RESIZE: 모바일↔PC 전환 시 캐러셀 상태 리셋 ===
window.addEventListener('resize', function() {
  updateBuyBtnPrice();
  if (!isMobile()) {
    bannerTrack.style.transform = '';
    bannerTrack.classList.remove('swiping');
  } else {
    bannerTrack.style.transform = 'translateX(-' + (currentSlide * 100 / TOTAL_SLIDES) + '%)';
  }
});

// === TOUCH SWIPE (mobile only) ===
(function() {
  let startX = 0, startTime = 0, dragging = false;
  const carousel = document.getElementById('bannerCarousel');

  carousel.addEventListener('touchstart', function(e) {
    if (!isMobile()) return;
    startX = e.touches[0].clientX;
    startTime = Date.now();
    dragging = true;
    bannerTrack.classList.add('swiping');
  }, { passive: true });

  carousel.addEventListener('touchmove', function(e) {
    if (!dragging) return;
    var dx = e.touches[0].clientX - startX;
    var baseOffset = -(currentSlide * 100 / TOTAL_SLIDES);
    var dragPercent = (dx / carousel.offsetWidth) * (100 / TOTAL_SLIDES);
    bannerTrack.style.transform = 'translateX(' + (baseOffset + dragPercent) + '%)';
  }, { passive: true });

  carousel.addEventListener('touchend', function(e) {
    if (!dragging) return;
    dragging = false;
    bannerTrack.classList.remove('swiping');
    var dx = e.changedTouches[0].clientX - startX;
    var dt = Date.now() - startTime;
    var velocity = Math.abs(dx) / dt;
    if (Math.abs(dx) > 50 || velocity > 0.3) {
      if (dx < 0 && currentSlide < TOTAL_SLIDES - 1) {
        nextSlide();
      } else if (dx > 0 && currentSlide > 0) {
        prevSlide();
      } else {
        goSlide(currentSlide);
      }
    } else {
      goSlide(currentSlide);
    }
  });
})();

// === SLIDE MENU ===
function toggleSlideMenu() {
  var menu = document.getElementById('slideMenu');
  var overlay = document.getElementById('slideMenuOverlay');
  var isOpen = menu.classList.contains('open');
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
  if (!isOpen) {
    var session = getSession();
    if (session) {
      document.getElementById('slideMenuAvatarImg').src = session.avatar ? 'images/' + session.avatar : 'images/avatar_o.png';
      document.getElementById('slideMenuName').textContent = session.nickname || session.id || 'Guest';
      document.getElementById('slideMenuId').textContent = 'ID: ' + (session.id || '-');
    }
    var badge = document.getElementById('slideMenuMailBadge');
    if (typeof demoMails !== 'undefined' && demoMails) {
      var count = demoMails.filter(function(m) { return !m.read; }).length;
      badge.textContent = count > 0 ? count : '';
      badge.style.display = count > 0 ? '' : 'none';
    }
  }
}

// === SHOP TABS ===
function switchShopTab(tab) {
  var container = document.querySelector('.shop-tabs');
  var prev = container.querySelector('.shop-tab.active');
  document.querySelectorAll('.shop-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.shop-tab-content').forEach(e => e.classList.remove('active'));
  const activeTab = document.querySelector('.shop-tab[data-shop-tab="' + tab + '"]');
  activeTab.classList.add('active');
  document.getElementById('shop-' + tab).classList.add('active');
  moveSlider(container, activeTab, prev);
}

// === AVATAR MODAL ===
let selectedAvatarSrc = 'images/avatar_o.png';

function openAvatarModal() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.getElementById('avatarModal').classList.add('active');
}

function closeAvatarModal() {
  document.getElementById('avatarModal').classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function selectAvatar(el) {
  document.querySelectorAll('.modal-avatar-item').forEach(i => i.classList.remove('selected'));
  el.classList.add('selected');
  const src = 'images/' + el.dataset.avatar;
  selectedAvatarSrc = src;
  document.getElementById('modalPreviewAvatar').querySelector('img').src = src;
}

function applyAvatar() {
  document.querySelector('.my-avatar img').src = selectedAvatarSrc;
  closeAvatarModal();
}

// === NICKNAME EDIT MODAL ===
function openNicknameModal() {
  const session = getSession();
  if (!session) return;
  const input = document.getElementById('nicknameModalInput');
  input.value = session.nickname || '';
  document.getElementById('nicknameModalError').style.display = 'none';
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.getElementById('nicknameModal').classList.add('active');
  setTimeout(() => input.focus(), 100);
}

function closeNicknameModal() {
  document.getElementById('nicknameModal').classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function saveNickname() {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;
  const input = document.getElementById('nicknameModalInput');
  const errorEl = document.getElementById('nicknameModalError');
  const nickname = input.value.trim();

  if (!nickname) {
    errorEl.textContent = t.nickname_modal_error_empty || '닉네임을 입력하세요';
    errorEl.style.display = '';
    return;
  }
  if (nickname.length < 2) {
    errorEl.textContent = t.nickname_modal_error_short || '닉네임은 2자 이상이어야 합니다';
    errorEl.style.display = '';
    return;
  }

  const session = getSession();
  if (nickname === session.nickname) { closeNicknameModal(); return; }

  const users = getUsers();
  if (users.find(u => u.nickname === nickname && u.email !== session.email)) {
    errorEl.textContent = t.nickname_modal_error_duplicate || '이미 사용 중인 닉네임입니다';
    errorEl.style.display = '';
    return;
  }

  // 유저 목록 업데이트
  const idx = users.findIndex(u => u.email === session.email);
  if (idx !== -1) { users[idx].nickname = nickname; saveUsers(users); }

  // 세션 업데이트
  session.nickname = nickname;
  saveSession(session);

  // MY 페이지 반영
  document.getElementById('myNickname').textContent = nickname;
  closeNicknameModal();
}

// 오버레이 클릭으로 닫기
document.getElementById('avatarModal').addEventListener('click', function(e) {
  if (e.target === this) closeAvatarModal();
});
document.getElementById('nicknameModal').addEventListener('click', function(e) {
  if (e.target === this) closeNicknameModal();
});
document.getElementById('dtpModal').addEventListener('click', function(e) {
  if (e.target === this) dtpClose();
});

// === TOURNAMENT ===
const demoTournaments = [
  { id:1,  event:'A', name:'POKER LULU Weekly Championship', status:'registering', startType:'manual', fee:'free', players:3, maxPlayers:10, prize:'500,000G', registered:true, details:{ blindLevel:1, unique:3, reentry:0, startChips:'10000', tableSize:8, rebuyCount:0, timebankSec:10, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'불가', lateRegLevel:8, blindMin:10, breakMin:5 } },
  { id:2,  event:'A', name:'Friday Night Holdem', status:'registering', startType:'manual', fee:'free', players:1, maxPlayers:6, prize:'-', registered:false, details:{ blindLevel:1, unique:1, reentry:0, startChips:'5000', tableSize:6, rebuyCount:0, timebankSec:10, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'허용', lateRegLevel:6, blindMin:8, breakMin:4 } },
  { id:3,  event:'A', name:'POKER LULU User Custom Game', status:'registering', startType:'manual', fee:'free', players:0, maxPlayers:8, prize:'-', registered:false, details:{ blindLevel:1, unique:0, reentry:0, startChips:'10000', tableSize:8, rebuyCount:0, timebankSec:10, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'허용', lateRegLevel:8, blindMin:10, breakMin:5 } },
  { id:4,  event:'A', name:'High Roller Tournament', status:'ongoing', startType:'2025-02-24 20:00', fee:'10,000G', players:8, maxPlayers:10, prize:'1,000,000G', registered:true, details:{ blindLevel:5, unique:8, reentry:2, startChips:'50000', tableSize:9, rebuyCount:3, timebankSec:30, extraTimeSec:10, extraTimeHands:15, actionTimeSec:20, anteRate:'0.2BB', anteType:'All', cancelReg:'불가', lateRegLevel:5, blindMin:12, breakMin:5 } },
  { id:5,  event:'A', name:'Beginner Friendly Open', status:'registering', startType:'manual', fee:'free', players:5, maxPlayers:12, prize:'100,000G', registered:false, details:{ blindLevel:1, unique:5, reentry:0, startChips:'8000', tableSize:9, rebuyCount:0, timebankSec:15, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'허용', lateRegLevel:8, blindMin:10, breakMin:5 } },
  { id:6,  event:'B', name:'POKER LULU Daily Freeroll', status:'registering', startType:'2025-02-25 12:00', fee:'free', players:12, maxPlayers:50, prize:'200,000G', registered:true, details:{ blindLevel:1, unique:12, reentry:0, startChips:'10000', tableSize:9, rebuyCount:0, timebankSec:10, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'불가', lateRegLevel:10, blindMin:10, breakMin:5 } },
  { id:7,  event:'B', name:'VIP Invitational', status:'ongoing', startType:'2025-02-24 19:00', fee:'50,000G', players:6, maxPlayers:6, prize:'5,000,000G', registered:false, details:{ blindLevel:7, unique:6, reentry:3, startChips:'100000', tableSize:6, rebuyCount:5, timebankSec:60, extraTimeSec:15, extraTimeHands:20, actionTimeSec:25, anteRate:'0.5BB', anteType:'All', cancelReg:'불가', lateRegLevel:4, blindMin:15, breakMin:5 } },
  { id:8,  event:'B', name:'POKER LULU User Custom Game', status:'registering', startType:'manual', fee:'free', players:2, maxPlayers:6, prize:'-', registered:false },
  { id:9,  event:'B', name:'Sunday Special MTT', status:'finished', startType:'2025-02-23 18:00', fee:'5,000G', players:20, maxPlayers:20, prize:'2,000,000G', registered:true },
  { id:10, event:'B', name:'Turbo Knockout Bounty', status:'registering', startType:'2025-02-26 21:00', fee:'20,000G', players:0, maxPlayers:16, prize:'3,000,000G', registered:false },
  { id:11, event:'A', name:'Saturday Night Showdown', status:'finished', startType:'2025-02-22 20:00', fee:'10,000G', players:16, maxPlayers:16, prize:'1,500,000G', registered:true },
  { id:12, event:'B', name:'POKER LULU Grand Prix #3', status:'finished', startType:'2025-02-20 19:00', fee:'25,000G', players:32, maxPlayers:32, prize:'8,000,000G', registered:false },
  { id:13, event:'A', name:'Mini Freeroll Championship', status:'finished', startType:'2025-02-19 12:00', fee:'free', players:50, maxPlayers:50, prize:'500,000G', registered:true },
  { id:14, event:'B', name:'High Stakes Deep Stack', status:'finished', startType:'2025-02-18 21:00', fee:'50,000G', players:10, maxPlayers:10, prize:'5,000,000G', registered:false },
  { id:15, event:'A', name:'Weekday Express Turbo', status:'finished', startType:'2025-02-17 18:00', fee:'3,000G', players:24, maxPlayers:24, prize:'600,000G', registered:true },
  { id:16, event:'B', name:'POKER LULU Monthly Final', status:'finished', startType:'2025-02-15 19:00', fee:'100,000G', players:64, maxPlayers:64, prize:'20,000,000G', registered:false },
];

function switchTournamentTab(tab) {
  var container = document.querySelector('.tn-tabs');
  var prev = container.querySelector('.tn-tab.active');
  document.querySelectorAll('.tn-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.tn-tab-content').forEach(e => e.classList.remove('active'));
  const activeTab = document.querySelector('.tn-tab[data-tn-tab="' + tab + '"]');
  activeTab.classList.add('active');
  document.getElementById('tn-' + tab).classList.add('active');
  moveSlider(container, activeTab, prev);
}

function tnBuildCard(item) {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;
  const statusMap = {
    registering: { label: t.tn_status_registering || '등록중', cls: 'registering' },
    ongoing:     { label: t.tn_status_ongoing || '진행중', cls: 'ongoing' },
    finished:    { label: t.tn_status_finished || '종료', cls: 'finished' },
  };
  const s = statusMap[item.status] || statusMap.registering;
  const fee = item.fee === 'free' ? (t.tn_fee_free || '무료') : item.fee;
  const startVal = item.startType === 'manual' ? (t.tn_manual_start || '수동 시작') : item.startType;
  const startsLabel = t.tn_starts_in || 'Starts In';
  const activeClass = (currentTnDetailId === item.id) ? ' tn-card-active' : '';
  return `<div class="tn-card${activeClass}" onclick="openTnDetail(${item.id})">
    <div class="tn-card-left">
      <span class="tn-badge ${s.cls}">${s.label}</span>
      <span class="tn-starts-label">${startsLabel}</span>
      <span class="tn-starts-value">${startVal}</span>
    </div>
    <div class="tn-card-right">
      <div class="tn-name">${item.name}</div>
      <div class="tn-meta">
        <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>
        <span class="tn-meta-item">${fee}</span>
        <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${item.players}/${item.maxPlayers}</span>
        <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg> ${item.prize}</span>
      </div>
    </div>
  </div>`;
}

function tnRenderList() {
  const t = i18n[currentLang] || i18n.ko;
  const emptyMsg = t.tn_empty || '등록된 토너먼트가 없습니다';

  // 전체 리스트
  var allEl = document.getElementById('tnAllList');
  if (allEl) allEl.innerHTML = demoTournaments.length ? demoTournaments.map(tnBuildCard).join('') : '<div class="tn-empty">' + emptyMsg + '</div>';

  // 이벤트별 리스트
  ['A', 'B'].forEach(function(ev) {
    var items = demoTournaments.filter(function(item) { return item.event === ev; });
    var el = document.getElementById('tnEvent' + ev + 'List');
    if (el) {
      el.innerHTML = items.length ? items.map(tnBuildCard).join('') : '<div class="tn-empty">' + emptyMsg + '</div>';
    }
  });
}

function tnIsPcSplit() {
  return window.innerWidth >= 1024 && document.getElementById('tnSplitRight');
}

// === TOURNAMENT DETAIL PAGE ===

let currentTnDetailId = null;

function openTnDetail(tournamentId) {
  currentTnDetailId = tournamentId;
  if (tnIsPcSplit()) {
    // PC: 오른쪽 패널에 상세 표시
    var detailPage = document.getElementById('page-tn-detail');
    var splitDetail = document.getElementById('tnSplitDetail');
    var placeholder = document.getElementById('tnSplitPlaceholder');
    if (detailPage && splitDetail) {
      splitDetail.innerHTML = detailPage.querySelector('.content-wrapper').innerHTML;
      splitDetail.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
      tdRenderDetailInline(splitDetail);
    }
    // 리스트에서 선택 카드 하이라이트
    tnRenderList();
  } else {
    // 모바일: 기존 페이지 전환
    switchPage('tn-detail');
  }
}

function tdRenderDetail() {
  const t = i18n[currentLang] || i18n.ko;
  const item = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
  if (!item) return;

  // 헤더
  document.getElementById('tdTournamentName').textContent = item.name;
  var statusMap = {
    registering: { label: t.tn_status_registering || '등록중', cls: 'registering' },
    ongoing: { label: t.tn_status_ongoing || '진행중', cls: 'ongoing' },
    finished: { label: t.tn_status_finished || '종료', cls: 'finished' },
  };
  var s = statusMap[item.status] || statusMap.registering;
  var badge = document.getElementById('tdStatusBadge');
  badge.textContent = s.label;
  badge.className = 'tn-badge ' + s.cls;

  // 자세히 탭 - 상단 현황
  var details = item.details || {};
  var blindLv = details.blindLevel || 1;
  var bl = defaultBlindLevels[blindLv - 1] || defaultBlindLevels[0];
  var nextLv = blindLv + 1;
  var nextBl = defaultBlindLevels[blindLv] || defaultBlindLevels[defaultBlindLevels.length - 1];
  document.getElementById('tdBlinds').textContent = 'Lv.' + blindLv + ' ' + bl.sb.toLocaleString() + '/' + bl.bb.toLocaleString() + '(' + bl.ante + ')' + '[-]';
  document.getElementById('tdNext').textContent = 'Lv.' + nextLv + ' ' + nextBl.sb.toLocaleString() + '/' + nextBl.bb.toLocaleString() + '(' + nextBl.ante + ')';
  document.getElementById('tdPlayersInfo').textContent = item.players + ' / ' + item.maxPlayers;
  document.getElementById('tdUniqueReentry').textContent = (details.unique || item.players) + ' | ' + (details.reentry || 0);

  // 자세히 탭 - 하단 설정
  var feeLabel = item.fee === 'free' ? (t.tn_fee_free || '무료') : item.fee;
  document.getElementById('tdBuyin').textContent = feeLabel;
  var startVal = item.startType === 'manual' ? (t.tn_manual_start || '호스트 수동시작') : item.startType;
  document.getElementById('tdStartTime').textContent = startVal;
  var startChipsNum = parseInt(String(details.startChips || '10000').replace(/,/g, ''));
  var bbCount = Math.round(startChipsNum / bl.bb);
  document.getElementById('tdStartChips').textContent = (startChipsNum >= 10000 ? (startChipsNum / 10000) + '만' : startChipsNum.toLocaleString()) + ' (' + bbCount + 'BB)';
  document.getElementById('tdLateReg').textContent = (details.lateRegLevel || 8) + (t.td_late_reg_suffix || '레벨 이전');
  document.getElementById('tdTableType').textContent = (details.tableSize || item.maxPlayers) + (t.td_table_size_suffix || '인');
  document.getElementById('tdRebuy').textContent = String(details.rebuyCount != null ? details.rebuyCount : 0);
  document.getElementById('tdTimebank').textContent = (details.timebankSec || 10) + ' ' + (t.td_sec || '초');
  document.getElementById('tdExtraTime').textContent = (details.extraTimeSec || 5) + ' ' + (t.td_sec || '초') + ' / ' + (details.extraTimeHands || 10) + ' ' + (t.td_hands || '핸드 수');
  document.getElementById('tdActionTime').textContent = (details.actionTimeSec || 15) + ' ' + (t.td_sec || '초');
  document.getElementById('tdAnte').textContent = (details.anteRate || '0.1BB') + ' / ' + (details.anteType || 'All');
  document.getElementById('tdCancelReg').textContent = details.cancelReg || (t.td_not_allowed || '불가');
  document.getElementById('tdBlindInterval').textContent = (details.blindMin || 10) + ' / ' + (details.breakMin || 5);

  // 플레이어 탭
  var playersText = (t.td_players_label || '참가자') + ' ' + item.players + '/' + item.maxPlayers;
  document.getElementById('tdPlayersCount').textContent = playersText;
  tdRenderPlayerList(item);

  // 블라인드 탭
  tdRenderBlindTable();

  // 지급 탭
  tdRenderPayoutTable(item);

  // 하단 버튼
  tdUpdateButtons(item);

  // 첫 번째 탭으로 리셋
  switchTnDetailTab('info');
}

// PC 분할뷰용: 오른쪽 패널 안에서 상세 렌더링
function tdRenderDetailInline(container) {
  var t = i18n[currentLang] || i18n.ko;
  var item = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
  if (!item) return;

  // 모바일 전용 뒤로가기 숨기기
  var backBtn = container.querySelector('.td-mobile-only');
  if (backBtn) backBtn.style.display = 'none';

  // 헤더
  container.querySelector('#tdTournamentName').textContent = item.name;
  var statusMap = {
    registering: { label: t.tn_status_registering || '등록중', cls: 'registering' },
    ongoing: { label: t.tn_status_ongoing || '진행중', cls: 'ongoing' },
    finished: { label: t.tn_status_finished || '종료', cls: 'finished' },
  };
  var s = statusMap[item.status] || statusMap.registering;
  var badge = container.querySelector('#tdStatusBadge');
  badge.textContent = s.label;
  badge.className = 'tn-badge ' + s.cls;

  var details = item.details || {};
  var blindLv = details.blindLevel || 1;
  var bl = defaultBlindLevels[blindLv - 1] || defaultBlindLevels[0];
  var nextLv = blindLv + 1;
  var nextBl = defaultBlindLevels[blindLv] || defaultBlindLevels[defaultBlindLevels.length - 1];
  container.querySelector('#tdBlinds').textContent = 'Lv.' + blindLv + ' ' + bl.sb.toLocaleString() + '/' + bl.bb.toLocaleString() + '(' + bl.ante + ')[-]';
  container.querySelector('#tdNext').textContent = 'Lv.' + nextLv + ' ' + nextBl.sb.toLocaleString() + '/' + nextBl.bb.toLocaleString() + '(' + nextBl.ante + ')';
  container.querySelector('#tdPlayersInfo').textContent = item.players + ' / ' + item.maxPlayers;
  container.querySelector('#tdUniqueReentry').textContent = (details.unique || item.players) + ' | ' + (details.reentry || 0);

  var feeLabel = item.fee === 'free' ? (t.tn_fee_free || '무료') : item.fee;
  container.querySelector('#tdBuyin').textContent = feeLabel;
  var startVal = item.startType === 'manual' ? (t.tn_manual_start || '호스트 수동시작') : item.startType;
  container.querySelector('#tdStartTime').textContent = startVal;
  var startChipsNum = parseInt(String(details.startChips || '10000').replace(/,/g, ''));
  var bbCount = Math.round(startChipsNum / bl.bb);
  container.querySelector('#tdStartChips').textContent = (startChipsNum >= 10000 ? (startChipsNum / 10000) + '만' : startChipsNum.toLocaleString()) + ' (' + bbCount + 'BB)';
  container.querySelector('#tdLateReg').textContent = (details.lateRegLevel || 8) + (t.td_late_reg_suffix || '레벨 이전');
  container.querySelector('#tdTableType').textContent = (details.tableSize || item.maxPlayers) + (t.td_table_size_suffix || '인');
  container.querySelector('#tdRebuy').textContent = String(details.rebuyCount != null ? details.rebuyCount : 0);
  container.querySelector('#tdTimebank').textContent = (details.timebankSec || 10) + ' ' + (t.td_sec || '초');
  container.querySelector('#tdExtraTime').textContent = (details.extraTimeSec || 5) + ' ' + (t.td_sec || '초') + ' / ' + (details.extraTimeHands || 10) + ' ' + (t.td_hands || '핸드 수');
  container.querySelector('#tdActionTime').textContent = (details.actionTimeSec || 15) + ' ' + (t.td_sec || '초');
  container.querySelector('#tdAnte').textContent = (details.anteRate || '0.1BB') + ' / ' + (details.anteType || 'All');
  container.querySelector('#tdCancelReg').textContent = details.cancelReg || (t.td_not_allowed || '불가');
  container.querySelector('#tdBlindInterval').textContent = (details.blindMin || 10) + ' / ' + (details.breakMin || 5);

  // 플레이어
  var playersText = (t.td_players_label || '참가자') + ' ' + item.players + '/' + item.maxPlayers;
  container.querySelector('#tdPlayersCount').textContent = playersText;
  tdRenderPlayerListIn(container, item);
  tdRenderBlindTableIn(container);
  tdRenderPayoutTableIn(container, item);
  tdUpdateButtonsIn(container, item);

  // 컨테이너 내부 렌더링 헬퍼
  function tdRenderPlayerListIn(ct, itm) {
    var playerNames = ['Player_Kim','LuckyAce77','PokerKing','BluffMaster','RoyalFlush',
      'CardShark99','AllInHero','ChipLeader','NightOwl','HighRoller_J','ProPlayer_X','SmartBet'];
    var demoPlayers = [];
    for (var i = 0; i < itm.players; i++) {
      demoPlayers.push({ name: playerNames[i % playerNames.length], level: Math.floor(Math.random()*20)+5, chips: (Math.floor(Math.random()*50)+10)*1000 });
    }
    var list = ct.querySelector('#tdPlayerList');
    if (!list) return;
    if (demoPlayers.length === 0) { list.innerHTML = '<div class="tn-empty">' + (t.td_no_players || '아직 참가자가 없습니다') + '</div>'; return; }
    list.innerHTML = demoPlayers.map(function(p, idx) {
      return '<div class="td-player-item"><div class="td-player-rank">'+(idx+1)+'</div><div class="td-player-avatar">👤</div><div class="td-player-info"><div class="td-player-name">'+p.name+'</div><div class="td-player-level">Lv.'+p.level+'</div></div><div class="td-player-chips">'+p.chips.toLocaleString()+'</div></div>';
    }).join('');
  }
  function tdRenderBlindTableIn(ct) {
    var tbody = ct.querySelector('#tdBlindTableBody');
    if (!tbody) return;
    tbody.innerHTML = defaultBlindLevels.map(function(row) {
      return '<tr><td>'+row.lv+'</td><td>'+row.sb.toLocaleString()+' / '+row.bb.toLocaleString()+'</td><td>'+row.ante.toLocaleString()+'</td><td>'+row.time+'min</td></tr>';
    }).join('');
  }
  function tdRenderPayoutTableIn(ct, itm) {
    var totalEl = ct.querySelector('#tdPayoutTotal');
    if (totalEl) totalEl.innerHTML = '<span class="td-payout-total-label">'+(t.td_total_prize||'총 상금')+'</span><span class="td-payout-total-value">'+itm.prize+'</span>';
    var payouts = [{rank:'1st',percent:50},{rank:'2nd',percent:30},{rank:'3rd',percent:20}];
    var prizeNum = parseInt(itm.prize.replace(/[^0-9]/g,''))||0;
    var tbody = ct.querySelector('#tdPayoutTableBody');
    if (tbody) tbody.innerHTML = payouts.map(function(p) {
      return '<tr><td class="td-rank-cell">'+p.rank+'</td><td class="td-amount-cell">'+(prizeNum*p.percent/100).toLocaleString()+'G</td><td class="td-percent-cell">'+p.percent+'%</td></tr>';
    }).join('');
  }
  function tdUpdateButtonsIn(ct, itm) {
    var registerBtn = ct.querySelector('#tdRegisterBtn');
    var spectateBtn = ct.querySelector('#tdSpectateBtn');
    if (!registerBtn || !spectateBtn) return;
    if (itm.status === 'finished') { registerBtn.style.display='none'; spectateBtn.style.display=''; return; }
    registerBtn.style.display=''; spectateBtn.style.display='';
    registerBtn.textContent = itm.registered ? (t.td_sit_down||'착석하기') : (t.td_register||'등록');
  }

  // 인라인 탭 전환 이벤트 바인딩
  container.querySelectorAll('.td-tab').forEach(function(btn) {
    btn.onclick = function() {
      container.querySelectorAll('.td-tab').forEach(function(e) { e.classList.remove('active'); });
      container.querySelectorAll('.td-tab-content').forEach(function(e) { e.classList.remove('active'); });
      btn.classList.add('active');
      var tabId = btn.getAttribute('data-td-tab');
      container.querySelector('#td-' + tabId).classList.add('active');
    };
  });

  // 첫 번째 탭 활성화
  container.querySelectorAll('.td-tab').forEach(function(e) { e.classList.remove('active'); });
  container.querySelectorAll('.td-tab-content').forEach(function(e) { e.classList.remove('active'); });
  var firstTab = container.querySelector('.td-tab[data-td-tab="info"]');
  var firstContent = container.querySelector('#td-info');
  if (firstTab) firstTab.classList.add('active');
  if (firstContent) firstContent.classList.add('active');
}

function switchTnDetailTab(tab) {
  document.querySelectorAll('.td-tab').forEach(function(e) { e.classList.remove('active'); });
  document.querySelectorAll('.td-tab-content').forEach(function(e) { e.classList.remove('active'); });
  document.querySelector('.td-tab[data-td-tab="' + tab + '"]').classList.add('active');
  document.getElementById('td-' + tab).classList.add('active');
}

function tdRenderPlayerList(item) {
  var t = i18n[currentLang] || i18n.ko;
  var playerNames = ['Player_Kim', 'LuckyAce77', 'PokerKing', 'BluffMaster', 'RoyalFlush',
    'CardShark99', 'AllInHero', 'ChipLeader', 'NightOwl', 'HighRoller_J', 'ProPlayer_X', 'SmartBet'];
  var demoPlayers = [];
  for (var i = 0; i < item.players; i++) {
    demoPlayers.push({
      name: playerNames[i % playerNames.length],
      level: Math.floor(Math.random() * 20) + 5,
      chips: (Math.floor(Math.random() * 50) + 10) * 1000,
    });
  }

  var list = document.getElementById('tdPlayerList');
  if (demoPlayers.length === 0) {
    list.innerHTML = '<div class="tn-empty">' + (t.td_no_players || '아직 참가자가 없습니다') + '</div>';
    return;
  }

  list.innerHTML = demoPlayers.map(function(p, idx) {
    return '<div class="td-player-item">' +
      '<div class="td-player-rank">' + (idx + 1) + '</div>' +
      '<div class="td-player-avatar">👤</div>' +
      '<div class="td-player-info">' +
        '<div class="td-player-name">' + p.name + '</div>' +
        '<div class="td-player-level">Lv.' + p.level + '</div>' +
      '</div>' +
      '<div class="td-player-chips">' + p.chips.toLocaleString() + '</div>' +
    '</div>';
  }).join('');
}

function tdRenderBlindTable() {
  var tbody = document.getElementById('tdBlindTableBody');
  tbody.innerHTML = defaultBlindLevels.map(function(row) {
    return '<tr>' +
      '<td>' + row.lv + '</td>' +
      '<td>' + row.sb.toLocaleString() + ' / ' + row.bb.toLocaleString() + '</td>' +
      '<td>' + row.ante.toLocaleString() + '</td>' +
      '<td>' + row.time + 'min</td>' +
    '</tr>';
  }).join('');
}

function tdRenderPayoutTable(item) {
  var t = i18n[currentLang] || i18n.ko;

  document.getElementById('tdPayoutTotal').innerHTML =
    '<span class="td-payout-total-label">' + (t.td_total_prize || '총 상금') + '</span>' +
    '<span class="td-payout-total-value">' + item.prize + '</span>';

  var payouts = [
    { rank: '1st', percent: 50 },
    { rank: '2nd', percent: 30 },
    { rank: '3rd', percent: 20 },
  ];

  var prizeNum = parseInt(item.prize.replace(/[^0-9]/g, '')) || 0;
  var tbody = document.getElementById('tdPayoutTableBody');
  tbody.innerHTML = payouts.map(function(p) {
    return '<tr>' +
      '<td class="td-rank-cell">' + p.rank + '</td>' +
      '<td class="td-amount-cell">' + (prizeNum * p.percent / 100).toLocaleString() + 'G</td>' +
      '<td class="td-percent-cell">' + p.percent + '%</td>' +
    '</tr>';
  }).join('');
}

function tdUpdateButtons(item) {
  var registerBtn = document.getElementById('tdRegisterBtn');
  var spectateBtn = document.getElementById('tdSpectateBtn');
  var t = i18n[currentLang] || i18n.ko;

  // 라이브 테이블에서 관전 모드로 진입한 경우
  if (enterLiveTableSpectateMode) {
    registerBtn.style.display = 'none';
    spectateBtn.style.display = '';
    enterLiveTableSpectateMode = false;
    return;
  }

  if (item.status === 'finished') {
    registerBtn.style.display = 'none';
    spectateBtn.style.display = '';
    return;
  }

  registerBtn.style.display = '';
  spectateBtn.style.display = '';

  if (item.registered) {
    registerBtn.textContent = t.td_sit_down || '착석하기';
  } else {
    registerBtn.textContent = t.td_register || '등록';
  }
}

function tdRegister() {
  var item = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
  if (!item || item.status === 'finished') return;

  var session = getSession();
  var t = i18n[currentLang] || i18n.ko;
  if (!session) { alert(t.sp_login_required || '로그인이 필요합니다'); switchPage('login'); return; }

  if (item.registered) {
    alert(t.td_game_start || '게임 시작');
    return;
  }

  if (item.players >= item.maxPlayers) { alert(t.td_full || '정원이 가득 찼습니다'); return; }

  openTdRegisterModal(item);
}

function openTdRegisterModal(item) {
  var t = i18n[currentLang] || i18n.ko;

  // 배지: 상태
  var statusText = t['tn_status_' + item.status] || item.status;
  document.getElementById('tdrBadge').textContent = '00:00 ' + statusText;

  // 토너먼트명
  document.getElementById('tdrName').textContent = item.name;

  // 시작 시간
  var startVal = item.startType === 'manual' ? (t.tn_manual_start || '호스트 수동시작') : item.startType;
  document.getElementById('tdrStartTime').textContent = startVal;

  // 결제 옵션
  document.getElementById('tdrPaymentOption').textContent = t.tdr_balance || '밸런스';

  // 바이인
  var feeLabel = item.fee === 'free' ? (t.tn_fee_free || '무료') : item.fee;
  document.getElementById('tdrFee').textContent = feeLabel;

  var scrollW = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollW + 'px';
  document.getElementById('tdRegisterModal').classList.add('active');
}

// === FAQ 아코디언 / 탭 / 검색 ===
var currentFaqTab = 'all';

function toggleFaq(el) {
  var item = el.parentElement;
  item.classList.toggle('open');
}

function switchFaqTab(tab) {
  var container = document.querySelector('.faq-tabs');
  var prev = container.querySelector('.faq-tab.active');
  currentFaqTab = tab;
  document.querySelectorAll('.faq-tab').forEach(function(e) { e.classList.remove('active'); });
  const activeTab = document.querySelector('.faq-tab[data-faq-tab="' + tab + '"]');
  activeTab.classList.add('active');
  moveSlider(container, activeTab, prev);
  document.getElementById('faqSearchInput').value = '';
  faqFilter();
}

function faqSearch() {
  faqFilter();
}

function faqFilter() {
  var query = (document.getElementById('faqSearchInput').value || '').toLowerCase().trim();
  var items = document.querySelectorAll('#faqContent .faq-item');
  var visibleCount = 0;
  items.forEach(function(item) {
    var cat = item.getAttribute('data-faq-cat');
    var text = item.textContent.toLowerCase();
    var catMatch = (currentFaqTab === 'all') || (cat === currentFaqTab);
    var searchMatch = !query || text.indexOf(query) !== -1;
    if (catMatch && searchMatch) {
      item.classList.remove('faq-hidden');
      visibleCount++;
    } else {
      item.classList.add('faq-hidden');
      item.classList.remove('open');
    }
  });
  document.getElementById('faqEmpty').style.display = visibleCount === 0 ? '' : 'none';
}

/* Contact Form */
function submitContact() {
  var lang = i18n[currentLang] || i18n.ko;
  var email = document.getElementById('contactEmail').value.trim();
  var subject = document.getElementById('contactSubject').value.trim();
  var message = document.getElementById('contactMessage').value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) { alert(lang.contact_valid_email); return; }
  if (!subject) { alert(lang.contact_valid_subject); return; }
  if (!message) { alert(lang.contact_valid_message); return; }
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactSubject').value = '';
  document.getElementById('contactMessage').value = '';
  document.getElementById('contactSuccess').style.display = '';
  document.querySelector('.contact-form .login-btn').style.display = 'none';
  document.querySelectorAll('.contact-field').forEach(function(f) { f.style.display = 'none'; });
}

function closeTdRegisterModal() {
  document.getElementById('tdRegisterModal').classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function confirmTdRegister() {
  var item = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
  if (!item) return;

  item.registered = true;
  item.players++;
  closeTdRegisterModal();
  tdRenderDetail();
}

var enterLiveTableSpectateMode = false;

function enterLiveTable(tournamentId) {
  enterLiveTableSpectateMode = true;
  currentTnDetailId = tournamentId;
  switchPage('tn-detail');
}

function tdSpectate() {
  var t = i18n[currentLang] || i18n.ko;
  alert(t.td_spectate_msg || '관전 모드 준비 중입니다');
}

// === TOURNAMENT HISTORY PAGE ===

function tnRenderHistory() {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;

  const statusMap = {
    finished: { label: t.tn_status_finished || '종료', cls: 'finished' },
  };
  const feeLabel = t.tn_fee_free || '무료';
  const startsLabel = t.tn_starts_in || 'Starts In';
  const manualLabel = t.tn_manual_start || '수동 시작';

  function buildCard(item) {
    const s = statusMap[item.status] || { label: '종료', cls: 'finished' };
    const fee = item.fee === 'free' ? feeLabel : item.fee;
    const startVal = item.startType === 'manual' ? manualLabel : item.startType;
    return `<div class="tn-card" onclick="openTnDetail(${item.id})">
      <div class="tn-card-left">
        <span class="tn-badge ${s.cls}">${s.label}</span>
        <span class="tn-starts-label">${startsLabel}</span>
        <span class="tn-starts-value">${startVal}</span>
      </div>
      <div class="tn-card-right">
        <div class="tn-name">${item.name}</div>
        <div class="tn-meta">
          <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>
          <span class="tn-meta-item">${fee}</span>
          <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${item.players}/${item.maxPlayers}</span>
          <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg> ${item.prize}</span>
        </div>
      </div>
    </div>`;
  }

  const historyItems = demoTournaments.filter(item => item.status === 'finished');
  const emptyMsg = t.tn_history_empty || '완료된 토너먼트가 없습니다';
  const html = historyItems.length ? historyItems.map(buildCard).join('') : `<div class="tn-empty">${emptyMsg}</div>`;
  document.getElementById('tnHistoryList').innerHTML = html;
}

// === TICKET PAGE ===

const demoTickets = [
  { id: 1,  series: 'Series A',    expire: '2026-03-02' },
  { id: 2,  series: 'Series A',    expire: '2026-03-05' },
  { id: 3,  series: 'Series B',    expire: '2026-03-10' },
  { id: 4,  series: 'Series B',    expire: '2026-03-12' },
  { id: 5,  series: 'Series C',    expire: '2026-03-18' },
  { id: 6,  series: 'Series C',    expire: '2026-03-20' },
  { id: 7,  series: 'Series D',    expire: '2026-03-25' },
  { id: 8,  series: 'Series D',    expire: '2026-03-27' },
  { id: 9,  series: 'Satellite A', expire: '2026-03-03' },
  { id: 10, series: 'Satellite A', expire: '2026-03-08' },
  { id: 11, series: 'Satellite B', expire: '2026-03-14' },
  { id: 12, series: 'Satellite B', expire: '2026-03-16' },
  { id: 13, series: 'Satellite C', expire: '2026-03-22' },
  { id: 14, series: 'Satellite C', expire: '2026-03-24' },
  { id: 15, series: 'Satellite D', expire: '2026-03-26' },
  { id: 16, series: 'Satellite D', expire: '2026-03-28' },
  { id: 17, series: 'Series A',    expire: '2026-03-07' },
  { id: 18, series: 'Satellite A', expire: '2026-03-11' },
  { id: 19, series: 'Series B',    expire: '2026-03-15' },
  { id: 20, series: 'Satellite B', expire: '2026-03-19' },
  { id: 21, series: 'Series C',    expire: '2026-03-21' },
  { id: 22, series: 'Satellite C', expire: '2026-03-23' },
  { id: 23, series: 'Series D',    expire: '2026-03-26' },
  { id: 24, series: 'Satellite D', expire: '2026-03-27' },
  { id: 25, series: 'Series A',    expire: '2026-03-04' },
];

function tkRenderList() {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;
  const expireLabel = t.tk_expire || '만료일';
  const dayLabel = t.tk_days_left || '일 남음';
  const today = new Date();
  today.setHours(0,0,0,0);

  const totalPrefix = lang === 'ko' ? '총 ' : lang === 'ja' ? '合計 ' : '';
  const totalSuffix = lang === 'ko' ? '장' : lang === 'ja' ? '枚' : ' total';
  document.getElementById('tkTicketCount').textContent = totalPrefix + demoTickets.length + totalSuffix;

  const html = demoTickets.map(tk => {
    const expDate = new Date(tk.expire);
    const diff = Math.ceil((expDate - today) / (1000 * 60 * 60 * 24));
    const daysLeft = diff > 0 ? diff : 0;
    return `<div class="tk-item">
      <span class="tk-item-icon">🎫</span>
      <div class="tk-item-info">
        <span class="tk-item-name">${tk.series}</span>
        <span class="tk-item-expire">${expireLabel}: ${tk.expire} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="vertical-align:-1px;margin-left:6px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${daysLeft}${dayLabel}</span>
      </div>
      <span class="tk-item-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></span>
    </div>`;
  }).join('');

  document.getElementById('tkTicketList').innerHTML = html;
}

// === GAME SETUP ===

function switchGameSetupTab(tab) {
  var container = document.querySelector('.gs-tabs');
  var prev = container.querySelector('.gs-tab.active');
  document.querySelectorAll('.gs-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.gs-tab-content').forEach(e => e.classList.remove('active'));
  const activeTab = document.querySelector('.gs-tab[data-gs-tab="' + tab + '"]');
  activeTab.classList.add('active');
  document.getElementById('gs-' + tab).classList.add('active');
  moveSlider(container, activeTab, prev);
}

function gsStep(id, delta) {
  const el = document.getElementById(id);
  let val = parseInt(el.textContent, 10) || 0;
  val = Math.max(0, val + delta);
  el.textContent = val;
}

function gsSelectSegment(groupId, btn) {
  const group = document.getElementById(groupId);
  group.querySelectorAll('.gs-segment-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Blind Table
const defaultBlindLevels = [
  { lv:1, sb:10, bb:20, ante:0, time:10 },
  { lv:2, sb:15, bb:30, ante:0, time:10 },
  { lv:3, sb:20, bb:40, ante:5, time:10 },
  { lv:4, sb:30, bb:60, ante:10, time:10 },
  { lv:5, sb:50, bb:100, ante:15, time:10 },
  { lv:6, sb:75, bb:150, ante:20, time:10 },
  { lv:7, sb:100, bb:200, ante:25, time:10 },
  { lv:8, sb:150, bb:300, ante:40, time:10 },
  { lv:9, sb:200, bb:400, ante:50, time:10 },
  { lv:10, sb:300, bb:600, ante:75, time:10 },
];
let gsBlindData = JSON.parse(JSON.stringify(defaultBlindLevels));
let gsSelectedRow = -1;

function gsRenderBlindTable() {
  const tbody = document.getElementById('gsBlindTableBody');
  tbody.innerHTML = '';
  gsBlindData.forEach((row, idx) => {
    const tr = document.createElement('tr');
    if (row.isBreak) {
      tr.className = 'break-row';
      tr.innerHTML = '<td>-</td><td colspan="2" style="font-style:italic;color:var(--text-muted)">BREAK</td><td><input type="number" value="' + row.time + '" onchange="gsUpdateBlind(' + idx + ',\'time\',this.value)" onclick="event.stopPropagation()"></td>';
    } else {
      tr.innerHTML = '<td>' + row.lv + '</td><td><div class="gs-sb-bb"><input type="number" value="' + row.sb + '" onchange="gsUpdateBlind(' + idx + ',\'sb\',this.value)" onclick="event.stopPropagation()"> / <input type="number" value="' + row.bb + '" onchange="gsUpdateBlind(' + idx + ',\'bb\',this.value)" onclick="event.stopPropagation()"></div></td><td><input type="number" value="' + row.ante + '" onchange="gsUpdateBlind(' + idx + ',\'ante\',this.value)" onclick="event.stopPropagation()"></td><td><input type="number" value="' + row.time + '" onchange="gsUpdateBlind(' + idx + ',\'time\',this.value)" onclick="event.stopPropagation()"></td>';
    }
    if (idx === gsSelectedRow) tr.classList.add('selected');
    tr.addEventListener('click', function(e) {
      if (e.target.tagName === 'INPUT') return;
      gsSelectBlindRow(idx);
    });
    tbody.appendChild(tr);
  });
}

function gsSelectBlindRow(idx) {
  gsSelectedRow = gsSelectedRow === idx ? -1 : idx;
  document.getElementById('gsBlindActions').style.display = gsSelectedRow >= 0 ? 'flex' : 'none';
  gsRenderBlindTable();
}

function gsUpdateBlind(idx, field, value) {
  gsBlindData[idx][field] = parseInt(value, 10) || 0;
}

function gsRenumberLevels() {
  let lvNum = 1;
  gsBlindData.forEach(row => { if (!row.isBreak) row.lv = lvNum++; });
}

function gsDeleteBlindRow() {
  if (gsSelectedRow < 0 || gsSelectedRow >= gsBlindData.length) return;
  gsBlindData.splice(gsSelectedRow, 1);
  gsRenumberLevels();
  gsSelectedRow = -1;
  document.getElementById('gsBlindActions').style.display = 'none';
  gsRenderBlindTable();
}

function gsAddBlindRow() {
  const insertAt = gsSelectedRow >= 0 ? gsSelectedRow + 1 : gsBlindData.length;
  const lastBlind = gsBlindData.filter(r => !r.isBreak).pop();
  gsBlindData.splice(insertAt, 0, {
    lv: 0, sb: lastBlind ? lastBlind.sb * 2 : 100, bb: lastBlind ? lastBlind.bb * 2 : 200,
    ante: lastBlind ? Math.round(lastBlind.ante * 1.5) : 25, time: 10
  });
  gsRenumberLevels();
  gsSelectedRow = -1;
  document.getElementById('gsBlindActions').style.display = 'none';
  gsRenderBlindTable();
}

function gsAddBreakRow() {
  const insertAt = gsSelectedRow >= 0 ? gsSelectedRow + 1 : gsBlindData.length;
  gsBlindData.splice(insertAt, 0, { isBreak: true, time: 5 });
  gsSelectedRow = -1;
  document.getElementById('gsBlindActions').style.display = 'none';
  gsRenderBlindTable();
}

function gsInitDefaults() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const dtStr = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + 'T' + pad(now.getHours()) + ':' + pad(now.getMinutes());
  const displayStr = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes());
  const el = document.getElementById('gsStartTime');
  if (el) el.value = dtStr;
  const textEl = document.getElementById('gsStartTimeText');
  if (textEl) textEl.textContent = displayStr;
  gsBlindData = JSON.parse(JSON.stringify(defaultBlindLevels));
  gsSelectedRow = -1;
  gsRenderBlindTable();
  // 첫번째 탭으로 리셋
  switchGameSetupTab('general');
}

function gsToggleTimeBank() {
  const on = document.getElementById('gsTimeBank').checked;
  document.getElementById('gsTimeBankOptions').style.display = on ? '' : 'none';
}

function gsCreateGame() {
  const config = {
    title: document.getElementById('gsTitle').value,
    startStack: document.getElementById('gsStartStack').value,
    rebuy: parseInt(document.getElementById('gsRebuy').textContent, 10),
    tableType: parseInt(document.getElementById('gsTableType').textContent, 10),
    startTime: document.getElementById('gsStartTime').value,
    actionTime: parseInt(document.getElementById('gsActionTime').value, 10),
    blindStructure: document.querySelector('#gsBlindStructure .gs-segment-btn.active')?.dataset.value,
    ante: document.querySelector('#gsAnte .gs-segment-btn.active')?.dataset.value,
    blindLevels: gsBlindData,
    totalBuyin: parseInt(document.getElementById('gsTotalBuyin').value, 10),
    prizeStructure: document.querySelector('#gsPrizeStructure .gs-segment-btn.active')?.dataset.value,
    inTheMoney: document.querySelector('#gsInTheMoney .gs-segment-btn.active')?.dataset.value,
    guarantee: parseInt(document.getElementById('gsGuarantee').value, 10),
    timeBank: document.getElementById('gsTimeBank').checked,
    initialTimeBank: document.getElementById('gsInitialTimeBank').value,
    extraTime: document.getElementById('gsExtraTime').value,
  };
  alert('게임이 생성되었습니다! (Demo)');
}

/* ===== DateTimePicker ===== */
let dtpYear, dtpMonth, dtpDay, dtpHour, dtpMinute;

function dtpOpen() {
  const val = document.getElementById('gsStartTime').value; // "YYYY-MM-DDTHH:MM"
  let d;
  if (val) {
    const parts = val.split('T');
    const dp = parts[0].split('-');
    const tp = (parts[1] || '00:00').split(':');
    d = new Date(+dp[0], +dp[1]-1, +dp[2], +tp[0], +tp[1]);
  } else {
    d = new Date();
  }
  dtpYear = d.getFullYear();
  dtpMonth = d.getMonth();
  dtpDay = d.getDate();
  dtpHour = d.getHours();
  dtpMinute = Math.round(d.getMinutes() / 5) * 5;
  if (dtpMinute >= 60) { dtpMinute = 55; }
  dtpRenderCalendar();
  dtpUpdateTimeLabels();
  const modal = document.getElementById('dtpModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function dtpClose() {
  dtpCloseAllDropdowns();
  const modal = document.getElementById('dtpModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function dtpSelect() {
  const pad = n => String(n).padStart(2, '0');
  const dtStr = dtpYear + '-' + pad(dtpMonth+1) + '-' + pad(dtpDay) + 'T' + pad(dtpHour) + ':' + pad(dtpMinute);
  const displayStr = dtpYear + '-' + pad(dtpMonth+1) + '-' + pad(dtpDay) + ' ' + pad(dtpHour) + ':' + pad(dtpMinute);
  document.getElementById('gsStartTime').value = dtStr;
  document.getElementById('gsStartTimeText').textContent = displayStr;
  dtpClose();
}

function dtpToday() {
  const now = new Date();
  dtpYear = now.getFullYear();
  dtpMonth = now.getMonth();
  dtpDay = now.getDate();
  dtpRenderCalendar();
}

function dtpPrevMonth() {
  dtpCloseAllDropdowns();
  dtpMonth--;
  if (dtpMonth < 0) { dtpMonth = 11; dtpYear--; }
  dtpRenderCalendar();
}

function dtpNextMonth() {
  dtpCloseAllDropdowns();
  dtpMonth++;
  if (dtpMonth > 11) { dtpMonth = 0; dtpYear++; }
  dtpRenderCalendar();
}

function dtpRenderCalendar() {
  // 라벨 업데이트
  document.getElementById('dtpYearLabel').textContent = dtpYear + '년';
  document.getElementById('dtpMonthLabel').textContent = (dtpMonth + 1) + '월';

  const container = document.getElementById('dtpDays');
  container.innerHTML = '';

  const firstDay = new Date(dtpYear, dtpMonth, 1).getDay(); // 0=일
  const daysInMonth = new Date(dtpYear, dtpMonth + 1, 0).getDate();
  const daysInPrev = new Date(dtpYear, dtpMonth, 0).getDate();

  const today = new Date();
  const todayY = today.getFullYear();
  const todayM = today.getMonth();
  const todayD = today.getDate();

  // 이전 달 날짜
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPrev - i;
    const pm = dtpMonth - 1 < 0 ? 11 : dtpMonth - 1;
    const py = dtpMonth - 1 < 0 ? dtpYear - 1 : dtpYear;
    const el = document.createElement('div');
    el.className = 'dtp-day other-month';
    el.textContent = day;
    el.onclick = () => dtpSelectDay(day, pm, py);
    container.appendChild(el);
  }

  // 이번 달 날짜
  for (let d = 1; d <= daysInMonth; d++) {
    const el = document.createElement('div');
    let cls = 'dtp-day';
    if (d === todayD && dtpMonth === todayM && dtpYear === todayY) cls += ' today';
    if (d === dtpDay && dtpMonth === dtpMonth && dtpYear === dtpYear) cls += ' selected';
    el.className = cls;
    el.textContent = d;
    const dd = d;
    el.onclick = () => dtpSelectDay(dd, dtpMonth, dtpYear);
    container.appendChild(el);
  }

  // 다음 달 날짜 (6줄 = 42칸 채우기)
  const totalCells = firstDay + daysInMonth;
  const remaining = totalCells <= 35 ? (35 - totalCells) : (42 - totalCells);
  const nm = dtpMonth + 1 > 11 ? 0 : dtpMonth + 1;
  const ny = dtpMonth + 1 > 11 ? dtpYear + 1 : dtpYear;
  for (let d = 1; d <= remaining; d++) {
    const el = document.createElement('div');
    el.className = 'dtp-day other-month';
    el.textContent = d;
    const dd = d;
    el.onclick = () => dtpSelectDay(dd, nm, ny);
    container.appendChild(el);
  }
}

function dtpSelectDay(day, month, year) {
  dtpCloseAllDropdowns();
  dtpYear = year;
  dtpMonth = month;
  dtpDay = day;
  dtpRenderCalendar();
}

function dtpUpdateTimeLabels() {
  document.getElementById('dtpHourLabel').textContent = dtpHour + '시';
  document.getElementById('dtpMinuteLabel').textContent = String(dtpMinute).padStart(2, '0') + '분';
}

/* 드롭다운 토글 함수들 */
function dtpCloseAllDropdowns() {
  document.querySelectorAll('#dtpModal .dtp-dropdown-list').forEach(el => el.classList.remove('active'));
}

function dtpToggleDropdown(listId, renderFn) {
  const list = document.getElementById(listId);
  const wasActive = list.classList.contains('active');
  dtpCloseAllDropdowns();
  if (!wasActive) {
    renderFn(list);
    list.classList.add('active');
  }
}

function dtpToggleYearList() {
  dtpToggleDropdown('dtpYearList', (list) => {
    list.innerHTML = '';
    for (let y = dtpYear - 5; y <= dtpYear + 5; y++) {
      const div = document.createElement('div');
      div.textContent = y + '년';
      if (y === dtpYear) div.className = 'active';
      div.onclick = (e) => { e.stopPropagation(); dtpSelectYear(y); };
      list.appendChild(div);
    }
  });
}

function dtpToggleMonthList() {
  dtpToggleDropdown('dtpMonthList', (list) => {
    list.innerHTML = '';
    for (let m = 0; m < 12; m++) {
      const div = document.createElement('div');
      div.textContent = (m + 1) + '월';
      if (m === dtpMonth) div.className = 'active';
      div.onclick = (e) => { e.stopPropagation(); dtpSelectMonth(m); };
      list.appendChild(div);
    }
  });
}

function dtpToggleHourList() {
  dtpToggleDropdown('dtpHourList', (list) => {
    list.innerHTML = '';
    for (let h = 0; h < 24; h++) {
      const div = document.createElement('div');
      div.textContent = h + '시';
      if (h === dtpHour) div.className = 'active';
      div.onclick = (e) => { e.stopPropagation(); dtpSelectHour(h); };
      list.appendChild(div);
    }
  });
}

function dtpToggleMinuteList() {
  dtpToggleDropdown('dtpMinuteList', (list) => {
    list.innerHTML = '';
    for (let m = 0; m < 60; m += 5) {
      const div = document.createElement('div');
      div.textContent = String(m).padStart(2, '0') + '분';
      if (m === dtpMinute) div.className = 'active';
      div.onclick = (e) => { e.stopPropagation(); dtpSelectMinute(m); };
      list.appendChild(div);
    }
  });
}

function dtpSelectYear(y) {
  dtpYear = y;
  dtpCloseAllDropdowns();
  dtpRenderCalendar();
}

function dtpSelectMonth(m) {
  dtpMonth = m;
  dtpCloseAllDropdowns();
  dtpRenderCalendar();
}

function dtpSelectHour(h) {
  dtpHour = h;
  dtpCloseAllDropdowns();
  dtpUpdateTimeLabels();
}

function dtpSelectMinute(m) {
  dtpMinute = m;
  dtpCloseAllDropdowns();
  dtpUpdateTimeLabels();
}

/* ── Account Edit ── */
function aeInit() {
  const s = JSON.parse(localStorage.getItem('lulu_session') || '{}');
  const idEl = document.getElementById('aeCurrentId');
  if (idEl) idEl.value = s.id || '';
  document.getElementById('aeCurrentPw') && (document.getElementById('aeCurrentPw').value = '');
  document.getElementById('aeNewPw') && (document.getElementById('aeNewPw').value = '');
  document.getElementById('aeConfirmPw') && (document.getElementById('aeConfirmPw').value = '');
}

function aeChangePw() {
  const t = i18n[currentLang] || i18n.ko;
  const curPw = document.getElementById('aeCurrentPw').value;
  const newPw = document.getElementById('aeNewPw').value;
  const confirmPw = document.getElementById('aeConfirmPw').value;
  if (!curPw || !newPw || !confirmPw) { alert(t.ae_pw_empty); return; }
  if (newPw !== confirmPw) { alert(t.ae_pw_mismatch); return; }
  const s = JSON.parse(localStorage.getItem('lulu_session') || '{}');
  const users = JSON.parse(localStorage.getItem('lulu_users') || '[]');
  const u = users.find(u => u.email === s.email);
  if (u && u.password !== curPw) { alert(t.ae_pw_wrong); return; }
  if (u) { u.password = newPw; localStorage.setItem('lulu_users', JSON.stringify(users)); }
  document.getElementById('aeCurrentPw').value = '';
  document.getElementById('aeNewPw').value = '';
  document.getElementById('aeConfirmPw').value = '';
  alert(t.ae_pw_success);
}

/* ── Mailbox ── */
var demoMails = [
  { id:1, title:'컴포즈 기프티콘 당첨', reward:'🎁', expireHours: 17*24, read:false },
  { id:2, title:'주간 출석 보상', reward:'🪙', expireHours: 9, read:true },
  { id:3, title:'토너먼트 입상 보상', reward:'🏆', expireHours: 3*24, read:false },
  { id:4, title:'레벨업 축하 선물', reward:'🎉', expireHours: 25*24, read:true },
  { id:5, title:'이벤트 참여 보상', reward:'💎', expireHours: 5*24, read:false },
  { id:6, title:'친구 초대 리워드', reward:'🎫', expireHours: 12*24, read:true },
  { id:7, title:'시즌 종료 보상', reward:'👑', expireHours: 2, read:false },
];

function updateAvatarReddot() {
  if (typeof demoMails === 'undefined' || !demoMails) return;
  var unread = demoMails.some(function(m) { return !m.read; });
  var pcDot = document.getElementById('navAvatarDot');
  var mDot = document.getElementById('mNavAvatarDot');
  if (pcDot) pcDot.style.display = unread ? '' : 'none';
  if (mDot) mDot.style.display = unread ? '' : 'none';
}
updateAvatarReddot();

// === 우편함 탭 ===
function switchMbTab(tab) {
  document.querySelectorAll('.mb-tab').forEach(function(t) { t.classList.remove('active'); });
  document.querySelector('.mb-tab[data-mb-tab="' + tab + '"]').classList.add('active');
  document.querySelectorAll('.mb-tab-content').forEach(function(c) { c.classList.remove('active'); c.style.display = 'none'; });
  var el = document.getElementById('mb-' + tab);
  if (el) { el.classList.add('active'); el.style.display = 'block'; }
}

var demoNotifs = [
  { title: '토너먼트 우승!', desc: '주간 챔피언십에서 1위를 달성했습니다. 축하합니다!', time: '2시간 전', unread: true },
  { title: '출석 보상 지급', desc: '7일 연속 출석 보상으로 골드 1,000이 지급되었습니다.', time: '5시간 전', unread: true },
  { title: '시스템 점검 안내', desc: '4월 10일 04:00~06:00 서버 점검이 예정되어 있습니다.', time: '1일 전', unread: false },
  { title: '시즌 3 종료', desc: '시즌 3이 종료되었습니다. 보상을 확인하세요.', time: '3일 전', unread: false },
];

var demoMessages = [
  { avatar: 'images/avatar_h.png', name: '포커마스터', preview: '내일 저녁 8시에 프라이빗 룸 하실래요?', time: '30분 전', unread: true, unreadCount: 3 },
  { avatar: 'images/avatar_i.png', name: '올인김치', preview: '아까 그 핸드 대박이었어요 ㅋㅋ', time: '2시간 전', unread: true, unreadCount: 1 },
  { avatar: 'images/avatar_j.png', name: '블러프왕', preview: 'GG! 다음에 또 해요', time: '1일 전', unread: false, unreadCount: 0 },
];

// === 채팅 ===
var chatTarget = null;
var chatAvatar = null;
var chatData = {
  '포커마스터': [
    { who: 'them', text: '오늘 토너먼트 참가하실 건가요?', time: '오후 7:30' },
    { who: 'me', text: '네! 8시 시작이죠?', time: '오후 7:31' },
    { who: 'them', text: '맞아요 프라이빗 룸에서 봐요', time: '오후 7:32' },
    { who: 'them', text: '내일 저녁 8시에 프라이빗 룸 하실래요?', time: '오후 7:45' },
  ],
  '올인김치': [
    { who: 'them', text: '아까 AA로 올인 받아주셔서 감사합니다 ㅋㅋ', time: '오후 3:10' },
    { who: 'me', text: 'ㅋㅋㅋ 저도 재밌었어요', time: '오후 3:12' },
    { who: 'them', text: '아까 그 핸드 대박이었어요 ㅋㅋ', time: '오후 3:15' },
  ],
  '블러프왕': [
    { who: 'me', text: '좋은 게임이었습니다', time: '오후 9:00' },
    { who: 'them', text: 'GG! 다음에 또 해요', time: '오후 9:01' },
  ]
};

function openChat(name) {
  chatTarget = name;
  var found = demoMessages.find(function(m) { return m.name === name; });
  chatAvatar = found ? found.avatar : 'images/avatar_o.png';
  document.body.classList.add('chat-open');
  switchPage('chat');
  document.getElementById('chatNavName').textContent = name;
  // 상태바 표시 여부에 따라 chat-wrap 위치 조정
  var sb = document.querySelector('.m-statusbar');
  var chatWrap = document.querySelector('.chat-wrap');
  if (chatWrap && sb && sb.style.display !== 'none') {
    chatWrap.style.top = '52px';
    chatWrap.style.height = 'calc(100vh - 52px)';
  }
  renderChat();
}

function renderChat() {
  var el = document.getElementById('chatMessages');
  if (!el || !chatTarget) return;
  var msgs = chatData[chatTarget] || [];
  el.innerHTML = '<div class="chat-date-sep">오늘</div>' + msgs.map(function(m) {
    if (m.who === 'them') {
      return '<div class="chat-row them"><img class="chat-avatar" src="' + chatAvatar + '" alt="">' +
        '<div><div class="chat-bubble them">' + m.text + '</div>' +
        '<div class="chat-time them">' + m.time + '</div></div></div>';
    }
    return '<div class="chat-row me"><div><div class="chat-bubble me">' + m.text + '</div>' +
      '<div class="chat-time me">' + m.time + '</div></div></div>';
  }).join('');
  el.scrollTop = el.scrollHeight;
}

function sendChat() {
  var input = document.getElementById('chatInput');
  if (!input || !input.value.trim() || !chatTarget) return;
  if (!chatData[chatTarget]) chatData[chatTarget] = [];
  var now = new Date();
  var h = now.getHours(), mm = String(now.getMinutes()).padStart(2,'0');
  var ampm = h >= 12 ? '오후' : '오전';
  if (h > 12) h -= 12;
  if (h === 0) h = 12;
  chatData[chatTarget].push({ who: 'me', text: input.value.trim(), time: ampm + ' ' + h + ':' + mm });
  input.value = '';
  renderChat();
}

function toggleChatMenu(e) {
  if (e) e.stopPropagation();
  var popup = document.getElementById('chatMenuPopup');
  popup.classList.toggle('open');
}
document.addEventListener('click', function() {
  var popup = document.getElementById('chatMenuPopup');
  if (popup) popup.classList.remove('open');
});

function chatAction(action) {
  document.getElementById('chatMenuPopup').classList.remove('open');
  if (action === 'block') alert(chatTarget + '님을 차단했습니다.');
  if (action === 'report') alert(chatTarget + '님을 신고했습니다.');
  if (action === 'manage') alert('차단한 사용자 관리 페이지로 이동합니다.');
}

function mbRenderList() {
  mbRenderNotifs();
  mbRenderMessages();
}

function mbRenderNotifs() {
  var el = document.getElementById('mbNotifList');
  if (!el) return;
  if (demoNotifs.length === 0) {
    el.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--text-muted);font-size:14px;">알림이 없습니다</div>';
    return;
  }
  el.innerHTML = demoNotifs.map(function(n) {
    return '<div class="mb-notif-item' + (n.unread ? ' unread' : '') + '">' +
      '<div class="mb-notif-body">' +
        '<div class="mb-notif-title">' + n.title + '</div>' +
        '<div class="mb-notif-desc">' + n.desc + '</div>' +
        '<div class="mb-notif-time">' + n.time + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function mbRenderMessages() {
  var el = document.getElementById('mbMsgList');
  if (!el) return;
  if (demoMessages.length === 0) {
    el.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--text-muted);font-size:14px;">메시지가 없습니다</div>';
    return;
  }
  el.innerHTML = demoMessages.map(function(m) {
    var badge = m.unreadCount > 0 ? '<span class="mb-msg-badge">' + m.unreadCount + '</span>' : '';
    return '<div class="mb-msg-item' + (m.unread ? ' unread' : '') + '" onclick="openChat(\'' + m.name + '\')">' +
      '<img class="mb-msg-avatar" src="' + m.avatar + '" alt="' + m.name + '">' +
      '<div class="mb-msg-body">' +
        '<div class="mb-msg-name">' + m.name + '</div>' +
        '<div class="mb-msg-preview">' + m.preview + '</div>' +
        '<div class="mb-msg-time">' + m.time + '</div>' +
      '</div>' +
      badge +
    '</div>';
  }).join('');
}

/* ── Host ── */
function hostRenderList(keyword) {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;
  const statusMap = {
    registering: { label: t.tn_status_registering || '모집중', cls: 'registering' },
    ready: { label: t.tn_status_ready || '준비중', cls: 'ready' },
    playing: { label: t.tn_status_playing || '진행중', cls: 'playing' },
    finished: { label: t.tn_status_finished || '종료', cls: 'finished' },
  };
  const feeLabel = t.tn_fee_free || '무료';
  const startsLabel = t.tn_starts_in || 'Starts In';
  const manualLabel = t.tn_manual_start || '수동 시작';

  function buildCard(item) {
    const s = statusMap[item.status] || statusMap.registering;
    const fee = item.fee === 'free' ? feeLabel : item.fee;
    const startVal = item.startType === 'manual' ? manualLabel : item.startType;
    return '<div class="tn-card" onclick="openTnDetail(' + item.id + ')">' +
      '<div class="tn-card-left">' +
        '<span class="tn-badge ' + s.cls + '">' + s.label + '</span>' +
        '<span class="tn-starts-label">' + startsLabel + '</span>' +
        '<span class="tn-starts-value">' + startVal + '</span>' +
      '</div>' +
      '<div class="tn-card-right">' +
        '<div class="tn-name">' + item.name + '</div>' +
        '<div class="tn-meta">' +
          '<span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>' +
          '<span class="tn-meta-item">' + fee + '</span>' +
          '<span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ' + item.players + '/' + item.maxPlayers + '</span>' +
          '<span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg> ' + item.prize + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  let items = demoTournaments.filter(item => item.registered);
  if (keyword) {
    const kw = keyword.toLowerCase();
    items = items.filter(item => item.name.toLowerCase().includes(kw));
  }
  const el = document.getElementById('hostTnList');
  if (!el) return;
  const emptyMsg = t.host_empty || '개설한 토너먼트가 없습니다';
  el.innerHTML = items.length ? items.map(buildCard).join('') : '<div class="tn-empty">' + emptyMsg + '</div>';
}

function hostFilter() {
  const v = document.getElementById('hostSearchInput').value.trim();
  hostRenderList(v);
}

// === 거래 내역 ===
const demoTransactions = [
  { id:1, type:'gold', direction:'plus', amount:10000, after:52400, label:'토너먼트 우승 보상', sub:'주간 챔피언십', date:'2026-02-26' },
  { id:2, type:'diamond', direction:'minus', amount:50, after:450, label:'아이템 구매', sub:'프리미엄 카드 스킨', date:'2026-02-26' },
  { id:3, type:'gold', direction:'minus', amount:500, after:42400, label:'토너먼트 참가비', sub:'하이롤러 토너먼트', date:'2026-02-25' },
  { id:4, type:'gold', direction:'plus', amount:2000, after:42900, label:'일일 출석 보상', sub:'7일 연속 출석', date:'2026-02-25' },
  { id:5, type:'diamond', direction:'plus', amount:100, after:500, label:'다이아 충전', sub:'상점 구매', date:'2026-02-25' },
  { id:6, type:'gold', direction:'minus', amount:1000, after:40900, label:'게임 바이인', sub:'VIP 라운지', date:'2026-02-24' },
  { id:7, type:'gold', direction:'plus', amount:5500, after:41900, label:'게임 승리 보상', sub:'하이롤러 테이블', date:'2026-02-24' },
  { id:8, type:'diamond', direction:'minus', amount:30, after:400, label:'이모티콘 구매', sub:'럭키 이모티콘 팩', date:'2026-02-24' },
  { id:9, type:'gold', direction:'plus', amount:500, after:36400, label:'친구 초대 보상', sub:'신규 유저 초대', date:'2026-02-23' },
  { id:10, type:'gold', direction:'minus', amount:2000, after:35900, label:'토너먼트 참가비', sub:'루키 토너먼트', date:'2026-02-23' },
  { id:11, type:'diamond', direction:'plus', amount:200, after:430, label:'시즌 보상', sub:'시즌 3 달성 보상', date:'2026-02-22' },
  { id:12, type:'gold', direction:'plus', amount:3000, after:37900, label:'이벤트 보상', sub:'발렌타인 특별 이벤트', date:'2026-02-22' },
];

let txCurrentFilter = 'all';

function txSwitchTab(filter) {
  var container = document.querySelector('.tx-tabs');
  var prev = container.querySelector('.tx-tab.active');
  txCurrentFilter = filter;
  document.querySelectorAll('.tx-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  const activeTab = document.querySelector('.tx-tab.active');
  if (activeTab) moveSlider(container, activeTab, prev);
  txRenderList();
}

function txRenderList() {
  const t = i18n[currentLang] || i18n.ko;
  const list = document.getElementById('txList');
  let items = demoTransactions;
  if (txCurrentFilter !== 'all') {
    items = items.filter(tx => tx.type === txCurrentFilter);
  }
  if (items.length === 0) {
    list.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:40px 0;">' + t.tx_empty + '</div>';
    return;
  }
  let html = '';
  let lastDate = '';
  items.forEach(tx => {
    if (tx.date !== lastDate) {
      lastDate = tx.date;
      html += '<div class="tx-date-group">' + tx.date + '</div>';
    }
    const icon = tx.type === 'gold' ? '🪙' : '💎';
    const iconClass = tx.type === 'gold' ? 'gold' : 'diamond';
    const sign = tx.direction === 'plus' ? '+' : '-';
    const amountStr = sign + tx.amount.toLocaleString();
    html += '<div class="tx-item">';
    html += '<div class="tx-icon ' + iconClass + '">' + icon + '</div>';
    html += '<div class="tx-body"><div class="tx-label">' + tx.label + '</div><div class="tx-sub">' + tx.sub + '</div></div>';
    html += '<div class="tx-amount"><div class="tx-amount-value ' + tx.direction + '">' + amountStr + '</div>';
    html += '<div class="tx-amount-after">' + t.tx_after + ' ' + tx.after.toLocaleString() + '</div></div>';
    html += '</div>';
  });
  list.innerHTML = html;
}

// === 상점 아이템 데이터 ===
const shopItemsData = [
  { id:101, nameKey:'skin_classic_green', descKey:'skin_classic_green_desc', category:'table', icon:'🟢', gradient:'linear-gradient(135deg,#0a200a,#0d300d)', currency:'gold', price:2000 },
  { id:102, nameKey:'skin_royal_red', descKey:'skin_royal_red_desc', category:'table', icon:'🔴', gradient:'linear-gradient(135deg,#200a0a,#300d0d)', currency:'gold', price:5000 },
  { id:103, nameKey:'skin_cosmic_black', descKey:'skin_cosmic_black_desc', category:'table', icon:'🌌', gradient:'linear-gradient(135deg,#1a0533,#2d1058)', currency:'gold', price:10000 },
  { id:104, nameKey:'skin_gold_card', descKey:'skin_gold_card_desc', category:'card', icon:'🃏', gradient:'linear-gradient(135deg,#1a1500,#2d2200)', currency:'diamond', price:80 },
  { id:105, nameKey:'skin_brick_pattern', descKey:'skin_brick_pattern_desc', category:'card', icon:'🧱', gradient:'linear-gradient(135deg,#78350f,#b45309)', currency:'diamond', price:120 },
  { id:106, nameKey:'skin_diamond_card', descKey:'skin_diamond_card_desc', category:'card', icon:'🎆', gradient:'linear-gradient(135deg,#200510,#350a1a)', currency:'diamond', price:300 },
  { id:107, nameKey:'emote_pokerface', descKey:'emote_pokerface_desc', category:'emote', icon:'😎', gradient:'linear-gradient(135deg,#1a1000,#2a1a00)', currency:'gold', price:1500 },
  { id:108, nameKey:'emote_drama', descKey:'emote_drama_desc', category:'emote', icon:'🎭', gradient:'linear-gradient(135deg,#100a1a,#1a102a)', currency:'gold', price:3000 },
  { id:109, nameKey:'emote_allin', descKey:'emote_allin_desc', category:'emote', icon:'💥', gradient:'linear-gradient(135deg,#1a050a,#2d0a15)', currency:'diamond', price:60 },
];

// === 내 아이템 ===
const demoMyItems = [
  { id:1, category:'table', image:'images/table_classic_green.png', name:'클래식 그린', nameKey:'skin_classic_green', desc:'전통적인 포커 테이블', descKey:'skin_classic_green_desc', purchaseDate:'2026-02-20', equipped:true },
  { id:2, category:'table', image:'images/table_royal_red.png', name:'로얄 레드', nameKey:'skin_royal_red', desc:'프리미엄 레드 테이블', descKey:'skin_royal_red_desc', purchaseDate:'2026-02-18', equipped:false },
  { id:3, category:'card', image:'images/card_gold.png', name:'골드 카드', nameKey:'skin_gold_card', desc:'고급 골드 카드 뒷면', descKey:'skin_gold_card_desc', purchaseDate:'2026-02-22', equipped:true },
  { id:4, category:'card', image:'images/card_brick.png', name:'벽돌 패턴', nameKey:'skin_brick_pattern', desc:'클래식 벽돌 패턴 카드', descKey:'skin_brick_pattern_desc', purchaseDate:'2026-02-15', equipped:false },
  { id:5, category:'emote', image:'images/emote_pokerface.png', name:'포커페이스 팩', nameKey:'emote_poker_face', desc:'다양한 포커 이모티콘', descKey:'emote_poker_face_desc', purchaseDate:'2026-02-24', equipped:true },
  { id:6, category:'emote', image:'images/emote_allin.png', name:'올인 팩', nameKey:'emote_allin', desc:'올인 전용 이모티콘', descKey:'emote_allin_desc', purchaseDate:'2026-02-10', equipped:false },
];

let miCurrentFilter = 'all';

function miSwitchTab(filter) {
  var container = document.querySelector('.mi-tabs');
  var prev = container.querySelector('.mi-tab.active');
  miCurrentFilter = filter;
  document.querySelectorAll('.mi-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  const activeTab = document.querySelector('.mi-tab.active');
  if (activeTab) moveSlider(container, activeTab, prev);
  miRenderList();
}

function miRenderList() {
  const t = i18n[currentLang] || i18n.ko;
  const grid = document.getElementById('miGrid');
  let items = demoMyItems;
  if (miCurrentFilter !== 'all') {
    items = items.filter(item => item.category === miCurrentFilter);
  }
  if (items.length === 0) {
    grid.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:40px 0;grid-column:1/-1;">' + t.mi_empty + '</div>';
    return;
  }
  let html = '';
  items.forEach(item => {
    const nameText = (t[item.nameKey]) ? t[item.nameKey] : item.name;
    const descText = (t[item.descKey]) ? t[item.descKey] : item.desc;
    const equipBtnClass = item.equipped ? 'equipped' : 'not-equipped';
    const equipBtnText = item.equipped ? t.mi_unequip : t.mi_equip;
    html += '<div class="mi-card">';
    if (item.equipped) {
      html += '<div class="mi-equipped-badge">' + t.mi_equipped + '</div>';
    }
    html += '<div class="mi-card-visual mi-visual-' + item.category + '"><img loading="lazy" src="' + item.image + '" alt="' + nameText + '"></div>';
    html += '<div class="mi-card-info">';
    html += '<div class="mi-card-name">' + nameText + '</div>';
    html += '<div class="mi-card-desc">' + descText + '</div>';
    html += '<div class="mi-card-date">' + t.mi_purchased + ': ' + item.purchaseDate + '</div>';
    html += '<div class="mi-btn-row">';
    html += '<button class="mi-equip-btn ' + equipBtnClass + '" onclick="miToggleEquip(' + item.id + ')">' + equipBtnText + '</button>';
    html += '<button class="mi-discard-btn" onclick="miDiscardItem(' + item.id + ')">' + t.mi_discard + '</button>';
    html += '</div>';
    html += '</div></div>';
  });
  grid.innerHTML = html;
}

function miToggleEquip(id) {
  const item = demoMyItems.find(i => i.id === id);
  if (!item) return;
  if (item.equipped) {
    item.equipped = false;
  } else {
    demoMyItems.filter(i => i.category === item.category).forEach(i => i.equipped = false);
    item.equipped = true;
  }
  miRenderList();
}

let discardTargetId = null;

function miDiscardItem(id) {
  const t = i18n[currentLang] || i18n.ko;
  const item = demoMyItems.find(i => i.id === id);
  if (!item) return;
  discardTargetId = id;

  const iconEl = document.getElementById('discardItemIcon');
  iconEl.textContent = item.icon;
  iconEl.style.background = item.gradient;
  document.getElementById('discardItemName').textContent = t[item.nameKey] || item.name;
  document.getElementById('discardItemDesc').textContent = t[item.descKey] || item.desc;

  const scrollW = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollW + 'px';
  document.getElementById('discardModal').classList.add('active');
}

function closeDiscardModal() {
  document.getElementById('discardModal').classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  discardTargetId = null;
}

function confirmDiscard() {
  if (discardTargetId === null) return;
  const idx = demoMyItems.findIndex(i => i.id === discardTargetId);
  if (idx !== -1) demoMyItems.splice(idx, 1);
  closeDiscardModal();
  miRenderList();
}

document.getElementById('discardModal').addEventListener('click', function(e) { if (e.target === this) closeDiscardModal(); });

// === 구매 팝업 ===
function parseGoldValue(str) {
  if (!str) return 0;
  str = String(str).replace(/,/g, '');
  if (str.endsWith('억')) return parseFloat(str.replace('억', '')) * 100000000;
  return parseFloat(str) || 0;
}
function formatGoldValue(num) {
  if (num >= 100000000) return (num / 100000000).toLocaleString(undefined, { maximumFractionDigits: 0 }) + '억';
  return num.toLocaleString();
}
function parseDiamondValue(str) { return parseInt(String(str || 0).replace(/,/g, ''), 10) || 0; }
function formatDiamondValue(num) { return num.toLocaleString(); }

let currentPurchaseItem = null;

function openPurchaseModal(itemId) {
  const t = i18n[currentLang] || i18n.ko;
  const session = getSession();
  if (!session) { alert(t.sp_login_required); switchPage('login'); return; }

  const item = shopItemsData.find(i => i.id === itemId);
  if (!item) return;
  currentPurchaseItem = item;

  const alreadyOwned = demoMyItems.some(i => i.nameKey === item.nameKey);

  const iconEl = document.getElementById('spItemIcon');
  iconEl.textContent = item.icon;
  iconEl.style.background = item.gradient;
  document.getElementById('spItemName').textContent = t[item.nameKey] || item.nameKey;
  document.getElementById('spItemDesc').textContent = t[item.descKey] || item.descKey;

  const cIcon = item.currency === 'gold' ? '🪙' : '💎';
  document.getElementById('spPriceValue').textContent = cIcon + ' ' + item.price.toLocaleString();

  const balance = item.currency === 'gold'
    ? parseGoldValue(session.gold || '1,250억')
    : parseDiamondValue(session.diamond || '300');
  const balDisplay = item.currency === 'gold'
    ? '🪙 ' + formatGoldValue(balance)
    : '💎 ' + formatDiamondValue(balance);
  document.getElementById('spBalanceValue').textContent = balDisplay;

  const errorEl = document.getElementById('spError');
  errorEl.style.display = 'none';
  document.getElementById('spSuccess').style.display = 'none';
  document.getElementById('spModalBody').style.display = '';
  const confirmBtn = document.getElementById('spConfirmBtn');
  confirmBtn.disabled = false;

  if (alreadyOwned) {
    errorEl.textContent = t.sp_already_owned;
    errorEl.style.display = '';
    confirmBtn.disabled = true;
  } else if (balance < item.price) {
    errorEl.textContent = item.currency === 'gold' ? t.sp_insufficient_gold : t.sp_insufficient_diamond;
    errorEl.style.display = '';
    confirmBtn.disabled = true;
  }

  const scrollW = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollW + 'px';
  document.getElementById('purchaseModal').classList.add('active');
}

function closePurchaseModal() {
  document.getElementById('purchaseModal').classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  currentPurchaseItem = null;
}

function confirmPurchase() {
  const t = i18n[currentLang] || i18n.ko;
  if (!currentPurchaseItem) return;
  const session = getSession();
  if (!session) return;
  const item = currentPurchaseItem;

  if (item.currency === 'gold') {
    let bal = parseGoldValue(session.gold || '1,250억');
    if (bal < item.price) return;
    session.gold = formatGoldValue(bal - item.price);
  } else {
    let bal = parseDiamondValue(session.diamond || '300');
    if (bal < item.price) return;
    session.diamond = formatDiamondValue(bal - item.price);
  }
  saveSession(session);

  const today = new Date();
  const dateStr = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');
  demoMyItems.push({
    id: item.id, category: item.category, icon: item.icon,
    name: t[item.nameKey] || item.nameKey, nameKey: item.nameKey,
    desc: t[item.descKey] || item.descKey, descKey: item.descKey,
    gradient: item.gradient, purchaseDate: dateStr, equipped: false
  });

  updateAuthUI();

  document.getElementById('spModalBody').style.display = 'none';
  document.getElementById('spSuccess').style.display = '';
  setTimeout(closePurchaseModal, 1500);
}

function openPackagePayModal(name, price) {
  document.getElementById('spPkgName').textContent = name;
  document.getElementById('spPkgPrice').textContent = price;
  const scrollW = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollW + 'px';
  document.getElementById('packagePayModal').classList.add('active');
}
function closePackagePayModal() {
  document.getElementById('packagePayModal').classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function confirmPackagePayment() {
  var name = document.getElementById('spPkgName').textContent;
  var price = document.getElementById('spPkgPrice').textContent;
  closePackagePayModal();
  alert('[' + name + '] ' + price + '\nPG사 결제 페이지로 이동합니다.');
}

document.getElementById('purchaseModal').addEventListener('click', function(e) { if (e.target === this) closePurchaseModal(); });
document.getElementById('packagePayModal').addEventListener('click', function(e) { if (e.target === this) closePackagePayModal(); });
document.getElementById('tdRegisterModal').addEventListener('click', function(e) { if (e.target === this) closeTdRegisterModal(); });

// 아이템 탭: 게임 재화(골드/다이아)로 구매
document.querySelectorAll('#shop-items .pkg-card').forEach(function(el) {
  el.addEventListener('click', function() {
    var id = parseInt(this.dataset.itemId, 10);
    if (id) openPurchaseModal(id);
  });
});
document.querySelectorAll('#shop-items .pkg-buy-btn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    var card = this.closest('.pkg-card');
    var id = parseInt(card.dataset.itemId, 10);
    if (id) openPurchaseModal(id);
  });
});

// 보석/추천 탭: PG사 결제
document.querySelectorAll('.pkg-buy-btn').forEach(function(btn) {
  if (btn.closest('#shop-items')) return; // 아이템 탭은 제외
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    var card = this.closest('.pkg-card');
    var name = card.querySelector('.pkg-name') ? card.querySelector('.pkg-name').textContent : '';
    var price = card.querySelector('.pkg-price') ? card.querySelector('.pkg-price').textContent : '';
    openPackagePayModal(name, price);
  });
});

// URL 파라미터로 페이지 자동 전환 (예: ?page=shop)
setTimeout(function() {
  var params = new URLSearchParams(window.location.search);
  var page = params.get('page');
  if (page) { switchPage(page); }
}, 100);

// 날짜 범위 초기화
initDateRange();
