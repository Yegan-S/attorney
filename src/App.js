import React, { useEffect, useState } from 'react';
import './App.css';
import Home from "./Home";
import { Sun, Moon }from "lucide-react";


function App() {

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


  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">

      {/* Dark mode toggle button */}

      <div className="absolute top-4 right-4">
        <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform"
        >

          {darkMode ? <Sun size={20} /> : <Moon size={20} /> }
        </button>
      </div>

      {/* main content */}

      <main className='flex-grow'>
        <Home />
      </main>


      {/* Footer */}

    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 px-4 flex flex-col sm:flex-row justify-center items-center sm:space-x-2 space-y-1 sm:space-y-0 text-center text-sm ">
       <span className='text-sm'>
         @2025.All right is reserved.
         Created by 
        </span>

        <a href='https://benevolent-druid-a3543f.netlify.app' 
           target='_blank' rel='noopener noreferrer'
           className='text-sm  text-blue-600 dark:text-blue-400 hover:underline '>

            Yegane Salehi
        </a>

      <span className='text-sm'>
         in 
      </span>

      <a href='https://github.com/Yegan-S'
         target='_blank' rel='noopener noreferrer'
         className='text-sm text-blue-600 dark:text-blue-400 hover:underline'>
         Github
      </a>

      </footer>

    </div>
  );
}

export default App;
