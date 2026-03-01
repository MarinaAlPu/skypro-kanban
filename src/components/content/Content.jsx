import { statuses } from "../../data";
import { Column } from "../column/Column";
import { SContent, SContainer, SBlock, SData } from "./Content.styled";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";


export const Content = () => {
  const {
    tasks,
    error,
    updateTaskStatus
  } = useContext(TasksContext);

  const cardsByStatus = statuses.reduce((acc, status) => {
    acc[status] = tasks.filter((task) => task.status === status);
    return acc;
  }, {});


  const onMoveCard = (cardId, targetColumnTitle) => {
    console.log(`В Content перемещаем карточку c cardId ${cardId} в столбец ${targetColumnTitle}`);

    // проверить новый статус карточки
    const currentCard = tasks.find(task => task._id === cardId);

    if (currentCard && currentCard.status !== targetColumnTitle) {
      updateTaskStatus(cardId, targetColumnTitle);
    }
  };


  return (
    <SContent>
      <p>{error}</p>
      <SContainer>
        <SBlock>
          <SData>
            {statuses.map((status) =>
              <Column
                key={status}
                title={status}
                cardsByStatus={cardsByStatus}
                onMoveCard={onMoveCard}
              />)}
          </SData>
        </SBlock>
      </SContainer>
    </SContent>
  )
}
