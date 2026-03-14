import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import gitHubLogo from '../../assets/github-60.svg'
import gitLogo from '../../assets/git.svg'
import windowsLogo from '../../assets/windows.svg'
import macLogo from '../../assets/mac-60.svg'
import linuxLogo from '../../assets/linux.svg'

export default function BasicsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64, padding: '48px 56px' }}>
      <Footer />
    </div>
  )
}

