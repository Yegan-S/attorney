import React from 'react';
import './App.css';
import Home from "./Home";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className='flex-grow'>
        <Home />
      </main>


    <footer className="flex justify-center space-x-1">

        <span className='text-sm'> 
          Created by 
        </span>

        <a href='https://benevolent-druid-a3543f.netlify.app' 
           target='_blank' rel='noopener noreferrer'
           className='text-sm  text-blue-600 hover:underline '>

            Yegane Salehi
        </a>

      <span className='text-sm'>
         in 
      </span>

      <a href='https://github.com/sedi-yegan/attorney'
         target='_blank' rel='noopener noreferrer'
         className='text-sm text-blue-600 hover:underline'>
         Github
      </a>

      </footer>

    </div>
  );
}

export default App;
