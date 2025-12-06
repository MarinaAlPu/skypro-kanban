import './App.css';
import { AppRoutes } from './components/AppRouts.jsx';
import { useState } from 'react';


function App() {
  // опциональная цепочка - получить token, если есть значение перед ?., иначе undefined, а не ошибка
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("userInfo"))?.token);

  return <AppRoutes token={token} setToken={setToken} />
}

export default App
