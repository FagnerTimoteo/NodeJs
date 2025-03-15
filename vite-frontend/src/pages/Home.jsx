import React from 'react';
import "./Home.css"; 

export default function Home() { 
  const usuario = localStorage.getItem("usuario") || "Visitante";

  return (<>
    <div className="home-container">
      <h1>Bem-vindo {usuario}!</h1>
    </div>
  </>);
}
