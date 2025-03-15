import { Link } from "react-router-dom";
import React from 'react';

export default function Header() {

  console.log("LocalStorage:", localStorage);


  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/Login";
  };

  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <span className="fs-4">Escola</span>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to={`/`} className="nav-link active">
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/Aluno/Listar`} className="nav-link">
              Alunos
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/Disciplinas/Listar`} className="nav-link">
              Disciplinas
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-danger">
              Sair
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}
