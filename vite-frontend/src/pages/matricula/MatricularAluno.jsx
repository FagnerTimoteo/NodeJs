import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function MatricularAluno() {
    const { id } = useParams();
    const [disciplinas, setDisciplinas] = useState([]);
    const [aluno, setAluno] = useState(null);
    const [disciplinaSelecionada, setDisciplinaSelecionada] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:3000/api/Matricula', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    alunoId: id,
                    disciplinaId: disciplinaSelecionada
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                alert(data.msg);
                navigate(`/Aluno/Matricula/Listar/${id}`)
            })
        } catch (err) {
            console.error("Erro ao matricular aluno:", err.message);
        }
    };

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/Disciplinas/all')
            .then((response) => response.json())
            .then((data) => setDisciplinas(data))
            .catch((err) => console.error("Erro ao buscar disciplinas:", err.message));
    }, []);

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/Aluno/find/${id}`)
            .then((response) => response.json())
            .then((data) => setAluno(data))
            .catch((err) => console.error("Erro ao buscar aluno:", err.message));
    }, [id]);

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="card p-4 shadow col-md-6">
                <h1 className="text-center mb-4">
                    {aluno ? `Matriculando aluno ${aluno.nome}!` : "Carregando aluno..."}
                </h1>
                
                <div className="mb-3">
                    <label htmlFor="disciplinas" className="form-label">Disciplina:</label>
                    <select
                        id="disciplinas"
                        name="listaDisciplinas"
                        className="form-select"
                        required
                        value={disciplinaSelecionada}
                        onChange={(e) => setDisciplinaSelecionada(e.target.value)}>

                        <option value="" disabled>Selecione uma disciplina</option>
                        {disciplinas.map((disciplina) => (
                            <option key={disciplina._id} value={disciplina._id}>
                                {disciplina.nome}
                            </option>
                        ))}
                    </select>
                </div>
                
                <button type="submit" className="btn btn-primary w-100">
                    Matricular-se
                </button>
            </form>
        </div>
    );
}
