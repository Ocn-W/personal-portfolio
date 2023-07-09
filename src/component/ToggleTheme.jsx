import React from 'react';
import '../css/ToggleTheme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function ToggleTheme({toggleTheme}) {
  const themeBtnContainer = document.querySelector('.themeToggle');
  const themeBtnCircle = document.querySelector('.toggleCircle');

  function toggleBtnStyle() {
    themeBtnContainer.classList.toggle('darkContainer');
    themeBtnCircle.classList.toggle('darkCircle');
  }

  return (
    <>
    <button onClick={() => {
      toggleTheme();
      toggleBtnStyle();
    }} className='themeToggle'>
        <FontAwesomeIcon icon={faCircle} className='toggleCircle'/>
    </button>
    </>
  )
}
