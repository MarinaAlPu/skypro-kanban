import './App.css';
import { AppRoutes } from './components/AppRouts.jsx';
import { useState } from 'react';
import { AuthProvider } from './components/context/AuthProvider.jsx';


function App() {
  // опциональная цепочка - получить token, если есть значение перед ?., иначе undefined, а не ошибка
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("userInfo"))?.token);

  return (
    <AuthProvider>
      <AppRoutes token={token} setToken={setToken} />
    </AuthProvider>
  )
}

export default App
