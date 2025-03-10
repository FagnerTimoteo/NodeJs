import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateDisciplina() {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [cargaHoraria, setCargaHoraria] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await fetch(`http://127.0.0.1:3000/api/Disciplinas/update/${id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                nome,
                cargaHoraria,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert('Disciplina editada com sucesso!');
            setNome('');
            setCargaHoraria('');
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    return (<>
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
                <h3 className="mb-3 text-center">Editar Disciplina</h3>

                <div className="mb-3">
                <label className="form-label">Nome</label>
                <input type="text" className="form-control" placeholder="Nome" value={nome}
                    onChange={(e) => setNome(e.target.value)} required/>
                </div>

                <div className="mb-3">
                <label className="form-label">Carga Horária</label>
                <input type="number" className="form-control" placeholder="Carga Horária"
                    value={cargaHoraria} onChange={(e) => setCargaHoraria(e.target.value)} required/>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                Editar
                </button>
            </form>
        </div>
    </>)
}