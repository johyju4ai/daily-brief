// dashboard.jsx — Desktop daily briefing dashboard
// Sidebar (date picker + tabs) | Main (tab content) | Right rail (Ask Claude)

// ── Tokens ──────────────────────────────────────────────────────────────
function useTokens(dark) {
  return React.useMemo(() => dark ? {
    bg: '#0E0E10', panel: '#16161A', panel2: '#1C1C22', border: '#26262E',
    text: '#F5F2EC', text2: '#9C968A', text3: '#5F5B53', accent: '#E08A6E',
    accentSoft: 'rgba(217,119,87,0.14)', up: '#3DDC97', down: '#F36F6F',
    headerBg: 'rgba(14,14,16,0.92)',
  } : {
    bg: '#FAFAF7', panel: '#FFFFFF', panel2: '#F5F1EA', border: '#E8E4DC',
    text: '#1A1A1A', text2: '#6B6258', text3: '#A39B8E', accent: '#D97757',
    accentSoft: 'rgba(217,119,87,0.10)', up: '#1F8A5B', down: '#C9483B',
    headerBg: 'rgba(250,250,247,0.92)',
  }, [dark]);
}

const FONT_SANS = '"Pretendard", "Pretendard Variable", -apple-system, "Apple SD Gothic Neo", sans-serif';
const FONT_MONO = '"IBM Plex Mono", "JetBrains Mono", ui-monospace, monospace';

// ── Tiny atoms ──────────────────────────────────────────────────────────
function Dot({ color, size = 6 }) {
  return <span style={{ display:'inline-block', width:size, height:size, borderRadius:'50%', background:color }}/>;
}
function Pill({ children, t, weight }) {
  const isHigh = weight === 'high';
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:5,
      fontFamily: FONT_MONO, fontSize: 10, letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '3px 7px', borderRadius: 3,
      color: isHigh ? t.accent : t.text2,
      background: isHigh ? t.accentSoft : 'transparent',
      border: isHigh ? `1px solid ${t.accent}40` : `1px solid ${t.border}`,
    }}>
      {isHigh && <Dot color={t.accent} size={5}/>}
      {children}
    </span>
  );
}
function Mono({ children, color, size = 11, style }) {
  return <span style={{ fontFamily: FONT_MONO, fontSize: size, color, letterSpacing: '0.02em', ...style }}>{children}</span>;
}

// ── Date picker (sidebar) ───────────────────────────────────────────────
function DatePicker({ t, date, setDate }) {
  const dates = window.BRIEF_DATES;
  const idx = dates.indexOf(date);
  const D = window.BRIEF_ARCHIVE[date];
  const isToday = date === window.BRIEF_TODAY;
  const [open, setOpen] = React.useState(false);

  const go = (delta) => {
    const next = idx + delta;
    if (next >= 0 && next < dates.length) setDate(dates[next]);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Mono color={t.text3} size={10} style={{ textTransform:'uppercase', letterSpacing:'0.12em' }}>
        {isToday ? '오늘' : '아카이브'}
      </Mono>
      <div style={{ marginTop: 6, display:'flex', alignItems:'center', gap: 4 }}>
        <button onClick={() => go(1)} disabled={idx >= dates.length - 1} style={arrowBtn(t, idx >= dates.length - 1)}>‹</button>
        <button onClick={() => setOpen(o => !o)} style={{
          all:'unset', cursor:'pointer', flex: 1, textAlign:'center',
          padding: '6px 8px', borderRadius: 6,
          background: open ? t.accentSoft : 'transparent',
          border: `1px solid ${open ? t.accent + '40' : t.border}`,
          color: t.text, fontWeight: 600, fontSize: 14,
        }}>{D.date.shortLabel}</button>
        <button onClick={() => go(-1)} disabled={idx <= 0} style={arrowBtn(t, idx <= 0)}>›</button>
      </div>
      <Mono color={t.text2} size={10} style={{ marginTop: 4, display:'block' }}>
        last sync · {isToday ? '06:00 KST' : '아카이브 보관'}
      </Mono>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 30,
          background: t.panel, border: `1px solid ${t.border}`, borderRadius: 8,
          boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
          padding: 6, display:'flex', flexDirection:'column', gap: 2,
        }}>
          <Mono color={t.text3} size={10} style={{ padding: '6px 8px', textTransform:'uppercase', letterSpacing:'0.12em' }}>지난 7일</Mono>
          {dates.map(d => {
            const data = window.BRIEF_ARCHIVE[d];
            const active = d === date;
            const today = d === window.BRIEF_TODAY;
            return (
              <button key={d} onClick={() => { setDate(d); setOpen(false); }} style={{
                all:'unset', cursor:'pointer',
                padding: '8px 10px', borderRadius: 6,
                display:'flex', alignItems:'center', justifyContent:'space-between',
                background: active ? t.accentSoft : 'transparent',
                color: active ? t.text : t.text2,
              }}>
                <span style={{ fontSize: 13, fontWeight: active ? 600 : 500 }}>{data.date.shortLabel}</span>
                {today
                  ? <Mono color={t.accent} size={9} style={{ letterSpacing:'0.14em' }}>TODAY</Mono>
                  : <Mono color={t.text3} size={9}>아카이브</Mono>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
function arrowBtn(t, disabled) {
  return {
    all:'unset', cursor: disabled ? 'not-allowed' : 'pointer',
    width: 24, height: 28, borderRadius: 6,
    border: `1px solid ${t.border}`,
    color: disabled ? t.text3 : t.text2,
    display:'flex', alignItems:'center', justifyContent:'center',
    fontSize: 14, opacity: disabled ? 0.4 : 1,
  };
}

// ── Sidebar ─────────────────────────────────────────────────────────────
function Sidebar({ t, tab, setTab, date, setDate, D }) {
  const tabs = [
    { id:'ai',   k:'AI 뉴스',       n:D.ai.items.length },
    { id:'econ', k:'경제',          n:D.econ.items.length },
    { id:'col',  k:'컬럼 피드',     n:D.columns.items.length },
    { id:'inv',  k:'투자 인사이트', n:1 },
  ];
  return (
    <aside style={{
      width: 232, flex: '0 0 232px', borderRight: `1px solid ${t.border}`,
      padding: '24px 18px', display:'flex', flexDirection:'column', gap: 24,
      background: t.panel,
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7, background: t.accent,
          display:'flex', alignItems:'center', justifyContent:'center',
          color:'#fff', fontWeight:700, fontSize:13, fontFamily: FONT_MONO,
        }}>※</div>
        <div style={{ fontWeight: 700, color: t.text, letterSpacing:'-0.01em' }}>Daily Brief</div>
      </div>

      <DatePicker t={t} date={date} setDate={setDate}/>

      <nav style={{ display:'flex', flexDirection:'column', gap: 2 }}>
        <Mono color={t.text3} size={10} style={{ textTransform:'uppercase', letterSpacing:'0.12em', marginBottom: 8 }}>섹션</Mono>
        {tabs.map((tb, i) => {
          const active = tab === tb.id;
          return (
            <button key={tb.id} onClick={() => setTab(tb.id)} style={{
              all:'unset', cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'space-between',
              padding: '9px 10px', borderRadius: 6,
              background: active ? t.accentSoft : 'transparent',
              borderLeft: `2px solid ${active ? t.accent : 'transparent'}`,
              transition: 'background .15s',
            }}>
              <span style={{ display:'flex', alignItems:'center', gap: 10 }}>
                <Mono color={active ? t.accent : t.text3} size={10} style={{ width: 18 }}>{String(i+1).padStart(2,'0')}</Mono>
                <span style={{ color: active ? t.text : t.text2, fontWeight: active ? 600 : 500, fontSize: 14 }}>{tb.k}</span>
              </span>
              <Mono color={active ? t.accent : t.text3} size={10}>{tb.n}</Mono>
            </button>
          );
        })}
      </nav>

      <div style={{ marginTop:'auto', display:'flex', flexDirection:'column', gap: 10, paddingTop: 16, borderTop:`1px solid ${t.border}` }}>
        <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius:'50%',
            background:`linear-gradient(135deg, ${t.accent} 0%, #B7641A 100%)`,
            color:'#fff', display:'flex', alignItems:'center', justifyContent:'center',
            fontSize: 11, fontWeight: 600,
          }}>JH</div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ color: t.text, fontSize: 13, fontWeight: 500 }}>{window.BRIEF_USER}</div>
            <Mono color={t.text3} size={10}>Pro · 4 sources</Mono>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ── Top bar ─────────────────────────────────────────────────────────────
function TopBar({ t, D }) {
  const isToday = D.date.isToday;
  return (
    <div style={{
      borderBottom:`1px solid ${t.border}`, padding:'14px 32px',
      display:'flex', alignItems:'center', gap: 24, background: t.headerBg,
      backdropFilter:'blur(12px)', position:'sticky', top:0, zIndex: 5,
    }}>
      <div>
        <Mono color={t.text3} size={10} style={{ textTransform:'uppercase', letterSpacing:'0.14em' }}>
          {isToday ? '오늘의 브리핑' : '아카이브 · 과거 시점'}
        </Mono>
        <div style={{ color: t.text, fontWeight: 600, fontSize: 14, letterSpacing:'-0.01em' }}>{D.date.label}</div>
      </div>
      {!isToday && (
        <div style={{
          padding: '4px 10px', borderRadius: 999,
          background: t.accentSoft, color: t.accent,
          fontFamily: FONT_MONO, fontSize: 10, letterSpacing:'0.12em',
          border: `1px solid ${t.accent}40`,
        }}>ARCHIVE</div>
      )}
      <div style={{ flex: 1, display:'flex', gap: 22, overflow:'hidden' }}>
        {D.marketStrip.map(m => (
          <div key={m.sym} style={{ display:'flex', flexDirection:'column', minWidth: 0 }}>
            <Mono color={t.text3} size={10}>{m.sym}</Mono>
            <div style={{ display:'flex', alignItems:'baseline', gap: 6 }}>
              <Mono color={t.text} size={13} style={{ fontWeight: 600 }}>{m.val}</Mono>
              <Mono color={m.up ? t.up : t.down} size={11}>{m.pct}</Mono>
            </div>
          </div>
        ))}
      </div>
      <button style={{
        all:'unset', cursor:'pointer', padding:'8px 14px', borderRadius: 6,
        border:`1px solid ${t.border}`, color: t.text, fontSize: 12,
        display:'flex', alignItems:'center', gap: 8,
      }}>
        <Mono color={t.text2} size={10}>⌘K</Mono>
        <span>검색</span>
      </button>
    </div>
  );
}

// ── Tab header ──────────────────────────────────────────────────────────
function TabHeader({ t, kicker, title, summary, count }) {
  return (
    <div style={{ padding:'36px 40px 24px', borderBottom: `1px solid ${t.border}` }}>
      <div style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 14 }}>
        <Mono color={t.accent} size={10} style={{ textTransform:'uppercase', letterSpacing:'0.16em' }}>{kicker}</Mono>
        <div style={{ height: 1, flex: 1, background: t.border }}/>
        <Mono color={t.text3} size={10}>{count} items · 06:00 sync</Mono>
      </div>
      <h1 style={{ margin: 0, color: t.text, fontSize: 30, fontWeight: 700, letterSpacing:'-0.02em', lineHeight: 1.2 }}>{title}</h1>
      <p style={{ margin:'14px 0 0', color: t.text2, fontSize: 15, lineHeight: 1.6, maxWidth: 720, textWrap:'pretty' }}>{summary}</p>
    </div>
  );
}

// ── News tab ────────────────────────────────────────────────────────────
function NewsTab({ t, data, kicker }) {
  return (
    <div>
      <TabHeader t={t} kicker={kicker} title={`${data.label}`} summary={data.summary} count={data.items.length}/>
      <div style={{ padding:'24px 40px 60px' }}>
        {data.items.map((it, i) => <NewsCard key={i} t={t} it={it} idx={i+1}/>)}
      </div>
    </div>
  );
}

function NewsCard({ t, it, idx }) {
  const [open, setOpen] = React.useState(it.weight === 'high');
  const isHigh = it.weight === 'high';
  return (
    <article style={{
      borderTop:`1px solid ${t.border}`,
      padding: isHigh ? '22px 0' : '14px 0',
    }}>
      <div style={{ display:'flex', alignItems:'flex-start', gap: 18 }}>
        <Mono color={t.text3} size={11} style={{ width: 28, paddingTop: 3 }}>{String(idx).padStart(2,'0')}</Mono>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 8, flexWrap:'wrap' }}>
            <Pill t={t} weight={it.weight}>{isHigh ? 'KEY' : 'NEWS'}</Pill>
            <Mono color={t.text3} size={11}>{it.time}</Mono>
            <Mono color={t.text2} size={11}>· {it.source}</Mono>
          </div>
          <h3
            onClick={() => isHigh ? null : setOpen(o => !o)}
            style={{
              margin: 0, color: t.text,
              fontSize: isHigh ? 20 : 15,
              fontWeight: isHigh ? 600 : 500,
              letterSpacing:'-0.01em', lineHeight: 1.35,
              cursor: isHigh ? 'default' : 'pointer',
            }}>{it.headline}</h3>

          {isHigh && open && (
            <div style={{ marginTop: 16, display:'flex', flexDirection:'column', gap: 14 }}>
              <ul style={{ margin: 0, padding: 0, listStyle:'none', display:'flex', flexDirection:'column', gap: 8 }}>
                {it.bullets.map((b, j) => (
                  <li key={j} style={{ display:'flex', gap: 12, color: t.text, fontSize: 14, lineHeight: 1.55 }}>
                    <Mono color={t.accent} size={11} style={{ paddingTop: 3 }}>{String(j+1).padStart(2,'0')}</Mono>
                    <span style={{ flex: 1 }}>{b}</span>
                  </li>
                ))}
              </ul>
              <div style={{
                background: t.panel2, borderLeft: `2px solid ${t.accent}`,
                padding:'12px 14px', borderRadius:'0 4px 4px 0',
              }}>
                <Mono color={t.accent} size={10} style={{ textTransform:'uppercase', letterSpacing:'0.14em' }}>WHY IT MATTERS</Mono>
                <div style={{ marginTop: 6, color: t.text2, fontSize: 13.5, lineHeight: 1.6 }}>{it.why}</div>
              </div>
            </div>
          )}
        </div>
        {!isHigh && (
          <button onClick={() => setOpen(o => !o)} style={{
            all:'unset', cursor:'pointer', color: t.text3, padding: 4, fontSize: 14,
          }}>{open ? '−' : '+'}</button>
        )}
      </div>
    </article>
  );
}

// ── Columns ─────────────────────────────────────────────────────────────
function ColumnsTab({ t, D }) {
  const data = D.columns;
  return (
    <div>
      <TabHeader t={t} kicker="COLUMNISTS · FB FEED" title={data.label} summary={data.summary} count={data.items.length}/>
      <div style={{ padding:'28px 40px 60px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 16 }}>
        {data.items.map((c, i) => <ColumnCard key={i} t={t} c={c}/>)}
      </div>
    </div>
  );
}

function ColumnCard({ t, c }) {
  return (
    <article style={{
      border:`1px solid ${t.border}`, borderRadius: 8, background: t.panel,
      padding: 18, display:'flex', flexDirection:'column', gap: 14,
    }}>
      <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
        <div style={{
          width: 40, height: 40, borderRadius:'50%', background: c.color,
          color:'#fff', display:'flex', alignItems:'center', justifyContent:'center',
          fontSize: 13, fontWeight: 600, letterSpacing:'0.02em', fontFamily: FONT_MONO,
        }}>{c.avatar}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: t.text, fontWeight: 600, fontSize: 14 }}>{c.name}</div>
          <div style={{ color: t.text2, fontSize: 12 }}>{c.title}</div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end' }}>
          <Mono color={t.text3} size={10}>{c.time}</Mono>
          <Mono color={t.text3} size={10}>♥ {c.likes} · 💬 {c.comments}</Mono>
        </div>
      </div>
      <div style={{
        background: t.panel2, padding:'12px 14px', borderRadius: 6,
        color: t.text2, fontSize: 13, lineHeight: 1.55, fontStyle:'italic',
        borderLeft:`2px solid ${t.border}`,
      }}>“{c.post}”</div>
      <div style={{ display:'flex', gap: 10 }}>
        <Mono color={t.accent} size={10} style={{ textTransform:'uppercase', letterSpacing:'0.14em', paddingTop: 2 }}>SUMMARY</Mono>
        <div style={{ flex:1, color: t.text, fontSize: 13.5, lineHeight: 1.55 }}>{c.summary}</div>
      </div>
    </article>
  );
}

// ── Investment ──────────────────────────────────────────────────────────
function InvestTab({ t, D }) {
  const d = D.invest;
  return (
    <div>
      <div style={{ padding:'36px 40px 24px', borderBottom:`1px solid ${t.border}` }}>
        <div style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 14 }}>
          <Mono color={t.accent} size={10} style={{ textTransform:'uppercase', letterSpacing:'0.16em' }}>INVESTMENT MEMO · CLAUDE</Mono>
          <div style={{ height: 1, flex: 1, background: t.border }}/>
          <Mono color={t.text3} size={10}>{d.subtitle}</Mono>
        </div>
        <h1 style={{ margin: 0, color: t.text, fontSize: 30, fontWeight: 700, letterSpacing:'-0.02em', lineHeight: 1.25 }}>{d.title}</h1>
      </div>

      <div style={{ padding:'28px 40px', display:'grid', gridTemplateColumns:'1.5fr 1fr', gap: 36 }}>
        <div style={{ display:'flex', flexDirection:'column', gap: 24 }}>
          {d.sections.map((s, i) => (
            <section key={i}>
              <div style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 8 }}>
                <Mono color={t.accent} size={10} style={{ textTransform:'uppercase', letterSpacing:'0.16em' }}>{String(i+1).padStart(2,'0')} · {s.h}</Mono>
                <div style={{ height: 1, flex: 1, background: t.border }}/>
              </div>
              <p style={{ margin: 0, color: t.text, fontSize: 15, lineHeight: 1.65, textWrap:'pretty' }}>{s.body}</p>
            </section>
          ))}
        </div>
        <aside style={{ display:'flex', flexDirection:'column', gap: 12, position:'sticky', top: 80, alignSelf:'start' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <Mono color={t.text3} size={10} style={{ textTransform:'uppercase', letterSpacing:'0.14em' }}>WATCHLIST</Mono>
            <div style={{ height: 1, flex: 1, background: t.border }}/>
          </div>
          <div style={{ display:'flex', flexDirection:'column', border:`1px solid ${t.border}`, borderRadius: 8, overflow:'hidden' }}>
            {d.watchlist.map((w, i) => (
              <div key={w.sym} style={{
                display:'grid', gridTemplateColumns:'auto 1fr auto', gap: 10,
                padding:'12px 14px',
                borderTop: i ? `1px solid ${t.border}` : 'none',
                background: t.panel,
              }}>
                <Mono color={t.text3} size={10} style={{ width: 56 }}>{w.sym}</Mono>
                <div>
                  <div style={{ color: t.text, fontSize: 13, fontWeight: 500 }}>{w.name}</div>
                  <Mono color={t.text2} size={10}>{w.note}</Mono>
                </div>
                <div style={{ textAlign:'right' }}>
                  <Mono color={t.text} size={12} style={{ fontWeight: 600, display:'block' }}>{w.val}</Mono>
                  <Mono color={w.up ? t.up : t.down} size={10}>{w.pct}</Mono>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

// ── Ask Claude rail ─────────────────────────────────────────────────────
function AskClaude({ t, contextLabel, dateLabel }) {
  const [q, setQ] = React.useState('');
  const [thread, setThread] = React.useState([
    { who:'claude', text:`${dateLabel} · ${contextLabel} 관련해서 더 궁금한 점을 물어보세요.` },
  ]);
  const [busy, setBusy] = React.useState(false);

  // Reset thread when date or tab changes
  React.useEffect(() => {
    setThread([{ who:'claude', text:`${dateLabel} · ${contextLabel} 관련해서 더 궁금한 점을 물어보세요.` }]);
  }, [contextLabel, dateLabel]);

  const ask = async () => {
    if (!q.trim() || busy) return;
    const Q = q.trim();
    setThread(p => [...p, { who:'me', text: Q }]);
    setQ(''); setBusy(true);
    try {
      const ans = await window.claude.complete(`당신은 한국 사용자를 위한 일일 브리핑 어시스턴트입니다. 현재 보고 있는 날짜는 "${dateLabel}", 섹션은 "${contextLabel}"입니다. 답은 한국어로 4문장 이내, 사실 위주로. 질문: ${Q}`);
      setThread(p => [...p, { who:'claude', text: ans }]);
    } catch (e) {
      setThread(p => [...p, { who:'claude', text:'연결 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' }]);
    }
    setBusy(false);
  };

  const suggested = [
    '핵심을 한 문단으로',
    '한국 시장 영향은?',
    '이전 날짜와 비교해줘',
  ];

  return (
    <aside style={{
      width: 320, flex:'0 0 320px', borderLeft:`1px solid ${t.border}`,
      background: t.panel, display:'flex', flexDirection:'column',
    }}>
      <div style={{ padding:'20px 20px 14px', borderBottom:`1px solid ${t.border}` }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8, marginBottom: 8 }}>
          <div style={{ width: 18, height: 18, borderRadius: 4, background: t.accent, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize: 11, fontWeight: 700, fontFamily: FONT_MONO }}>※</div>
          <div style={{ color: t.text, fontWeight: 600, fontSize: 14 }}>Ask Claude</div>
          <Mono color={t.text3} size={10} style={{ marginLeft:'auto' }}>cowork</Mono>
        </div>
        <Mono color={t.text2} size={11}>{dateLabel} · {contextLabel}</Mono>
      </div>

      <div style={{ flex: 1, overflowY:'auto', padding: 20, display:'flex', flexDirection:'column', gap: 12 }}>
        {thread.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.who === 'me' ? 'flex-end' : 'flex-start',
            maxWidth:'88%', padding:'10px 12px', borderRadius: 8,
            background: m.who === 'me' ? t.accentSoft : t.panel2,
            border: m.who === 'me' ? `1px solid ${t.accent}40` : `1px solid ${t.border}`,
            color: t.text, fontSize: 13, lineHeight: 1.5, textWrap:'pretty',
          }}>{m.text}</div>
        ))}
        {busy && <div style={{ alignSelf:'flex-start' }}><Mono color={t.text3} size={11}>Claude 작성중…</Mono></div>}
      </div>

      <div style={{ padding:'12px 16px', borderTop:`1px solid ${t.border}`, display:'flex', flexDirection:'column', gap: 10 }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap: 6 }}>
          {suggested.map(s => (
            <button key={s} onClick={() => setQ(s)} style={{
              all:'unset', cursor:'pointer', fontSize: 11, padding:'4px 8px',
              borderRadius: 999, border:`1px solid ${t.border}`, color: t.text2,
            }}>{s}</button>
          ))}
        </div>
        <div style={{
          display:'flex', alignItems:'flex-end', gap: 8,
          border:`1px solid ${t.border}`, borderRadius: 8, padding:'8px 10px',
          background: t.bg,
        }}>
          <textarea value={q} onChange={e => setQ(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(); } }}
            placeholder="질문을 입력하세요…" rows={2}
            style={{
              flex: 1, resize:'none', border:'none', outline:'none',
              background:'transparent', color: t.text, fontSize: 13,
              fontFamily: FONT_SANS, lineHeight: 1.5, minHeight: 36,
            }}/>
          <button onClick={ask} disabled={busy || !q.trim()} style={{
            all:'unset', cursor: q.trim() ? 'pointer' : 'not-allowed',
            padding:'6px 10px', borderRadius: 6,
            background: q.trim() ? t.accent : t.panel2,
            color: q.trim() ? '#fff' : t.text3, fontSize: 12, fontWeight: 600,
          }}>↵</button>
        </div>
      </div>
    </aside>
  );
}

// ── Dashboard root ──────────────────────────────────────────────────────
function Dashboard({ tab, setTab, date, setDate, dark }) {
  const t = useTokens(dark);
  const D = window.BRIEF_ARCHIVE[date] || window.BRIEF_ARCHIVE[window.BRIEF_TODAY];

  React.useEffect(() => {
    const fn = (e) => {
      if (document.activeElement && document.activeElement.tagName === 'TEXTAREA') return;
      const map = { '1':'ai', '2':'econ', '3':'col', '4':'inv' };
      if (map[e.key] && !e.metaKey && !e.ctrlKey) setTab(map[e.key]);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [setTab]);

  let content, ctx;
  if (tab === 'ai')   { content = <NewsTab t={t} data={D.ai}   kicker="AI · MORNING WIRE"/>;        ctx = 'AI 뉴스'; }
  if (tab === 'econ') { content = <NewsTab t={t} data={D.econ} kicker="ECONOMY · MORNING WIRE"/>;   ctx = '경제 뉴스'; }
  if (tab === 'col')  { content = <ColumnsTab t={t} D={D}/>; ctx = '컬럼 피드'; }
  if (tab === 'inv')  { content = <InvestTab t={t} D={D}/>;  ctx = '투자 인사이트'; }

  return (
    <div style={{
      width:'100%', height:'100%', display:'flex',
      background: t.bg, color: t.text, fontFamily: FONT_SANS,
      fontSize: 14, letterSpacing:'-0.005em',
    }}>
      <Sidebar t={t} tab={tab} setTab={setTab} date={date} setDate={setDate} D={D}/>
      <main style={{ flex: 1, minWidth: 0, display:'flex', flexDirection:'column', overflow:'hidden' }}>
        <TopBar t={t} D={D}/>
        <div style={{ flex: 1, overflowY:'auto' }}>{content}</div>
      </main>
      <AskClaude t={t} contextLabel={ctx} dateLabel={D.date.shortLabel}/>
    </div>
  );
}

window.Dashboard = Dashboard;
