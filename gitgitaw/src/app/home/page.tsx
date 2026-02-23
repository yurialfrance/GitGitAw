import React from 'react'

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64, padding: '48px 56px' }}>
      <HeroSection />
      <FeaturesSection />
      <QuickPathSection />
      <FooterSection />
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
          <div style={{ padding: '6px 14px', background: '#1c2b1c', border: '1px solid #238636', borderRadius: 20 }}>
            <span style={{ color: '#3fb950', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 500 }}>🌟  Libre at Open Source</span>
          </div>
        </div>
        {/* Heading */}
        <h1 style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.15, color: '#e6edf3', fontFamily: 'Inter, sans-serif' }}>
          Handa ka na bang{'\n'}matuto ng Git?
        </h1>
        {/* Subtitle */}
        <p style={{ fontSize: 18, color: '#8b949e', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>
          Step-by-step guide para sa mga Pinoy developers. Walang judgement, puro learning lang!
        </p>
        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a href="/lessons/getting-started" style={{ padding: '14px 28px', background: '#238636', color: '#ffffff', borderRadius: 8, fontWeight: 600, fontSize: 15, fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
            🚀  Let's Git
          </a>
          <a href="#features" style={{ padding: '14px 28px', border: '1px solid #30363d', color: '#e6edf3', borderRadius: 8, fontWeight: 500, fontSize: 15, fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
            Ano nga ba ang Git?
          </a>
        </div>
      </div>

      {/* Right — code block */}
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
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#e6edf3', fontFamily: 'Inter, sans-serif' }}>Bakit GitGit Aw?</h2>
        <p style={{ color: '#8b949e', marginTop: 8, fontSize: 16, fontFamily: 'Inter, sans-serif' }}>Dinisenyo para sa mga Pinoy developers na gustong matuto nang tama.</p>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        {features.map(f => (
          <div key={f.title} style={{ flex: 1, background: '#21262d', border: '1px solid #30363d', borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ width: 48, height: 48, background: '#1c2b1c', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
              {f.icon}
            </div>
            <h3 style={{ fontWeight: 600, fontSize: 18, color: '#e6edf3', fontFamily: 'Inter, sans-serif' }}>{f.title}</h3>
            <p style={{ fontSize: 14, color: '#8b949e', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>{f.desc}</p>
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
        <h2 style={{ fontSize: 28, fontWeight: 700, color: '#e6edf3', fontFamily: 'Inter, sans-serif' }}>Saan ka magsisimula?</h2>
        <p style={{ color: '#8b949e', marginTop: 8, fontSize: 15, fontFamily: 'Inter, sans-serif' }}>Sundan ang landas na ito para maging Git pro ka in no time!</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {steps.map((step, i) => (
          <>
            <div key={step.num} style={{ flex: 1, background: '#21262d', border: `1px solid ${step.active ? '#238636' : '#30363d'}`, borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontSize: 11, color: step.active ? '#238636' : '#8b949e', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>STEP {step.num}</div>
              <h4 style={{ fontWeight: 600, fontSize: 16, color: '#e6edf3', fontFamily: 'Inter, sans-serif' }}>{step.title}</h4>
              <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.5, fontFamily: 'Inter, sans-serif' }}>{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div key={`arrow-${i}`} style={{ padding: '0 8px', fontSize: 24, color: '#30363d', flexShrink: 0 }}>→</div>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

function FooterSection() {
  return (
    <footer style={{ background: '#0a0d12', borderTop: '2px solid #238636', padding: '48px 0 28px', display: 'flex', flexDirection: 'column', gap: 28, margin: '0 -56px -48px', paddingLeft: 56, paddingRight: 56 }}>
      {/* 3-column layout */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 48 }}>
        {/* Brand column */}
        <div style={{ width: 280, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>🐙</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 17, fontWeight: 700, color: '#e6edf3' }}>GitGit Aw</span>
          </div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#8b949e' }}>Learn Git the Pinoy way!</div>
          <p style={{ fontSize: 13, color: '#6e7681', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>A free, open-source learning resource for Pinoy developers. Libre at para sa lahat.</p>
          <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, background: '#21262d', border: '1px solid #30363d', borderRadius: 6, padding: '7px 12px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#8b949e' }}>🔗  yurialfrance/GitGitAw</span>
          </div>
        </div>
        {/* Links column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 700, color: '#8b949e' }}>LINKS</div>
          <a href="#" style={{ fontSize: 13, color: '#238636', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>→  Source Code</a>
          <a href="#" style={{ fontSize: 13, color: '#8b949e', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>→  Apache-2.0 License</a>
          <a href="#" style={{ fontSize: 13, color: '#8b949e', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>→  Report an Issue</a>
        </div>
        {/* Creator column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 700, color: '#8b949e' }}>CREATED BY</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#e6edf3', fontFamily: 'Inter, sans-serif' }}>Yuri Alfrance Egipto</div>
          <a href="https://yuriegipto-ph.web.app" style={{ fontSize: 13, color: '#238636', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>yuriegipto-ph.web.app</a>
        </div>
      </div>

      <div style={{ height: 1, background: '#21262d' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#6e7681' }}>© 2026 GitGit Aw. Open source under Apache-2.0.</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#6e7681' }}>Made with ❤️ in the Philippines</span>
      </div>
    </footer>
  )
}