import { useContext } from "react";
import { Card } from "../card/Card";
import { Loader } from "../loader/Loader";
import { SColumn, SColumnTitleContainer, SColumnTitle, SCards, SCardItem, SGhostContainer } from "./Column.styled";
import { format } from "date-fns";
import { TasksContext } from "../../context/TasksContext";
import { SCardContainerGhost, SCardContainerGhostColumnEnd } from "../card/Card.styled";

export const Column = ({ title, cardsByStatus, onMoveCard }) => {
  const { isLoading, isDraggable, draggableCardId, setIsDraggable, setDraggableCardId,
    dragStartColumn
  } = useContext(TasksContext);
  // console.log("isLoading: ", isLoading);

  // проверить, исходная колонка или нет
  // console.log("dragStartColumn: ", dragStartColumn);
  // console.log("title: ", title);
  const isStartColumn = dragStartColumn === title;

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain');
    // console.log(`В Column перемещаем карточку с id ${cardId} в столбец ${title}`);
    onMoveCard(cardId, title);
    setIsDraggable(false);
    setDraggableCardId(null);
  };


  return (
    <SColumn>
      <SColumnTitleContainer>
        <SColumnTitle>{title}</SColumnTitle>
      </SColumnTitleContainer>
      <SCards
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        {isLoading ? (
          <Loader />
        ) : (
          // cardsByStatus[title].map((card) =>
          // // {
          // // return 
          // (
          //   <SCardItem key={card._id}>
          //     {/* {isDraggable && card._id === draggableCardId
          //             ?
          //             <SCardContainerGhost />
          //             : */}
          //     <Card
          //       id={card._id}
          //       topic={card.topic}
          //       title={card.title}
          //       date={format(card.date, "dd.MM.yy")}
          //       isDragging={isDraggable && draggableCardId === card._id}
          //     />
          //     {/* } */}
          //     {isDraggable && draggableCardId === card._id && (
          //       <SCardContainerGhost />
          //     )}
          //   </SCardItem>
          // )
          //   // }
          // )


          <>
            {/* карточки */}
            {cardsByStatus[title].map((card) => (
              <SCardItem key={card._id}>
                <Card
                  id={card._id}
                  topic={card.topic}
                  title={card.title}
                  date={format(card.date, "dd.MM.yy")}
                  columnTitle={title}
                  isDragging={draggableCardId === card._id}
                />
                {/* призрак на месте перетаскиваемой карточки */}
                {isDraggable &&
                  isStartColumn &&
                  draggableCardId === card._id && (
                    // <SCardContainerGhost />
                    <SCardContainerGhostColumnEnd />
                  )}
              </SCardItem>
            ))}

            {/* призрак в конце всех колонок, кроме исходной */}
            {isDraggable && !isStartColumn && (
              <SGhostContainer>
                <SCardContainerGhostColumnEnd />
              </SGhostContainer>
            )}
          </>
        )
        }
      </SCards>
    </SColumn>
  )
}
