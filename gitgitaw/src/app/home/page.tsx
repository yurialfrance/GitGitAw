import React from 'react'
import Footer from '../../Components/Footer'

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64, padding: '48px 56px' }}>
      <HeroSection />
      <FeaturesSection />
      <QuickPathSection />
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <div style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
      {/* Left */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
          <div style={{ padding: '6px 14px', background: 'var(--active-bg)', border: '1px solid var(--active-border)', borderRadius: 20 }}>
            <span style={{ color: 'var(--accent)', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 500 }}>🌟  Libre at Open Source</span>
          </div>
        </div>
        {/* Heading */}
        <h1 style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.15, color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}>
          Handa ka na bang{'\n'}matuto ng Git?
        </h1>
        {/* Subtitle */}
        <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>
          Step-by-step guide para sa mga Pinoy developers. Walang judgement, puro learning lang!
        </p>
        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a href="/lessons/getting-started" style={{ padding: '14px 28px', background: 'var(--accent-dim)', color: '#ffffff', borderRadius: 8, fontWeight: 600, fontSize: 15, fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
            🚀  Let's Git
          </a>
          <a href="#features" style={{ padding: '14px 28px', border: '1px solid var(--border)', color: 'var(--text-primary)', borderRadius: 8, fontWeight: 500, fontSize: 15, fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
            Ano nga ba ang Git?
          </a>
        </div>
      </div>

      {/* Right — code block (intentionally always dark like a real terminal) */}
      <div style={{ width: 480, background: '#161b22', border: '1px solid #30363d', borderRadius: 10, overflow: 'hidden', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10 }}>
          <div style={{ background: '#21262d', borderRadius: 4, padding: '3px 8px', fontSize: 12, color: '#8b949e', fontFamily: 'JetBrains Mono, monospace' }}>bash</div>
          <div style={{ border: '1px solid #30363d', borderRadius: 4, padding: '4px 8px', fontSize: 12, color: '#8b949e', fontFamily: 'JetBrains Mono, monospace', cursor: 'pointer' }}>Copy</div>
        </div>
        <div style={{ height: 1, background: '#30363d', marginBottom: 4 }} />
        {/* Code lines */}
        {[
          { text: '$ git init', green: true },
          { text: 'Initialized empty Git repository in ~/my-project', green: false },
          { text: ' ', green: false },
          { text: '$ git add .', green: true },
          { text: '$ git commit -m "Unang commit ko!"', green: true },
          { text: '[main (root-commit) a1b2c3d] Unang commit ko!', green: false },
          { text: ' 1 file changed, 1 insertion(+)', green: false },
        ].map((line, i) => (
          <div key={i} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: line.green ? '#3fb950' : '#8b949e' }}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  )
}

const features = [
  { icon: '🇵🇭', title: 'Para sa Pinoy', desc: 'Explained in Taglish para mas madaling intindihin. Walang malalim na jargon, puro praktikal!' },
  { icon: '⚡', title: 'Beginner-Friendly', desc: 'Wala kang alam? Ok lang! Magsimula tayo sa zero. Walang assumptions, step by step tayo.' },
  { icon: '🛠️', title: 'Hands-on', desc: 'May mga practice projects at real challenges para ma-apply mo agad ang natututo mo.' },
]

function FeaturesSection() {
  return (
    <div id="features" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}>Bakit GitGit Aw?</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 8, fontSize: 16, fontFamily: 'Inter, sans-serif' }}>Dinisenyo para sa mga Pinoy developers na gustong matuto nang tama.</p>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        {features.map(f => (
          <div key={f.title} style={{ flex: 1, background: 'var(--bg-tertiary)', border: '1px solid var(--border)', borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ width: 48, height: 48, background: 'var(--active-bg)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
              {f.icon}
            </div>
            <h3 style={{ fontWeight: 600, fontSize: 18, color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}>{f.title}</h3>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const steps = [
  { num: '01', title: '💻  Install Git',       desc: 'I-setup ang Git sa iyong computer. Libre at madali!',                          active: true },
  { num: '02', title: '📝  First Commit',       desc: 'Gawin ang iyong unang git commit. Hello world ng Git!',                        active: false },
  { num: '03', title: '🚀  Push to GitHub',     desc: 'I-upload ang code mo sa GitHub para ma-share sa mundo!',                       active: false },
  { num: '04', title: '🤝  Collaborate',        desc: 'Makipagtulungan sa ibang developers gamit ang pull requests!',                  active: false },
]

function QuickPathSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}>Saan ka magsisimula?</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 8, fontSize: 15, fontFamily: 'Inter, sans-serif' }}>Sundan ang landas na ito para maging Git pro ka in no time!</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {steps.map((step, i) => (
          <React.Fragment key={step.num}>
            <div style={{ flex: 1, background: 'var(--bg-tertiary)', border: `1px solid ${step.active ? 'var(--active-border)' : 'var(--border)'}`, borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontSize: 11, color: step.active ? 'var(--accent-dim)' : 'var(--text-muted)', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>STEP {step.num}</div>
              <h4 style={{ fontWeight: 600, fontSize: 16, color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}>{step.title}</h4>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5, fontFamily: 'Inter, sans-serif' }}>{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div style={{ padding: '0 8px', fontSize: 24, color: 'var(--border)', flexShrink: 0 }}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
