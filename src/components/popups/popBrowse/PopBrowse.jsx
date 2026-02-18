import { SWrapper, SContainer, SBlock, SContent, STopBlock, STitle, SCategoriesThemeTop, SCategoryThemeTop, SStatusesWrapper, SStatusesTitle, SStatusesContent, SStatus, SStatusTheme, SFormWrapper, SForm, SFormBlock, SFormLabel, SFormText, SButtonsWrapper, SButtonsGroup } from "./PopBrowse.styled";
import { Calendar } from "../../calendar/Calendar";
import { Button } from "../../button/Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../../context/TasksContext";
import { statuses } from "../../../data";


export const PopBrowse = () => {
  const navigate = useNavigate();

  const {
    tasks,
    token,
    editTasks,
    deleteTasks
  } = useContext(TasksContext);

  const [isEditTask, setIsEditTask] = useState(false);

  const { id } = useParams();

  const card = tasks.find((card) => card._id === id);
  const taskCategory = card?.topic;
  const initialTaskStatus = card?.status;
  const initialTaskDescription = card?.description;

  const [currentTaskStatus, setCurrentTaskStatus] = useState(initialTaskStatus);
  const [currentTaskDescription, setCurrentTaskDescription] = useState(initialTaskDescription || "");


  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });


  const onEditTask = () => {
    setIsEditTask(true);
  };

  const onSelectTaskNewStatus = (newStatus) => {
    setCurrentTaskStatus(newStatus);
  };

  const onSaveTask = async () => {
    try {
      const updatedTask = {
        ...card,
        description: currentTaskDescription,
        status: currentTaskStatus,
      };

      await editTasks(token, id, updatedTask);

      navigate("/");
    } catch (error) {
      console.error("Ошибка при сохранении отдерактированной задачи:", error.message);
    }
  };

  const onDeleteTask = async () => {
    try {
      await deleteTasks(token, id);
      // updateTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      navigate("/");
    }
    catch (error) {
      console.error("Ошибка при удалении задачи:", error.message);
    }
  };

  const onCancel = () => {
    setCurrentTaskStatus(initialTaskStatus);
    setCurrentTaskDescription(initialTaskDescription);
  };


  return (
    <SWrapper id="popBrowse">
      <SContainer>
        <SBlock>
          <SContent>
            <STopBlock>
              <STitle>{card?.title}</STitle>

              <SCategoriesThemeTop $taskCategory={taskCategory}>
                <SCategoryThemeTop>{card?.topic}</SCategoryThemeTop>
              </SCategoriesThemeTop>

            </STopBlock>
            <SStatusesWrapper>
              <SStatusesTitle>Статус</SStatusesTitle>
              {
                isEditTask
                  ?
                  <SStatusesContent>
                    {
                      statuses.map((status) => {
                        return (
                          <SStatus
                            key={status}
                            onClick={(e) => onSelectTaskNewStatus(e.target.textContent)}
                            $isStatusSelected={currentTaskStatus === status}
                            style={{ cursor: "pointer" }}
                          >
                            <SStatusTheme $isStatusSelected={currentTaskStatus === status}>{status}</SStatusTheme>
                          </SStatus>
                        )
                      })
                    }
                  </SStatusesContent>

                  :
                  <SStatusesContent>
                    <SStatus $isStatusSelected={currentTaskStatus === card?.status}>
                      <SStatusTheme $isStatusSelected={currentTaskStatus === card?.status}>{card?.status}</SStatusTheme>
                    </SStatus>
                  </SStatusesContent>
              }
            </SStatusesWrapper>

            <SFormWrapper>
              <SForm className="form-browse" id="formBrowseCard" action="#">
                <SFormBlock>
                  <SFormLabel htmlFor="textArea01">Описание задачи</SFormLabel>
                  <SFormText
                    $isEditTask={isEditTask}
                    name="text" id="textArea01"
                    readOnly={!isEditTask}
                    value={currentTaskDescription}
                    placeholder="Введите описание задачи..."
                    onChange={(e) => setCurrentTaskDescription(e.target.value)}
                  >
                  </SFormText>
                </SFormBlock>
              </SForm>

              <Calendar isEditTask={isEditTask} />

            </SFormWrapper>

            {
              isEditTask
                ?
                <SButtonsWrapper>
                  <SButtonsGroup>
                    <Button
                      onClick={onSaveTask}
                      text="Сохранить" type="primary" width="99px" disabled={false}><a href="#"></a></Button>
                    <Button
                      onClick={onCancel}
                      text="Отменить" type="secondary" width="93px" disabled={false}><a href="#"></a></Button>
                    <Button
                      onClick={onDeleteTask}
                      id="btnDelete" text="Удалить задачу" type="secondary" width="131px" disabled={false}>
                      <a href="#"></a>
                    </Button>
                  </SButtonsGroup>
                  <Link to="/">
                    <Button text="Закрыть" type="primary" width="86px" disabled={false}><a href="#"></a></Button>
                  </Link>
                </SButtonsWrapper>
                :
                <SButtonsWrapper>
                  <SButtonsGroup>
                    <Button
                      onClick={onEditTask}
                      text="Редактировать задачу" type="secondary" width="176px" disabled={false}><a href="#"></a></Button>
                    <Button
                      onClick={onDeleteTask}
                      text="Удалить задачу" type="secondary" width="131px" disabled={false}><a href="#"></a></Button>
                  </SButtonsGroup>
                  <Link to="/">
                    <Button text="Закрыть" type="primary" width="86px" disabled={false}><a href="#"></a></Button>
                  </Link>
                </SButtonsWrapper>
            }

          </SContent>
        </SBlock>
      </SContainer>
    </SWrapper>
  );
};