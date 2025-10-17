import React from 'react';
import './App.css';
import Home from "./Home";


function App() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* main content */}

      <main className='flex-grow'>
        <Home />
      </main>


      {/* Footer */}

    <footer className="bg-gray-100 text-gray-700 py-4 flex justify-center items-center space-x-2 border-t ">

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
