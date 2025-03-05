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
                navigate(`/RelacionarAlunoDisciplina`)
                //navigate(`/perfil/${data.nome}`); // Redireciona para a página do usuário
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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" value={nome}
                    onChange={(e) => setNome(e.target.value)} ></input>
                <input type="text" placeholder="Senha" value={senha} id="password"
                    onChange={(e) => setPassword(e.target.value)} ></input>
                <label>
                    <input type="checkbox" onClick={(e) => showPassword(e)} />
                    Mostrar Senha
                </label>
                <button type="submit">Logar</button>
            </form>
        </div>
    </>)
}
