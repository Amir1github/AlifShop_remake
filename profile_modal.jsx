import { useState, useEffect } from "react";

const ProfileModal = () => {
  const [isVerificated, setVerificated] = useState(false); // Статус авторизации
  const [timeLeft, setTimeLeft] = useState(60);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  // Проверяем, есть ли данные в localStorage при загрузке
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setVerificated(true);
    }
  }, []);

  useEffect(() => {
    if (isCodeSent && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isCodeSent, timeLeft]);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setIsCodeSent(true);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (verificationCode === "1111") {
      // Сохраняем данные пользователя в localStorage
      localStorage.setItem(
        "userData",
        JSON.stringify({
          name: null,
          address: null,
          phone: null,
        })
      );
      setVerificated(true); // Устанавливаем статус "авторизован"
      closeProfileModal();
    } else {
      alert("Неверный код!");
    }
  };

  const openProfileModal = () => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      // Если данные есть, переходим на страницу профиля
      window.location.href = "/profile";
    } else {
      // Иначе открываем модалку для верификации
      setProfileModalOpen(true);
    }
  };

  const closeProfileModal = () => setProfileModalOpen(false);

  return (
    <>
      <button
        className="flex flex-col justify-center items-center h-[100px] w-[100px] hover:text-yellow-400"
        onClick={openProfileModal}
      >
        <svg
          height="24"
          width="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0703 21V19C20.0703 17.9391 19.6489 16.9217 18.8987 16.1716C18.1486 15.4214 17.1312 15 16.0703 15H8.07031C7.00945 15 5.99203 15.4214 5.24189 16.1716C4.49174 16.9217 4.07031 17.9391 4.07031 19V21"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.0703 11C14.2795 11 16.0703 9.20914 16.0703 7C16.0703 4.79086 14.2795 3 12.0703 3C9.86117 3 8.07031 4.79086 8.07031 7C8.07031 9.20914 9.86117 11 12.0703 11Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        Профиль
      </button>
      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-[350px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Вход</h2>
              <button
                onClick={closeProfileModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 mb-4">Введите номер телефона</p>
            <p className="text-sm text-gray-500 mb-6">
              Мы отправим вам СМС с кодом подтверждения
            </p>
            <form onSubmit={handlePhoneSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-medium"
                >
                  Телефон
                </label>
                <div className="flex items-center mt-2 border border-gray-300 rounded-md px-3 py-2 focus-within:border-orange-500">
                  <span className="text-gray-600 mr-2">+992</span>
                  <input
                    id="phone"
                    type="text"
                    placeholder="___ ___ ___"
                    className="flex-1 focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-500"
              >
                Получить код
              </button>
            </form>
            {isCodeSent && (
              <form onSubmit={handleCodeSubmit}>
                <div className="mt-6">
                  <label
                    htmlFor="verificationCode"
                    className="block text-gray-700 text-sm font-medium"
                  >
                    Введите код из СМС 1111
                  </label>
                  <input
                    id="verificationCode"
                    type="text"
                    maxLength="6"
                    placeholder="___ ___"
                    className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-orange-500"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Срок действия кода истекает через {timeLeft} секунд
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-white py-2 rounded-md mt-4 hover:bg-yellow-500"
                >
                  Подтвердить
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileModal;
