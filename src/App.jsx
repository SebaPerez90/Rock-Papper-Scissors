import '../src/stylesheet.scss'
import Display from "./components/Display"
import Header from "./components/Header"
import Rules from "./components/Rules"
import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext(null)

function App() {

  window.onload = () => {
    const picks = [document.querySelector('.display-rock'), document.querySelector('.display-papper'), document.querySelector('.display-scissors')];

    document.querySelector('#header').style.animation = 'header 2s linear';
    document.querySelector('.attribution').style.animation = 'credits 2s linear';
    document.querySelector('.rules-open').style.animation = 'instructions 6s linear';
    picks[0].style.animation = 'load-icon 1.8s';
    picks[1].style.animation = 'load-icon 1.8s';
    picks[2].style.animation = 'load-icon 1.8s';

    // document.querySelector('#display').insertAdjacentHTML('beforeend', `<p class="instructions">Please, check rules and make your move 😏</p>`);

    // setTimeout(() => {
    //   document.querySelector('.instructions').remove()
    // }, 7000);
  };


  const user_score_stored = JSON.parse(localStorage.getItem('youScore'));
  const pc_score_stored = JSON.parse(localStorage.getItem('pcScore'));
  const [youScore, setYouScore] = useState(user_score_stored ?? 0);
  const [pcScore, setPcScore] = useState(pc_score_stored ?? 0);

  useEffect(() => {
    localStorage.setItem('youScore', JSON.stringify(youScore))
  }, [youScore]);

  useEffect(() => {
    localStorage.setItem('pcScore', JSON.stringify(pcScore))
  }, [pcScore]);


  return (
    <main id="main">
      <AppContext.Provider value={{ youScore, setYouScore, pcScore, setPcScore }}>
        <Header />
        <Display />
        <Rules />
      </AppContext.Provider>
    </main>
  )
}

export default App
