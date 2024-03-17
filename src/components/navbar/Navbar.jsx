import "./navbar.scss"
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'
import 'react-social-icons/github'
import Sidebar from "../sidebar/Sidebar"
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
          <motion.span
          initial={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          tranisition={{duration:1}}>
            Welcome to My World
            </motion.span>
            <div className="social">
                <a href="#" ><SocialIcon url="https://www.linkedin.com/in/smitvora99"style={{ width: '40px',height:'40px' }} target="_blank"/></a>
                <a href="#" target="_blank"><SocialIcon url="https://www.github.com/smit1999" style={{ width: '40px',height:'40px' }} target="_blank"/></a>
                <div class="hover-text"><a href="https://drive.google.com/file/d/1_n8ITeGF73R3DH_YHXyfv7hxkq9h-Fjq/view?usp=drive_link" className="resume" target="_blank"><span class="material-symbols-outlined" style={{ 'margin-top': '8px' }}>export_notes</span><span className="tooltip-text bottom">resume</span></a></div>
            </div>
            
        </div>
       
    </div>
  )
}

export default Navbar