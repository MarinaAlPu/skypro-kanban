import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { SWrapper } from "./Main.styled";


export const Main = ({ setIsAuth, cards, error, tasks }) => {
  return (
    <SWrapper>
      <Header setIsAuth={setIsAuth}/>
      <Content cards={cards} error={error} tasks={tasks}/>
    </SWrapper>
  )
}
