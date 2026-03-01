import { useContext } from "react";
import { Card } from "../card/Card";
import { Loader } from "../loader/Loader";
import { SColumn, SColumnTitleContainer, SColumnTitle, SCards, SCardItem } from "./Column.styled";
import { format } from "date-fns";
import { TasksContext } from "../../context/TasksContext";
import { SCardContainerGhost } from "../card/Card.styled";


export const Column = ({ title, cardsByStatus, onMoveCard }) => {
  const { isLoading, isDraggable, draggableCardId, setDraggableCardId } = useContext(TasksContext);
  // console.log("isLoading: ", isLoading);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain');
    console.log(`В Column перемещаем карточку с id ${cardId} в столбец ${title}`);
    setDraggableCardId(cardId);

    onMoveCard(cardId, title);
  };


  return (
    <SColumn>
      <SColumnTitleContainer>
        <SColumnTitle>{title}</SColumnTitle>
      </SColumnTitleContainer>
      <SCards
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
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
                    {isDraggable && card._id === draggableCardId
                      ?
                      <SCardContainerGhost />
                      :
                      <Card
                        id={card._id}
                        topic={card.topic}
                        title={card.title}
                        date={format(card.date, "dd.MM.yy")}
                      />}
                  </SCardItem>
                )
              })
            )
        }
      </SCards>
    </SColumn>
  )
}
