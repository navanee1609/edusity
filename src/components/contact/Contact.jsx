import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
function Contact() {
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>Please feel free to reach us Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae blanditiis eaque deleniti tempore. Suscipit maiores ipsam tempore blanditiis vitae natus doloremque velit?</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@edusity.com</li>
                <li><img src={phone_icon} alt="" />+123-456-7890</li>
                <li><img src={location_icon} alt="" />Somewhere,Earth</li>
            </ul>
            
        </div>
        <div className="contact-col"></div>
    </div>
  )
}

export default Contact