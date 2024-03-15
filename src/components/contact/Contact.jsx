import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'
function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "89c046ff-8f76-47dd-9562-7105809a3576");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult(data.message);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
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
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Contact Number' required />
                <label>E-mail</label>
                <input type="email" name='mail' placeholder='Enter Your E-mail' required />
                <label>Leave Your Message</label>
                <textarea name="message" required rows="6" placeholder='Enter Message'></textarea>
                <button type="submit" className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>

            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact