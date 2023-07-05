import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import '../css/Projects.css';
import webGenerator from '../assets/WebsiteGenerator.png';
import playlistMaker from '../assets/PlaylistMaker.jpg';
import retailSite from '../assets/RetailSite.jpg';
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';



export default function Projects() {
  const [activeIndex, setCurrentIndex] = useState(0);
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
      techstack: "Vite React React-Context Netlify",
      description: " ",
      demoUrl: "https://fashionxpress.netlify.app",
      image: retailSite,
    },
    {
      name: "Spotify Playlist Maker",
      techstack: "React React-Context SpotifyAPI Netlify",
      description: " ",
      demoUrl: "https://soundstack.netlify.app",
      image: playlistMaker,
    },
    {
      name: "Random Website Generator",
      techstack: "HTML CSS Javascript",
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
              <div className="projectText">
                <p>{project.name}</p>
                <p>{project.techstack}</p>
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
