import React, { useState, useEffect } from 'react';

export default function CasdastrarAluno() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [matricula, setMatricula] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/Disciplina/all')
            .then((response) => response.json())
            .then((data) => {
                setDisciplinas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Isso aqui evita que a página recarregue

        await fetch('http://127.0.0.1:3000/api/Aluno', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                nome,
                endereco,
                dataNascimento,
                matricula,
                telefone,
                email,
                curso
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert('Aluno cadastrado com sucesso!');
            setNome('');
            setEndereco('');
            setDataNascimento('');
            setMatricula('');
            setTelefone('');
            setEmail('');
            setCurso('');
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    return (
        <>
        <form onSubmit={handleSubmit} id="cadastroAluno">
            <input type="text" placeholder="Nome" value={nome}
                onChange={(e) => setNome(e.target.value)} ></input>
            <input type="text" placeholder="Endereço" value={endereco} 
                onChange={(e) => setEndereco(e.target.value)} ></input>
            <input type="date" placeholder="Data Nascimento" value={dataNascimento} 
                onChange={(e) => setDataNascimento(e.target.value)} ></input>
            <input type="text" placeholder="Matrícula" value={matricula} 
                onChange={(e) => setMatricula(e.target.value)} ></input>
            <input type="text" placeholder="Telefone" value={telefone}
                onChange={(e) => setTelefone(e.target.value)} ></input>
            <input type="email" placeholder="Email" value={email} 
                onChange={(e) => setEmail(e.target.value)} ></input>
            <input type="text" placeholder="Curso" value={curso} 
                onChange={(e) => setCurso(e.target.value)} ></input>
            <button type="submit">Cadastrar</button>
        </form>
        </>
    );
    /*
    <label htmlFor="disciplinas">Curso:</label>
        <select id="disciplinas" name="listaDisciplinas" form="cadastroAluno">
            { disciplinas.map((disciplina) => {
                return (<>
                    <option value={disciplina.nome}>{disciplina.nome}</option>
                </>)
            })}
        </select>
        */
}
