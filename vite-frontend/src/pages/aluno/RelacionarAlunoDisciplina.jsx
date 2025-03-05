import React, { useState, useEffect } from 'react';

export default function RelacionarAlunoDisciplina() {
    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/Disciplinas/all')
            .then((response) => response.json())
            .then((data) => {
                setDisciplinas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (<>
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
    </>)
}
