import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" />
            <img src={play_icon} alt="" />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow Leader today</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat at rerum omnis doloribus maxime, nulla quis nam consectetur pariatur esse? Temporibus ex, numquam ducimus id nisi, quas qui delectus eaque magnam modi iusto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quibusdam quos neque voluptate reiciendis sequi nihil doloribus nemo dolore facere accusamus nobis illo, officiis officia alias laudantium excepturi aperiam saepe nisi ipsam quisquam vero eaque inventore veritatis. Labore quasi veniam voluptates saepe. Libero, eius.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur neque laboriosam aliquam dolore minus tenetur suscipit et commodi eum, repudiandae officia blanditiis!</p>
        </div>

    </div>
  )
}

export default About