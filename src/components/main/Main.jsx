import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { SWrapper, SMock } from "./Main.styled";


export const Main = ({ error, tasks }) => {
  return (
    <SWrapper>
      <Header />
      {!tasks.length ? <SMock>У вас пока нет задач &#128123;</SMock> : <Content error={error} tasks={tasks}/>}
    </SWrapper>
  )
}
