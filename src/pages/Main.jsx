import { Main } from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "../components/loader/Loader";


export const MainPage = ({ setIsAuth, cards }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Main setIsAuth={setIsAuth} cards={cards} />
      <Outlet />
    </>
  )
}
