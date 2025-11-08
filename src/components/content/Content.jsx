import { statuses } from "../../data";
import { Column } from "../column/Column";
import { SContent, SContainer, SBlock, SData } from "./Content.styled";


export const Content = ({ cards }) => {
  const cardsByStatus = statuses.reduce((acc, status) => {
    acc[status] = cards.filter((card) => card.status === status);
    return acc;
  }, {});


  return (
    <SContent>
      <SContainer>
        <SBlock>
          <SData>
            {statuses.map((status) => <Column key={status} title={status} cardsByStatus={cardsByStatus} />)}
          </SData>
        </SBlock>
      </SContainer>
    </SContent>
  )
}
