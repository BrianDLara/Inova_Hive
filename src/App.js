import React, { useState } from 'react'

import Nav from './components/Nav'
import MissionStatement from './components/MissionStatement'
const App = () => {
  const [mode, setMode] = useState('light') // default mode is light

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  return (
    <div className={mode === 'dark' ? 'bg-gray-900 text-white' : ''}>
      <header>
        <Nav mode={mode} toggleMode={toggleMode} />
      </header>
      <main>
        <MissionStatement mode={mode} />
      </main>
    </div>
  )
}

export default App
