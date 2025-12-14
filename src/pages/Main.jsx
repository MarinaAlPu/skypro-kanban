import { Main } from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { Loader } from "../components/loader/Loader";
import { TasksContext } from "../components/context/TasksContext";
import { useContext } from "react";


// export const MainPage = ({ tasks, isLoading, error }) => {
//   return (
//     <>
//       {isLoading && <Loader isLoading={isLoading} />}
//       <Main tasks={tasks} error={error} />
//       <Outlet />
//     </>
//   )
// }

export const MainPage = () => {
  const {
    isLoading,
  } = useContext(TasksContext);

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Main />
      <Outlet />
    </>
  )
}
