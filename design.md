# Poker Lulu Design System

## 1. Visual Theme & Atmosphere

Poker Lulu is a social poker platform with a dark, immersive UI that evokes the atmosphere of a premium poker lounge. The interface is built on deep blacks and dark navy backgrounds, punctuated by a bold orange accent that serves as the brand's signature color. The overall feel is modern, game-centric, and mobile-first — designed to be comfortable during long gameplay sessions.

The typography is anchored by Pretendard Variable, a Korean-optimized sans-serif that provides clean readability across all sizes. Display moments — like the main banner — use Isamanru and Bebas Neue for dramatic, gold-embossed headlines that contrast against the dark canvas. Inter is loaded as a secondary font for specific UI elements like login inputs.

The color story is warm-on-dark. The primary background (`#07070d`) is a near-black with a subtle blue tint, layered with a radial gradient that adds depth without distraction. Cards and surfaces use progressively lighter dark tones (`#14141f`, `#1a1a2e`) to create elevation through color alone. The singular accent — Lulu Orange (`#F96217`) — is reserved for interactive elements: buttons, active states, and attention-grabbing indicators. This focused use of color ensures every interactive element is immediately identifiable.

**Key Characteristics:**
- Pretendard Variable as the primary typeface, with Isamanru/Bebas Neue for display moments
- Dark immersive backgrounds with blue-tinted radial gradient
- Single primary accent: Lulu Orange (`#F96217`) for all interactive elements
- Card-based UI with subtle border separators (`#1e1e30`) rather than heavy shadows
- Glassmorphism navigation with backdrop blur and semi-transparent backgrounds
- Generous use of gradients on CTAs (orange gradient buttons)
- Game-centric visual language: live dots, pulse animations, status badges
- Mobile-first responsive design with dedicated mobile navigation and layout

## 2. Color Palette & Roles

### Primary & Accent
- **Lulu Orange** (`#F96217`): Primary brand color, CTA buttons, active states, hover accents. The singular interactive color.
- **Orange Dark** (`#d4510f`): Gradient endpoint for buttons, pressed states.
- **Orange Secondary** (`#FF7C1D`): Lighter orange variant for secondary accents.
- **Accent Purple** (`#7c3aed`): Secondary accent for special elements.
- **Accent Violet** (`#8b5cf6`): Tournament section highlights, decorative use.
- **Accent Pink** (`#ec4899`): Coming soon badges, promotional elements.
- **Accent Gold** (`#f59e0b`): Currency display, coin indicators, VIP elements.
- **Accent Emerald** (`#10b981`): Success states, open table indicators.

### Backgrounds
- **Body Dark** (`#07070d`): Page background base, deepest layer.
- **Card** (`#14141f`): Standard card/surface background.
- **Card Hover** (`#1a1a2e`): Elevated card state on hover.
- **Nav** (`#0d0d18`): Navigation bar, footer background.
- **Depth 200** (`#212121`): Secondary surface layer.
- **Depth 250** (`#171717`): Alternate depth surface.
- **Depth 300** (`#292929`): Elevated surface.
- **Depth 400** (`#343434`): Highest dark surface.

### Text
- **Primary** (`#f1f1f7`): Main text on dark backgrounds. Slightly warm white.
- **Secondary** (`#9ca3af`): Supporting text, meta values.
- **Muted** (`#6b7280`): Labels, placeholders, tertiary text.
- **Title** (`#FEFEFE`): Highest contrast text, near-pure white.
- **Gold** (`#FFD230`): Special highlight text, currency values.

### Border & Line
- **Border Color** (`#1e1e30`): Primary border for cards, dividers, input fields.
- **Border Light** (`#2a2a44`): Subtle borders on tabs, sliders.
- **Border Subtle** (`#1a1a2a`): Lightest border treatment.
- **Border 300** (`#343434`): Medium border on depth surfaces.
- **Border 400** (`#404040`): Stronger border treatment.

### System (Semantic)
- **Error** (`#CD0C0C`): Error states, validation failures.
- **Success** (`#3363DB`): Success confirmations.
- **Process** (`#48D481`): Active/in-progress states, green indicators.
- **Warning** (`#F7DF4E`): Warning notifications.

### Glow & Overlay
- **Glow Orange** (`rgba(249,98,23,0.3)`): Button hover glow, card hover accents.
- **Modal Overlay** (`rgba(0,0,0,0.6)`): Modal backdrop with blur(4px).
- **Nav Background** (`rgba(13,13,24,0.92)`): Semi-transparent navigation with blur(20px).

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard Variable`, `Pretendard`, `-apple-system`, `sans-serif` — used for all UI text
- **Display**: `Isamanru`, `Bebas Neue`, `sans-serif` — used for banner headlines with metallic gradient effects
- **Input**: `Inter` (400-900) — used for specific form inputs

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Isamanru / Bebas Neue | 56px | 900 | 1.15 | -1px | Banner headlines with gold/silver gradient text effects |
| Page Heading | Pretendard | 28px | 800 | 1.2 | — | Hero section titles |
| Section Title | Pretendard | 22px | 800 | 1.2 | -0.5px | Section headers with tight tracking |
| Stat Value | Pretendard | 22px | 800 | 1.2 | — | Large numeric displays |
| Card Title | Pretendard | 18px | 800 | — | — | Game card names |
| Modal Header | Pretendard | 18px | 700 | — | — | Modal dialog titles |
| Table Name | Pretendard | 17px | 500 | — | — | Table/room names |
| Banner Sub | Pretendard | 16px | 400 | — | — | Banner subtitle text |
| Slide Menu | Pretendard | 15px | 500 | — | — | Mobile menu items |
| Nav Link | Pretendard | 14px | 500 | — | — | Desktop navigation tabs |
| Body | Pretendard | 14px | 400 | 1.5 | — | Standard reading text |
| Button Large | Pretendard | 15px | 700 | 1 | — | Login button, primary CTAs |
| Button | Pretendard | 13px | 700 | 1 | — | Standard buttons |
| Social Button | Pretendard | 14px | 600 | 1 | — | Social login buttons |
| Input | Inter | 14px | 400 | — | — | Form input fields |
| Label | Pretendard | 13px | 600 | — | — | Form labels, field labels |
| Caption | Pretendard | 12px | 600 | — | 0.5px | Table headers, secondary labels |
| Badge | Pretendard | 11px | 700 | — | — | Status badges, tags |
| Micro | Pretendard | 10px | 800 | — | 0.5px | Tiny tags, live indicators |
| Footer | Pretendard | 12px-13px | — | — | — | Footer text and links |

### Principles
- **Weight as hierarchy**: The scale spans 400 (regular) to 900 (black). Headlines use 800-900 for maximum impact, body stays at 400, and interactive elements (buttons, labels) sit at 600-700.
- **Tight tracking on headlines**: Section titles use -0.5px letter-spacing, banner titles use -1px. Body text uses default tracking.
- **Compact line-heights**: Most UI elements use line-height: 1 for tight, controlled layouts. Body text opens to 1.5 for comfortable reading.
- **Display font for drama only**: Isamanru/Bebas Neue appear exclusively in the hero banner with metallic gradient text effects. All other text uses Pretendard.

## 4. Component Stylings

### Buttons

**Primary CTA (Orange Gradient)**
- Background: `linear-gradient(135deg, #F96217, #d4510f)`
- Text: `#ffffff`, 15px, weight 700
- Padding: 15px 14px 14px
- Radius: 12px
- Border: none
- Hover: `box-shadow: 0 4px 24px rgba(249,98,23,0.3)`, `translateY(-1px)`
- Active: `scale(0.95)`
- Use: Login, primary actions, "Buy" buttons

**Standard Button (Orange Gradient)**
- Background: `linear-gradient(135deg, #F96217, #d4510f)`
- Text: `#ffffff`, 13px, weight 700
- Padding: 11px 24px 10px (medium), 10px 12px (small)
- Radius: 12px
- Hover: `box-shadow: 0 4px 20px rgba(249,98,23,0.3)`, `translateY(-1px)`
- Use: Table join, package buy, form submit

**Secondary / Ghost Button**
- Background: `#23233a`
- Text: `var(--text-secondary)`
- Border: 1px solid `var(--border-color)`
- Radius: 12px
- Use: Cancel, spectate, secondary actions

**Table Join Button**
- Background: `linear-gradient(135deg, #F96217, #d4510f)`
- Text: `#ffffff`, 13px, weight 700
- Padding: 10px
- Radius: 10px
- Full width within card
- Hover: glow shadow + translateY(-1px)

### Cards & Containers

**Standard Card**
- Background: `var(--bg-card)` (#14141f)
- Border: 1px solid `var(--border-color)` (#1e1e30)
- Radius: 6px
- Padding: 16px-20px
- Hover: `border-color: rgba(249,98,23,0.2-0.4)`, `transform: translateY(-2px)`, `background: var(--bg-card-hover)`

**Game Card**
- Background: none (transparent)
- Radius: 16px
- Padding: 12px 16px 16px
- Text-align: center
- Hover: `transform: translateY(-6px)`, icon scales to 1.08

**Shop Card**
- Background: `var(--bg-card)`
- Radius: 20px
- Overflow: hidden
- Hover: `transform: translateY(-4px)`, `box-shadow: 0 8px 24px rgba(249,98,23,0.15)`

### Input Fields
- Background: `var(--bg-card)` (#14141f)
- Border: 1px solid `var(--border-color)`
- Radius: 12px
- Padding: 14px 18px
- Font: Inter, 14px, weight 400
- Focus: `border-color: var(--accent-orange)`
- Placeholder: `color: var(--text-muted)`

### Modals
- Overlay: `rgba(0,0,0,0.6)` with `backdrop-filter: blur(4px)`
- Card: max-width 420px, max-height 85vh
- Background: `#0f0f1a`
- Border: 1px solid `var(--border-color)`
- Radius: 6px
- Shadow: `0 12px 40px rgba(0,0,0,0.6)`
- Animation: 0.25s ease — opacity 0 to 1, scale(0.95) to scale(1), translateY(10px) to 0
- Header: 18px, weight 700, padding 20px 24px 0
- Close button: 24px icon, color `var(--text-muted)`, hover `var(--text-primary)`
- Content: padding 20px 24px 24px
- Dismiss: overlay click or close button

### Alert Dialog (확인 다이얼로그)
Compact confirmation variant of Modal — used for "정말 X 하시겠습니까?" style prompts where the user must choose between two actions. Typical use cases: 등록 취소, 아이템 삭제, 탈퇴, 파괴적 액션 확인.

**Card**
- Max-width 320px, radius 16px (Modal보다 컴팩트·둥근 형태)
- Background, border, shadow, overlay: inherits from Modal
- Body padding: `24px 24px 20px`, text-align center

**Title** (`.alert-title`)
- Font: 18px / weight 700 (일반 모달 헤더와 동일)
- Color: `var(--color-text-primary)`
- Margin: `0 0 8px`

**Message** (`.alert-message`)
- Font: 14px, line-height 1.5
- Color: `var(--color-text-muted)`
- Margin: `0 0 20px`
- Supports `white-space: pre-line` (줄바꿈 보존)

**Buttons** (`.alert-buttons`)
- Two-button layout: `flex: 1:1`, gap `10px`
- Padding `13px 12px 12px`, radius `12px`, weight 700, font 14px, line-height 1 (**일반 모달의 `.sp-cancel-btn` / `.sp-confirm-btn` 과 동일 스펙**)
- **두 버튼 모두 `border:1px` 슬롯 확보** — cancel은 실제 보더 색상, confirm은 투명 보더 → 내부 내용 영역이 정확히 동일하게 정렬
- Left (cancel/dismiss): `#23233a` bg + border `var(--color-border)`, text-secondary color
- Right (confirm): Primary orange gradient CTA — **파괴적 액션(등록 취소, 탈퇴, 삭제 등 포함)도 동일한 Primary 버튼 스타일 사용**. 별도의 danger(빨간) 변형은 운용하지 않음.

**No close button (X)** — Alert dialogs require explicit button choice. 사용자는 반드시 두 버튼 중 하나를 선택해야 함.

**JS API**
```js
showAlert({
  title: '등록 취소',
  message: '등록을 취소합니다. 사용한 바이인은 환불됩니다.',
  cancelText: '돌아가기',
  confirmText: '등록 취소',
  onConfirm: function() { /* action */ },
  onCancel: function() { /* optional */ },
});
```

### Navigation

Navigation has 5 distinct variants across device and auth state.

**PC — Logged In (≥769px)**
- Height: 64px
- Background: `rgba(13,13,24,0.92)` with `backdrop-filter: blur(20px)`
- Border-bottom: 1px solid `var(--border-color)`
- Position: sticky, top 0, z-index 100
- Logo: inline SVG (POKER LULU full wordmark), height 32px
- Links: 6 items (로비, 홀덤, 토너먼트, 상점, 통계, MY 룰루)
- Link style: 14px, weight 500, color `var(--text-secondary)`, padding 6px 12px, radius 8px, border 1px solid transparent
- Active link: color `#000`, background `#E0E0E0`, border-color `#FEFEFE`, weight 700
- Tab slider: animated background that follows active tab (0.3s cubic-bezier(0.4,0,0.2,1))
- Right area: gold coins pill + diamond coins pill + avatar (38px circle, border 2px solid `rgba(249,98,23,0.4)`)
- Coins pill: padding 6px 14px, radius 20px, font 13px weight 700, gold `rgba(245,158,11,0.1)` bg / diamond `rgba(96,165,250,0.1)` bg

**PC — Logged Out (≥769px)**
- Same as logged in except:
- Right area: coins hidden, login button only
- Login button: padding 8px 20px, radius 10px, orange gradient, 14px weight 700

**Tablet (769px–960px)**
- Same top-nav structure as PC
- Logo: icon only (`images/login_icon.svg`, 32px), full SVG wordmark hidden
- Coins: hidden
- Links: same 6 items remain visible
- Right area: avatar or login button (same toggle as PC)

**Mobile — Logged In (≤768px)**
- Top bar (`.m-nav`): height 64px, background `#0d0d18`, border-bottom 1px solid `var(--border-color)`, sticky top
  - Logo: `images/logo_mobile.svg`, height 36px
  - Right: gold coins pill + diamond coins pill + hamburger menu icon (26px)
  - Coins pill: padding 6px 12px, radius 16px, font 13px weight 700
  - Hamburger opens slide-out menu (280px, from right, 0.3s ease)
- Bottom tabbar (`.m-tabbar`): fixed bottom, height 94px (incl. safe area)
  - Background: `rgba(13,13,24,0.65)` with `backdrop-filter: blur(24px) saturate(180%)`
  - Border-top: 1px solid `rgba(255,255,255,0.08)`
  - 4 tabs: 로비, 상점, 통계, MY 룰루
  - Tab: icon (28px) + label (13px weight 600), color `var(--text-muted)`
  - Active tab: color `var(--accent-orange)`, icon `drop-shadow(0 0 6px rgba(249,98,23,0.4))`
  - MY 룰루 tab: user avatar (28px circle) replaces default icon when logged in

**Mobile — Logged Out (≤768px)**
- Top bar: same structure except:
  - Coins: hidden
  - Hamburger menu: hidden
  - Right area: login button only (height 40px, padding 0 18px, radius 16px, orange gradient, 15px weight 700)
- Bottom tabbar: same except MY 룰루 tab shows default user silhouette icon instead of avatar

### Badges & Tags

**Tournament Status Badge** (`.tn-badge`)
Base: 11px / weight 700 / padding 4px 10px / radius 6px · background uses 15-18% alpha of text color

| Class | Label | Background | Text Color |
|---|---|---|---|
| `.tn-badge.registering` | 등록중 | `rgba(34,197,94,0.15)` | `#22c55e` (green) |
| `.tn-badge.ongoing` | 진행중 | `rgba(249,98,23,0.15)` | `#F96217` (primary orange) |
| `.tn-badge.lateReg` | 추가등록 | `rgba(239,68,68,0.18)` | `#ef4444` (red) |
| `.tn-badge.finished` | 종료 | `rgba(107,114,128,0.15)` | muted text |
| `.tn-badge.draft` | 임시저장 | `rgba(247,223,78,0.18)` | `#F7DF4E` (warning yellow) |
| `.tn-badge.canceled` | 취소 | `rgba(205,12,12,0.18)` | `#CD0C0C` (error red) |

**Registered Badge** (`.tn-badge-registered`)
카드 우측 상단에서 "내가 등록된 토너먼트"를 강조하는 배지. 동일한 Status Badge 스타일에 청색 배색 + **펄스 도트** 추가.
- Background: `rgba(96,165,250,0.15)` · Text: `#60a5fa`
- Inner `<span class="tn-registered-dot">` — 6×6 원형, `#60a5fa`, `::after`로 `live-pulse` 2s 애니메이션 (scale 0.8→2.2 + 페이드)
- `gap:6px` 로 도트와 텍스트 간격 확보

**Holdem Game Tags** (`.hd-tag`)
홀덤 카드 하단에 붙는 게임 타입·최대인원 태그. Radius는 Status Badge보다 작은 4px로 차별화.
Base: 11px / weight 700 / padding 4px 10px / radius 4px / letter-spacing 0.2px

| Class | Label | Background | Text Color |
|---|---|---|---|
| `.hd-tag-holdem` | 홀덤 | `#2e3520` (dark olive) | `#c2d43e` (lime-olive) |
| `.hd-tag-squid`  | 오징어 | `#3a1d2a` (dark burgundy) | `#e85a8b` (pink) |
| `.hd-tag-72`     | 72 | `#1e3a2d` (dark green) | `#4ade80` (lime green) |
| `.hd-tag-max`    | 6max / 9max | `#3a2d14` (dark amber) | `#f5a623` (amber) |

게임 타입 태그는 이벤트 카테고리(A/B/C)에 매핑되고, max 태그는 플레이어 정원을 표기합니다.

**Shop Tag**
- 10px / weight 800 / padding 3px 8px / radius 6px

**Coming Badge** (promotional)
- Gradient `#A72FC5 → #E040A0` · pill shape · shimmer animation (2.5s ease-in-out infinite)

### Tabs
- Container: background `#010104`, border 1px solid `#1a1a2a`, radius 14px, padding 7px
- Tab item: height 43px, padding 0 16px, font 14px weight 700, radius 10px
- Active: background `#1f1f35`, color `#fff`, border 1px solid `#2a2a44`
- Inactive: color `var(--text-muted)`, transparent background

### Toggle Switch
- Track: width 50px, height 28px, radius 28px, background `var(--border-color)`
- Thumb: width 22px, height 22px, circle, offset 3px
- Active: track background `var(--accent-orange)`, thumb translateX(22px)
- Transition: 0.3s

### Tables
- Border-collapse: collapse
- Font: 13px
- Header: background `rgba(255,255,255,0.04)`, font 12px weight 700, uppercase, letter-spacing 0.5px
- Cell padding: 10px 16px
- Row border: 1px solid `var(--border-color)` bottom
- Row hover: `background: rgba(255,255,255,0.03)`

### Tournament Section Headers
- Padding: 10px 18px, font 15px weight 800
- Border: 1px solid `rgba(255,255,255,0.05)`
- Color variants with left-gradient backgrounds:
  - Green: `#4ade80` / `rgba(34,197,94,0.12)`
  - Purple: `#a78bfa` / `rgba(139,92,246,0.12)`
  - White: `#e5e7eb` / `rgba(255,255,255,0.06)`
  - Gold: `#fbbf24` / `rgba(251,191,36,0.12)`
  - Red: `#f87171` / `rgba(239,68,68,0.14)`

## 5. Layout Principles

### Spacing System
- Base scale: 4px, 6px, 8px, 10px, 12px, 14px, 16px, 20px, 24px, 32px, 40px, 48px
- Card padding: 16px-24px
- Section gap: 20px-40px margin-bottom
- Grid gap: 12px-20px
- Button padding: 10px-15px vertical, 12px-24px horizontal
- Input padding: 14px 18px

### Grid & Container
- Max content width: 1080px (`--content-width`)
- Content wrapper: `max-width: var(--content-width)`, margin 0 auto, padding 0 24px
- Game modes: 5-column grid (`repeat(5, 1fr)`)
- Live tables: 4-column grid (`repeat(4, 1fr)`)
- Stats: 4-column grid (`repeat(4, 1fr)`)
- Packages: 3-column grid (`repeat(3, 1fr)`)
- Navigation: full-width sticky bar with padded inner container (0 48px)

### Whitespace Philosophy
- **Dark breathing room**: Sections are separated by 20px-48px margins. The dark background itself provides visual separation — lighter surface colors on dark canvas create natural groupings.
- **Vertical rhythm through cards**: Rather than heavy whitespace, the card-based layout creates rhythm. Each card is a self-contained unit with consistent internal padding and border separation.
- **Density in data, space in navigation**: Data-heavy areas (tables, stats) are compact with tight padding. Navigation and hero areas are spacious and open.

### Border Radius Scale
- Micro (3-4px): Checkboxes, progress bars
- Small (6px): Standard cards, stat cards, table cards, badges
- Medium (8px): Navigation links
- Standard (10px): Tab items, join buttons, stepper values
- Large (12px): Buttons, input fields
- Extra Large (14px): Tab containers
- Rounded (20px): Shop cards, banner badges, coin display, pills
- Full Circle (50%): Avatars, toggle thumbs, stepper buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | Solid `var(--bg-card)`, 1px border | Standard cards, containers |
| Nav Glass | `backdrop-filter: blur(20px)` on `rgba(13,13,24,0.92)` | Sticky navigation bar |
| Card Hover (Level 1) | `border-color: rgba(249,98,23,0.2-0.4)`, `translateY(-2px)` | Card hover states |
| Button Glow | `box-shadow: 0 4px 20px rgba(249,98,23,0.3)` | Button hover states |
| Modal (Level 2) | `box-shadow: 0 12px 40px rgba(0,0,0,0.6)` on `#0f0f1a` | Modal dialogs |
| Modal Overlay | `rgba(0,0,0,0.6)` + `backdrop-filter: blur(4px)` | Behind modals |
| FAB | `box-shadow: 0 2px 12px rgba(0,0,0,0.3)` + `backdrop-filter: blur(12px)` | Floating action buttons |

**Shadow Philosophy**: Poker Lulu uses shadow sparingly. Elevation is primarily communicated through background color shifts (darker to lighter) and border treatments rather than drop shadows. The orange glow (`rgba(249,98,23,0.3)`) on button hovers is the most prominent shadow effect — it reinforces the brand color while providing interactive feedback. Modal shadows are large and diffused to create clear layer separation against the dark interface.

### Animations & Transitions
- **Standard transition**: `all 0.2s` — buttons, cards, links
- **Smooth transition**: `all 0.25s` — card hovers, nav items
- **Cubic bezier**: `0.3s cubic-bezier(0.4,0,0.2,1)` — tab slider movement
- **Banner crossfade**: `opacity 0.8s ease` — slide transitions
- **Modal entrance**: `0.25s ease` — scale + opacity + translateY
- **Live pulse**: `2s ease-out infinite` — opacity + scale animation for live indicators
- **Open blink**: `1.5s ease-in-out infinite` — opacity blink for open table dots
- **Badge shimmer**: `2.5s ease-in-out infinite` — horizontal light sweep on coming badges

## 7. Do's and Don'ts

### Do
- Use Pretendard Variable for all UI text — it is the system font
- Use Lulu Orange (`#F96217`) gradient buttons for all primary CTAs
- Use `var(--bg-card)` (#14141f) for card backgrounds with 1px border
- Apply `backdrop-filter: blur(20px)` on sticky navigation
- Use 6px border-radius for standard cards, 12px for buttons and inputs
- Keep cards interactive with hover: border-color shift + translateY(-2px)
- Use the orange glow `rgba(249,98,23,0.3)` for button hover shadows
- Alternate between card backgrounds and page background for visual grouping
- Use weight 800 for section titles, 700 for buttons, 500-600 for labels

### Don't
- Don't introduce additional interactive accent colors — orange is the singular CTA color
- Don't use heavy drop shadows on cards — borders and background color create elevation
- Don't use Isamanru/Bebas Neue outside of the hero banner — they are display-only fonts
- Don't use pure white (`#ffffff`) for body text — use `var(--text-primary)` (#f1f1f7) instead
- Don't use border-radius larger than 20px on rectangular elements (except pills and circles)
- Don't make navigation opaque — the glass blur effect is essential to the Poker Lulu UI
- Don't use borders thicker than 1px on cards — keep them subtle
- Don't set line-height above 1.5 for UI text — the interface is designed to be compact
- Don't add textures or patterns — dark solid colors and subtle gradients only

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Desktop | >=768px | Full layout, 4-5 column grids, top-nav visible |
| Tablet | 769-960px | Reduced nav coins, adjusted padding |
| Mobile | <=768px | Mobile nav, 2-column grids, hidden game modes |
| Small Mobile | <=412px | Compact login layout, reduced margins |
| Extra Small | <=375px | Hidden dividers, minimal spacing |

### Mobile Adaptations
- Desktop top-nav hidden, replaced with mobile bottom tab bar (m-nav)
- Footer hidden, replaced with mobile footer (m-footer)
- Game modes grid: hidden on mobile
- Tables grid: 4 columns to 2 columns
- Package grid: 3 columns to 2 columns
- Stats grid: 4 columns to 2x2
- Banner height: 400px to 200px
- Tabs: pill-style tabs become underline-style fixed below nav
- Safe area support: `env(safe-area-inset-*)` for notched devices
- Slide-out menu for navigation with glassmorphism background

### Touch Targets
- Primary buttons: minimum ~44px touch height (15px vertical padding)
- Tab items: 43px height
- Toggle: 50px x 28px
- Navigation links: 6px 12px padding within 64px nav height
- Game card icons: 100px x 100px touch area
- Mobile tabbar: 94px height + safe area inset

### Image Behavior
- Banner images: `background-size: cover`, `background-position: center`
- Game icons: 100px x 100px, `object-fit: contain`, scale(1.08) on hover
- Avatars: circular crop with 2px orange-tinted border
- Product images: constrained within card boundaries, `object-fit: contain`

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Orange gradient (`#F96217` to `#d4510f`)
- Page background: `#07070d` with radial gradient
- Card background: `#14141f`
- Card hover: `#1a1a2e`
- Nav background: `rgba(13,13,24,0.92)` + blur(20px)
- Text primary: `#f1f1f7`
- Text secondary: `#9ca3af`
- Text muted: `#6b7280`
- Border: `#1e1e30`
- Button glow: `rgba(249,98,23,0.3)`
- Active tab: `#E0E0E0` background, `#000` text
- Modal overlay: `rgba(0,0,0,0.6)` + blur(4px)

### Example Component Prompts
- "Create a card on dark background. Background `#14141f`, border 1px solid `#1e1e30`, border-radius 6px, padding 20px. Title at 17px Pretendard weight 500, color `#f1f1f7`. Meta labels at 13px color `#6b7280`, values at 13px weight 600 color `#9ca3af`. Full-width orange gradient button at bottom: `linear-gradient(135deg, #F96217, #d4510f)`, white text, 13px weight 700, radius 10px, padding 10px. Hover: border-color `rgba(249,98,23,0.3)`, translateY(-2px)."
- "Design a modal dialog. Overlay: `rgba(0,0,0,0.6)` with backdrop-filter blur(4px). Card: max-width 420px, background `#0f0f1a`, border 1px solid `#1e1e30`, radius 6px. Header: 18px weight 700, padding 20px 24px 0. Content: padding 20px 24px 24px. Close button: 24px icon, color `#6b7280`. Animate in: 0.25s ease, scale(0.95) to 1, opacity 0 to 1."
- "Build the navigation bar: sticky, 64px height, background `rgba(13,13,24,0.92)` with backdrop-filter blur(20px). Border-bottom 1px solid `#1e1e30`. Links at 14px Pretendard weight 500, color `#9ca3af`, padding 6px 12px, radius 8px. Active link: color `#000`, background `#E0E0E0`, weight 700 with animated tab slider."
- "Create a tab container: background `#010104`, border 1px solid `#1a1a2a`, radius 14px, padding 7px. Tab items: height 43px, padding 0 16px, font 14px weight 700, radius 10px. Active tab: background `#1f1f35`, color white, border 1px solid `#2a2a44`. Inactive: color `#6b7280`."
- "Design a status badge: 11px weight 700, padding 4px 10px, radius 6px. For 'registering' state: background `rgba(34,197,94,0.15)`, color `#22c55e`. For 'ongoing': background `rgba(249,98,23,0.15)`, color orange."

### Iteration Guide
1. Every interactive element uses Lulu Orange (`#F96217`) — no other accent for CTAs
2. Cards use background color + border for elevation, not shadows
3. Section titles are 22px weight 800 with -0.5px tracking
4. Buttons always use the orange gradient with white text, radius 12px
5. Navigation glass effect (translucent dark + blur) is non-negotiable
6. Modals animate with scale + opacity + translateY over 0.25s
7. Hover states combine border-color shift + translateY(-2px) + optional glow shadow
8. The tab slider with cubic-bezier animation follows active tab on desktop nav
