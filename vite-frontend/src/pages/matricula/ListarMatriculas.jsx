import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ListarMatriculas() {
    const { id } = useParams();
    const [matriculas, setMatriculas] = useState([]);
    const [disciplinas, setDisciplinas] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/Matricula/all/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setMatriculas(data);
            })
            .catch((err) => console.error("Erro ao buscar matrículas:", err));
    }, [id]);

    useEffect(() => {
        const fetchDisciplinas = async () => {
            const promises = matriculas.map((matricula) =>
                fetch(`http://127.0.0.1:3000/api/Disciplinas/${matricula._id}`)
                    .then((response) => response.json())
                    .then((data) => ({ id: matricula._id, ...data }))
                    .catch((err) => console.error("Erro ao buscar disciplina:", err))
            );

            const results = await Promise.all(promises);
            const disciplinaMap = {};
            results.forEach((disciplina) => {
                disciplinaMap[disciplina.id] = disciplina;
            });

            setDisciplinas(disciplinaMap);
        };

        if (matriculas.length > 0) {
            fetchDisciplinas();
        }
    }, [matriculas]);

    const handleDelete = async (id) => {
        console.log(id)
        if(window.confirm("Deseja excluir?"))
            fetch(`http://127.0.0.1:3000/api/Matricula/delete/${id}`, {
                method: 'DELETE',
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

    return (
        <div className="container mt-4">
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th colSpan="4" className="text-center">
                            <Link to={`/Aluno/Matricular/${id}`} className="btn btn-success">
                                Matricular aluno à uma nova disciplina
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <th>Disciplina</th>
                        <th>Carga Horária</th>
                        <td>Excluir</td>
                    </tr>
                </thead>
                <tbody>
                    {matriculas.map((matricula) => {
                        const disciplina = disciplinas[matricula._id];
                        return (
                            <tr key={matricula._id}>
                                <td>{disciplina ? disciplina.nome : "Carregando..."}</td>
                                <td>{disciplina ? disciplina.cargaHoraria : "Carregando..."}</td>
                                <td>
                                    <button onClick={() => handleDelete(matricula._id)} className="btn btn-danger">
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
