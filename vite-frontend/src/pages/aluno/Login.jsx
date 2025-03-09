import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [nome, setNome] = useState('');
    const [senha, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:3000/api/Aluno/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ nome, senha }),
        })
        .then((response) => response.json())
        .then((data) => {
            alert(data.msg);
            if (data.msg === "Login realizado com sucesso!") {
                console.log(data.id)

                // Isto não é seguro
                navigate(`/RelacionarAlunoDisciplina/${data.id}`)
            }
        })
        .catch((err) => {
            alert("Erro ao realizar login!");
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
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="card p-4 shadow">
                <h1 className="text-center mb-4">Login</h1>
                
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input type="text" placeholder="Nome" value={nome} required
                        onChange={(e) => setNome(e.target.value)} className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input type="password" placeholder="Senha" value={senha} required
                        onChange={(e) => setPassword(e.target.value)} className="form-control"
                        id="password"/>
                </div>

                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="showPassword" 
                        onClick={(e) => showPassword(e)} />
                    <label className="form-check-label" htmlFor="showPassword">Mostrar Senha</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">Logar</button>
            </form>
        </div>
    </>)
}
