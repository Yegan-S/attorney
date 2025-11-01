
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Team from "./Team";
import Footer from './Footer';
import ContactForm from './ContactForm';
import Service from './Service';


function App() {


  return (

    <Router>
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
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
        
      </main>
     
      {/* Footer */}
          <Footer/>
          </div>
          </div>
    
      </Router>

    
  );
}

export default App;
