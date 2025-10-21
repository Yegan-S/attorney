import React from "react";
import { Scale }from "lucide-react";

export default function Header(){
    return(
     <div>
    
 
<nav class="relative">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

    
 
    <div class="relative flex h-16 items-center justify-between">
     

       
     
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex shrink-0 items-center">
          <Scale className="text-blue-600 dark:text-blue-400" size={28}/>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">

            {/* Current: "bg-gray-500 text-white", Default: "text-black hover:bg-white/5 hover:text-white" */}

            
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-white/5 hover:text-gray-500">Team</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-white/5 hover:text-gray-500">Projects</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-white/5 hover:text-gray-500">Calendar</a>
          </div>
        </div>
      </div>
    
    </div>
  </div>

 
</nav>
<h1 className="flex justify-center items-center ">گروه حقوقی سایداد</h1>
       
     </div>
    );
}