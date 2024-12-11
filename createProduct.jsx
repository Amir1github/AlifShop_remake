import React, { useState, useEffect } from "react";

const Product = ({ title }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [installment, setInstallment] = useState(0);
  const [releaseDate, setReleaseDate] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);

  const fetchImage = async (query) => {
    const API_KEY = "AIzaSyDGRnDhzIz-pTnEBockMqN55NBTcRszrpA";
    const CX = "b3ab6fdae10574bcc";
    query = encodeURIComponent(query);
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&searchType=image&key=${API_KEY}&cx=${CX}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.items && data.items.length > 0
        ? data.items[0].link
        : "https://example.com/default-image.jpg";
    } catch (error) {
      console.error("Ошибка при запросе изображения:", error);
      return "https://example.com/default-image.jpg";
    }
  };

  const getRandomDate = () => {
    const year = Math.floor(Math.random() * (2030 - 2020 + 1)) + 2020;
    const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, "0");
    const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const generateProductDetails = async () => {
      const image = await fetchImage(title);
      setImageUrl(image);

      const priceValue = Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000;
      setPrice(priceValue);

      const hasDiscountValue = Math.random() < 0.5;
      setHasDiscount(hasDiscountValue);

      const discountValue = hasDiscountValue
        ? Math.floor(Math.random() * (50 - 20 + 1)) + 20
        : 0;
      setDiscountPercent(discountValue);

      const discounted = hasDiscountValue
        ? Math.floor(priceValue - (priceValue * discountValue) / 100)
        : priceValue;
      setDiscountedPrice(discounted);

      setInstallment(Math.floor(Math.random() * (24 - 6 + 1)) + 6);
      setReleaseDate(getRandomDate());

      // Проверяем, находится ли товар уже в избранном
      const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
      const isInFavourites = favourites.some((item) => item.title === title);
      setIsFavourite(isInFavourites);
    };

    generateProductDetails();
  }, [title]);

  const toggleFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    if (isFavourite) {
      // Удаляем из избранного
      const updatedFavourites = favourites.filter((item) => item.title !== title);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      setIsFavourite(false);
      alert("Товар удалён из избранного!");
    } else {
      // Добавляем в избранное
      const newFavourite = {
        title,
        imageUrl,
        price,
        discountedPrice,
        discountPercent,
        installment,
        releaseDate,
      };
      favourites.push(newFavourite);
      localStorage.setItem("favourites", JSON.stringify(favourites));
      setIsFavourite(true);
      alert("Товар добавлен в избранное!");
    }
  };

  return (
    <div className="w-[200px] text-left relative h-[400px] flex flex-col">
      <img className="w-[200px] h-[200px]" src={imageUrl} alt={title} />

      <div className="flex flex-row mb-2">
        <p className="font-bold">
          {hasDiscount ? `${discountedPrice} c.` : `${price} c.`}
        </p>
        {hasDiscount && (
          <>
            <p className="h-[25px] flex items-center justify-center w-[40px] absolute top-[160px] bg-[red] text-[white] rounded-[7px] text-[14px]">
              {discountPercent}%
            </p>
            <p className="text-gray-500 line-through ml-[10px]">
              {price} c.
            </p>
          </>
        )}
      </div>

      <p className="text-gray-500">
        {Math.floor(price / installment)} × {installment} мес
      </p>
      <h1 className="text-lg font-medium">{title}</h1>
      <p className="text-sm">Дата выпуска: {releaseDate}</p>

      <div className="mt-auto flex justify-between items-center">
        <button className="bg-yellow-400 h-[35px] w-[105px] rounded-[8px] hover:bg-yellow-100">
          В корзину
        </button>

        <button
          onClick={toggleFavourite}
          className={`text-[20px] ${isFavourite ? "text-red-500" : "text-gray-400"} hover:text-red-600`}
        >
          {isFavourite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default Product;
