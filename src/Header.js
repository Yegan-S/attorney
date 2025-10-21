import React from "react";
import { Scale }from "lucide-react";

export default function Header(){
    return(
     <div>
      <nav class="bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 shadow-sm">

        <div class="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between pr-16">

         
           <div class="flex items-center space-x-2">
           <Scale className="text-blue-600 dark:text-blue-400" size={28}/>
          </div>

          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 items-center "
          >گروه حقوقی سایداد
          </h1>

            { /* Right Section -links */ }

            <div class="flex space-x-4">

            <a href="#" class=" text-gray-800 dark:text-gray-200  hover:text-blue-600 dark:hover:text-gray-400 text-sm font-medium">خانه</a>
            <a href="#" class=" text-gray-800 dark:text-gray-200  hover:text-blue-600 dark:hover:text-gray-400 text-sm font-medium">خدمات</a>
            <a href="#" class=" text-gray-800 dark:text-gray-200  hover:text-blue-600 dark:hover:text-gray-400 text-sm font-medium">تماس</a>
          </div>
        </div>
     
    
   
  </nav>

       
     </div>
    );
}