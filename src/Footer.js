import React from "react";
import { Github, MessageCircle} from "lucide-react";


export default function Footer(){
    return( 
<footer className="bg-gray-100 dark:bg-gray-600 border-t border-gray-200 dark:border-gray-700 py-4 px-4 flex flex-col  sm:flex-row justify-center items-center sm:space-x-2 space-y-1 sm:space-y-0 text-center text-sm ">
       <span className='text-sm'>
         @2025.All right is reserved.
         Created by 
        </span>

        <a href='https://benevolent-druid-a3543f.netlify.app' 
           target='_blank' rel='noopener noreferrer'
           className='text-sm  text-blue-600 dark:text-blue-400 hover:underline '>

            Yegane Salehi
        </a>


      <a href='https://github.com/Yegan-S'
         target='_blank' rel='noopener noreferrer'
         className='text-sm text-blue-600 dark:text-blue-400 hover:text-orange-600 dark:hover:text-white transition'>
         <Github size={20}/>
      </a>

      <a href='https://wa.me/+989304195183'
         target='_blank' rel='noopener noreferrer'
         className='text-sm text-blue-600 dark:text-blue-400 hover:text-orange-600 dark:hover:text-white transition'>
         <MessageCircle size={20}/>
      </a>

      </footer>
    );

}