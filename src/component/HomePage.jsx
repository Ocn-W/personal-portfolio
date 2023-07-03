import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Lottie from 'lottie-react';
import animationData from '../assets/svg/101786-wave.json'; 
import '../css/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faHtml5, faCss3, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  const ref = useRef();

  return (
    <div className="homePage">
      <nav>
        <h1 ref={ref} onClick={() => ref.current.scrollTo(0)}className="logo">
          OCEAN
          <span
            style={{
              color: "rgb(217, 4, 41)",
              fontFamily: "Helvetica",
              fontSize: "65px",
              margin: "0",
            }}>.</span>
        </h1>
        <ul className="navOptions">
          <li ref={ref} onClick={() => ref.current.scrollTo(2)}>PROJECTS</li>
          <li>ARTWORK</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer speed={1}>
          <section className="introSection">
            <div style={{ display: "flex" }}>
              <div className="introText">
                <h1>My name is Ocean Waring</h1>
                <p>FRONTEND REACT DEVELOPER</p>
                <p>
                  Based in NYC{"  "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "red" }}/>
                </p>
                <div className="contactBtns">
                  <a
                    target="#"
                    href="https://www.linkedin.com/in/ocean-waring/"
                  >
                    <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
                  </a>
                  <a target="#" href="https://github.com/Ocn-W">
                    <FontAwesomeIcon className="github" icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="profileImg">
                
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer speed={2} offset={0.7} factor={0.5}>
           <Lottie className="lottie" animationData={animationData} /> 
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <section className="aboutMe">
            <h2>About Me</h2>
            <p>
              Hello! I am a junior React web developer based in NYC. Currently
              building a strong and growing skill set in JavaScript,
              React, Git, and automated testing using the Mocha
              framework in Node or Jest. With a solid foundation in HTML and
              CSS, I have a keen eye for design and a commitment to producing
              high-quality, accessible, and responsive code. I am dedicated to
              continuous learning and staying up-to-date with the latest trends
              and best coding practices, ensuring that I can provide efficient
              solutions. Let's connect and discuss how I can
              contribute to your web development team!
            </p>
          </section>
          <section className="techStack">
            <h2>MY TECHSTACK</h2>
            <div className="stackLogos">
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ height: "50px", color: "orangered" }}
              />
              <FontAwesomeIcon
                icon={faCss3}
                style={{ height: "50px", color: "blue" }}
              />
              <FontAwesomeIcon
                icon={faJsSquare}
                style={{ height: "50px", color: "gold" }}
              />
              <FontAwesomeIcon
                icon={faReact}
                style={{ height: "50px", color: "cyan" }}
              />
              <img
                src="src/assets/svg/Vitejs-logo.svg"
                style={{ height: "50px" }}
              />
              <img
                src="src/assets/svg/Netlify_logo.svg"
                style={{ height: "50px" }}
              />
            </div>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1}>
          <section className="projectSection">
            <h2>PROJECTS</h2>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
