import './App.css';
import { AppRoutes } from './components/AppRouts.jsx';
import { useState } from 'react';
import { AuthProvider } from './context/AuthProvider.jsx';
import { TasksProvider } from './context/TasksProvider.jsx';
import { GlobalStyle } from './components/GlobalStyles.js';
import { ThemeProvider } from './context/ThemeProvider.jsx';


function App() {
  // опциональная цепочка - получить token, если есть значение перед ?., иначе undefined, а не ошибка
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("userInfo"))?.token);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <AuthProvider>
          <TasksProvider>
            <AppRoutes token={token} setToken={setToken} />
          </TasksProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
