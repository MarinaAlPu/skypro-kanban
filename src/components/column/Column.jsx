import { Card } from "../card/Card";
import { SColumn, SColumnTitleContainer, SColumnTitle, SCards, SCardItem } from "./Column.styled";


export const Column = ({ title, cardsByStatus }) => {
  return (
    <SColumn>
      <SColumnTitleContainer>
        <SColumnTitle>{title}</SColumnTitle>
      </SColumnTitleContainer>
      <SCards>
        {
          cardsByStatus[title].map((card) => {
            return (
              <SCardItem key={card._id}>
                <Card
                  id={card.id}
                  topic={card.topic}
                  title={card.title}
                  date={card.date}
                />
              </SCardItem>
            )
          })
        }
      </SCards>
    </SColumn>
  )
}
