import React, { useState } from "react";
import "./estilo.css";

import Phrase from "./components/Phrase";
import Image from "./components/Image";
import Button from "./components/Button";

function App() {
  const image = require("./assets/biscoito.png");
  const opened = require("./assets/biscoitoAberto.png");
  const phrase = [
    { id: 1, text: "diringulendiu" },
    { id: 2, text: "muito mais interessante" },
    { id: 3, text: "meu pai" },
    { id: 4, text: "asdlaasdas" },
    { id: 5, text: "gkndsafsfent" },
  ];
  const [initial,setInitial] = useState(`"Abra o biscoito"`);
  if(initial === `"Abra o biscoito"`){
  return (
    <div className="container">
      <Image image={image}/>
      <Phrase phrase={initial} />
      <Button do={(e)=>{
        const value = Math.floor((Math.random()* (0+5)-0));
        console.log(value);
        setInitial(phrase[value]["text"]);
        e.preventDefault();
      }}>Aperte</Button>
      
    </div>
  );
    }
    else{
      return (
        <div className="container">
          <Image image={opened}/>
          <Phrase phrase={initial} />
          <Button do={(e)=>{
            const value = Math.floor((Math.random()* (0+5)-0));
            console.log(value);
            setInitial(phrase[value]["text"]);
            e.preventDefault();
          }}>Aperte</Button>
          
        </div>
      );
    }
}

export default App;
