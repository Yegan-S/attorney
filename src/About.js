import React from "react";


export default function About(){
    return(
        <div className="py-6">
            
    <h1 id="about" className="text-center  py-2 font-semibold text-lg text-gray-800 dark:text-gray-100 animate-fadeIn delay-200">
        درباره ما         
    </h1>

     <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-4">

        <div className="flex justify-center items-center w-44 h-44 sm:w-56 sm:h-56 border-2 border-gray-400 dark:border-gray-600  rounded-full sm:rounded-xl bg-white/80 dark:bg-black/40 shodow-md animate-fadeIn delay-300">

             <p className="text-sm text-center font-normal text-gray-800 dark:text-gray-100  leading-relaxed px-2">
            موسسه حقوقی سایداد با تکیه بر تجربه, تخصص و تعهد, مجموعه ایی از خدمات جامع در حوزه مشاوره و وکالت را به اشخاص حقیقی و حقوقی ارائه می دهد
                 </p>
                  </div>
                  
        <div className="flex justify-center items-center w-44 h-44 sm:w-56 sm:h-56  border-2 border-gray-400 dark:border-gray-600  rounded-full sm:rounded-xl bg-white/80 dark:bg-black/40 shodow-md animate-fadeIn delay-300">

              <p className="text-sm text-center font-normal text-gray-800 dark:text-gray-100 leading-relaxed px-2">
                تعهد, تخصص و تجربه در کنار دانش به روز حقوقی, این گروه را به انتخابی مطمئن برای مسائل حقوقی پیچیده تبدیل کرده است. 
                </p>
         </div>
        
        
         </div>

        </div>
    );
}