import React, { useState, useEffect } from "react";
import Header from './components/Header.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Header />
    </div>
  );
}

export default App;
