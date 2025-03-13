import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function ListarDisciplinas() {

    const [disciplinas, setDisciplinas] = useState([]);

    const handleDelete = async (id) => {
        if(window.confirm("Deseja excluir?"))
            fetch(`http://127.0.0.1:3000/api/Disciplinas/delete/${id}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .catch((err) => {
                console.log(err.message);
            });     
        window.location.reload();
    };

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/Disciplinas/all')
            .then((response) => response.json())
            .then((data) => setDisciplinas(data) )
            .catch((err) => console.log(err.message) );
    }, []);

    return (<>
        <div className="container mt-4">
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th colSpan="4" className="text-center">
                        <Link to="/Disciplinas/Cadastrar" state={{ id: null }} className="btn btn-success">
                            Cadastrar nova disciplina
                        </Link>
                        </th>
                    </tr>
                    <tr>
                        <th>Nome</th>
                        <th>Carga Horária</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {disciplinas.map((disciplina) => (
                    <tr key={disciplina._id}>
                    <td>{disciplina.nome}</td>
                    <td>{disciplina.cargaHoraria}</td>
                    <td>
                        <Link to={`/Disciplinas/Atualizar/${disciplina._id}`} state={{ id: disciplina._id }} className="btn btn-warning">
                            Editar
                        </Link>
                    </td>
                    <td>
                        <button onClick={() => handleDelete(disciplina._id)} className="btn btn-danger">
                            Excluir
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>)
}