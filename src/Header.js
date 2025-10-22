import React, { useEffect, useState } from "react";
import { Scale, Sun, Moon, }from "lucide-react";

export default function Header(){
  const [darkMode, setDarkMode] = useState(false);
  
    // load saved mode from localStorage on first load
  
  
      useEffect(() =>{
      const savedMode = localStorage.getItem("theme");
      if (savedMode === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, []);
  
    //toggle dark mode and save to localStorage
  
    const toggleDarkMode = () => {
      if(darkMode){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setDarkMode(false);
      } else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setDarkMode(true)
      }
    };



    return(
     <div>
      <nav className="bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 shadow-lg">

        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between pr-16">

         
           <div className="flex items-center space-x-2">
           <Scale className="text-blue-600 dark:text-blue-400" size={28}/>
          </div>

          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 items-center "
          >گروه حقوقی سایداد
          </h1>

            { /* Right Section-links */ }

            <div className="flex space-x-6">

            <a href="#" className=" text-gray-800 dark:text-gray-200  hover:text-blue-600 dark:hover:text-gray-400 text-lg font-medium"> تماس</a>
            <a href="#" className=" text-gray-800 dark:text-gray-200  hover:text-blue-600 dark:hover:text-gray-400 text-lg font-medium">خدمات</a>
            <a href="#" className=" text-gray-800 dark:text-gray-200  hover:text-blue-600 dark:hover:text-gray-400 text-lg font-medium"> درباره ما </a>
          
      <div className="absolute top-2 right-4">

           <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform"
                  >
          
                    {darkMode ? <Sun size={20} /> : <Moon size={20} /> }
                  </button>
                  </div>
          
          </div>
        </div>
     
    
   
  </nav>

       
     </div>
    );
}