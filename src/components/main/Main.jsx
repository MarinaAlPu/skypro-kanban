import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { SWrapper, SMock, SMessage } from "./Main.styled";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";


export const Main = ({ error, tasks }) => {

  return (
    <SWrapper>
      <Header />
      {!tasks.length ?
        <SMock>
          <SMessage>У вас пока нет задач &#128123;</SMessage>
          <Link to="/card/add">
            <Button href="#popNewCard" width="212px" type="primary" text="Создать мою первую задачу" disabled={false}>
            </Button>
          </Link>
        </SMock>
        :
        <Content error={error} tasks={tasks}
        />}
    </SWrapper>
  )
}
