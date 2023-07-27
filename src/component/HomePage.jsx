import React, { useRef } from 'react';
import '../css/HomePage.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Lottie from 'lottie-react';
import waveSVG from '../assets/svg/101786-wave.json';
import emailSVG from '../assets/svg/95247-email.json';
import viteSVG from '../assets/svg/viteLogo.svg';
import netlifySVG from '../assets/svg/netlifyLogo.svg';
import sassSVG from '../assets/svg/sassLogo.svg';
import myResume from '../assets/pdf/ocean-waring-resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faHtml5, faCss3, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Projects from './Projects';

export default function HomePage() {
  const ref = useRef();

  return (
    <div className="homePage">
      <Parallax pages={4} ref={ref}>
{/* Navigation Section */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1.5 }}
          style={{ height: "fit-content" }}
        >
          <nav>
            <h1
              className="logo"
              ref={ref}
              onClick={() => ref.current.scrollTo(0)}
            >
              OCEAN
              <span
                style={{
                  color: "rgb(217, 4, 41)",
                  fontFamily: "Helvetica",
                  fontSize: "65px",
                  margin: "0",
                }}
              >
                .
              </span>
            </h1>
            <ul className="navOptions">
              <li
                ref={ref}
                onClick={() =>
                  window.innerWidth < 768
                    ? ref.current.scrollTo(2.5)
                    : ref.current.scrollTo(2.25)
                }
              >
                PROJECTS
              </li>
              <li ref={ref} onClick={() => ref.current.scrollTo(1)}>
                RESUME
              </li>
              <li
                style={{ fontWeight: "200" }}
                ref={ref}
                onClick={() => ref.current.scrollTo(3)}
              >
                CONTACT
              </li>
            </ul>
          </nav>
        </ParallaxLayer>
{/* Introduction Section */}
        <ParallaxLayer>
          <section className="introSection">
            <div style={{ display: "flex" }}>
              <div className="introText">
                <h1>MY NAME IS OCEAN WARING</h1>
                <p>FRONTEND REACT DEVELOPER</p>
                <p>
                  Based in NYC{" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "red" }}
                  />
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
              <div className="profileImg"></div>
            </div>
          </section>
        </ParallaxLayer>
{/* SVG Transition Section */}
        <ParallaxLayer offset={0.75} speed={1}>
          <Lottie className="lottieWave" animationData={waveSVG} />
        </ParallaxLayer>
{/* About Me Section */}
        <ParallaxLayer offset={1}>
          <section className="aboutMe">
            <div className="aboutIntro">
              <h2>ABOUT ME</h2>
              <p>
                Hello! I am a junior front end React web developer based in NYC.
                Currently building a strong and growing skill set in HTML, CSS,
                JavaScript, Typescript, React, and TDD using the Mocha framework
                in Node or Jest. I consistently improve a keen eye for design
                and a commitment to producing logical, accessible, and
                responsive code. I am dedicated to continuous learning and
                staying up-to-date with the latest trends and best coding
                practices, ensuring that I can be a useful team player and
                provide efficient solutions. Let's connect and discuss how I can
                contribute to your web development team!
              </p>
            </div>
            <div className="aboutResume">
              <object
                data={myResume}
                width="100%"
                height="100%"
                type="application/pdf"
              />
              <a href={myResume}>Download</a>
            </div>
          </section>
          <section className="techStack">
            <h2>MY TECHSTACK</h2>
            <div className="scrollStack">
              <div className="stackLogos">
                <FontAwesomeIcon
                  className="htmlLogo"
                  icon={faHtml5}
                  style={{ color: "orangered" }}
                />
                <FontAwesomeIcon
                  className="cssLogo"
                  icon={faCss3}
                  style={{ color: "blue" }}
                />
                <FontAwesomeIcon
                  className="jsLogo"
                  icon={faJsSquare}
                  style={{ color: "gold" }}
                />
                <img src={sassSVG} />
                <FontAwesomeIcon
                  className="reactLogo"
                  icon={faReact}
                  style={{ color: "cyan" }}
                />
                <img src={viteSVG} />
                <img src={netlifySVG} />
              </div>
              <div className="stackLogos" aria-hidden="true">
                <FontAwesomeIcon
                  className="htmlLogo"
                  icon={faHtml5}
                  style={{ color: "orangered" }}
                />
                <FontAwesomeIcon
                  className="cssLogo"
                  icon={faCss3}
                  style={{ color: "blue" }}
                />
                <FontAwesomeIcon
                  className="jsLogo"
                  icon={faJsSquare}
                  style={{ color: "gold" }}
                />
                <img src={sassSVG} />
                <FontAwesomeIcon
                  className="reactLogo"
                  icon={faReact}
                  style={{ color: "cyan" }}
                />
                <img src={viteSVG} />
                <img src={netlifySVG} /> 
              </div>
            </div>
          </section>
        </ParallaxLayer>
{/* Projects Section */}
        <ParallaxLayer offset={window.innerWidth < 768 ? 2.5 : 2.25}>
          <section className="projectSection">
            <h2>PROJECTS</h2>
            <Projects />
          </section>
        </ParallaxLayer>
{/* Contact Section */}
        <ParallaxLayer
          offset={3}
          speed={window.innerWidth < 768 ? 2 : 1}
          style={{ backgroundColor: "var(--body_background)" }}
        >
          <Lottie className="lottieEmail" animationData={emailSVG} />
          <section className="contactSection">
            <h2>LETS WORK</h2>
            <div className="formContainer">
              <form
                netlify
                name="contact"
                method="POST"
                onSubmit="submit"
                action=""
                className="contactForm"
              >
                <input type="hidden" name="form-name" value="contact" />

                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    aria-required="true"
                  />
                </label>

                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    aria-required="true"
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows="4"
                    required
                    aria-required="true"
                  ></textarea>
                </label>

                <button type="submit">Submit</button>
              </form>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}