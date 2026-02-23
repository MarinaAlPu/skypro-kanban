import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    font-family: "Roboto", sans-serif;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  
// стили для темы
body, body.light-theme {
  --bg-primary: #EAEEF6;
  --bg-secondary: #FFFFFF;
  --bg-tertiary: #FFFFFF;
  
  --text-header-link: #565EEF;
  --text-primary: #000000;
  --text-secondary: #94A6BE;
  --text-tertiary: #FFFFFF;

  --borders: #D4DBE5;
  --borders-button: #565EEF;
  
  --bg-web-design: "#FFE4C2",
  --bg-research: "#B4FDD1",
  --bg-copywriting: "#E9D4FF",
  --color-web-design: "#FF6D00",
  --color-research: "#06B16E",
  --color-copywriting: "#9A48F1",
}

body.dark-theme {
  --bg-primary: #151419;
  --bg-secondary: #20202C;
  --bg-tertiary: #202229;
  
  --text-header-link: #FFFFFF;
  --text-primary: #FFFFFF;
  --text-secondary: #94A6BE;
  --text-tertiary: #FFFFFF;
  
  --borders: #4E5566;
  --borders-button: #FFFFFF;
  
  --bg-web-design: "#FF6D00",
  --bg-research: "#B4FDD1",
  --bg-copywriting: "#9A48F1",
  --color-web-design: "#FFE4C2",
  --color-research: "#06B16E",
  --color-copywriting: "#E9D4FF",
}

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    /* color: #000000; */
    color: var(--text-primary);
}
`





// import { createGlobalStyle } from "styled-components";

// export const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

  /* Определяем CSS переменные для светлой темы (по умолчанию) */
  // :root {
  //   --bg-primary: #ffffff;
  //   --bg-secondary: #f5f5f5;
  //   --bg-elements: #ffffff;
  //   --text-primary: #000000;
  //   --text-secondary: #4B4B4B;
  //   --border-color: #D9D9D9;
  //   --accent-color: #009EE4;
  //   --hover-color: #f0f0f0;
  //   --shadow-color: rgba(0, 0, 0, 0.1);
  //   --card-bg: #ffffff;
  //   --input-bg: #ffffff;
  //   --button-primary-bg: #009EE4;
  //   --button-primary-text: #ffffff;
  //   --button-secondary-bg: transparent;
  //   --button-secondary-border: #D9D9D9;
  // }

  /* Тёмная тема - применяется когда у body есть класс dark-theme */
//   body.dark-theme {
//     --bg-primary: #151419;
//     --bg-secondary: #20202C;
//     --bg-elements: #2d2d2d;
    
//     --text-primary: #ffffff;
//     --text-secondary: #b0b0b0;

//     --border-color: #404040;
//     --accent-color: #4d9eff;
//     --hover-color: #3d3d3d;
//     --shadow-color: rgba(0, 0, 0, 0.3);
//     --card-bg: #2d2d2d;
//     --input-bg: #3d3d3d;
//     --button-primary-bg: #4d9eff;
//     --button-primary-text: #ffffff;
//     --button-secondary-bg: transparent;
//     --button-secondary-border: #404040;
//   }

//   body {
//     font-family: "Roboto", sans-serif;
//     background-color: var(--bg-primary);
//     color: var(--text-primary);
//     transition: background-color 0.3s ease, color 0.3s ease;
//   }

//   *:before,
//   *:after {
//     box-sizing: border-box;
//   }

//   a,
//   a:visited {
//     text-decoration: none;
//     cursor: pointer;
//     color: var(--accent-color);
//   }

//   button,
//   ._btn {
//     cursor: pointer;
//     outline: none;
//     background-color: var(--button-primary-bg);
//     color: var(--button-primary-text);
//     border: none;
//     transition: background-color 0.3s ease;
//   }

//   button:hover,
//   ._btn:hover {
//     opacity: 0.8;
//   }

//   ul li {
//     list-style: none;
//   }

//   html,
//   body {
//     width: 100%;
//     height: 100%;
//   }

//   input, textarea, select {
//     background-color: var(--input-bg);
//     color: var(--text-primary);
//     border: 1px solid var(--border-color);
//     transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
//   }

//   input::placeholder, textarea::placeholder {
//     color: var(--text-secondary);
//   }

//   /* Стили для скроллбара в тёмной теме */
//   body.dark-theme ::-webkit-scrollbar {
//     width: 8px;
//     height: 8px;
//   }

//   body.dark-theme ::-webkit-scrollbar-track {
//     background: var(--bg-secondary);
//   }

//   body.dark-theme ::-webkit-scrollbar-thumb {
//     background: var(--border-color);
//     border-radius: 4px;
//   }

//   body.dark-theme ::-webkit-scrollbar-thumb:hover {
//     background: var(--accent-color);
//   }
// `;