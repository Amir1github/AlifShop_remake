import Profile_btns from "./profile_btns";
import React, { useState } from "react";
import Profile_settings from "./profile_settings";
import Favourites from "./favourites";

const Profile_info = () => {
  const [content, setContent] = useState(""); // Для хранения текущего контента

  const handleButtonClick = (buttonType) => {
    switch (buttonType) {
      case "profile":
        setContent(<Profile_settings />);
        break;
      case "orders":
        setContent("Здесь отображаются заказы.");
        break;
      case "favourites":
        setContent(<Favourites />);
        
        break;
      case "logout":
            localStorage.removeItem("userData"); // Удаляем данные из localStorage
            setContent(<p className="font-bold text-[30px]">Вы успешно вышли из аккаунта.</p>); // Устанавливаем сообщение об успешном выходе
            break;

      default:
        setContent("");
    }
  };

  return (
    <div className="flex gap-[30px] justify-center items-center">
      <Profile_btns onButtonClick={handleButtonClick} />
      <div>
    
        {content}
      </div>
    </div>
  );
};

export default Profile_info;
