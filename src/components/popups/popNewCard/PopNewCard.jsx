import { Calendar } from "../../calendar/Calendar";
import { SPageBackground, SWrapper, SContainer, SBlock, SContent, STitle, SXButton, SNewCardWrapper, SFormNewCard, SFormBlock, SFormTitle, SFormInput, SFormDescribe, SCategoriesWrapper, SCategoriesTitle, SCategoriesThemesWrapper, SCategoriesThemeContainerOrange, SCategoriesThemeOrange, SCategoriesThemeContainerGreen, SCategoriesThemeGreen, SCategoriesThemeContainerPurple, SCategoriesThemePurple, BSButtonWrapper } from "./PopNewCard.styled";
import { Button } from "../../button/Button";


export const PopNewCard = () => {
  return (
    <SPageBackground>
      {/* <div className="pop-new-card" id="popNewCard"> */}
      <SWrapper>
        {/* <div className="pop-new-card__container"> */}
        <SContainer>
          {/* <div className="pop-new-card__block"> */}
          <SBlock>
            {/* <div className="pop-new-card__content"> */}
            <SContent>
              {/* <h3 className="pop-new-card__ttl">Создание задачи</h3> */}
              <STitle>Создание задачи</STitle>
              {/* <a href="#" className="pop-new-card__close">&#10006;</a> */}
              <SXButton href="#">&#10006;</SXButton>
              {/* <div className="pop-new-card__wrap"> */}
              <SNewCardWrapper>
                {/* <form className="pop-new-card__form form-new" id="formNewCard" action="#"> */}
                <SFormNewCard>
                  {/* <div className="form-new__block"> */}
                  <SFormBlock>
                    {/* <label htmlFor="formTitle" className="subttl">Название задачи</label> */}
                    <SFormTitle htmlFor="formTitle">Название задачи</SFormTitle>
                    {/* <input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus /> */}
                    <SFormInput type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                  </SFormBlock>
                  {/* </div> */}
                  {/* <div className="form-new__block"> */}
                  <SFormBlock>
                    {/* <label htmlFor="textArea" className="subttl">Описание задачи</label> */}
                    <SFormTitle htmlFor="textArea">Описание задачи</SFormTitle>
                    {/* <textarea className="form-new__area" name="text" id="textArea" placeholder="Введите описание задачи..."></textarea> */}
                    <SFormDescribe name="text" id="textArea" placeholder="Введите описание задачи..."></SFormDescribe>
                  </SFormBlock>
                  {/* </div> */}
                </SFormNewCard>
                {/* </form> */}
                <Calendar />
                {/* </div> */}
              </SNewCardWrapper>
              {/* <div className="pop-new-card__categories categories"> */}
              <SCategoriesWrapper>
                {/* <p className="categories__p subttl">Категория</p> */}
                <SCategoriesTitle>Категория</SCategoriesTitle>
                {/* <div className="categories__themes"> */}
                <SCategoriesThemesWrapper>
                  {/* <div className="categories__theme _orange _active-category"> */}
                  <SCategoriesThemeContainerOrange>
                    {/* <p className="_orange">Web Design</p> */}
                    <SCategoriesThemeOrange>Web Design</SCategoriesThemeOrange>
                  </SCategoriesThemeContainerOrange>
                  {/* </div> */}
                  {/* <div className="categories__theme _green"> */}
                  <SCategoriesThemeContainerGreen>
                    {/* <p className="_green">Research</p> */}
                    <SCategoriesThemeGreen>Research</SCategoriesThemeGreen>
                  </SCategoriesThemeContainerGreen>
                  {/* </div> */}
                  {/* <div className="categories__theme _purple"> */}
                  <SCategoriesThemeContainerPurple>
                    {/* <p className="_purple">Copywriting</p> */}
                    <SCategoriesThemePurple>Copywriting</SCategoriesThemePurple>
                  </SCategoriesThemeContainerPurple>
                  {/* </div> */}
                </SCategoriesThemesWrapper>
                {/* </div> */}
              </SCategoriesWrapper>
              {/* </div> */}
            </SContent>
              {/* <button className="form-new__create _hover01" id="btnCreate">Создать задачу</button> */}
              <BSButtonWrapper>
                {/* <button className="form-new__create _hover01" id="btnCreate" text="Создать задачу" type="primary" disabled={false}></button> */}
                <Button id="btnCreate" width="132px" text="Создать задачу" type="primary" disabled={false}></Button>
              </BSButtonWrapper>
            {/* </div> */}
          </SBlock>
          {/* </div> */}
        </SContainer>
        {/* </div> */}
      </SWrapper>
      {/* </div> */}
    </SPageBackground >
  );
};