
import React,{useState} from "react";
import './App.css'
import Intervalo from "./components/Intervalo";
import Sorteio from "./components/Sorteio";
import Media from "./components/Media";
import Soma from "./components/Soma";

function App() {


  const [min, setMin] = useState(0);
  const [max, setMax] = useState(50);
    return(
    <div className="App"> 
      <h1> Projeto Redux </h1>

      <div className="linha">
       <Intervalo min = {min} max = {max} onMinChanged = {setMin} onMaxChanged = {setMax}></Intervalo>
        
      </div>

      <div className="linha">
        <Soma min = {min} max = {max}></Soma>
        <Media min = {min} max = {max}></Media>
        <Sorteio min = {min} max = {max}></Sorteio>
      </div>
    </div>
  )
}



export default App;
