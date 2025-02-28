import React, { useState } from 'react';

export default function Inserir(){
    const [ setPosts ] = useState([]);
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        await fetch('http://127.0.0.1:3000/api/users', {
            method: 'POST',
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ name: name }),
            })
            .then((response) => response.json())
            .then((data) => {
               setPosts(data);
               setName('');
            })
            .catch((err) => {
               console.log(err.message);
            });
    };    

    return (
        <form onSubmit={handleSubmit}>
            Nome:
            <input type="text" value={name}
                onChange={(e) => setName(e.target.value)} ></input>
            <button type="submit">Cadastrar</button>
            {/* <button><Link to="/">Voltar</Link></button>*/}
        </form>
    );
}