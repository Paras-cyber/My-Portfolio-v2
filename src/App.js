import './App.css';
import { BrowserRouter } from 'react-router-dom';

import React, { useEffect, useRef , useState} from 'react';
import { Link } from 'react-router-dom'; 
import Typed from 'typed.js';
import Particles  from "./components/Particles" ; 
import { Link as ScrollLink } from 'react-scroll';




import dots from './images/userAsset/dots.png' ;
import cube from './images/userAsset/cube.png' ;
import circle from './images/userAsset/circle.png' ;
import zigzags from './images/userAsset/zigzags.png' ;
import plus from './images/userAsset/plus.png' ;
import UserImage from './images/userAsset/UserImage.png'


import blobVectorImg from './images/userAsset/blob vector.png';
import htmlImg from './images/stack/HTML.png';
import cssImg from './images/stack/CSS.png';
import javascriptImg from './images/stack/Javascript.svg';
import reactImg from './images/stack/React.png';
import nodeJsImg from './images/stack/NodeJs.svg';
import nextJsCircleImg from './images/stack/NextJsCircle.png';
import nextImg from './images/stack/Next.svg';
import reduxImg from './images/stack/Redux.svg';
import tailwindImg from './images/stack/Tailwind.png';
import bootstrapImg from './images/stack/Bootstrap.svg';
import materialUiImg from './images/stack/MaterialUI.svg';
import expressImg from './images/stack/Express.png';
import gitImg from './images/stack/Git.svg';
import githubImg from './images/stack/Github.svg';
import graphqlImg from './images/stack/Graphql.svg';
import mongodbImg from './images/stack/MongoDB.svg';
import vercelImg from './images/stack/Vercel.svg';
import chartJsImg from './images/stack/ChartJs.svg';
import bashImg from './images/stack/Bash.svg';
import dockerImg from './images/stack/Docker.svg';
import k8sImg from './images/stack/K8s.svg';

function App() {

  const typeRef = useRef(null);

  useEffect(() => {
    // Initialize Typed instance when the component mounts
    const typeData = new Typed(typeRef.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Clean up Typed instance when the component unmounts
    return () => {
      typeData.destroy();
    };
  }, []);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleMenuClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <BrowserRouter >
      

      
      <div id="wrapper">
      
      <Particles />
  
      <div className="header">
        <Link to="/" className="logo"> 
          Paras Kumar
        </Link>
        
        <i className='bx bx-menu' id="menu-icon" onClick={handleMenuClick}></i>

        <nav className={`navbar ${isNavbarOpen ? 'active' : ''}`}>
          <ScrollLink to="home" className="custom-cursor" smooth={true}>
            Home
          </ScrollLink>
          <ScrollLink to="skills" className="custom-cursor" smooth={true}>
            Skills
          </ScrollLink>
          <ScrollLink to="project" className="custom-cursor" smooth={true}>
            Project
          </ScrollLink>
          <ScrollLink to="contact" className="custom-cursor" smooth={true}>
            Contact
          </ScrollLink>

        </nav>
      </div>
  
          <div className="hero-section" id='home'>
              
              <div className="faded-text">Paras Kumar</div>
             
              <div className="hero-section-left">
  
                  <div className="hero-section-heading">Hello and Welcome! I am Paras</div>
                  <div className="hero-section-heading hero-section-sub-heading">
                      I am a <span ref={typeRef} className="role"></span>
                  </div>
                  <p className="hero-section-description">
  
                      I'm a software developer and here is my portfolio website. Here you'll learn about my journey as a software 
                      developer.
                  </p>
                  {/* <div className="btn-pink" id="btn">Hire Me</div> */}
                  <a href='https://drive.google.com/file/d/1s5Gcru73BjnWqWiqxRiac2Ves8rQD974/view?usp=sharing' target="_blank"
                  rel="noreferrer" className="btn-pink" id="btn">Download CV</a>
              </div>
              
              <div className="hero-section-right">
  
                  
  
                  <div className="absolute icons icon-dots">
                      
                      <img src={dots} alt=""/>
                  </div>
                  <div className="absolute icons icon-cube">
                      
                      <img src={cube} alt=""/>
                  </div>
                  <div className="absolute icons icon-circle">
                      <img src={circle} alt=""/>
                  </div>
                  <div className="absolute icons icon-zigzak">
                  <img src={zigzags} alt=""/>
                  </div>
                  <div className="absolute icons icon-plus">
                      <img src={plus} alt=""/>
                  </div>
                  <div className="user-image">
                    <img style={{ width: '250px' }} src={UserImage} alt="User" />
                  </div>
              </div>
  
          </div>
           
          <div className="project-section" id='project'>
              <h2 className="page-header">Projects</h2>
  
              <div className="project-container">
  
                  <div className="project-card" id="project1">
                      <div className="project-number project-number-right">01</div>
                      <div className="project-content project-content-left">
                          <div className="project-skills-container">
                              <img className="project-skill" src={htmlImg} alt="" />
                              <img className="project-skill" src={cssImg} alt="" />
                              <img className="project-skill" src={javascriptImg} alt="" />
                              <img className="project-skill" src={expressImg} alt="" />
                              <img className="project-skill" src={nextJsCircleImg} alt="" />
                              <img className="project-skill" src={tailwindImg} alt="" />
                              <img className="project-skill" src={nodeJsImg} alt="" />
                              <img className="project-skill" src={mongodbImg} alt="" />
                              <img className="project-skill" src={reduxImg} alt="" />
                              <img className="project-skill" src={vercelImg} alt="" />
                          </div>
  
                          <h2 className="project-heading">The weather app </h2>
  
                          <p className="project-subHeading">Its is a web application that allows users to get real-time weather information for any location in the world
                          </p>
                          
                          <div className="btn-grp">
                              <button className="btn-pink btn-project">Read More</button>
                              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                              <a href="https://github.com/Paras-cyber/Weather-App" target="_blank" rel="noreferrer" >
                              <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                              </a>
                              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                              <a href="https://paras-cyber.github.io/Weather-App/" target="_blank" rel="noreferrer" >
                              <i title="Live Link" className="fa-solid fa-link icon"></i>
                              </a>
                          </div>
  
                      </div>
                  </div>
  
  
                  <div className="project-card" id="project2">
                      <div className="project-number project-number-left">02</div>
                      <div className="project-content project-content-right">
                        <div className="project-skill-container">
                              <img className="project-skill" src={htmlImg} alt="" />
                              <img className="project-skill" src={cssImg} alt="" />
                              <img className="project-skill" src={javascriptImg} alt="" />
                              <img className="project-skill" src={nextJsCircleImg} alt="" />
                              <img className="project-skill" src={tailwindImg} alt="" />
                              <img className="project-skill" src={reduxImg} alt="" />
                              <img className="project-skill" src={vercelImg} alt="" />

                        </div>
                        <h2 className="project-heading">COURSE-SELECTION</h2>
                        <p className="project-sub-heading">
                          A platform  which allowing users to prioritize courses and buy them. 
                          Added featuring intuitive like/dislike functionality 
                        </p>
                        <div className="btn-group">
                          <button className="btn-pink btn-project">Read More</button>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a href="https://github.com/Paras-cyber/Course-Selection/" target="_blank" rel="noreferrer" >
                            <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                          </a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */} 
                          <a href="https://paras-cyber.github.io/Course-Selection/" target="_blank" rel="noreferrer" >
                            <i title="Live Link" className="fa-solid fa-link icon"></i>
                          </a>
                        </div>
                      </div>
                  </div>
              
                  <div className="project-card" id="project3">
                      <div className="project-number project-number-right">03</div>
                      <div className="project-content project-content-left">
                        <div className="project-skill-container">
                            <img className="project-skill" src={htmlImg} alt="" />
                            <img className="project-skill" src={cssImg} alt="" />
                            <img className="project-skill" src={javascriptImg} alt="" />
                            <img className="project-skill" src={nextJsCircleImg} alt="" />
                            <img className="project-skill" src={tailwindImg} alt="" />
                            <img className="project-skill" src={reduxImg} alt="" />
                            <img className="project-skill" src={vercelImg} alt="" />

                        </div>
              
                        <h2 className="project-heading">PASSWORD GENERATOR</h2>
                        <p className="project-sub-heading">
                          A Website which generate random password according to user’s selected password strength
                        </p>
                        <div className="btn-group">
                          <button className="btn-pink btn-project">Read More</button>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a href="https://github.com/Paras-cyber/Password-Generator/" target="_blank" rel="noreferrer" >
                            <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                          </a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a href="https://paras-cyber.github.io/Password-Generator/" target="_blank" rel="noreferrer" >
                            <i title="Live Link" className="fa-solid fa-link icon"></i>
                          </a>
                        </div>
                      </div>
                  </div>
              
                  <div className="project-card" id="project4">
                      <div className="project-number project-number-left">04</div>
                      <div className="project-content project-content-right">
                        <div className="project-skill-container">
                            <img className="project-skill" src={nextJsCircleImg} alt="" />
                            <img className="project-skill" src={tailwindImg} alt="" />
                            <img className="project-skill" src={vercelImg} alt="" />
                        </div>
                        <h2 className="project-heading">WEB-CHAT APP USING STEGANOGRAPHY</h2>
                        <p className="project-sub-heading">
                        It is a web chat application that uses image steganography to encrypt messages and ensure secure communication between users.
                        </p>
                        <div className="btn-group">
                          <button className="btn-pink btn-project">Read More</button>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a href="https://github.com/Prabhat070saini/Text_it" target="_blank" rel="noreferrer" >
                            <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                          </a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a href=""  >
                            <i title="Live Link" className="fa-solid fa-link icon"></i>
                          </a>
                        </div>
                      </div>
                  </div>
                
              </div>
  
          </div>
  
          <div id="skills" className="container skills-container">
              <div className="skill-fade-text">Skills</div>
              <div id="skill-container-left"  className="skill-container-left">
                  <div className="skill-heading">
                      Me and My Tech Stack   
                  </div>
                  
  
                  <div className="skill-subHeading">
                      <p>
                      Hi Everyone My name is Paras Kumar I am a Full Stack Web Developer 
                      I have been actively working in the web development field for the past 3 years, 
                      gaining expertise in coding languages like C++, C, and object-oriented programming Currently, 
                      I am exploring the intricacies of MERN stack development to build dynamic and interactive web applications. 
                      </p>
                      <p>
                      In addition to my expertise in web development, 
                      I possess hands-on experience working with both Windows and Linux operating systems, 
                      making me versatile and adaptable in diverse technological environments
                      </p>
                      <p>
                      Apart from this, I have a keen interest in exploring the world of Android customization through custom ROMs.
                      This hobby allows me to delve into the depths of mobile technology and stay updated with the latest trends in the Android ecosystem.
                      </p>
                  </div>
              </div>
  
              <div id="skill-container-right" className="skill-container-right">
                  <img src={blobVectorImg} className="blob-style" alt="" />
                  <img src={htmlImg} alt="" className="skills-logo" />
                  <img src={cssImg} alt="" className="skills-logo" />
                  <img src={javascriptImg} alt="" className="skills-logo" />
                  <img src={reactImg} alt="" className="skills-logo" />
                  <img src={nodeJsImg} alt="" className="skills-logo" />
                  <img src={nextImg} alt="" className="skills-logo" />
                  <img src={reduxImg} alt="" className="skills-logo" />
                  <img src={tailwindImg} alt="" className="skills-logo" />
                  <img src={bootstrapImg} alt="" className="skills-logo" />
                  <img src={materialUiImg} alt="" className="skills-logo" />
                  <img src={expressImg} alt="" className="skills-logo" />
                  <img src={gitImg} alt="" className="skills-logo" />
                  <img src={githubImg} alt="" className="skills-logo" />
                  <img src={graphqlImg} alt="" className="skills-logo" />
                  <img src={mongodbImg} alt="" className="skills-logo" />
                  <img src={vercelImg} alt="" className="skills-logo" />
                  <img src={chartJsImg} alt="" className="skills-logo" />
                  <img src={bashImg} alt="" className="skills-logo" />
                  <img src={dockerImg} alt="" className="skills-logo" />
                  <img src={k8sImg} alt="" className="skills-logo" />
              </div>
          </div>
  
          <div id='contact' className="contactus-form-container">
            <div className="container">
              <h1 className="contactus-heading">Contact me</h1>
              <h3 className="contactus-sub-heading">
                Questions, thoughts, or just want to say hello?
              </h3>
  
              <div className="contactus-form-container">
                <form className="form" action="https://formspree.io/f/mrgwbrlk" method='POST'>
                  <div className="formfield-container">
                    <input className="formfield" 
                    type="text" 
                    name="name" 
                    id="" 
                    placeholder="Enter your name"
                    required 
                    />
  
                    <input className="formfield" 
                    type="email" 
                    name="email" 
                    id="" 
                    placeholder="Enter your email address"
                    required
                    />
  
                    <input className="formfield" 
                    type="text" 
                    name="subject" 
                    id="" 
                    placeholder="Enter your subject" 
                    required
                    />
  
                    <textarea name="message" 
                    id="" cols="30" rows="10" 
                    className="formfield formfield-textarea"
                    placeholder="Enter your message"
                    required
                    />
                    
                  </div>
  
                  <div>
                    <button type="submit" className="btn-pink" id="submit-btn">
                      Send Message<i className="submit-icon fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
  
          <footer>
            <div className="container">
              <div className="footer-wrapper">
                <div className="footer-faded-text">Paras Kumar</div>
  
                <div className="link-wrapper">
                  <div>
                    <a href="#projects">Projects</a>
                  </div>
                  <div>
                    <a href="#skills">Skills</a>
                  </div>
                  <div>
                    <a href="#contactme">Contact Me</a>
                  </div>
                </div>
  
                <div className="icon-wrapper">
                  <a href="https://www.linkedin.com/in/paras-kumar-973474201/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin icon"></i>
                  </a>
                  <a href="https://github.com/Paras-cyber/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github icon"></i>
                  </a>
                  
                  <i className="fa-brands fa-twitter icon"></i>
                  <i className="fa-brands fa-instagram icon"></i>
                    
                  <a href="mailto:paras.2024csit1086@kiet.edu" target="_blank" rel="noreferrer">
                    <i className="fa-regular fa-envelope icon"></i>
                  </a>
                </div>
  
              </div>
            </div>
          </footer>
          
      </div>
  
  
      
    </BrowserRouter>
  );
}

export default App;
