import React, { useState } from "react";
import Product from "../../createProduct"; // Убедитесь, что путь к компоненту Product корректный

const Category_slide = ({ category }) => {
  const subcategories = category.subcategories;
  const [translateX, setTranslateX] = useState(0); // Состояние для хранения сдвига

  const handlePrev = () => {
    // Сдвиг влево на ширину одного элемента (например, 230px)
    setTranslateX((prev) => Math.min(prev + 230, 0));
  };

  const handleNext = () => {
    // Сдвиг вправо на ширину одного элемента
    setTranslateX((prev) => Math.max(prev - 230, -(subcategories.length - 4) * 230));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[70px] mb-[30px]">
      <div className="flex justify-between w-[84%]">
        <h1 className="font-bold text-[25px]">{category.name}</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="h-[40px] w-[40px] flex justify-center items-center text-2xl font-bold bg-yellow-400 rounded-full hover:bg-gray-400"
            disabled={translateX === 0}
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="h-[40px] w-[40px] flex justify-center items-center text-2xl font-bold bg-yellow-400 rounded-full hover:bg-gray-400"
            disabled={translateX <= -(subcategories.length - 4) * 230}
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center mt-[20px] w-[1100px]">
        <div className="flex overflow-hidden w-full">
          <div
            className="flex gap-[30px] transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${translateX}px)`,
            }}
          >
            {subcategories.map((subcategory, index) => (
              <div key={index} className="min-w-[200px] text-center">
                {/* Используем компонент Product для отображения продуктов */}
                <Product title={subcategory[1]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category_slide;
