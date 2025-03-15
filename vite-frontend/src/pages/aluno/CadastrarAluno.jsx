import React, { useState } from 'react';

import "./Date.css";

export default function CasdastrarAluno() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [matricula, setMatricula] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

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

            navigate(`/Aluno/Listar`)
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
 
    return (
        <>
            <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
                <form onSubmit={handleSubmit} className="card p-4 shadow col-md-6">
                    <h1 className="text-center mb-4">Cadastrar Aluno</h1>
    
                    <div className="mb-3">
                        <input type="text" placeholder="Nome" value={nome} required
                            onChange={(e) => setNome(e.target.value)} className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Endereço" value={endereco} required
                            onChange={(e) => setEndereco(e.target.value)} className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="date" placeholder="Data Nascimento" value={dataNascimento}
                            required onChange={(e) => setDataNascimento(e.target.value)} className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Matrícula" value={matricula} required
                            onChange={(e) => setMatricula(e.target.value)} className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <input type="text" placeholder="Telefone" value={telefone} required
                            maxLength="15" onChange={(e) => setTelefone(e.target.value)} className="form-control"
                            onInput={(e) => {
                                let value = e.target.value.replace(/\D/g, ''); // Remove letras e sinais
                                value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // DDD
                                value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Hífen depois dos 5 números
                                e.target.value = value; 
                                setTelefone(value); 
                            }}/>
                    </div>

                    <div className="mb-3">
                        <input type="email" placeholder="Email" value={email} required
                            onChange={(e) => setEmail(e.target.value)} className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Curso" value={curso} required
                            onChange={(e) => setCurso(e.target.value)} className="form-control"/>
                    </div>   
                    <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
                </form>
            </div>
        </>
    );
    
}