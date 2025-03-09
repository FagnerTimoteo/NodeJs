import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MatricularAluno() {
    const { id } = useParams(); // Pega o ID da URL
    const [disciplinas, setDisciplinas] = useState([]); 
    const [disciplinaSelecionada, setDisciplinaSelecionada] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:3000/api/Matriculas', {
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
            if (data.msg === "Aluno matriculado à disciplina com sucesso!") {

                // Isto não é seguro
                navigate(`/RelacionarAlunoDisciplina/${data.id}`)
            }
        })
        .catch((err) => console.log(err.message) );
    };

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/Disciplinas/all')
            .then((response) => response.json())
            .then((data) => setDisciplinas(data) )
            .catch((err) => console.log(err.message) );
    }, []);

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="card p-4 shadow col-md-6">
                <h1 className="text-center mb-4">Bem-vindo, aluno {id}!</h1>
                <div className="mb-3">
                    <label htmlFor="disciplinas" className="form-label">Disciplina:</label>
                    <select id="disciplinas" name="listaDisciplinas" className="form-select" required
                        value={disciplinaSelecionada}
                        onChange={(e) => setDisciplinaSelecionada(e.target.value) } >
                        <option value="" disabled>Selecione uma disciplina</option>
                        {disciplinas.map((disciplina, index) => (
                            <option key={index} value={disciplina._id}>
                                {disciplina.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">Matricular-se</button>
            </form>
        </div>
    );
}
