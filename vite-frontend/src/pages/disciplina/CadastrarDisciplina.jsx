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

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" value={nome}
                onChange={(e) => setNome(e.target.value)} ></input>
            <input type="number" placeholder="Carga Horária" value={cargaHoraria} 
                onChange={(e) => setCargaHoraria(e.target.value)} ></input>
            <button type="submit">Cadastrar</button>
        </form>
        </>
    )
}