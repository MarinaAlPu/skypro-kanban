import { Card } from "../card/Card";
import { SColumn, SColumnTitleContainer, SColumnTitle, SCards, SCardItem } from "./Column.styled";


export const Column = ({ title, cardsByStatus }) => {
  return (
    // <div className="main__column column">
    <SColumn>
      {/* <div className="column__title"> */}
      <SColumnTitleContainer>
        <SColumnTitle>{title}</SColumnTitle>
      </SColumnTitleContainer>
      {/* <div className="cards"> */}
      <SCards>
        {
          cardsByStatus[title].map((card) => {
            return (
              // <div className="cards__item" key={card.id}>
              <SCardItem key={card.id}>
                <Card
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
