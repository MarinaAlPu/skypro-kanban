import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Main} from './components/main/Main.jsx'
import {Header} from './components/header/Header.jsx'
// import {Column} from './components/column/Column.jsx'
// import {Card} from './components/card/Card.jsx'
// import {Calendar} from './components/calendar/Calendar.jsx'
import {PopBrowse} from './components/popups/popBrowse/PopBrowse.jsx'
import {PopNewCard} from './components/popups/popNewCard/PopNewCard.jsx'
// import PopUser from './components/popups/popUser/PopUser.jsx'
import {cards} from './data.js'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        {/* <!-- pop-up start--> */}

        <div className="pop-exit" id="popExit">
          <div className="pop-exit__container">
            <div className="pop-exit__block">
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__form" id="formExit" action="#">
                <div className="pop-exit__form-group">
                  <button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
                  <button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <PopNewCard/>

        <PopBrowse/>

        {/* <!-- pop-up end--> */}

        <Header/>
        <Main cards={cards}/>

      </div>

      <script src="js/script.js"></script>
    </>
  )
}

export default App
