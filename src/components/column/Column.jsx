import { useContext } from "react";
import { Card } from "../card/Card";
import { Loader } from "../loader/Loader";
import { SColumn, SColumnTitleContainer, SColumnTitle, SCards, SCardItem } from "./Column.styled";
import { format } from "date-fns";
import { TasksContext } from "../../context/TasksContext";


export const Column = ({ title, cardsByStatus }) => {
  const { isLoading } = useContext(TasksContext);
  // console.log("isLoading: ", isLoading);


  return (
    <SColumn>
      <SColumnTitleContainer>
        <SColumnTitle>{title}</SColumnTitle>
      </SColumnTitleContainer>
      <SCards>
        {
          isLoading
            ?
            (
              <Loader />
            )
            :
            (
              cardsByStatus[title].map((card) => {
                return (
                  <SCardItem key={card._id}>
                    <Card
                      id={card._id}
                      topic={card.topic}
                      title={card.title}
                      date={format(card.date, "dd.MM.yy")}
                    />
                  </SCardItem>
                )
              })
            )
        }
      </SCards>
    </SColumn>
  )
}
