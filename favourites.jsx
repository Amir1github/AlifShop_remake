import React, { useState, useEffect } from "react";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  // Получение данных из localStorage при загрузке компонента
  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  // Удаление товара из избранного
  const removeFromFavourites = (title) => {
    const updatedFavourites = favourites.filter((product) => product.title !== title);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    alert("Товар удалён из избранного!");
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Избранные товары</h1>

      {favourites.length > 0 ? (
        <div className="flex flex-wrap gap-[30px]">
          {favourites.map((product, index) => (
            <div
              key={index}
              className="w-[200px] border rounded-lg shadow-md p-4 flex flex-col items-center relative"
            >
                <button
                onClick={() => removeFromFavourites(product.title)}
                className="absolute top-[0px] right-[0px] mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                <svg className='w-[20px] h-[20px]' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/></svg>
              </button>
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-32 h-32 object-cover mb-4"
              />
              <h2 className="text-lg font-medium">{product.title}</h2>
              <p className="text-gray-500">
                {product.discountedPrice || product.price} c.
              </p>
              {product.discountPercent > 0 && (
                <p className="text-red-500 text-sm">
                  Скидка: {product.discountPercent}%
                </p>
              )}
              <p className="text-sm">Дата выпуска: {product.releaseDate}</p>
              
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">У вас нет избранных товаров.</p>
      )}
    </div>
  );
};

export default Favourites;