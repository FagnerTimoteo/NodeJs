import React, { useState, useEffect }  from 'react';

export default function Inicio() {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/Aluno/all')
            .then((response) => response.json())
            .then((data) => {
            setPosts(data);
            })
            .catch((err) => {
            console.log(err.message);
            });
    }, []);

    function formatarData(dataISO) {
        const [ano, mes, dia] = dataISO.split("T")[0].split("-");
        return `${dia}/${mes}/${ano}`;
    }   

    return (<>
        <div className="container mt-4">
        <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                </tr>
                <tr>
                    <td>Aluno</td>
                    <td>Matricula</td>
                    <td>curso</td>
                    <td>Data de Nascimento</td>
                    <td>Telefone</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                { posts.map((post) => (
                    <tr key={post._id}>
                        <td>
                            {post.nome}
                        </td>
                        <td>
                            {post.matricula}
                        </td>
                        <td>
                            {post.curso}
                        </td>
                        <td>
                            { formatarData(post.dataNascimento) }
                        </td>
                        <td>
                            {post.telefone}
                        </td>
                        <td>
                            {post.email}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </>)
}