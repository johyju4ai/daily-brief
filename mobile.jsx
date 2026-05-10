// mobile.jsx — Mobile daily briefing with date picker

function MFont() { return '"Pretendard", "Pretendard Variable", -apple-system, "Apple SD Gothic Neo", sans-serif'; }
function MMono() { return '"IBM Plex Mono", ui-monospace, monospace'; }

function MTokens(dark) {
  return dark ? {
    bg:'#0E0E10', panel:'#16161A', panel2:'#1C1C22', border:'#26262E',
    text:'#F5F2EC', text2:'#9C968A', text3:'#5F5B53', accent:'#E08A6E',
    accentSoft:'rgba(217,119,87,0.14)', up:'#3DDC97', down:'#F36F6F',
  } : {
    bg:'#FAFAF7', panel:'#FFFFFF', panel2:'#F5F1EA', border:'#E8E4DC',
    text:'#1A1A1A', text2:'#6B6258', text3:'#A39B8E', accent:'#D97757',
    accentSoft:'rgba(217,119,87,0.10)', up:'#1F8A5B', down:'#C9483B',
  };
}

function MDateStrip({ t, date, setDate }) {
  const dates = window.BRIEF_DATES;
  const MM = MMono();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current.querySelector('[data-active="1"]');
    if (el) el.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
  }, [date]);
  return (
    <div ref={ref} style={{
      display:'flex', gap: 6, padding:'8px 14px',
      overflowX:'auto', borderBottom:`1px solid ${t.border}`, background: t.panel,
    }}>
      {dates.map(d => {
        const data = window.BRIEF_ARCHIVE[d];
        const active = d === date;
        const today = d === window.BRIEF_TODAY;
        return (
          <button key={d} data-active={active ? '1' : '0'} onClick={() => setDate(d)} style={{
            all:'unset', cursor:'pointer', flex:'0 0 auto',
            padding:'6px 12px', borderRadius: 999,
            background: active ? t.accent : 'transparent',
            border: `1px solid ${active ? t.accent : t.border}`,
            color: active ? '#fff' : t.text2,
            display:'flex', alignItems:'center', gap: 6,
          }}>
            <span style={{ fontSize: 12, fontWeight: active ? 600 : 500 }}>{data.date.shortLabel}</span>
            {today && <span style={{ fontFamily: MM, fontSize: 8, letterSpacing:'0.14em', opacity: 0.85 }}>TODAY</span>}
          </button>
        );
      })}
    </div>
  );
}

function MMobile({ tab, setTab, date, setDate, dark }) {
  const t = MTokens(dark);
  const FS = MFont(), MM = MMono();
  const D = window.BRIEF_ARCHIVE[date] || window.BRIEF_ARCHIVE[window.BRIEF_TODAY];
  const isToday = D.date.isToday;

  const tabs = [
    { id:'ai', k:'AI', n: D.ai.items.length },
    { id:'econ', k:'경제', n: D.econ.items.length },
    { id:'col', k:'컬럼', n: D.columns.items.length },
    { id:'inv', k:'투자', n: 1 },
  ];

  return (
    <div style={{
      width:'100%', height:'100%', background:t.bg, color:t.text,
      fontFamily: FS, display:'flex', flexDirection:'column', overflow:'hidden',
      position:'relative',
    }}>
      <div style={{ padding:'14px 18px 10px', borderBottom:`1px solid ${t.border}` }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:22, height:22, borderRadius:6, background:t.accent, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily: MM, fontWeight: 700, fontSize: 11 }}>※</div>
          <div style={{ fontWeight: 700, letterSpacing:'-0.01em' }}>Daily Brief</div>
          {!isToday && (
            <span style={{
              padding:'2px 7px', borderRadius: 999, marginLeft: 4,
              background: t.accentSoft, color: t.accent,
              fontFamily: MM, fontSize: 9, letterSpacing:'0.12em',
            }}>ARCHIVE</span>
          )}
          <span style={{ marginLeft:'auto', fontFamily: MM, fontSize: 10, color: t.text3 }}>{isToday ? '06:00' : '보관'}</span>
        </div>
        <div style={{ marginTop: 8, fontSize: 12, color: t.text2 }}>{D.date.label}</div>
      </div>

      <MDateStrip t={t} date={date} setDate={setDate}/>

      <div style={{
        display:'flex', gap: 14, padding:'10px 18px', overflowX:'auto',
        borderBottom:`1px solid ${t.border}`, background: t.panel,
      }}>
        {D.marketStrip.slice(0, 5).map(m => (
          <div key={m.sym} style={{ flex:'0 0 auto' }}>
            <div style={{ fontFamily: MM, fontSize: 9, color: t.text3 }}>{m.sym}</div>
            <div style={{ display:'flex', gap:4, alignItems:'baseline' }}>
              <span style={{ fontFamily: MM, fontSize: 11, fontWeight: 600 }}>{m.val}</span>
              <span style={{ fontFamily: MM, fontSize: 9, color: m.up ? t.up : t.down }}>{m.pct}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display:'flex', padding:'0 12px', gap: 4, borderBottom:`1px solid ${t.border}`, background: t.panel }}>
        {tabs.map(tb => {
          const a = tab === tb.id;
          return (
            <button key={tb.id} onClick={() => setTab(tb.id)} style={{
              all:'unset', cursor:'pointer', flex:1, textAlign:'center',
              padding:'10px 0', fontSize: 12,
              color: a ? t.text : t.text2, fontWeight: a ? 600 : 500,
              borderBottom:`2px solid ${a ? t.accent : 'transparent'}`,
            }}>
              {tb.k} <span style={{ fontFamily: MM, fontSize: 9, color: t.text3, marginLeft: 3 }}>{tb.n}</span>
            </button>
          );
        })}
      </div>

      <div style={{ flex:1, overflowY:'auto', padding:'14px 18px 80px' }}>
        {tab === 'ai'   && <MNews t={t} data={D.ai}/>}
        {tab === 'econ' && <MNews t={t} data={D.econ}/>}
        {tab === 'col'  && <MColumns t={t} D={D}/>}
        {tab === 'inv'  && <MInvest t={t} D={D}/>}
      </div>

      <div style={{
        position:'absolute', bottom: 28, left:'50%', transform:'translateX(-50%)',
        background: t.text, color: t.bg, padding:'11px 18px', borderRadius: 999,
        display:'flex', alignItems:'center', gap: 8, fontSize: 13, fontWeight: 600,
        boxShadow:'0 6px 20px rgba(0,0,0,0.25)',
      }}>
        <span style={{ width: 16, height: 16, borderRadius: 4, background: t.accent, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily: MM, fontSize: 9, fontWeight: 700 }}>※</span>
        Ask Claude
      </div>
    </div>
  );
}

function MNews({ t, data }) {
  const MM = MMono();
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 18 }}>
      <div style={{ padding: 14, background: t.panel2, borderRadius: 8, borderLeft:`2px solid ${t.accent}` }}>
        <div style={{ fontFamily: MM, fontSize: 9, color: t.accent, letterSpacing:'0.14em', textTransform:'uppercase' }}>오늘의 요약</div>
        <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.55, color: t.text, textWrap:'pretty' }}>{data.summary}</div>
      </div>
      {data.items.map((it, i) => {
        const high = it.weight === 'high';
        return (
          <article key={i} style={{ paddingBottom: 14, borderBottom:`1px solid ${t.border}` }}>
            <div style={{ display:'flex', gap: 8, alignItems:'center', marginBottom: 8 }}>
              <span style={{
                fontFamily: MM, fontSize: 9, padding:'2px 6px', borderRadius: 3,
                color: high ? t.accent : t.text2,
                background: high ? t.accentSoft : 'transparent',
                border: `1px solid ${high ? t.accent + '40' : t.border}`,
                letterSpacing:'0.06em',
              }}>{high ? 'KEY' : 'NEWS'}</span>
              <span style={{ fontFamily: MM, fontSize: 10, color: t.text3 }}>{it.time} · {it.source}</span>
            </div>
            <h3 style={{
              margin: 0, fontSize: high ? 16 : 13.5,
              fontWeight: high ? 600 : 500, lineHeight: 1.4, letterSpacing:'-0.01em',
            }}>{it.headline}</h3>
            {high && it.bullets && (
              <ul style={{ margin:'10px 0 0', padding: 0, listStyle:'none', display:'flex', flexDirection:'column', gap: 6 }}>
                {it.bullets.map((b, j) => (
                  <li key={j} style={{ display:'flex', gap: 8, fontSize: 12, color: t.text2, lineHeight: 1.5 }}>
                    <span style={{ fontFamily: MM, color: t.accent, fontSize: 9, paddingTop: 3 }}>{String(j+1).padStart(2,'0')}</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </div>
  );
}

function MColumns({ t, D }) {
  const MM = MMono();
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
      {D.columns.items.map((c, i) => (
        <article key={i} style={{ border:`1px solid ${t.border}`, borderRadius: 8, padding: 12, background: t.panel }}>
          <div style={{ display:'flex', gap: 10, alignItems:'center' }}>
            <div style={{ width:32, height:32, borderRadius:'50%', background:c.color, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily: MM, fontSize: 11, fontWeight: 600 }}>{c.avatar}</div>
            <div style={{ flex:1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{c.name}</div>
              <div style={{ fontSize: 11, color: t.text2 }}>{c.title}</div>
            </div>
            <span style={{ fontFamily: MM, fontSize: 9, color: t.text3 }}>{c.time}</span>
          </div>
          <div style={{ marginTop: 10, fontSize: 12.5, color: t.text2, lineHeight: 1.55, fontStyle:'italic' }}>“{c.post.slice(0, 90)}…”</div>
          <div style={{ marginTop: 10, paddingTop: 10, borderTop:`1px solid ${t.border}`, display:'flex', gap: 8 }}>
            <span style={{ fontFamily: MM, fontSize: 9, color: t.accent, paddingTop: 2, letterSpacing:'0.12em' }}>요약</span>
            <span style={{ flex:1, fontSize: 12.5, lineHeight: 1.5 }}>{c.summary}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

function MInvest({ t, D }) {
  const d = D.invest;
  const MM = MMono();
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 18 }}>
      <div>
        <div style={{ fontFamily: MM, fontSize: 9, color: t.accent, letterSpacing:'0.14em', textTransform:'uppercase' }}>INVESTMENT MEMO · CLAUDE</div>
        <h2 style={{ margin:'8px 0 0', fontSize: 18, fontWeight: 700, letterSpacing:'-0.02em', lineHeight: 1.3 }}>{d.title}</h2>
        <div style={{ marginTop: 6, fontFamily: MM, fontSize: 10, color: t.text3 }}>{d.subtitle}</div>
      </div>
      {d.sections.map((s, i) => (
        <section key={i}>
          <div style={{ fontFamily: MM, fontSize: 9, color: t.accent, letterSpacing:'0.14em', textTransform:'uppercase', marginBottom: 6 }}>
            {String(i+1).padStart(2,'0')} · {s.h}
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: t.text, textWrap:'pretty' }}>{s.body}</p>
        </section>
      ))}
      <div>
        <div style={{ fontFamily: MM, fontSize: 9, color: t.text3, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom: 8 }}>WATCHLIST</div>
        <div style={{ border:`1px solid ${t.border}`, borderRadius: 8, overflow:'hidden' }}>
          {d.watchlist.map((w, i) => (
            <div key={w.sym} style={{
              display:'grid', gridTemplateColumns:'1fr auto', gap: 10,
              padding:'10px 12px', borderTop: i ? `1px solid ${t.border}`:'none',
              background: t.panel,
            }}>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 500 }}>{w.name}</div>
                <div style={{ fontFamily: MM, fontSize: 9, color: t.text3 }}>{w.sym} · {w.note}</div>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ fontFamily: MM, fontSize: 12, fontWeight: 600 }}>{w.val}</div>
                <div style={{ fontFamily: MM, fontSize: 9, color: w.up ? t.up : t.down }}>{w.pct}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.MMobile = MMobile;
