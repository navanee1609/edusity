// import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What we offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title=' Campus Images'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What our Student says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch with Us'/>


      </div>
    </div>
  )
}

export default App