import { PopNewCard } from "../components/popups/popNewCard/PopNewCard";


export const NewCardPage = ({ isAuth, addTask }) => {
  return <PopNewCard isAuth={isAuth} addTask={addTask} />
}