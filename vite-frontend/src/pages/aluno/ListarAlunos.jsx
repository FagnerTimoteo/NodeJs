import {  Link } from "react-router-dom";
import React, { useState, useEffect }  from 'react';

export default function ListarAlunos() {
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

    return (<>
        <div>
        <table border={1}>
            <thead>
                <tr>
                    <td>
                        <Link to="/Inserir" state={{id: null}}  >Inserir</Link>
                    </td>
                </tr>
                <tr>
                    <td>Nome</td>
                    <td>Endereço</td>
                    <td>Data de Nascimento</td>
                    <td>Matrícula</td>
                    <td>Telefone</td>
                    <td>Email</td>
                    <td>Editar</td>
                    <td>Excluir</td>
                </tr>
            </thead>
            <tbody>
                { posts.map((post) => {
                    return (
                        <>
                        <tr>
                            <td>
                                {post.nome}
                            </td>
                            <td>
                                {post.endereco}
                            </td>
                            <td>
                                {post.dataNascimento}
                            </td>
                            <td>
                                {post.matricula}
                            </td>
                            <td>
                                {post.telefone}
                            </td>
                            <td>
                                {post.email}
                            </td>
                            <td>
                                {/*<Link to="/Update" state={{id: post._id}} >Editar</Link>*/}
                            </td>
                            <td>
                                {/*<button onClick={(e)=> handleDelete(post._id)}></button>*/}
                            </td>
                        </tr>
                        </>
                    );
                })}
            </tbody>
        </table>
        </div>
    </>);
}