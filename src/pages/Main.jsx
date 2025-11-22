import { Main } from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { Loader } from "../components/loader/Loader";


export const MainPage = ({ tasks, isLoading, error }) => {

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Main tasks={tasks} error={error} />
      <Outlet />
    </>
  )
}
