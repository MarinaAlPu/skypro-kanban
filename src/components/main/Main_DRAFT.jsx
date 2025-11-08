// import { statuses } from "../../data";
// import { Column } from "../column/Column";
import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { SWrapper } from "./Main.styled";


export const Main = ({ cards }) => {
  // const cardsByStatus = statuses.reduce((acc, status) => {
  //   acc[status] = cards.filter((card) => card.status === status);
  //   return acc;
  // }, {});


  return (
    <SWrapper>
      <Header />
      {/* <Content>{statuses.map((status) => <Column key={status} title={status} cardsByStatus={cardsByStatus} />)}</Content> */}
      <Content cards={cards} />
    </SWrapper>


    // <SMain>
    //   <SContainer>
    //     <SBlock>
    //       <SContent>
    //         {statuses.map((status) => <Column key={status} title={status} cardsByStatus={cardsByStatus} />)}
    //       </SContent>
    //     </SBlock>
    //   </SContainer>
    // </SMain>


    // <main className="main">
    //   <div className="container">
    //     <div className="main__block">
    //       <div className="main__content">
    //         {statuses.map((status) => <Column key={status} title={status} cardsByStatus={cardsByStatus} />)}
    //       </div>
    //     </div>
    //   </div>
    // </main>
  )
}
