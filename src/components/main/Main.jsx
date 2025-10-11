import { statuses } from "../../data";
import { Column } from "../column/Column"


export const Main = ({ cards }) => {
  const cardsByStatus = statuses.reduce((acc, status) => {
    acc[status] = cards.filter((card) => card.status === status);
    return acc;
  }, {});


  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statuses.map((status) => <Column key={status} title={status} cardsByStatus={cardsByStatus} />)}
          </div>
        </div>
      </div>
    </main>
  )
}
