import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RelacionarAlunoDisciplina() {
    const { id } = useParams(); // Pega o ID da URL
    const [disciplinas, setDisciplinas] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:3000/api/Aluno', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                nome
            }),
        })
        .then((response) => response.json())
        .then((data) => console.log(data) )
        .catch((err) => console.log(err.message) );
    };

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/Disciplinas/all')
            .then((response) => response.json())
            .then((data) => setDisciplinas(data) )
            .catch((err) => console.log(err.message) );
    }, []);

    return (<>
        <form onSubmit={handleSubmit}>
            <h1>Bem-vindo, aluno {id}!</h1>
            <label htmlFor="disciplinas">Disciplina: </label>
            <select id="disciplinas" name="listaDisciplinas" form="cadastroAluno">
            {disciplinas.map((disciplina, index) => {
                    return (
                        <option key={index} value={disciplina.nome}>
                            {disciplina.nome}
                        </option>
                    );
                })}
            </select>

            <button type="submit">Cadastrar</button>
        </form>
    </>)
}
