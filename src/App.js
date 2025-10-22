import React from 'react';
import './App.css';
import Home from "./Home";
import Header from "./Header";
import Footer from './Footer';


function App() {

  


  return (
    <div className="flex flex-col min-h-screen bg-white  dark:bg-gray-900 transition-colors duration-300">
      {/* Header at the top */}
      <Header />

      { /* Dark mode toggle button */ }

      <div className="absolute top-4 right-4 z-50">

       
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
