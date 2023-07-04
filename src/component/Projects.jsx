import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import '../css/Projects.css';
import retailWebsite from '../assets/RetailSiteHome.jpg';
import spotifyAPISite from '../assets/soundStackDemo.jpg';
import theDesktopSite from '../assets/theDesktop02.png';

export default function Projects() {
  return (
    <>
      <section className='project'>
      <div className='projectImg1'></div>
        <div className='projectText'>
        <p>Mock Retail Website</p>
        <div className='projectIcons'>
          <FontAwesomeIcon icon={faCss3} style={{ height: "25px", color: "blue" }}/>   
          <FontAwesomeIcon icon={faReact} style={{ height: "25px", color: "cyan" }}/>
          <img src="src/assets/svg/Vitejs-logo.svg" style={{ height: "25px" }}/>
        </div>
        <p>Project Info</p>
        <a blank="#" href='https://thedesktop.netlify.app/'>Live Demo</a>
        </div>
      </section>

      <section className='project'>
        <div className='projectImg2'></div>
        <div className='projectText'>
        <p>Spotify Playlist Creator</p>
        <div className='projectIcons'>
          <FontAwesomeIcon icon={faCss3} style={{ height: "25px", color: "blue" }}/>
          <FontAwesomeIcon icon={faReact} style={{height:"25px", color:"cyan"}}/>
        </div>
        <p>Project Info</p>
        <a blank="#" href='https://soundstack.netlify.app/'>Live Demo</a>
        </div>
      </section>

      <section className='project'>
      <div className='projectImg3'></div>
        <div className='projectText'>
        <p>Random Website Generator</p>
        <div className='projectIcons'>
          <FontAwesomeIcon icon={faHtml5} style={{ height: "25px", color: "orangered" }}/>
          <FontAwesomeIcon icon={faCss3} style={{ height: "25px", color: "blue" }}/>
          <FontAwesomeIcon icon={faJsSquare} style={{ height: "25px", color: "gold" }}/>
        </div>
        <p>Project Info</p>
        <a blank="#" href='https://fashionxpress.netlify.app/'>Live Demo</a>
        </div>
      </section>
    </>
  )
}
