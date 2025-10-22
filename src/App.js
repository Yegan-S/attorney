import React from 'react';
import './App.css';
import Home from "./Home";
import Header from "./Header";
import Footer from './Footer';


function App() {

  return (
    <div className="flex flex-col min-h-screen bg-white  dark:bg-gray-900 bg-cover bg-center overflow-hidden relative transition-colors duration-300"
    
    style={{
      backgroundImage: `url('https://img.freepik.com/premium-photo/illustration-lady-justice-background-copy-space-generative-ai_1000174-8841.jpg?w=2000')`,
      backgroundSize: "cover",
      backgroundPosition: "center",

    }}
    >
      {/* Blur overlay  */}
      <div className='absolute inset-0 bg-white/80 dark:bg-black/70 backdrop-blur-sm'></div>
     
     {/* Page content (Header, Main, Footer)*/}
     <div className='relative z-10 flex flex-col min-h-screen'>
      
      {/* Header at the top */}
      <Header />

      {/* main content */}
      <main className='flex-grow'>
        <Home />
      </main>
     
      {/* Footer */}
          <Footer/>
          </div>
    </div>
  );
}

export default App;
