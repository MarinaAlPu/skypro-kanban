import { Calendar } from "../../calendar/Calendar";
import { SWrapper, SContainer, SBlock, SContent, STitle, SXButton, SNewCardWrapper, SFormNewCard, SFormBlock, SFormTitle, SFormInput, SFormDescribe, SCategoriesWrapper, SCategoriesTitle, SCategoriesThemesWrapper, SCategoriesThemeContainerOrange, SCategoriesThemeOrange, SCategoriesThemeContainerGreen, SCategoriesThemeGreen, SCategoriesThemeContainerPurple, SCategoriesThemePurple, BSButtonWrapper } from "./PopNewCard.styled";
import { Button } from "../../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const PopNewCard = ({ isAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  return isAuth ? (
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
                  <SFormInput type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                </SFormBlock>
                <SFormBlock>
                  <SFormTitle htmlFor="textArea">Описание задачи</SFormTitle>
                  <SFormDescribe name="text" id="textArea" placeholder="Введите описание задачи..."></SFormDescribe>
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
            <Button id="btnCreate" width="132px" text="Создать задачу" type="primary" disabled={false}></Button>
          </BSButtonWrapper>
        </SBlock>
      </SContainer>
    </SWrapper>
  ) : null;
};
