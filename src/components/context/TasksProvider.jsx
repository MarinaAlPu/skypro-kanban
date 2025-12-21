import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback, useContext } from "react";
import { fetchTasks, postTask } from "../../services/api.js";
import { TasksContext } from "./TasksContext";
import { AuthContext } from "./AuthContext";


export const TasksProvider = ({ children }) => {
  const navigate = useNavigate();

  const {token} = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");


  const getTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchTasks({
        token: token,
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [token]);


  useEffect(() => {
    if (token) {
      getTasks();
      navigate("/");
    }
  }, [getTasks, token]);


  const addTask = async ({ newTask }) => {
    setIsLoading(true);
    try {
      await postTask({ token, newTask })
        .then((data) => {
          setTasks(data);
        })
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        error,
        isLoading,
        getTasks, addTask
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}