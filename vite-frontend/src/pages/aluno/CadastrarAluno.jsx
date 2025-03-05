import React, { useState } from 'react';

export default function CasdastrarAluno() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [matricula, setMatricula] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');
    const [senha, setSenha] = useState('');

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
                curso,
                senha
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
            setSenha('');
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    function showPassword(e) {
        const x = document.getElementById("password");
        if (e.target.checked) {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }    

    return (<>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" value={nome} required
                onChange={(e) => setNome(e.target.value)} ></input>
            <input type="text" placeholder="Endereço" value={endereco} required
                onChange={(e) => setEndereco(e.target.value)} ></input>
            <input type="date" placeholder="Data Nascimento" value={dataNascimento}
                required onChange={(e) => setDataNascimento(e.target.value)} ></input>
            <input type="text" placeholder="Matrícula" value={matricula} required
                onChange={(e) => setMatricula(e.target.value)} ></input>
            <input type="text" placeholder="Telefone" value={telefone} required
                onChange={(e) => setTelefone(e.target.value)} ></input>
            <input type="email" placeholder="Email" value={email} required
                onChange={(e) => setEmail(e.target.value)} ></input>
            <input type="text" placeholder="Curso" value={curso} required
                onChange={(e) => setCurso(e.target.value)} ></input>
            <input type="password" placeholder="Senha" value={senha} required
                id="password" onChange={(e) => setSenha(e.target.value)} ></input>

            <label>
                <input type="checkbox" onClick={(e) => showPassword(e)} />
                Mostrar Senha
            </label>
    
            <button type="submit">Cadastrar</button>
        </form>
    </>);
}