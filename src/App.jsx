import './App.css';
import { AppRoutes } from './components/AppRouts.jsx';
import { useState } from 'react';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth, " в App");
  return <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth}/>
}

export default App
