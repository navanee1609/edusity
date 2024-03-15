import  { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
// import user_1 from '../../assets/user-1.png'
function Testimonials() {
    let slider=useRef()
    let tx=0

    let sliderForward=()=>{
        if(tx > -50){
            tx-=25
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    let sliderBackward=()=>{
        if(tx < -50){
            tx+=25
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={sliderForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={sliderBackward} />
        
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                           <div>
                           <h3>William Jackson</h3>
                            <span>California,USA</span>
                           </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in modi, debitis est quasi, consequuntur veritatis magnam consequatur minus odit, alias ducimus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                           <div>
                           <h3>William Jackson</h3>
                            <span>California,USA</span>
                           </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in modi, debitis est quasi, consequuntur veritatis magnam consequatur minus odit, alias ducimus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                           <div>
                           <h3>William Jackson</h3>
                            <span>California,USA</span>
                           </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in modi, debitis est quasi, consequuntur veritatis magnam consequatur minus odit, alias ducimus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                           <div>
                           <h3>William Jackson</h3>
                            <span>California,USA</span>
                           </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in modi, debitis est quasi, consequuntur veritatis magnam consequatur minus odit, alias ducimus.</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials