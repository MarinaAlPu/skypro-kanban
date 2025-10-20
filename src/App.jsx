import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { Main } from './components/main/Main.jsx';
import { Header } from './components/header/Header.jsx';
// import {Column} from './components/column/Column.jsx';
// import {Card} from './components/card/Card.jsx';
// import {Calendar} from './components/calendar/Calendar.jsx';
import { PopBrowse } from './components/popups/popBrowse/PopBrowse.jsx';
import { PopNewCard } from './components/popups/popNewCard/PopNewCard.jsx';
// import PopUser from './components/popups/popUser/PopUser.jsx';
import { PopExit } from './components/popups/popExit/PopExit.jsx';
import { cards } from './data.js';
import { GlobalStyle } from './components/GlobalStyles.js';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, [])

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        {/* <!-- pop-up start--> */}

        < PopExit />
        <PopNewCard />

        {isLoading && <PopBrowse isLoading={isLoading} />}

        {/* <!-- pop-up end--> */}

        <Header />
        <Main cards={cards} />

      </div>
    </>
  )
}

export default App
