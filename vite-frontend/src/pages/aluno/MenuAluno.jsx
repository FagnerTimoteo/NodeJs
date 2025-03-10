import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MenuAluno() {
    const { id } = useParams(); // Pega o ID do aluno na URL
    const [aluno, setAluno] = useState(null);
    const [editando, setEditando] = useState({}); // Estado para controlar a edição dos campos
    const [senha, setSenha] = useState('');

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/Aluno/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setAluno(data);
            setSenha(data.senha || '');
        })
        .catch((err) => console.log("Erro ao buscar aluno:", err));
    }, [id]);

    const handleSubmit = async () => {
        const alunoAtualizado = { ...aluno, senha };

        await fetch(`http://127.0.0.1:3000/api/Aluno/update/${id}`, {
            method: 'POST',  // Alterado para PUT, que é mais adequado para atualização
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(alunoAtualizado),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert('Aluno editado com sucesso!');
            setEditando({}); // Desativa os campos após salvar
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    const handleEdit = (chave) => {
        setEditando((prev) => ({
            ...prev,
            [chave]: !prev[chave] // Alterna entre edição e exibição
        }));

        if (editando[chave]) {
            handleSubmit(); // Salva ao desativar o campo
        }
    };

    const handleChange = (chave, valor) => {
        setAluno((prev) => ({
            ...prev,
            [chave]: valor
        }));
    };

    if (!aluno) {
        return <div className="container mt-4">Carregando...</div>;
    }

    return (
        <div className="container mt-4">
            <h2>Detalhes do Aluno</h2>
            <table className="table table-bordered">
                <tbody>
                    {Object.entries(aluno).map(([chave, valor]) => (
                        <tr key={chave}>
                            <th>{chave}</th>
                            <td>
                                <input 
                                    type="text" 
                                    value={aluno[chave]} 
                                    className="form-control"
                                    disabled={!editando[chave]}
                                    onChange={(e) => handleChange(chave, e.target.value)}
                                />
                            </td>
                            <td>
                                <button onClick={() => handleEdit(chave)} className="btn btn-warning">
                                    {editando[chave] ? "Salvar" : "Editar"}
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <th>Senha</th>
                        <td>
                            <input 
                                type="text" 
                                placeholder="senha" 
                                value={senha} 
                                className="form-control" 
                                disabled={!editando["senha"]}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </td>
                        <td>
                            <button onClick={() => handleEdit("senha")} className="btn btn-warning">
                                {editando["senha"] ? "Salvar" : "Editar"}
                            </button>
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
