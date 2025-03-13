import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ListarMatriculas() {
    const { id } = useParams();
    const [matriculas, setMatriculas] = useState([]);
    const [disciplinas, setDisciplinas] = useState({});
    const [loading, setLoading] = useState(true);

    const getDisciplina = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:3000/api/Disciplinas/${id}`);
            if (!response.ok) {
                throw new Error(`Erro ao buscar a disciplina: ${response.statusText}`);
            }
            const data = await response.json();
            return data; // Retorna os dados da disciplina
        } catch (err) {
            console.log("Erro:", err.message);
            return null;
        }
    };

    useEffect(() => {
        // Buscar matrículas e disciplinas
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3000/api/Matriculas/all`);
                const matriculasData = await response.json();
                setMatriculas(matriculasData);

                const disciplinasMap = {};
                for (const matricula of matriculasData) {
                    const disciplinaData = await getDisciplina(matricula.disciplinaId);
                    if (disciplinaData) {
                        disciplinasMap[matricula.disciplinaId] = disciplinaData;
                    }
                }
                setDisciplinas(disciplinasMap);
            } catch (err) {
                console.log("Erro ao buscar dados:", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="container mt-4">
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th colSpan="4" className="text-center">
                            <Link to={`/Aluno/Matricular/${id}`} className="btn btn-success">
                                Matricular-se numa nova disciplina
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <th>Disciplina</th>
                        <th>Carga Horária</th>
                    </tr>
                </thead>
                <tbody>
                    {matriculas.map((matricula) => {
                        const disciplina = disciplinas[matricula.disciplinaId];
                        return (
                            <tr key={matricula._id}>
                                <td>{disciplina ? disciplina.nome : "Disciplina não encontrada"}</td>
                                <td>{disciplina ? disciplina.cargaHoraria : "Carga Horária não disponível"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
