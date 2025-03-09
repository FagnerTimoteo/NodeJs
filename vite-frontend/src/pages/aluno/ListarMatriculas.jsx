import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function ListarMatriculas() {
    const { id } = useParams();
    const [matriculas, setMatriculas] = useState([]);

    function getDisciplinaNome() {
        fetch('http://127.0.0.1:3000/api/Disciplinas/all')
            .then((response) => response.json())
            .then((data) => setDisciplinas(data) )
            .catch((err) => console.log(err.message) );
    }

    function getDisciplinaCargaHoraria() {
        fetch('http://127.0.0.1:3000/api/Disciplinas/all')
            .then((response) => response.json())
            .then((data) => setDisciplinas(data) )
            .catch((err) => console.log(err.message) );
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/Matriculas/all/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => response.json())
        .then((data) => setMatriculas(data))
        .catch((err) => console.log(err.message));
    }, [id]);

    const handleDelete = async (matriculaId) => {
        if (window.confirm("Deseja excluir esta matrícula?")) {
            fetch(`http://127.0.0.1:3000/api/Matriculas/delete/${matriculaId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
            })
            .then((response) => response.json())
            .then(() => {
                setMatriculas(matriculas.filter((m) => m._id !== matriculaId));
            })
            .catch((err) => console.log(err.message));
        }
    };

    return (
        <div className="container mt-4">
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th colSpan="4" className="text-center">
                            <Link to={`/Aluno/Matricular`} className="btn btn-success">
                                Matricular-se numa nova disciplina
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <th>Disciplina</th>
                        <th>Carga Horária</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {matriculas.map((matricula) => (
                        <tr key={matricula._id}>
                            <td>{ getDisciplinaNome(matricula.nome) }</td>
                            <td>{ getDisciplinaCargaHoraria(matricula.cargaHoraria) }</td>
                            <td>
                                <Link to={`/Aluno/Matriculas/Update/${matricula._id}`} className="btn btn-warning">
                                    Editar
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(matricula._id)} className="btn btn-danger">
                                    🗑 Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
