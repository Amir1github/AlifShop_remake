import { useState } from 'react'
import categories from '../../categories';


const Search_bar=()=>{
    const [searchQuery, setSearchQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const handleClear = () => {
        setSearchQuery(""); 
      };
      const suggestions = Object.values(categories).flatMap((category) =>
        category.subcategories.map((subcategory) => subcategory[1])
      );
    
      const filteredSuggestions = suggestions.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
    return(
    <div className="relative w-[500px]">
      <div className=" ml-[20px] flex items-center border border-gray-300 rounded-[9px] overflow-hidden">
        <input
          type="text"
          className="flex-1 px-4 py-2 outline-none"
          placeholder="Введите запрос..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)} 
        />
        {searchQuery && ( 
        <button className="px-4 text-gray-600 hover:text-black" onClick={handleClear}>
          <svg
            className="h-[30px] w-[30px]"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
              fillRule="nonzero"
            />
          </svg>
        </button>
        
      )}
      <button className='bg-yellow-400 h-[50px] w-[60px] hover:bg-yellow-200 flex justify-center items-center'>
            <svg color="#222222" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </div>
      {isFocused && searchQuery && (
        <ul className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => setSearchQuery(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">Ничего не найдено</li>
          )}
        </ul>
      )}
    </div>
    )
}
export default Search_bar;