// === iOS 핀치/더블탭 줌 차단 ===
(function() {
  // 핀치 줌 차단 (iOS Safari gesture 이벤트)
  document.addEventListener('gesturestart', function(e) { e.preventDefault(); }, { passive: false });
  document.addEventListener('gesturechange', function(e) { e.preventDefault(); }, { passive: false });
  document.addEventListener('gestureend', function(e) { e.preventDefault(); }, { passive: false });
  // 두 손가락 touchstart/touchmove 차단 (Chrome 핀치 줌)
  document.addEventListener('touchstart', function(e) {
    if (e.touches && e.touches.length > 1) e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchmove', function(e) {
    if (e.touches && e.touches.length > 1) e.preventDefault();
  }, { passive: false });
  // 더블탭 줌 차단
  var lastTouchEnd = 0;
  document.addEventListener('touchend', function(e) {
    var now = Date.now();
    if (now - lastTouchEnd <= 350) e.preventDefault();
    lastTouchEnd = now;
  }, { passive: false });
})();

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
    nav_holdem: '홀덤',
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
    tkd_desc: '이 티켓으로 참여할 수 있는 토너먼트입니다.',
    tkd_empty: '참여 가능한 토너먼트가 없습니다',
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
    tn_status_draft: '임시저장',
    tn_status_canceled: '취소',
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
    td_players_label: '남은 참가자',
    td_no_players: '아직 참가자가 없습니다',
    td_sec: '초',
    td_hands: '핸드 수',
    td_late_reg_suffix: '레벨 이전',
    td_table_size_suffix: '인',
    td_register: '등록',
    td_spectate: '관전',
    td_spectate_msg: '관전 모드 준비 중입니다',
    td_full: '정원이 가득 찼습니다',
    td_reg_title: '등록하기',
    tdr_payment_option: '결제 옵션',
    tdr_balance: '밸런스',
    tdr_registered: '등록이 완료되었습니다',
    td_sit_down: '착석',
    td_full: '등록 마감',
    td_cancel_register: '등록 취소',
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
    stat_winrate_pct: '승률',
    stat_total_profit: '총 상금',
    stat_best_streak: '최대 단일 상금',
    stat_podium: '입상 횟수',
    stat_avg_rank: '평균 순위',
    stat_avg_players: '평균 참가자 수',
    stat_total_hands: '총 플레이 핸드',
    stat_profit: '총 수익',
    stat_best_pot: '최고 획득 팟',
    stat_bb_100: 'bb/100',
    stat_vpip: 'VPIP',
    stat_pfr: 'PFR',
    stat_wins: '승리',
    stat_losses: '패배',
    stat_chips: '티켓',
    stat_level: '레벨',

    // 통계 페이지
    analytics_title: '통계',
    analytics_desc: '게임 기록과 성과를 한눈에 확인하세요',
    analytics_summary: '내 통계 요약',
    date_range_label: '조회 기간',
    date_range_btn: '조회',
    chart_holecard: '홀카드별 수익',

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
    skin_coral_bay: '코랄 베이',
    skin_coral_bay_desc: '산호가 비치는 따뜻한 만',
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
    my_profile: '회원정보 수정',
    my_history: '거래 내역',
    my_friends: '친구 관리',
    my_items: '내 아이템',
    my_settings: '설정',
    my_message: '보관함',
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
    mb_title: '보관함',
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
    del_acc_title: '계정삭제',
    del_acc_warning: '정말로 계정을 삭제하시겠습니까? 탈퇴 시 재가입이 불가합니다.',
    del_acc_helper: "확인하려면 'DELETE'를 정확히 입력하세요.",
    del_acc_cancel: '취소',
    del_acc_confirm: '계정삭제',
    limit_title: '일일 손실한도 설정',
    limit_desc: '일일 기준 손실한도를 3,500억 또는 500억으로 설정할 수 있습니다.',
    limit_apply: '설정',
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
    login_find_id: '계정 찾기',
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
    gs_th_lv: '레벨',
    gs_th_blind: '블라인드',
    gs_th_ante: 'ALL 앤티',
    gs_th_time: '시간',
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
  if (el && calState.start && calState.end) el.value = formatDateDot(calState.start) + ' ~ ' + formatDateDot(calState.end);
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

// === 로그인 필요 게임 진입 ===
function enterGame(page) {
  if (!getSession()) {
    alert('로그인이 필요합니다.');
    showLogin();
    return;
  }
  switchPage(page);
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
  var navPage = p;
  var navParentMap = { mailbox:'my', chat:'my', myitems:'my', transaction:'my', host:'my', ticket:'my', 'ticket-detail':'my', 'account-edit':'my', 'tn-history':'my', 'tn-history-detail':'my', 'tn-detail':'tournament', 'game-setup':'lobby' };
  if (!document.querySelector('.nav-link[data-page="' + navPage + '"]') && navParentMap[navPage]) { navPage = navParentMap[navPage]; }
  const navLink = document.querySelector('.nav-link[data-page="' + navPage + '"]');
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
  if (p === 'tournament') { tnRenderList(); switchTournamentTab('all'); tnApplyRoundVisibility(); tnStartCountdown(); }
  else { if (typeof tnStopCountdown === 'function') tnStopCountdown(); }
  if (p === 'holdem') { hdApplyRoundVisibility(); }
  if (p === 'tn-history') { tnRenderHistory(); }
  if (p === 'tn-history-detail') { thdRenderDetail(); }
  if (p === 'ticket') { tkRenderList(); }
  if (p === 'ticket-detail') { ticketDetailRender(); }
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
    mailbox: '보관함', chat: '채팅', myitems: '내 아이템',
    transaction: '거래 내역', host: '호스트',
    ticket: '티켓', 'ticket-detail': '티켓 상세', tournament: '토너먼트', holdem: '홀덤',
    'tn-history': '히스토리', 'tn-detail': '토너먼트',
    'game-setup': '사용자 게임', login: '로그인',
    'account-edit': '회원정보 수정',
    terms: '이용약관', privacy: '개인정보처리방침',
    youth: '청소년 보호정책', rating: '게임등급분류',
    company: '회사소개', faq: '자주묻는질문', contact: '문의하기'
  };
  var parentMap = {
    mailbox: 'my', chat: 'mailbox', myitems: 'my', transaction: 'my',
    host: 'my', ticket: 'my', 'ticket-detail': 'ticket', 'account-edit': 'my',
    tournament: 'lobby', 'tn-history': 'my',
    'tn-detail': 'tournament', 'game-setup': 'lobby',
    terms: 'lobby', privacy: 'lobby', youth: 'lobby',
    rating: 'lobby', company: 'lobby', faq: 'lobby', contact: 'lobby'
  };
  if (titles[page]) {
    logo.style.display = 'none';
    title.style.display = '';
    var isSub = mainTabs.indexOf(page) === -1;
    var titleHtml;
    if (isSub) {
      var parent = parentMap[page] || 'lobby';
      titleHtml = '<svg class="m-nav-back" onclick="switchPage(\'' + parent + '\')" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg><span class="m-nav-title-text">' + titles[page] + '</span>';
    } else {
      titleHtml = '<span class="m-nav-title-text">' + titles[page] + '</span>';
    }
    if (page === 'tournament') {
      var activeRound = '1';
      var activeBtn = document.querySelector('.tn-round-btn.active');
      if (activeBtn) activeRound = activeBtn.getAttribute('data-tn-round') || '1';
      titleHtml += '<span class="m-nav-round-toggle" role="tablist" aria-label="토너먼트 회차">' +
        '<button class="m-nav-round-btn tn-round-btn' + (activeRound === '1' ? ' active' : '') + '" data-tn-round="1" onclick="event.stopPropagation();switchTournamentRound(\'1\')">1차</button>' +
        '<button class="m-nav-round-btn tn-round-btn' + (activeRound === '2' ? ' active' : '') + '" data-tn-round="2" onclick="event.stopPropagation();switchTournamentRound(\'2\')">2차</button>' +
        '</span>';
    } else if (page === 'holdem') {
      titleHtml += '<span class="m-nav-round-toggle" role="tablist" aria-label="홀덤 회차">' +
        '<button class="m-nav-round-btn tn-round-btn hd-round-btn' + (currentHdRound === '1' ? ' active' : '') + '" data-hd-round="1" onclick="event.stopPropagation();switchHoldemRound(\'1\')">1차</button>' +
        '<button class="m-nav-round-btn tn-round-btn hd-round-btn' + (currentHdRound === '2' ? ' active' : '') + '" data-hd-round="2" onclick="event.stopPropagation();switchHoldemRound(\'2\')">2차</button>' +
        '</span>';
    }
    title.innerHTML = titleHtml;
  } else {
    logo.style.display = '';
    title.style.display = 'none';
  }
  // 법적고지 페이지 및 토너먼트 상세에서 골드/다이아/메뉴 숨김 + 비로그인 시 숨김
  var legalPages = ['terms','privacy','youth','rating','company','faq','contact'];
  var isLegal = legalPages.indexOf(page) !== -1;
  var isLoggedIn = !!getSession();
  var hideCurrency = isLegal || page === 'tn-detail' || !isLoggedIn;
  var hideMenu = (page === 'tn-detail') || !isLoggedIn;
  var mGoldWrap = document.getElementById('mNavGoldWrap');
  var mDiaWrap = document.getElementById('mNavDiamondWrap');
  var mMenu = document.getElementById('mNavMenu');
  if (mGoldWrap) mGoldWrap.style.display = hideCurrency ? 'none' : '';
  if (mDiaWrap) mDiaWrap.style.display = hideCurrency ? 'none' : '';
  if (mMenu) mMenu.style.display = hideMenu ? 'none' : '';
  // 토너먼트 상세: 제목을 토너먼트명으로 변경
  if (page === 'tn-detail' && currentTnDetailId) {
    var tnItem = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
    if (tnItem && title) {
      var parent = parentMap[page] || 'tournament';
      title.innerHTML = '<svg class="m-nav-back" onclick="switchPage(\'' + parent + '\')" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg><span class="m-nav-title-text">' + tnItem.name + '</span>';
    }
  }
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
    chatWrap.style.height = hidden ? 'calc(100dvh - 52px)' : '100dvh';
  }
}

// === 로비 아바타 캐러셀 자동 스크롤 ===
(function() {
  var carousel = document.getElementById('lobbyCarousel');
  if (!carousel) return;
  var items = carousel.children;
  var idx = 0;
  var dotsEl = document.getElementById('lobbyCarouselDots');
  var totalPages = items.length - 2; // 6 items, 3 visible = 4 pages (0,1,2,3)
  if (dotsEl) {
    for (var d = 0; d < totalPages; d++) {
      var dot = document.createElement('div');
      dot.className = 'lobby-carousel-dot' + (d === 0 ? ' active' : '');
      dotsEl.appendChild(dot);
    }
  }
  function updateDots() {
    if (!dotsEl) return;
    var dots = dotsEl.children;
    for (var d = 0; d < dots.length; d++) {
      dots[d].classList.toggle('active', d === idx);
    }
  }
  function scroll() {
    if (window.innerWidth > 768) { carousel.style.transform = ''; idx = 0; updateDots(); return; }
    var max = items.length - 3;
    idx++;
    if (idx > max) idx = 0;
    var gap = 16;
    var itemW = items[0].offsetWidth + gap;
    carousel.style.transform = 'translateX(-' + (idx * itemW) + 'px)';
    updateDots();
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
  ['loginSection','findAccountSection','findAccountPassSection','findAccountCompleteSection','findAccountVerifySection','findAccountResetSection','findAccountDoneSection','signupStep2','signupStep3','signupStep4','signupStep5'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}
function showLogin() {
  hideAllAuthSections();
  const loginSec = document.getElementById('loginSection');
  if (loginSec) loginSec.style.display = '';
  clearLoginErrors();
  mSyncNavTitle('login');
}
function showFindAccount() {
  hideAllAuthSections();
  document.getElementById('findAccountSection').style.display = '';
  // 모바일 nav 타이틀 변경
  var title = document.getElementById('mNavTitle');
  var logo = document.getElementById('mNavLogo');
  if (title && logo) {
    logo.style.display = 'none';
    title.style.display = '';
    title.innerHTML = '<svg class="m-nav-back" onclick="showLogin()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg><span class="m-nav-title-text">계정 찾기</span>';
  }
  // 체크 초기화
  document.querySelectorAll('.find-account-check').forEach(function(el) { el.classList.remove('checked'); });
  updateFindAccountBtn();
}
var currentTermsType = null;

var termsContent = {
  service: '<h4>제1조 (목적)</h4><p>이 약관은 포커룰루(이하 "회사")가 제공하는 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>' +
    '<h4>제2조 (정의)</h4><p>① "서비스"란 회사가 제공하는 모든 온라인 게임 및 이에 부수하는 일체의 서비스를 의미합니다.<br>② "이용자"란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.<br>③ "회원"이란 회사에 개인정보를 제공하여 회원 등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 서비스를 이용할 수 있는 자를 말합니다.</p>' +
    '<h4>제3조 (약관의 효력 및 변경)</h4><p>① 이 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.<br>② 회사는 합리적인 사유가 발생할 경우 관련 법령에 위배되지 않는 범위 내에서 이 약관을 변경할 수 있으며, 약관이 변경된 경우에는 지체 없이 이를 공지합니다.</p>' +
    '<h4>제4조 (서비스의 제공)</h4><p>① 회사는 다음과 같은 서비스를 제공합니다.<br>- 온라인 포커 게임 서비스<br>- 토너먼트 및 이벤트 서비스<br>- 커뮤니티 및 소셜 기능<br>- 기타 회사가 정하는 서비스</p>' +
    '<h4>제5조 (서비스의 중단)</h4><p>① 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.<br>② 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다.</p>' +
    '<h4>제6조 (회원가입)</h4><p>① 이용자는 회사가 정한 가입 양식에 따라 회원 정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.<br>② 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</p>' +
    '<h4>제7조 (회원 탈퇴 및 자격 상실)</h4><p>① 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며, 회사는 즉시 회원 탈퇴를 처리합니다.<br>② 회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원 자격을 제한 및 정지시킬 수 있습니다.<br>- 가입 신청 시 허위 내용을 등록한 경우<br>- 다른 사람의 서비스 이용을 방해하거나 정보를 도용한 경우<br>- 서비스를 이용하여 법령 또는 이 약관이 금지하는 행위를 하는 경우</p>' +
    '<h4>제8조 (개인정보 보호)</h4><p>회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 이를 준수합니다. 자세한 사항은 개인정보처리방침을 참고하시기 바랍니다.</p>',
  privacy: '<h4>제1조 (개인정보의 수집 및 이용 목적)</h4><p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br><br>① 회원 가입 및 관리: 회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원 자격 유지·관리, 서비스 부정 이용 방지, 각종 고지·통지<br>② 서비스 제공: 게임 서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공, 본인 인증</p>' +
    '<h4>제2조 (수집하는 개인정보의 항목)</h4><p>회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.<br><br>① 필수 항목: 이름, 생년월일, 성별, 휴대폰 번호, 이메일 주소, 아이디, 비밀번호<br>② 선택 항목: 프로필 사진, 닉네임<br>③ 서비스 이용 과정에서 자동 수집: IP 주소, 쿠키, 접속 로그, 기기 정보, 서비스 이용 기록</p>' +
    '<h4>제3조 (개인정보의 보유 및 이용 기간)</h4><p>① 회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.<br>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br>- 회원 가입 및 관리: 회원 탈퇴 시까지<br>- 전자상거래 관련 기록: 5년<br>- 접속에 관한 기록: 3개월</p>' +
    '<h4>제4조 (개인정보의 제3자 제공)</h4><p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.<br><br>① 이용자가 사전에 동의한 경우<br>② 법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>' +
    '<h4>제5조 (개인정보의 파기)</h4><p>① 회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.<br>② 파기의 절차 및 방법은 다음과 같습니다.<br>- 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.<br>- 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p>' +
    '<h4>제6조 (정보주체의 권리·의무)</h4><p>① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.<br>- 개인정보 열람 요구<br>- 오류 등이 있을 경우 정정 요구<br>- 삭제 요구<br>- 처리 정지 요구</p>' +
    '<h4>제7조 (개인정보 보호책임자)</h4><p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.<br><br>개인정보 보호책임자: 포커룰루 보안팀<br>연락처: privacy@pokerlulu.com</p>'
};

function openTermsPopup(type) {
  currentTermsType = type;
  var modal = document.getElementById('termsModal');
  var title = document.getElementById('termsModalTitle');
  var body = document.getElementById('termsModalBody');
  var btn = document.getElementById('termsAgreeBtn');
  title.textContent = type === 'service' ? '서비스 이용약관' : '개인정보 수집 및 이용 동의';
  body.innerHTML = termsContent[type];
  body.scrollTop = 0;
  btn.classList.remove('disabled');
  modal.classList.add('active');
}

function closeTermsPopup() {
  document.getElementById('termsModal').classList.remove('active');
  currentTermsType = null;
}

function checkTermsScroll() {
  var body = document.getElementById('termsModalBody');
  var btn = document.getElementById('termsAgreeBtn');
  if (body.scrollTop + body.clientHeight >= body.scrollHeight - 10) {
    btn.classList.remove('disabled');
  }
}

function agreeTerms() {
  var btn = document.getElementById('termsAgreeBtn');
  if (btn.classList.contains('disabled')) return;
  var checkId = currentTermsType === 'service' ? 'findTermService' : 'findTermPrivacy';
  document.getElementById(checkId).classList.add('checked');
  updateFindAccountBtn();
  closeTermsPopup();
}

function toggleFindTerm(el) {
  el.classList.toggle('checked');
  updateFindAccountBtn();
}
function updateFindAccountBtn() {
  var checks = document.querySelectorAll('.find-account-check');
  var allChecked = true;
  checks.forEach(function(c) { if (!c.classList.contains('checked')) allChecked = false; });
  var btn = document.getElementById('findAccountBtn');
  if (allChecked) { btn.classList.remove('disabled'); } else { btn.classList.add('disabled'); }
}
function submitFindAccount() {
  var btn = document.getElementById('findAccountBtn');
  if (btn.classList.contains('disabled')) return;
  showFindAccountPass();
}
function showFindAccountPass() {
  hideAllAuthSections();
  document.getElementById('findAccountPassSection').style.display = '';
  // 모바일 nav 타이틀 변경 (뒤로가기는 약관 동의 페이지로)
  var title = document.getElementById('mNavTitle');
  var logo = document.getElementById('mNavLogo');
  if (title && logo) {
    logo.style.display = 'none';
    title.style.display = '';
    title.innerHTML = '<svg class="m-nav-back" onclick="showFindAccount()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg><span class="m-nav-title-text">계정 찾기</span>';
  }
}
function startPassAuth() {
  // PASS 앱 이동 확인 알럿
  var ok = confirm('PASS 앱으로 이동합니다.\n인증 완료 후 자동으로 돌아옵니다.\n\n계속하시겠습니까?');
  if (!ok) return;
  // 확인 시 인증 성공 가정 - 완료 페이지로 이동
  showFindAccountComplete();
}
function showFindAccountComplete() {
  hideAllAuthSections();
  document.getElementById('findAccountCompleteSection').style.display = '';
  var title = document.getElementById('mNavTitle');
  var logo = document.getElementById('mNavLogo');
  if (title && logo) {
    logo.style.display = 'none';
    title.style.display = '';
    title.innerHTML = '<svg class="m-nav-back" onclick="showFindAccountPass()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg><span class="m-nav-title-text">계정 찾기</span>';
  }
  // 기본값: 이메일 variant
  setFindCompleteVariant('email');
}

function setFindCompleteVariant(variant) {
  var header = document.getElementById('findCompleteHeader');
  var body = document.getElementById('findCompleteBody');
  var actions = document.getElementById('findCompleteActions');
  if (!header || !body || !actions) return;

  // 토글 버튼 active 상태 업데이트
  document.querySelectorAll('.find-account-variant-toggle .modal-link-btn').forEach(function(b) {
    if (b.getAttribute('data-variant') === variant) b.classList.add('active');
    else b.classList.remove('active');
  });

  if (variant === 'email') {
    header.innerHTML = '<h3>본인 인증이<br>완료되었습니다</h3>' +
      '<p>회원 가입에 사용한 이메일 계정입니다.</p>';
    body.innerHTML = '<div class="find-account-term-item pass-auth-item pass-auth-stack">' +
      '<span class="pass-auth-icon">' +
      '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="22" cy="22" r="22" fill="#22C55E"/>' +
      '<path d="M13 22l6 6 12-12" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
      '</svg>' +
      '</span>' +
      '<span class="pass-auth-label">연결된 이메일</span>' +
      '<span class="pass-auth-email">k***@gmail.com</span>' +
      '</div>';
    actions.innerHTML = '<button class="find-account-cancel-btn" onclick="showLogin()">로그인</button>' +
      '<button class="find-account-confirm-btn" onclick="showResetPassword()">비밀번호 재설정</button>';
  } else if (variant === 'none') {
    header.innerHTML = '<h3>가입된 계정이<br>없습니다</h3>' +
      '<p>인증된 정보로 가입된 계정을 찾을 수 없습니다.</p>';
    body.innerHTML = '<div class="find-account-term-item pass-auth-item pass-auth-stack">' +
      '<span class="pass-auth-icon">' +
      '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="22" cy="22" r="22" fill="#6b7280"/>' +
      '<path d="M22 12v13" stroke="#fff" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="22" cy="31" r="2" fill="#fff"/>' +
      '</svg>' +
      '</span>' +
      '<span class="pass-auth-label">해당 정보로 가입된 계정이 없어요</span>' +
      '<span class="pass-auth-email" style="font-size:13px;font-weight:500;color:var(--text-secondary);">회원가입 후 서비스를 이용해 주세요</span>' +
      '</div>';
    actions.innerHTML = '<button class="find-account-confirm-btn" onclick="showSignup()">회원가입</button>';
  } else if (variant === 'social1') {
    header.innerHTML = '<h3>본인 인증이<br>완료되었습니다</h3>' +
      '<p>소셜 계정으로 가입된 이력이 있습니다.</p>';
    body.innerHTML = '<div class="find-account-term-item pass-auth-item pass-auth-stack">' +
      '<span class="pass-auth-icon" style="width:44px;height:44px;background:#fff;border-radius:11px;">' +
      '<img loading="lazy" src="images/google.svg" alt="Google" width="28" height="28">' +
      '</span>' +
      '<span class="pass-auth-label">연결된 소셜 계정</span>' +
      '<span class="pass-auth-email">Google · k***@gmail.com</span>' +
      '</div>';
    actions.innerHTML = '<button class="find-account-confirm-btn" onclick="showLogin()">로그인</button>';
  } else if (variant === 'social2') {
    header.innerHTML = '<h3>본인 인증이<br>완료되었습니다</h3>' +
      '<p>소셜 계정으로 가입된 이력이 있습니다.</p>';
    body.innerHTML = '<div class="find-account-term-item pass-auth-item pass-auth-stack">' +
      '<span class="pass-auth-icon" style="width:44px;height:44px;background:#03C75A;border-radius:11px;">' +
      '<img loading="lazy" src="images/naver.svg" alt="Naver" width="28" height="28">' +
      '</span>' +
      '<span class="pass-auth-label">연결된 소셜 계정</span>' +
      '<span class="pass-auth-email">Naver · k***@naver.com</span>' +
      '</div>';
    actions.innerHTML = '<button class="find-account-confirm-btn" onclick="showLogin()">로그인</button>';
  }
}
function showResetPassword() {
  showFindAccountVerify();
}
var verifyTimerInterval = null;
var verifyResendCount = 0;
function showFindAccountVerify() {
  hideAllAuthSections();
  document.getElementById('findAccountVerifySection').style.display = '';
  var title = document.getElementById('mNavTitle');
  var logo = document.getElementById('mNavLogo');
  if (title && logo) {
    logo.style.display = 'none';
    title.style.display = '';
    title.innerHTML = '<svg class="m-nav-back" onclick="showFindAccountComplete()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg><span class="m-nav-title-text">이메일 인증</span>';
  }
  // 코드 입력 초기화
  document.querySelectorAll('.verify-code-box').forEach(function(el) { el.value = ''; el.classList.remove('filled'); });
  // 재전송 횟수 초기화
  verifyResendCount = 0;
  var resendLink = document.getElementById('verifyResendLink');
  if (resendLink) { resendLink.textContent = '재전송 (0/3)'; resendLink.classList.remove('disabled'); }
  // 타이머 시작
  startVerifyTimer(5 * 60);
  // 첫번째 박스 포커스
  setTimeout(function() {
    var first = document.querySelector('.verify-code-box');
    if (first) first.focus();
  }, 100);
}
function startVerifyTimer(seconds) {
  if (verifyTimerInterval) clearInterval(verifyTimerInterval);
  var remaining = seconds;
  var timerEl = document.getElementById('verifyTimer');
  function render() {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;
    if (timerEl) timerEl.textContent = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  }
  render();
  verifyTimerInterval = setInterval(function() {
    remaining--;
    if (remaining < 0) {
      clearInterval(verifyTimerInterval);
      if (timerEl) timerEl.textContent = '00:00';
      return;
    }
    render();
  }, 1000);
}
function handleCodeInput(el, idx) {
  el.value = el.value.replace(/[^0-9]/g, '').slice(0, 1);
  if (el.value) {
    el.classList.add('filled');
    var next = document.querySelectorAll('.verify-code-box')[idx + 1];
    if (next) next.focus();
  } else {
    el.classList.remove('filled');
  }
  // 6자리 모두 입력 시 자동 진행
  var boxes = document.querySelectorAll('.verify-code-box');
  var code = Array.from(boxes).map(function(b) { return b.value; }).join('');
  if (code.length === 6) {
    if (verifyTimerInterval) clearInterval(verifyTimerInterval);
    setTimeout(function() {
      showResetPasswordForm();
    }, 200);
  }
}
function handleCodeKey(e, idx) {
  if (e.key === 'Backspace' && !e.target.value && idx > 0) {
    var prev = document.querySelectorAll('.verify-code-box')[idx - 1];
    if (prev) { prev.focus(); prev.value = ''; prev.classList.remove('filled'); }
  }
}
function resendVerifyCode() {
  if (verifyResendCount >= 3) return;
  verifyResendCount++;
  var resendLink = document.getElementById('verifyResendLink');
  if (resendLink) {
    resendLink.textContent = '재전송 (' + verifyResendCount + '/3)';
    if (verifyResendCount >= 3) resendLink.classList.add('disabled');
  }
  // 타이머 재시작
  startVerifyTimer(5 * 60);
  // 입력 박스 초기화
  document.querySelectorAll('.verify-code-box').forEach(function(el) { el.value = ''; el.classList.remove('filled'); });
  var first = document.querySelector('.verify-code-box');
  if (first) first.focus();
}
function showResetPasswordForm() {
  showFindAccountReset();
}
var PW_EYE_OPEN_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>';
var PW_EYE_OFF_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
function togglePwVisibility(inputId, btn) {
  var input = document.getElementById(inputId);
  if (!input) return;
  var isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.innerHTML = isHidden ? PW_EYE_OFF_SVG : PW_EYE_OPEN_SVG;
}
function showFindAccountReset() {
  hideAllAuthSections();
  document.getElementById('findAccountResetSection').style.display = '';
  var title = document.getElementById('mNavTitle');
  var logo = document.getElementById('mNavLogo');
  if (title && logo) {
    logo.style.display = 'none';
    title.style.display = '';
    title.innerHTML = '<svg class="m-nav-back" onclick="showFindAccountVerify()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg><span class="m-nav-title-text">비밀번호 재설정</span>';
  }
  // 입력 초기화
  var newPw = document.getElementById('resetNewPw');
  var confirmPw = document.getElementById('resetConfirmPw');
  if (newPw) { newPw.value = ''; newPw.type = 'password'; }
  if (confirmPw) { confirmPw.value = ''; confirmPw.type = 'password'; }
  // 눈 아이콘 초기화
  var eye1 = document.getElementById('resetNewPwEye');
  var eye2 = document.getElementById('resetConfirmPwEye');
  if (eye1) eye1.innerHTML = PW_EYE_OPEN_SVG;
  if (eye2) eye2.innerHTML = PW_EYE_OPEN_SVG;
  // 규칙 체크리스트 초기화
  ['pwLen','pwUpper','pwNum','pwSpec'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('met');
  });
  // 불일치 메시지 숨김
  var mismatchMsg = document.getElementById('pwMismatchMsg');
  if (mismatchMsg) mismatchMsg.style.display = 'none';
  var btn = document.getElementById('resetPwSubmit');
  if (btn) btn.classList.add('disabled');
}
function validateResetPw() {
  var pw = document.getElementById('resetNewPw').value;
  var confirmPw = document.getElementById('resetConfirmPw').value;
  var lenOk = pw.length >= 8;
  var upperOk = /[A-Z]/.test(pw);
  var numOk = /[0-9]/.test(pw);
  var specOk = /[!@#$%^&*]/.test(pw);
  document.getElementById('pwLen').classList.toggle('met', lenOk);
  document.getElementById('pwUpper').classList.toggle('met', upperOk);
  document.getElementById('pwNum').classList.toggle('met', numOk);
  document.getElementById('pwSpec').classList.toggle('met', specOk);
  // 비밀번호 불일치 안내
  var mismatchMsg = document.getElementById('pwMismatchMsg');
  var isMismatch = confirmPw.length > 0 && pw !== confirmPw;
  if (mismatchMsg) mismatchMsg.style.display = isMismatch ? '' : 'none';
  var allValid = lenOk && upperOk && numOk && specOk && confirmPw.length > 0 && pw === confirmPw;
  var btn = document.getElementById('resetPwSubmit');
  if (allValid) btn.classList.remove('disabled');
  else btn.classList.add('disabled');
}
function submitResetPw() {
  var btn = document.getElementById('resetPwSubmit');
  if (btn.classList.contains('disabled')) return;
  showFindAccountDone();
}
function showFindAccountDone() {
  hideAllAuthSections();
  document.getElementById('findAccountDoneSection').style.display = '';
  var title = document.getElementById('mNavTitle');
  var logo = document.getElementById('mNavLogo');
  if (title && logo) {
    logo.style.display = 'none';
    title.style.display = '';
    title.innerHTML = '<span class="m-nav-title-text">비밀번호 재설정</span>';
  }
}
function showSignup() {
  hideAllAuthSections();
  showSignupStep2();
  clearLoginErrors();
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
  // PC 골드/다이아 래퍼
  var pcGoldWrap = goldEl ? goldEl.closest('.nav-coins') : null;
  var pcDiaWrap = diamondEl ? diamondEl.closest('.nav-coins') : null;
  if (session) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (goldEl) goldEl.textContent = session.gold || '1,250억';
    if (diamondEl) diamondEl.textContent = session.diamond || '300';
    if (pcGoldWrap) pcGoldWrap.style.display = '';
    if (pcDiaWrap) pcDiaWrap.style.display = '';
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
    if (pcGoldWrap) pcGoldWrap.style.display = 'none';
    if (pcDiaWrap) pcDiaWrap.style.display = 'none';
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
  if (nicknameEl) nicknameEl.textContent = session.nickname;
  if (emailEl) emailEl.textContent = session.email || session.id;
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
  if (typeof hdHandleResize === 'function') hdHandleResize();
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

// === DELETE ACCOUNT MODAL (V2) ===
function openDeleteAccountModal() {
  closeAvatarModal();
  const input = document.getElementById('deleteAccountInput');
  const btn = document.getElementById('deleteAccountConfirmBtn');
  if (input) input.value = '';
  if (btn) btn.disabled = true;
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.getElementById('deleteAccountModal').classList.add('active');
  if (input) setTimeout(function(){ input.focus(); }, 100);
}

function closeDeleteAccountModal() {
  document.getElementById('deleteAccountModal').classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function confirmDeleteAccount() {
  const input = document.getElementById('deleteAccountInput');
  if (!input || input.value.trim().toUpperCase() !== 'DELETE') return;
  closeDeleteAccountModal();
  if (typeof handleLogout === 'function') handleLogout();
}

(function(){
  document.addEventListener('input', function(e){
    if (e.target && e.target.id === 'deleteAccountInput') {
      const btn = document.getElementById('deleteAccountConfirmBtn');
      if (btn) btn.disabled = e.target.value.trim().toUpperCase() !== 'DELETE';
    }
  });
})();

// === LIMIT SETTING MODAL ===
function openLimitSettingModal() {
  closeAvatarModal();
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.getElementById('limitSettingModal').classList.add('active');
}

function closeLimitSettingModal() {
  document.getElementById('limitSettingModal').classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function selectLimitOption(btn) {
  const opts = document.querySelectorAll('#limitOptions .gs-tab');
  opts.forEach(function(o){ o.classList.remove('active'); });
  btn.classList.add('active');
}

function applyLimitSetting() {
  closeLimitSettingModal();
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
const tnGroups = [
  { text:'Deep Stack 챔피언십', theme:'green',  ids:[1, 5, 13, 14, 17] },
  { text:'주말 메인 이벤트',     theme:'purple', ids:[7, 9, 12, 16]     },
  { text:'터보 스프린트',        theme:'white',  ids:[2, 3, 8, 15, 19]  },
  { text:'Daily 홀덤',          theme:'gold',   ids:[6, 11, 20]        },
  { text:'바운티 헌터',          theme:'red',    ids:[4, 10, 18]        },
];
const demoTournaments = [
  { id:1,  event:'A', name:'POKER LULU Weekly Championship', status:'registering', startType:'2026-05-02 19:00', fee:'free', players:3, maxPlayers:10, prize:'100,000,000G', registered:true, requiredTicketSeries:'Series A', details:{ blindLevel:1, unique:3, reentry:0, startChips:'10000', tableSize:8, rebuyCount:0, timebankSec:10, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'불가', lateRegLevel:8, blindMin:10, breakMin:5 } },
  { id:2,  event:'A', name:'Friday Night Holdem', status:'registering', startType:'2026-05-03 21:00', fee:'free', players:1, maxPlayers:6, prize:'-', registered:false, requiredTicketSeries:'Series A', details:{ blindLevel:1, unique:1, reentry:0, startChips:'5000', tableSize:6, rebuyCount:0, timebankSec:10, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'허용', lateRegLevel:6, blindMin:8, breakMin:4 } },
  { id:3,  event:'A', name:'POKER LULU User Custom Game', status:'registering', startType:'2026-05-04 20:00', fee:'free', players:0, maxPlayers:8, prize:'-', registered:false, requiredTicketSeries:'Series B', details:{ blindLevel:1, unique:0, reentry:0, startChips:'10000', tableSize:8, rebuyCount:0, timebankSec:10, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'허용', lateRegLevel:8, blindMin:10, breakMin:5 } },
  { id:4,  event:'A', name:'High Roller Tournament', status:'lateReg', startType:'2025-02-24 20:00', fee:'10,000G', players:8, maxPlayers:10, prize:'1,000,000G', registered:true, requiredTicketSeries:'Series B', details:{ blindLevel:5, unique:8, reentry:2, startChips:'50000', tableSize:9, rebuyCount:3, timebankSec:30, extraTimeSec:10, extraTimeHands:15, actionTimeSec:20, anteRate:'0.2BB', anteType:'All', cancelReg:'불가', lateRegLevel:5, blindMin:12, breakMin:5 } },
  { id:5,  event:'A', name:'Beginner Friendly Open', status:'registering', startType:'2026-05-05 18:00', fee:'free', players:12, maxPlayers:12, prize:'100,000G', registered:false, requiredTicketSeries:'Series C', details:{ blindLevel:1, unique:5, reentry:0, startChips:'8000', tableSize:9, rebuyCount:0, timebankSec:15, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'허용', lateRegLevel:8, blindMin:10, breakMin:5 } },
  { id:6,  event:'B', name:'POKER LULU Daily Freeroll', status:'registering', startType:'2025-02-25 12:00', fee:'free', players:12, maxPlayers:50, prize:'200,000G', registered:true, requiredTicketSeries:'Series C', details:{ blindLevel:1, unique:12, reentry:0, startChips:'10000', tableSize:9, rebuyCount:0, timebankSec:10, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'불가', lateRegLevel:10, blindMin:10, breakMin:5 } },
  { id:7,  event:'B', name:'VIP Invitational', status:'ongoing', startType:'2025-02-24 19:00', fee:'50,000G', players:6, maxPlayers:6, prize:'500,000,000G', registered:false, details:{ blindLevel:7, unique:6, reentry:3, startChips:'100000', tableSize:6, rebuyCount:5, timebankSec:60, extraTimeSec:15, extraTimeHands:20, actionTimeSec:25, anteRate:'0.5BB', anteType:'All', cancelReg:'불가', lateRegLevel:4, blindMin:15, breakMin:5 } },
  { id:8,  event:'B', name:'POKER LULU User Custom Game', status:'registering', startType:'2026-05-06 19:30', fee:'free', players:2, maxPlayers:6, prize:'-', registered:false, requiredTicketSeries:'Series D' },
  { id:9,  event:'B', name:'Sunday Special MTT', status:'finished', startType:'2025-02-23 18:00', fee:'5,000G', players:20, maxPlayers:20, prize:'2,000,000G', registered:true, requiredTicketSeries:'Series A' },
  { id:10, event:'B', name:'Turbo Knockout Bounty', status:'registering', startType:'2025-02-26 21:00', fee:'20,000G', players:0, maxPlayers:16, prize:'300,000,000G', registered:false, requiredTicketSeries:'Satellite A' },
  { id:11, event:'A', name:'Saturday Night Showdown', status:'finished', startType:'2025-02-22 20:00', fee:'10,000G', players:16, maxPlayers:16, prize:'1,500,000G', registered:true, requiredTicketSeries:'Series A' },
  { id:12, event:'B', name:'POKER LULU Grand Prix #3', status:'finished', startType:'2025-02-20 19:00', fee:'25,000G', players:32, maxPlayers:32, prize:'1,000,000,000G', registered:false, requiredTicketSeries:'Series B' },
  { id:13, event:'A', name:'Mini Freeroll Championship', status:'finished', startType:'2025-02-19 12:00', fee:'free', players:50, maxPlayers:50, prize:'500,000G', registered:true, requiredTicketSeries:'Series B' },
  { id:14, event:'B', name:'High Stakes Deep Stack', status:'finished', startType:'2025-02-18 21:00', fee:'50,000G', players:10, maxPlayers:10, prize:'300,000,000G', registered:false, requiredTicketSeries:'Series C' },
  { id:15, event:'A', name:'Weekday Express Turbo', status:'finished', startType:'2025-02-17 18:00', fee:'3,000G', players:24, maxPlayers:24, prize:'600,000G', registered:true, requiredTicketSeries:'Series D' },
  { id:16, event:'B', name:'POKER LULU Monthly Final', status:'finished', startType:'2025-02-15 19:00', fee:'100,000G', players:64, maxPlayers:64, prize:'1,000,000,000,000G', registered:false, requiredTicketSeries:'Satellite A' },
  { id:17, event:'C', name:'Spring Freeroll Series', status:'registering', startType:'2025-03-01 14:00', fee:'free', players:8, maxPlayers:30, prize:'300,000G', registered:false, requiredTicketSeries:'Satellite B', details:{ blindLevel:1, unique:8, reentry:0, startChips:'8000', tableSize:9, rebuyCount:0, timebankSec:10, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'허용', lateRegLevel:8, blindMin:10, breakMin:5 } },
  { id:18, event:'C', name:'Midnight Madness', status:'ongoing', startType:'2025-02-28 23:00', fee:'5,000G', players:14, maxPlayers:20, prize:'1,500,000G', registered:true, details:{ blindLevel:4, unique:14, reentry:1, startChips:'20000', tableSize:8, rebuyCount:1, timebankSec:15, extraTimeSec:5, extraTimeHands:10, actionTimeSec:20, anteRate:'0.2BB', anteType:'All', cancelReg:'불가', lateRegLevel:6, blindMin:12, breakMin:5 } },
  { id:19, event:'C', name:'Rookie Challenge Cup', status:'registering', startType:'2026-05-07 14:00', fee:'free', players:2, maxPlayers:16, prize:'150,000G', registered:false, requiredTicketSeries:'Satellite D', details:{ blindLevel:1, unique:2, reentry:0, startChips:'5000', tableSize:8, rebuyCount:0, timebankSec:10, extraTimeSec:5, extraTimeHands:10, actionTimeSec:15, anteRate:'0.1BB', anteType:'All', cancelReg:'허용', lateRegLevel:8, blindMin:8, breakMin:4 } },
  { id:20, event:'C', name:'Diamond Bounty Hunter', status:'finished', startType:'2025-02-25 20:00', fee:'30,000G', players:24, maxPlayers:24, prize:'200,000,000G', registered:true, requiredTicketSeries:'Satellite C' },
  { id:21, event:'A', name:'My Custom Tournament', status:'draft', startType:'2026-05-08 20:00', fee:'free', players:0, maxPlayers:8, prize:'-', registered:true },
  { id:22, event:'B', name:'Weekend Cash Battle', status:'draft', startType:'2025-03-08 19:00', fee:'5,000G', players:0, maxPlayers:12, prize:'500,000G', registered:true },
  { id:23, event:'A', name:'Postponed Spring Event', status:'canceled', startType:'2025-02-28 20:00', fee:'10,000G', players:0, maxPlayers:20, prize:'1,000,000G', registered:true, requiredTicketSeries:'Satellite D' },
];

function switchTournamentRound(round) {
  document.querySelectorAll('.tn-round-btn').forEach(function(b) {
    if (b.getAttribute('data-tn-round') === round) b.classList.add('active');
    else b.classList.remove('active');
  });
  tnApplyRoundVisibility();
}

function tnApplyRoundVisibility() {
  var activeBtn = document.querySelector('.tn-round-btn.active');
  var round = activeBtn ? activeBtn.getAttribute('data-tn-round') : '1';
  var page = document.getElementById('page-tournament');
  if (page) page.classList.toggle('tn-hide-tabs', round !== '2');
  document.querySelectorAll('#page-tournament .tn-tabs').forEach(function(el) {
    el.style.display = (round === '2') ? '' : 'none';
  });
  if (round !== '2') {
    var allTab = document.querySelector('.tn-tab[data-tn-tab="all"]');
    document.querySelectorAll('.tn-tab[data-tn-tab^="event"].active').forEach(function(e) { e.classList.remove('active'); });
    if (allTab) allTab.classList.add('active');
    if (typeof tnRenderFiltered === 'function') tnRenderFiltered();
  }
}

function switchTournamentTab(tab) {
  var allTab = document.querySelector('.tn-tab[data-tn-tab="all"]');
  var eventTabs = document.querySelectorAll('.tn-tab[data-tn-tab^="event"]');
  if (tab === 'all') {
    // 전체 클릭: 이벤트 전부 해제, 전체만 활성
    eventTabs.forEach(function(e) { e.classList.remove('active'); });
    if (allTab) allTab.classList.add('active');
  } else {
    // 이벤트 클릭: 전체 해제, 해당 이벤트 토글
    if (allTab) allTab.classList.remove('active');
    var clicked = document.querySelector('.tn-tab[data-tn-tab="' + tab + '"]');
    if (clicked) clicked.classList.toggle('active');
    // 이벤트 아무것도 선택 안 되면 전체로 복귀
    var anyActive = document.querySelector('.tn-tab[data-tn-tab^="event"].active');
    if (!anyActive && allTab) allTab.classList.add('active');
  }
  tnRenderFiltered();
}

function tnRenderFiltered() {
  var t = i18n[currentLang] || i18n.ko;
  var emptyMsg = t.tn_empty || '등록된 토너먼트가 없습니다';
  var el = document.getElementById('tnFilteredList');
  if (!el) return;
  var allTab = document.querySelector('.tn-tab[data-tn-tab="all"]');
  var allowedEvents = null; // null → 전체
  if (!(allTab && allTab.classList.contains('active'))) {
    allowedEvents = [];
    document.querySelectorAll('.tn-tab[data-tn-tab^="event"].active').forEach(function(e) {
      allowedEvents.push(e.getAttribute('data-tn-tab').replace('event', ''));
    });
  }
  var byId = {};
  demoTournaments.forEach(function(item) { byId[item.id] = item; });
  var html = '';
  tnGroups.forEach(function(g) {
    var cards = g.ids
      .map(function(id) { return byId[id]; })
      .filter(function(item) { return item && (allowedEvents === null || allowedEvents.indexOf(item.event) !== -1); });
    if (!cards.length) return;
    html += '<div class="tn-section">' +
              '<div class="tn-section-title tn-section-title--' + g.theme + '">' + g.text + '</div>' +
              '<div class="tn-section-cards">' + cards.map(tnBuildCard).join('') + '</div>' +
            '</div>';
  });
  el.innerHTML = html || '<div class="tn-empty">' + emptyMsg + '</div>';
}

function tnGetMyRank(item) {
  if (!item.registered || !item.players) return 0;
  return ((item.id * 3) % item.players) + 1;
}

function tnFormatPrizeNumber(prize) {
  if (prize == null) return '-';
  const raw = String(prize).replace(/[^0-9]/g, '');
  if (!raw) return String(prize).replace(/G\s*$/i, '').trim() || '-';
  const n = parseInt(raw, 10);
  const fmt = (v) => (v % 1 === 0 ? v.toString() : v.toFixed(1).replace(/\.0$/, ''));
  if (n >= 1e12) return fmt(n / 1e12) + '조';
  if (n >= 1e8)  return fmt(n / 1e8)  + '억';
  return n.toLocaleString();
}

const tnCountdownTargets = {};
function tnGetCountdownTarget(item) {
  if (tnCountdownTargets[item.id] != null) return tnCountdownTargets[item.id];
  let target = NaN;
  if (item.startType && item.startType !== 'manual') {
    const parsed = Date.parse(String(item.startType).replace(' ', 'T'));
    if (!isNaN(parsed)) target = parsed;
  }
  if (isNaN(target)) {
    const h = 12 + (item.id * 7) % 48;
    const m = (item.id * 13) % 60;
    const sec = (item.id * 17) % 60;
    target = Date.now() + (h * 3600 + m * 60 + sec) * 1000;
  }
  tnCountdownTargets[item.id] = target;
  return target;
}
function tnFormatCountdown(ms) {
  if (!(ms > 0)) return '00:00:00';
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = n => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
function tnUpdateCountdowns() {
  document.querySelectorAll('.tn-remain-time[data-tn-id]').forEach(el => {
    const id = parseInt(el.getAttribute('data-tn-id'), 10);
    if (!id) return;
    const target = tnCountdownTargets[id];
    if (target == null) return;
    el.textContent = tnFormatCountdown(target - Date.now());
  });
}
let tnCountdownInterval = null;
function tnStartCountdown() {
  tnUpdateCountdowns();
  if (tnCountdownInterval) return;
  tnCountdownInterval = setInterval(tnUpdateCountdowns, 1000);
}
function tnStopCountdown() {
  if (tnCountdownInterval) { clearInterval(tnCountdownInterval); tnCountdownInterval = null; }
}

function tnBuildCard(item) {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;
  const statusMap = {
    registering: { label: t.tn_status_registering || '등록중', cls: 'registering' },
    ongoing:     { label: t.tn_status_ongoing || '진행중', cls: 'ongoing' },
    lateReg:     { label: t.tn_status_late_reg || '추가등록', cls: 'lateReg' },
    finished:    { label: t.tn_status_finished || '종료', cls: 'finished' },
    draft:       { label: t.tn_status_draft || '임시저장', cls: 'draft' },
    canceled:    { label: t.tn_status_canceled || '취소', cls: 'canceled' },
  };
  const s = statusMap[item.status] || statusMap.registering;
  const fee = item.fee === 'free'
    ? (t.tn_fee_free || '무료')
    : String(item.fee).replace(/G\s*$/i, ' 골드');
  const prizeLabel = t.tn_prize || '상금';
  const buyinLabel = t.tn_buyin || '바이인';
  const playersLabel = t.tn_players || '참가인원';
  const registeredLabel = t.tn_registered || '등록됨';
  const activeClass = (currentTnDetailId === item.id) ? ' tn-card-active' : '';
  const registeredBadge = item.registered
    ? `<span class="tn-badge tn-badge-registered"><span class="tn-registered-dot"></span>${registeredLabel}</span>`
    : '';
  const prizeDisplay = (!item.prize || item.prize === '-')
    ? '-'
    : `${tnFormatPrizeNumber(item.prize)}<span class="tn-prize-unit">골드</span>`;
  const isFinished = item.status === 'finished';
  const isLateReg = item.status === 'lateReg';
  const hideRemain = isFinished || item.status === 'draft' || item.status === 'canceled';
  let remainSpan = '';
  if (isLateReg) {
    remainSpan = '<span class="tn-remain-time">00:00:00</span>';
  } else if (!hideRemain) {
    const initialRemain = tnFormatCountdown(tnGetCountdownTarget(item) - Date.now());
    remainSpan = `<span class="tn-remain-time" data-tn-id="${item.id}">${initialRemain}</span>`;
  }
  return `<div class="tn-card${activeClass}" onclick="openTnDetail(${item.id})">
    <div class="tn-card-content">
      <div class="tn-name">${item.name}</div>
      <div class="tn-status-row">
        <span class="tn-badge ${s.cls}">${s.label}</span>
        ${remainSpan}
      </div>
      <div class="tn-meta">
        <span class="tn-meta-item"><span class="tn-meta-label">${buyinLabel}</span><span class="tn-meta-value">${fee}</span></span>
        <span class="tn-meta-item"><span class="tn-meta-label">${playersLabel}</span><span class="tn-meta-value">${item.maxPlayers}</span></span>
      </div>
      <div class="tn-prize-row">
        <span class="tn-prize-label">${prizeLabel}</span>
        <span class="tn-prize-value">${prizeDisplay}</span>
      </div>
    </div>
    <div class="tn-card-third">${registeredBadge}</div>
  </div>`;
}

function tnRenderList() {
  tnRenderFiltered();
}

function tnIsPcSplit() {
  if (window.innerWidth < 1024) return false;
  const split = document.getElementById('tnSplitRight');
  return !!(split && split.offsetParent);
}

/* ========================
 * Holdem Page (토너먼트 2차판 기반 베이스 — 추후 커스터마이즈)
 * tn- 레이아웃 클래스 공유, id는 hd- 접두어
 * ======================== */
const demoHoldem = [
  { id:'h1',  event:'A', blinds:'50/100',    participants:42,  buyin:'1만',  maxType:'6max' },
  { id:'h2',  event:'B', blinds:'50/100',    participants:28,  buyin:'1만',  fee2:'2,400',  maxType:'9max' },
  { id:'h3',  event:'A', blinds:'100/200',   participants:67,  buyin:'2만',  maxType:'6max' },
  { id:'h4',  event:'B', blinds:'100/200',   participants:35,  buyin:'2만',  fee2:'4,800',  maxType:'9max' },
  { id:'h5',  event:'C', blinds:'100/200',   participants:18,  buyin:'2만',  maxType:'6max' },
  { id:'h6',  event:'A', blinds:'200/400',   participants:51,  buyin:'4만',  maxType:'6max' },
  { id:'h7',  event:'A', blinds:'25/50',     participants:21,  buyin:'5천',  maxType:'6max' },
  { id:'h8',  event:'C', blinds:'50/100',    participants:24,  buyin:'1만',  maxType:'9max' },
  { id:'h9',  event:'B', blinds:'200/400',   participants:48,  buyin:'4만',  fee2:'9,600',  maxType:'9max' },
  { id:'h10', event:'A', blinds:'500/1000',  participants:33,  buyin:'10만', maxType:'6max' },
  { id:'h11', event:'C', blinds:'200/400',   participants:15,  buyin:'4만',  maxType:'6max' },
  { id:'h12', event:'B', blinds:'500/1000',  participants:22,  buyin:'10만', fee2:'24,000', maxType:'9max' },
  { id:'h13', event:'A', blinds:'100/200',   participants:58,  buyin:'2만',  maxType:'9max' },
  { id:'h14', event:'C', blinds:'50/100',    participants:12,  buyin:'1만',  maxType:'6max' },
  { id:'h15', event:'A', blinds:'1000/2000', participants:19,  buyin:'20만', maxType:'6max' },
  { id:'h16', event:'B', blinds:'25/50',     participants:31,  buyin:'5천',  fee2:'1,200',  maxType:'9max' },
  { id:'h17', event:'A', blinds:'200/400',   participants:74,  buyin:'4만',  maxType:'9max' },
  { id:'h18', event:'C', blinds:'500/1000',  participants:9,   buyin:'10만', maxType:'6max' },
  { id:'h19', event:'A', blinds:'25/50',     participants:38,  buyin:'5천',  maxType:'9max' },
  { id:'h20', event:'B', blinds:'100/200',   participants:44,  buyin:'2만',  fee2:'4,800',  maxType:'6max' },
  { id:'h21', event:'A', blinds:'50/100',    participants:62,  buyin:'1만',  maxType:'9max' },
  { id:'h22', event:'C', blinds:'25/50',     participants:11,  buyin:'5천',  maxType:'6max' },
  { id:'h23', event:'A', blinds:'200/400',   participants:29,  buyin:'4만',  maxType:'9max' },
  { id:'h24', event:'B', blinds:'500/1000',  participants:17,  buyin:'10만', fee2:'24,000', maxType:'6max' },
  { id:'h25', event:'A', blinds:'100/200',   participants:47,  buyin:'2만',  maxType:'6max' },
  { id:'h26', event:'C', blinds:'100/200',   participants:23,  buyin:'2만',  maxType:'9max' },
  { id:'h27', event:'A', blinds:'500/1000',  participants:14,  buyin:'10만', maxType:'9max' },
  { id:'h28', event:'B', blinds:'50/100',    participants:39,  buyin:'1만',  fee2:'2,400',  maxType:'6max' },
  { id:'h29', event:'A', blinds:'1000/2000', participants:8,   buyin:'20만', maxType:'9max' },
  { id:'h30', event:'C', blinds:'200/400',   participants:26,  buyin:'4만',  maxType:'9max' },
  { id:'h31', event:'A', blinds:'50/100',    participants:54,  buyin:'1만',  maxType:'6max' },
  { id:'h32', event:'B', blinds:'200/400',   participants:32,  buyin:'4만',  fee2:'9,600',  maxType:'6max' },
  { id:'h33', event:'A', blinds:'100/200',   participants:71,  buyin:'2만',  maxType:'6max' },
  { id:'h34', event:'C', blinds:'500/1000',  participants:7,   buyin:'10만', maxType:'9max' },
  { id:'h35', event:'A', blinds:'200/400',   participants:43,  buyin:'4만',  maxType:'6max' },
  { id:'h36', event:'B', blinds:'25/50',     participants:25,  buyin:'5천',  fee2:'1,200',  maxType:'6max' },
  { id:'h37', event:'A', blinds:'25/50',     participants:55,  buyin:'5천',  maxType:'9max' },
  { id:'h38', event:'C', blinds:'50/100',    participants:16,  buyin:'1만',  maxType:'6max' },
  { id:'h39', event:'A', blinds:'500/1000',  participants:27,  buyin:'10만', maxType:'6max' },
  { id:'h40', event:'B', blinds:'100/200',   participants:36,  buyin:'2만',  fee2:'4,800',  maxType:'9max' },
  { id:'h41', event:'A', blinds:'100/200',   participants:65,  buyin:'2만',  maxType:'9max' },
  { id:'h42', event:'C', blinds:'1000/2000', participants:6,   buyin:'20만', maxType:'6max' },
  { id:'h43', event:'A', blinds:'50/100',    participants:49,  buyin:'1만',  maxType:'6max' },
  { id:'h44', event:'B', blinds:'500/1000',  participants:13,  buyin:'10만', fee2:'24,000', maxType:'9max' },
  { id:'h45', event:'A', blinds:'200/400',   participants:60,  buyin:'4만',  maxType:'9max' },
  { id:'h46', event:'C', blinds:'200/400',   participants:20,  buyin:'4만',  maxType:'9max' },
  { id:'h47', event:'A', blinds:'1000/2000', participants:10,  buyin:'20만', maxType:'6max' },
  { id:'h48', event:'B', blinds:'50/100',    participants:37,  buyin:'1만',  fee2:'2,400',  maxType:'9max' },
  { id:'h49', event:'A', blinds:'25/50',     participants:46,  buyin:'5천',  maxType:'6max' },
  { id:'h50', event:'C', blinds:'25/50',     participants:30,  buyin:'5천',  maxType:'9max' },
  { id:'h51', event:'A', blinds:'500/1000',  participants:40,  buyin:'10만', maxType:'9max' },
  { id:'h52', event:'B', blinds:'100/200',   participants:50,  buyin:'2만',  fee2:'4,800',  maxType:'6max' },
  { id:'h53', event:'A', blinds:'100/200',   participants:53,  buyin:'2만',  maxType:'6max' },
  { id:'h54', event:'C', blinds:'50/100',    participants:34,  buyin:'1만',  maxType:'6max' },
];

const hdTypeMap = {
  A: { name:'홀덤',   cls:'hd-tag-holdem' },
  B: { name:'오징어', cls:'hd-tag-squid'  },
  C: { name:'72',     cls:'hd-tag-72'     },
};

function hdBuildCard(item) {
  var type = hdTypeMap[item.event] || hdTypeMap.A;
  var fee2Html = item.fee2 ? '<div class="hd-card-fee2">참가비 <strong>' + item.fee2 + '</strong></div>' : '';
  var activeClass = (currentHdDetailId === item.id) ? ' tn-card-active' : '';
  return '<div class="tn-card hd-card' + activeClass + '" onclick="openHdDetail(\'' + item.id + '\')">' +
    '<div class="hd-card-main">' +
      '<div class="hd-card-title">' + type.name + ' ' + item.blinds +
        '<span class="hd-card-participants">참가인원 ' + item.participants + '</span>' +
      '</div>' +
      '<div class="hd-card-tags">' +
        '<span class="hd-tag ' + type.cls + '">' + type.name + '</span>' +
        '<span class="hd-tag hd-tag-max">' + item.maxType + '</span>' +
      '</div>' +
    '</div>' +
    '<div class="hd-card-price">' +
      '<div class="hd-card-buyin">바이인 <strong>' + item.buyin + '</strong></div>' +
      fee2Html +
    '</div>' +
  '</div>';
}

function hdFormatNumber(n) {
  if (n >= 10000 && n % 10000 === 0) return (n / 10000) + '만';
  return n.toLocaleString();
}

function hdGetDetails(item) {
  var type = hdTypeMap[item.event] || hdTypeMap.A;
  var typeFullName = type.name === '홀덤' ? '텍사스 홀덤' : (type.name === '72' ? '72게임' : '오징어 게임');
  // 데모 테이블 (id 마지막 글자 기반 deterministic 개수)
  var lastCh = item.id.charCodeAt(item.id.length - 1);
  var tableCount = 5 + (lastCh % 4); // 5~8개
  var seats = item.maxType === '9max' ? 9 : 6;
  var tables = [];
  for (var i = 1; i <= tableCount; i++) {
    tables.push({ name: '테이블 ' + i, players: seats, avgPot: 12, avgPotBB: 0 });
  }
  var bb = parseInt(item.blinds.split('/')[1], 10) || 100;
  var minBuyin = bb * 20;
  var maxBuyin = bb * 100;
  return {
    type: type,
    typeFullName: typeFullName,
    tables: tables,
    rules: {
      gameType: typeFullName,
      blinds: item.blinds,
      actionTime: '15초',
      tableSize: item.maxType,
      minBuyin: hdFormatNumber(minBuyin),
      maxBuyin: hdFormatNumber(maxBuyin),
    },
  };
}

let currentHdDetailId = null;
let currentHdDetailTab = 'tables'; // 'tables' | 'rules'

function hdIsPcSplit() {
  if (window.innerWidth < 1024) return false;
  var split = document.getElementById('hdSplitRight');
  return !!(split && split.offsetParent);
}

function hdBuildDetailHTML(item, mode) {
  var d = hdGetDetails(item);
  var headerHtml =
    '<div class="hd-detail-header">' +
      '<div class="hd-detail-title">' + d.typeFullName.replace('텍사스 ', '') + ' ' + item.blinds + '</div>' +
      '<div class="hd-detail-tags">' +
        '<span class="hd-tag ' + d.type.cls + '">' + d.type.name + '</span>' +
        '<span class="hd-tag hd-tag-max">' + item.maxType + '</span>' +
      '</div>' +
    '</div>';
  var tabsHtml =
    '<div class="hd-detail-tabs">' +
      '<button class="hd-detail-tab' + (currentHdDetailTab === 'tables' ? ' active' : '') + '" onclick="hdSwitchDetailTab(\'tables\')">테이블</button>' +
      '<button class="hd-detail-tab' + (currentHdDetailTab === 'rules' ? ' active' : '') + '" onclick="hdSwitchDetailTab(\'rules\')">규칙</button>' +
    '</div>';
  var seatIcon = '<svg class="hd-tables-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6v.5H2V14z"/></svg>';
  var tablesRows = d.tables.map(function(tb) {
    return '<div class="hd-tables-row">' +
      '<span class="hd-tables-name">' + tb.name + '</span>' +
      '<span class="hd-tables-players">' + seatIcon + tb.players + '</span>' +
      '<span class="hd-tables-pot"><strong>' + tb.avgPot + '</strong> <span class="hd-tables-bb">(' + tb.avgPotBB + 'BB)</span></span>' +
    '</div>';
  }).join('');
  var tablesHtml =
    '<div class="hd-detail-content hd-tables" data-pane="tables"' + (currentHdDetailTab === 'tables' ? '' : ' style="display:none;"') + '>' +
      '<div class="hd-tables-head">' +
        '<span class="hd-tables-name">테이블</span>' +
        '<span class="hd-tables-players">참가</span>' +
        '<span class="hd-tables-pot">평균 팟</span>' +
      '</div>' +
      '<div class="hd-tables-list">' + tablesRows + '</div>' +
      (mode === 'pc' ? '<div class="hd-detail-notice">서버가 조건에 맞는 테이블을 자동 배정합니다. 개별 테이블 선택은 불가능합니다.</div>' : '') +
    '</div>';
  var rulesRows =
    '<div class="hd-rules-row"><span class="hd-rules-key">게임 유형</span><span class="hd-rules-val">' + d.rules.gameType + '</span></div>' +
    '<div class="hd-rules-row"><span class="hd-rules-key">블라인드</span><span class="hd-rules-val">' + d.rules.blinds + '</span></div>' +
    '<div class="hd-rules-row"><span class="hd-rules-key">액션 타임</span><span class="hd-rules-val">' + d.rules.actionTime + '</span></div>' +
    '<div class="hd-rules-row"><span class="hd-rules-key">테이블 크기</span><span class="hd-rules-val">' + d.rules.tableSize + '</span></div>' +
    '<div class="hd-rules-row"><span class="hd-rules-key">최소 바이인</span><span class="hd-rules-val">' + d.rules.minBuyin + '</span></div>' +
    '<div class="hd-rules-row"><span class="hd-rules-key">최대 바이인</span><span class="hd-rules-val">' + d.rules.maxBuyin + '</span></div>';
  var rulesHtml =
    '<div class="hd-detail-content hd-rules" data-pane="rules"' + (currentHdDetailTab === 'rules' ? '' : ' style="display:none;"') + '>' +
      rulesRows +
    '</div>';
  var bottomHtml;
  if (mode === 'pc') {
    bottomHtml = '<div class="hd-detail-bottom hd-detail-bottom-pc">' +
      '<button class="hd-detail-btn hd-detail-btn-join" onclick="hdJoinDetail()">참가</button>' +
    '</div>';
  } else {
    bottomHtml = '<div class="hd-detail-bottom hd-detail-bottom-mobile alert-buttons">' +
      '<button class="alert-btn alert-btn-cancel" onclick="hdCancelDetail()">취소</button>' +
      '<button class="alert-btn alert-btn-confirm" onclick="hdJoinDetail()">참가</button>' +
    '</div>';
  }
  return {
    header: headerHtml,
    tabs: tabsHtml,
    body: tablesHtml + rulesHtml,
    bottom: bottomHtml,
  };
}

function openHdDetail(holdemId) {
  currentHdDetailId = holdemId;
  currentHdDetailTab = 'tables';
  var item = demoHoldem.find(function(h) { return h.id === holdemId; });
  if (!item) return;
  if (hdIsPcSplit()) {
    var splitDetail = document.getElementById('hdSplitDetail');
    var placeholder = document.getElementById('hdSplitPlaceholder');
    if (!splitDetail) return;
    var parts = hdBuildDetailHTML(item, 'pc');
    splitDetail.innerHTML =
      parts.header +
      parts.tabs +
      '<div class="hd-detail-scroll">' + parts.body + '</div>' +
      parts.bottom;
    splitDetail.style.display = 'flex';
    if (placeholder) placeholder.style.display = 'none';
    hdRenderList();
  } else {
    var mobileMount = document.getElementById('hdMobileDetailMount');
    if (mobileMount) {
      var partsM = hdBuildDetailHTML(item, 'mobile');
      mobileMount.innerHTML =
        partsM.header +
        partsM.tabs +
        '<div class="hd-detail-scroll">' + partsM.body + '</div>' +
        partsM.bottom;
    }
    var modal = document.getElementById('hdDetailModal');
    if (modal) modal.classList.add('active');
  }
}

function closeHdDetailModal() {
  var modal = document.getElementById('hdDetailModal');
  if (modal) modal.classList.remove('active');
  currentHdDetailId = null;
  hdRenderList();
}

// 브라우저 리사이즈로 모바일↔PC가 바뀔 때 상세를 적절한 위치로 이동
function hdHandleResize() {
  if (!currentHdDetailId) return;
  var holdemPage = document.getElementById('page-holdem');
  if (!holdemPage || !holdemPage.classList.contains('active')) return;
  var item = demoHoldem.find(function(h) { return h.id === currentHdDetailId; });
  if (!item) return;
  var modal = document.getElementById('hdDetailModal');
  var modalActive = modal && modal.classList.contains('active');
  var splitDetail = document.getElementById('hdSplitDetail');
  var placeholder = document.getElementById('hdSplitPlaceholder');
  var splitVisible = splitDetail && splitDetail.style.display && splitDetail.style.display !== 'none';
  if (hdIsPcSplit()) {
    // PC 모드로 전환 — 모달 닫고 인라인 패널에 표시
    if (modalActive) modal.classList.remove('active');
    if (splitDetail && !splitVisible) {
      var parts = hdBuildDetailHTML(item, 'pc');
      splitDetail.innerHTML = parts.header + parts.tabs + '<div class="hd-detail-scroll">' + parts.body + '</div>' + parts.bottom;
      splitDetail.style.display = 'flex';
      if (placeholder) placeholder.style.display = 'none';
    }
  } else {
    // 모바일 모드로 전환 — 인라인 숨기고 모달 열기
    if (splitVisible) {
      splitDetail.style.display = 'none';
      if (placeholder) placeholder.style.display = '';
    }
    if (modal && !modalActive) {
      var mount = document.getElementById('hdMobileDetailMount');
      if (mount) {
        var partsM = hdBuildDetailHTML(item, 'mobile');
        mount.innerHTML = partsM.header + partsM.tabs + '<div class="hd-detail-scroll">' + partsM.body + '</div>' + partsM.bottom;
      }
      modal.classList.add('active');
    }
  }
}

function hdSwitchDetailTab(tab) {
  currentHdDetailTab = tab;
  // 활성 탭 표시 + 콘텐츠 토글 (PC/모바일 동일하게 .hd-detail-tab 사용)
  document.querySelectorAll('.hd-detail-tab').forEach(function(btn) {
    var isActive = btn.textContent.trim() === (tab === 'tables' ? '테이블' : '규칙');
    btn.classList.toggle('active', isActive);
  });
  document.querySelectorAll('.hd-detail-content').forEach(function(pane) {
    pane.style.display = pane.getAttribute('data-pane') === tab ? '' : 'none';
  });
}

function hdJoinDetail() {
  // 데모: 임시 알림. 실제 라우팅은 추후.
  if (typeof showAlert === 'function') {
    showAlert({ title: '참가', message: '테이블 참가 기능은 준비 중입니다.' });
  } else {
    alert('테이블 참가 기능은 준비 중입니다.');
  }
}

function hdCancelDetail() {
  closeHdDetailModal();
}
function switchHoldemTab(tab) {
  var allTab = document.querySelector('#page-holdem .tn-tab[data-hd-tab="all"]');
  var eventTabs = document.querySelectorAll('#page-holdem .tn-tab[data-hd-tab^="event"]');
  if (tab === 'all') {
    eventTabs.forEach(function(e) { e.classList.remove('active'); });
    if (allTab) allTab.classList.add('active');
  } else {
    if (allTab) allTab.classList.remove('active');
    var target = document.querySelector('#page-holdem .tn-tab[data-hd-tab="' + tab + '"]');
    if (target) target.classList.toggle('active');
    var anyActive = document.querySelectorAll('#page-holdem .tn-tab[data-hd-tab^="event"].active').length > 0;
    if (!anyActive && allTab) allTab.classList.add('active');
  }
  hdRenderList();
}

var currentHdRound = '1';

function switchHoldemRound(round) {
  currentHdRound = round;
  document.querySelectorAll('.hd-round-btn').forEach(function(b) {
    if (b.getAttribute('data-hd-round') === round) b.classList.add('active');
    else b.classList.remove('active');
  });
  hdApplyRoundVisibility();
}

function hdApplyRoundVisibility() {
  var page = document.getElementById('page-holdem');
  if (page) page.classList.toggle('tn-hide-tabs', currentHdRound !== '2');
  document.querySelectorAll('#page-holdem .tn-tabs').forEach(function(el) {
    el.style.display = (currentHdRound === '2') ? '' : 'none';
  });
  if (currentHdRound !== '2') {
    var allTab = document.querySelector('#page-holdem .tn-tab[data-hd-tab="all"]');
    document.querySelectorAll('#page-holdem .tn-tab[data-hd-tab^="event"].active').forEach(function(e) { e.classList.remove('active'); });
    if (allTab) allTab.classList.add('active');
  }
  hdRenderList();
}

function hdRenderList() {
  var el = document.getElementById('hdFilteredList');
  if (!el) return;
  var allTab = document.querySelector('#page-holdem .tn-tab[data-hd-tab="all"]');
  var allowedEvents = null;
  if (!(allTab && allTab.classList.contains('active'))) {
    allowedEvents = [];
    document.querySelectorAll('#page-holdem .tn-tab[data-hd-tab^="event"].active').forEach(function(e) {
      allowedEvents.push(e.getAttribute('data-hd-tab').replace('event', ''));
    });
  }
  var cards = demoHoldem.filter(function(item) {
    if (currentHdRound === '1' && item.event !== 'A') return false;
    return allowedEvents === null || allowedEvents.indexOf(item.event) !== -1;
  });
  if (!cards.length) {
    el.innerHTML = '<div class="tn-empty">게임이 없습니다</div>';
    return;
  }
  el.innerHTML = cards.map(hdBuildCard).join('');
}

// === TOURNAMENT DETAIL PAGE ===

let currentTnDetailId = null;

var currentTnDetailContext = null;
function openTnDetail(tournamentId, context) {
  currentTnDetailId = tournamentId;
  currentTnDetailContext = context || null;
  if (tnIsPcSplit()) {
    // PC: 오른쪽 패널에 상세 표시
    var detailPage = document.getElementById('page-tn-detail');
    var splitDetail = document.getElementById('tnSplitDetail');
    var placeholder = document.getElementById('tnSplitPlaceholder');
    if (detailPage && splitDetail) {
      var cw = detailPage.querySelector('.content-wrapper');
      splitDetail.innerHTML = '<div class="td-detail-scroll">' + cw.innerHTML + '</div>';
      // 방 제목을 탭 위에 삽입
      var tnItem = demoTournaments.find(function(tn) { return tn.id === tournamentId; });
      var titleEl = document.createElement('div');
      titleEl.className = 'tn-split-detail-title';
      titleEl.textContent = tnItem ? tnItem.name : '';
      splitDetail.insertBefore(titleEl, splitDetail.firstChild);
      // tabs를 scroll 밖으로 이동 (제목 아래)
      var tabs = splitDetail.querySelector('.td-detail-scroll > .td-tabs');
      if (tabs) splitDetail.insertBefore(tabs, titleEl.nextSibling);
      // bottom-bar를 scroll 밖으로 이동 (하단 고정)
      var bar = splitDetail.querySelector('.td-bottom-bar');
      if (bar) splitDetail.appendChild(bar);
      splitDetail.style.display = 'flex';
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

  // 요약 카드
  var statusMap = {
    registering: { label: t.tn_status_registering || '등록중', cls: 'registering' },
    ongoing:     { label: t.tn_status_ongoing || '진행중', cls: 'ongoing' },
    lateReg:     { label: t.tn_status_late_reg || '추가등록', cls: 'lateReg' },
    finished:    { label: t.tn_status_finished || '종료', cls: 'finished' },
    draft:       { label: t.tn_status_draft || '임시저장', cls: 'draft' },
    canceled:    { label: t.tn_status_canceled || '취소', cls: 'canceled' },
  };
  var badgeEl = document.getElementById('tdStatusBadge');
  if (badgeEl) {
    var st = statusMap[item.status] || statusMap.registering;
    badgeEl.textContent = st.label;
    badgeEl.className = 'tn-badge ' + st.cls;
  }
  var prizeEl = document.getElementById('tdPrizeValue');
  if (prizeEl) prizeEl.textContent = item.prize ? tnFormatPrizeNumber(item.prize) : '-';
  var feeLabel0 = item.fee === 'free' ? (t.tn_fee_free || '무료') : String(item.fee).replace(/G\s*$/i, ' 골드');
  var buyinEl = document.getElementById('tdBuyinValue');
  if (buyinEl) buyinEl.textContent = feeLabel0;
  var remainEl = document.getElementById('tdRemainPlayers');
  if (remainEl) remainEl.textContent = item.players + '/' + item.maxPlayers;
  if (window._tdElapsedTimer) clearInterval(window._tdElapsedTimer);
  var elapsedEl = document.getElementById('tdElapsed');
  if (elapsedEl) {
    if (item.status === 'lateReg') {
      elapsedEl.textContent = '00:00:00';
    } else {
      var _tdTarget = tnGetCountdownTarget(item);
      function updateElapsed() {
        elapsedEl.textContent = tnFormatCountdown(_tdTarget - Date.now());
      }
      updateElapsed();
      window._tdElapsedTimer = setInterval(updateElapsed, 1000);
    }
  }

  // 자세히 탭 - 상단 현황
  var details = item.details || {};
  var blindLv = details.blindLevel || 1;
  var bl = defaultBlindLevels[blindLv - 1] || defaultBlindLevels[0];
  var nextLv = blindLv + 1;
  var nextBl = defaultBlindLevels[blindLv] || defaultBlindLevels[defaultBlindLevels.length - 1];
  // 자세히 탭
  var feeLabel = item.fee === 'free' ? (t.tn_fee_free || '무료') : String(item.fee).replace(/G\s*$/i, ' 골드');
  var startVal = item.startType === 'manual' ? (t.tn_manual_start || '호스트 수동시작') : item.startType;
  var startChipsNum = parseInt(String(details.startChips || '10000').replace(/,/g, ''));
  var bbCount = Math.round(startChipsNum / bl.bb);
  document.getElementById('tdStartTime').textContent = startVal;
  document.getElementById('tdStartChips').textContent = (startChipsNum >= 10000 ? (startChipsNum / 10000) + '만' : startChipsNum.toLocaleString()) + ' (' + bbCount + 'BB)';
  document.getElementById('tdLateReg').textContent = (details.lateRegLevel || 8) + (t.td_late_reg_suffix || '레벨 이전');
  document.getElementById('tdBuyin').textContent = feeLabel;
  document.getElementById('tdTableType').textContent = (details.tableSize || item.maxPlayers) + (t.td_table_size_suffix || '인');
  document.getElementById('tdReentry').textContent = String(details.reentry != null ? details.reentry : 0);
  document.getElementById('tdActionTime').textContent = (details.actionTimeSec || 15) + ' ' + (t.td_sec || '초');
  document.getElementById('tdExtraTime').textContent = (details.extraTimeSec || 5) + ' ' + (t.td_sec || '초') + ' / ' + (details.extraTimeHands || 10) + ' ' + (t.td_hands || '핸드 수');
  document.getElementById('tdBlindInterval').textContent = (details.blindMin || 10) + ' / ' + (details.breakMin || 5);
  document.getElementById('tdMaxEntry').textContent = item.maxPlayers;

  // 블라인드 레벨 바
  var curEl = document.getElementById('tdBlindCurrent');
  var nextEl = document.getElementById('tdBlindNext');
  var timerEl = document.getElementById('tdBlindTimer');
  if (curEl) curEl.textContent = 'Lv.' + bl.lv + ' ' + bl.sb.toLocaleString() + '/' + bl.bb.toLocaleString();
  if (nextEl) nextEl.textContent = 'Lv.' + nextBl.lv + ' ' + nextBl.sb.toLocaleString() + '/' + nextBl.bb.toLocaleString();
  if (timerEl) timerEl.textContent = '00:' + String(details.blindMin || 10).padStart(2, '0') + ':00';

  // 플레이어 탭
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

  // 요약 카드
  var statusMap = {
    registering: { label: t.tn_status_registering || '등록중', cls: 'registering' },
    ongoing:     { label: t.tn_status_ongoing || '진행중', cls: 'ongoing' },
    lateReg:     { label: t.tn_status_late_reg || '추가등록', cls: 'lateReg' },
    finished:    { label: t.tn_status_finished || '종료', cls: 'finished' },
    draft:       { label: t.tn_status_draft || '임시저장', cls: 'draft' },
    canceled:    { label: t.tn_status_canceled || '취소', cls: 'canceled' },
  };
  var badgeEl = container.querySelector('#tdStatusBadge');
  if (badgeEl) {
    var st = statusMap[item.status] || statusMap.registering;
    badgeEl.textContent = st.label;
    badgeEl.className = 'tn-badge ' + st.cls;
  }
  var prizeEl = container.querySelector('#tdPrizeValue');
  if (prizeEl) prizeEl.textContent = item.prize ? tnFormatPrizeNumber(item.prize) : '-';
  var feeLabel = item.fee === 'free' ? (t.tn_fee_free || '무료') : String(item.fee).replace(/G\s*$/i, ' 골드');
  var buyinEl = container.querySelector('#tdBuyinValue');
  if (buyinEl) buyinEl.textContent = feeLabel;
  var remainEl = container.querySelector('#tdRemainPlayers');
  if (remainEl) remainEl.textContent = item.players + '/' + item.maxPlayers;
  // 카운트다운 (리스트와 동일한 타겟)
  if (window._tdElapsedTimer) clearInterval(window._tdElapsedTimer);
  var elapsedEl = container.querySelector('#tdElapsed');
  if (elapsedEl) {
    if (item.status === 'lateReg') {
      elapsedEl.textContent = '00:00:00';
    } else {
      var _tdTarget = tnGetCountdownTarget(item);
      function updateElapsed() {
        elapsedEl.textContent = tnFormatCountdown(_tdTarget - Date.now());
      }
      updateElapsed();
      window._tdElapsedTimer = setInterval(updateElapsed, 1000);
    }
  }

  var details = item.details || {};
  var blindLv = details.blindLevel || 1;
  var bl = defaultBlindLevels[blindLv - 1] || defaultBlindLevels[0];
  var nextLv = blindLv + 1;
  var nextBl = defaultBlindLevels[blindLv] || defaultBlindLevels[defaultBlindLevels.length - 1];
  var feeLabel = item.fee === 'free' ? (t.tn_fee_free || '무료') : String(item.fee).replace(/G\s*$/i, ' 골드');
  var startVal = item.startType === 'manual' ? (t.tn_manual_start || '호스트 수동시작') : item.startType;
  var startChipsNum = parseInt(String(details.startChips || '10000').replace(/,/g, ''));
  var bbCount = Math.round(startChipsNum / bl.bb);
  container.querySelector('#tdStartTime').textContent = startVal;
  container.querySelector('#tdStartChips').textContent = (startChipsNum >= 10000 ? (startChipsNum / 10000) + '만' : startChipsNum.toLocaleString()) + ' (' + bbCount + 'BB)';
  container.querySelector('#tdLateReg').textContent = (details.lateRegLevel || 8) + (t.td_late_reg_suffix || '레벨 이전');
  container.querySelector('#tdBuyin').textContent = feeLabel;
  container.querySelector('#tdTableType').textContent = (details.tableSize || item.maxPlayers) + (t.td_table_size_suffix || '인');
  container.querySelector('#tdReentry').textContent = String(details.reentry != null ? details.reentry : 0);
  container.querySelector('#tdActionTime').textContent = (details.actionTimeSec || 15) + ' ' + (t.td_sec || '초');
  container.querySelector('#tdExtraTime').textContent = (details.extraTimeSec || 5) + ' ' + (t.td_sec || '초') + ' / ' + (details.extraTimeHands || 10) + ' ' + (t.td_hands || '핸드 수');
  container.querySelector('#tdBlindInterval').textContent = (details.blindMin || 10) + ' / ' + (details.breakMin || 5);
  container.querySelector('#tdMaxEntry').textContent = item.maxPlayers;

  // 블라인드 레벨 바
  var curEl2 = container.querySelector('#tdBlindCurrent');
  var nextEl2 = container.querySelector('#tdBlindNext');
  var timerEl2 = container.querySelector('#tdBlindTimer');
  if (curEl2) curEl2.textContent = 'Lv.' + bl.lv + ' ' + bl.sb.toLocaleString() + '/' + bl.bb.toLocaleString();
  if (nextEl2) nextEl2.textContent = 'Lv.' + nextBl.lv + ' ' + nextBl.sb.toLocaleString() + '/' + nextBl.bb.toLocaleString();
  if (timerEl2) timerEl2.textContent = '00:' + String(details.blindMin || 10).padStart(2, '0') + ':00';

  // 플레이어
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
      demoPlayers.push({ name: playerNames[i % playerNames.length], level: Math.floor(Math.random()*20)+5, chips: (Math.floor(Math.random()*50)+10)*1000, avatar: _avatarList[i % _avatarList.length] });
    }
    var myRank = tnGetMyRank(itm);
    var myChips = (((itm.id * 7) % 40) + 10) * 1000;
    if (itm.registered && myRank && demoPlayers[myRank - 1]) {
      demoPlayers[myRank - 1] = { name: '나', chips: myChips, isMe: true };
    }
    var list = ct.querySelector('#tdPlayerList');
    if (!list) return;
    if (demoPlayers.length === 0) { list.innerHTML = '<tr><td colspan="3" style="text-align:center;padding:32px 0;color:var(--text-muted);">' + (t.td_no_players || '아직 참가자가 없습니다') + '</td></tr>'; return; }
    list.innerHTML = demoPlayers.map(function(p, idx) {
      if (p.isMe) {
        return '<tr class="td-player-row-me"><td>'+(idx+1)+'</td><td>나<span class="td-player-row-me-label">ME</span></td><td>'+p.chips.toLocaleString()+'</td></tr>';
      }
      return '<tr><td>'+(idx+1)+'</td><td>'+p.name+'</td><td style="color:var(--accent-gold);font-weight:600;">'+p.chips.toLocaleString()+'</td></tr>';
    }).join('');
    var myBar = ct.querySelector('#tdMyRankBar');
    if (myBar) {
      if (itm.registered && myRank) {
        var posEl = ct.querySelector('#tdMyRankBarPos');
        var chipsEl = ct.querySelector('#tdMyRankBarChips');
        if (posEl) posEl.textContent = myRank + '위';
        if (chipsEl) chipsEl.textContent = myChips.toLocaleString();
      }
      var playersTabActive = ct.querySelector('#td-players') && ct.querySelector('#td-players').classList.contains('active');
      myBar.style.display = (itm.registered && myRank && playersTabActive) ? '' : 'none';
    }
  }
  function tdRenderBlindTableIn(ct) {
    var tbody = ct.querySelector('#tdBlindTableBody');
    if (!tbody) return;
    var html = '';
    defaultBlindLevels.forEach(function(row) {
      html += '<tr><td>'+row.lv+'</td><td>'+row.sb.toLocaleString()+' / '+row.bb.toLocaleString()+'</td><td>'+row.ante.toLocaleString()+'</td><td>'+row.time+'min</td></tr>';
      if (_blindBreaks[row.lv]) {
        html += '<tr style="background:rgba(249,98,23,0.06);"><td colspan="4" style="text-align:center;color:var(--accent-orange);font-weight:700;font-size:12px;">휴식 '+_blindBreaks[row.lv]+'분</td></tr>';
      }
    });
    tbody.innerHTML = html;
  }
  function tdRenderPayoutTableIn(ct, itm) {
    var totalEl = ct.querySelector('#tdPayoutTotal');
    if (totalEl) totalEl.innerHTML = '<span class="td-payout-total-label">'+(t.td_total_prize||'총 상금')+'</span><span class="td-payout-total-value">'+tnFormatPrizeNumber(itm.prize)+' 골드</span>';
    var payouts = [{rank:'1st',percent:50},{rank:'2nd',percent:30},{rank:'3rd',percent:20}];
    var prizeNum = parseInt(itm.prize.replace(/[^0-9]/g,''))||0;
    var tbody = ct.querySelector('#tdPayoutTableBody');
    if (tbody) tbody.innerHTML = payouts.map(function(p) {
      return '<tr><td class="td-rank-cell">'+p.rank+'</td><td class="td-amount-cell">'+tnFormatPrizeNumber(prizeNum*p.percent/100)+' 골드</td><td class="td-percent-cell">'+p.percent+'%</td></tr>';
    }).join('');
  }
  function tdUpdateButtonsIn(ct, itm) {
    var registerBtn = ct.querySelector('#tdRegisterBtn');
    var spectateBtn = ct.querySelector('#tdSpectateBtn');
    var cancelBtn = ct.querySelector('#tdCancelBtn');
    if (!registerBtn || !spectateBtn) return;
    if (tdIsHostMode()) {
      registerBtn.style.display='none'; spectateBtn.style.display='none';
      if (cancelBtn) cancelBtn.style.display='none';
      tdApplyHostButtonsVisibility(ct, itm.status);
      return;
    }
    if (itm.status === 'finished') {
      registerBtn.style.display='none'; spectateBtn.style.display='';
      if (cancelBtn) cancelBtn.style.display='none';
      tdApplyHostButtonsVisibility(ct, null);
      return;
    }
    registerBtn.style.display=''; spectateBtn.style.display='';
    tdApplyHostButtonsVisibility(ct, null);
    tdApplyRegisterState(registerBtn, cancelBtn, itm, t);
  }

  // 인라인 탭 전환 이벤트 바인딩
  container.querySelectorAll('.td-tab').forEach(function(btn) {
    btn.onclick = function() {
      container.querySelectorAll('.td-tab').forEach(function(e) { e.classList.remove('active'); });
      container.querySelectorAll('.td-tab-content').forEach(function(e) { e.classList.remove('active'); });
      btn.classList.add('active');
      var tabId = btn.getAttribute('data-td-tab');
      container.querySelector('#td-' + tabId).classList.add('active');
      var myBar = container.querySelector('#tdMyRankBar');
      if (myBar) myBar.style.display = (tabId === 'players' && item.registered && tnGetMyRank(item)) ? '' : 'none';
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
  var myBar = document.getElementById('tdMyRankBar');
  if (myBar) {
    var item = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
    var show = (tab === 'players') && item && item.registered && tnGetMyRank(item);
    myBar.style.display = show ? '' : 'none';
  }
}

var _avatarList = ['avatar_a','avatar_b','avatar_c','avatar_d','avatar_e','avatar_f','avatar_g','avatar_h','avatar_i','avatar_j','avatar_k','avatar_l','avatar_m','avatar_n','avatar_o','avatar_p'];

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
      avatar: _avatarList[i % _avatarList.length],
    });
  }

  var myRank = tnGetMyRank(item);
  var myChips = (((item.id * 7) % 40) + 10) * 1000;
  if (item.registered && myRank && demoPlayers[myRank - 1]) {
    demoPlayers[myRank - 1] = { name: '나', chips: myChips, isMe: true };
  }

  var list = document.getElementById('tdPlayerList');
  if (demoPlayers.length === 0) {
    list.innerHTML = '<tr><td colspan="3" style="text-align:center;padding:32px 0;color:var(--text-muted);">' + (t.td_no_players || '아직 참가자가 없습니다') + '</td></tr>';
    return;
  }

  list.innerHTML = demoPlayers.map(function(p, idx) {
    if (p.isMe) {
      return '<tr class="td-player-row-me">' +
        '<td>' + (idx + 1) + '</td>' +
        '<td>나<span class="td-player-row-me-label">ME</span></td>' +
        '<td>' + p.chips.toLocaleString() + '</td>' +
      '</tr>';
    }
    return '<tr>' +
      '<td>' + (idx + 1) + '</td>' +
      '<td>' + p.name + '</td>' +
      '<td style="color:var(--accent-gold);font-weight:600;">' + p.chips.toLocaleString() + '</td>' +
    '</tr>';
  }).join('');

  var myBar = document.getElementById('tdMyRankBar');
  if (myBar) {
    if (item.registered && myRank) {
      var posEl = document.getElementById('tdMyRankBarPos');
      var chipsEl = document.getElementById('tdMyRankBarChips');
      if (posEl) posEl.textContent = myRank + '위';
      if (chipsEl) chipsEl.textContent = myChips.toLocaleString();
    }
    var playersTab = document.getElementById('td-players');
    var playersTabActive = playersTab && playersTab.classList.contains('active');
    myBar.style.display = (item.registered && myRank && playersTabActive) ? '' : 'none';
  }
}

var _blindBreaks = { 4: 10, 6: 10 };

function tdRenderBlindTable() {
  var tbody = document.getElementById('tdBlindTableBody');
  var html = '';
  defaultBlindLevels.forEach(function(row) {
    html += '<tr>' +
      '<td>' + row.lv + '</td>' +
      '<td>' + row.sb.toLocaleString() + ' / ' + row.bb.toLocaleString() + '</td>' +
      '<td>' + row.ante.toLocaleString() + '</td>' +
      '<td>' + row.time + 'min</td>' +
    '</tr>';
    if (_blindBreaks[row.lv]) {
      html += '<tr style="background:rgba(249,98,23,0.06);"><td colspan="4" style="text-align:center;color:var(--accent-orange);font-weight:700;font-size:12px;">휴식 ' + _blindBreaks[row.lv] + '분</td></tr>';
    }
  });
  tbody.innerHTML = html;
}

function tdRenderPayoutTable(item) {
  var t = i18n[currentLang] || i18n.ko;

  document.getElementById('tdPayoutTotal').innerHTML =
    '<span class="td-payout-total-label">' + (t.td_total_prize || '총 상금') + '</span>' +
    '<span class="td-payout-total-value">' + tnFormatPrizeNumber(item.prize) + ' 골드</span>';

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
      '<td class="td-amount-cell">' + tnFormatPrizeNumber(prizeNum * p.percent / 100) + ' 골드</td>' +
      '<td class="td-percent-cell">' + p.percent + '%</td>' +
    '</tr>';
  }).join('');
}

function tdApplyHostButtonsVisibility(scope, status) {
  var deleteBtn = scope.querySelector('#tdHostDeleteBtn');
  var editBtn = scope.querySelector('#tdHostEditBtn');
  var copyBtn = scope.querySelector('#tdHostCopyBtn');
  var showEditDelete = (status === 'draft' || status === 'registering');
  var showCopy = (status === 'canceled' || status === 'finished');
  if (deleteBtn) deleteBtn.style.display = showEditDelete ? '' : 'none';
  if (editBtn) editBtn.style.display = showEditDelete ? '' : 'none';
  if (copyBtn) copyBtn.style.display = showCopy ? '' : 'none';
}

function tdIsHostMode() {
  return currentTnDetailContext === 'host';
}

function tdUpdateButtons(item) {
  var registerBtn = document.getElementById('tdRegisterBtn');
  var spectateBtn = document.getElementById('tdSpectateBtn');
  var cancelBtn = document.getElementById('tdCancelBtn');
  var t = i18n[currentLang] || i18n.ko;

  // 라이브 테이블에서 관전 모드로 진입한 경우
  if (enterLiveTableSpectateMode) {
    registerBtn.style.display = 'none';
    spectateBtn.style.display = '';
    if (cancelBtn) cancelBtn.style.display = 'none';
    tdApplyHostButtonsVisibility(document, null);
    enterLiveTableSpectateMode = false;
    return;
  }

  // 호스트 페이지에서 진입한 경우: 호스트 버튼 노출
  if (tdIsHostMode()) {
    registerBtn.style.display = 'none';
    spectateBtn.style.display = 'none';
    if (cancelBtn) cancelBtn.style.display = 'none';
    tdApplyHostButtonsVisibility(document, item.status);
    return;
  }

  if (item.status === 'finished') {
    registerBtn.style.display = 'none';
    spectateBtn.style.display = '';
    if (cancelBtn) cancelBtn.style.display = 'none';
    tdApplyHostButtonsVisibility(document, null);
    return;
  }

  registerBtn.style.display = '';
  spectateBtn.style.display = '';
  tdApplyHostButtonsVisibility(document, null);
  tdApplyRegisterState(registerBtn, cancelBtn, item, t);
}

function tdApplyRegisterState(registerBtn, cancelBtn, item, t) {
  var isFull = item.players >= item.maxPlayers;
  if (item.registered) {
    registerBtn.textContent = t.td_sit_down || '착석';
    registerBtn.disabled = false;
    registerBtn.classList.remove('is-full');
    if (cancelBtn) cancelBtn.style.display = '';
  } else if (isFull) {
    registerBtn.textContent = t.td_full || '등록 마감';
    registerBtn.disabled = true;
    registerBtn.classList.add('is-full');
    if (cancelBtn) cancelBtn.style.display = 'none';
  } else {
    registerBtn.textContent = t.td_register || '등록';
    registerBtn.disabled = false;
    registerBtn.classList.remove('is-full');
    if (cancelBtn) cancelBtn.style.display = 'none';
  }
}

function tdCancelRegister() {
  var item = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
  if (!item || !item.registered) return;
  showAlert({
    title: '등록 취소',
    message: '등록을 취소합니다. 사용한 바이인은 환불됩니다.',
    cancelText: '돌아가기',
    confirmText: '등록 취소',
    onConfirm: function() {
      item.registered = false;
      item.players = Math.max(0, item.players - 1);
      if (tnIsPcSplit()) {
        tdRenderDetailInline(document.getElementById('tnSplitDetail'));
        tnRenderList();
      } else {
        tdRenderDetail();
      }
    }
  });
}

/* ── Host actions (draft/canceled detail) ── */
function tdHostBackToList() {
  if (tnIsPcSplit()) {
    var splitDetail = document.getElementById('tnSplitDetail');
    var placeholder = document.getElementById('tnSplitPlaceholder');
    if (splitDetail) splitDetail.style.display = 'none';
    if (placeholder) placeholder.style.display = '';
    currentTnDetailId = null;
  } else {
    switchPage('host');
  }
  hostRenderList();
}

function tdHostDelete() {
  var item = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
  if (!item || (item.status !== 'draft' && item.status !== 'registering')) return;
  showAlert({
    title: '토너먼트 삭제',
    message: '토너먼트를 삭제 하시겠습니까?',
    cancelText: '취소',
    confirmText: '삭제',
    onConfirm: function() {
      var idx = demoTournaments.findIndex(function(tn) { return tn.id === item.id; });
      if (idx >= 0) demoTournaments.splice(idx, 1);
      tdHostBackToList();
    }
  });
}

function tdHostEdit() {
  var item = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
  if (!item || (item.status !== 'draft' && item.status !== 'registering')) return;
  switchPage('game-setup');
}

function tdHostCopy() {
  var item = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
  if (!item || (item.status !== 'canceled' && item.status !== 'finished')) return;
  showAlert({
    title: '토너먼트 복사',
    message: '이 토너먼트 스트럭쳐를 복사하시겠습니까?',
    cancelText: '돌아가기',
    confirmText: '복사',
    onConfirm: function() {
      var newId = Math.max.apply(null, demoTournaments.map(function(tn) { return tn.id; })) + 1;
      var copy = JSON.parse(JSON.stringify(item));
      copy.id = newId;
      copy.status = 'draft';
      copy.name = 'copied ' + item.name;
      copy.players = 0;
      copy.registered = false;
      demoTournaments.push(copy);
      currentTnDetailId = newId;
      if (tnIsPcSplit()) {
        tdRenderDetailInline(document.getElementById('tnSplitDetail'));
      } else {
        tdRenderDetail();
      }
      hostRenderList();
    }
  });
}

/* ========================
 * Alert Modal (범용 확인 다이얼로그)
 * ------------------------
 * showAlert({
 *   title, message,
 *   confirmText, cancelText,
 *   variant: 'default' | 'danger',
 *   onConfirm, onCancel,
 * })
 * ======================== */
function showAlert(opts) {
  opts = opts || {};
  var modal = document.getElementById('alertModal');
  if (!modal) return;
  document.getElementById('alertTitle').textContent = opts.title || '';
  document.getElementById('alertMessage').textContent = opts.message || '';
  var warningEl = document.getElementById('alertWarning');
  if (warningEl) {
    if (opts.warning) {
      warningEl.textContent = opts.warning;
      warningEl.style.display = '';
    } else {
      warningEl.textContent = '';
      warningEl.style.display = 'none';
    }
  }
  var cancelBtn = document.getElementById('alertCancelBtn');
  var confirmBtn = document.getElementById('alertConfirmBtn');
  if (opts.cancelText === null || opts.cancelText === false) {
    cancelBtn.style.display = 'none';
  } else {
    cancelBtn.style.display = '';
    cancelBtn.textContent = opts.cancelText || '취소';
  }
  confirmBtn.textContent = opts.confirmText || '확인';
  confirmBtn.classList.toggle('alert-btn-danger', opts.variant === 'danger');
  confirmBtn.onclick = function() {
    closeAlertModal();
    if (typeof opts.onConfirm === 'function') opts.onConfirm();
  };
  cancelBtn.onclick = function() {
    closeAlertModal();
    if (typeof opts.onCancel === 'function') opts.onCancel();
  };
  var scrollW = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollW + 'px';
  modal.classList.add('active');
}

function closeAlertModal() {
  var modal = document.getElementById('alertModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
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

  // 토너먼트명 (헤더 타이틀)
  document.getElementById('tdrName').textContent = item.name;

  // 바이인
  var feeLabel = item.fee === 'free' ? (t.tn_fee_free || '무료') : String(item.fee).replace(/G\s*$/i, ' 골드');
  document.getElementById('tdrFee').textContent = feeLabel;

  // 상금 풀
  var prizeEl = document.getElementById('tdrPrize');
  if (prizeEl) {
    prizeEl.textContent = (item.prize && item.prize !== '-') ? (tnFormatPrizeNumber(item.prize) + '골드') : '-';
  }

  // 등록 수단 기본 선택 복구 (골드)
  document.querySelectorAll('.tdr-option').forEach(function(op) {
    op.classList.toggle('selected', op.getAttribute('data-tdr-method') === 'gold');
    var input = op.querySelector('input[type=radio]');
    if (input) input.checked = op.getAttribute('data-tdr-method') === 'gold';
  });

  var scrollW = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollW + 'px';
  document.getElementById('tdRegisterModal').classList.add('active');
}

// 등록 수단 라디오 클릭 토글
document.addEventListener('click', function(e) {
  var op = e.target.closest('.tdr-option');
  if (!op) return;
  document.querySelectorAll('.tdr-option').forEach(function(el) { el.classList.remove('selected'); });
  op.classList.add('selected');
  var input = op.querySelector('input[type=radio]');
  if (input) input.checked = true;
});

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
  closeTdRegisterModal();
  openTdTestResultModal();
}

/* v3 테스트 팝업 — 등록 결과 시뮬레이션 (dev only) */
function openTdTestResultModal() {
  var modal = document.getElementById('tdTestResultModal');
  if (!modal) return;
  var scrollW = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollW + 'px';
  modal.classList.add('active');
}

function closeTdTestResultModal() {
  var modal = document.getElementById('tdTestResultModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function tdTestResult(result) {
  closeTdTestResultModal();
  var item = demoTournaments.find(function(tn) { return tn.id === currentTnDetailId; });
  if (!item) return;

  if (result === 'success') {
    item.registered = true;
    item.players++;
    if (tnIsPcSplit()) {
      tdRenderDetailInline(document.getElementById('tnSplitDetail'));
      tnRenderList();
    } else {
      tdRenderDetail();
    }
    showAlert({
      title: '등록 성공',
      message: '토너먼트에 정상적으로 등록되었습니다.',
      cancelText: null,
      confirmText: '확인',
    });
  } else if (result === 'failed') {
    showAlert({
      title: '등록 실패',
      message: '등록 처리에 실패했습니다.\n잠시 후 다시 시도해주세요.',
      cancelText: null,
      confirmText: '확인',
    });
  } else if (result === 'dailyLimit') {
    showAlert({
      title: '일일 손실한도 초과',
      message: '일일 손실 한도를 초과했습니다.\n(일일 손실한도: nnn억 골드)',
      warning: '일일 손실 한도는 00:00를 기준으로 초기화됩니다.',
      cancelText: null,
      confirmText: '확인',
    });
  } else if (result === 'buyinLimit') {
    showAlert({
      title: '바이인 한도 초과',
      message: '게임 바이인 한도를 초과했습니다.\n(바이인 한도: 350억 골드)',
      warning: '일일 손실 한도는 00:00를 기준으로 초기화됩니다.',
      cancelText: null,
      confirmText: '확인',
    });
  }
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
  const historyItems = demoTournaments.filter(item => item.status === 'finished');
  const emptyMsg = t.tn_history_empty || '완료된 토너먼트가 없습니다';
  const html = historyItems.length ? historyItems.map(function(item) { return hostBuildCard(item, 'history'); }).join('') : `<div class="tn-empty">${emptyMsg}</div>`;
  document.getElementById('tnHistoryList').innerHTML = html;
}

// === HISTORY DETAIL PAGE ===

var currentHistoryDetailId = null;

function thdSeed(id) {
  // id 기반 결정론적 의사난수 — 같은 토너먼트는 항상 동일한 stats
  var x = (id * 9301 + 49297) % 233280;
  return x / 233280;
}
function thdRange(id, salt, min, max) {
  var v = thdSeed(id * 31 + salt);
  return Math.floor(min + v * (max - min + 1));
}

function thdGetStats(item) {
  if (item.historyStats) return item.historyStats;
  var id = item.id || 1;
  var participants = item.maxPlayers || thdRange(id, 1, 8, 64);
  var myRank = thdRange(id, 2, 1, participants);
  var hours = thdRange(id, 3, 0, 2);
  var mins = thdRange(id, 4, 5, 59);
  var secs = thdRange(id, 5, 0, 59);
  var pad = function(n) { return String(n).padStart(2, '0'); };
  var playTime = pad(hours) + 'h ' + pad(mins) + 'm ' + pad(secs) + 's';
  var hands = thdRange(id, 6, 12, 80);
  // VPIP > PFR 일반적으로 (포커 통계 상식)
  var vpip = thdRange(id, 7, 18, 85);
  var pfr = thdRange(id, 8, 8, Math.max(8, vpip - 5));
  var threeBet = thdRange(id, 9, 0, 18);
  var cb = thdRange(id, 10, 0, 75);
  // 등수 1위는 리워드 큼, 그 외는 작거나 0
  var prizeNum = parseInt(String(item.prize || '0').replace(/[^0-9]/g, '')) || 0;
  var myReward = 0;
  if (myRank === 1) myReward = Math.round(prizeNum * 0.5);
  else if (myRank === 2) myReward = Math.round(prizeNum * 0.3);
  else if (myRank === 3) myReward = Math.round(prizeNum * 0.2);
  var myBounty = thdRange(id, 11, 0, 1) ? thdRange(id, 12, 0, 5) : 0;
  // 바운티 행 생성: myBounty 만큼 KO한 사람 목록
  var bountyNames = ['LuckyAce77','PokerKing','BluffMaster','RoyalFlush','CardShark99','AllInHero','ChipLeader','NightOwl','HighRoller_J','ProPlayer_X','SmartBet','River_Rat'];
  var bountyRows = [];
  var profitRunning = 0;
  for (var k = 0; k < myBounty; k++) {
    var bv = thdRange(id, 100 + k, 1, 8);
    profitRunning += bv;
    var hh = thdRange(id, 200 + k, 0, hours);
    var mm = thdRange(id, 300 + k, 0, 59);
    var ss = thdRange(id, 400 + k, 0, 59);
    bountyRows.push({
      name: bountyNames[(id + k) % bountyNames.length],
      time: pad(hh) + ':' + pad(mm) + ':' + pad(ss),
      bounty: bv,
      profit: profitRunning,
    });
  }
  // 누적 바운티: 과거 모든 토너먼트 합 (시뮬레이션)
  var bountyCumulative = thdRange(id, 13, 50, 500);
  return {
    participants: participants,
    playTime: playTime,
    myRank: myRank,
    myReward: myReward,
    myBounty: myBounty,
    hands: hands,
    vpip: vpip,
    pfr: pfr,
    threeBet: threeBet,
    cb: cb,
    bountyAcquired: myBounty,
    bountyCumulative: bountyCumulative,
    bountyRows: bountyRows,
  };
}

function thdFormatDateLong(s) {
  if (!s || typeof s !== 'string') return '';
  var m = s.match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})$/);
  if (!m) return s;
  var days = ['일','월','화','수','목','금','토'];
  var wd = days[new Date(+m[1], +m[2]-1, +m[3]).getDay()];
  return m[1] + '.' + m[2] + '.' + m[3] + '(' + wd + ') ' + m[4] + ':' + m[5];
}

function openHistoryDetail(tournamentId) {
  currentHistoryDetailId = tournamentId;
  switchPage('tn-history-detail');
}

function thdSetGauge(svgSelector, percent) {
  var el = document.querySelector(svgSelector);
  if (!el) return;
  var pct = Math.max(0, Math.min(100, percent));
  el.setAttribute('stroke-dasharray', pct + ' ' + (100 - pct));
}

var currentBountyMode = 'acquired';

function thdRenderBounty(stats) {
  var labelEl = document.getElementById('thdBountySummaryLabel');
  var valueEl = document.getElementById('thdBountySummaryValue');
  var bodyEl = document.getElementById('thdBountyTableBody');
  if (!labelEl || !valueEl || !bodyEl) return;
  if (currentBountyMode === 'cumulative') {
    labelEl.textContent = '총 누적 바운티';
    valueEl.textContent = stats.bountyCumulative.toLocaleString();
  } else {
    labelEl.textContent = '총 획득 바운티';
    valueEl.textContent = stats.bountyAcquired;
  }
  if (!stats.bountyRows.length) {
    bodyEl.innerHTML = '<div class="hd-bounty-empty">획득한 바운티가 없습니다</div>';
    return;
  }
  bodyEl.innerHTML = stats.bountyRows.map(function(r) {
    return '<div class="hd-bounty-row">' +
      '<div>' + r.name + '</div>' +
      '<div>' + r.time + '</div>' +
      '<div>' + r.bounty + '</div>' +
      '<div class="hd-bounty-profit">+' + r.profit + '</div>' +
    '</div>';
  }).join('');
}

function thdSwitchBounty(mode) {
  currentBountyMode = mode;
  document.querySelectorAll('.hd-bounty-toggle-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-bmode') === mode);
  });
  var item = demoTournaments.find(function(tn) { return tn.id === currentHistoryDetailId; });
  if (!item) return;
  thdRenderBounty(thdGetStats(item));
}

function thdRenderDetail() {
  var item = demoTournaments.find(function(tn) { return tn.id === currentHistoryDetailId; });
  if (!item) return;
  var stats = thdGetStats(item);
  document.getElementById('thdName').textContent = item.name;
  document.getElementById('thdDate').textContent = thdFormatDateLong(item.startType);
  document.getElementById('thdParticipants').textContent = stats.participants;
  document.getElementById('thdPlayTime').textContent = stats.playTime;
  document.getElementById('thdRank').textContent = stats.myRank + ' / ' + stats.participants;
  document.getElementById('thdReward').textContent = stats.myReward > 0 ? stats.myReward.toLocaleString() : '0';
  document.getElementById('thdBounty').textContent = stats.myBounty;
  document.getElementById('thdHands').textContent = stats.hands;
  document.getElementById('thdVpip').textContent = stats.vpip + '%';
  document.getElementById('thdPfr').textContent = stats.pfr + '%';
  document.getElementById('thdThreeBet').textContent = stats.threeBet + '%';
  document.getElementById('thdCb').textContent = stats.cb + '%';
  // 게이지 채우기 (다음 프레임에 적용 — transition 활성화)
  requestAnimationFrame(function() {
    thdSetGauge('.hd-gauge-vpip', stats.vpip);
    thdSetGauge('.hd-gauge-pfr', stats.pfr);
    thdSetGauge('.hd-gauge-3bet', stats.threeBet);
    thdSetGauge('.hd-gauge-cb', stats.cb);
  });
  // 바운티 섹션
  currentBountyMode = 'acquired';
  document.querySelectorAll('.hd-bounty-toggle-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-bmode') === 'acquired');
  });
  thdRenderBounty(stats);
  // "자세히보기" 링크 → 기존 토너먼트 상세
  var moreLink = document.getElementById('thdMoreLink');
  if (moreLink) {
    moreLink.onclick = function() { openTnDetail(item.id); };
  }
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

function tkBuildCard(item) {
  var lang = currentLang || 'ko';
  var t = i18n[lang] || i18n.ko;
  var statusMap = {
    registering: { label: t.tn_status_registering || '등록중', cls: 'registering' },
    ongoing:     { label: t.tn_status_ongoing || '진행중',     cls: 'ongoing' },
    lateReg:     { label: t.tn_status_late_reg || '추가등록',  cls: 'lateReg' },
    finished:    { label: t.tn_status_finished || '종료',      cls: 'finished' },
  };
  var s = statusMap[item.status] || statusMap.registering;
  var buyinLabel = t.tn_buyin || '바이인';
  var prizeLabel = t.host_total_prize || '총 상금';
  var playersLabel = t.tn_players || '참가인원';
  var buyinValue = (item.fee === 'free' || !item.fee) ? 'Free' : hostFormatAmount(item.fee);
  var prizeValue = (!item.prize || item.prize === '-') ? 'None' : hostFormatAmount(item.prize);
  var prizeIsNone = prizeValue === 'None';
  var playersValue = (item.players != null && item.maxPlayers) ? (item.players + ' / ' + item.maxPlayers) : (item.maxPlayers || '-');
  return '<div class="tn-card host-card tk-card" onclick="openTnDetail(' + item.id + ')">' +
    '<div class="host-card-main">' +
      '<span class="tn-badge ' + s.cls + '">' + s.label + '</span>' +
      '<div class="host-card-title">' + item.name + '</div>' +
    '</div>' +
    '<div class="host-card-info">' +
      '<div class="host-card-info-row"><span class="host-card-info-label">' + buyinLabel + '</span><span class="host-card-info-value">' + buyinValue + '</span></div>' +
      '<div class="host-card-info-row"><span class="host-card-info-label">' + prizeLabel + '</span><span class="host-card-info-value' + (prizeIsNone ? ' is-none' : '') + '">' + prizeValue + '</span></div>' +
      '<div class="host-card-info-row"><span class="host-card-info-label">' + playersLabel + '</span><span class="host-card-info-value">' + playersValue + '</span></div>' +
    '</div>' +
  '</div>';
}

function tkRenderList() {
  var lang = currentLang || 'ko';
  var t = i18n[lang] || i18n.ko;
  var allowed = { registering:1, ongoing:1, lateReg:1, finished:1 };
  var ownedSeries = {};
  demoTickets.forEach(function(tk) { ownedSeries[tk.series] = true; });
  var items = demoTournaments.filter(function(tn) {
    return tn.requiredTicketSeries && ownedSeries[tn.requiredTicketSeries] && allowed[tn.status];
  });
  var emptyMsg = t.tk_empty || '참여 가능한 토너먼트가 없습니다';
  var listEl = document.getElementById('tkTicketList');
  if (!listEl) return;
  listEl.innerHTML = items.length ? items.map(tkBuildCard).join('') : '<div class="tn-empty">' + emptyMsg + '</div>';
}

// === TICKET DETAIL PAGE ===

var currentTicketSeries = null;

function openTicketDetail(series) {
  currentTicketSeries = series;
  switchPage('ticket-detail');
}

function ticketDetailRender() {
  var lang = currentLang || 'ko';
  var t = i18n[lang] || i18n.ko;
  var series = currentTicketSeries;
  var listEl = document.getElementById('ticketDetailList');
  if (!listEl) return;
  if (!series) { listEl.innerHTML = ''; return; }
  var items = demoTournaments.filter(function(tn) {
    return tn.requiredTicketSeries === series && (tn.status === 'finished' || tn.status === 'canceled');
  });
  var emptyMsg = t.tkd_empty || '참여 가능한 토너먼트가 없습니다';
  listEl.innerHTML = items.length
    ? items.map(function(item, idx) {
        var displayName = items.length > 1 ? series + ' #' + (idx + 1) : series;
        return tnBuildCard(Object.assign({}, item, { name: displayName }));
      }).join('')
    : '<div class="tn-empty">' + emptyMsg + '</div>';
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
  if (groupId === 'gsAnte') gsUpdateAnteHeader(btn.dataset.value);
}

function gsUpdateAnteHeader(value) {
  const th = document.getElementById('gsAnteTh');
  if (!th) return;
  const labels = { none: '앤티', all: 'ALL 앤티', bb: 'BB 앤티' };
  th.textContent = labels[value] || '앤티';
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
    const inputAttrs = ' onclick="event.stopPropagation()" onfocus="gsFocusBlindRow(' + idx + ')"';
    if (row.isBreak) {
      tr.className = 'break-row';
      tr.innerHTML = '<td>-</td><td colspan="2" style="font-style:italic;color:var(--text-muted)">BREAK</td><td><input type="number" value="' + row.time + '" onchange="gsUpdateBlind(' + idx + ',\'time\',this.value)"' + inputAttrs + '></td>';
    } else {
      tr.innerHTML = '<td>' + row.lv + '</td><td><div class="gs-sb-bb"><input type="number" value="' + row.sb + '" onchange="gsUpdateBlind(' + idx + ',\'sb\',this.value)"' + inputAttrs + '> / <input type="number" value="' + row.bb + '" onchange="gsUpdateBlind(' + idx + ',\'bb\',this.value)"' + inputAttrs + '></div></td><td><input type="number" value="' + row.ante + '" onchange="gsUpdateBlind(' + idx + ',\'ante\',this.value)"' + inputAttrs + '></td><td><input type="number" value="' + row.time + '" onchange="gsUpdateBlind(' + idx + ',\'time\',this.value)"' + inputAttrs + '></td>';
    }
    tr.addEventListener('click', function(e) {
      if (e.target.tagName === 'INPUT') return;
      gsSelectBlindRow(idx);
    });
    tbody.appendChild(tr);
  });
  gsApplyRowSelection();
}

function gsBuildActionRow() {
  const tr = document.createElement('tr');
  tr.className = 'gs-blind-actions-row';
  tr.innerHTML = '<td colspan="4"><div class="gs-blind-actions-inner">' +
    '<button class="gs-blind-action-btn" onclick="gsDeleteBlindRow()">삭제</button>' +
    '<button class="gs-blind-action-btn" onclick="gsAddBlindRow()">블라인드</button>' +
    '<button class="gs-blind-action-btn" onclick="gsAddBreakRow()">브레이크</button>' +
    '</div></td>';
  return tr;
}

function gsApplyRowSelection() {
  const tbody = document.getElementById('gsBlindTableBody');
  if (!tbody) return;
  const oldActionRow = tbody.querySelector('.gs-blind-actions-row');
  if (oldActionRow) oldActionRow.remove();
  const dataRows = Array.from(tbody.children);
  dataRows.forEach((tr, i) => {
    tr.classList.toggle('selected', i === gsSelectedRow);
  });
  if (gsSelectedRow < 0 || gsSelectedRow >= dataRows.length) return;
  dataRows[gsSelectedRow].after(gsBuildActionRow());
}

function gsFocusBlindRow(idx) {
  if (gsSelectedRow === idx) return;
  gsSelectedRow = idx;
  gsApplyRowSelection();
}

function gsSelectBlindRow(idx) {
  gsSelectedRow = gsSelectedRow === idx ? -1 : idx;
  gsApplyRowSelection();
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
  gsRenderBlindTable();
}

function gsAddBreakRow() {
  const insertAt = gsSelectedRow >= 0 ? gsSelectedRow + 1 : gsBlindData.length;
  gsBlindData.splice(insertAt, 0, { isBreak: true, time: 5 });
  gsSelectedRow = -1;
  gsRenderBlindTable();
}

function gsInitDefaults() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const dtStr = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + 'T' + pad(now.getHours()) + ':' + pad(now.getMinutes());
  const displayStr = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes());
  const el = document.getElementById('gsStartTime');
  if (el) el.value = dtStr;
  const displayEl = document.getElementById('gsStartTimeDisplay');
  if (displayEl) displayEl.value = displayStr;
  gsBlindData = JSON.parse(JSON.stringify(defaultBlindLevels));
  gsSelectedRow = -1;
  gsRenderBlindTable();
  const activeAnte = document.querySelector('#gsAnte .gs-segment-btn.active');
  if (activeAnte) gsUpdateAnteHeader(activeAnte.dataset.value);
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
  document.getElementById('gsStartTimeDisplay').value = displayStr;
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
  { title: '토너먼트 우승!', desc: '주간 챔피언십에서 1위를 달성했습니다. 축하합니다!', detail: '주간 챔피언십 토너먼트에서 총 128명의 참가자 중 1위를 달성하셨습니다.\n\n우승 보상:\n· 골드 10,000\n· 다이아 500\n· 챔피언 칭호 (7일)\n\n보상은 자동으로 지급되었습니다. 인벤토리에서 확인하세요.', time: '2시간 전', unread: true },
  { title: '출석 보상 지급', desc: '7일 연속 출석 보상으로 골드 1,000이 지급되었습니다.', detail: '7일 연속 출석을 축하합니다!\n\n출석 보상 내역:\n· 7일 연속 보너스: 골드 1,000\n· 누적 출석 30일 달성까지 3일 남음\n\n매일 접속하여 추가 보상을 받아보세요.', time: '5시간 전', unread: true },
  { title: '시스템 점검 안내', desc: '4월 10일 04:00~06:00 서버 점검이 예정되어 있습니다.', detail: '안정적인 서비스 제공을 위해 시스템 점검이 진행됩니다.\n\n점검 일시: 4월 10일 (목) 04:00 ~ 06:00\n점검 내용: 서버 안정화 및 보안 패치\n\n점검 시간 동안 게임 이용이 불가하며, 점검 완료 후 보상이 지급됩니다.', time: '1일 전', unread: false },
  { title: '시즌 3 종료', desc: '시즌 3이 종료되었습니다. 보상을 확인하세요.', detail: '시즌 3이 종료되었습니다.\n\n시즌 3 최종 기록:\n· 최종 등급: 골드 II\n· 총 게임 수: 342판\n· 승률: 58.2%\n\n시즌 보상은 등급별로 차등 지급됩니다. 보상함에서 확인하세요.', time: '3일 전', unread: false },
  { title: '친구 추가 알림', desc: '럭키세븐님이 친구 요청을 보냈습니다.', detail: '럭키세븐님이 친구 요청을 보냈습니다.\n\n럭키세븐\n· 레벨: Lv.32\n· 주 게임: 텍사스 홀덤\n· 최근 전적: 5승 2패\n\n프로필 > 친구 관리에서 수락하거나 거절할 수 있습니다.', time: '3일 전', unread: false },
  { title: '이벤트 당첨', desc: '럭키 룰렛 이벤트에서 다이아 500개에 당첨되었습니다!', detail: '럭키 룰렛 이벤트 당첨을 축하합니다!\n\n당첨 보상: 다이아 500개\n· 보상은 자동으로 지급되었습니다.\n\n다음 럭키 룰렛은 매일 오후 12시에 참여할 수 있습니다.', time: '4일 전', unread: false },
  { title: '레벨 업!', desc: '축하합니다! Lv.25에 도달했습니다. 보상을 확인하세요.', detail: 'Lv.25 달성을 축하합니다!\n\n레벨 업 보상:\n· 골드 2,500\n· 프로필 프레임 해금: "실버 엘리트"\n· 이모티콘 팩 1개\n\n다음 레벨까지 경험치 1,200 필요합니다.', time: '5일 전', unread: false },
  { title: '프라이빗 룸 초대', desc: '포커마스터님이 프라이빗 룸에 초대했습니다.', detail: '포커마스터님이 프라이빗 룸에 초대했습니다.\n\n룸 정보:\n· 게임: 텍사스 홀덤 NL\n· 바이인: 골드 1,000\n· 참가자: 4/8명\n\n초대 유효기간: 24시간', time: '6일 전', unread: false },
  { title: '골드 선물 도착', desc: '올인김치님이 골드 500을 선물했습니다.', detail: '올인김치님이 골드를 선물했습니다.\n\n선물 내역:\n· 골드 500\n· 보낸 사람: 올인김치\n· 메시지: "같이 해서 즐거웠어요!"\n\n골드는 자동으로 잔액에 추가되었습니다.', time: '6일 전', unread: false },
  { title: '신규 토너먼트 오픈', desc: '스프링 시리즈 토너먼트가 등록 가능합니다.', detail: '스프링 시리즈 토너먼트가 오픈되었습니다.\n\n토너먼트 정보:\n· 시작: 4월 15일 (화) 20:00\n· 바이인: 골드 5,000\n· 보장 상금: 골드 500,000\n· 참가 제한: 256명\n\n지금 바로 등록하세요.', time: '7일 전', unread: false },
  { title: '비밀번호 변경 완료', desc: '계정 비밀번호가 성공적으로 변경되었습니다.', detail: '계정 비밀번호가 변경되었습니다.\n\n변경 일시: 4월 3일 14:23\n변경 IP: 211.xxx.xxx.xx\n\n본인이 변경하지 않았다면 즉시 고객센터에 문의해주세요.', time: '7일 전', unread: false },
  { title: '주간 랭킹 보상', desc: '주간 랭킹 12위 보상으로 다이아 200개가 지급되었습니다.', detail: '주간 랭킹 보상이 지급되었습니다.\n\n랭킹: 12위 / 5,432명\n보상: 다이아 200개\n\n이번 주도 열심히 플레이하여 더 높은 순위에 도전하세요.', time: '8일 전', unread: false },
  { title: '오마하 오픈 예정', desc: '오마하 게임 모드가 곧 오픈됩니다. 기대해주세요!', detail: '새로운 게임 모드 "오마하"가 곧 오픈됩니다.\n\n오픈 예정: 4월 중순\n· PLO (팟 리밋 오마하)\n· 오마하 하이로우\n\n오픈 기념 이벤트도 준비 중입니다.', time: '9일 전', unread: false },
  { title: '리엔트리 성공', desc: '주말 챔피언십 토너먼트에 리엔트리하였습니다.', detail: '주말 챔피언십 토너먼트에 리엔트리 완료.\n\n· 리엔트리 비용: 골드 3,000\n· 현재 칩: 10,000\n· 남은 리엔트리: 1회\n\n행운을 빕니다.', time: '10일 전', unread: false },
  { title: '출석 체크 알림', desc: '오늘 출석 체크를 아직 하지 않았습니다.', detail: '오늘의 출석 체크를 잊지 마세요.\n\n현재 연속 출석: 5일\n· 7일 달성 시: 골드 1,000 보너스\n· 30일 달성 시: 다이아 300 + 특별 칭호\n\n로비에서 출석 체크를 할 수 있습니다.', time: '10일 전', unread: false },
  { title: '서비스 업데이트', desc: 'v2.1.0 업데이트가 적용되었습니다. 새 기능을 확인하세요.', detail: 'v2.1.0 업데이트 내용\n\n신규 기능:\n· 프라이빗 룸 비밀번호 설정\n· 이모티콘 퀵슬롯 추가\n\n개선 사항:\n· 게임 로딩 속도 30% 개선\n· 채팅 UI 개편\n\n버그 수정:\n· 토너먼트 타이머 오류 수정\n· 일부 기기 화면 깨짐 해결', time: '12일 전', unread: false },
];

var demoMessages = [
  { avatar: 'images/avatar_h.png', name: '포커마스터', preview: '내일 저녁 8시에 프라이빗 룸 하실래요?', time: '30분 전', unread: true, unreadCount: 3 },
  { avatar: 'images/avatar_i.png', name: '올인김치', preview: '아까 그 핸드 대박이었어요 ㅋㅋ', time: '2시간 전', unread: true, unreadCount: 1 },
  { avatar: 'images/avatar_j.png', name: '블러프왕', preview: 'GG! 다음에 또 해요', time: '1일 전', unread: false, unreadCount: 0 },
  { avatar: 'images/avatar_o.png', name: '럭키세븐', preview: '다음 토너먼트 언제 열려요?', time: '2일 전', unread: false, unreadCount: 0 },
  { avatar: 'images/avatar_h.png', name: '칩매니아', preview: '골드 충전 어디서 해요?', time: '3일 전', unread: false, unreadCount: 0 },
  { avatar: 'images/avatar_i.png', name: '로얄플러시', preview: '오늘 진짜 운 좋았어요 ㅎㅎ', time: '4일 전', unread: false, unreadCount: 0 },
  { avatar: 'images/avatar_j.png', name: '하이롤러', preview: '바이인 얼마짜리 추천해요?', time: '5일 전', unread: false, unreadCount: 0 },
  { avatar: 'images/avatar_o.png', name: '딜러킴', preview: '오늘 딜링 재밌었습니다', time: '5일 전', unread: false, unreadCount: 0 },
  { avatar: 'images/avatar_h.png', name: '풀하우스', preview: '풀하우스로 올인콜 받았어요!', time: '6일 전', unread: false, unreadCount: 0 },
  { avatar: 'images/avatar_i.png', name: '텍사스짱', preview: '홀덤 전략 공유해요', time: '7일 전', unread: false, unreadCount: 0 },
  { avatar: 'images/avatar_j.png', name: '리버킹', preview: '리버에서 역전했습니다 ㅋㅋ', time: '8일 전', unread: false, unreadCount: 0 },
  { avatar: 'images/avatar_o.png', name: '프리롤매니아', preview: '프리롤 일정 알려주세요', time: '10일 전', unread: false, unreadCount: 0 },
];

// === 채팅 ===
var chatTarget = null;
var chatAvatar = null;
var chatData = {
  '포커마스터': [
    { who: 'them', text: '오늘 토너먼트 참가하실 건가요?', time: '오후 7:30' },
    { who: 'me', text: '네! 8시 시작이죠?', time: '오후 7:31' },
    { who: 'them', text: '맞아요 프라이빗 룸에서 봐요', time: '오후 7:32' },
    { who: 'me', text: '좋아요 그때 봐요!', time: '오후 7:33', failed: true },
    { who: 'them', text: '내일 저녁 8시에 프라이빗 룸 하실래요?', time: '오후 7:45' },
  ],
  '올인김치': [
    { who: 'them', text: '아까 AA로 올인 받아주셔서 감사합니다 ㅋㅋ', time: '오후 3:10' },
    { who: 'me', text: 'ㅋㅋㅋ 저도 재밌었어요', time: '오후 3:12' },
    { who: 'me', text: '다음에 또 같이 해요', time: '오후 3:13', failed: true },
    { who: 'them', text: '아까 그 핸드 대박이었어요 ㅋㅋ', time: '오후 3:15' },
  ],
  '블러프왕': [
    { who: 'me', text: '좋은 게임이었습니다', time: '오후 9:00' },
    { who: 'them', text: 'GG! 다음에 또 해요', time: '오후 9:01' },
  ]
};

function mbIsPcSplit() {
  return window.innerWidth >= 1024 && document.getElementById('mbSplitRight');
}

function openChat(name) {
  chatTarget = name;
  var found = demoMessages.find(function(m) { return m.name === name; });
  chatAvatar = found ? found.avatar : 'images/avatar_o.png';

  if (mbIsPcSplit()) {
    // PC: 우편함 오른쪽 패널에 채팅 표시
    var placeholder = document.getElementById('mbSplitPlaceholder');
    var chatPanel = document.getElementById('mbSplitChat');
    var notifDetail = document.getElementById('mbSplitNotifDetail');
    if (placeholder) placeholder.style.display = 'none';
    if (notifDetail) notifDetail.style.display = 'none';
    if (chatPanel) chatPanel.style.display = 'flex';
    // 알림 선택 해제
    document.querySelectorAll('.mb-notif-item').forEach(function(el) { el.classList.remove('mb-msg-selected'); el.classList.remove('notif-expanded'); });
    document.getElementById('mbChatName').textContent = name;
    document.getElementById('mbChatAvatar').src = chatAvatar;
    // 선택 하이라이트
    document.querySelectorAll('.mb-msg-item').forEach(function(el) { el.classList.remove('mb-msg-selected'); });
    var items = document.querySelectorAll('.mb-msg-item');
    items.forEach(function(el) {
      if (el.getAttribute('data-chat-name') === name) el.classList.add('mb-msg-selected');
    });
    renderChat();
  } else {
    // 모바일: 기존 전체화면 채팅
    document.body.classList.add('chat-open');
    switchPage('chat');
    document.getElementById('chatNavName').textContent = name;
    var sb = document.querySelector('.m-statusbar');
    var chatWrap = document.querySelector('.chat-wrap');
    if (chatWrap && sb && sb.style.display !== 'none') {
      chatWrap.style.top = '52px';
      chatWrap.style.height = 'calc(100dvh - 52px)';
    }
    renderChat();
  }
}

function renderChat() {
  var elId = mbIsPcSplit() ? 'chatMessagesPc' : 'chatMessages';
  var el = document.getElementById(elId);
  if (!el || !chatTarget) return;
  var msgs = chatData[chatTarget] || [];
  el.innerHTML = '<div class="chat-date-sep">오늘</div>' + msgs.map(function(m) {
    if (m.who === 'them') {
      return '<div class="chat-row them"><img class="chat-avatar" src="' + chatAvatar + '" alt="">' +
        '<div><div class="chat-bubble them">' + m.text + '</div>' +
        '<div class="chat-time them">' + m.time + '</div></div></div>';
    }
    if (m.failed) {
      return '<div class="chat-row me"><div><div class="chat-bubble me failed">' + m.text + '</div>' +
        '<div class="chat-time me failed">전송 실패 · ' + m.time + '</div></div></div>';
    }
    return '<div class="chat-row me"><div><div class="chat-bubble me">' + m.text + '</div>' +
      '<div class="chat-time me">' + m.time + '</div></div></div>';
  }).join('');
  el.scrollTop = el.scrollHeight;
}

function sendChat() {
  var input = document.getElementById(mbIsPcSplit() ? 'chatInputPc' : 'chatInput');
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
  var popupId = mbIsPcSplit() ? 'chatMenuPopupPc' : 'chatMenuPopup';
  var popup = document.getElementById(popupId);
  if (popup) popup.classList.toggle('open');
}
document.addEventListener('click', function() {
  document.querySelectorAll('.chat-menu-popup').forEach(function(p) { p.classList.remove('open'); });
});

function chatAction(action) {
  document.querySelectorAll('.chat-menu-popup').forEach(function(p) { p.classList.remove('open'); });
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
  el.innerHTML = demoNotifs.map(function(n, i) {
    return '<div class="mb-notif-item' + (n.unread ? ' unread' : '') + '" data-notif-idx="' + i + '" onclick="toggleNotifDetail(' + i + ')">' +
      '<div class="mb-notif-body">' +
        '<div class="mb-notif-title">' + n.title + '</div>' +
        '<div class="mb-notif-desc">' + n.desc + '</div>' +
        '<div class="mb-notif-time">' + n.time + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function notifCategoryTag(title) {
  if (/우승|챔피언|시즌/.test(title)) return '토너먼트';
  if (/출석|보상|지급|당첨|레벨/.test(title)) return '보상';
  if (/점검|시스템/.test(title)) return '시스템';
  if (/친구|초대/.test(title)) return '소셜';
  return '알림';
}

function openNotifDetail(idx) {
  var n = demoNotifs[idx];
  if (!n) return;
  n.unread = false;
  document.getElementById('notifDetailHeader').textContent = n.title;
  document.getElementById('notifDetailTag').textContent = notifCategoryTag(n.title);
  document.getElementById('notifDetailTime').textContent = n.time;
  document.getElementById('notifDetailBody').innerHTML = n.detail ? n.detail.replace(/\n/g, '<br>') : n.desc;
  document.body.classList.add('chat-open');
  switchPage('notif-detail');
  var sb = document.querySelector('.m-statusbar');
  var wrap = document.querySelector('#page-notif-detail .chat-wrap');
  if (wrap && sb && sb.style.display !== 'none') {
    wrap.style.top = '52px';
    wrap.style.height = 'calc(100dvh - 52px)';
  }
}

function closeNotifDetail() {
  document.body.classList.remove('chat-open');
  switchPage('mailbox');
  setTimeout(function() { switchMbTab('notification'); }, 50);
}

function toggleNotifDetail(idx) {
  var item = document.querySelector('.mb-notif-item[data-notif-idx="' + idx + '"]');
  if (!item) return;

  // PC: 우측 패널에 상세 표시 (토글 없음)
  if (mbIsPcSplit()) {
    var n = demoNotifs[idx];
    if (!n) return;
    var placeholder = document.getElementById('mbSplitPlaceholder');
    var chat = document.getElementById('mbSplitChat');
    var detail = document.getElementById('mbSplitNotifDetail');
    if (placeholder) placeholder.style.display = 'none';
    if (chat) chat.style.display = 'none';
    if (detail) detail.style.display = 'block';
    document.getElementById('mbNotifDetailTitle').textContent = n.title;
    document.getElementById('mbNotifDetailBody').innerHTML = n.detail ? n.detail.replace(/\n/g, '<br>') : n.desc;
    document.getElementById('mbNotifDetailTime').textContent = n.time;
    var tag = '알림';
    if (/우승|챔피언|시즌/.test(n.title)) tag = '토너먼트';
    else if (/출석|보상|지급|당첨|레벨/.test(n.title)) tag = '보상';
    else if (/점검|시스템/.test(n.title)) tag = '시스템';
    else if (/친구|초대/.test(n.title)) tag = '소셜';
    document.getElementById('mbNotifDetailTag').textContent = tag;
    // 선택 하이라이트
    document.querySelectorAll('.mb-notif-item').forEach(function(el) { el.classList.remove('mb-msg-selected'); });
    item.classList.add('mb-msg-selected');
    return;
  }

  // 모바일: 새 페이지로 이동
  openNotifDetail(idx);
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
    return '<div class="mb-msg-item' + (m.unread ? ' unread' : '') + (chatTarget === m.name && mbIsPcSplit() ? ' mb-msg-selected' : '') + '" data-chat-name="' + m.name + '" onclick="openChat(\'' + m.name + '\')">' +
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
function hostFormatAmount(value) {
  if (value == null) return value;
  var raw = String(value).replace(/[^0-9]/g, '');
  if (!raw) return value;
  var n = parseInt(raw, 10);
  var fmt = function(v) { return v % 1 === 0 ? v.toString() : v.toFixed(1).replace(/\.0$/, ''); };
  if (n >= 1e12) return fmt(n / 1e12) + '조';
  if (n >= 1e8)  return fmt(n / 1e8)  + '억';
  if (n >= 1e4)  return fmt(n / 1e4)  + '만';
  return n.toLocaleString();
}

function hostFormatDate(s) {
  if (!s || typeof s !== 'string') return '';
  const m = s.match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})$/);
  if (!m) return '';
  const days = ['일','월','화','수','목','금','토'];
  const wd = days[new Date(+m[1], +m[2]-1, +m[3]).getDay()];
  return m[2] + '.' + m[3] + '(' + wd + ') ' + m[4] + ':' + m[5];
}

function hostBuildCard(item, context) {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;
  const statusMap = {
    draft:       { label: t.tn_status_draft || '임시저장', cls: 'draft' },
    registering: { label: t.tn_status_registering || '등록중', cls: 'registering' },
    ongoing:     { label: t.tn_status_ongoing || '진행중', cls: 'ongoing' },
    lateReg:     { label: t.tn_status_late_reg || '추가등록', cls: 'lateReg' },
    canceled:    { label: t.tn_status_canceled || '취소', cls: 'canceled' },
    finished:    { label: t.tn_status_finished || '종료', cls: 'finished' },
  };
  const s = statusMap[item.status] || statusMap.draft;
  const typeLabel = t.tn_type_tournament || '토너먼트';
  const buyinLabel = t.tn_buyin || '바이인';
  const prizeLabel = t.host_total_prize || '총 상금';
  const dateText = hostFormatDate(item.startType);
  const dateLine = dateText ? '<div class="host-card-date">' + dateText + '</div>' : '';
  const buyinValue = (item.fee === 'free' || !item.fee) ? 'Free' : hostFormatAmount(item.fee);
  const prizeValue = (!item.prize || item.prize === '-') ? 'None' : hostFormatAmount(item.prize);
  const prizeIsNone = prizeValue === 'None';
  let onClickAttr;
  if (context === 'history') {
    onClickAttr = 'openHistoryDetail(' + item.id + ')';
  } else if (context === 'host') {
    onClickAttr = "openTnDetail(" + item.id + ", 'host')";
  } else {
    onClickAttr = 'openTnDetail(' + item.id + ')';
  }
  return '<div class="tn-card host-card" onclick="' + onClickAttr + '">' +
    '<div class="host-card-main">' +
      '<span class="tn-badge ' + s.cls + '">' + s.label + '</span>' +
      '<div class="host-card-title">' + item.name + '</div>' +
      dateLine +
      '<div class="host-card-type">' + typeLabel + '</div>' +
    '</div>' +
    '<div class="host-card-info">' +
      '<div class="host-card-info-row"><span class="host-card-info-label">' + buyinLabel + '</span><span class="host-card-info-value">' + buyinValue + '</span></div>' +
      '<div class="host-card-info-row"><span class="host-card-info-label">' + prizeLabel + '</span><span class="host-card-info-value' + (prizeIsNone ? ' is-none' : '') + '">' + prizeValue + '</span></div>' +
    '</div>' +
  '</div>';
}

function hostRenderList(keyword) {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;
  let items = demoTournaments.filter(item => item.status === 'draft' || item.status === 'registering' || item.status === 'canceled' || item.status === 'finished');
  if (keyword) {
    const kw = keyword.toLowerCase();
    items = items.filter(item => item.name.toLowerCase().includes(kw));
  }
  const el = document.getElementById('hostTnList');
  if (!el) return;
  const emptyMsg = t.host_empty || '개설한 토너먼트가 없습니다';
  el.innerHTML = items.length ? items.map(function(item) { return hostBuildCard(item, 'host'); }).join('') : '<div class="tn-empty">' + emptyMsg + '</div>';
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
    const iconSrc = tx.type === 'gold' ? 'images/icon_gold.png' : 'images/icon_diamond.png';
    const icon = '<img src="' + iconSrc + '" alt="' + tx.type + '">';
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
  { id:114, nameKey:'skin_coral_bay', descKey:'skin_coral_bay_desc', category:'table', icon:'🪸', gradient:'linear-gradient(135deg,#0e7490,#fb7185)', currency:'gold', price:4000 },
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

// 홀카드별 수익 그리드 생성
(function(){
  var grid=document.getElementById('holecardGrid');
  if(!grid)return;
  var ranks=['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
  var won={'KQo':'+15만','Q8s':'+8만','Q7s':'+5만','JTs':'+12만','TT':'+18만'};
  var even={'88':0,'77':0,'66':0,'55':0,'44':0,'33':0,'22':0};
  var lost={'T9o':'-7만','99':'-10만'};
  for(var r=0;r<13;r++){
    for(var c=0;c<13;c++){
      var cell=document.createElement('div');
      cell.className='holecard-cell';
      var label;
      if(r===c){label=ranks[r]+ranks[c];}
      else if(c>r){label=ranks[r]+ranks[c]+'s';}
      else{label=ranks[c]+ranks[r]+'o';}
      var amount='';
      if(lost[label]){cell.classList.add('lost');amount=lost[label];}
      else if(won[label]){cell.classList.add('won');amount=won[label];}
      else if(label in even){cell.classList.add('even');}
      if(amount){
        cell.innerHTML='<span class="hc-label">'+label+'</span><span class="hc-amount">'+amount+'</span>';
      }else{
        cell.textContent=label;
      }
      grid.appendChild(cell);
    }
  }
})();

// Notice Popup
function openWelcomePopup(){
  var p=document.getElementById('welcomePopup');
  if(p) p.classList.add('active');
}
function closeWelcomePopup(){
  var p=document.getElementById('welcomePopup');
  if(!p) return;
  var hide=document.getElementById('welcomePopupHide');
  if(hide && hide.checked){
    try{ localStorage.setItem('welcomePopupHideUntil', String(Date.now()+24*60*60*1000)); }catch(e){}
  }
  p.classList.remove('active');
}
(function(){
  try{
    var until=parseInt(localStorage.getItem('welcomePopupHideUntil')||'0',10);
    if(until && Date.now()<until) return;
  }catch(e){}
  var run=function(){ setTimeout(openWelcomePopup, 300); };
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', run);
  }else{
    run();
  }
})();
