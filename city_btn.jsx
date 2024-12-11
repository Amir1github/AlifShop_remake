import { useState } from "react";
const City_btn = ()=>{
    const [currentCity, setCurrentCity] = useState("Душанбе");
  const [isCityModalOpen, setCityIsModalOpen] = useState(false);
  const cities = [
    "Душанбе",
    "Худжанд",
    "Вахдат",
    "Турсунзаде",
    "Гиссар",
    "Бохтар",
    "Куляб",
    "Истаравшан",
    "Исфара",
    "Канибадам",
    "Пенджикент",
    "Яван",
  ];

  const handleCityClick = (city) => {
    setCurrentCity(city);
    setCityIsModalOpen(false); 
  };
   return(
    <>
    <button className="flex flex-col justify-center items-center h-[100px] w-[100px] hover:text-yellow-400" onClick={() => setCityIsModalOpen(true)}>
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
  >
    <path
      d="M20 10.1818C20 15.5271 14.3556 20.2309 12.5491 21.5996C12.2212 21.8479 11.7788 21.8479 11.4509 21.5996C9.6444 20.2309 4 15.5271 4 10.1818C4 8.01186 4.84285 5.93079 6.34315 4.3964C7.84344 2.86201 9.87827 2 12 2C14.1217 2 16.1566 2.86201 17.6569 4.3964C19.1571 5.93079 20 8.01186 20 10.1818Z"
      stroke="#222222"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      stroke="#222222"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  {currentCity}
  
</button>
    {isCityModalOpen && (
        <div className="absolute z-[100] top-[70px] h-[500px] left-[30%] w-[500px] bg-white shadow-lg rounded p-4">
            <div className='flex justify-between'>
            <h2 className="text-lg font-bold mb-4">Выберите ваш город</h2>
            <svg onClick={()=> setCityIsModalOpen(false)} className='w-[30px] h-[30px]' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
            </div>
          
            <div className="grid grid-cols-2 gap-2">
  {cities.map((city) => (
    <button
      key={city}
      className={`px-4 py-2 rounded h-[60px] ${
        city === currentCity
          ? "bg-yellow-400 text-white"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
      onClick={() => handleCityClick(city)}
    >
      {city}
    </button>
  ))}

</div>

        </div>
      )}
    </>

    )
}
export default City_btn;