import React, { useState, useEffect } from "react";
import "../../pages/index.css";

const Profile_btns = ({ onButtonClick }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    // Функция для получения имени из localStorage
    const fetchUserName = () => {
      const userData = localStorage.getItem("userData");
      const parsedData = userData ? JSON.parse(userData) : null;
      setName(parsedData?.name || "Неидентифицированный пользователь");
    };

    // Первоначальная загрузка данных
    fetchUserName();

    // Обновление компонента при изменении localStorage
    const handleStorageChange = () => fetchUserName();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-gray-100 w-[350px] h-[400px] rounded-[18px] flex flex-col items-center">
      <button
        className="h-[80px] w-[90%] bg-[white] rounded-[10px] flex flex-col justify-center  mt-[20px]"
        onClick={() => onButtonClick("profile")}
      >
        <div className="flex mt-[10px]">
          <svg
            className="m-[10px]"
            height="52"
            width="52"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_14139_14261)">
              <rect y="0.236328" width="52" height="52" rx="26" fill="#E3E8EA"></rect>
              <circle cx="26.0625" cy="19.4238" r="9.1875" fill="white"></circle>
              <circle cx="26.0625" cy="49.6113" r="17.0625" fill="white"></circle>
            </g>
            <rect
              x="1"
              y="1.23633"
              width="50"
              height="50"
              rx="25"
              stroke="#E3E8EA"
              strokeWidth="2"
            ></rect>
          </svg>
          <div className="text-left">
            <p className="font-bold text-[17px]">{name}</p>
            {name === "Неидентифицированный пользователь"
                ? <p className="text-[red] text-[13px]">Неидентифицированный</p>
                : <p className="text-[green] text-[13px]">Идентифицированный</p>}
          </div>
        </div>
      </button>
      <div className="mt-[40px] w-[90%] rounded-[15px] bg-white flex flex-col items-center">
        <button
          className="h-[80px] w-[100%] bg-[white] rounded-[10px] flex justify-start items-center"
          onClick={() => onButtonClick("orders")}
        >
          <svg
            className="ml-[10px] mr-[10px]"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M23 6.066v12.065l-11.001 5.869-11-5.869v-12.131l11-6 11.001 6.066zm-21.001 11.465l9.5 5.069v-10.57l-9.5-4.946v10.447zm20.001-10.388l-9.501 4.889v10.568l9.501-5.069v-10.388zm-5.52 1.716l-9.534-4.964-4.349 2.373 9.404 4.896 4.479-2.305zm-8.476-5.541l9.565 4.98 3.832-1.972-9.405-5.185-3.992 2.177z" />
          </svg>
          <p className="font-bold text-[17px]">Заказы</p>
        </button>
        <hr className="w-[90%]"/>
        <button
          className="h-[80px] w-[100%] bg-[white] rounded-[10px] flex justify-start items-center"
          onClick={() => onButtonClick("favourites")}
        >
          <svg
            className="ml-[10px] mr-[10px]"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
          </svg>
          <p className="font-bold text-[17px]">Избранные</p>
        </button>
      </div>
      <button
        className="h-[70px] w-[90%] bg-[white] rounded-[10px] flex flex-col justify-center mt-[20px]"
        onClick={() => onButtonClick("logout")}
      >
        <div className="flex mt-[10px]">
          <svg
            className="ml-[10px] mr-[10px]"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M11 21h8v-2l1-1v4h-9v2l-10-3v-18l10-3v2h9v5l-1-1v-3h-8v18zm10.053-9l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z" />
          </svg>
          <p className="text-[red]">Выйти</p>
        </div>
      </button>
    </div>
  );
};

export default Profile_btns;
