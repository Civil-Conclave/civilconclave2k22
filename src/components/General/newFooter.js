import React from 'react'
import './newFooter.css'
import { Link } from 'react-router-dom'

const NewFooter = () => {
  return (
    <div className='footerWrapper'>
        <div className="footerHead">
            Nirmaan'<span>25</span>
        </div>
        <div className="footerContent">
            <div className="infoFooter">
                <p>Nirmaan’25: IIT Roorkee Civil Conclave unites civil engineering enthusiasts from India’s top institutes. Hosted by IIT Roorkee, it provides a vibrant platform for students to compete, collaborate, and network. With a rich legacy, Nirmaan'25 inspires innovation and excellence in civil engineering, shaping the future of infrastructure!</p>
            </div>
            <div className="footerLinks">
            <p>Visit</p>
            <div className="linksFooter">
                <div className="links1">
                    
                    <Link to="/">Home</Link>
                    <br />
                    <Link to="/aboutus">About Us</Link>
                </div>
                <div className="links2">
                
                    <Link to="/events">Events</Link>
                    <br />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3Zhcf1PsjXwdrJ8fqZtm_nMogmseHzi8gAqu5DRx1RPr0ww/viewform" target='_blank'>Register</a>
                </div>
            </div>  
                
            </div>
        </div>

        <hr className='footerLine'/>

        <div className="socialLinks">
            <div className="socialFooter">
                <div className="socialHeader">
                 <p>Connect with us on</p>
                </div>
                <div className="socialLogos">
                    <a href="https://www.instagram.com/civil_conclave/" target="_blank">
                        <img src="https://img.icons8.com/color/50/instagram-new.png"/>
                    </a>
                    <a href="https://www.facebook.com/civilconclave.iitr/" target="_blank">
                        <img src="https://img.icons8.com/color/50/facebook-new.png"/>
                    </a>
                </div>
            </div>

            <div className="contactNum">
                <p>For queries, Contact</p>
                <div><span>Priyanshu: </span>9508877029</div>
                <div><span>Shreyansh: </span>7973452381</div>
            </div>
            
        </div>
    </div>
  )
}

export default NewFooter