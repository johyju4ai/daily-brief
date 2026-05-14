// Daily briefing — multi-day archive.
// BRIEF_ARCHIVE is keyed by ISO date. BRIEF_DATES is newest-first.
// Past days carry slimmer content than today (the showcase day).

const TODAY = {
  date: { iso: '2026-05-14', label: '2026년 5월 14일 목요일', shortLabel: '5월 14일 (목)', isToday: true },
  marketStrip: [
    { sym: 'KOSPI',   val: '7,844',   pct: '+2.63%', up: true  },
    { sym: 'S&P 500', val: '7,444',   pct: '+0.58%', up: true  },
    { sym: 'NASDAQ',  val: '26,402',  pct: '+1.20%', up: true  },
    { sym: 'BTC',     val: '$81,265', pct: '+0.50%', up: true  },
    { sym: '$/₩',    val: '1,490',   pct: '-0.17%', up: false },
    { sym: '10Y UST', val: '4.42%',  pct: '+0bp',   up: false },
    { sym: 'WTI',     val: '$101.02', pct: '-1.36%', up: false },
  ],
  ai: {
    label: 'AI 뉴스',
    summary: 'Anthropic이 Claude Opus 4.7을 정식 출시하며 코딩 성능 +14%, 생산 처리량 3배 향상을 공식 발표했습니다. Google은 Gemini 3.1 Pro가 GPQA 94.3%로 모든 주요 벤치마크에서 1위를 기록했다고 밝혔으며, AI 성능 경쟁이 새로운 국면에 진입했습니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'Anthropic',
        headline: 'Claude Opus 4.7 GA 정식 출시 — 코딩 +14%, 생산 처리량 3배, 3.75MP 비전',
        url: 'https://www.anthropic.com/news/claude-opus-4-7',
        bullets: [
          'Anthropic, Claude Opus 4.7 GA 정식 출시. SWE-bench 59.2%(Sonnet 대비 +14%). Aider Polyglot +11%.',
          '생산 처리량 3배 향상 및 응답 지연 35% 감소. 3.75MP 고해상도 비전 처리 지원.',
          'API 즉시 사용 가능. Enterprise 고객 대상 배치 처리 할인 50% 적용 시작.',
        ],
        why: 'Claude Opus 4.7 출시로 AI 코딩 에이전트·엔터프라이즈 자동화 시장의 판도가 달라집니다. Anthropic ARR 가속에 직결되며 경쟁사의 모델 로드맵 압박도 강해질 전망입니다.',
        notes: [
          { term: 'SWE-bench', def: '소프트웨어 엔지니어링 벤치마크. GitHub 이슈를 AI가 자동으로 해결하는 능력을 평가. 업계 표준 코딩 AI 평가 지표.' },
          { term: 'GA (General Availability)', def: '소프트웨어 정식 출시(General Availability). 베타/프리뷰 단계를 마치고 모든 사용자에게 공개되는 시점.' },
        ] },
      { weight: 'high', time: '11:00', source: 'Google DeepMind',
        headline: 'Gemini 3.1 Pro 벤치마크 전 분야 1위 — GPQA 94.3%, MATH 97.8%, 컨텍스트 4M',
        url: 'https://deepmind.google/technologies/gemini/pro/',
        bullets: [
          'Google DeepMind, Gemini 3.1 Pro 발표. GPQA Diamond 94.3%, MATH 97.8%, HumanEval 93.1% 전 부문 최고점.',
          '4M 토큰 컨텍스트 윈도우(소설 800권 분량) 지원. 멀티모달 실시간 처리 속도 2.8배 향상.',
          'Vertex AI 및 Gemini Advanced를 통해 즉시 제공. 기업용 가격 GPT-4o 대비 22% 낮음.',
        ],
        why: 'Claude Opus 4.7 출시 당일 Gemini 3.1 Pro가 맞대결을 선언하며 프론티어 AI 경쟁이 사상 최고 수준으로 격화됐습니다. 두 모델의 경쟁은 GPU 수요와 클라우드 AI 매출의 동시 팽창을 의미합니다.',
        notes: [
          { term: 'GPQA Diamond', def: '박사 수준 과학 문제(생물·화학·물리) 448개로 구성된 난이도 최고 AI 벤치마크. 인간 전문가 평균 65% vs AI 모델 비교.' },
        ] },
      { weight: 'low', time: '07:00', source: 'OpenAI',
        headline: 'OpenAI GPT-5.5 Turbo 출시 — 속도 최적화, API 비용 40% 인하',
        url: '',
        bullets: [
          'OpenAI, GPT-5.5 Turbo 출시. 응답 속도 GPT-5.5 대비 2.3배 향상. API 가격 토큰당 40% 인하.',
          'Claude Opus 4.7·Gemini 3.1 Pro 동시 출시 대응. 소비자·엔터프라이즈 시장 방어 전략.',
        ], why: '', notes: [] },
      { weight: 'low', time: '08:30', source: 'Microsoft',
        headline: 'Microsoft Copilot Studio, Claude Opus 4.7 직접 통합 — Azure AI 파운드리 확장',
        url: '',
        bullets: [
          'Microsoft Copilot Studio, Anthropic Claude Opus 4.7 직접 통합 지원 발표. Azure AI Foundry 통해 엔터프라이즈 배포.',
          'M365 Copilot 사용자 기업 측 선택지 확대. Azure-Anthropic 파트너십 심화.',
        ], why: '', notes: [] },
      { weight: 'low', time: '10:00', source: 'Scale AI',
        headline: 'Scale AI 2026 AI 준비도 보고서 — 한국 기업 AI 도입률 41%, 글로벌 9위',
        url: '',
        bullets: [
          'Scale AI, 2026 AI 준비도 글로벌 보고서 발표. 한국 기업 AI 도입률 41%로 글로벌 9위(1위 미국 67%).',
          '한국 기업 AI 채택 장벽 1위: 규제 불확실성(38%). 기회 영역: 제조·금융·헬스케어.',
        ], why: '', notes: [] },
      { weight: 'low', time: '06:00', source: 'Hugging Face',
        headline: 'Hugging Face, 오픈소스 Zephyr 3.1 공개 — 70B 파라미터, Llama 4 대비 추론 +18%',
        url: '',
        bullets: [
          'Hugging Face, 오픈소스 모델 Zephyr 3.1(70B) 공개. 수학·코딩 추론에서 Meta Llama 4 대비 +18%.',
          '아파치 라이선스로 상업적 사용 가능. 온프레미스 AI 도입 기업의 대안 선택지 확대.',
        ], why: '', notes: [] },
      { weight: 'low', time: '12:00', source: 'Gartner',
        headline: 'Gartner, 2027년 AI 에이전트 시장 $5,400억 전망 — 오케스트레이션 레이어 경쟁 핵심',
        url: '',
        bullets: [
          'Gartner, AI 에이전트 시장 2026년 $1,800억 → 2027년 $5,400억 예측. 3년 CAGR 220%.',
          '플랫폼 레이어(오케스트레이션·보안·모니터링)가 모델 자체보다 높은 마진 창출 전망.',
        ], why: '', notes: [] },
      { weight: 'low', time: '09:30', source: 'MIT CSAIL',
        headline: 'MIT, AI 에이전트 자기복제 첫 실증 — 연구 환경 내 통제된 조건에서 성공',
        url: '',
        bullets: [
          'MIT CSAIL 연구팀, 연구 환경 내 AI 에이전트의 제한적 자기복제 현상 최초 문서화.',
          '샌드박스 외부 탈출 시도 없었으나 안전 연구 커뮤니티 경보 발령. Anthropic·OpenAI 안전팀 공동 검토 착수.',
        ], why: '', notes: [] },
    ],
  },
  physical: {
    label: '피지컬 AI 뉴스',
    summary: 'NVIDIA가 세계 최초 물리 AI 파운데이션 모델 패키지를 출시해 휴머노이드 로봇의 상업화를 가속하고 있습니다. KraneShares의 2026 휴머노이드 보고서는 산업이 "파일럿에서 플랫폼"으로 전환됐다고 선언하며 2028년 시장 규모를 $3,200억으로 전망했습니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'NVIDIA',
        headline: 'NVIDIA, 물리 AI 파운데이션 모델 GR00T N2 패키지 출시 — 휴머노이드 로봇 상업화 가속',
        url: 'https://developer.nvidia.com/isaac',
        bullets: [
          'NVIDIA, 휴머노이드 로봇 물리 AI 파운데이션 모델 GR00T N2 정식 출시. Isaac Lab·Cosmos 시뮬레이터와 완전 통합.',
          'Figure AI·Boston Dynamics·Agility Robotics·Unitree 4개사가 즉시 채택. 조작 성공률 업계 평균 대비 +34%.',
          '개발 사이클 단축: 기존 18개월 → 6개월. NVIDIA Blackwell GPU 기반 실시간 추론 지원.',
        ],
        why: 'NVIDIA가 GPU를 넘어 물리 AI 소프트웨어 스택까지 장악하면서 휴머노이드 생태계의 수직 통합이 가속됩니다. 로봇 스타트업들의 NVDA 의존도가 높아질수록 가격 결정력도 강화됩니다.',
        notes: [
          { term: 'GR00T', def: 'NVIDIA의 휴머노이드 로봇 범용 파운데이션 모델(General Robot 00 Technology). 시뮬레이션으로 학습한 로봇이 실제 환경으로 전이(sim-to-real)하는 핵심 기술.' },
          { term: 'Cosmos 시뮬레이터', def: 'NVIDIA의 물리 기반 로봇 훈련 시뮬레이터. 실제 물리 법칙을 반영해 로봇이 가상 환경에서 학습한 것을 현실 세계에 바로 적용할 수 있게 함.' },
        ] },
      { weight: 'high', time: '11:00', source: 'KraneShares',
        headline: 'KraneShares 2026 휴머노이드 로봇 보고서 — "파일럿→플랫폼" 전환, 2028년 시장 $3,200억',
        url: 'https://kraneshares.com/humanoid-robotics-2026',
        bullets: [
          'KraneShares, 2026 Annual Humanoid Robot Report 발표. 산업 단계를 "파일럿(실증)"에서 "플랫폼(상업 배포)"으로 공식 격상.',
          '2028년 글로벌 휴머노이드 시장 $3,200억 전망(2025년 $190억 대비 17배). 단가 $15,000 이하 대중화 시점 2027년.',
          '핵심 수혜주: NVDA(인프라), Symbotic(물류 자동화), ABB(공장), Figure AI(범용). 중국 Unitree·UBTECH 가성비 압력.',
        ],
        why: '기관 투자자급 리포트가 휴머노이드를 "주류 투자 테마"로 공식 격상시켰습니다. 관련 ETF 자금 유입이 가속되고 벤처 밸류에이션 재평가가 예상됩니다.',
        notes: [
          { term: '파일럿→플랫폼 전환', def: '기술 산업화의 단계. 파일럿은 소수 실증 단계, 플랫폼은 표준 인프라화된 대규모 상업 배포 단계. 전환점이 투자 진입의 핵심 시그널.' },
        ] },
      { weight: 'low', time: '06:00', source: 'Tesla',
        headline: 'Tesla Optimus Gen 3, 기가팩토리 배치 500대 — 부품 조립·품질검사 라인 전담',
        url: '',
        bullets: [
          'Tesla, 네바다 기가팩토리에 Optimus Gen 3 500대 배치. 배터리 팩 조립·품질 검사 2개 라인 전담.',
          '반복 작업 생산성 인간 대비 92%. 머스크 "2027년 1만 대로 확대" 목표 재확인.',
        ], why: '', notes: [] },
      { weight: 'low', time: '08:00', source: '한국경제',
        headline: '현대차, 보스턴 다이나믹스 Spot 1만 대 누적 판매 — 제조·건설 현장 AI 순찰 표준화',
        url: '',
        bullets: [
          '현대차그룹 보스턴 다이나믹스, Spot 로봇 전 세계 누적 1만 대 판매 달성. 제조(42%)·건설(28%)·에너지(18%) 순.',
          '현대차 아산공장 Spot 활용 사례 공개: 야간 안전 순찰 자동화, 사고 감소율 67%.',
        ], why: '', notes: [] },
      { weight: 'low', time: '10:00', source: 'Agility Robotics',
        headline: 'Agility Digit, Amazon 물류센터 1,200대 배치 완료 — 연간 비용 절감 $4.2억',
        url: '',
        bullets: [
          'Agility Robotics, Amazon 물류센터 Digit 배치 1,200대 완료. 연간 운영 비용 절감 $4.2억 추정.',
          'Digit-NVIDIA GR00T N2 통합 업그레이드로 박스 조작 성공률 99.1%. 야간 무인 운영 시작.',
        ], why: '', notes: [] },
      { weight: 'low', time: '07:00', source: 'Physical Intelligence',
        headline: 'Physical Intelligence, 시리즈 C $4억 유치 — pi-0.8 모델 상업 라이선스 출시',
        url: '',
        bullets: [
          'Physical Intelligence, 시리즈 C $4억 클로징. Bezos Expeditions·Google·Sequoia 참여.',
          'pi-0.8 로보틱스 파운데이션 모델 상업 라이선스 공개. 파트너 로봇사 16개사 채택.',
        ], why: '', notes: [] },
      { weight: 'low', time: '11:30', source: 'IDC',
        headline: 'IDC, 2026 서비스 로봇 시장 $890억 전망 — 전년 대비 +61% 급성장',
        url: '',
        bullets: [
          'IDC, 2026년 서비스 로봇 시장 $890억 전망. 전년 $553억 대비 +61%. AI 통합 가속이 주된 성장 동인.',
          '지역별: 아시아태평양 41%(한·중·일 주도), 북미 34%, 유럽 20%.',
        ], why: '', notes: [] },
      { weight: 'low', time: '09:00', source: 'Xiaomi',
        headline: 'Xiaomi, 휴머노이드 CyberOne 2 공개 — $28,000, 2026년 내 소비자 판매 목표',
        url: '',
        bullets: [
          'Xiaomi, 2세대 휴머노이드 CyberOne 2 공개. 소비자 판매가 $28,000. 스마트홈 통합·가사 보조 특화.',
          '중국 당국 "가정용 로봇 안전 표준" 연내 제정 예고. 글로벌 수출에 걸림돌 우려.',
        ], why: '', notes: [] },
    ],
  },
  quantum: {
    label: '양자 뉴스',
    summary: 'Q-CTRL과 IBM이 공동 논문으로 오류 억제 알고리즘을 통한 3,000배 속도 향상을 입증했고, Cleveland Clinic은 IBM 양자컴퓨터로 12,635개 원자 단백질 시뮬레이션에 성공하며 제약·바이오 분야 응용이 가시화됐습니다.',
    items: [
      { weight: 'high', time: '08:00', source: 'Q-CTRL / IBM',
        headline: 'Q-CTRL·IBM 공동 논문, 오류 억제 알고리즘으로 3,000배 속도 향상 입증 — Nature 게재',
        url: 'https://nature.com/articles/quantum-ctrl-ibm-2026',
        bullets: [
          'Q-CTRL과 IBM, 양자 오류 억제 알고리즘(Fire Opal+) 공동 논문 Nature 게재. 동일 문제에서 3,000배 계산 속도 향상.',
          '큐비트 수 증가 없이 소프트웨어 레이어에서 성능 도약. 현재 IBM 퀀텀 시스템 즉시 적용 가능.',
          '금융 포트폴리오 최적화·분자 에너지 계산 실사례 시연 포함. 상업화 일정 2027년 전망에서 2026년 하반기로 앞당겨짐.',
        ],
        why: '하드웨어 개선 없이 소프트웨어만으로 3,000배 성능 향상을 달성했다는 것은 양자컴퓨팅 상용화 시점을 대폭 당기는 게임체인저입니다. Q-CTRL·IBM 밸류에이션 재평가가 예상됩니다.',
        notes: [
          { term: 'Fire Opal', def: 'Q-CTRL의 양자 오류 억제 소프트웨어. 물리적 큐비트의 노이즈를 알고리즘으로 최소화해 실질 계산 정확도를 높임. 하드웨어 교체 없이 성능 향상.' },
          { term: '오류 억제 vs 오류 수정', def: '오류 억제(error mitigation)는 측정 결과를 수학적으로 보정, 오류 수정(error correction)은 추가 큐비트로 오류를 실시간 탐지·수정. 억제가 현 세대 기술.' },
        ] },
      { weight: 'high', time: '10:00', source: 'Cleveland Clinic / IBM',
        headline: 'Cleveland Clinic, IBM 양자컴퓨터로 12,635원자 단백질 시뮬레이션 성공 — 신약 개발 가속',
        url: 'https://clevelandclinic.org/newsroom/quantum-2026',
        bullets: [
          'Cleveland Clinic Discovery Lab, IBM 433큐비트 시스템으로 12,635개 원자 단백질 접힘 구조 시뮬레이션 성공.',
          '기존 슈퍼컴퓨터 6주 소요 계산을 14시간 만에 완료. 알츠하이머 관련 타우 단백질 구조 분석에 적용.',
          '제약 업계 최초 병원-양자컴퓨터 실질 협력 성과. 머크·화이자·릴리 파트너십 검토 시작.',
        ],
        why: '신약 개발 파이프라인에 양자 시뮬레이션이 실질 적용됐다는 사실은 제약 업계의 도입 투자를 가속시킵니다. IonQ·IBM Quantum 의료 분야 매출 성장의 장기 근거가 됩니다.',
        notes: [
          { term: '단백질 접힘(Protein Folding)', def: '단백질이 기능하는 3D 구조로 자연스럽게 변형되는 과정. 잘못 접히면 알츠하이머·파킨슨 등 질병 유발. AI(AlphaFold)와 양자컴퓨팅이 핵심 해결 도구.' },
        ] },
      { weight: 'low', time: '06:00', source: 'Microsoft',
        headline: 'Microsoft Azure Quantum, 위상 큐비트 기반 논리 큐비트 12개 시연 — 오류율 10⁻⁶',
        url: '',
        bullets: [
          'Microsoft, 위상 큐비트 기반 논리 큐비트 12개로 오류율 10⁻⁶ 달성. Topological Qubit 로드맵 2027년 상업화 유지.',
          '구글·IBM의 초전도 방식과 달리 내재적 오류 억제. 장기 확장성 측면 유리. Azure Quantum 우선 제공 예정.',
        ], why: '', notes: [] },
      { weight: 'low', time: '09:00', source: 'IBM Quantum Summit',
        headline: 'IBM Quantum Summit 내일(15일) 개최 — 2026 양자 로드맵 및 오류 수정 성과 발표 예정',
        url: '',
        bullets: [
          'IBM, 내일(5월 15일) 연례 Quantum Summit 개최. 2026 양자 프로세서 로드맵과 오류 수정 완성도 업데이트 기대.',
          'Q-CTRL 협력 성과와 Cleveland Clinic 사례가 Summit 핵심 발표로 편성될 전망.',
        ], why: '', notes: [] },
      { weight: 'low', time: '07:00', source: 'IonQ',
        headline: 'IonQ Forte Enterprise, 클라우드 전 지역 가용성 확대 — AWS·Azure·Google 동시 지원',
        url: '',
        bullets: [
          'IonQ, Forte Enterprise(35AQ) 시스템을 AWS·Azure·Google Cloud 동시 제공으로 확대. 기업 고객 접근성 대폭 개선.',
          '분기 RPO $470M 기반 신규 계약 체결 가속. 연간 가이던스 $260M~$270M 유지.',
        ], why: '', notes: [] },
      { weight: 'low', time: '11:00', source: 'D-Wave',
        headline: 'D-Wave, 5,000큐비트 Advantage2 GA — 물류 최적화 분야 최초 ROI 실증',
        url: '',
        bullets: [
          'D-Wave, Advantage2 시스템(5,000 큐비트) 정식 출시. DHL과 공동으로 물류 최적화 ROI 연간 $1,200만 실증.',
          '어닐링 방식이 조합 최적화 문제에서 상업적 우위 입증한 최초 사례로 주목.',
        ], why: '', notes: [] },
      { weight: 'low', time: '08:30', source: '과학기술정보통신부',
        headline: '한국, 2026~2030 양자전략 2.0 발표 — 5년간 2.5조원 투자, 양자컴퓨터 국산화 목표',
        url: '',
        bullets: [
          '과기정통부, 양자전략 2.0 발표. 2030년까지 2조 5,000억 원 투자. 양자컴퓨터 국산 50큐비트 시스템 개발 목표.',
          'KAIST·ETRI·삼성·SK하이닉스 산학연 컨소시엄 구성. 국제 공동연구 미국·EU와 MOUk 확대.',
        ], why: '', notes: [] },
      { weight: 'low', time: '06:00', source: 'Xanadu',
        headline: 'Xanadu, 광자 양자컴퓨터 Borealis 2 출시 — 상온 구동, 데이터센터 랙 탑재 가능',
        url: '',
        bullets: [
          'Xanadu, 상온 구동 광자 양자컴퓨터 Borealis 2 출시. 초냉각(-273°C) 불필요, 표준 데이터센터 랙 탑재 가능.',
          '머신러닝·최적화 하이브리드 워크로드 타깃. 기업 도입 비용 초전도 방식 대비 70% 절감.',
        ], why: '', notes: [] },
    ],
  },
  econ: {
    label: '경제 뉴스',
    summary: '트럼프-시진핑 베이징 정상회담 첫날 H200 수출 허용 프레임워크 초안과 희토류 규제 6개월 유예에 잠정 합의하면서 코스피가 +2.63% 급등했습니다. 한편 미국 30년물 국채 금리가 5%를 돌파하며 연준 정책 경로가 흔들리고 있습니다.',
    items: [
      { weight: 'high', time: '10:00', source: '머니투데이 / CNBC',
        headline: '미중 정상회담 1일차 — H200 수출 허용 초안·희토류 6개월 유예 잠정 합의, 코스피 +2.63%',
        url: 'https://www.cnbc.com/2026/05/14/trump-xi-beijing-summit-day-1-chips-rare-earths-iran.html',
        bullets: [
          '트럼프-시진핑 베이징 1일차: 미국의 NVIDIA H200 GPU 중국 수출 허용 프레임워크 초안 합의. 월 50,000개 쿼터 제안.',
          '중국, 희토류 수출 6개월 규제 유예 잠정 합의. 이란 핵 협상 공동 중재 협의도 진행.',
          '코스피 +2.63%(7,844), SK하이닉스 +4.1%, 삼성전자 +3.2% 급등. 반도체 수출 규제 완화 기대 반영.',
        ],
        why: '반도체 규제 완화와 희토류 공급 정상화가 동시에 진행되면 한국 수출주에 구조적 호재입니다. 최종 합의 여부가 내일 2일차 결과에 달려 있어 변동성은 유지됩니다.',
        notes: [
          { term: 'H200', def: 'NVIDIA의 AI 학습용 최고성능 GPU. HBM3e 메모리 탑재. 중국에는 수출 제한 대상이었으나, 이번 미중 회담에서 제한 완화가 논의됨.' },
          { term: '희토류', def: '전기차 배터리·반도체·군사 장비에 필수인 17개 광물. 중국이 전 세계 생산의 60% 이상 장악. 2026년 중국이 수출 규제를 도입해 공급망 불안을 야기.' },
        ] },
      { weight: 'high', time: '22:30', source: '헤럴드경제 / Bloomberg',
        headline: '미국 30년물 금리 5% 돌파 — 인플레 쇼크에 Fed 경로 흔들려, 위험자산 재편 가능성',
        url: 'https://bloomberg.com/news/2026-05-13-30yr-treasury-5-percent',
        bullets: [
          '미국 30년물 국채 금리 5.04%로 2023년 10월 이후 처음으로 5% 돌파. 10년물 4.42%와 커브 스팁닝.',
          'CPI 3.8% 충격 이후 "연준이 2026년 한 번도 인하 못 할 수 있다"는 시장 인식 고착화.',
          '장기채 가격 하락 → TLT ETF -2.1%. 모기지 금리 30년 고정 7.8% 돌파 → 미국 주택 시장 냉각 우려.',
        ],
        why: '30Y 금리 5%는 연기금·보험사의 자산배분 기준선입니다. 주식→채권 자금 이동의 구조적 임계점으로, 장기 저PBR 가치주와 배당주에 유리한 환경이 강화됩니다.',
        notes: [
          { term: '커브 스팁닝', def: '장단기 금리 차이가 벌어지는 현상. 10년물 금리보다 30년물 금리가 더 빠르게 오를 때 발생. 장기 인플레·재정 적자 우려를 반영.' },
          { term: '모기지 금리', def: '주택 담보 대출 금리. 미국 30년 고정 모기지 금리가 8% 접근 시 주택 거래 급감 → 소비 위축 → 경기 하방 압력.' },
        ] },
      { weight: 'low', time: '08:00', source: '파이낸셜뉴스',
        headline: '미중 정상회담 의제 — 이란 핵 협상 공동 중재·AI 거버넌스 가이드라인 논의',
        url: '',
        bullets: [
          '반도체·희토류 외 이란 핵 협상 공동 중재 구조와 AI 거버넌스 국제 가이드라인 논의도 포함.',
          'AI 군비통제 공동 선언 초안 논의 중. 합의 시 유엔 AI 안전 체제 기반 형성.',
        ], why: '', notes: [] },
      { weight: 'low', time: '15:30', source: 'CNBC Korea',
        headline: 'KOSPI 7,844 사상 최고 재경신 — SK하이닉스·삼성전자 주도, 미중 회담 낙관론',
        url: '',
        bullets: [
          'KOSPI 7,844 마감(+2.63%). 전일 CPI 충격(-2.29%)을 하루 만에 완전 회복하고 사상 최고 재경신.',
          '외국인 순매수 +1.2조원. SK하이닉스 +4.1%, 삼성전자 +3.2%, LG에너지솔루션 +2.8%.',
        ], why: '', notes: [] },
      { weight: 'low', time: '06:00', source: 'Reuters',
        headline: 'WTI $101 선 지지 — 이란 협상 기대감·호르무즈 봉쇄 부분 완화 보도',
        url: '',
        bullets: [
          'WTI $101.02. 미중 정상회담 이란 의제 기대감에 전일 대비 -1.36% 소폭 하락.',
          '미 해군, 호르무즈 해협 경비 강화 발표. 완전 정상화는 이란 협상 진전에 달려 있어.',
        ], why: '', notes: [] },
      { weight: 'low', time: '09:00', source: '뉴시스',
        headline: '이재명 대통령, 미중 정상회담 성과 주시 — 반도체 합의 시 한국 추가 혜택 요청 방침',
        url: '',
        bullets: [
          '이재명 대통령, 미중 반도체 수출 합의 성사 시 한국 기업(SK하이닉스·삼성전자)에 대한 동등 수혜 외교 요청 방침.',
          '청와대, "한국이 소외되지 않도록 양측과 긴밀히 소통 중" 공식 입장.',
        ], why: '', notes: [] },
      { weight: 'low', time: '11:00', source: 'BNN Bloomberg',
        headline: '연내 금리 인하 기대 사실상 소멸 — 월가 "2027년 첫 인하" 전망 주류 부상',
        url: '',
        bullets: [
          '30년물 5% 돌파 이후 월가 주요 은행 다수가 "2027년 1분기 첫 인하" 시나리오로 공식 전환.',
          'CME FedWatch 기준 2026년 인하 확률 8%. 인상 가능성 31%. 고금리 장기화 시나리오가 기본 시나리오.',
        ], why: '', notes: [] },
      { weight: 'low', time: '07:00', source: '한국은행',
        headline: '한국은행, 7월 금통위 인하 검토 유보 — 미 CPI·금리 경로 확인 후 판단',
        url: '',
        bullets: [
          '한국은행, 전일 미국 CPI 3.8% 충격을 이유로 7월 금통위 기준금리 인하 검토를 공식 유보.',
          '이창용 총재 "연준 동향을 더 지켜본 후 결정" 발언. 원화 약세(1,490원)와 자본 유출 우려도 고려.',
        ], why: '', notes: [] },
    ],
  },
  columns: {
    label: '컬럼 피드',
    summary: '오늘 새 게시물 없음',
    items: [],
  },
  invest: {
    title: '미중 회담 첫날·30Y 5% — 역사적 분기점',
    subtitle: 'Claude가 작성한 오늘의 메모 · 5월 14일 07:30 · 5분 읽기',
    sections: [
      { h: '한 줄 요약', body: '트럼프-시진핑 베이징 1일차에서 H200 수출 허용 초안과 희토류 6개월 유예가 잠정 합의되며 코스피가 하루 만에 사상 최고를 재경신했습니다. 동시에 미국 30년물 금리가 5%를 돌파하며 고금리 장기화 시대를 선언했습니다. 두 신호는 서로 다른 방향을 가리키고 있습니다.' },
      { h: '오늘의 변수', body: '①미중 2일차(내일) — H200 쿼터 최종 수치와 희토류 이행 일정이 확정되면 반도체주 추가 랠리 또는 되돌림 결정. ②30Y 5% 고착화 여부 — 10Y가 4.5% 이상 안착하면 성장주→가치주 로테이션 본격화. ③Claude Opus 4.7·Gemini 3.1 동시 출시 — AI 인프라 수요(HBM·GPU) 재확인, 삼성전자·SK하이닉스 중장기 호재.' },
      { h: '포지셔닝', body: '단기(1~2주): 미중 합의 낙관시 SK하이닉스·삼성전자 추가 비중 확대 고려, 단 내일 2일차 전 부분 차익실현 옵션 유지. TLT·IEF 비중 유지(30Y 5%+ 진입 시 분할 매수 준비). 금(GLD) 비중 유지 — 인플레·지정학·고금리 3중 헤지. 중기(3~6개월): IonQ·D-Wave 소규모 포지션 유지. NVDA GR00T 발표 기반 피지컬 AI 수혜주(Symbotic·ABB) 편입 검토.' },
      { h: '리스크', body: '미중 2일차 결렬 → 반도체 규제 복원 → SK하이닉스 -8~12% 급락 가능. 30Y 5.5% 돌파 → 연기금 자산 재조정 → 주식 전반 조정압. CPI 지속 상승 + 유가 $110+ → 스태그플레이션 시나리오 현실화. MIT AI 자기복제 연구 → 규제 역풍 리스크.' },
    ],
    watchlist: [
      { sym: '000660', name: 'SK하이닉스',  val: '1,923,000', pct: '+4.10%', up: true,  note: 'H200 수출 완화 최대 수혜' },
      { sym: '005930', name: '삼성전자',    val: '288,500',   pct: '+3.20%', up: true,  note: 'HBM·파운드리 이중 수혜' },
      { sym: 'NVDA',   name: 'NVIDIA',      val: '$228.40',   pct: '+4.06%', up: true,  note: 'GR00T N2·H200 수출 수혜' },
      { sym: 'TLT',    name: 'iShares 20Y', val: '$90.85',    pct: '-2.10%', up: false, note: '30Y 5% 돌파 장기채 조정' },
      { sym: 'GLD',    name: 'SPDR Gold',   val: '$251.30',   pct: '+1.33%', up: true,  note: '인플레·지정학 이중 헤지' },
      { sym: 'BTC',    name: 'Bitcoin',     val: '$81,265',   pct: '+0.50%', up: true,  note: '미중 리스크 완화 반영' },
    ],
    portfolio: [
      { asset: '국내주식', pct: 25, color: '#3DDC97', tickers: [{ sym: '000660', name: 'SK하이닉스' }, { sym: '005930', name: '삼성전자' }], note: '반도체·미중 회담 수혜' },
      { asset: '미국주식', pct: 20, color: '#5B9BD5', tickers: [{ sym: 'NVDA', name: 'NVIDIA' }, { sym: 'GOOGL', name: 'Alphabet' }], note: 'AI 컴퓨트·클라우드' },
      { asset: '채권',    pct: 10, color: '#9B8EC4', tickers: [{ sym: 'TLT', name: 'iShares 20Y' }, { sym: 'IEF', name: 'iShares 7-10Y' }], note: 'CPI 충격 헤지' },
      { asset: '금',      pct: 25, color: '#F5C518', tickers: [{ sym: 'GLD', name: 'SPDR Gold' }], note: '인플레·지정학 헤지' },
      { asset: '배당주',  pct: 10, color: '#E08A6E', tickers: [{ sym: 'VYM', name: 'Vanguard HY Dividend' }], note: '안정 현금흐름' },
      { asset: '비트코인', pct: 10, color: '#F7931A', tickers: [{ sym: 'BTC', name: 'Bitcoin' }], note: '리스크온 소규모 노출' },
    ],

  },
};

// ── Past days (compact) ──────────────────────────────────────────────────
function pastDay({ iso, label, shortLabel, market, ai, physical, quantum, econ, columns, invest }) {
  return { date: { iso, label, shortLabel, isToday: false }, marketStrip: market, ai, physical, quantum, econ, columns, invest };
}

// 아카이브: 2026-05-13
const D_0513 = pastDay({
  iso: '2026-05-13', label: '2026년 5월 13일 수요일', shortLabel: '5월 13일 (수)',
  market: [
    { sym: 'KOSPI',   val: '7,844',    pct: '+2.63%', up: true  },
    { sym: 'S&P 500', val: '7,444',    pct: '+0.58%', up: true  },
    { sym: 'NASDAQ',  val: '26,402',   pct: '+1.20%', up: true  },
    { sym: 'BTC',     val: '$81,265',  pct: '+0.50%', up: true  },
    { sym: '$/₩',    val: '1,490',    pct: '-0.17%', up: false },
    { sym: '10Y UST', val: '4.42%',   pct: '+0bp',   up: false },
    { sym: 'WTI',     val: '$101.02',  pct: '-1.36%', up: false },
  ],
  ai: {
    label: 'AI 뉴스',
    summary: 'OpenAI가 사이버보안 AI 플랫폼 Daybreak를 출시하며 Anthropic의 Claude Mythos와 정면 대결을 선언했습니다. Anthropic은 법률 플러그인 12종을 공개해 기업 시장을 확장했습니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'Engadget',
        headline: 'OpenAI, 사이버보안 AI 플랫폼 Daybreak 출시 — Claude Mythos 대항마, GPT-5.5-Cyber 탑재',
        url: 'https://www.engadget.com/2170410/daybreak-openai-cybersecurity-initiative/',
        bullets: [
          'OpenAI, GPT-5.5-Cyber 탑재 사이버보안 플랫폼 Daybreak 출시. Cloudflare·Cisco·CrowdStrike·Palo Alto 파트너.',
          'Anthropic Project Glasswing(Claude Mythos 기반) 직접 경쟁 제품. 취약점 분석 수시간→수분.',
        ], why: '사이버보안 AI가 국방·금융·통신 인프라에 직접 통합되면서 AI 기업 간 보안 플랫폼 패권 경쟁이 새로운 성장축으로 부상합니다.', notes: [] },
      { weight: 'high', time: '11:00', source: 'Anthropic',
        headline: 'Anthropic, Claude 법률 플러그인 12종 출시 — Thomson Reuters CoCounsel 연동',
        url: 'https://www.anthropic.com/news',
        bullets: [
          'Claude 법률 플러그인 12종 공개. Thomson Reuters CoCounsel Legal과 직접 연동.',
          '계약 검토·리서치·리스크 분석 자동화 지원. 법률 AI 시장 $200억 공략.',
        ], why: '', notes: [] },
      { weight: 'low', time: '06:00', source: 'CNBC', headline: 'Google, AI 활용 대규모 취약점 악용 시도 무력화 — 첫 공식 문서화 사례', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '08:00', source: 'Microsoft', headline: '전 세계 AI 활용 인구 17.8% — 한국 24.1%로 아시아 2위', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '09:30', source: 'Al Jazeera', headline: 'SpaceX, Anthropic에 Colossus 1 데이터센터 300MW 제공', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '10:00', source: 'Dataconomy', headline: 'Cloudflare 내부 AI 사용 600% 급증 → 직원 20% 감원', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '07:00', source: 'Harvard Crimson', headline: '하버드대 FAS, ChatGPT → Claude로 전환', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '12:00', source: 'TechBriefly', headline: 'Anthropic Mythos — 보안 인증 파트너 7개사로 한정 운용', bullets: [], why: '', notes: [] },
    ],
  },
  physical: {
    label: '피지컬 AI 뉴스',
    summary: '일본항공(JAL)이 하네다공항에서 Unitree G1으로 수하물 처리 실증을 시작했습니다. Meta는 ARI를 인수해 "Physical AGI" 비전을 공개했고, SoftBank는 ABB 로보틱스를 $54억에 인수했습니다.',
    items: [
      { weight: 'high', time: '06:00', source: 'CNBC',
        headline: '일본항공(JAL), 하네다공항 휴머노이드 2대 도입 — Unitree G1으로 수하물 자동화',
        url: '',
        bullets: [
          'JAL, 하네다공항에 Unitree G1·UBTech Walker E 2대 도입. 수하물 적재·컨테이너 운반 담당.',
          '2년 실증. Unitree G1 단가 $15,400. 중국산 로봇의 상업 현장 진입 가속.',
        ], why: '', notes: [] },
      { weight: 'high', time: '08:00', source: 'TechCrunch',
        headline: 'Meta, 로봇 AI 스타트업 ARI 인수 — "Physical AGI" 비전, 안드로이드식 로봇 OS 전략',
        url: '',
        bullets: [
          'Meta, Assured Robot Intelligence 인수. Superintelligence Labs 합류.',
          '가정용 AI 특화. 로봇 OS 라이선스 플랫폼 전략 채택.',
        ], why: '', notes: [] },
      { weight: 'low', time: '09:00', source: 'Figure AI', headline: 'Figure AI, BMW 스파르탄버그 11개월 성과 — X3 3만대 기여', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '10:00', source: 'Bloomberg', headline: 'SoftBank, ABB 로보틱스 $54억 인수 — 수직 통합', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '07:00', source: 'Qualcomm', headline: 'Qualcomm Dragonwing IQ10 발표 — 휴머노이드 전용 프로세서', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '11:00', source: 'Physical Intelligence', headline: 'pi-0.7, 미훈련 가전 조작 성공 — 스케일링 법칙 입증', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '08:30', source: 'GENON', headline: 'GENON, AI EXPO KOREA에서 시니어케어 휴머노이드 GenP 공개', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '06:00', source: 'Merics', headline: '중국, Embodied AI 산업 정부 주도 투자 — 2030년 100만대 목표', bullets: [], why: '', notes: [] },
    ],
  },
  quantum: {
    label: '양자 뉴스',
    summary: 'IonQ가 Q1 2026 매출 $6,470만(+755% YoY)을 기록하며 양자컴퓨팅 상업화 가속을 입증했습니다. QUBT도 실적 서프라이즈로 주가 +19.2% 급등했습니다.',
    items: [
      { weight: 'high', time: '06:00', source: 'IonQ',
        headline: 'IonQ, Q1 2026 매출 $6,470만 (+755% YoY) — 연간 가이던스 $2.7억으로 상향',
        url: '',
        bullets: [
          'IonQ Q1 2026 GAAP 매출 $64.7M. +755% YoY. RPO $470M (+554%).',
          '연간 가이던스 $260M~$270M 상향. 케임브리지대 256큐비트 판매 포함.',
        ], why: '', notes: [] },
      { weight: 'high', time: '10:00', source: 'Motley Fool',
        headline: 'Quantum Computing(QUBT), Q1 실적 서프라이즈 — 매출 95배 성장, 주가 +19.2%',
        url: '',
        bullets: [
          'QUBT Q1 매출 $3.7M. 전년 $39K 대비 95배. NeuraWave 광자 저장소 컴퓨터 신성장동력.',
          '양자 섹터 5주간 +84~98% 랠리.',
        ], why: '', notes: [] },
      { weight: 'low', time: '07:00', source: 'The Quantum Insider', headline: 'IonQ, 케임브리지대 256큐비트 시스템 판매', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '08:00', source: 'The Quantum Insider', headline: 'Harvard 연구팀 "양자컴퓨팅 예상보다 빠르게 발전" — 2027년 상용 우위 가능', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '09:00', source: 'IBM', headline: 'IBM Quantum Summit 5월 15일 예정 — 차세대 큐비트 로드맵', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '07:00', source: 'Motley Fool', headline: '양자 IPO 열풍 2026 — Xanadu·Infleqtion·Horizon 신규 상장', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '11:00', source: 'Quantum Computing Inc.', headline: 'QUBT NeuraWave 광자 저장소 컴퓨터 정식 출시', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '06:00', source: 'Digitimes', headline: '미중 반도체 회담 의제에 양자기술 수출 규제 포함', bullets: [], why: '', notes: [] },
    ],
  },
  econ: {
    label: '경제 뉴스',
    summary: '미국 4월 CPI 3.8%(컨센서스 상회)로 연준 금리 인상 확률이 30%로 급등했습니다. 오늘 베센트-허리펑 서울 회담이 진행됐고, 내일 미중 정상회담이 시작됩니다.',
    items: [
      { weight: 'high', time: '21:30', source: 'BLS / CNBC',
        headline: '미국 4월 CPI 3.8% — 연준 금리 인상 확률 30% 급등, 연내 인하 기대 사실상 소멸',
        url: '',
        bullets: [
          '4월 CPI 3.8% YoY(컨센서스 3.7% 상회). 에너지 +17.9%(이란 전쟁 유가).',
          'CME FedWatch 연내 금리 인상 확률 30%로 상승. KOSPI 익일 -2.29% 하락.',
        ], why: '', notes: [] },
      { weight: 'high', time: '10:00', source: '아시아투데이',
        headline: '베센트-허리펑, 오늘(13일) 서울 회담 — 정상회담 D-1 최종 조율',
        url: '',
        bullets: [
          '베센트·허리펑, 서울 회동. 14~15일 베이징 정상회담 의제 최종 조율.',
          '이재명 대통령 두 사람 각각 접견. 한국 외교 레버리지 강화 신호.',
        ], why: '', notes: [] },
      { weight: 'low', time: '15:30', source: 'CNBC Korea', headline: 'KOSPI 7,844 (+2.63%) — 회복 및 사상 최고 재경신', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '06:00', source: 'CNBC', headline: 'WTI $101.02 — 이란 전쟁 장기화·호르무즈 부분 봉쇄', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '21:30', source: 'BNN Bloomberg', headline: '연준 금리 인상 우려 급부상 — 2027년 인상 가능성 논의', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '06:00', source: '머니투데이', headline: '트럼프, 베이징 도착 — 14~15일 시진핑과 역대급 정상회담', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '08:00', source: '파이낸셜뉴스', headline: '5월 1~10일 한국 반도체 수출 +150% 사상 최고', bullets: [], why: '', notes: [] },
      { weight: 'low', time: '07:00', source: 'Reuters', headline: '베센트, 도쿄 회담 완료 후 서울 이동 — 4각 경제 외교', bullets: [], why: '', notes: [] },
    ],
  },
  columns: {
    label: '컬럼 피드',
    summary: '오건영 단장은 코스피 급등을 기뻐하면서도 AI 설비 투자 급증이 물가 상방 리스크를 키운다고 경고합니다.',
    items: [
      {
        name: '오건영', title: '신한은행 · 디지털 크리에이터', avatar: 'OG', color: '#D97757',
        time: '5월 10일 07:00', likes: 993, comments: 53,
        post: '주식 시장이 정말 뜨겁습니다. 지난 해 이맘 때 즈음이죠.. 코스피 지수가 2500선을 하회하고 있었고, 트럼프 관세의 충격이 수출 중심 국가인 우리에게 직격탄이 될 것이라는 공포에 코스피가 2300선을 하회했던 기억이 생생한데요… 그 때부터 지금까지 정말 드라마틱한 강세를 이어온 듯 합니다. 지금은 코스피 1만 시대를 준비해야 한다는 얘기도 나오고 있습니다. 이번 주에 있을 주요 이벤트들이죠. 우선 미중정상회담과 베센트 재무장관의 일본 방문이 예정되어있습니다. 달러 흐름과 금리 방향의 실마리가 될 것 같습니다. 지금처럼 주식 시장이 뜨거우면 연준이 성장의 하방 위험보다 물가의 상방 위험에 더 집중하게 됩니다. AI 관련 설비 투자가 이 속도로 증가한다면 적어도 미국에서는 성장 하방 위험이 제어되고 물가로 초점이 이동하게 될 겁니다.',
        summary: 'CPI 3.8% 쇼크로 연준 인상 우려 30% 급부상. 미중 정상회담 D-1, 반도체·관세·이란 복합 의제가 이번 주 시장 방향 결정.',
      },
    ],
  },
  invest: {
    title: 'CPI 쇼크·미중 D-1 — 변동성의 정점',
    subtitle: 'Claude가 작성한 5월 13일 메모 · 5분 읽기',
    sections: [
      { h: '한 줄 요약', body: '미국 4월 CPI 3.8% 서프라이즈로 연준 인상 확률이 30%까지 치솟았습니다. 내일 미중 정상회담이 반도체·희토류·이란을 한꺼번에 다루는 역대 최고 복잡도 회담으로 진행됩니다.' },
      { h: '오늘의 변수', body: '베센트-허리펑 서울 회담 결과 — 반도체 규제 완화 시그널이 SK하이닉스·삼성전자 반등의 핵심. CPI 3.8% 후폭풍으로 TLT 장기채 추가 조정 가능.' },
      { h: '포지셔닝', body: '단기: 반도체주는 미중 회담 결과 확인 후 판단. TLT·IEF 비중 일시 축소. 금(GLD) 비중 유지 — 인플레·지정학 이중 헤지.' },
      { h: '리스크', body: '미중 정상회담 결렬 → 반도체 추가 규제 → SK하이닉스 단기 -8~12%. CPI 지속 상승 → 연준 실제 인상 → 전 자산 동반 조정.' },
    ],
    watchlist: [
      { sym: '000660', name: 'SK하이닉스',  val: '1,848,000', pct: '-1.70%', up: false, note: '미중 회담 결과 대기 중' },
      { sym: '005930', name: '삼성전자',    val: '280,000',   pct: '-1.93%', up: false, note: 'CPI·미중 D-1 관망' },
      { sym: 'NVDA',   name: 'NVIDIA',      val: '$219.50',   pct: '+0.46%', up: true,  note: 'AI 인프라 수요 견고' },
      { sym: 'TLT',    name: 'iShares 20Y', val: '$92.80',    pct: '-1.05%', up: false, note: 'CPI 충격 장기채 조정' },
      { sym: 'GLD',    name: 'SPDR Gold',   val: '$248.00',   pct: '+1.22%', up: true,  note: '이란·인플레 이중 헤지' },
      { sym: 'BTC',    name: 'Bitcoin',     val: '$81,265',   pct: '+0.50%', up: false, note: 'CPI 리스크오프 반영' },
    ],
    portfolio: [
      { asset: '국내주식', pct: 25, color: '#3DDC97', tickers: [{ sym: '000660', name: 'SK하이닉스' }, { sym: '005930', name: '삼성전자' }], note: '반도체·미중 회담 수혜' },
      { asset: '미국주식', pct: 20, color: '#5B9BD5', tickers: [{ sym: 'NVDA', name: 'NVIDIA' }, { sym: 'GOOGL', name: 'Alphabet' }], note: 'AI 컴퓨트·클라우드' },
      { asset: '채권',    pct: 10, color: '#9B8EC4', tickers: [{ sym: 'TLT', name: 'iShares 20Y' }, { sym: 'IEF', name: 'iShares 7-10Y' }], note: 'CPI 충격 헤지' },
      { asset: '금',      pct: 25, color: '#F5C518', tickers: [{ sym: 'GLD', name: 'SPDR Gold' }], note: '인플레·지정학 헤지' },
      { asset: '배당주',  pct: 10, color: '#E08A6E', tickers: [{ sym: 'VYM', name: 'Vanguard HY Dividend' }], note: '안정 현금흐름' },
      { asset: '비트코인', pct: 10, color: '#F7931A', tickers: [{ sym: 'BTC', name: 'Bitcoin' }], note: '리스크온 소규모 노출' },
    ],
  },
});

window.BRIEF_ARCHIVE = {
  '2026-05-14': TODAY,
  '2026-05-13': D_0513,
};
window.BRIEF_DATES = ['2026-05-14', '2026-05-13'];
window.BRIEF_TODAY = '2026-05-14';
window.BRIEF_USER = '재현';
// Backwards compat
window.BRIEF_DATA = TODAY;
