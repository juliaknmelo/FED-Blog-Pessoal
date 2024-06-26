import React from 'react';
import './Home.css';


interface minhaProps {
    title: string;
    description: string;
  }

function Home(props:minhaProps){
    return (
        <>
            <h2 className='titulo'>{props.title}</h2>
            <img src="https://i.imgur.com/VqfHCU6.jpeg" alt="Imagem Tela Inicial" className="img"/>
           <p>{props.description}</p>
        </>
    );
}

export default Home;