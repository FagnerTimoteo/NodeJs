import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MenuAluno() {
    const { id } = useParams(); // Pega o ID do aluno na URL
    const [aluno, setAluno] = useState(null);
    
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [matricula, setMatricula] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/Aluno/find/${id}`, {
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`http://127.0.0.1:3000/api/Aluno/update/${id}`, {
            method: 'PUT',
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

    if (!aluno) {
        return <div className="container mt-4">Carregando...</div>;
    }

    return (<>
        <div className="container mt-4">
            <h2>Detalhes do Aluno</h2>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <td><input className="form-control" disabled type="text" value={aluno.nome}
                            onChange={(e) => setNome(e.target.value)}/></td>
                        <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                    <tr>
                        <th>Endereço</th>
                        <td><input className="form-control" disabled type="text" value={aluno.endereco}
                            onChange={(e) => setEndereco(e.target.value)}/></td>
                        <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                    <tr>
                        <th>Data de Nascimento</th>
                        <td><input className="form-control" disabled type="text" value={aluno.dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}/></td>
                        <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                    <tr>
                        <th>Matricula</th>
                        <td><input className="form-control" disabled type="text" value={aluno.matricula}
                            onChange={(e) => setMatricula(e.target.value)}/></td>
                        <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                    <tr>
                        <th>Telefone</th>
                        <td><input className="form-control" disabled type="text" value={aluno.telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            onInput={(e) => {
                                let value = e.target.value.replace(/\D/g, ''); // Remove letras e sinais
                                value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // DDD
                                value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Hífen depois dos 5 números
                                e.target.value = value; 
                                setTelefone(value); 
                            }}/></td>

                        <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td><input className="form-control" disabled type="text" value={aluno.email}
                            onChange={(e) => setEmail(e.target.value)}/></td>
                        <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                    <tr>
                        <th>Curso</th>
                        <td><input className="form-control" disabled type="text" value={aluno.curso}
                            onChange={(e) => setCurso(e.target.value)}/></td>
                        <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                    <tr>
                        <th>Senha</th>
                        <td><input className="form-control" disabled type="text" placeholder="senha"
                            onChange={(e) => setSenha(e.target.value)}/></td>
                        <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>);
}
