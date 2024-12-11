import categories from "../../categories";
import { useState } from "react";

const Category_container = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="absolute z-50 bg-gray-200 flex p-4 top-[100px] w-[100%] h-[300px]">
      {/* Список категорий */}
      <div className="categories w-1/3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-rounded-full">
        <ul>
          {Object.keys(categories).map((key) => (
            <li
              key={key}
              className={`px-4 py-2 cursor-pointer rounded 
                hover:bg-white  
                ${selectedCategory === key ? "bg-white text-[orange] font-bold" : ""}`}
              onClick={() => setSelectedCategory(key)}
            >
              {categories[key].name}
            </li>
          ))}
        </ul>
      </div>

      {/* Отображение подкатегорий */}
      <div className="subcategories w-2/3 text-[black] bg-white shadow-md p-4 rounded">
        {selectedCategory ? (
          <ul>
            {categories[selectedCategory].subcategories.map((subcategory, index) => (
              <li
                key={index}
                className="font-[700] hover:text-[orange] px-2 py-1 mb-1 rounded cursor-pointer"
              >
                {subcategory[0]}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Выберите категорию, чтобы увидеть подкатегории</p>
        )}
      </div>
    </div>
  );
};

export default Category_container;
