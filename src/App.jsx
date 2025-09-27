import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Main from './components/main/Main.jsx'
import Header from './components/header/Header.jsx'
// import Column from './components/column/Column.jsx'
// import Card from './components/card/Card.jsx'
// import Calendar from './components/calendar/Calendar.jsx'
import PopBrowse from './components/popups/popBrowse/PopBrowse.jsx'
import PopNewCard from './components/popups/popNewCard/PopNewCard.jsx'
// import PopUser from './components/popups/popUser/PopUser.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="wrapper">
        {/* <!-- pop-up start--> */}

        <div class="pop-exit" id="popExit">
          <div class="pop-exit__container">
            <div class="pop-exit__block">
              <div class="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form class="pop-exit__form" id="formExit" action="#">
                <div class="pop-exit__form-group">
                  <button class="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
                  <button class="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <PopNewCard/>

        <PopBrowse/>

        {/* <!-- pop-up end--> */}

        <Header/>
        <main class="main">
          <div class="container">

            <div class="main__block">
              <div class="main__content">
                <div class="main__column column">
                  <div class="column__title">
                    <p>Без статуса</p>
                  </div>
                  <div class="cards">
                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _orange">
                            <p class="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _green">
                            <p class="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _orange">
                            <p class="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _purple">
                            <p class="_purple">Copywriting</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _orange">
                            <p class="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main__column">
                  <div class="column__title">
                    <p>Нужно сделать</p>
                  </div>
                  <div class="cards">
                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _green">
                            <p class="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main__column">
                  <div class="column__title">
                    <p>В работе</p>
                  </div>
                  <div class="cards">
                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _green">
                            <p class="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _purple">
                            <p class="_purple">Copywriting</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _orange">
                            <p class="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main__column">
                  <div class="column__title">
                    <p>Тестирование</p>
                  </div>
                  <div class="cards">
                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _green">
                            <p class="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main__column">
                  <div class="column__title">
                    <p>Готово</p>
                  </div>
                  <div class="cards">
                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _green">
                            <p class="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clip-path="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </main>

      </div>

      <script src="js/script.js"></script>
    </>
  )
}

export default App
