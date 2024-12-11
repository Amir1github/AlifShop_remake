import { useState } from 'react' 
import Main_content from '../main_content/main_content'; 
import Category_container from './category_container' 
import categories from '../../categories'
 const Category_btn =()=>{ 
  const [isCategoryClicked, setIsCategoryClicked] = useState(false); 
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const handleCategoryClick = () => { setIsCategoryClicked((prevState) => !prevState); }; 
  return( 
  <>
   <button onClick={handleCategoryClick} className="flex items-center pr-[20px] pl-[20px] bg-yellow-400 rounded-[9px] h-[45px] ml-[30px] hover:bg-yellow-200"> 
    {isCategoryClicked ? ( <svg class="-mr-0.75" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> ) : ( <svg className="mr-[10px] md:-mr-0.75" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
    <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2"d="M4 6h16M4 12h16M4 18h16"></path> </svg> )} Каталог товаров </button> 
    {isCategoryClicked ? (<Category_container />):(<div></div>)} </> ) } 
export default Category_btn;
