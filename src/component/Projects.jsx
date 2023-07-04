import React from 'react';
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
        <p>Project Name</p>
        <p>Languages Used:</p>
        <p>Project Info</p>
        <a>Live Demo</a>
        </div>
      </section>

      <section className='project'>
        <div className='projectImg2'></div>
        <div className='projectText'>
        <p>Project Name</p>
        <p>Languages Used:</p>
        <p>Project Info</p>
        <a>Live Demo</a>
        </div>
      </section>

      <section className='project'>
      <div className='projectImg3'></div>
        <div className='projectText'>
        <p>Project Name</p>
        <p>Languages Used:</p>
        <p>Project Info</p>
        <a>Live Demo</a>
        </div>
      </section>
    </>
  )
}
