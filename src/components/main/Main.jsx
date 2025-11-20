import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { SWrapper } from "./Main.styled";


export const Main = ({ setIsAuth, error, tasks }) => {
  return (
    <SWrapper>
      <Header setIsAuth={setIsAuth}/>
      <Content error={error} tasks={tasks}/>
    </SWrapper>
  )
}
