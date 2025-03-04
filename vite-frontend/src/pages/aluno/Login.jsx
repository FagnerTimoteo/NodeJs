import React, { useState } from 'react';

export default function Login() {
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:3000/api/Aluno/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                nome,
                senha: password
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setNome('');
            setPassword('');
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    return (<>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" value={nome}
                    onChange={(e) => setNome(e.target.value)} ></input>
                <input type="text" placeholder="Senha" value={password} 
                    onChange={(e) => setPassword(e.target.value)} ></input>
                <button type="submit">Logar</button>
            </form>
        </div>
    </>)
}
