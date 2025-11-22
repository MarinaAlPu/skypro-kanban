import './App.css';
import { AppRoutes } from './components/AppRouts.jsx';
import { useState, useEffect } from 'react';


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("userInfo");
    if (storedToken) {
      const userInfo = JSON.parse(storedToken);
      setToken(userInfo.token);
    }
  }, []);


  return <AppRoutes token={token} setToken={setToken} />
}

export default App
