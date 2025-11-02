import { SWrapper, SName, SMail, SThemeButton, SThemeTitle, SThemeInput, SButtonWrapper } from "./PopUser.styled";
import { Button } from "../../button/Button";


export const PopUser = () => {
  return (
    // <div className="header__pop-user-set pop-user-set" id="user-set-target">
    <SWrapper id="user-set-target">
      {/* <!-- <a href="">x</a> --> */}
      {/* <p className="pop-user-set__name">Ivan Ivanov</p> */}
      <SName>Ivan Ivanov</SName>
      {/* <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p> */}
      <SMail>ivan.ivanov@gmail.com</SMail>
      {/* <div className="pop-user-set__theme"> */}
      <SThemeButton>
        {/* <p>Темная тема</p> */}
        <SThemeTitle>Темная тема</SThemeTitle>
        {/* <input type="checkbox" className="checkbox" name="checkbox" /> */}
        <SThemeInput type="checkbox" name="checkbox" />
      </SThemeButton>
      {/* </div> */}
      <SButtonWrapper>
        {/* <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button> */}
        <Button text="Выйти" type="secondary" width="72px" disabled={false}><a href="#popExit"></a></Button>
      </SButtonWrapper>
    </SWrapper>
    // </div>
  )
}