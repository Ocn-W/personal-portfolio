import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import viteSVG from '../assets/svg/viteLogo.svg';
import netlifySVG from '../assets/svg/netlifyLogo.svg';
import '../css/Projects.css';
import sassSVG from '../assets/svg/sassLogo.svg';
import webGenerator from '../assets/WebsiteGenerator.jpg';
import playlistMaker from '../assets/PlaylistMaker.jpg';
import retailSite from '../assets/RetailSite.jpg';
import qrGenSite from '../assets/QRGeneratorSite.jpg';
import authySite from '../assets/TicketAuthSite.jpg';
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';



export default function Projects() {
  const [activeIndex, setCurrentIndex] = useState(0);
  const reactLogo = <FontAwesomeIcon icon={faReact} style={{color:'cyan'}}/>
  const htmlLogo = <FontAwesomeIcon icon={faHtml5}  style={{color:'orangered'}}/>
  const cssLogo = <FontAwesomeIcon icon={faCss3}  style={{color:'blue'}}/>
  const jsLogo = <FontAwesomeIcon icon={faJsSquare}  style={{color:'gold'}}/>  
  const netlifyLogo = <img src={netlifySVG} className='netlifyLogo' alt="Netlify Logo"/>;
  const viteLogo = <img src={viteSVG} className='viteLogo' alt="Vite Logo"/>;
  const sassLogo = <img src={sassSVG} className='sassLogo' alt='Sass Logo'/>;

  function updateIndex(newIndex) {
    newIndex < 0
      ? newIndex = 0
      : newIndex >= projects.length 
      ? newIndex = projects.length - 1 
      : newIndex
    setCurrentIndex(newIndex);
  }

  const projects = [
    {
      name: "Retail Website",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
          {sassLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>Jotai</p>
          <p>React Router</p>
        </>
      ),
      description: (
        <>
          <p>
            This is a mock e-commerce website using front-end features combined
            with <em>global state management handled by Jotai</em> and{" "}
            <em>pagination with React Router</em>. Features include a randomly
            generated list of clothing items to select your desired purchase,
            filtering clothing items on the clothing page by price or rating,
            adding items from your shopping or favorites cart, and a checkout
            page to view your total and mock form to complete purchases.
          </p>
        </>
      ),
      demoUrl: "https://voguevalue.netlify.app",
      image: retailSite,
    },
    {
      name: "QR Code Generator",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>react-qr-code</p>
        </>
      ),
      description: (
        <>
          <p>
            This website makes use of the library react-qr-code to generate,
            customize, and download your own QR Codes for websites, business
            cards, social media, you name it! This project highlights some
            interesting features possible with the library such as{" "}
            <em>SVG to PNG conversion for file downloads</em> and{" "}
            <em>state management to handle the styling of SVG elements</em>.
          </p>
        </>
      ),
      demoUrl: "https://qrbox.netlify.app/",
      image: qrGenSite,
    },
    {
      name: "Spotify Playlist Maker",
      techstack: (
        <>
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>React-Context</p>
          <p>Spotify API</p>
        </>
      ),
      description: (
        <>
          <p>
            This web application makes use of the SpotifyAPI to search your
            favorite songs and create custom playlists to upload directly to
            Spotify. The major features for this website include searching the
            Spotify database to find your favorite songs and creating/editing
            custom playlist to publish to your Spotify account. This project
            served as my way to dive into understanding core concepts around{" "}
            <em>React Context</em>,{" "}
            <em>handling token requests and API data</em>,{" "}
            <em>
              hiding important API keys for production with dotenv and through
              Netlify
            </em>
            , <em>repository history management on GitHub with GitBash</em>, as
            well as the overall workflow for SPA's in React without using major
            libraries.{" "}
            <strong>
              <em>
                You do not need to authorize your account to create the
                playlist, only to upload!
              </em>
            </strong>
          </p>
        </>
      ),
      demoUrl: "https://soundstack.netlify.app",
      image: playlistMaker,
    },
    {
      name: "Ticket Authentication Site",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
          {sassLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>React Context</p>
        </>
      ),
      description: (
        <>
          <p>
            This website explores mock <em>form validation techniques</em> with
            features such as being able to generate a randomized custom ticket
            in similar format to a gift or CC. The form may only be submitted if
            the proper mock data is supplied to the appropriate fields.
          </p>
        </>
      ),
      demoUrl: "https://authentix.netlify.app/",
      image: authySite,
    },
    {
      name: "Random Website Generator",
      techstack: (
        <>
          {htmlLogo}
          {cssLogo}
          {jsLogo}
        </>
      ),
      dependencies: <>{netlifyLogo}</>,
      description: (
        <>
          <p>
            This website is powered by HTML, CSS, JavaScript and{" "}
            <em>deployed with Netlify</em>. This tool immerses users in a
            recreation of the Windows XP operating system, complete with a
            pseudo Microsoft Paint allowing users to create digital artworks and
            save them locally, a pseudo Internet Explorer that serves as a
            random website generator allowing users to visit over 100 websites
            from all corners of the internet, and a live messaging system to
            chat with other visitors who have visited, this project transports
            users back in time in a trip down memory lane to relive the charm of
            the past through a modern lens.
          </p>
        </>
      ),
      demoUrl: "https://thedesktop.netlify.app",
      image: webGenerator,
    },
  ];

  return (
    <div className="projectWheelContainer" onTouchMove={updateIndex}>
      <div
        className="projectWheel"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {projects.map((project, index) => {
          return (
            <section className="project" key={index}>
              <div className='projectImg'>
                <img src={project.image} />
              </div>
              <div className='projectInfo'>
                <h3>{project.name}</h3>
                <div className='projectStacks'>
                  {project.techstack}
                </div>
                <div className='projectDeps'>
                  {project.dependencies}
                </div>
                <div className='projectDesc'>
                  {project.description}
                </div>
                <a target='_blank' href={project.demoUrl}>Live Demo</a>
              </div>
            </section>
          );
        })}
      </div>

      <div className="wheel-btns">
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>{" "}
        </button>
        <div className="indicators">
          {projects.map((project, index) => {
            return (
              <button
                className="indicator-btns"
                onClick={() => {
                  updateIndex(index);
                }}>
                <span className={
                  `${index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                    }`
                  }>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
