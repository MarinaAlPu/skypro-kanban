import { statuses } from "../../data";
import { Column } from "../column/Column";
import { SMain } from "./Main.styled";


export const Main = ({ cards }) => {
  const cardsByStatus = statuses.reduce((acc, status) => {
    acc[status] = cards.filter((card) => card.status === status);
    return acc;
  }, {});


  return (
    <SMain>
      {statuses.map((status) => <Column key={status} title={status} cardsByStatus={cardsByStatus} />)}
    </SMain>
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
