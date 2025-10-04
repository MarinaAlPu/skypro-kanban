import { useState, useEffect } from "react";
import { PopUser } from "../popups/popUser/PopUser";


export const Header = () => {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  const handleClick = () => {
    // console.log("Нажали на ссылку");
    // const popup = document.querySelector(".header__pop-user-set");
    // popup.style.display = "block";

    setIsPopUserOpen(!isPopUserOpen);
  };

  // useEffect(() => {
  //   console.log("Состояние isPopUserOpen изменилось:", isPopUserOpen);
  // }, [isPopUserOpen]);


  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
            <a href="#user-set-target" className="header__user _hover02"
              onClick={handleClick}
            >Ivan Ivanov</a>
            {/* <PopUser />
            <PopUser isPopUserOpen={isPopUserOpen} /> */}
            {isPopUserOpen && <PopUser />}
          </nav>
        </div>
      </div>
    </header >
  );
};
