import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import viteSVG from '../assets/svg/Vitejs-logo.svg';
import netlifySVG from '../assets/svg/Netlify_logo.svg';
import '../css/Projects.css';
import webGenerator from '../assets/WebsiteGenerator.jpg';
import playlistMaker from '../assets/PlaylistMaker.jpg';
import retailSite from '../assets/RetailSite.jpg';
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';



export default function Projects() {
  const [activeIndex, setCurrentIndex] = useState(0);
  const reactLogo = <FontAwesomeIcon icon={faReact} style={{color:'cyan'}}/>
  const htmlLogo = <FontAwesomeIcon icon={faHtml5}  style={{color:'orangered'}}/>
  const cssLogo = <FontAwesomeIcon icon={faCss3}  style={{color:'blue'}}/>
  const jsLogo = <FontAwesomeIcon icon={faJsSquare}  style={{color:'gold'}}/>  
  const netlifyLogo = <img src={netlifySVG} alt="Netlify Logo" style={{height:'25px'}}/>;
  const viteLogo = <img src={viteSVG} alt="Vite Logo" style={{height:'50px'}}/>;

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
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>React-Context</p>
        </>
      ),
      description: (
        <>
          <p>
            This website is a mock-up for an e-commerce website with some
            front-end features combined with{" "}
            <em>state management handled by React-Context</em>. Features include
            a randomly generated list of clothing items to select your desired
            purchase (unique upon each page load), filtering clothing items on
            the clothing page by price or rating, adding/removing items from
            your shopping cart or clearing the cart entirely, and adding items
            from the clothing page to a favorites page to add to your cart for
            later view.
          </p>
        </>
      ),
      demoUrl: "https://fashionxpress.netlify.app",
      image: retailSite,
    },
    {
      name: "Spotify Playlist Maker",
      techstack: <>{reactLogo}</>,
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
    <div className="projectWheelContainer">
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
