import React, { useEffect, useState } from 'react';
import './App.css';
import Home from "./Home";
import Header from "./Header";
import { Sun, Moon }from "lucide-react";
import Footer from './Footer';


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
    <div className="flex flex-col min-h-screen bg-white  dark:bg-gray-900 transition-colors duration-300">
      {/* Header at the top */}
      <Header />

      { /* Dark mode toggle button */ }

      <div className="absolute top-4 right-4 z-50">
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

    <Footer/>

    </div>
  );
}

export default App;
