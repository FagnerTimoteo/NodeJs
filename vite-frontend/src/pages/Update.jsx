import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Update() {
    const location = useLocation(); // Recebe o ID da navegação
    const [name, setName] = useState("");
    const id = location.state?.id; // Pega o ID do usuário

    // Pega o id
    useEffect(() => {
        if (id) {
          fetch(`http://127.0.0.1:3000/api/users/find/${id}`)
            .then((response) => response.json())
            .then((data) => {
              setName(data.name);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      }, [id]);

    // Envia o update
    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`http://127.0.0.1:3000/api/users/update/${id}`, {
            method: 'POST',
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ name: name }),
            })
            .then((response) => response.json())
            .then(() => {
                alert("Usuário atualizado!");
            })
            .catch((err) => {
               console.log(err.message);
            });
        console.log("Atualizada");
    };

    return (
        <div>
          <h1>Editar Usuário</h1>
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input type="text" value={name}
              onChange={(e) => setName(e.target.value)}></input>
            <button type="submit">Salvar</button>
          </form>
        </div>
      );
}