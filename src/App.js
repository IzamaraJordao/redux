import React from "react";
import './App.css'
import Card from "./components/Card";
import Intervalo from "./components/Intervalo";

function App() {
  return(
    <div className="App"> 
      <h1> Projeto Redux </h1>

      <div className="linha">
       <Intervalo></Intervalo>
        
      </div>

      <div className="linha">
        <Card title="Card 2" green> teste 2</Card>
        <Card title="Card 3" blue> teste 3</Card>
        <Card title="Card 4" purple> teste 4</Card>
      </div>
    </div>
  )
}



export default App;
