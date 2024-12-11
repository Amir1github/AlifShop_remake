import React, { useState, useEffect } from "react";

const Profile_settings = () => {
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : { name: "", phone: "", address: "" };
  });

  // Функция для обновления `localStorage` при изменении данных
  const updateLocalStorage = (key, value) => {
    const updatedData = { ...userData, [key]: value };
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };

  return (
    <div className="bg-gray-100 w-[350px] h-auto rounded-[18px] flex flex-col p-[20px]">
      <p className="font-bold text-[20px]">Учетные данные</p>
      <div className="mt-[10px]">
        <p className="text-gray-700">Полное имя</p>
        <input
          type="text"
          value={userData.name}
          onChange={(e) => updateLocalStorage("name", e.target.value)}
          className="border w-full p-[10px] rounded-[8px] mt-[5px]"
          placeholder="Введите ваше имя"
        />
      </div>
      <div className="mt-[20px]">
        <p className="text-gray-700">Ваш номер телефона</p>
        <input
          type="text"
          value={userData.phone}
          onChange={(e) => updateLocalStorage("phone", e.target.value)}
          className="border w-full p-[10px] rounded-[8px] mt-[5px]"
          placeholder="Введите ваш номер телефона"
        />
      </div>
      <p className="font-bold text-[20px] mt-[30px]">Адрес доставки</p>
      <div className="mt-[10px]">
        <p className="text-gray-700">Адрес</p>
        <input
          type="text"
          value={userData.address}
          onChange={(e) => updateLocalStorage("address", e.target.value)}
          className="border w-full p-[10px] rounded-[8px] mt-[5px]"
          placeholder="Введите ваш адрес"
        />
      </div>
    </div>
  );
};

export default Profile_settings;
