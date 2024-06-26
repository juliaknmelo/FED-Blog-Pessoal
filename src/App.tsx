import React, { useState } from 'react';
// import Home from './paginas/home/Home';
import './App.css';


function App() {

const [valor, setValor] = useState(0);

function handleClick(){
  setValor(valor + 1);
}

  return (
  //  <Home title="Home"
  //  description="Esta é a melhor cantora pop da atualidade"/>

   <div>
    <p>O valor é: {valor}</p>
    <button onClick={handleClick}>Adicionar 1</button>
   </div>
  );
}

export default App;