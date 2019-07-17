import React from "react";
import Header from './components/Header.js'
import Card from './components/Card.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Header />
      <Card />
    </div>
  );
}

export default App;
