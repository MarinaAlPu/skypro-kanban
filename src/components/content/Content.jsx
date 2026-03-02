import { statuses } from "../../data";
import { Column } from "../column/Column";
import { SContent, SContainer, SBlock, SData } from "./Content.styled";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";
import { editTask } from "../../services/api";


export const Content = () => {
  const {
    tasks,
    error,
    updateTaskStatus,
    token,

  } = useContext(TasksContext);

  const cardsByStatus = statuses.reduce((acc, status) => {
    acc[status] = tasks.filter((task) => task.status === status);
    return acc;
  }, {});


  const onMoveCard = async (cardId, targetColumnTitle) => {
    console.log(`В Content перемещаем карточку c cardId ${cardId} в столбец ${targetColumnTitle}`);

    // проверить новый статус карточки
    const currentCard = tasks.find(task => task._id === cardId);
    // console.log("currentCard: ", currentCard);

    const updatedTask = {
      ...currentCard,
      status: targetColumnTitle
    };
    // console.log("updatedTask: ", updatedTask);

    if (currentCard && currentCard.status !== targetColumnTitle) {
      updateTaskStatus(cardId, targetColumnTitle);

      await editTask(token, cardId, updatedTask)
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
