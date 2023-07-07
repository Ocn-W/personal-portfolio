import React, { useEffect, useState } from 'react';
import './App.css';
import WelcomePage from './component/WelcomePage';
import HomePage from './component/HomePage';

function App() {
  const [displayHome, showIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      showIntro(false);
    }, 1500) 
  },[])

  return (
    <>
    {displayHome ? <WelcomePage/> : <HomePage/>}
    </>
  )
}

export default App
