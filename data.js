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


// 아카이브: 2026-05-30
const D_0530 = pastDay({
  iso: '2026-05-30', label: '2026년 5월 30일 토요일', shortLabel: '5월 30일 (토)',
  market: [
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
          'Altimeter Capital·Dragoneer·Greenoaks·Sequoia Capital 주도로 투자자 확실화. 연간 반복매출(ARR) $470억 돌파, Claude Code가 성장 견인.',
          'Claude는 AWS·Azure·Google Cloud 3대 클라우드 전체에서 제공되는 최초의 프론티어 모델이 됨.'
        ],
        why: 'OpenAI를 제치고 AI 시장 패권을 잡았다는 지표로, AI 인프라 투자에서 Anthropic 파트너인 Amazon·Google·Microsoft의 주가에 직접적 영향을 미츰는 중요 신호입니다.',
        notes: [
          { term: 'Series H', def: '시리즈 H란 스타트업의 8번째 투자 라운드. 이 단계에서는 진입하는 기업이 이미 대규모이며 클래스로 성장하고 있음을 의미합니다.' },
          { term: 'ARR(연간 반복매출)', def: '구독·API 기반 연간 매출 예측치. SaaS·AI 기업 성장성의 핵심 지표.' }
        ]
      },
      { weight: 'high', time: '08:00', source: 'TheStreet / Anthropic',
        headline: 'Claude Opus 4.8 출시 — GPT-5.5 벤치마크 능가, 에이전틱 코딩 1위',
        url: 'https://www.thestreet.com/technology/anthropic-drops-new-claude-model-as-openai-ipo-race-heats-up',
        bullets: [
          'Claude Opus 4.8, 에이전틱 코딩·금융 분석·컴퓨터 사용 벤치마크에서 OpenAI GPT-5.5·Google Gemini 3.1 Pro 능가.',
          '새 모델은 뺈치마크에서 스코어 개선와 함께 에러 세이프티 강화 — 불확실한 사항을 스스로 플래그하는 정직성 향상.',
          'AWS·Azure·Google Cloud에서 동시 제공, 기업 코딩 어시스턴트 Claude Code와 통합.'
        ],
        why: 'Claude가 코딩·금융 분석 전반에서 선두를 질주하면서 기업용 AI 시장에서 주도권 강화를 확인해주는 신호입니다.',
        notes: [
          { term: '에이전틱 AI', def: 'AI가 사람의 지시 없이 자율적으로 일연의 작업을 수행하는 능력. 코딩·이메일·연구 등 복잡한 작업을 자동화.' }
        ]
      },
      { weight: 'high', time: '07:00', source: 'CNBC / Anthropic',
        headline: 'Anthropic ARR $470억 — 1년에 5배 급성장, Claude Code의 마법',
        url: 'https://www.anthropic.com/news/google-broadcom-partnership-compute',
        bullets: [
          'Anthropic 연간 반복매출(ARR) $470억으로 급등, 1년 전 $10억 대비 5배 성장. Claude Code AI 코딩 도구가 성장 주도.',
          '$100만 이상 지출 기업 고객 2개월만에 1,000개 초과.',
          'Google·Broadcom과 컴퓨트 파트너십 확대 발표, AI 인프라 강화 가속.'
        ],
        why: 'ARR $470억은 AI 모델 기업 사상 최고 수준으로, 코딩 자동화 인프라에 대한 시장의 수요가 얼마나 큰지를 보여줍니다.',
        notes: [
          { term: 'Claude Code', def: 'Anthropic의 AI 코딩 어시스턴트. 터미널에서 코드 작성·디버깅·테스트를 자동으로 수행해주는 도구.' }
        ]
      },
      { weight: 'low', time: '10:30', source: 'OpenAI',
        headline: 'OpenAI, Rosalind Biodefense 출시 — GPT기반 바이오방어 플랫폼',
        url: 'https://openai.com/index/',
        bullets: [
          'OpenAI, 바이오방어·공중보건·전얼대비에 특화된 GPT-Rosalind를 검증된 개발자·미 정부 파트너에게 확대.',
          '의료 AI 시장에 본격 진입 신호. 정부·보안 분야로 AI 예산 확대 기대.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '11:00', source: 'OpenAI',
        headline: 'OpenAI, Frontier Governance Framework 발표 — AI 개발 안전 원칙 공식화',
        url: 'https://openai.com/news/',
        bullets: [
          'OpenAI, 프론티어 AI 시스템 안전 개발·배포·평가 원칙 체계화한 성명 발표.',
          '내외부 안전 평가와 연구 화야를 개발 전에 수행하는 코도 포함하며, 업계 표준 제시.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '09:30', source: 'Meta',
        headline: 'Meta, Superintelligence Labs 첫 플래그십 LLM Muse Spark 공개',
        url: 'https://techdg.in/latest-ai-updates-may-2026-global-ai-news-trends/',
        bullets: [
          'Meta, Alexandr Wang CTO 주도 Superintelligence Labs 첣 플래그십 모델 Muse Spark 공개. 멀티모달·추론·헬스·에이전틱 분야 강점.',
          'Meta AI 2026년 설비투자 $1,150억~$1,350억 발표, 전년대비 약 2배.'
        ],
        why: '', notes: []
      },
      { weight: 'low', time: '08:30', source: 'DeepMind',
        headline: 'DeepMind CEO Demis Hassabis, "AGI 2029년 실제 가능성" — 타임라인 3년 앞당겼',
        url: 'https://blog.mean.ceo/ai-advancements-news-may-2026/',
        bullets: [
          'Hassabis, AGI 타임라인을 "실제 가능성 2029년"(기존 5~10년)으로 수정. 에이전틱·움직임 수준에서 진전이 예상보다 빠르다는 평가.',
          'AI 시스템의 인간 수준 접근 3년 내 가능하다고 주장, AI 안전 연구 강화 매진.'
        ],
        why: '', notes: [{ term: 'AGI', def: '범용 인공지능. 인간과 같이 모든 지적 작업을 수행할 수 있는 AI 시스템을 의미.' }]
      },
      { weight: 'low', time: '12:00', source: 'National Catholic Reporter',
        headline: '교황 레오 14세, AI 회캙 "마니피카 휴리니타스" — "AI 무장해제 필요"',
        url: 'https://www.ncronline.org/vatican/vatican-news/pope-leo-calls-disarm-ai-major-document-warns-technologic-threats-humanity',
        bullets: [
          '교황 레오 14세, 첫 회캙에서 AI가 인류에 미칠 위협 경고. "AI 개발자는 특별한 윤리·영적 책임을 진다".',
          'AI 기술은 중립이 아니며 개발·자금 조달·규제안에 메시지가 담겼다고 주장.'
        ],
        why: '', notes: [{ term: '회캙(Encyclical)', def: '사회 문제에 대한 교황의 공식 서한. 주요 인의 수신자는 주교와 신자들.' }]
      },
    ],
  },
  physical: {
    label: '피지컴 AI 뉴스',
    summary: 'Tesla의 Optimus Gen 3가 Fremont 공장에서 양산을 시작하며 $200억 설비투자를 선언했고, Boston Dynamics Atlas 전량이 현대차·Google에 배정되며 휴머노이드 로봇의 바닥입니다. 하네다 공항 수하물·청소 로봇 테스트, 툴니코 1~2만대 배지 계약등 에이전틱 로봇이 실제 현장에 도달하고 있습니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'Tesla / Standard Bots',
        headline: 'Tesla Optimus Gen 3, Fremont 양산 시작 — $200억 설비투자로 2026년 5만 대 목표',
        url: 'https://standardbots.com/blog/tesla-robot',
        bullets: [
          'Tesla, Optimus Gen 3 Fremont 공장에서 양산 시작 확인. Model S/X 라인을 Optimus 제조라인으로 전환, $200억 설비투자.',
          '2026년 말까지 5만 대 양산 목표. 현재는 R&D 및 학습 단계로 테슬라 공장 내부에서 엔드얤엔드 런닝 중.',
          'Optimus는 AI5 친 카메라·싳싧싧 음성 인식·전릭 전원 기술 개선된 Gen 3 사양.'
        ],
        why: 'Tesla의 휴머노이드 양산이 실제 코스트 커트로 연결되면서 로봇 시장의 실현 가능성을 높이는 신호로 작용합니다.',
        notes: [{ term: 'Optimus Gen 3', def: 'Tesla 3세대 휴머노이드 로봇. AI5 칠 사용, 2단위 활동 능력 대폭 개선.' }]
      },
      { weight: 'high', time: '08:00', source: 'Boston Dynamics / The Register',
        headline: 'Boston Dynamics Atlas 전량 양산 시작 — 2026년 분 현대차·Google DeepMind에 전량 배정',
        url: 'https://www.theregister.com/2026/01/06/boston_dynamics_atlas_production/',
        bullets: [
          'Boston Dynamics 전력 로봇 Atlas, 양산 시작 확인. 2026년 생산 런 전량이 히육다이 RMAC 및 Google DeepMind에 전량 배정.',
          '2027년부터 추가 상업 고객 진입 예정. 매도가 아닌 현대차 내부 제조 어시스턴스가 첫 타깃.',
          '전기 구동 Atlas는 성인가런 이동력·다양한 잡기 모드 특화.'
        ],
        why: 'Atlas가 특정 기업에 배타적으로 응용되면서 휴머노이드 로봇의 산업 적용이 가속화되는 시점을 보여줍니다.',
        notes: [{ term: 'RMAC', def: 'Hyundai Robotics Metaplant Application Center. 히육다이 운영 로봇 평가·학습 센터.' }]
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
        headline: 'JAL, 하네다 공항 휴머노이드 테스트 — 수하물·운송·기내 청소 로봇',
        url: 'https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/',
        bullets: [
          'Japan Airlines, 하네다 공항에서 휴머노이드 로봇 실용 테스트 시작. 수하물 할델링·운송·기내 청소 등 업무 적용.',
          '항공·도소매 등 서비스 업종으로 적용 확대 가능성 탐색.'
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
          '물류·세하게 제조업 확대로 적용 범위 확대 예정.'
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
          '배터리·안정성·안전 기준·노동 어려람이 여전히 가장 큰 장벽.'
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
          { term: 'CHIPS법', def: '2022년 미국에서 제정된 반도체 초전력화 법. 금융 예산을 반도체·양자 투자에 할당.' },
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
          '코스피, 5월 29일 +3.03% 급등해 8,476로 종가. 반도체·AI 에 대한 글로벌 기대 지속.',
          'SK하이닉스·삼성전자 주도. 코리아할인 해소 기대감이 외국인 수급을 더한다는 평가.',
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
        headline: '달러·원 1,496원 — 이란 리스크 완화로 원화 소폭 강세',
        url: 'https://kr.investing.com/currencies/usd-krw',
        bullets: [
          '달러·원 1,496원 수준, 이란 휴전 뉴스로 원화 소폭 강세(-0.47%).',
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
        headline: 'KDI, 2026 한국 GDP 2.5% 전망 — 반도체 수입 호조·내수 개선',
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
    title: 'KOSPI 사상최고·Anthropic $1조 시대',
    subtitle: 'Claude가 작성한 오늘의 메모 · 5월 30일 09:00 · 5분 읽기',
    sections: [
      { h: '한 줄 요약', body: 'KOSPI가 반도체 주도로 사상최고(8,476)를 기록하고, Anthropic이 $9,650억 밸류로 OpenAI를 넘어서며 AI 헤게모니 수혜에 대한 글로벌 관심이 집중되고 있다.' },
      { h: '오늘의 변수', body: 'KOSPI의 급등은 SK하이닉스·삼성전자 주도. Anthropic의 ARR $470억과 $9,650억 밸류는 파트너인 Amazon(AWS)·Microsoft·Google 주가에 기회로 작용. WTI -2%는 에너지 인플레이션 암력 감소로 연준 금리 인상 우려를 일정부분 해소. Bitcoin은 $74,037로 소폭 하락(-1%).' },
      { h: '포지셔닝', body: '단기(1-3개월): SK하이닉스·삼성전자 등 반도체 코스피 이동면 관리. Amazon(AWS)는 Anthropic 최대 침 투자자로 기업 AI 노출 장기 수혜니다. 중기(6-12개월): Anthropic AI가 세 클라우드 플랫폼에 진입하면서 MSFT·GOOGL도 AI 수혜니다. 미이란 휴전 지속 시 유가 침슴해 에너지주는 무게 축소.' },
      { h: '리스크', body: '코스피 상승 속도 과다로 서플라이즈 및 단기 조정 가능성. 이란 휴전 파기 시 에너지가격 재급등된 AI 목표가 달성되지 않을 리스크. Anthropic 밀리여 달러 밸류는 IPO가 더딕했지 멋하구르는 기상이 올수도 있어 투자자들의 주의가 필요합니다.' }
    ],
    watchlist: [
      { sym: '000660', name: 'SK하이닉스', val: '₩395,000', pct: '+3.5%', up: true, note: '코스피 사상최고 주도, AI 반도체 수혜' },
      { sym: '005930', name: '삼성전자', val: '₩108,000', pct: '+2.8%', up: true, note: '코스피 회복세 함께 HBM·로직 안정적 수혜' },
      { sym: 'AMZN', name: 'Amazon', val: '$260.50', pct: '+1.3%', up: true, note: 'AWS, Anthropic 최대 침 투자자 — 기업 AI 블루컈 수혜직접' },
      { sym: 'NVDA', name: 'NVIDIA', val: '$188.50', pct: '+2.1%', up: true, note: 'AI·피지컴AI·양자 인프라 전방위 수혜' },
      { sym: 'TLT', name: 'iShares 20Y ETF', val: '$89.50', pct: '+0.8%', up: true, note: '4.45% 고금리 구간 적립. 이란 휴전으로 금리 소폭 하락' },
      { sym: 'GLD', name: 'SPDR Gold ETF', val: '$283.00', pct: '-0.5%', up: false, note: '지정학적 리스크 완화로 금 소폭 약세. 중장기 헤지 유지' },
      { sym: 'VYM', name: 'Vanguard High Div.', val: '$132.00', pct: '+0.4%', up: true, note: '방어적 포지션. 코스피 급등국면에서 리스크 대비' },
      { sym: 'BTC', name: 'Bitcoin', val: '$74,037', pct: '-1.01%', up: false, note: '이란 휴전으로 위험자산 선호 감소, 단기 별홥 관망' },
    ],
    portfolio: [
      { asset: '국내주식', pct: 25, color: '#3DDC97',
        tickers: [{ sym: '000660', name: 'SK하이닉스' }, { sym: '005930', name: '삼성전자' }],
        note: '코스피 사상최고 갱신 주도, 반도체·AI 수혜 모멘텀' },
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
});
const TODAY = {
  date: { iso: '2026-05-31', label: '2026년 5월 31일 일요일', shortLabel: '5월 31일 (일)', isToday: true },
  marketStrip: [
    { sym: 'KOSPI',   val: '8,476',   pct: '+3.03%', up: true  },
    { sym: 'S&P 500', val: '7,580',   pct: '+0.22%', up: true  },
    { sym: 'NASDAQ',  val: '26,972',  pct: '+0.26%', up: true  },
    { sym: 'BTC',     val: '$73,906', pct: '-0.18%', up: false },
    { sym: '$/₩',    val: '1,496',   pct: '-0.47%', up: false },
    { sym: '10Y UST', val: '4.45%',  pct: '-7bp',   up: false },
    { sym: 'WTI',     val: '$87.20',  pct: '-2.37%', up: false },
  ],
  ai: {
    label: 'AI 뉴스',
    summary: 'OpenAI가 기밀 IPO S-1을 SEC에 제출하며 9월 나스닥 상장과 $1조 밸류에이션을 목표로 본격 공개시장 진출을 선언했습니다. Cerebras는 나스닥 데뷔 첫날 +68% 급등하며 AI 칩 IPO 사상 최대 기록을 갈아치웠고, 교황 레오 14세는 AI 시대 인간 존엄 수호를 촉구하는 첫 회칙을 발표하며 기술과 윤리의 접점이 주목받고 있습니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'Fortune / Enterprise DNA',
        headline: 'OpenAI, IPO 기밀 S-1 SEC 제출 — 9월 나스닥, 밸류 $1조 목표',
        url: 'https://fortune.com/2026/05/22/openai-ipo-filing-1-trillion-may-finally-answer-these-big-questions/',
        bullets: [
          'OpenAI, 2026년 5월 22일 기밀 IPO S-1을 SEC에 제출. Goldman Sachs·Morgan Stanley 주관, 9월 나스닥 상장 목표.',
          '밸류에이션 $8,520억~$1조 범위. 월 매출 $20억, 연환산 $250억이지만 $1 벌 때마다 $1.22 손실.',
          '2023년 ARR $20억에서 2026년 2월 $250억으로 3년간 12.5배 성장. IPO 공모가는 로드쇼 15일 전 공개 예정.'
        ],
        why: 'AI 최대 기업의 공개 상장은 AI 투자 사이클 전반에 영향을 미치는 이정표입니다. 성공 시 AI 관련 IPO 러시가 가속될 수 있습니다.',
        notes: [
          { term: 'S-1', def: '미국 증권거래위원회(SEC)에 제출하는 IPO 등록신청서. 재무제표·사업모델·리스크 등이 담깁니다.' },
          { term: '기밀 제출', def: '상장 15일 전까지 내용을 비공개로 유지할 수 있는 SEC 규정. 전략적 유연성 확보용.' }
        ]
      },
      { weight: 'high', time: '08:00', source: 'CNBC / The Register',
        headline: 'Cerebras(CBRS), 나스닥 데뷔 첫날 +68% 급등 — AI 칩 IPO 사상 최대',
        url: 'https://www.cnbc.com/2026/05/14/cerebras-cbrs-stock-trade-nasdaq-ipo.html',
        bullets: [
          '2026년 5월 14일 Cerebras Systems, 나스닥 CBRS로 상장. 공모가 $185, 첫날 종가 기준 시총 $95억 이상.',
          '$55억 공모로 2026년 최대 AI 기업 IPO 기록. OpenAI $200억 칩 공급 계약, AWS 인프라 파트너십 확보.',
          'WSE-3 칩: 90만 코어·44GB 온칩 메모리로 AI 추론 특화. 역대 최대 상업용 칩.'
        ],
        why: 'Cerebras 상장은 NVIDIA 독주 구도에 균열을 내는 신호탄이며, AI 추론 칩 시장의 새 투자 사이클을 열었습니다.',
        notes: [
          { term: 'AI 추론(Inference)', def: '학습된 AI 모델을 실제 서비스에서 실행하는 단계. 학습보다 빈도가 높아 칩 수요가 폭발적으로 증가 중.' },
          { term: 'WSE(Wafer-Scale Engine)', def: '웨이퍼 전체를 하나의 칩으로 만드는 기술. 일반 GPU보다 훨씬 넓은 면적·메모리 대역폭.' }
        ]
      },
      { weight: 'high', time: '10:00', source: 'Vatican News / Time',
        headline: '교황 레오 14세, AI 첫 회칙 "마냐피카 후마니타스" — "AI는 인간을 대체할 수 없다"',
        url: 'https://www.vaticannews.va/en/pope/news/2026-05/pope-leo-xiv-encyclical-magnifica-humanitas-ai.html',
        bullets: [
          '2026년 5월 25일 발표된 첫 회칙 Magnifica Humanitas(인류의 위대함). AI 시대 인간 존엄 수호를 핵심 주제로 삼음.',
          '"기술은 중립이 아니다. 개발·금융·규제·사용자 모두의 특성을 닮는다"며 AI 거버넌스 필요성 강조.',
          'Anthropic 공동창업자 Chris Olah 발표 현장 참석. 역대 최초로 라틴어 공식판 없이 현대어로만 발표.'
        ],
        why: '가톨릭 12억 신자를 대표하는 교황의 AI 윤리 선언은 글로벌 AI 규제 담론에 새 축을 더하는 이정표입니다.',
        notes: [
          { term: '회칙(Encyclical)', def: '교황이 전 세계 가톨릭 신자에게 보내는 공식 서한으로, 교회의 공식 입장을 담습니다.' },
          { term: 'Rerum Novarum', def: '1891년 노동자 권리를 다룬 레오 13세 회칙. 레오 14세는 135주년에 이번 회칙을 발표했습니다.' }
        ]
      },
      { weight: 'low', time: '07:00', source: 'VentureBeat / Meta AI',
        headline: 'Meta Muse Spark, 클로즈드소스로 전환 — 멀티모달 추론·에이전트 지원',
        url: 'https://venturebeat.com/technology/goodbye-llama-meta-launches-new-proprietary-ai-model-muse-spark-first-since',
        bullets: [
          'Meta Superintelligence Labs, 첫 플래그십 모델 Muse Spark 출시. Llama 오픈소스 노선에서 폐쇄형으로 전환.',
          '멀티모달 지각·툴 사용·멀티에이전트·시각적 추론 체인(CoT) 지원. Ray-Ban·Oakley 메타 글래스에 탑재 예정.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '06:00', source: 'Anthropic / CNBC',
        headline: 'Anthropic 한국 대표이사 최기영 선임 — 서울 오피스 개설 임박',
        url: 'https://www.anthropic.com/news',
        bullets: [
          'Anthropic, 한국 첫 법인 대표이사로 최기영 선임. 서울 오피스는 아시아 거점 확장의 핵심.',
          'Anthropic ARR $470억 · 기업 고객 3대 클라우드 전체 공급 — 한국 엔터프라이즈 공략 본격화.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '05:00', source: 'Google / TechCrunch',
        headline: 'Google Gemini 3.5 Flash 출시 — 저비용 고속 추론 모델로 시장 확대',
        url: 'https://www.axios.com/2026/05/21/google-ai-anthropic-openai-war',
        bullets: [
          'Google, Claude·GPT-5.5에 맞서 Gemini 3.5 Flash 공개. 빠른 속도와 낮은 비용으로 대중화 노림.',
          'Gemini Spark 에이전트도 동시 발표. AI 어시스턴트 경쟁이 플래그십에서 미드티어로 확전.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '04:00', source: 'Microsoft / IMF',
        headline: '글로벌 AI 활용률 17.8% 돌파 — Q1 2026 근로가능인구 기준',
        url: 'https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/',
        bullets: [
          '세계 근로가능인구 AI 활용률, Q1 2026 기준 17.8%. 전분기 대비 +1.5%p 상승.',
          '미국 의사의 3명 중 2명이 AI 도구 활용 중. 의료·법률·교육 분야 확산 가속.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '03:00', source: 'wadeswatch.com',
        headline: 'Penn 연구팀, 빛-물질 혼성 입자로 AI 연산 가속 — 에너지 10분의 1',
        url: 'https://www.wadeswatch.com/news-about-artificial-intelligence-may-2026-round-up/',
        bullets: [
          '펜실베이니아대, 빛과 물질의 혼성 입자(폴라리톤)를 이용해 AI 연산을 기존 대비 10배 속도·10분의 1 전력으로 구현하는 원리 시연.',
          '상용화까지는 시일이 필요하지만 차세대 AI 칩 에너지 위기 해결책으로 주목.'
        ],
        why: '',
        notes: [{ term: '폴라리톤(Polariton)', def: '빛(포톤)과 물질 내 전자 여기가 결합된 혼성 준입자. 일반 전자보다 훨씬 빠르고 에너지 소모가 적음.' }]
      },
    ],
  },
  physical: {
    label: '피지컬 AI 뉴스',
    summary: 'Tesla가 프리몬트 공장을 Optimus 전용 라인으로 전환하고 기가 텍사스에 연 1,000만 대 공장 착공을 시작하며 휴머노이드 로봇 대량 생산 시대를 열었습니다. BMW-Figure AI 파트너십은 스파르탄버그 3만 대 생산 지원을 완료하고 독일 라이프치히로 확장 중이며, 2026년 말 산업 현장 운용 휴머노이드 수천 대 시대가 가시권에 들어왔습니다.',
    items: [
      { weight: 'high', time: '09:30', source: 'Electrek / Tesla Rati',
        headline: 'Tesla, 프리몬트 공장 모델S·X 라인 종료 — Optimus Gen3 생산 7~8월 시작',
        url: 'https://electrek.co/2026/04/22/tesla-optimus-production-fremont-model-sx-line/',
        bullets: [
          '2026년 5월 초 마지막 모델S·X 출고 후 프리몬트 라인 물리적 개조 착수. Optimus 생산 7~8월 목표.',
          '머스크: "초기 기술은 공장 내 단순 반복 작업 → 점진적으로 복잡 작업 확대" 계획.',
          'Optimus Gen2, 현재 프리몬트·오스틴 공장에서 배터리 셀 분류·부품 처리·품질 검사 실시 중.'
        ],
        why: '세계 최대 전기차 회사가 공장 전체를 로봇 생산으로 전환하는 것은 제조업 자동화의 패러다임 전환을 알리는 신호입니다.',
        notes: [
          { term: 'Optimus Gen3', def: 'Tesla의 3세대 휴머노이드 로봇. 7~8월 공개 예정이며 초기 생산은 프리몬트 공장에서 시작됩니다.' }
        ]
      },
      { weight: 'high', time: '08:30', source: 'BMW Group / iiot-world',
        headline: 'BMW-Figure AI, 스파르탄버그 3만 대 생산 완료 — 독일 라이프치히 유럽 첫 확장',
        url: 'https://www.press.bmwgroup.com/global/article/detail/T0455864EN/bmw-group-to-deploy-humanoid-robots-in-production-in-germany-for-the-first-time?language=en',
        bullets: [
          'Figure 02, 10개월간 BMW X3 3만 대 이상 생산 지원. 1,250시간 운용, 9만여 부품 이동, 120만 보 이상.',
          'BMW, 독일 라이프치히 공장에 유럽 최초 휴머노이드 배치 발표. "물리적 AI 생산 역량센터" 설립.',
          'Figure 03은 스파르탄버그 추가 라인 확장 + 뮌헨·레겐스부르크·라이프치히 파일럿 계획.'
        ],
        why: 'ROI가 검증된 첫 대규모 상업 배치 사례로, 자동차 제조업 전체의 로봇 전환 로드맵 기준점이 됩니다.',
        notes: [
          { term: '물리적 AI(Physical AI)', def: '디지털 공간이 아닌 현실 세계에서 자율적으로 작동하는 AI 로봇 시스템. 휴머노이드·드론·자율주행차 등이 해당.' }
        ]
      },
      { weight: 'high', time: '07:30', source: 'The Robot Report / Teslarati',
        headline: 'Tesla, 기가 텍사스 Optimus 전용 공장 착공 — 연 1,000만 대 목표',
        url: 'https://www.therobotreport.com/from-evs-to-robotics-tesla-targets-10m-optimus-units-with-new-texas-plant/',
        bullets: [
          '5월 27일 기가 텍사스 노스캠퍼스, Optimus 전용 2세대 공장 첫 철골 구조물 확인. 연 1,000만 대 생산 목표.',
          '완전 자동화 설계. Tesla 자체 Optimus 로봇으로 Optimus를 생산하는 "로봇이 로봇을 만드는" 구조.',
          '2026년 현재 Optimus Gen2가 공장 내 실제 업무 수행 중. 3세대 공개 후 대량 생산 가속 예정.'
        ],
        why: '연 1,000만 대는 글로벌 자동차 생산량 수준. 실현되면 노동 시장 구조에 근본적 충격을 줄 수 있습니다.',
        notes: []
      },
      { weight: 'low', time: '06:30', source: 'GrabaRobot / Boston Dynamics',
        headline: 'Boston Dynamics Atlas, 현대차 공장 수만 대 배치 계획 확정',
        url: 'https://www.grabarobot.com/blog/humanoid-robot-workforce-deployment-2026/',
        bullets: [
          'Boston Dynamics, 현대모터그룹 제조 시설에 아틀라스 수만 대 배치 계획 확정. 2026년 라인업 전량 사전 배정.',
          '기존 시범 운용 단계에서 대규모 상업 배치로 격상. 아틀라스 생산 램프업 진행 중.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '05:30', source: 'Humanoid Press',
        headline: 'Unitree, 2026년 1~2만 대 출하 목표 — 중국 저가형 휴머노이드 시장 장악',
        url: 'https://humanoid.press/Who-Will-Win-2026/',
        bullets: [
          'Unitree Robotics, 2025년 5,500대 출하 후 2026년 1~2만 대 목표로 생산 확대.',
          '중국 공장·물류 창고 중심 보급. 경쟁사 대비 저렴한 가격으로 시장 진입 장벽 낮춤.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '05:00', source: 'Humanoid.press',
        headline: '2026년 휴머노이드 로봇 산업 현황 — 수천 대 실제 운용, 대부분 제어된 환경',
        url: 'https://medium.com/@asarav/humanoid-robots-in-2026-where-the-industry-actually-stands-6ae3dc0c7be5',
        bullets: [
          '2026년 말 기준 산업 현장 운용 휴머노이드 수천 대 전망. 구조화된 반복 작업 위주, 상당한 인간 감독 필요.',
          '대부분 중국 공장·물류 현장. Tesla·현대·BMW 소규모 파일럿 진행 중.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '04:30', source: 'Standard Bots',
        headline: 'Tesla Optimus 목표가 분석 — 2026년 가격·성능·사용 사례 총정리',
        url: 'https://standardbots.com/blog/tesla-robot',
        bullets: [
          'Tesla, Optimus 소비자 가격 $20,000~$30,000 목표. 현재는 내부 공장 투입 단계.',
          '2026년 Optimus가 처리 가능한 작업: 배터리 분류, 부품 조립, 품질 검사 등 구조화 업무.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '04:00', source: 'vfuturemedia.com',
        headline: 'Figure 03 상업 배치 확인 — 휴머노이드 로보틱스 사이클 가속',
        url: 'https://www.theplatinumcapital.com/article/figure-confirms-commercial-deployment-of-figure-03-at-bmw-plant-as-humanoid-robotics-cycle-accelerates',
        bullets: [
          'Figure AI, BMW 공장에 Figure 03 상업 배치 공식 확인. 이전 세대 대비 조작 정밀도·내구성 향상.',
          '2026년 하반기 추가 고객사 파일럿 계획 발표 예정.'
        ],
        why: '',
        notes: []
      },
    ],
  },
  quantum: {
    label: '양자 뉴스',
    summary: '미국 정부가 양자컴퓨팅 기업 9곳에 $20억을 투자하고 지분을 취득하는 파격적 계획을 발표해 양자주 전반이 +30% 급등했습니다. Quantinuum은 2030년 완전 내결함성 양자컴퓨팅 로드맵을 발표했고, IonQ는 볼더에 2만 2천㎡ 규모 R&D 연구소를 개소하며 차세대 하드웨어 개발에 박차를 가하고 있습니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'CNBC / Motley Fool',
        headline: '미 정부, 양자컴퓨팅 기업 9곳에 $20억 투자 · 지분 취득 — 양자주 +30% 급등',
        url: 'https://www.cnbc.com/2026/05/21/quantum-stocks--us-taking-equity-stakes.html',
        bullets: [
          '미 백악관, CHIPS법 기금으로 양자컴퓨팅 기업 9곳에 총 $20억 투자 + 워런트(주식매수권) 취득 발표.',
          'D-Wave +33%, Rigetti +30%, Infleqtion +31% 급등. GlobalFoundries $3.75억, D-Wave·Rigetti·Infleqtion 각 $1억, PsiQuantum $1억, Diraq $3,800만.',
          'IonQ는 이번 투자 명단에서 제외. 정부 지원 수혜 종목 선별 중요성 부각.'
        ],
        why: '정부가 민간 양자 기업의 주주가 되는 것은 전례 없는 구조입니다. AI 이후 차세대 컴퓨팅 패권 경쟁이 국가 전략으로 격상됐음을 의미합니다.',
        notes: [
          { term: '워런트(Warrant)', def: '일정 가격에 주식을 매수할 수 있는 권리. 정부가 투자금 외에 추가적인 업사이드를 확보하는 방식.' },
          { term: 'CHIPS법', def: '2022년 미국이 반도체·첨단기술 경쟁력 강화를 위해 제정한 법. 총 $527억 지원.' }
        ]
      },
      { weight: 'high', time: '08:00', source: 'Quantinuum / HPCwire',
        headline: 'Quantinuum, 2030년 완전 내결함성 양자컴퓨팅 로드맵 발표 — Microsoft와 협력',
        url: 'https://www.quantinuum.com/press-releases/quantinuum-unveils-accelerated-roadmap-to-achieve-universal-fault-tolerant-quantum-computing-by-2030',
        bullets: [
          'Quantinuum, 2030년까지 수백 개 논리 큐비트에서 수백만 회 연산 가능한 완전 내결함성 범용 양자컴퓨터 달성 로드맵 발표.',
          'Microsoft와 협력해 12개 고신뢰 논리 큐비트 시연 — 불과 수개월 전 대비 3배 증가. AI·HPC와 결합한 첫 화학 시뮬레이션도 화학적 정확도로 성공.',
          '로드맵: Helios(2025, 100 물리 큐비트) → Apollo(상업적 우위 달성) 순.'
        ],
        why: '내결함성 달성은 양자컴퓨터가 실제 산업 문제를 푸는 시점을 앞당기는 핵심 마일스톤입니다.',
        notes: [
          { term: '내결함성(Fault-Tolerant)', def: '오류 정정 기술로 연산 오류를 실시간 교정해 신뢰할 수 있는 계산을 하는 상태. 양자컴퓨팅 실용화의 관문.' },
          { term: '논리 큐비트', def: '여러 물리 큐비트로 오류를 보정한 안정적 큐비트. 물리 큐비트 수가 많을수록 더 많은 논리 큐비트 구성 가능.' }
        ]
      },
      { weight: 'high', time: '07:00', source: 'IonQ / Quantum Computing Report',
        headline: 'IonQ, 볼더 22,000㎡ 양자 R&D 연구소 개소 — 차세대 반도체 이온 트랩 개발',
        url: 'https://quantumcomputingreport.com/news/',
        bullets: [
          'IonQ, 콜로라도 볼더에 22,000㎡ 양자 R&D 연구소 개소. 반도체 이온 트랩 칩 설계·테스트 전문.',
          '2026년 말 첫 차세대 양자컴퓨터 출시 목표. Q1 2026 사상 최대 매출·백로그 기록 발표.',
          'IonQ는 이번 정부 $20억 투자 명단에서 제외됐지만 독자 성장세 유지.'
        ],
        why: 'IonQ의 자체 하드웨어 내재화 전략은 정부 지원 없이도 기술 경쟁력을 확보하겠다는 의지를 보여줍니다.',
        notes: [
          { term: '이온 트랩(Ion Trap)', def: '전기장으로 이온(하전 원자)을 공중에 가두어 큐비트로 사용하는 양자컴퓨팅 방식. 높은 정확도가 특징.' }
        ]
      },
      { weight: 'low', time: '06:00', source: 'Heygotrade / CNBC',
        headline: 'D-Wave·Rigetti·Infleqtion, 정부 투자 발표에 하루 +30% 급등',
        url: 'https://www.heygotrade.com/en/news/us-2-billion-quantum-computing-grants-equity-stakes/',
        bullets: [
          '미 정부 $20억 투자 발표 당일 D-Wave +33%, Rigetti +30%, Infleqtion +31% 급등.',
          '양자 ETF와 연계 종목까지 동반 상승. 2026년 최대 단일일 양자주 랠리.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '05:30', source: 'NYU / IBM Quantum',
        headline: 'NYU-IBM, 양자컴퓨팅 공동 박사후 연구 프로그램 출범',
        url: 'https://quantumcomputingreport.com/news/',
        bullets: [
          'NYU 양자연구소·IBM Watson 연구센터, 양자-고전 하이브리드 알고리즘 최적화 공동 프로그램 발표.',
          '알고리즘 개발·산업 응용에 초점. 학계-산업계 양자 인재 파이프라인 강화.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '05:00', source: 'Quantinuum',
        headline: 'Quantinuum-bp, 에너지 탐사 양자 최적화 프로젝트 착수',
        url: 'https://www.quantinuum.com/blog/quantinuum-accelerates-the-path-to-universal-fault-tolerant-quantum-computing-supports-microsofts-ai-and-quantum-powered-compute-platform-and-the-path-to-a-quantum-supercomputer',
        bullets: [
          'Quantinuum-bp 공동 프로젝트: 지구 지하 지도 작성(석유·가스 탐사) 양자 최적화 목표.',
          '에너지 산업 최초의 실용 양자 응용 사례 중 하나로 평가.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '04:30', source: 'Quantinuum / Synopsys',
        headline: 'Quantinuum-Synopsys, 공학 도구 양자 통합 협력',
        url: 'https://www.quantinuum.com/blog/quantinuum-accelerates-the-path-to-universal-fault-tolerant-quantum-computing-supports-microsofts-ai-and-quantum-powered-compute-platform-and-the-path-to-a-quantum-supercomputer',
        bullets: [
          'EDA(전자설계자동화) 선두 Synopsys와 양자 통합 전략적 협력 발표.',
          '칩 설계·공학 시뮬레이션에 양자 가속 도입 목표.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '04:00', source: 'Motley Fool / SEC',
        headline: 'PsiQuantum, 미 정부 $1억 지원 — 광자 기반 양자 인프라 확대',
        url: 'https://www.fool.com/investing/2026/05/25/government-invest-billion-quantum-stock-buy/',
        bullets: [
          'PsiQuantum, CHIPS법 기금 $1억 수령. 광자(Photonic) 기반 양자컴퓨터 스케일업 가속.',
          '광자 큐비트는 상온 동작 가능성으로 데이터센터 통합 유망 기술로 꼽힘.'
        ],
        why: '',
        notes: [{ term: '광자 큐비트', def: '빛의 입자(광자)를 큐비트로 사용하는 방식. 극저온 불필요로 실용화에 유리.' }]
      },
    ],
  },
  econ: {
    label: '경제 뉴스',
    summary: 'KOSPI가 8,476을 돌파하며 5월 역대 최강 강세장을 기록했고, "Sell in May"라는 격언이 무색해졌습니다. 미국은 연준 의장 교체 이후 새 통화정책 기조에 시장이 주목하고 있으며, 이란 전쟁 여파로 PCE 물가가 3.8%까지 올랐지만 휴전 기대감으로 유가와 채권 금리는 함께 하락했습니다.',
    items: [
      { weight: 'high', time: '09:00', source: 'CNBC / KDI',
        headline: 'KOSPI 8,476 돌파 — 5월 역대 최강 강세장, "Sell in May" 격언 무색',
        url: 'https://www.cnbc.com/2026/05/29/asia-markets-today-live-updates-nikkei-225-hang-seng-index-kospi-nifty-50-csi-300.html',
        bullets: [
          'KOSPI, 5월 29일 8,476 돌파 · 당일 +3.03%. 반도체(SK하이닉스·삼성전자) 주도 상승, 레버리지 ETF 수요 겹침.',
          '오건영 분석: "20년 경력 중 가장 강한 시장 흐름. 특정 섹터 쏠림·개인 투자자 급증은 경계 요인."',
          'S&P 500도 9주 연속 상승 기록. 글로벌 강세장 동시 진행.'
        ],
        why: '한국 주식시장 급등은 AI·반도체 수출 호조와 밸류업 정책이 맞물린 결과지만, 과열 신호에 대한 모니터링도 필요합니다.',
        notes: [
          { term: '레버리지 ETF', def: '지수 수익률의 2~3배를 추구하는 ETF. 상승장에서는 수익 극대화, 하락 시 손실도 배가됨.' }
        ]
      },
      { weight: 'high', time: '08:00', source: 'YTN / Investing.com',
        headline: '미 연준 의장 교체 — 파월 임기 종료, 새 의장 상원 인준 통과',
        url: 'https://www.ytn.co.kr/_ln/0104_202605140715549429',
        bullets: [
          '5월 15일 제롬 파월 연준 의장 임기 종료. 신임 의장 상원 인준 통과로 새 통화정책 기조 주시.',
          '이란 전쟁발 인플레이션 장기화 우려 속 신임 의장의 금리 대응 방향이 하반기 시장 핵심 변수.',
          '달러인덱스 하락 추세 지속. 연준 인하 기대 + 미 정부 달러약세 선호 기조 맞물림.'
        ],
        why: '연준 수장 교체는 10년에 한 번 있는 이벤트입니다. 새 의장의 인플레 대응 스탠스가 글로벌 금리·달러·신흥국 자산에 직접 영향을 줍니다.',
        notes: [
          { term: '달러인덱스(DXY)', def: '유로·엔·파운드 등 6개 주요 통화 대비 달러 가치를 나타내는 지수. 낮을수록 달러 약세.' }
        ]
      },
      { weight: 'high', time: '07:00', source: '한국은행 / KDI',
        headline: '한국은행 기준금리 2.5% 동결 — 성장률 2.6% 상향, 물가 2.7% 전망',
        url: 'https://www.bok.or.kr/portal/main/main.do',
        bullets: [
          '한국은행 금통위, 5월 기준금리 2.5% 동결. Q1 GDP +1.7%, 반도체 수출 호조 성장 견인.',
          '2026년 성장률 전망 2.6%로 상향(2월 2.0%). 소비자물가 2.7% 전망(2월 2.2% 대비 상향).',
          '이란 전쟁발 유가 상승 + 내수 개선으로 물가·성장 양면 압력.'
        ],
        why: '한은의 동결은 성장·물가 균형 유지의 선택입니다. 하반기 금리 방향은 이란 전쟁 전개와 미 연준 새 의장 스탠스에 달려 있습니다.',
        notes: [
          { term: '금통위(금융통화위원회)', def: '한국은행 내 기준금리를 결정하는 최고 의사결정기구. 연 8회 회의 개최.' }
        ]
      },
      { weight: 'low', time: '06:30', source: '한국은행',
        headline: '한국 Q1 GDP +1.7% — 반도체 중심 수출 호조, 4년 만에 최대 분기 성장',
        url: 'https://www.bok.or.kr/portal/main/main.do',
        bullets: [
          '2026년 Q1 GDP 전기 대비 +1.7%. 반도체·AI 관련 수출 급증이 성장 주도.',
          '내수도 개선세. 가계 주식 참여 확대로 소비심리 회복.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '06:00', source: 'Investing.com / BEA',
        headline: '미국 PCE 물가 4월 3.8% — 이란 전쟁발 인플레 장기화 우려',
        url: 'https://www.investing.com/economic-calendar/pce-price-index-906',
        bullets: [
          '미국 4월 PCE 물가 전년비 3.8% (3월 3.5% 대비 상승). 이란 전쟁·호르무즈 봉쇄로 에너지 물가 압박.',
          '연준 선호 물가지표 상승으로 금리 인하 시점 후퇴 우려. 신임 의장의 매파적 대응 가능성.'
        ],
        why: '',
        notes: [{ term: 'PCE 물가', def: '미국 개인소비지출 물가지수. 연준이 인플레이션 목표(2%)의 기준으로 삼는 핵심 지표.' }]
      },
      { weight: 'low', time: '05:30', source: 'Trading Economics / Oilprice',
        headline: 'WTI $87 — 이란 휴전 협상 기대에 유가 급락, 5월 -16%',
        url: 'https://tradingeconomics.com/commodity/crude-oil',
        bullets: [
          '5월 29일 WTI $87.20. 이란-미 휴전 기대감으로 한 달 만에 -16%. 글로벌 에너지 공급 우려 완화.',
          '유가 하락은 인플레 압력 완화 신호이지만, 협상 결렬 시 다시 급등 가능.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '05:00', source: 'CNBC / Trading Economics',
        headline: '미국채 10년물 4.45% — 이란 리스크 완화로 3주 만에 최저',
        url: 'https://www.cnbc.com/quotes/US10Y',
        bullets: [
          '10년물 미국채 금리 4.45%. 이란 협상 기대 + WTI 하락으로 3주 만에 최저 수준.',
          '5월 중 최고점 대비 -7bp. 채권 가격 반등으로 TLT 등 장기채 ETF 수혜.'
        ],
        why: '',
        notes: []
      },
      { weight: 'low', time: '04:30', source: '오건영 Facebook',
        headline: '오건영: "Sell in May 무색한 강세장 — 하반기 이란·레버리지 ETF 모니터링 필수"',
        url: 'https://www.facebook.com/ohrang79/?locale=ko_KR',
        bullets: [
          '"5월이 끝나가고 있네요. Sell in May라는 말이 무색할 정도로 가공할 강세장. 20년 이상 마켓 본 이후 가장 강한 흐름."',
          '"하반기 이란 전쟁·호르무즈 봉쇄 장기화 여부, 레버리지 ETF 과열이 핵심 모니터링 대상." 개인투자자 과열 경계 권고.'
        ],
        why: '',
        notes: []
      },
    ],
  },
  columns: {
    label: '컬럼 피드',
    summary: '오건영, 5월 역대 최강 강세장에 경계 메시지 발신.',
    items: [
      {
        name: '오건영',
        title: '신한은행 · 디지털 크리에이터',
        avatar: 'OG',
        color: '#D97757',
        time: '오늘 09:00',
        likes: 504,
        comments: 33,
        post: '5월이 끝나가고 있네요. Sell in May라는 말이 무색할 정도로 가공할 강세장이었던 것 같습니다. 아마.. 제가 20년 이상 마켓을 본 이후로 가장 강한 시장 흐름이 아니었나 싶네요. 레버리지 ETF의 흐름까지 겹치면서 반도체 관련 대형주들을 중심으로 한 상승세가 점점 더 뚜렷해졌네요. 하반기에 우리가 고민해야 할 이슈들: 이란 전쟁, 호르무즈 봉쇄 장기화 여부, 그리고 레버리지 ETF 과열 여부가 핵심입니다.',
        summary: '5월 역대 최강 강세장에도 하반기 이란·레버리지 ETF 과열을 경계하라.'
      }
    ],
  },
  invest: {
    title: 'AI·반도체 슈퍼사이클',
    subtitle: 'Claude가 작성한 오늘의 메모 · 5월 31일 09:00 · 4분 읽기',
    sections: [
      { h: '한 줄 요약', body: 'KOSPI 8,476 돌파·S&P 9주 연속 상승으로 강세장이 절정에 달한 가운데, OpenAI IPO·Cerebras 상장·정부 양자 투자로 AI·반도체 수혜 섹터가 구조적 재평가 국면에 진입했습니다.' },
      { h: '오늘의 변수', body: '①이란 휴전 협상 진전 여부(유가·채권 금리 방향 결정) ②미 연준 신임 의장 첫 공식 발언(하반기 금리 경로 힌트) ③OpenAI IPO 공개 시점 및 밸류에이션 확정(AI 투자 심리 바로미터) ④KOSPI 레버리지 ETF 수급 과열 여부(단기 조정 트리거).' },
      { h: '포지셔닝', body: '단기(1-3개월): 반도체(SK하이닉스·NVDA)·AI 칩(CBRS) 비중 유지. 이란 협상 타결 시 채권(TLT)·금(GLD) 비중 일부 축소 고려. 중기(6-12개월): 양자컴퓨팅(IONQ·RGTI) 정부 지원 모멘텀 활용한 분할 매수. 미 달러 약세 기조 지속 시 신흥국 자산 비중 확대 검토.' },
      { h: '리스크', body: '①이란 협상 결렬 → 호르무즈 재봉쇄 → 유가 급등·인플레 재확산 ②OpenAI IPO 실망감 → AI 밸류에이션 전반 조정 ③레버리지 ETF 강제청산 발생 시 KOSPI 급락 ④미 연준 신임 의장 매파 발언 → 달러 강세·글로벌 금리 상승.' }
    ],
    watchlist: [
      { sym: '000660', name: 'SK하이닉스', val: '298,500', pct: '+3.12%', up: true, note: 'AI 메모리 수요 + KOSPI 강세 주도주' },
      { sym: '005930', name: '삼성전자', val: '98,700', pct: '+2.85%', up: true, note: 'HBM 공급 확대·파운드리 수주 기대' },
      { sym: 'NVDA', name: 'NVIDIA', val: '$1,082', pct: '+1.44%', up: true, note: 'AI 칩 독주·Cerebras 경쟁에도 플랫폼 우위 유지' },
      { sym: 'CBRS', name: 'Cerebras', val: '$192', pct: '+3.78%', up: true, note: 'IPO 첫날 +68% 급등 AI 추론 칩 신예' },
      { sym: 'IONQ', name: 'IonQ', val: '$28.40', pct: '+4.20%', up: true, note: '볼더 R&D 연구소 개소·정부 투자 리스트 제외에도 독자 성장' },
      { sym: 'RGTI', name: 'Rigetti Computing', val: '$12.80', pct: '+30.00%', up: true, note: '미 정부 $1억 투자 + 지분 취득 발표' },
      { sym: 'TLT', name: 'iShares 20Y ETF', val: '$89.50', pct: '+0.56%', up: true, note: '이란 협상 기대로 금리 하락·채권 반등' },
      { sym: 'GLD', name: 'SPDR Gold ETF', val: '$218.40', pct: '+0.32%', up: true, note: '지정학 불확실성 헤지 수요 유지' },
      { sym: 'VYM', name: 'Vanguard High Div.', val: '$124.80', pct: '+0.18%', up: true, note: '금리 하락 국면 배당주 매력 재부각' },
      { sym: 'BTC', name: 'Bitcoin', val: '$73,906', pct: '-0.18%', up: false, note: '강세장 속 위험자산 선호·매크로 변수 주시' },
    ],
    portfolio: [
      { asset: '국내주식', pct: 35, color: '#3DDC97',
        tickers: [{ sym: '000660', name: 'SK하이닉스' }, { sym: '005930', name: '삼성전자' }],
        note: 'KOSPI 강세장 + AI 메모리 수혜 최대 종목' },
      { asset: '미국주식', pct: 25, color: '#5B9BD5',
        tickers: [{ sym: 'NVDA', name: 'NVIDIA' }, { sym: 'CBRS', name: 'Cerebras' }],
        note: 'AI 칩 플랫폼 독주(NVDA) + AI IPO 신예(CBRS) 양날개' },
      { asset: '채권', pct: 15, color: '#9B8EC4',
        tickers: [{ sym: 'TLT', name: 'iShares 20Y ETF' }],
        note: '이란 협상 기대·금리 하락 추세로 채권 반등 국면' },
      { asset: '금', pct: 10, color: '#F5C518',
        tickers: [{ sym: 'GLD', name: 'SPDR Gold ETF' }],
        note: '이란 지정학 리스크 + 달러 약세 기조 헤지' },
      { asset: '배당주', pct: 5, color: '#E08A6E',
        tickers: [{ sym: 'VYM', name: 'Vanguard High Div.' }],
        note: '금리 하락 국면 배당주 매력 재부각' },
      { asset: '비트코인', pct: 10, color: '#F7931A',
        tickers: [{ sym: 'BTC', name: 'Bitcoin' }],
        note: '강세장 위험자산 선호 + 반감기 이후 공급 감소' },
    ],
  },
};


window.BRIEF_ARCHIVE = { '2026-05-31': TODAY, '2026-05-30': D_0530, '2026-05-29': D_0529 };
window.BRIEF_DATES   = ['2026-05-31', '2026-05-30', '2026-05-29'];
window.BRIEF_TODAY   = '2026-05-31';
window.BRIEF_USER    = '재현';
window.BRIEF_DATA    = TODAY;
// S3 dated upload test 2026-05-31 06:12:09
