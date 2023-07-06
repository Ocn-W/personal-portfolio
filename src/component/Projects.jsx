import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import viteSVG from '../assets/svg/Vitejs-logo.svg';
import netlifySVG from '../assets/svg/Netlify_logo.svg';
import '../css/Projects.css';
import webGenerator from '../assets/WebsiteGenerator.png';
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
      description: " ",
      demoUrl: "https://fashionxpress.netlify.app",
      image: retailSite,
    },
    {
      name: "Spotify Playlist Maker",
      techstack: (
        <>
          {reactLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>React-Context</p>
          <p>Spotify API</p>
        </>
      ),
      description: " ",
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
      dependencies: (
        <>
          {netlifyLogo}
        </>
      ),
      description: "",
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
        {projects.map((project) => {
          return (
            <section className="project">
              <div className="projectImg">
                <img src={project.image} />
              </div>
              <div className="projectInfo">
                <h3>{project.name}</h3>
                <div className='projectStacks'>
                  {project.techstack}
                </div>
                <div className="projectDeps">
                  {project.dependencies}
                </div>
                <p>{project.description}</p>
                <a href={project.demoUrl}>Live Demo</a>
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
                }}
              >
                <span
                  className={`${index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                    }`}
                >
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
