import { PopNewCard } from "../components/popups/popNewCard/PopNewCard";


export const NewCardPage = ({ token, addTask }) => {
  return <PopNewCard token={token} addTask={addTask} />
}