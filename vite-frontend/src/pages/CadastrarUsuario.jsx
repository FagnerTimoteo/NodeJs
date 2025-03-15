import React, { useState } from 'react';

import "./Checkbox.css";

export default function CasdastrarUsuario() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:3000/api/Usuario', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                nome,
                senha
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert('Cadastrado com sucesso!');
            setNome('');
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
    return (
        <>
            <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
                <form onSubmit={handleSubmit} className="card p-4 shadow col-md-6">
                    <h1 className="text-center mb-4">Cadastrar Usuário</h1>
    
                    <div className="mb-3">
                        <input type="text" placeholder="Nome" value={nome} required
                            onChange={(e) => setNome(e.target.value)} className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder="Senha" value={senha} required
                            id="password" onChange={(e) => setSenha(e.target.value)} className="form-control"/>
                    </div>
                    
                    <div className="form-check mb-3 d-flex align-items-center">
                        <input type="checkbox" className="form-check-input" id="showPassword" 
                            onClick={(e) => showPassword(e)} />
                        <label className="form-check-label" htmlFor="showPassword">Mostrar Senha</label>
                    </div>
    
                    <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
                    <a href="/Login">Já estou cadastrado</a>
                </form>
            </div>
        </>
    );
}