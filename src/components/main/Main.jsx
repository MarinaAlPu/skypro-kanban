import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { SWrapper } from "./Main.styled";


export const Main = ({ setIsAuth, cards }) => {
  return (
    <SWrapper>
      <Header setIsAuth={setIsAuth}/>
      <Content cards={cards} />
    </SWrapper>
  )
}
