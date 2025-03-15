import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import "./Date.css";

export default function AtualizarAluno() {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [matricula, setMatricula] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');

    const navigate = useNavigate();

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
                curso
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert("Aluno editada com sucesso!");

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

    useEffect(() => {
            fetch(`http://127.0.0.1:3000/api/Aluno/find/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        setNome(data.nome);
                        setEndereco(data.endereco);
                        setDataNascimento(
                            formatarData(data.dataNascimento)
                        );
                        setMatricula(data.matricula);
                        setTelefone(data.telefone);
                        setEmail(data.email);
                        setCurso(data.curso);
                    }
                })
                .catch((err) => console.error("Erro ao buscar aluno:", err));
        }, [id]);

    function formatarData(dataISO) {
        const [ano, mes, dia] = dataISO.split("T")[0].split("-");
        return `${ano}-${mes}-${dia}`;
    }

    return (<>
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
                <h3 className="mb-3 text-center">Editar Aluno</h3>

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
                                value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Hífen depois dos 5 primeiros números
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
                    <button type="submit" className="btn btn-primary w-100">
                        Editar
                    </button>
            </form>
        </div>
    </>)
}