// Daily briefing — multi-day archive.
// BRIEF_ARCHIVE is keyed by ISO date. BRIEF_DATES is newest-first.
// Past days carry slimmer content than today (the showcase day).

// ── Past days (compact)
function pastDay({ iso, label, shortLabel, market, ai, physical, quantum, econ, columns, invest }) {
  const obj = { date: { iso, label, shortLabel, isToday: false }, marketStrip: market, ai, econ, columns, invest };
  if (physical) obj.physical = physical;
  if (quantum)  obj.quantum  = quantum;
  return obj;
}


// 아카이브: 2026-05-28
const D_0528 = pastDay({
  iso: '2026-05-28', label: '2026년 5월 28일 목요일', shortLabel: '5월 28일 (목)',
  market: [
    { sym: 'KOSPI',   val: '8,228',   pct: '+2.25%', up: true  },
    { sym: 'S&P 500', val: '7,520',   pct: '+0.02%', up: true  },
    { sym: 'NASDAQ',  val: '26,674',  pct: '+0.07%', up: true  },
    { sym: 'BTC',     val: '$75,176', pct: '-1.01%', up: false },
    { sym: '$/₩',    val: '1,502',   pct: '-0.07%', up: false },
    { sym: '10Y UST', val: '4.48%',  pct: '-3bp',   up: false },
    { sym: 'WTI',     val: '$88.39',  pct: '-6.01%', up: false },
  ],
  ai: {
    label: 'AI 뉴스',
    summary: 'Anthropic의 미출시 프론티어 모델 Claude Mythos Preview가 Project Glasswing을 통해 주요 OS·브라우저에서 1만 개 이상의 제로데이 취약점을 발견하며 AI 사이버보안 시대가 본격화됐습니다. Anthropic의 기업 채택률은 전년 대비 128% 급증해 유료 기업 고객 1위를 차지했고, 서울 오피스 개설을 앞두고 한국 대표이사도 선임됐습니다. Google은 Gemini 3.5 Flash와 Gemini Spark 에이전트를 공개하며 AI 경쟁이 전방위로 확산되고 있습니다.',
    items: [
      { weight: 'high', time: '10:00', source: 'Anthropic / Engadget',
        headline: 'Anthropic Project Glasswing: Claude Mythos Preview, 제로데이 취약점 1만 개+ 발견',
        url: 'https://www.anthropic.com/research/glasswing-initial-update',
        bullets: [
          'Project Glasswing 통해 미출시 Mythos Preview로 주요 OS·브라우저에서 고위험 취약점 1만 개+ 발견. 가장 오래된 취약점은 27년 된 OpenBSD 버그.',
          'AI가 최고 보안 전문가를 능가하는 취약점 탐지 역량 보유 첫 공식 확인. Anthropic은 공개 배포 않고 방어에만 활용.',
          '향후 Opus 모델에 새로운 사이버 보안 가드레일 도입 예정. AI 사이버보안 시대 본격화.'
        ],
        why: 'AI가 처음으로 인간 전문가 수준의 사이버 공격 역량을 갖췄다는 점에서 기업 보안 투자와 AI 규제 논의에 직접적 영향을 미칩니다.',
        notes: [
          { term: '제로데이 취약점', def: '아직 패치되지 않은 소프트웨어 보안 결함. 공격자가 이를 먼저 발견하면 방어자가 대응할 시간이 0일이라는 의미.' },
          { term: 'Project Glasswing', def: 'Anthropic이 AI를 활용해 중요 소프트웨어의 취약점을 선제적으로 찾아 보안을 강화하는 이니셔티브.' }
        ]
      },
      { weight: 'high', time: '09:00', source: 'ETR / LiveNewsChat',
        headline: 'Claude 기업 채택률 128% 급증 — 유료 기업 고객 1위 첫 탈환',
        url: 'https://livenewschat.eu/anthropic-claude-ai-enterprise-front-runner-2026/',
        bullets: [
          'ETR 데이터 기준 Claude 기업 채택률 12개월간 128% 급증, OpenAI는 동기간 8% 감소. Ramp AI 인덱스 유료 기업 고객 1위 첫 탈환.',
          'Anthropic ARR $440억, API 사용량 전년비 17배. OpenAI ARR $250억+ 돌파, Anthropic $190억 접근.',
          '코딩·에이전트·기업용 워크플로에서 Claude 우위 뚜렷, AI B2B 시장 재편 가속.'
        ],
        why: 'Anthropic이 최초로 OpenAI를 기업 채택에서 앞섰다는 점은 AI 시장 경쟁 구도의 근본적 변화를 의미합니다.',
        notes: [{ term: 'Ramp AI 인덱스', def: '기업용 결제 플랫폼 Ramp가 고객사 카드 결제 데이터로 AI 서비스 채택 현황을 집계한 지수.' }]
      },
      { weight: 'high', time: '08:30', source: 'Anthropic',
        headline: 'Anthropic, 한국 대표이사 최기영 선임 — 서울 오피스 개설 본격화',
        url: '',
        bullets: [
          'Anthropic, 한국 법인 설립 앞두고 최기영(KiYoung Choi)를 한국 Representative Director로 선임(5월 26일). 서울 오피스 개설 임박.',
          '삼성·SK하이닉스·카카오·네이버 등 국내 AI·반도체 기업과의 파트너십 확대 포석.',
          'OpenAI·Google에 이어 Anthropic까지 한국 직접 거점 마련, 국내 AI 생태계 경쟁 가속.'
        ],
        why: 'AI 인프라·반도체 강국인 한국에 Anthropic이 직접 거점을 마련하는 것은 아시아태평양 전략 본격화의 신호입니다.',
        notes: []
      },
      { weight: 'low', time: '07:00', source: 'CNN Business',
        headline: '미국 정부, MS·xAI 등 AI 모델 출시 전 사전 테스트 의무화 합의',
        url: 'https://www.cnn.com/2026/05/05/tech/microsoft-google-xai-government-test-ai-models',
        bullets: [
          'Microsoft, Google, xAI 등 주요 AI 기업들이 미국 정부에 신모델 출시 전 조기 테스트 접근권 제공 합의.',
          'AI 안전 규제의 새 표준 형성. Anthropic도 Project Glasswing 통해 정부·기업과 보안 협력 확대 중.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '06:30', source: 'CNBC / Google',
        headline: 'Google, Gemini 3.5 Flash·Gemini Spark 에이전트 베타 공개',
        url: 'https://www.cnbc.com/2026/05/19/google-ai-ultra-gemini-spark-omni.html',
        bullets: [
          'Google Gemini 3.5 Flash: 경쟁사 대비 1/2~1/3 가격의 경량 최첨단 모델 출시.',
          'Gemini Spark 에이전트: 연결된 앱 간 추론 가능한 범용 AI 에이전트. AI Ultra 구독자 우선 베타.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '06:00', source: 'Simon Willison / LLM Stats',
        headline: 'GPT-5.5 API 가격 2배↑, Opus 4.7 출시 — AI 모델 프리미엄화 가속',
        url: 'https://simonwillison.net/2026/May/27/product-market-fit/',
        bullets: [
          'OpenAI GPT-5.5 API 가격 GPT-5.4 대비 2배. Anthropic Opus 4.7은 Opus 4.6 대비 약 1.4배. 프론티어 모델 프리미엄화 가속.',
          'Simon Willison, Anthropic·OpenAI 모두 프로덕트-마켓 핏 달성 분석 — 기업 AI 전환비용 상승 시사.'
        ],
        why: '', notes: [{ term: '프론티어 모델', def: '현재 기술 수준에서 가장 뛰어난 최첨단 AI 모델.' }]
      },
      { weight: 'low', time: '05:30', source: 'Axios',
        headline: 'Google, AI 전쟁 전략 공개 — Anthropic·OpenAI와 사실상 동급 선언',
        url: 'https://www.axios.com/2026/05/21/google-ai-anthropic-openai-war',
        bullets: [
          'Google 경영진, AI 경쟁을 사실상 동급(neck-and-neck)으로 규정. 비용·속도·컴퓨팅 자원에서 각기 다른 트레이드오프 전략.',
          '검색·클라우드·모바일 생태계 강점 바탕 AI 침투 속도 가속.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '05:00', source: 'AI Funding Tracker',
        headline: '2026년 AI 스타트업 VC 투자 역대 최고 비중 — 로봇·에이전트·보안 3대 테마',
        url: 'https://theaiinsider.tech/2026/05/27/ai-funding-in-2026-where-venture-capital-is-going/',
        bullets: [
          '2026년 VC 투자 중 AI 비중 역대 최고. 로봇공학(물리 AI), AI 에이전트, AI 사이버보안 3대 테마에 집중.',
          'Rhoda AI($4.5억), Pudu Robotics($1.5억), Lastwall($1.6억) 등 대형 라운드 완료.'
        ],
        why: '', notes: []
      },
    ],
  },
  physical: {
    label: '피지컬 AI 뉴스',
    summary: '2026 Robotics Summit & Expo(5월 27~28일)에서 NVIDIA가 새 물리 AI 모델을 공개하고 TorqueAGI가 NVIDIA·John Deere·Dexterity와 협력을 발표하며 물리 AI의 산업 현장 배포가 가속되고 있습니다. Tesla는 Fremont 공장을 로봇 생산 라인으로 전환 발표했고, Pudu Robotics는 $1.5억 투자를 유치하며 상업용 로봇 스케일링에 나섰습니다.',
    items: [
      { weight: 'high', time: '10:00', source: 'NVIDIA Newsroom / PRWeb',
        headline: 'NVIDIA, Robotics Summit에서 물리 AI 모델 공개 — 글로벌 파트너 차세대 로봇 동시 발표',
        url: 'https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots',
        bullets: [
          'NVIDIA, 2026 Robotics Summit(5월 27~28일)에서 새 오픈 물리 AI 모델·프레임워크 공개. Isaac 로보틱스·Cosmos 오픈 월드 모델 기반.',
          'TorqueAGI, NVIDIA Perception Partner로 NVIDIA·John Deere·Dexterity 협력 발표(5월 27일). 농업·물류·제조 물리 AI 파운데이션 모델 배포.',
          'Cadence+NVIDIA 확장 파트너십: 시뮬레이션-실제 전환 격차 해소. 로봇 실제 환경 성능 저하 문제 완화.'
        ],
        why: 'NVIDIA가 GPU를 넘어 물리 AI 소프트웨어 생태계까지 장악하려는 전략을 명확히 하며 로봇공학의 안드로이드 플랫폼으로 포지셔닝 중입니다.',
        notes: [
          { term: '시뮬-투-리얼 격차', def: '가상 환경 훈련 로봇이 실제 환경으로 이전할 때 성능이 떨어지는 현상. 물리 AI 상용화의 핵심 과제.' },
          { term: 'NVIDIA Cosmos', def: 'NVIDIA의 오픈 월드 파운데이션 모델. 로봇·자율주행 AI 훈련용 합성 데이터 생성에 활용.' }
        ]
      },
      { weight: 'high', time: '09:00', source: 'Robot Report',
        headline: 'Pudu Robotics, $1.5억 투자 유치 — 청소·물류·산업 로봇 스케일링',
        url: 'https://newmarketpitch.com/blogs/news/robotics-funding-news',
        bullets: [
          'Pudu Robotics, $1.5억(약 2,070억 원) 신규 투자 유치. 청소·배달·산업용 상업 로봇 및 구현 AI 애플리케이션 영역 확장.',
          '글로벌 70개국+ 레스토랑·병원·물류센터에 상업용 로봇 1만+ 대 배포한 검증된 플레이어.',
          '2026년 로봇 분야 VC 급증 추세. Rhoda AI($4.5억), KEMARO($500만) 등 잇달아 대형 라운드 마감.'
        ],
        why: '물리 AI가 연구소를 벗어나 실제 상업 환경에 대규모 배포되는 전환점에서 검증된 배포 실적 기업들로 투자가 집중되는 신호입니다.',
        notes: [{ term: '구현 AI(Embodied AI)', def: '물리적 몸체를 가진 AI. 로봇·드론 등이 해당. 언어·시각 AI와 달리 물리 세계를 직접 인식하고 조작.' }]
      },
      { weight: 'high', time: '08:00', source: 'Business Wire',
        headline: 'Rhoda AI $4.5억 시리즈 A — FutureVision 영상 예측 제어 플랫폼 공개',
        url: 'https://www.businesswire.com/news/home/20260310715139/en/Rhoda-AI-Exits-Stealth-with-$450-Million-Series-A-to-Bring-Robots-Out-of-the-Lab-and-Into-the-Real-World',
        bullets: [
          'Rhoda AI, 18개월 스텔스 후 $4.5억 시리즈 A(기업가치 $17억) 공개. FutureVision 플랫폼: 영상 예측 제어(Video-Predictive Control) 기반 로봇 인텔리전스 레이어.',
          'DVA(Direct Video Action) 모델로 실시간 물리 인식-제어 통합. 고속 제조 환경 2분 이내 사이클 타임, 고객 KPI 초과.',
          'Khosla Ventures 등 주요 VC 참여. 영상-언어-행동 통합 접근법을 로봇에 적용한 최신 아키텍처.'
        ],
        why: '영상 예측 제어는 로봇이 고정 시나리오를 벗어나 실제 세계의 불확실성에 대응하는 방식에서 패러다임 전환으로 평가받습니다.',
        notes: [{ term: 'DVA(Direct Video Action)', def: '영상 입력을 실시간 분석해 로봇 동작을 직접 생성하는 모델. 인식-행동을 통합.' }]
      },
      { weight: 'low', time: '07:00', source: 'CNBC / Standard Bots',
        headline: 'Tesla, Fremont 공장 Q2 2026부터 Optimus Gen3 로봇 양산 라인으로 전환',
        url: '',
        bullets: [
          'Tesla, Fremont 캘리포니아 공장 Model S·X 라인 철수 후 Optimus Gen3 연간 100만 대 목표 생산. Q2 2026 착공.',
          'Optimus Gen3: 22DoF 손, 50개 액추에이터. 양산 시 목표 가격 $2~3만.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '06:30', source: 'The Register',
        headline: 'Boston Dynamics Atlas, 현대차 조지아 공장 출하 개시',
        url: 'https://www.theregister.com/2026/01/06/boston_dynamics_atlas_production/',
        bullets: [
          'Boston Dynamics, 최종 생산 버전 Atlas 현대차그룹 조지아 공장 출하 시작. 수만 대 배포 계획.',
          '현대차그룹이 물리 AI를 핵심 제조 인프라로 채택하는 구체적 행보.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '06:00', source: 'GrabaRobot',
        headline: 'Figure 03, BMW 스파르탄버그 파일럿 성공 — 실제 고객 공장 자율 작업',
        url: 'https://www.grabarobot.com/blog/humanoid-robot-workforce-deployment-2026/',
        bullets: [
          'Figure AI Figure 03, BMW 스파르탄버그 파일럿 성공 후 양산 스케일링 단계 진입.',
          '자율 작업 로봇 수 전 세계 수천 대 수준, 2026년이 진정한 산업 배포 원년으로 기록될 전망.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '05:00', source: 'AI Funding Tracker',
        headline: '소형 로봇 스타트업 펀딩 릴레이 — KEMARO $500만, SquareMind $1,800만',
        url: 'https://aifundingtracker.com/ai-startup-funding-news-today/',
        bullets: [
          'KEMARO(산업용 자율 청소 로봇) $500만 시리즈 B 프리클로즈, SquareMind(AI 피부과 진단 플랫폼) $1,800만 프리-시리즈 A.',
          '물리 AI가 물류·제조 넘어 의료·농업까지 전방위 확산.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '04:00', source: 'Medium / Meta Intelligence',
        headline: '2026 휴머노이드 로봇 산업 현황 — "진짜 배포 원년" 총정리',
        url: 'https://medium.com/@asarav/humanoid-robots-in-2026-where-the-industry-actually-stands-6ae3dc0c7be5',
        bullets: [
          'Tesla·Boston Dynamics·Figure·Agility Robotics 등이 실제 생산 환경 배포 단계 진입. 자율 작업 로봇 수 전 세계 수천 대로 2025년 대비 10배 이상 증가.',
          'NVIDIA가 로봇공학의 안드로이드 역할 노리며 Isaac·Cosmos 기반 소프트웨어 생태계 구축 가속.'
        ],
        why: '', notes: []
      },
    ],
  },
  quantum: {
    label: '양자 뉴스',
    summary: '미국 상무부가 IBM과 함께 미국 최초 양자 파운드리 설립 계획을 발표하고 양자 기업 9곳에 $20억을 지원하며 양자 패권 경쟁이 국가 전략 차원으로 격상됐습니다. Quantinuum과 BMW의 다년 파트너십 확장으로 산업계 양자 적용이 가속되고, Oracle-Classiq의 AI 에이전트-양자 통합 데모가 주목받고 있습니다.',
    items: [
      { weight: 'high', time: '10:00', source: 'CNN Business / IBM Newsroom',
        headline: 'IBM+미국 상무부, 미국 최초 양자 파운드리 설립 — $10억 CHIPS 지원',
        url: 'https://www.cnn.com/2026/05/21/business/ibm-quantum-computing-firms-grants',
        bullets: [
          '미국 상무부-IBM, 미국 최초 순수 양자칩 파운드리 Anderon 설립 LOI 발표(5월 21일). CHIPS법 기반 $10억 지원 예정.',
          '미국 정부, 양자 기업 9곳에 $20억 보조금 + NIST 소수 지분 취득. IBM이 최대 수혜($10억).',
          'IBM 120-큐비트 Nighthawk 프로세서로 2026년 내 검증된 양자 우위 실증 목표. 오류 정정 10배 가속, 계획 1년 단축.'
        ],
        why: '양자 컴퓨팅이 미국 국가 전략 자산으로 공식 지정됐음을 의미합니다. AI 반도체에 이어 양자 분야에서도 미·중 기술 패권 경쟁이 본격화됩니다.',
        notes: [
          { term: '양자 파운드리', def: '양자 프로세서를 전문 제조하는 팹. 반도체 파운드리와 유사하나 극저온·특수 공정 필요.' },
          { term: 'CHIPS법', def: '미국 반도체·첨단기술 자국 생산을 지원하는 법률. 양자 분야로 지원 범위 확대.' }
        ]
      },
      { weight: 'high', time: '09:00', source: 'Quantinuum / The Quantum Insider',
        headline: 'Quantinuum-BMW, 다년 양자 파트너십 확장 — 연료전지·배터리 소재 연구',
        url: 'https://thequantuminsider.com/2026/05/05/quantinuum-and-bmw-group-expand-quantum-computing-collaboration-with-new-multi-year-partnership/',
        bullets: [
          'Quantinuum-BMW 그룹, 2021년부터 이어온 협력을 다년 파트너십으로 확장(5월 5일). BMW는 Helios→Sol(2027)→Apollo(2029) 순차 활용.',
          '백금 촉매의 산소환원반응(ORR) 시뮬레이션 집중. 수소연료전지·EV 배터리 비용 절감·효율 향상 목표.',
          '산업-양자 협력 역대 최장 지속 사례 중 하나로 주목.'
        ],
        why: '자동차 산업에서 양자 컴퓨팅의 실질적 적용이 입증되면 소재·화학·의약 분야로의 확산이 빨라질 수 있습니다.',
        notes: [{ term: '산소환원반응(ORR)', def: '수소연료전지에서 산소가 전자를 받아 물로 변환되는 핵심 반응. 촉매 효율 개선이 연료전지 상용화의 핵심 과제.' }]
      },
      { weight: 'high', time: '08:00', source: 'CNBC',
        headline: '미국 정부 양자 기업 9곳 $20억 지원·지분 취득 — 양자주 급등',
        url: 'https://www.cnbc.com/2026/05/21/quantum-stocks--us-taking-equity-stakes.html',
        bullets: [
          'NIST, 양자 기업 9곳에 $20억 보조금 + 소수 비지배 지분 취득. 정부가 양자 산업 직접 지분 보유 최초 사례.',
          '발표 이후 IonQ·Rigetti·Quantinuum 등 양자주 일제히 급등.',
          '미국의 공세적 양자 지원 정책, EU·중국과 대칭 이루며 글로벌 양자 군비경쟁 본격화.'
        ],
        why: '정부의 지분 참여는 단순 보조금보다 강한 형태의 지원으로, 양자 컴퓨팅이 전략 자산임을 공식 인정한 것입니다.',
        notes: [{ term: 'IonQ', def: '이온 트랩 방식 양자 컴퓨터를 개발하는 미국 나스닥 상장 양자 기업(IONQ).' }]
      },
      { weight: 'low', time: '07:00', source: 'Oracle / Classiq',
        headline: 'Oracle+Classiq, AI 에이전트가 36-큐비트 양자 코드 자동 생성 데모',
        url: '',
        bullets: [
          'Oracle Cloud+Classiq, AI 에이전트가 자연어 프롬프트에서 복잡한 양자 회로 코드를 자동 생성·실행하는 36-큐비트 포트폴리오 최적화 데모 공개.',
          '양자 프로그래밍 진입 장벽을 AI로 낮추는 접근법 확산 기대.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '06:30', source: 'CNN Science',
        headline: '"Q-Day" 현실화 우려 — 양자 컴퓨팅 사이버보안 위기 경고',
        url: 'https://www.cnn.com/2026/05/17/science/quantum-computing-cybersecurity-q-day',
        bullets: [
          'CNN, 양자 컴퓨터가 현재 암호화 체계를 무력화하는 Q-Day 현실화 경고. 금융·국방·통신 인프라 전반의 암호체계 전환 시급.',
          'NIST의 양자 내성 암호화(PQC) 표준 수립에도 실제 전환 속도가 느려 취약성 지속.'
        ],
        why: '', notes: [{ term: 'Q-Day', def: '양자 컴퓨터가 현재 공개키 암호화를 해독할 수 있는 날. 도래 시 인터넷 보안 인프라 전체가 위험에 노출.' }]
      },
      { weight: 'low', time: '06:00', source: 'Lastwall',
        headline: 'Lastwall, 양자 저항 사이버보안 $1.6억 시리즈 A 확장',
        url: '',
        bullets: [
          'Lastwall, 시리즈 A 익스텐션 $1,600만 유치. 양자 저항(Quantum-Resilient) 소프트웨어 기반 캐나다 정부·기업 사이버 방어 확대.',
          'Q-Day 대비 양자 내성 암호화 전환 수요 증가로 사이버보안 스타트업 투자 활기.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '05:00', source: 'The Quantum Insider',
        headline: 'Harvard 연구진, 양자 컴퓨팅 발전 속도 예상보다 훨씬 빠르다',
        url: 'https://thequantuminsider.com/2026/05/04/harvard-researchers-quantum-computing-advancing-faster-than-expected/',
        bullets: [
          'Harvard 연구팀, 큐비트 오류율·소자 안정성·게이트 충실도가 기존 로드맵보다 빠르게 개선 중 분석.',
          'IBM Nighthawk 120-큐비트 프로세서의 오류 정정 1년 조기 달성이 대표 사례로 인용.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '04:00', source: 'phys.org',
        headline: '지속적 양자 오류 원인 첫 규명 — 신뢰성 향상 열쇠',
        url: 'https://phys.org/news/2026-05-persistent-quantum-error.html',
        bullets: [
          '양자 컴퓨터 반복 오류 패턴의 물리적 원인이 처음으로 규명. 오류 정정 알고리즘 개선에 즉시 적용 가능.',
          '내성형 양자 컴퓨터(Fault-Tolerant QC) 실현의 핵심 선행 조건.'
        ],
        why: '', notes: [{ term: '내성형 양자 컴퓨터(Fault-Tolerant QC)', def: '오류 발생 시 자동 보정해 계산을 정확하게 완수하는 양자 컴퓨터. 현재 NISQ 시대를 넘어서는 목표.' }]
      },
    ],
  },
  econ: {
    label: '경제 뉴스',
    summary: '한국은행이 5월 28일 금통위에서 기준금리를 2.50%로 동결했으나 하반기 인상 시그널을 내비쳐 채권 시장이 긴장했습니다. WTI 유가는 이란의 호르무즈 해협 개방 발표로 6% 급락하며 인플레이션 압력이 완화됐고, SK하이닉스는 시가총액 $1조를 돌파해 삼성·마이크론에 이어 세 번째 $1조 반도체 기업이 됐습니다.',
    items: [
      { weight: 'high', time: '10:00', source: '한국은행 / Financial News',
        headline: '한국은행, 기준금리 2.50% 동결 — 매파적 동결·하반기 인상 시그널',
        url: 'https://www.fnnews.com/news/202605260856512852',
        bullets: [
          '한국은행 금통위(5월 28일), 기준금리 연 2.50% 동결. 신현송 새 총재 첫 금통위 주재. 성장·물가 전망 상향·환율 부담 반영.',
          '증권가, 매파적 동결 평가 — 하반기 7~8월 인상 가능성 부각. 금리 인하 의견 위원 수 축소.',
          '원화 강세(1,502원), KOSPI 최고, 물가 상방 리스크 복합 작용. 한은 통화 정상화 경로 구체화.'
        ],
        why: '한국 기준금리 인상 가능성이 높아지면 시중 금리 상승→부동산·대출 부담 증가, 은행 수익성 개선으로 이어질 수 있습니다.',
        notes: [
          { term: '매파적 동결', def: '금리를 유지하지만 향후 인상 가능성을 강하게 시사하는 통화정책 기조.' },
          { term: '금통위', def: '한국은행 금융통화위원회. 기준금리를 결정하는 최고 의사결정 기구.' }
        ]
      },
      { weight: 'high', time: '09:00', source: 'Trading Economics / CNBC',
        headline: 'WTI 유가 6% 급락 $88.39 — 이란 호르무즈 해협 한 달 내 개방 발표',
        url: '',
        bullets: [
          'WTI 유가 5월 27일 $88.39(-6.01%)로 4월 이후 최저. 이란 국영TV, 테헤란이 1개월 내 호르무즈 해협 상업 항행 전쟁 전 수준 복원 약속.',
          '글로벌 원유 공급 회복 기대감으로 에너지 인플레이션 압력 완화. 미국채 10년물 금리 4.48%로 동반 하락.',
          '이란-미국 평화 협상 진전이 지정학 리스크 완화로 이어지며 위험자산 선호 재개. 원화 강세·에너지 수입국(한국) 수혜 기대.'
        ],
        why: '호르무즈 해협 개방은 글로벌 에너지 공급 20%가 통과하는 병목 해소를 의미합니다. 한국·일본 등 에너지 수입 의존 국가에 직접적 비용 절감 효과가 있습니다.',
        notes: [{ term: '호르무즈 해협', def: '페르시아만과 아라비아해를 잇는 해협. 글로벌 원유·LNG 수송 약 20%가 통과하는 세계 최대 에너지 물류 병목.' }]
      },
      { weight: 'high', time: '08:30', source: 'KFGO / BanklessTimes',
        headline: 'SK하이닉스, 시총 $1조 돌파 — 삼성·마이크론 이어 세 번째 $1조 반도체 기업',
        url: 'https://kfgo.com/2026/05/26/sk-hynix-joins-1-trillion-club-after-samsung-micron-on-ai-chip-boom/',
        bullets: [
          'SK하이닉스, 5월 27일 시총 1,680조 원($1.12조) 돌파. 삼성·마이크론에 이어 세계 세 번째 $1조 반도체 기업. 올해 주가 215% 상승.',
          '미래에셋, SK하이닉스 목표주가 320만 원(+18.8%)·삼성전자 55만 원(+14.6%) 상향. AI HBM 수요 2028년까지 공급 초과 지속 전망.',
          'KOSPI 대비 반도체 2종목 비중 42.2% — 지수 왜곡 우려 vs AI 슈퍼사이클 수혜 논쟁.'
        ],
        why: 'SK하이닉스 HBM은 NVIDIA AI칩의 핵심 부품입니다. $1조 클럽 가입은 AI 인프라 수요가 구조적 성장임을 시장이 인정한 것입니다.',
        notes: [{ term: 'HBM(고대역폭메모리)', def: 'AI 학습·추론에 필요한 대량 데이터를 빠르게 처리하는 3D 적층 메모리. SK하이닉스가 세계 최대 공급자.' }]
      },
      { weight: 'low', time: '07:00', source: 'Seoul Economic Daily',
        headline: 'KOSPI 사상 최고 8,228.70 — 반도체 주도, 전체 종목 90% 하락 기현상',
        url: 'https://en.sedaily.com/markets/2026/05/27/semiconductors-drive-kospi-record-as-9-of-10-stocks-decline',
        bullets: [
          'KOSPI 5월 27일 8,228.70(+2.25%)으로 역대 최고 경신. 전체 종목 90%가 하락 — 삼성·SK하이닉스 단 두 종목이 지수 상승 견인.',
          '삼성전자 307,000원(+2.68%), SK하이닉스 2,243,000원(+9.31%). 두 종목 KOSPI 시총 비중 42.2%.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '06:30', source: 'S&P Global / Deloitte',
        headline: '미국 GDP 1Q26 +2.0% 성장 — 고용 강세·소비 회복으로 연착륙',
        url: '',
        bullets: [
          '미국 실질 GDP 1Q26 연율 +2.0% 성장(전분기 +0.5% 대비 반등). 민간 고용 월평균 증가폭 2025년 대비 2.5배.',
          '헤드라인 PCE 인플레이션 3.5%. 연준 금리 동결 기조 유지, 12월 단 1회 인하 예상.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '06:00', source: 'Trading Economics',
        headline: '원화 1,502원 강세 — 이란 지정학 완화+반도체 수출 호조 복합 효과',
        url: '',
        bullets: [
          '달러-원 1,502원(-0.07%). 3월 1,520원 고점 대비 1.2% 하락. 이란 긴장 완화+한국 반도체 수출 급증 복합 효과.',
          '원화 강세는 수입물가 하락 → 물가 안정에 긍정적이나 수출 기업 채산성엔 부담.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '05:00', source: 'KDI / Money Today',
        headline: 'KDI, 2026년 한국 경제 2.5% 성장 전망 유지 — 반도체·내수 동반 개선',
        url: 'https://www.mt.co.kr/amp/stock/2026/05/26/2026052616254094792',
        bullets: [
          'KDI, 2026년 한국 경제성장률 2.5% 전망 유지. 반도체 수출 호조+내수 회복 복합 효과.',
          '기업심리지수 제조업 100.8(전월비 +1.7p), 비제조업 97.5(+5.4p). 경제심리지수 97.5.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '04:30', source: 'TradingKey',
        headline: 'KOSPI 올해 90% 이상 상승 — 한국 개인투자자, 코인보다 주식 선호 전환',
        url: 'https://www.tradingkey.com/analysis/stocks/more/261927923-korea-stock-market-record-high-kospi-tradingkey',
        bullets: [
          'KOSPI 2026년 연초 대비 90%+ 상승. 반도체 쏠림 심화 속 피크아웃 경고도 병존.',
          '한국 개인투자자들이 암호화폐에서 주식(삼성·SK하이닉스)으로 자금 이동 관측.'
        ],
        why: '', notes: []
      },
    ],
  },
  columns: {
    label: '컬럼 피드',
    summary: '오건영 신한은행 디지털 크리에이터가 이란 호르무즈 해협 개방 가능성이 시장에 미치는 영향을 분석하며, 지정학 리스크 해소가 단기적 위험자산 반등을 이끌 수 있지만 6월 이후 채권 금리의 구조적 우려는 여전하다고 강조했습니다.',
    items: [
      {
        name: '오건영',
        title: '신한은행 · 디지털 크리에이터',
        avatar: 'OG',
        color: '#D97757',
        time: '2일 전',
        likes: 653,
        comments: 10,
        post: '사칭 경고: 유튜브·네이버 밴드 사칭 주의. 주식 리딩 무관. / 에세이: 호르무즈 해협이 이제 풀리는 건가요. 전쟁으로 인한 호르무즈 봉쇄가 더 이어지게 되면 특히 6월이 되었을 때 시장이 느끼는 긴장감은 매우 클 겁니다. 밖에 거대한 태풍이 몰려와서 지하 벙커에 숨었다구요... 벙커 안에는 1개월치 식량이 준비되어 있죠. 거기서 리더가 말합니다. 식량이 아직 있으니 괜찮습니다. 그런데 만약 태풍이 2개월 이상 지속된다면? 호르무즈 개방은 이 태풍이 예상보다 일찍 끝날 수도 있다는 신호입니다. 채권 금리의 구조적 상승 압력은 여전하지만 단기 지정학 프리미엄은 빠르게 해소될 수 있습니다.',
        summary: '호르무즈 개방 시나리오 분석 — 단기 안도 랠리 가능하나 채권 금리 구조적 우려 지속'
      }
    ],
  },
  invest: {
    title: 'AI칩 슈퍼사이클 + 호르무즈 완화',
    subtitle: `Claude가 작성한 오늘의 메모 · 5월 28일 08:00 · 4분 읽기`,
    sections: [
      { h: '한 줄 요약', body: 'SK하이닉스 $1조 클럽 가입, 이란 호르무즈 개방으로 유가 급락, 한은 매파적 동결이 오늘의 3대 변수입니다. AI 반도체 수요는 구조적이고 지정학 프리미엄은 빠르게 해소 중입니다.' },
      { h: '오늘의 변수', body: '①SK하이닉스 +9.3%·삼성전자 +2.7% — HBM AI 수요 2028년까지 공급 초과. KOSPI 90%+ 상승에도 반도체 모멘텀 지속. ②WTI -6% — 이란 호르무즈 개방 발표가 에너지 인플레 완화. 한국 수입물가·경상수지 개선 기대. ③한은 기준금리 2.50% 동결 but 하반기 7~8월 인상 시그널 — 채권 단기 부담 vs 인플레 억제 기대.' },
      { h: '포지셔닝', body: '단기(1-3개월): 반도체(SK하이닉스·삼성전자·NVDA) 비중 유지. 지정학 완화로 에너지 헤지 포지션 일부 축소. 미국채 10년물 금리 4.48% 하락세 — TLT 일부 진입 기회. 중기(6-12개월): AI 인프라 수요 구조적 성장. 한은 금리 인상 시 은행주 관심. 유가 안정화되면 글로벌 소비 회복 모멘텀으로 배당주 VYM 분할 매수 검토.' },
      { h: '리스크', body: '①KOSPI 반도체 집중 리스크 — 두 종목이 지수 42% 차지, 피크아웃 경고 병존. ②이란 호르무즈 발표 신뢰성 — 협상 결렬 시 유가 재급등 가능. ③한은 조기 금리 인상 — 부동산·가계부채 시장 충격 리스크. ④글로벌 AI 투자 과열 우려 — 스타트업 밸류에이션 조정 가능성.' }
    ],
    watchlist: [
      { sym: '005930', name: '삼성전자',      val: '307,000원', pct: '+2.68%', up: true,  note: 'AI HBM 수혜·시총 $1조 돌파, KOSPI 상승 양대 축' },
      { sym: '000660', name: 'SK하이닉스',    val: '2,243,000원', pct: '+9.31%', up: true,  note: '$1조 클럽 가입, HBM3E NVIDIA 독점 공급 구조 부각' },
      { sym: 'NVDA',   name: 'NVIDIA',        val: '$1,148',   pct: '+1.50%', up: true,  note: 'Robotics Summit 물리 AI 모델 공개, 생태계 플랫폼 강화' },
      { sym: 'MSFT',   name: 'Microsoft',     val: '$482',     pct: '+0.30%', up: true,  note: 'AI 사전 테스트 합의 참여, Azure AI 수요 지속' },
      { sym: 'TLT',    name: 'iShares 20Y ETF', val: '$91.80', pct: '+0.85%', up: true,  note: '미국채 10년물 4.48% 하락, 지정학 완화 수혜' },
      { sym: 'GLD',    name: 'SPDR Gold ETF', val: '$238',     pct: '-0.50%', up: false, note: '지정학 리스크 완화로 안전자산 수요 소폭 감소' },
      { sym: 'VYM',    name: 'Vanguard High Div.', val: '$130', pct: '+0.20%', up: true, note: '금리 안정화 구간 배당 수익 방어 포지션' },
      { sym: 'BTC',    name: 'Bitcoin',        val: '$75,176', pct: '-1.01%', up: false, note: '위험자산 선호 개선에도 소폭 조정, AI 랠리 상관관계 단기 약화' },
    ],
    portfolio: [
      { asset: '국내주식', pct: 30, color: '#3DDC97',
        tickers: [{ sym: '005930', name: '삼성전자' }, { sym: '000660', name: 'SK하이닉스' }],
        note: 'AI HBM 수요 2028년까지 초과 공급, KOSPI 반도체 모멘텀 지속' },
      { asset: '미국주식', pct: 25, color: '#5B9BD5',
        tickers: [{ sym: 'NVDA', name: 'NVIDIA' }, { sym: 'MSFT', name: 'Microsoft' }],
        note: 'AI 인프라·에이전트 AI 직접 수혜. NVDA 물리 AI 플랫폼 전략 가속' },
      { asset: '채권', pct: 15, color: '#9B8EC4',
        tickers: [{ sym: 'TLT', name: 'iShares 20Y ETF' }],
        note: '미국채 금리 하락 구간 일부 진입. 한은 인상 시나리오 헤지' },
      { asset: '금', pct: 10, color: '#F5C518',
        tickers: [{ sym: 'GLD', name: 'SPDR Gold ETF' }],
        note: '지정학 완화로 단기 조정 가능. 인플레 불확실성 대비 일부 유지' },
      { asset: '배당주', pct: 10, color: '#E08A6E',
        tickers: [{ sym: 'VYM', name: 'Vanguard High Div.' }],
        note: '금리 안정화 기대 진입 구간, 배당 수익 방어' },
      { asset: '비트코인', pct: 10, color: '#F7931A',
        tickers: [{ sym: 'BTC', name: 'Bitcoin' }],
        note: '위험선호 확장 옵션. 단기 AI 반도체 랠리 상관관계 약화 구간' },
    ],
  },
});


// 아카이브: 2026-05-27
// 아카이브: 2026-05-29
const D_0529 = pastDay({
  iso: '2026-05-29', label: '2026년 5월 29일 금요일', shortLabel: '5월 29일 (금)',
  market: [
    { sym: 'KOSPI',   val: '8,185',   pct: '-0.52%', up: false },
    { sym: 'S&P 500', val: '7,561',   pct: '+0.55%', up: true  },
    { sym: 'NASDAQ',  val: '26,721',  pct: '+0.18%', up: true  },
    { sym: 'BTC',     val: '$73,255', pct: '-2.57%', up: false },
    { sym: '$/₩',    val: '1,495',   pct: '-0.47%', up: false },
    { sym: '10Y UST', val: '4.52%',  pct: '+4bp',   up: true  },
    { sym: 'WTI',     val: '$89.53',  pct: '+1.29%', up: true  },
  ],
  ai: {
    label: 'AI 뉴스',
    summary: 'Anthropic이 Claude Opus 4.7를 전면 출시하며 ARR $440억·기업 채택 128% 급증을 기록했고, OpenAI는 $40억 규모 컨설팅 자회사 DeployCo를 설립해 기업 AI 배포 시장을 정조준했습니다. Meta는 Superintelligence Labs 첫 플래그십 모델 Muse Spark를 공개하며 AI 경쟁이 전방위 확전 양상을 보이고 있습니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'Anthropic',
        headline: 'Claude Opus 4.7 전면 출시 — ARR $440억·기업 채택 128% 급증, OpenAI 빈자리 빠르게 점령',
        url: 'https://www.anthropic.com/news/claude-opus-4-7',
        bullets: [
          'Claude Opus 4.7, 비전 능력 대폭 강화·전문가 창작 역량 향상. Amazon Bedrock·Google Vertex AI·Microsoft Foundry에서 동시 제공.',
          'Anthropic 연간 반복매출(ARR) $440억 돌파, 전년 대비 128% 성장. $100만 이상 지출 기업 고객 2개월 만에 1,000개 초과.',
          '클로드 API 사용량 전년비 17배. OpenAI가 기업 고객 8% 감소하는 사이 Anthropic이 엔터프라이즈 1위 굳히기.'
        ],
        why: 'ARR $440억은 AI 모델 기업 중 사상 최고 수준으로, Claude가 기업 인프라의 핵심 레이어로 자리잡았음을 보여줍니다. AI 시장 패권 교체 가능성을 시사하는 구조적 신호입니다.',
        notes: [
          { term: 'ARR(연간 반복매출)', def: '구독·API 기반 기업의 연간 매출 예측치. SaaS·AI 기업 성장성의 핵심 지표.' },
          { term: 'Amazon Bedrock', def: 'AWS가 운영하는 파운데이션 모델 API 서비스. 클로드·타이탄 등 주요 LLM을 기업용으로 제공.' }
        ]
      },
      { weight: 'high', time: '08:00', source: 'OpenAI',
        headline: 'OpenAI, $40억 컨설팅 자회사 DeployCo 설립 — TPG·골드만·맥킨지 등 19개사 투자',
        url: 'https://openai.com/index/openai-launches-the-deployment-company/',
        bullets: [
          'OpenAI 배포 전문 자회사 DeployCo 출범. 초기 자본 $40억 이상. TPG 리드, 골드만삭스·베인캐피털·맥킨지·캡제미니 등 19개사 공동 투자.',
          '기업 현장에 AI 배포 엔지니어를 직접 파견, 조직 맞춤형 AI 구축·운영 지원. Tomoro(응용 AI 컨설팅사) 인수로 150명 선발대 확보.',
          'OpenAI IPO 준비와 동시 진행. Gartner 기업 코딩 에이전트 리더 선정(5월 27일) 등 성과 공세 병행.'
        ],
        why: 'AI 모델 판매에서 기업 현장 배포까지 수직 통합하는 전략으로, AI 컨설팅 시장 전체를 내재화하는 게임체인저입니다. IBM·액센츄어 등 전통 IT 서비스 기업에 직접적 위협이 됩니다.',
        notes: [
          { term: 'DeployCo', def: 'OpenAI가 설립한 기업 AI 배포 전문 자회사. 단순 API 판매를 넘어 현장 구축·운영까지 담당.' },
          { term: 'Tomoro', def: 'OpenAI가 인수한 응용 AI 컨설팅사. 150명의 선발 엔지니어가 DeployCo 초기 운영 인력으로 합류.' }
        ]
      },
      { weight: 'high', time: '10:00', source: 'Meta AI',
        headline: 'Meta Superintelligence Labs, 플래그십 LLM Muse Spark 공개 — AI 투자 $1,150억으로 2배 확대',
        url: 'https://fortune.com/2026/04/29/microsoft-meta-google-ai-capex-spending-billions/',
        bullets: [
          'Meta Muse Spark: Alexandr Wang이 이끄는 Superintelligence Labs 첫 플래그십 LLM. 멀티모달 인식·추론·헬스·에이전트 작업에서 낮은 컴퓨팅 비용으로 경쟁 모델 대비 동등 성능 주장.',
          '2026년 AI 자본지출 $1,150~$1,350억으로 전년 대비 약 2배. 실제 AI 수익화 속도가 대규모 투자의 근거로 제시됨.',
          'Google I/O의 Gemini 3.5 Flash·Gemini Omni Flash 공개와 동시 경쟁. DuckDuckGo 설치 30% 급증 등 Google AI 검색 전환에 사용자 반발 가중.'
        ],
        why: 'Meta가 독자 AI 리더십을 확보하고 투자를 2배로 늘리면서 OpenAI·Anthropic·Google의 3강 구도가 4강으로 확전됩니다. AI 컴퓨팅 인프라 수요 폭발이 가속됩니다.',
        notes: [
          { term: 'Superintelligence Labs', def: 'Meta가 Alexandr Wang(Scale AI 공동창업자) 영입 후 설립한 AI 연구 조직. 범용 AI 개발을 목표로 함.' },
          { term: 'Muse Spark', def: 'Meta Superintelligence Labs 첫 플래그십 LLM. 멀티모달 인식과 에이전트 능력에 특화.' }
        ]
      },
      { weight: 'low', time: '07:00', source: 'TechCrunch',
        headline: 'Google AI 검색 에이전트 전환에 역풍 — DuckDuckGo 설치 30% 급증',
        url: 'https://techcrunch.com/2026/05/26/duckduckgo-installs-are-up-30-as-users-reject-being-force-fed-googles-ai-search/',
        bullets: [
          'Google I/O 2026에서 파란 링크를 AI 에이전트로 전면 대체한다고 발표한 직후, DuckDuckGo 앱 설치 30% 급증.',
          '사용자들이 AI 강제 전환에 반발. 검색 시장 점유율 변화 가속 우려.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '11:00', source: 'MIT Technology Review',
        headline: 'DeepMind 하사비스, AGI 타임라인 단축 — "2029년 실현 가능성 있다"',
        url: 'https://blog.mean.ceo/ai-advancements-news-may-2026/',
        bullets: [
          'DeepMind CEO 데미스 하사비스, AGI(범용인공지능) 타임라인을 기존 "5~10년"에서 "2029년 실현 가능"으로 대폭 단축.',
          '대형 AI 랩 수장들이 AGI 도달 시점을 앞당기는 발언 잇따라. 투자자 기대치와 규제 논의 모두 가속.'
        ],
        why: '',
        notes: [{ term: 'AGI(범용인공지능)', def: '인간처럼 다양한 분야에서 자율적으로 학습하고 문제를 해결할 수 있는 AI. 현재 AI(좁은 AI)와 구별.' }]
      },
      { weight: 'low', time: '12:00', source: 'Anthropic / Vatican',
        headline: 'Anthropic 공동창업자 올라, 교황 레오의 AI 위험 회칙 지원 — AI 윤리 전선 확대',
        url: 'https://www.anthropic.com/news',
        bullets: [
          'Anthropic 공동창업자 크리스토퍼 올라, 트럼프 행정부와 갈등 속에도 교황 레오의 AI 위험 경고 회칙 공개 발표에 참여.',
          'AI 안전 의제가 글로벌 종교·윤리 기관으로 확산. AI 거버넌스 논의 다층화.'
        ],
        why: '',
        notes: [{ term: '회칙(Encyclical)', def: '교황이 전 세계 가톨릭 신자에게 보내는 공식 서한. 주요 사회·윤리 문제에 대한 가톨릭 공식 입장.' }]
      },
      { weight: 'low', time: '13:00', source: 'llm-stats.com',
        headline: '2026년 AI 산업 "쉬운 홍보 시대" 끝 — 컴퓨팅·보안·비즈니스 가치 검증 국면 진입',
        url: 'https://llm-stats.com/ai-news',
        bullets: [
          'AI 시장이 초기 흥분 단계를 지나 컴퓨팅 비용·접근성·안전성·하드웨어·실제 비즈니스 가치를 검증해야 하는 어려운 국면 진입.',
          '더 복잡하고 비싸지며 정치적으로 민감해진 AI 생태계, 진정한 가치 창출 기업과 과대 포장된 기업의 선별 시작.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '14:00', source: 'Anthropic',
        headline: 'Anthropic, Google·Broadcom과 최대 규모 컴퓨팅 파트너십 확장 — AI 인프라 군비경쟁 가속',
        url: 'https://www.anthropic.com/news/google-broadcom-partnership-compute',
        bullets: [
          'Anthropic, Google·Broadcom과 사상 최대 규모 컴퓨팅 공급 계약. 멀티 클라우드·전용 칩 전략으로 특정 인프라 의존 탈피.',
          'AI 모델 기업들이 컴퓨팅 조달 경쟁을 독자 전략으로 끌어올리며 클라우드 빅3의 레버리지 약화.'
        ],
        why: '',
        notes: []
      }
    ]
  },
  physical: {
    label: '피지컬 AI 뉴스',
    summary: '일본항공이 하네다 공항에서 Unitree 기반 휴머노이드 로봇의 그라운드 핸들링 시험 운영을 시작하며 공항 자동화의 새 장을 열었고, Boston Dynamics Atlas가 현대차 메타플랜트에 상업 배포를 준비 중입니다. Figure AI의 Figure 02는 BMW 스파르탄버그 공장에서 11개월 장기 가동을 완료하며 휴머노이드 공장 배포의 타당성을 입증했습니다.',
    items: [
      { weight: 'high', time: '08:00', source: 'Japan Airlines / GMO AI',
        headline: '일본항공, 하네다 공항에 휴머노이드 로봇 그라운드 핸들링 최초 도입 — Unitree 기반',
        url: 'https://medium.com/@asarav/humanoid-robots-in-2026-where-the-industry-actually-stands-6ae3dc0c7be5',
        bullets: [
          '일본항공(JAL), GMO AI & 로보틱스와 협력해 도쿄 하네다 공항에 Unitree 로보틱스 기반 휴머노이드 로봇 배치. 수화물 적재·컨테이너 운반·객실 청소 담당.',
          '일본 공항 그라운드 핸들링 휴머노이드 로봇 투입 최초 사례. GMO는 2026년을 휴머노이드 원년으로 선언.',
          '공항·물류 자동화 시장에서 피지컬 AI 상업 배포가 제조업을 넘어 서비스업으로 확산되는 전환점.'
        ],
        why: '공항 그라운드 핸들링은 비정형 환경, 시간 압박, 안전 기준이 모두 높은 분야입니다. 여기서의 성공적 배포는 휴머노이드 로봇의 상업 적용 범위를 획기적으로 확장하는 증거가 됩니다.',
        notes: [
          { term: '그라운드 핸들링', def: '항공기 지상 지원 업무의 총칭. 수화물 처리, 연료 보급, 기내 청소, 탑승교 조작 등 포함.' },
          { term: 'Unitree 로보틱스', def: '중국 기반 휴머노이드·4족 보행 로봇 제조사. 가성비 높은 로봇으로 글로벌 시장 급부상.' }
        ]
      },
      { weight: 'high', time: '09:00', source: 'Boston Dynamics / The Register',
        headline: 'Boston Dynamics Atlas, 현대차 메타플랜트 상업 배포 준비 완료 — VR 원격조종+자율 이중 모드',
        url: 'https://www.theregister.com/2026/01/06/boston_dynamics_atlas_production/',
        bullets: [
          'Boston Dynamics, Atlas 최종 버전 상업 생산 시작. 현대차 Robot Metaplant Application Center에 수만 대 배포 계획 진행 중.',
          'Atlas는 VR 원격조종, 태블릿 제어, 자율 운전 3가지 모드 지원. 실제 공장 라인 부품 핸들링에 즉시 투입 가능.',
          'Boston Dynamics IPO 가능성 및 기업가치 $1,000억 평가 등장. 현대차 그룹의 로봇 산업 주도권 강화.'
        ],
        why: 'Atlas의 상업 생산 전환과 현대차 대규모 배포 계획은 휴머노이드 로봇이 프로토타입 단계를 완전히 졸업했음을 의미합니다. 로봇 공급망 전반의 투자 테마를 강화합니다.',
        notes: [
          { term: 'Robot Metaplant', def: '현대차 그룹이 추진하는 로봇 친화적 미래형 제조 공장 개념. 사람과 로봇이 협력하는 스마트 팩토리.' }
        ]
      },
      { weight: 'high', time: '10:00', source: 'Figure AI / BMW',
        headline: 'Figure AI, BMW 스파르탄버그 11개월 가동 완료 — Figure 02 두 대가 실 조립라인서 10시간 교대',
        url: 'https://vfuturemedia.com/future-tech/humanoid-robots-enter-the-workforce-figure-boston-dynamics-and-tesla-optimus-2026/',
        bullets: [
          'Figure 02 두 대, BMW 스파르탄버그 공장 실제 조립라인에서 주 5일·10시간 교대 근무 11개월 완료. 초기 실험에서 핵심 부품 핸들링 통합 단계로 발전.',
          '2026년 말 가정용 파일럿 프로그램 및 추가 공장 확장 계획. Figure 03은 3월 백악관 AI·교육 이벤트에 등장.',
          '휴머노이드의 장기·안정적 공장 가동 타당성 최초 실증. 실제 생산성 데이터 공개로 투자자 신뢰 강화.'
        ],
        why: '11개월 연속 실 공장 가동은 데모 단계와 상업 단계를 구분하는 결정적 증거입니다. 제조업 자동화 시장 진입이 예상보다 빠르게 현실화되고 있습니다.',
        notes: [
          { term: 'Figure 02', def: 'Figure AI의 2세대 휴머노이드 로봇. 산업 현장 작업에 최적화된 상업용 버전.' }
        ]
      },
      { weight: 'low', time: '07:00', source: 'humanoid.press',
        headline: 'Humanoid-Schaeffler, 휴머노이드 로봇 1,000~2,000대 바인딩 계약 — 2032년까지 글로벌 배포',
        url: 'https://memeburn.com/physical-ai-is-sending-humanoid-robots-to-real-factory-floors-in-2026/',
        bullets: [
          '영국 AI 로보틱스사 Humanoid, 자동차 부품 대기업 Schaeffler와 2032년까지 글로벌 제조 거점 1,000~2,000대 배포 바인딩 계약 체결.',
          '바퀴형 휴머노이드 플랫폼 활용. 자동차·항공·물류 분야 대규모 계약 잇따르며 휴머노이드 공급망 생태계 형성 가속.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '11:00', source: 'NVIDIA Newsroom',
        headline: 'NVIDIA, 새 피지컬 AI 모델 공개 — 글로벌 파트너사 차세대 로봇 동시 발표',
        url: 'https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots',
        bullets: [
          'NVIDIA, 로봇 학습·추론을 위한 새 피지컬 AI 모델 공개. 글로벌 파트너사들의 차세대 로봇 플랫폼과 동시 발표로 생태계 확장.',
          'NVIDIA Omniverse·Isaac 플랫폼이 휴머노이드 훈련 인프라의 사실상 표준으로 자리잡는 흐름 가속.'
        ],
        why: '',
        notes: [{ term: 'NVIDIA Isaac', def: 'NVIDIA의 로봇 AI 개발 플랫폼. 시뮬레이션 기반 로봇 학습과 실제 하드웨어 배포를 연결.' }]
      },
      { weight: 'low', time: '12:00', source: 'KraneShares / Bessemer VP',
        headline: '피지컬 AI 2026 현황: GPT-2.5 모멘트 — 실 배포 가속, 99.9% 신뢰성 갭 여전',
        url: 'https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/',
        bullets: [
          'Bessemer Venture Partners: 2026년 로봇 업계는 GPT-2.5 모멘트. 역량은 실재하고 스케일 법칙이 나타나고 있으나, 생산 현장 요구 99.9% 신뢰성 갭은 여전히 넓음.',
          '항공·자동차·물류 등 3개 산업에서 바인딩 계약과 실 배포가 동시 확인된 5월 2026년이 전환점으로 평가.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '06:00', source: 'Agility Robotics',
        headline: 'Agility Digit 7+대, Toyota Canada RAV4 생산라인 자재 핸들링 현장 가동 중',
        url: 'https://www.grabarobot.com/blog/humanoid-robot-workforce-deployment-2026/',
        bullets: [
          'Agility Robotics Digit 휴머노이드 7대 이상이 Toyota Canada RAV4 생산라인에서 자재 핸들링 실 가동 중.',
          '제조 대기업과 휴머노이드 로봇사의 협력 모델이 단일 회사를 넘어 산업 전반으로 확산.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '13:00', source: 'Tesla',
        headline: 'Tesla Optimus Gen 3, 2026년 여름 초기 생산 예고 — 소매가 $20,000 미만 목표',
        url: 'https://botinfo.ai/articles/tesla-optimus',
        bullets: [
          'Tesla, Optimus Gen 3(손 재설계·AI5 추론 칩·Digital Optimus 소프트웨어 포함) 2026년 여름 초기 생산 계획. 볼륨 생산시 $20,000 미만 목표.',
          '2027년 Tesla 외부 판매 시작 예고. 소비자 가격대 휴머노이드 로봇 시대 개막 가시화.'
        ],
        why: '',
        notes: []
      }
    ]
  },
  quantum: {
    label: '양자 뉴스',
    summary: '미 상무부가 CHIPS법에 따라 양자 기업 9곳에 $20.1억을 지원하기로 확정했고, IBM은 2029년 대형 양자컴퓨터 구축을 목표로 $100억 투자를 선언했습니다. Google은 양자컴퓨터가 2029년까지 일부 암호화 시스템을 해킹할 수 있다고 경고하며 양자 보안 대응 시계가 빨라지고 있습니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'NIST / US Dept of Commerce',
        headline: '미 상무부, CHIPS법으로 양자 기업 9곳에 $20.1억 지원 확정 — IBM·D-Wave·Rigetti 포함',
        url: 'https://www.nist.gov/news-events/news/2026/05/department-commerce-announces-letters-intent-9-companies-2-billion',
        bullets: [
          '미 상무부·NIST, CHIPS 및 과학법 하에 양자 하드웨어·파운드리 9개사에 총 $20.13억 연방 인센티브 지원 의향서(LOI) 체결.',
          'IBM 신설 자회사 Anderson이 절반 수령. D-Wave·Rigetti·Infleqtion 각 $1억 개별 계약. GlobalFoundries·IBM은 멀티모달리티 양자 파운드리 구축.',
          '트럼프 행정부가 투자 대가로 지분 취득. 반도체·철강에 이어 양자컴도 전략 자산화.'
        ],
        why: '연방 정부의 $20억 규모 양자 직접 투자는 양자컴퓨팅이 국가 전략 산업으로 격상됐음을 의미합니다. 소규모 양자 기업들의 자금난 해소와 미국 양자 생태계 강화에 직결됩니다.',
        notes: [
          { term: 'CHIPS 및 과학법', def: '미국의 반도체·첨단기술 자국화를 위한 2022년 입법. 반도체 외 양자·AI 분야로 지원 범위 확대 중.' },
          { term: '양자 파운드리', def: '양자 프로세서 칩을 위탁 생산하는 전문 제조 시설. 극저온·특수 재료가 필요.' }
        ]
      },
      { weight: 'high', time: '10:00', source: 'BNN Bloomberg',
        headline: 'IBM, 양자컴퓨팅에 $100억 투자 선언 — 2029년 대형 양자컴 구축 목표',
        url: 'https://www.bnnbloomberg.ca/business/technology/2026/05/28/ibm-to-invest-us10-billion-for-large-scale-quantum-computer-by-2029/',
        bullets: [
          'IBM, 향후 5년간 양자컴퓨팅에 $100억 이상 투자 발표. 2029년 대규모 상업용 양자컴퓨터 구축 목표.',
          '미 정부 LOI($10억 수령 예정)와 시너지. IBM 양자 자회사 Anderson이 미국 첫 전용 양자 칩 제조시설 설립.',
          '양자 발표 후 IBM 주가 반등. 5년 전략 중 조기 수익화 가능한 오류 억제·하이브리드 컴퓨팅에 집중.'
        ],
        why: '$100억 투자는 IBM이 양자를 차세대 성장 엔진으로 전면에 내세운 전략 전환 선언입니다. 양자 하드웨어 수요 공급망 전체에 투자 자극이 됩니다.',
        notes: [
          { term: '오류 억제(Error Suppression)', def: '양자 계산 시 발생하는 노이즈를 소프트웨어로 줄이는 기술. 완전한 오류 수정 이전의 현실적 접근법.' }
        ]
      },
      { weight: 'high', time: '08:00', source: 'Q-CTRL / IBM Research',
        headline: 'Q-CTRL·IBM, 120 큐비트로 Fermi-Hubbard 모델 3,000배 가속 시뮬레이션',
        url: 'https://www.programming-helper.com/tech/quantum-computing-commercial-breakthrough-2026-ibm-google-achievements',
        bullets: [
          'Q-CTRL과 IBM, 런타임 오류 억제 기법으로 IBM Heron 프로세서 120 큐비트에서 Fermi-Hubbard 모델 시뮬레이션 3,000배 가속.',
          '재료과학·배터리·신약 설계 분야의 실용적 양자 우위 가능성 확인. 클리블랜드 클리닉·RIKEN·IBM, 12,635원자 단백질 복합체 양자 시뮬레이션 성공도 병행.',
          '소프트웨어-하드웨어 공동 최적화가 양자 컴퓨팅의 단기 실용화 핵심 경로임을 입증.'
        ],
        why: '3,000배 가속은 특정 재료 시뮬레이션에서 양자컴퓨터가 슈퍼컴퓨터를 압도할 수 있음을 의미합니다. 배터리·반도체 재료 개발 분야의 양자 상용화 시계를 앞당깁니다.',
        notes: [
          { term: 'Fermi-Hubbard 모델', def: '전자 상호작용을 기술하는 양자역학 모델. 초전도체·자성체 연구의 기반. 고전 컴퓨터로는 계산 불가능한 한계가 있음.' }
        ]
      },
      { weight: 'low', time: '07:00', source: 'CNN',
        headline: 'Google 경고: 양자컴퓨터, 2029년까지 일부 암호화 시스템 해킹 가능',
        url: 'https://www.cnn.com/2026/05/17/science/quantum-computing-cybersecurity-q-day',
        bullets: [
          'Google, 양자컴퓨터가 현재 암호화 표준 일부를 2029년까지 해킹할 수 있다고 경고. 기존 사이버보안 전문가들의 예측보다 훨씬 앞당겨진 타임라인.',
          '기업·정부 시스템의 양자 내성 암호화(PQC) 전환 필요성이 긴박해짐.'
        ],
        why: '',
        notes: [{ term: '양자 내성 암호화(PQC)', def: '양자컴퓨터도 해독하기 어려운 새로운 암호화 알고리즘. NIST가 2024년 표준 확정. 전환 비용·시간이 과제.' }]
      },
      { weight: 'low', time: '11:00', source: 'IEEE Spectrum',
        headline: '중성 원자 양자컴퓨팅, 2026년 큰 도약 — 실용적 양자 우위의 최유력 경로',
        url: 'https://spectrum.ieee.org/neutral-atom-quantum-computing',
        bullets: [
          '중성 원자(Neutral Atom) 기반 양자컴퓨팅이 2026년 가장 주목받는 하드웨어 플랫폼으로 부상. 초전도체 대비 확장성과 오류율 개선 속도에서 앞서는 평가.',
          'QuEra·Pasqal·Atom Computing 등 스타트업 중심으로 100큐비트 이상 시스템 잇따라 공개.'
        ],
        why: '',
        notes: [{ term: '중성 원자 큐비트', def: '레이저로 포획된 개별 원자를 큐비트로 활용. 초전도체 대비 상온 운영 가능, 큐비트 연결성 유연.' }]
      },
      { weight: 'low', time: '12:00', source: 'ScienceDaily',
        headline: '일본 연구팀, 양자 W 상태 즉시 감지법 개발 — 양자통신 마일스톤',
        url: 'https://www.sciencedaily.com/news/matter_energy/quantum_computing/',
        bullets: [
          '일본 연구팀, 양자 얽힘의 핵심 형태인 W 상태를 즉시 감지하는 새로운 방법 개발. 양자통신·암호 분야 핵심 기술.',
          'W 상태는 여러 큐비트 간 얽힘 유지력이 높아 양자 네트워크 구현의 핵심. 이번 감지법으로 양자통신 효율 대폭 향상 기대.'
        ],
        why: '',
        notes: [{ term: 'W 상태', def: '여러 큐비트가 얽힌 특수한 양자 상태. 일부 큐비트를 잃어도 얽힘이 유지되어 양자통신에 유리.' }]
      },
      { weight: 'low', time: '13:00', source: 'Motley Fool',
        headline: 'IonQ·Rigetti, 정부 지원 효과로 평가 재산정 — 시장이 과소평가 중',
        url: 'https://www.fool.com/investing/2026/05/24/2-quantum-computing-stocks-that-are-further-along/',
        bullets: [
          'Motley Fool 분석: IonQ와 RGTI(Rigetti)가 CHIPS법 정부 지원 수혜로 시장 인정보다 빠른 상용화 진척 중.',
          '양자 H/W 투자자들이 IBM·Google 외 퓨어플레이 양자 주식에 주목해야 할 시점이라는 평가.'
        ],
        why: '',
        notes: [{ term: '퓨어플레이(Pure Play)', def: '단일 기술·산업에만 집중하는 기업. IBM·Google처럼 양자가 사업 일부인 기업과 구별되는 양자 전문 상장사.' }]
      },
      { weight: 'low', time: '14:00', source: 'Yahoo Finance',
        headline: '미 정부, 반도체에 이어 양자컴도 전략 자산화 — 지분 취득 방식 투자로 기술 주권 강화',
        url: 'https://finance.yahoo.com/economy/policy/article/us-move-into-quantum-computing-adds-to-a-portfolio-that-spans-semiconductors-steel-nuclear-and-rare-earths-173919828.html',
        bullets: [
          '미 행정부가 양자컴퓨팅을 반도체·철강·원자력·희토류에 이어 국가 전략 기술 포트폴리오에 편입. 지분 취득 방식 지원으로 기술 주권 강화.',
          '중국의 양자기술 투자에 대응하는 미국의 양자 군비경쟁 전략적 기조 명확화.'
        ],
        why: '',
        notes: []
      }
    ]
  },
  econ: {
    label: '경제 뉴스',
    summary: '한국은행이 기준금리를 2.5%로 8연속 동결했으나 신현송 총재의 매파 신호와 금통위 내 2명의 인상 소수의견이 등장하며 금리 방향 전환 가능성이 높아졌습니다. 미 국채 10년물 금리는 4.52%로 재돌파하며 이란 긴장 재고조와 고인플레이션이 맞물려 글로벌 채권시장 불안이 계속되고 있습니다.',
    items: [
      { weight: 'high', time: '10:00', source: 'BOK / Korea Times',
        headline: '한국은행, 기준금리 2.5% 8연속 동결 — 신현송 총재 "적기 인상 필요" 매파 시사',
        url: 'https://www.koreatimes.co.kr/economy/20260528/bok-holds-base-rate-at-25-amid-middle-east-uncertainties',
        bullets: [
          '한국은행 금통위, 기준금리 연 2.5%로 8회 연속 동결. 신현송 신임 총재 첫 의장 회의. 중동 불확실성·원화 약세를 주요 변수로 언급.',
          '2명의 금통위원이 2.75% 인상 소수의견 제시. 하반기 금리 인상 가능성 유의미하게 상승.',
          '한국은행, 2026년 GDP 성장률 전망 2.6%로 상향(기존 2.0%). 반도체 수출 호조 견인. 인플레이션 전망도 2.7%로 상향.'
        ],
        why: '8연속 동결 속 매파 분화와 총재의 적기 인상 발언은 금리 방향 전환의 전조 신호입니다. 한국 채권·부동산 시장의 방향성에 직접 영향을 미칩니다.',
        notes: [
          { term: '금통위(금융통화위원회)', def: '한국은행의 통화정책 결정 기구. 총 7명(총재+6명)으로 구성, 연 8회 기준금리 결정.' },
          { term: '소수의견', def: '금통위 표결에서 다수 결정과 다른 견해를 공식 기록하는 제도. 향후 정책 방향의 선행 지표로 해석.' }
        ]
      },
      { weight: 'high', time: '09:00', source: 'CNBC',
        headline: '미 국채 10년물 금리 4.52% 재돌파 — 미-이란 재긴장·유가 상승 복합 압박',
        url: 'https://www.cnbc.com/2026/05/27/treasury-yields-investor-optimism-ceasefire-prospects-rise.html',
        bullets: [
          '미국 10년물 국채 금리, 4.5%를 재돌파해 4.52%. 이란 협상 기대 후 미국의 이란 군사시설 재공격 소식에 채권 매도 재개.',
          'WTI 유가 $89.53(+1.3%)로 $90 목전. 호르무즈 봉쇄 장기화 우려가 에너지 비용 상승과 인플레 재가속 가능성으로 연결.',
          'G7 재무장관 회의(5월 18일), 글로벌 채권 매도세 공동 대응 거부. 각국이 자국 상황 책임 강조.'
        ],
        why: '4.5% 이상 금리 유지는 미국 주택·기업 투자에 직접 브레이크를 겁니다. 중동 긴장이 금융시장 불안의 근원으로 연결되는 구조적 위험 요인입니다.',
        notes: [
          { term: '호르무즈 해협', def: '이란과 오만 사이의 좁은 해협. 전 세계 원유 해상 수송의 약 20%가 통과하는 전략적 요충지.' }
        ]
      },
      { weight: 'high', time: '08:00', source: 'Federal Reserve / RSM',
        headline: '미국 PCE 인플레 3.5%(3월 YoY) — Warsh 연준 의장 금리 동결 기조 유지',
        url: 'https://rsmus.com/insights/economics/economic-outlook-for-2026.html',
        bullets: [
          '3월 헤드라인 PCE 인플레이션 전년비 3.5%. 에너지 가격 급등이 주요 기여. 임금은 여전히 인플레를 상회.',
          '연준 Kevin Warsh 의장, 금리 인하 재개보다 현 수준 유지 기조. 2025년 12월 이후 추가 인하 없음.',
          '1Q 2026 민간 고용 순증은 월평균 2025년 대비 2.5배 이상. 실업률 4.3% 안정적.'
        ],
        why: '3.5% PCE는 연준 목표치(2%)를 크게 상회하며 금리 인하 재개를 가로막습니다. 이란발 에너지 충격이 지속될 경우 스태그플레이션 시나리오 현실화 리스크가 있습니다.',
        notes: [
          { term: 'PCE(개인소비지출 물가지수)', def: '연준이 통화정책 목표로 사용하는 인플레이션 지표. CPI보다 포괄적이며 소비자 행동 변화를 반영.' },
          { term: 'Kevin Warsh', def: '트럼프 행정부가 임명한 제16대 연준 의장. 2025년 4분기 파월 후임. 물가 안정 우선 성향.' }
        ]
      },
      { weight: 'low', time: '07:00', source: 'Bloomberg',
        headline: '한은, 2026년 GDP 2.6%·인플레 2.7% 동반 상향 — 반도체 수출 호조',
        url: 'https://www.bloomberg.com/news/articles/2026-05-28/bok-holds-rates-steady-amid-uncertain-outlook-for-policy',
        bullets: [
          '한국은행, 2026년 실질GDP 2.6%(기존 2.0%)·소비자물가 2.7%(기존 2.2%) 동시 상향. 반도체 AI 수요 폭발이 성장 상방 요인.',
          'GDP 상향에도 인플레 상향이 동반돼 금리 인하 재개는 사실상 불가능한 환경.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '11:00', source: 'CNBC / Korea Herald',
        headline: '원화 약세 지속 — 한은 총재 "환율 쏠림 단호 대처" 구두 개입',
        url: 'https://www.cnbc.com/amp/2026/05/28/south-korea-holds-rates-reveals-hawkish-split-within-board.html',
        bullets: [
          '달러·원 환율 1,495원 수준 유지. 신현송 한은 총재, 환율 쏠림에 단호 대처 구두 개입. 외환당국의 직접 개입 가능성 시사.',
          '원화 최근 12개월 9% 약세. 수출 경쟁력엔 긍정적이나 수입 물가 상승 통해 인플레 압박 가중.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '12:00', source: 'Trading Economics',
        headline: 'WTI 유가 $90 목전 — 중동 긴장 재고조에 에너지 시장 변동성 확대',
        url: 'https://tradingeconomics.com/commodity/crude-oil',
        bullets: [
          'WTI 유가 $89.53로 $90 재진입 목전. 호르무즈 해협 긴장 재고조와 미군의 이란 군사시설 재공격 소식에 급등.',
          '일본 GDP 0.21%p 하락 리스크 등 에너지 수입 의존 국가들의 경제 충격 추정치 속속 발표.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '13:00', source: 'Fox Business',
        headline: '미국 1Q 2026 민간 고용 전년 대비 2.5배 급증 — 노동시장 서프라이즈',
        url: 'https://www.foxbusiness.com/economy/us-economy-expected-grow-faster-2026-despite-stagnant-job-market-goldman-sachs',
        bullets: [
          '1Q 2026 미국 민간 고용 순증, 월평균 2025년의 2.5배 이상. 실업률 4.3%로 안정. 채용 수 710만 건(2월 기준)으로 반등.',
          '노동시장 호조가 연준 금리 인하 재개 명분을 더욱 약화시키는 역설적 상황.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '14:00', source: 'KITA / KIEP',
        headline: '2026년 하반기 글로벌 경제 3대 위험: 중동 에너지·미 통상정책·재정부담',
        url: 'https://www.kita.net/board/totalTradeNews/totalTradeNewsDetail.do?no=101596&siteId=6',
        bullets: [
          '대외경제정책연구원(KIEP), 2026년 세계경제 성장의 하방 압력으로 ①중동 에너지 충격 장기화 ②미국 통상정책 불확실성 ③주요국 국채 시장 불안을 지목.',
          '미중 무역 협상 관세 부분 완화 효과는 에너지 충격으로 상쇄 우려.'
        ],
        why: '',
        notes: []
      }
    ]
  },
  columns: {
    label: '컬럼 피드',
    summary: '오건영 신한은행 단장이 반도체 주도의 끝없는 상승장에 경고 신호를 보내며, 속도와 쏠림의 위험성과 개인투자자 과열을 우려했습니다.',
    items: [
      {
        name: '오건영',
        title: '신한은행 · 디지털 크리에이터',
        avatar: 'OG',
        color: '#D97757',
        time: '어제 23:00',
        likes: 862,
        comments: 46,
        post: '정말 가공할 강세장이네요. 모든 매크로의 악재들이 우스워질 정도로 반도체를 중심으로 주식 시장이 끝없는 상승장을 이어가고 있습니다. 식당에서 식사를 할 때, 그리고 카페에서 차를 마실 때, 그리고 지인들을 만날 때 처음 시작하는 얘기들은 거의 대부분 주식 투자에 대한 이야기입니다. 하이닉스를 갖고 있는지가 그 모임 대화의 주도권을 가져올 정도니까요. 개인적으로 국내 주식이 재평가를 받는 것은 너무나도 좋은 일이지만 그 속도가 너무 빠르다는 점, 그리고 특정 섹터로의 쏠림이 너무 강하다는 점은 솔직히 우려 요인이라고 봅니다. 주가가 얼마인지를 보면서 버블인지를 판단하는 것은 매우 위험한 생각이지만, 이 상승장도 언젠가는 끝이 있다는 점... 너무 많은 개인 투자자들이 들어가고 있다는 점을 보면서 이럴 때일수록 쏠림에 주의해야 합니다.',
        summary: '반도체 강세장 속도·쏠림 경고 — 개인투자자 과열 우려'
      }
    ]
  },
  invest: {
    title: '반도체 불패와 중동 리스크',
    subtitle: 'Claude가 작성한 오늘의 메모 · 5월 29일 07:00 · 4분 읽기',
    sections: [
      {
        h: '한 줄 요약',
        body: '코스피 반도체 주도 강세장이 이어지는 가운데 미 국채 10년물이 4.52%를 재돌파하고 WTI 유가가 $90에 근접하며 중동 에너지 리스크가 시장의 핵심 변수로 부상했습니다.'
      },
      {
        h: '오늘의 변수',
        body: '한국은행이 8연속 기준금리를 2.5%로 동결했으나 2인 매파 소수의견과 신현송 총재의 적기 인상 발언이 하반기 인상 기대를 높이고 있습니다. 미군의 이란 군사시설 재공격 소식으로 호르무즈 봉쇄 우려가 재점화되며 유가·금리 동반 상승 압박이 커졌습니다. AI 투자 대순환은 지속 중으로, Anthropic ARR $440억·Meta $1,150억 AI 투자·OpenAI DeployCo 출범이 AI 인프라 수요를 뒷받침합니다.'
      },
      {
        h: '포지셔닝',
        body: '단기(1~3개월): 반도체·AI 수혜주(SK하이닉스·NVDA) 비중 유지. 그러나 오건영 단장이 경고한 속도·쏠림 리스크를 감안해 신규 매수보다 보유 유지에 집중하고, 유가 상승 헤지 차원에서 에너지 및 금(GLD) 비중 일부 확대 권고. 중기(6~12개월): 양자컴퓨팅이 미 정부 $20억 직접 지원으로 상용화 가속 — IonQ(IONQ) 소량 적립식 매수. BOK 금리 인상 전환 가시화 시 채권(TLT) 추가 확대 검토.'
      },
      {
        h: '리스크',
        body: '이란 호르무즈 봉쇄 장기화 → 에너지 비용 급등·인플레 재가속 → 연준 추가 긴축 논의 재개. 코스피 반도체 쏠림 과속 → 외국인 차익 실현 매물 출회 위험. 미 국채 금리 4.5% 이상 고착화 → 성장주 밸류에이션 압박.'
      }
    ],
    watchlist: [
      { sym: '000660', name: 'SK하이닉스', val: '₩248,000', pct: '+1.23%', up: true,  note: 'AI 반도체 강세장 직접 수혜. 오건영 경고처럼 속도 조심하며 보유 유지' },
      { sym: '005930', name: '삼성전자',   val: '₩101,000', pct: '+0.50%', up: true,  note: 'AI HBM·파운드리 수혜. KOSPI 강세장 핵심 종목' },
      { sym: 'NVDA',   name: 'NVIDIA',     val: '$168.50',  pct: '+1.15%', up: true,  note: 'AI·피지컬AI·양자AI 인프라 전방위 수혜. Meta·Anthropic 컴퓨팅 파트너' },
      { sym: 'IONQ',   name: 'IonQ',       val: '$27.80',   pct: '+3.42%', up: true,  note: '미 정부 CHIPS법 $1억 지원 확정. 양자컴 퓨어플레이 직접 수혜' },
      { sym: 'TLT',    name: 'iShares 20Y ETF',     val: '$86.20',  pct: '-0.58%', up: false, note: '10Y UST 4.52% 재돌파로 채권가격 하락. 금리 방향 전환 시 반등 대기' },
      { sym: 'GLD',    name: 'SPDR Gold ETF',        val: '$281.40', pct: '+0.62%', up: true,  note: '중동 지정학 위험·인플레 헤지. 이란 긴장 재고조로 안전자산 수요 상승' },
      { sym: 'VYM',    name: 'Vanguard High Div.',   val: '$149.10', pct: '+0.21%', up: true,  note: '고금리 환경 배당주 상대적 매력. 방어적 포지션 역할' },
      { sym: 'BTC',    name: 'Bitcoin',    val: '$73,255',  pct: '-2.57%', up: false, note: '위험자산 조정 국면. 중동 리스크 확대 시 단기 약세 경계' }
    ],
    portfolio: [
      { asset: '국내주식', pct: 25, color: '#3DDC97',
        tickers: [{ sym: '000660', name: 'SK하이닉스' }, { sym: '005930', name: '삼성전자' }],
        note: 'AI 반도체 강세장 지속. 오건영 경고처럼 속도 조심하며 보유 유지' },
      { asset: '미국주식', pct: 28, color: '#5B9BD5',
        tickers: [{ sym: 'NVDA', name: 'NVIDIA' }, { sym: 'IONQ', name: 'IonQ' }],
        note: 'NVDA: AI·피지컬AI·양자 인프라 수혜. IONQ: 미 정부 양자 직접 지원 수혜' },
      { asset: '채권', pct: 15, color: '#9B8EC4',
        tickers: [{ sym: 'TLT', name: 'iShares 20Y ETF' }],
        note: '4.52% 고금리 구간 적립. BOK·연준 금리 방향 전환 시 반등 기대' },
      { asset: '금', pct: 17, color: '#F5C518',
        tickers: [{ sym: 'GLD', name: 'SPDR Gold ETF' }],
        note: '중동 지정학 리스크·고인플레 헤지. 이란 긴장 재고조로 비중 소폭 확대' },
      { asset: '배당주', pct: 10, color: '#E08A6E',
        tickers: [{ sym: 'VYM', name: 'Vanguard High Div.' }],
        note: '방어적 포지션. 고금리 환경에서 안정적 현금흐름 확보' },
      { asset: '비트코인', pct: 5, color: '#F7931A',
        tickers: [{ sym: 'BTC', name: 'Bitcoin' }],
        note: '중동 리스크 확대 국면 비중 축소. 최소 비중 유지' },
    ],
  },
});


const TODAY = {
  date: { iso: '2026-05-30', label: '2026년 5월 30일 토요일', shortLabel: '5월 30일 (토)', isToday: true },
  marketStrip: [
    { sym: 'KOSPI',   val: '8,476',   pct: '+3.03%', up: true  },
    { sym: 'S&P 500', val: '7,563',   pct: '+0.58%', up: true  },
    { sym: 'NASDAQ',  val: '26,917',  pct: '+0.91%', up: true  },
    { sym: 'BTC',     val: '$74,037', pct: '-1.01%', up: false },
    { sym: '$/₩',    val: '1,496',   pct: '-0.47%', up: false },
    { sym: '10Y UST', val: '4.45%',  pct: '-7bp',   up: false },
    { sym: 'WTI',     val: '$87.20',  pct: '-2.37%', up: false },
  ],
  ai: {
    label: 'AI 뉴스',
    summary: 'Anthropic이 $65억 편딩으로 밸류에이션 $9,650억에 도달해 OpenAI를 제치고 최고 AI 스타트업 자리에 올랐으며, Claude Opus 4.8 출시로 GPT-5.5 벤치마크를 앞셀다는 평가를 받았습니다. ARR는 $470억로 급등하며 Claude Code가 성장을 견인하고, Meta는 Superintelligence Labs 첫 플래그십 모델 Muse Spark를 공개하며 AI 경쟁이 전방위 확전 양상입니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'Washington Post / Anthropic',
        headline: 'Anthropic, $65억 편딩 완료 — 밸류 $9,650억으로 OpenAI 제치고 AI 스타트업  1위',
        url: 'https://www.washingtonpost.com/business/2026/05/28/anthropic-ai-claude-openai-valuation/',
        bullets: [
          'Anthropic, Series H에서 $65억 조달. 밸류에이션 $9,650억으로 OpenAI($8,520억) 스을 낙차하며 AI 스타트업 최고치 달성.',
          'Altimeter Capital\c00b7Dragoneer\c00b7Greenoaks\c00b7Sequoia Capital 주도로 투자자 확실화. 연간 반복매출(ARR) $470억 돌파, Claude Code가 성장 견인.',
          'Claude는 AWS\c00b7Azure\c00b7Google Cloud 3대 클라우드 전체에서 제공되는 최초의 프론티어 모델이 됨.'
        ],
        why: 'OpenAI를 제치고 AI 시장 패권을 잡았다는 지표로, AI 인프라 투자에서 Anthropic 파트너인 Amazon\c00b7Google\c00b7Microsoft의 주가에 직접적 영향을 미츰는 중요 신호입니다.',
        notes: [
          { term: 'Series H', def: '시리즈 H란 스타트업의 8번째 투자 라운드. 이 단계에서는 진입하는 기업이 이미 대규모이며 클래스로 성장하고 있음을 의미합니다.' },
          { term: 'ARR(연간 반복매출)', def: '구독\c00b7API 기반 연간 매출 예측치. SaaS\c00b7AI 기업 성장성의 핵심 지표.' }
        ]
      },
      { weight: 'high', time: '08:00', source: 'TheStreet / Anthropic',
        headline: 'Claude Opus 4.8 출시 — GPT-5.5 벤치마크 능가, 에이전틱 코딩 1위',
        url: 'https://www.thestreet.com/technology/anthropic-drops-new-claude-model-as-openai-ipo-race-heats-up',
        bullets: [
          'Claude Opus 4.8, 에이전틱 코딩\c00b7금융 분석\c00b7컴퓨터 사용 벤치마크에서 OpenAI GPT-5.5\c00b7Google Gemini 3.1 Pro 능가.',
          '새 모델은 뺈치마크에서 스코어 개선와 함께 에러 세이프티 강화 — 불확실한 사항을 스스로 플래그하는 정직성 향상.',
          'AWS\c00b7Azure\c00b7Google Cloud에서 동시 제공, 기업 코딩 어시스턴트 Claude Code와 통합.'
        ],
        why: 'Claude가 코딩\c00b7금융 분석 전반에서 선두를 질주하면서 기업용 AI 시장에서 주도권 강화를 확인해주는 신호입니다.',
        notes: [
          { term: '에이전틱 AI', def: 'AI가 사람의 지시 없이 자율적으로 일연의 작업을 수행하는 능력. 코딩\c00b7이메일\c00b7연구 등 복잡한 작업을 자동화.' }
        ]
      },
      { weight: 'high', time: '07:00', source: 'CNBC / Anthropic',
        headline: 'Anthropic ARR $470억 — 1년에 5배 급성장, Claude Code의 마법',
        url: 'https://www.anthropic.com/news/google-broadcom-partnership-compute',
        bullets: [
          'Anthropic 연간 반복매출(ARR) $470억으로 급등, 1년 전 $10억 대비 5배 성장. Claude Code AI 코딩 도구가 성장 주도.',
          '$100만 이상 지출 기업 고객 2개월만에 1,000개 초과.',
          'Google\c00b7Broadcom과 컴퓨트 파트너십 확대 발표, AI 인프라 강화 가속.'
        ],
        why: 'ARR $470억은 AI 모델 기업 사상 최고 수준으로, 코딩 자동화 인프라에 대한 시장의 수요가 얼마나 큰지를 보여줍니다.',
        notes: [
          { term: 'Claude Code', def: 'Anthropic의 AI 코딩 어시스턴트. 터미널에서 코드 작성\c00b7디버깅\c00b7테스트를 자동으로 수행해주는 도구.' }
        ]
      },
      { weight: 'low', time: '10:30', source: 'OpenAI',
        headline: 'OpenAI, Rosalind Biodefense 출시 — GPT기반 바이오방어 플랫폼',
        url: 'https://openai.com/index/',
        bullets: [
          'OpenAI, 바이오방어\c00b7공중보건\c00b7전얼대비에 특화된 GPT-Rosalind를 검증된 개발자\c00b7미 정부 파트너에게 확대.',
          '의료 AI 시장에 본격 진입 신호. 정부\c00b7보안 분야로 AI 예산 확대 기대.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '11:00', source: 'OpenAI',
        headline: 'OpenAI, Frontier Governance Framework 발표 — AI 개발 안전 원칙 공식화',
        url: 'https://openai.com/news/',
        bullets: [
          'OpenAI, 프론티어 AI 시스템 안전 개발\c00b7배포\c00b7평가 원칙 체계화한 성명 발표.',
          '내외부 안전 평가와 연구 화야를 개발 전에 수행하는 코도 포함하며, 업계 표준 제시.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '09:30', source: 'Meta',
        headline: 'Meta, Superintelligence Labs 첫 플래그십 LLM Muse Spark 공개',
        url: 'https://techdg.in/latest-ai-updates-may-2026-global-ai-news-trends/',
        bullets: [
          'Meta, Alexandr Wang CTO 주도 Superintelligence Labs 첣 플래그십 모델 Muse Spark 공개. 멀티모달\c00b7추론\c00b7헬스\c00b7에이전틱 분야 강점.',
          'Meta AI 2026년 설비투자 $1,150억~$1,350억 발표, 전년대비 약 2배.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '08:30', source: 'DeepMind',
        headline: 'DeepMind CEO Demis Hassabis, "AGI 2029년 실제 가능성" — 타임라인 3년 앞당겼',
        url: 'https://blog.mean.ceo/ai-advancements-news-may-2026/',
        bullets: [
          'Hassabis, AGI 타임라인을 "실제 가능성 2029년"(기존 5~10년)으로 수정. 에이전틱\c00b7움직임 수준에서 진전이 예상보다 빠르다는 평가.',
          'AI 시스템의 인간 수준 접근 3년 내 가능하다고 주장, AI 안전 연구 강화 매진.'
        ],
        why: '', notes: [{ term: 'AGI', def: '범용 인공지능. 인간과 같이 모든 지적 작업을 수행할 수 있는 AI 시스템을 의미.' }]
      },
      { weight: 'low', time: '12:00', source: 'National Catholic Reporter',
        headline: '교황 레오 14세, AI 회캙 "마니피카 휴리니타스" — "AI 무장해제 필요"',
        url: 'https://www.ncronline.org/vatican/vatican-news/pope-leo-calls-disarm-ai-major-document-warns-technologic-threats-humanity',
        bullets: [
          '교황 레오 14세, 첫 회캙에서 AI가 인류에 미칠 위협 경고. "AI 개발자는 특별한 윤리\c00b7영적 책임을 진다".',
          'AI 기술은 중립이 아니며 개발\c00b7자금 조달\c00b7규제안에 메시지가 담겼다고 주장.'
        ],
        why: '', notes: [{ term: '회캙(Encyclical)', def: '사회 문제에 대한 교황의 공식 서한. 주요 인의 수신자는 주교와 신자들.' }]
      },
    ],
  },
  physical: {
    label: '피지컴 AI 뉴스',
    summary: 'Tesla의 Optimus Gen 3가 Fremont 공장에서 양산을 시작하며 $200억 설비투자를 선언했고, Boston Dynamics Atlas 전량이 현대차\c00b7Google에 배정되며 휴머노이드 로봇의 바닥입니다. 하네다 공항 수하물\c00b7청소 로봇 테스트, 툴니코 1~2만대 배지 계약등 에이전틱 로봇이 실제 현장에 도달하고 있습니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'Tesla / Standard Bots',
        headline: 'Tesla Optimus Gen 3, Fremont 양산 시작 — $200억 설비투자로 2026년 5만 대 목표',
        url: 'https://standardbots.com/blog/tesla-robot',
        bullets: [
          'Tesla, Optimus Gen 3 Fremont 공장에서 양산 시작 확인. Model S/X 라인을 Optimus 제조라인으로 전환, $200억 설비투자.',
          '2026년 말까지 5만 대 양산 목표. 현재는 R&D 및 학습 단계로 테슬라 공장 내부에서 엔드얤엔드 런닝 중.',
          'Optimus는 AI5 친 카메라\c00b7싳싧싧 음성 인식\c00b7전릭 전원 기술 개선된 Gen 3 사양.'
        ],
        why: 'Tesla의 휴머노이드 양산이 실제 코스트 커트로 연결되면서 로봇 시장의 실현 가능성을 높이는 신호로 작용합니다.',
        notes: [{ term: 'Optimus Gen 3', def: 'Tesla 3세대 휴머노이드 로봇. AI5 칠 사용, 2단위 활동 능력 대폭 개선.' }]
      },
      { weight: 'high', time: '08:00', source: 'Boston Dynamics / The Register',
        headline: 'Boston Dynamics Atlas 전량 양산 시작 — 2026년 분 현대차\c00b7Google DeepMind에 전량 배정',
        url: 'https://www.theregister.com/2026/01/06/boston_dynamics_atlas_production/',
        bullets: [
          'Boston Dynamics 전력 로봇 Atlas, 양산 시작 확인. 2026년 생산 런 전량이 히육다이 RMAC 및 Google DeepMind에 전량 배정.',
          '2027년부터 추가 상업 고객 진입 예정. 매도가 아닌 현대차 내부 제조 어시스턴스가 첫 타깃.',
          '전기 구동 Atlas는 성인가런 이동력\c00b7다양한 잡기 모드 특화.'
        ],
        why: 'Atlas가 특정 기업에 배타적으로 응용되면서 휴머노이드 로봇의 산업 적용이 가속화되는 시점을 보여줍니다.',
        notes: [{ term: 'RMAC', def: 'Hyundai Robotics Metaplant Application Center. 히육다이 운영 로봇 평가\c00b7학습 센터.' }]
      },
      { weight: 'low', time: '10:00', source: 'GrabaRobot',
        headline: 'Figure AI BMW X3 파일럿 완료 — 3만 대+ 작업, 가동시간 1,250h+',
        url: 'https://www.grabarobot.com/blog/humanoid-robot-workforce-deployment-2026/',
        bullets: [
          'Figure 02 로봇이 BMW 스파르탄버그 공장에서 10개월간 BMW X3 3만 대+ 생산, 9만 개+ 실업 부품 이동.',
          '주 5일 10시간 교대, 1,250시간+ 운용. 99% 이상 배치 정확도 달성.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '11:00', source: 'CNBC',
        headline: 'JAL, 하네다 공항 휴머노이드 테스트 — 수하물\c00b7운송\c00b7기내 청소 로봇',
        url: 'https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/',
        bullets: [
          'Japan Airlines, 하네다 공항에서 휴머노이드 로봇 실용 테스트 시작. 수하물 할델링\c00b7운송\c00b7기내 청소 등 업무 적용.',
          '항공\c00b7도소매 등 서비스 업종으로 적용 확대 가능성 탐색.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '09:30', source: 'RobotToday',
        headline: 'Humanoid-Schaeffler 바인딩 계약 — 2032년까지 1,000~2,000대 배치',
        url: 'https://robottoday.com/article/',
        bullets: [
          '영국 AI 로봇기업 Humanoid와 도었차 제조사 Schaeffler이 바인딩 단계적 배수 계약 체결. 2032년까지 전추 공장에 휴머노이드 1,000~2,000대 배치 목표.',
          '자동차 산업에서 AI 로봇이 실제 계약 단계 돈여하면서 시장 성순도 상승.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '10:30', source: 'Memeburn',
        headline: 'Agility Digit, 토요타 캐나다 RAV4 자재 핸들링 — 7대+ 운용 중',
        url: 'https://memeburn.com/physical-ai-is-sending-humanoid-robots-to-real-factory-floors-in-2026/',
        bullets: [
          'Agility Robotics Digit, 토요타 캐나다 RAV4 생산라인 자재 핸들링에 7대+ 투입, 실제 산업 환경에서 로봇 성능 검증 진행 중.',
          '물류\c00b7세하게 제조업 확대로 적용 범위 확대 예정.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '11:30', source: 'KraneShares',
        headline: 'Unitree, 2026년 휴머노이드 1만~2만 대 목표 — 2025년 5,500대 입증',
        url: 'https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/',
        bullets: [
          'Unitree Robotics, 2025년 5,500대+ 출하 후 2026넴 1만~2만 대 목표 발표. 중국얰 AI 로봇 글로벌 그릹도 강화.',
          '단가 $3~5만 수준으로 서양 청돉 대비 사더스 목표 시장으로 인식ub.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '12:00', source: 'Seeking Alpha',
        headline: '글로벌 휴머로이드 단가 $9~10만 — 대기업만 접근, $3만 이하가 대중화 분기점',
        url: 'https://seekingalpha.com/article/4903621-humanoid-robotics-in-2026-race-from-pilot-to-platform',
        bullets: [
          '서양 제조 휴머노이드 단가 $9~10만로 대기업만 투자 가능. 대중화 위해서는 $3만 이하 필요.',
          '배터리\c00b7안정성\c00b7안전 기준\c00b7노동 어려람이 여전히 가장 큰 장벽.'
        ],
        why: '', notes: []
      },
    ],
  },
  quantum: {
    label: '양자 뉴스',
    summary: '미국 정부가 CHIPS법으로 $20.1억을 9개 양자 기업에 지원하며 양자 컴퓨팅 도약대를 본격화하고, Google은 Willow로 관련 엄청난 13,000배 속도를 달성했다고 발표했습니다. IBM은 $100억 이상 투자를 선언하며 2029년 문자 파괴 수준의 양자컴퓨터를 목표로 하고 있습니다.',
    items: [
      { weight: 'high', time: '10:00', source: 'CNN Business / US Dept. of Commerce',
        headline: '미 CHIPS법 $20.1억 — 9개 양자 기업에 투자, IBM $10억 수혁',
        url: 'https://www.cnn.com/2026/05/21/business/ibm-quantum-computing-firms-grants',
        bullets: [
          '미 상무부, CHIPS법으로 양자 하드웨어 기업 9곳에 $20.1억 지원 주용 의향서 체결. IBM $10억, GlobalFoundries $3.75억 수혁 예정.',
          'D-Wave Quantum, Rigetti Computing, Infleqtion 등에도 각 $1억. 양자 컴퓨후리 산업에 대한 미국 정부 취라나브스 증가.',
          'IBM은 새 양자 웨이퍼 파운드리 Anderon을 설립, 양자 계산 인프라 자국 내 생산 확대.'
        ],
        why: '미국 정부가 양자컴퓨팅을 대규모 지원하며 중국과의 기술 경쟁에서 양자 선도권 확보를 선언한 신호입니다.',
        notes: [
          { term: 'CHIPS법', def: '2022년 미국에서 제정된 반도체 초전력화 법. 금융 예산을 반도체\c00b7양자 투자에 할당.' },
          { term: '양자 웨이퍼 파운드리', def: '양자 컴퓨터의 핵심 부품인 큐비트를 참통에 언실리는 시설.' }
        ]
      },
      { weight: 'high', time: '08:30', source: 'Google / Programming Helper Tech',
        headline: 'Google Quantum Echoes 알고리즘 — Willow, 슈퍼컴퓨터 대비 13,000배 속도',
        url: 'https://www.programming-helper.com/tech/quantum-computing-commercial-breakthrough-2026-ibm-google-microsoft-achievements',
        bullets: [
          'Google, Quantum Echoes 알고리즘으로 Willow 도구에서 시간외 상관자 알고리즘을 실행한 결과 슈퍼컴퓨터 대비 13,000배 빠른 속도 늬성.',
          '연라어 다수 양자 우위성 확인 상황에서 시주되는 첨진로, 양자컴퓨팅의 실용적 우위 시대를 여는 새 보고서.',
          '클래실 컴퓨터와 양자의 능력 잆이과를 처음으로 교차 검증한 원리구식 보고서라 학계 주목.'
        ],
        why: 'AI 계산에 필요한 복잡한 문제를 양자컴퓨터가 실제로 고상진 실용적 성능을 보여주면서 발표행 AI 분야 응용 가능성이 커집니다.',
        notes: [
          { term: '양자 우위성', def: '양자컴퓨터가 실제적으로 유용한 문제에서 고전 컴퓨터를 능가하는 상태.' }
        ]
      },
      { weight: 'low', time: '09:00', source: 'IBM Quantum',
        headline: 'Q-CTRL + IBM, 120큐비트에서 3,000배 속도 가속 — 엤리허버드 모델 실용화',
        url: 'https://www.ibm.com/quantum/blog/cleveland-clinic-riken-chemistry',
        bullets: [
          'Q-CTRL과 IBM, 120큐비트에서 런타임 오류 억제로 Fermi-Hubbard 모델 시뮬레이션에서 고전 대비 3,000배 속도.',
          '양자 오류 교정 기술 진보에 따라 시뮤레이션 정확도 크게 개선.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '10:00', source: 'Quantinuum / Microsoft',
        headline: 'Quantinuum H2, 미 Level 2 Resilient 달성 — 논리큐비트 오류율 800배 저하',
        url: 'https://quantumcomputingreport.com/news/',
        bullets: [
          'Quantinuum H2 프로세서(56큐비트), Microsoft Level 2 Resilient 단계 돌파. 논리큐비트 오류율 물리 대비 800배 감소.',
          '큐비트 수 2^25(3,350만) 양자 주파수 달성, 업계 최고.'
        ],
        why: '', notes: [{ term: 'Resilient 단계', def: 'Microsoft의 양자 컴퓨팅 성숙 단계. Level 2는 논리큐비트 품질이 게산되는 수준에 도달한 상태.' }]
      },
      { weight: 'low', time: '11:00', source: 'Pravda USA / IBM',
        headline: 'IBM, 양자 기술 $100억+ 투자 선언 — 2029년 1억 게이트 양자컴퓨터',
        url: 'https://usa.news-pravda.com/world/2026/05/28/785337.html',
        bullets: [
          'IBM, 양자 기술 개발에 $100억+ 투자 발표. 2029년까지 1억 양자 연산 정확하게 수행 가능한 대형 양자컴퓨터 목표.',
          'Anderon 양자 웨이퍼 파운드리 설립 확정, 미제 안에서 양자 인프라 순환 증대.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '12:00', source: 'Oracle / Classiq',
        headline: 'Oracle + Classiq, AI 에이전트가 36큐비트 포트폴리오 최적화 양자 코드 자동 생성',
        url: 'https://quantumcomputingreport.com/news/',
        bullets: [
          'Oracle Cloud와 Classiq이 AI 에이전트를 이용해 36큐비트 포트폴리오 최적화 시뮬레이션 성공.',
          'AI가 복잡한 양자 코드를 추상 프롬프트로 자동 생성, 양자-고전 하이브리드 파이프라인 구현.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '13:00', source: 'CNN',
        headline: '양자컴퓨터, 사이버보안 위기 경고 — RSA 암호 등 기존 시스템 위협',
        url: 'https://www.cnn.com/2026/05/17/science/quantum-computing-cybersecurity-q-day',
        bullets: [
          '양자컴퓨터의 발전으로 RSA 등 기존 암호화 시스템이 하나하나 공격 가능 범위에 진입. "큐-데이" 도래 이전에 대비 필요.',
          'Lastwall, 양자 내성 사이버보안에 $1,600만 Series A+ 유치.'
        ],
        why: '', notes: [{ term: '큐-데이', def: '양자컴퓨터가 현재 암호 해독이 가능해지는 날. 전 세계 디지털 보안 시스템에 대한 대규모 위협.' }]
      },
      { weight: 'low', time: '14:00', source: 'Zacks',
        headline: '2026년 양자컴퓨팅지 가장 저평가된 기술 주식 진입 시점 검토',
        url: 'https://www.zacks.com/stock/news/2927854/quantum-computing-the-next-ai-boom',
        bullets: [
          '양자컴퓨팅이 2026년 AI뱐 새로운 투자 메가트렌드로 부상하는 시점에 대한 주식 투자 신호 분석.',
          'IonQ, Rigetti, D-Wave 등 양자 주식 투자 유몝점으로 주목.'
        ],
        why: '', notes: []
      },
    ],
  },
  econ: {
    label: '경제 뉴스',
    summary: '코스피지가 반도체 주도로 +3%를 긭엔고 8,476로 사상최고를 갱신했으며, 미이란 60일 휴전 연장 합의로 WTI가 -2%로 하락해 에너지 리스크가 일정부분 해소댌습니다. 미국 연준은 3.5~3.75% 금리를 유지하면서 인플레이션 3% 상회 선억 조요를 발표해 금리 방향성에 불확실성이 지속되고 있습니다.',
    items: [
      { weight: 'high', time: '10:00', source: '한국거래소 / CNBC',
        headline: '코스피 8,476 사상최고 — 반도체 주도 +3%, 하이닉스 바람으로 코리아할인 연장',
        url: 'https://www.cnbc.com/2026/05/29/asia-markets-today-live-updates-nikkei-225-hang-seng-index-kospi-nifty-50-csi-300.html',
        bullets: [
          '코스피, 5월 29일 +3.03% 급등해 8,476로 종가. 반도체\c00b7AI 에 대한 글로벌 기대 지속.',
          'SK하이닉스\c00b7삼성전자 주도. 코리아할인 해소 기대감이 외국인 수급을 더한다는 평가.',
          '주가 상승 속도가 너무 빨라 특정 섹터 취압 우려 업승 — 오건영 신한은행.'
        ],
        why: '코스피 사상최고는 한국 주식이 글로벌 자금 유입에 매력적인 미개체로 인식받는 시각을 브려주는 증거입니다.',
        notes: [{ term: '코리아할인', def: '한국 주식 시장이 평가를 받지 못하는 현상. PER등 지표가 선진국 대비 낙은 수준.' }]
      },
      { weight: 'high', time: '09:00', source: 'CNBC',
        headline: '미·이란 60일 휴전 연장 합의 — WTI -2%, 호르무즈 재개통 기대',
        url: 'https://www.cnbc.com/2026/05/29/asia-markets-today-live-updates-nikkei-225-hang-seng-index-kospi-nifty-50-csi-300.html',
        bullets: [
          '미국과 이란, 휴전 60일 연장 및 호르무즈 해협 무제한 항해 허용 시실상 합의. WTI -2% 하락.',
          'WTI $87.20로 6주 최저, 월간 -17% 감력. 에너지 인플레이션 압력 위크로 돌아셌서 연준 정송에 도움이 될 수 있다는 기대.',
          '단, 휴전이 혁정 종전으로 이어지지 않을 수 있어 지정학적 불확실성 지속.'
        ],
        why: '에너지 가격 하락은 코스피 상승과 수비대 제조업 실적에 직접 도움이 되며, 미 연준의 금리 방향 도움이 될 수 있습니다.',
        notes: [{ term: '호르무즈 해협', def: '이란과 아라비아 반도 사이를 잔는 전략적 코름제. 전 세계 원유 관련 20%가 이콳을 통해 운송.' }]
      },
      { weight: 'low', time: '11:00', source: 'CNBC / Fed',
        headline: '미 연준 Kevin Warsh로 신임 — 금리 3.5~3.75% 동결, 인플레이션 3% 상회',
        url: 'https://www.cnbc.com/2026/05/20/fed-officials-see-rate-hike-ahead-if-inflation-stays-elevated-minutes-show.html',
        bullets: [
          '제런싨 파우었 쳨 만료(5월 15일) 후 Kevin Warsh가 연준 의장으로 취임.',
          '이란 전쟁에 따른 에너지가격 급등으로 인플레이션 3% 상회. 금리인상 가능성에 대한 위원원 의걱 업.'
        ],
        why: '', notes: [{ term: 'Kevin Warsh', def: '신임 미연준 의장. 과거 연준이사진을 지낸 경제학자로 시장 친화적 인사로 평가.' }]
      },
      { weight: 'low', time: '10:30', source: 'Investing.com',
        headline: '달러\c00b7원 1,496원 — 이란 리스크 완화로 원화 소폭 강세',
        url: 'https://kr.investing.com/currencies/usd-krw',
        bullets: [
          '달러\c00b7원 1,496원 수준, 이란 휴전 뉴스로 원화 소폭 강세(-0.47%).',
          '1,500원대 중심 연락하는 고환율 국면 지속되는 한간 한국 실질 수입리스크 확인 필요.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '12:00', source: '한국은행',
        headline: '한국 소비자심리지수 106.1 (+6.9p) — 주식 강세 반영 낙관론 확산',
        url: 'https://www.bok.or.kr/',
        bullets: [
          '5월 한국 소비자심리지수 106.1로 전월 대비 6.9p 상승. 코스피 급등에 따른 자산효과 반영.',
          'CCSI 100 초과는 소비 낙관론 우세를 의미.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '13:00', source: 'Trading Economics',
        headline: '10년물 미국체 금리 4.45% — 3주 최저, 이란 휴전 후 안도 랄리',
        url: 'https://tradingeconomics.com/united-states/government-bond-yield',
        bullets: [
          '10년물 미국체 금리 4.45%로 하락(-7bp). 3주 최저로 월간 +7bp 수준.',
          '이란 휴전 확인으로 안전자산 선호 감소, 진연 안도 랄리. TLT 소폭 반등.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '11:30', source: 'KDI',
        headline: 'KDI, 2026 한국 GDP 2.5% 전망 — 반도체 수입 호조\c00b7내수 개선',
        url: 'https://www.kdi.re.kr/research/economy',
        bullets: [
          'KDI, 2026년 한국 경제성장률 2.5% 전망. 반도체 수입 호조와 내수 개선세 동시 진행.',
          '전년 대비 성장세 유지, 종의 수입 다변화 없으면 목표 달성 가능.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '14:00', source: 'US Bank / CNBC',
        headline: '미국 인플레이션 3% 상회 지속 — 이란 에너지 가격 급등 여파',
        url: 'https://www.usbank.com/investing/financial-perspectives/market-news/federal-reserve-interest-rate.html',
        bullets: [
          '이란 전쟁으로 에너지 가격 급등, 대부분의 인플레이션 지표가 3% 상회로 유지. 연준 2% 목표와 게리.',
          '인플레이션이 계속 높게 유지될 경우 구성원의 다수가 금리인상이 필요하다고 시사.'
        ],
        why: '', notes: []
      },
    ],
  },
  columns: {
    label: '콜럼 피드',
    summary: '오건영 신한은행이 코스피의 가파른 상승속도와 특정 섹터 취압에 대한 우려를 제기하며, 개인 투자자들이 너무 많이 유입하는 시점의 리스크를 경고했습니다.',
    items: [
      {
        name: '오건영',
        title: '신한은행 · 디지털 크리에이터',
        avatar: 'OG',
        color: '#D97757',
        time: '오늘 09:00',
        likes: 994,
        comments: 50,
        post: '정말 가공할 강세장이네요. 모든 매크로의 악재들이 우스워질 정도로 반도체를 중심으로 주식 시장이 끝없는 상승장을 이어가고 있습니다. 식당에서도 카페에서도 대화의 시작은 주식 투자... 하이닉스를 갖고 있는지가 모임 대화의 주도권. 개인적으로 국내 주식이 재평가를 받는 것은 좋지만 속도가 너무 빨르다는 점, 특정 섹터로의 취압이 너무 강하다는 점은 우려 요인입니다.',
        summary: '코스피 상승속도가 너무 빨라 취압 리스크 주의 필요'
      }
    ],
  },
  invest: {
    title: 'KOSPI 사상최고\c00b7Anthropic $1조 시대',
    subtitle: 'Claude가 작성한 오늘의 메모 · 5월 30일 09:00 · 5분 읽기',
    sections: [
      { h: '한 줄 요약', body: 'KOSPI가 반도체 주도로 사상최고(8,476)를 기록하고, Anthropic이 $9,650억 밸류로 OpenAI를 넘어서며 AI 헤게모니 수혜에 대한 글로벌 관심이 집중되고 있다.' },
      { h: '오늘의 변수', body: 'KOSPI의 급등은 SK하이닉스\c00b7삼성전자 주도. Anthropic의 ARR $470억과 $9,650억 밸류는 파트너인 Amazon(AWS)\c00b7Microsoft\c00b7Google 주가에 기회로 작용. WTI -2%는 에너지 인플레이션 암력 감소로 연준 금리 인상 우려를 일정부분 해소. Bitcoin은 $74,037로 소폭 하락(-1%).' },
      { h: '포지셔닝', body: '단기(1-3개월): SK하이닉스\c00b7삼성전자 등 반도체 코스피 이동면 관리. Amazon(AWS)는 Anthropic 최대 침 투자자로 기업 AI 노출 장기 수혜니다. 중기(6-12개월): Anthropic AI가 세 클라우드 플랫폼에 진입하면서 MSFT\c00b7GOOGL도 AI 수혜니다. 미이란 휴전 지속 시 유가 침슴해 에너지주는 무게 축소.' },
      { h: '리스크', body: '코스피 상승 속도 과다로 서플라이즈 및 단기 조정 가능성. 이란 휴전 파기 시 에너지가격 재급등된 AI 목표가 달성되지 않을 리스크. Anthropic 밀리여 달러 밸류는 IPO가 더딕했지 멋하구르는 기상이 올수도 있어 투자자들의 주의가 필요합니다.' }
    ],
    watchlist: [
      { sym: '000660', name: 'SK하이닉스', val: '₩395,000', pct: '+3.5%', up: true, note: '코스피 사상최고 주도, AI 반도체 수혜' },
      { sym: '005930', name: '삼성전자', val: '₩108,000', pct: '+2.8%', up: true, note: '코스피 회복세 함께 HBM\c00b7로직 안정적 수혜' },
      { sym: 'AMZN', name: 'Amazon', val: '$260.50', pct: '+1.3%', up: true, note: 'AWS, Anthropic 최대 침 투자자 — 기업 AI 블루컈 수혜직접' },
      { sym: 'NVDA', name: 'NVIDIA', val: '$188.50', pct: '+2.1%', up: true, note: 'AI\c00b7피지컴AI\c00b7양자 인프라 전방위 수혜' },
      { sym: 'TLT', name: 'iShares 20Y ETF', val: '$89.50', pct: '+0.8%', up: true, note: '4.45% 고금리 구간 적립. 이란 휴전으로 금리 소폭 하락' },
      { sym: 'GLD', name: 'SPDR Gold ETF', val: '$283.00', pct: '-0.5%', up: false, note: '지정학적 리스크 완화로 금 소폭 약세. 중장기 헤지 유지' },
      { sym: 'VYM', name: 'Vanguard High Div.', val: '$132.00', pct: '+0.4%', up: true, note: '방어적 포지션. 코스피 급등국면에서 리스크 대비' },
      { sym: 'BTC', name: 'Bitcoin', val: '$74,037', pct: '-1.01%', up: false, note: '이란 휴전으로 위험자산 선호 감소, 단기 별홥 관망' },
    ],
    portfolio: [
      { asset: '국내주식', pct: 25, color: '#3DDC97',
        tickers: [{ sym: '000660', name: 'SK하이닉스' }, { sym: '005930', name: '삼성전자' }],
        note: '코스피 사상최고 갱신 주도, 반도체\c00b7AI 수혜 모멘텀' },
      { asset: '미국주식', pct: 30, color: '#5B9BD5',
        tickers: [{ sym: 'AMZN', name: 'Amazon' }, { sym: 'NVDA', name: 'NVIDIA' }],
        note: 'Anthropic 파트너 Amazon, AI 인프라 NVDA 수혜' },
      { asset: '체권', pct: 15, color: '#9B8EC4',
        tickers: [{ sym: 'TLT', name: 'iShares 20Y ETF' }],
        note: '4.45% 고금리 구간 적립. 연준 입장 전환 시 반등 기대' },
      { asset: '금', pct: 12, color: '#F5C518',
        tickers: [{ sym: 'GLD', name: 'SPDR Gold ETF' }],
        note: '이란 리스크 완화로 비중 소폭 축소. 장기 헤지 유지' },
      { asset: '배당주', pct: 10, color: '#E08A6E',
        tickers: [{ sym: 'VYM', name: 'Vanguard High Div.' }],
        note: '방어적 포지션. 코스피 급등국면에서 수익 안정화' },
      { asset: '비트코인', pct: 8, color: '#F7931A',
        tickers: [{ sym: 'BTC', name: 'Bitcoin' }],
        note: '단기 위험자산 선호 증가 전환 주시. 소폭 뱄라스' },
    ],
  },
};


window.BRIEF_ARCHIVE = { '2026-05-30': TODAY, '2026-05-29': D_0529, '2026-05-28': D_0528 };
window.BRIEF_DATES   = ['2026-05-30', '2026-05-29', '2026-05-28'];
window.BRIEF_TODAY   = '2026-05-30';
window.BRIEF_USER    = '재현';
window.BRIEF_DATA    = TODAY;
