import { Main } from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import { Loader } from "../components/loader/Loader";
import { fetchTasks } from "../services/api";


export const MainPage = ({ setIsAuth, cards }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, []);


  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // console.log("userInfo: ", userInfo);

  let token = userInfo.token;
  // console.log("token: ", token);

  const getTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchTasks({
        // token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
        token: token,
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  // const [cardsArrState, setCardsArrState] = useState(cards);

  // const addTask = (newTask) => {
  //   setCardsArrState((prevTasks) => [...prevTasks, newTask]);
  // }

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Main setIsAuth={setIsAuth} cards={cards} error={error} tasks={tasks} />
      <Outlet />
    </>
  )
}
