---
name: daily-brief
description: 매일 오전 6시: AI·경제 뉴스 수집, 페이스북 피드 읽기, 투자 리포트 작성 후 data.js 업데이트
---

## Daily Brief 자동 생성 태스크

매일 오전 6시에 실행되는 Daily Brief 자동화 태스크입니다. 아래 단계를 순서대로 실행하세요.

---

## 목표

`C:\Users\johyj\OneDrive\문서\ClaudeProject\daily_news\data.js` 파일을:
1. 기존 TODAY를 pastDay 아카이브로 보존
2. 오늘 날짜의 실제 뉴스·시장 데이터로 TODAY 업데이트

---

## 0단계: 기존 data.js 읽기

**Read 도구**로 `C:\Users\johyj\OneDrive\문서\ClaudeProject\daily_news\data.js` 파일을 읽으세요.

현재 `const TODAY = { ... }` 블록의 날짜(iso 값)와 기존 아카이브 목록(`D_MMDD` 상수들, `window.BRIEF_DATES`)을 파악하세요.

---

## 1단계: 시장 데이터 수집

**WebSearch**로 아래 데이터를 수집하세요:
- "S&P 500 today close price"
- "NASDAQ today close"
- "KOSPI 오늘 종가"
- "BTC bitcoin price today"
- "USD KRW exchange rate today"
- "US 10 year treasury yield today"
- "WTI crude oil price today"

수집할 항목: KOSPI, S&P 500, NASDAQ, BTC, $/₩, 10Y UST, WTI (값, 등락률, up/down 여부)

---

## 2단계: AI 뉴스 수집 (5개, url 필드 필수)

**WebSearch**로 다음을 검색하세요:
- "AI news today latest"
- "Anthropic Claude news today"
- "OpenAI news today"
- "Google AI news today"
- "Meta AI news today"

각 뉴스에 대해:
- `weight`: 'high' (2-3개) 또는 'low' (나머지)
- `time`: 발행 시각 HH:MM 형식
- `source`: 출처 언론사명
- `headline`: 핵심 제목 (한국어)
- `url`: 원문 기사 URL — **반드시 WebSearch 결과에서 실제 URL을 복사하여 포함**, 없으면 `''`
- `bullets`: high weight만 — 3개 bullet (무슨 일, 수치, 의미)
- `why`: high weight만 — "왜 중요한가" 한두 문장

`summary`: 오늘 AI 뉴스 전체를 2~3문장으로 요약.

---

## 3단계: 경제 뉴스 수집 (5개, url 필드 필수)

**WebSearch**로 다음을 검색하세요:
- "한국 경제 뉴스 오늘"
- "미국 경제 지표 오늘 CPI 고용 연준"
- "글로벌 경제 뉴스 오늘"
- "Fed news today"

각 뉴스에 대해 2단계와 동일한 형식으로 작성. `url` 필드 필수.
`summary`: 오늘 경제 뉴스를 2~3문장으로 요약.

---

## 4단계: 컬럼리스트 피드 수집

**Claude in Chrome**을 사용하여 아래 페이지의 최근 게시물을 읽으세요:

- URL: `https://www.facebook.com/ohrang79/?locale=ko_KR`

1. `mcp__Claude_in_Chrome__list_connected_browsers`로 브라우저 확인
2. `mcp__Claude_in_Chrome__navigate`로 해당 URL 이동
3. `mcp__Claude_in_Chrome__get_page_text`로 페이지 텍스트 추출
4. 최근 게시물(오늘 또는 어제 게시된 것) 추출

접근 불가 시 `items: []`, summary에 "오늘 새 게시물 없음" 명시.

컬럼리스트 항목 형식:
```
{
  name: '오건영',
  title: '신한은행 · 디지털 크리에이터',
  avatar: 'OG',
  color: '#D97757',
  time: '오늘 HH:MM',
  likes: 0,
  comments: 0,
  post: '(원문 또는 요약)',
  summary: '(핵심 한 줄 요약)'
}
```

---

## 5단계: 투자 리포트 작성

수집한 AI·경제 뉴스, 시장 데이터를 종합하여 투자 인사이트 메모를 작성하세요.

```javascript
invest: {
  title: '(오늘의 핵심 투자 테마 — 15자 이내)',
  subtitle: `Claude가 작성한 오늘의 메모 · MM월 DD일 HH:MM · N분 읽기`,
  sections: [
    { h: '한 줄 요약', body: '...' },
    { h: '오늘의 변수', body: '...' },
    { h: '포지셔닝', body: '단기(1-3개월)..., 중기(6-12개월)...' },
    { h: '리스크', body: '...' }
  ],
  watchlist: [
    { sym: '티커', name: '종목명', val: '현재가', pct: '±X.XX%', up: true/false, note: '한 줄 이유' }
  ]
}
```

watchlist는 오늘 뉴스와 관련된 3~5개 종목 선정.

---

## 6단계: data.js 파일 업데이트

### 6-1. 기존 TODAY를 아카이브 상수로 추가

0단계에서 확인한 기존 TODAY의 날짜 iso 값(예: '2026-05-11')을 기반으로 상수명을 만듭니다:
- `2026-05-11` → `D_0511`

**Edit 도구**로 data.js에서 기존 `const TODAY = { ... };` 블록 **바로 아래 줄**에 다음을 추가하세요:

```javascript
const D_MMDD = pastDay(TODAY, false);
```

단, 동일 날짜의 `D_MMDD` 상수가 이미 존재하면 이 단계를 건너뜁니다.

### 6-2. 새 TODAY 교체

**Edit 도구**로 기존 `const TODAY = { ... };` 전체를 오늘 날짜 데이터로 교체하세요:

```javascript
const TODAY = {
  date: { iso: 'YYYY-MM-DD', label: 'YYYY년 M월 D일 요일', shortLabel: 'M월 D일 (요)', isToday: true },
  marketStrip: [
    { sym: 'KOSPI',  val: '...',    pct: '+X.XX%', up: true },
    { sym: 'S&P',    val: '...',    pct: '+X.XX%', up: true },
    { sym: 'NASDAQ', val: '...',    pct: '+X.XX%', up: true },
    { sym: 'BTC',    val: '$...',   pct: '+X.XX%', up: true },
    { sym: '$/₩',    val: '...',    pct: '+X.XX%', up: false },
    { sym: '10Y',    val: 'X.XX%',  pct: '+Xbp',   up: false },
    { sym: 'WTI',    val: '$...',   pct: '+X.XX%', up: true },
  ],
  ai: {
    label: 'AI 뉴스',
    summary: '...',
    items: [
      {
        weight: 'high', time: 'HH:MM', source: '언론사',
        headline: '헤드라인 (한국어)',
        url: 'https://실제기사URL',
        bullets: ['첫 번째 bullet', '두 번째 bullet', '세 번째 bullet'],
        why: '왜 중요한가 한두 문장'
      },
      { weight: 'low', time: 'HH:MM', source: '언론사', headline: '헤드라인', url: 'https://...' },
    ]
  },
  econ: {
    label: '경제 뉴스',
    summary: '...',
    items: [
      {
        weight: 'high', time: 'HH:MM', source: '언론사',
        headline: '헤드라인 (한국어)',
        url: 'https://실제기사URL',
        bullets: ['첫 번째 bullet', '두 번째 bullet', '세 번째 bullet'],
        why: '왜 중요한가 한두 문장'
      },
      { weight: 'low', time: 'HH:MM', source: '언론사', headline: '헤드라인', url: 'https://...' },
    ]
  },
  columns: {
    label: '컬럼 피드',
    summary: '...',
    items: []
  },
  invest: {
    title: '투자 테마',
    subtitle: 'Claude가 작성한 오늘의 메모 · MM월 DD일 HH:MM · N분 읽기',
    sections: [
      { h: '한 줄 요약', body: '...' },
      { h: '오늘의 변수', body: '...' },
      { h: '포지셔닝', body: '...' },
      { h: '리스크', body: '...' }
    ],
    watchlist: [
      { sym: 'TICKER', name: '종목명', val: '가격', pct: '±X.XX%', up: true, note: '한 줄 이유' }
    ]
  }
};
```

**중요**: 모든 뉴스 아이템에 `url` 필드를 반드시 포함. 실제 기사 URL이 없으면 `''`.

### 6-3. BRIEF_ARCHIVE / BRIEF_DATES 업데이트

data.js 하단의 `window.BRIEF_ARCHIVE` 및 `window.BRIEF_DATES` 블록을 **Edit 도구**로 업데이트하세요:

1. `window.BRIEF_DATES` 배열 맨 앞에 오늘 날짜(`'YYYY-MM-DD'`) 추가 (이미 있으면 제외)
2. `window.BRIEF_ARCHIVE['YYYY-MM-DD'] = TODAY;` 줄 추가
3. 6-1에서 만든 `D_MMDD` 상수를 `window.BRIEF_ARCHIVE['어제날짜'] = D_MMDD;`로 등록
4. `window.BRIEF_DATES` 배열 길이가 30을 초과하면 뒤에서 초과분 제거

---

## 완료 조건

- data.js 파일이 오늘 날짜의 실제 데이터로 업데이트됨
- 전날 TODAY가 `D_MMDD` 상수로 아카이브됨
- `window.BRIEF_ARCHIVE` / `window.BRIEF_DATES`에 오늘 날짜 포함, 30일 한도 유지
- 파일 문법 오류 없음 (JavaScript 유효)
- 모든 뉴스 아이템에 `url` 필드 포함 (없으면 `''`)

완료 후: "Daily Brief YYYY-MM-DD 업데이트 완료" 메시지를 출력하세요.
