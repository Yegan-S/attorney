import React from 'react';
import './App.css';
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <Home />
      <footer className="flex justify-center">
        Created by {" "}
        <a href='https://benevolent-druid-a3543f.netlify.app'>Yegane Salehi </a>
      {" "} in {" "}
      <a href='https://github.com/sedi-yegan/attorney'> Github</a>
      </footer>
    </div>
  );
}

export default App;
