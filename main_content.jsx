import React, { useState, useEffect } from "react";
import createProduct from "../../createProduct.jsx";
import categories from "../../categories.js";
import Category_slide from "./category_slide.jsx";
import Slider from "./slider.jsx";
const Main_content = () => {
  
  return (
    <div>
        <Slider />
        <Category_slide category={categories.bagsAndAccessories} />
        <Category_slide category={categories.books} />
        <Category_slide category={categories.computerEquipment} />
        <Category_slide category={categories.footwear} />
    </div>
    
  );
};

export default Main_content;
