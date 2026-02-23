import { NavLink } from "react-router-dom"
import { Home, Rocket, BookOpen, GitBranch, Github, Users, Zap, Terminal, FileText, Target, Trophy, MessageCircle, BookMarked, Settings } from "lucide-react"

const navItems = [
  { label: 'Home',                 to: '/',                            icon: Home },
  { label: 'Getting Started',      to: '/lessons/getting-started',     icon: Rocket },
  { label: 'The Basics',           to: '/lessons/the-basics',          icon: BookOpen },
  { label: 'Branching & Merging',  to: '/lessons/branching-merging',   icon: GitBranch },
  { label: 'GitHub Essentials',    to: '/lessons/github-essentials',   icon: Github },
  { label: 'Collaboration',        to: '/lessons/collaboration',       icon: Users },
  { label: 'Merge Conflicts',      to: '/lessons/merge-conflicts',     icon: Zap },
  { label: 'Command Cheat Sheet',  to: '/lessons/cheat-sheet',         icon: Terminal },
  { label: 'Conventional Commits', to: '/lessons/conventional-commits',icon: FileText },
  { label: 'Practice Projects',    to: '/lessons/practice',            icon: Target },
  { label: 'Challenges',           to: '/lessons/challenges',          icon: Trophy },
]

const bottomItems = [
  { label: 'Community',  to: '/community', icon: MessageCircle },
  { label: 'Glossary',   to: '/glossary',  icon: BookMarked },
  { label: 'Settings',   to: '/settings',  icon: Settings },
]

export default function Sidebar() {
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: '#161b22', borderRight: '1px solid #30363d', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      {/* Logo */}
      <div style={{ padding: '24px 20px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 22 }}>🐙</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 17, color: '#e6edf3' }}>GitGit Aw</span>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#8b949e' }}>Learn Git the Pinoy way!</div>
      </div>
      <div style={{ height: 1, background: '#30363d' }} />

      {/* Main nav */}
      <nav style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {navItems.map(item => {
        const Icon = item.icon
        return (
          <NavLink key={item.to} to={item.to} end={item.to === '/'}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 12px', borderRadius: 6,
              fontFamily: 'JetBrains Mono, monospace', fontSize: 13,
              fontWeight: isActive ? 500 : 400,
              color: isActive ? '#e6edf3' : '#8b949e',
              background: isActive ? '#1c2b1c' : 'transparent',
              borderLeft: isActive ? '3px solid #238636' : '3px solid transparent',
              textDecoration: 'none',
            })}>
            <Icon size={16} />
            {item.label}
          </NavLink>
        )
      })}
      </nav>

      <div style={{ flex: 1 }} />
      <div style={{ height: 1, background: '#30363d' }} />

      {/* Bottom nav */}
      <nav style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {bottomItems.map(item => (
          <NavLink key={item.to} to={item.to}
            style={{ display: 'block', padding: '10px 12px', borderRadius: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#8b949e', textDecoration: 'none' }}>
            {item.label}
          </NavLink>
        ))}
        {/* Dark Mode toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, gap: 8 }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#8b949e' }}>🌙  Dark Mode</span>
          <div style={{ width: 44, height: 24, background: '#238636', borderRadius: 12, padding: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: 20, height: 20, background: '#ffffff', borderRadius: 10 }} />
          </div>
        </div>
      </nav>
    </aside>
  )
}