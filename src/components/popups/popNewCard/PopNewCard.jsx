import { Calendar } from "../../calendar/Calendar";
import { SWrapper, SContainer, SBlock, SContent, STitle, SXButton, SNewCardWrapper, SFormNewCard, SFormBlock, SFormTitle, SFormInput, SFormDescribe, SCategoriesWrapper, SCategoriesTitle, SCategoriesThemesWrapper, SCategoriesThemeContainerOrange, SCategoriesThemeOrange, SCategoriesThemeContainerGreen, SCategoriesThemeGreen, SCategoriesThemeContainerPurple, SCategoriesThemePurple, BSButtonWrapper } from "./PopNewCard.styled";
import { Button } from "../../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { TasksContext } from "../../context/TasksContext";


// export const PopNewCard = ({ token, addTask }) => {
export const PopNewCard = () => {
  const {
    addTask,
    token
  } = useContext(TasksContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const currentDate = new Date().toISOString();

  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  return token ? (
    <SWrapper>
      <SContainer>
        <SBlock>
          <SContent>
            <STitle>Создание задачи</STitle>
            <Link to="/">
              <SXButton href="#">&#10006;</SXButton>
            </Link>
            <SNewCardWrapper>
              <SFormNewCard>

                <SFormBlock>
                  <SFormTitle htmlFor="formTitle">Название задачи</SFormTitle>
                  <SFormInput
                    onChange={(event) => {
                      setTitle(event.target.value)
                    }}
                    value={title} type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                </SFormBlock>

                <SFormBlock>
                  <SFormTitle htmlFor="textArea">Описание задачи</SFormTitle>
                  <SFormDescribe
                    onChange={(event) => {
                      setDescription(event.target.value)
                    }}
                    value={description} name="text" id="textArea" placeholder="Введите описание задачи..."></SFormDescribe>
                </SFormBlock>

              </SFormNewCard>
              <Calendar />
            </SNewCardWrapper>
            <SCategoriesWrapper>
              <SCategoriesTitle>Категория</SCategoriesTitle>
              <SCategoriesThemesWrapper>
                <SCategoriesThemeContainerOrange>
                  <SCategoriesThemeOrange>Web Design</SCategoriesThemeOrange>
                </SCategoriesThemeContainerOrange>
                {/* </div> */}
                <SCategoriesThemeContainerGreen>
                  <SCategoriesThemeGreen>Research</SCategoriesThemeGreen>
                </SCategoriesThemeContainerGreen>
                {/* </div> */}
                <SCategoriesThemeContainerPurple>
                  <SCategoriesThemePurple>Copywriting</SCategoriesThemePurple>
                </SCategoriesThemeContainerPurple>
              </SCategoriesThemesWrapper>
            </SCategoriesWrapper>
          </SContent>
          <BSButtonWrapper>
            <Button
              onClick={async () => {
                navigate("/");
                await addTask({
                  // token,
                  newTask: {
                    title: title,
                    topic: "Research",
                    status: "Без статуса",
                    description: description,
                    date: currentDate,
                  }
                });
                setTitle("");
                setDescription("");
                // navigate("/");
              }}
              id="btnCreate" width="132px" text="Создать задачу" type="primary" disabled={false}></Button>
          </BSButtonWrapper>
        </SBlock>
      </SContainer>
    </SWrapper >
  ) : null;
};
