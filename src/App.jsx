// import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Programs/>
      </div>
    </div>
  )
}

export default App