import React, { useEffect, useState } from 'react';
import './App.css';
import WelcomePage from './component/WelcomePage';
import HomePage from './component/HomePage';
import ToggleTheme from './component/ToggleTheme';

function App() {
  const [displayHome, showIntro] = useState(true);
  const body = document.querySelector('body');

  function toggleMode() {
    body.classList.toggle('darkMode');
  }

  useEffect(() => {
    setTimeout(() => {
      showIntro(false);
    }, 1500) 
  },[])

  return (
    <>
    <ToggleTheme toggleTheme={toggleMode}/>
    {displayHome ? <WelcomePage/> : <HomePage/>}
    </>
  )
}

export default App
