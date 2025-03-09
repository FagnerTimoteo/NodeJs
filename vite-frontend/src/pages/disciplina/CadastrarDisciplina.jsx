import React, { useState } from 'react';

export default function CadastrarDisciplina() {
    const [nome, setNome] = useState('');
    const [cargaHoraria, setCargaHoraria] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await fetch('http://127.0.0.1:3000/api/Disciplinas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                nome,
                cargaHoraria,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert('Disciplina cadastrada com sucesso!');
            setNome('');
            setCargaHoraria('');
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    return (<>
        <div className="container mt-5 d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="card p-4 shadow col-md-6">
                <h1 className="text-center mb-4">Bem-vindo, aluno {id}!</h1>

                <div className="mb-3">
                    <label htmlFor="disciplinas" className="form-label">Disciplina:</label>
                    <select 
                        id="disciplinas" 
                        name="listaDisciplinas" 
                        className="form-select" // Classe correta para estilizar o select
                        required
                        onChange={(e) => setDisciplina(e.target.value)}
                    >
                        <option value="" disabled selected>Selecione uma disciplina</option>
                        {disciplinas.map((disciplina, index) => (
                            <option key={index} value={disciplina.nome}>
                                {disciplina.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
            </form>
        </div>
        </>)
}