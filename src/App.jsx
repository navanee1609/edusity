// import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import VideoPlayer from './components/videoPlayer/VideoPlayer'
import { useState } from 'react'
function App() {
  let [playState,setPlayState]=useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What we offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title=' Campus Images'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What our Student says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch with Us'/>
      <Contact/>
      <Footer/>


      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App