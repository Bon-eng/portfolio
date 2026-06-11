import Header from './components/Header'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Works from './components/Works'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <Hero />
        <WhatIDo />
        <Works />
        <TechStack />
        <Contact />
      </main>
      <footer className="border-t border-gray-800 py-8 text-center text-slate-600 text-sm">
        © 2025 K.H. All rights reserved.
      </footer>
    </div>
  )
}

export default App
