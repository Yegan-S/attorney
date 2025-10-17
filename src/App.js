import React from 'react';
import './App.css';
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <main>
      <Home />
      </main>
      <footer className="flex justify-center space-x-1">
        <span className='text-sm'> Created by </span>
        <a href='https://benevolent-druid-a3543f.netlify.app' className='text-sm'>Yegane Salehi </a>
      <span className='text-sm'> in </span>
      <a href='https://github.com/sedi-yegan/attorney' className='text-sm'> Github</a>
      </footer>
    </div>
  );
}

export default App;
