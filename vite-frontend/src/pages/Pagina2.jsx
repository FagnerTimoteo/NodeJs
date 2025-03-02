import {  Link } from "react-router-dom";
import React, { useState, useEffect }  from 'react';

export default function Pagina2() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/users/all')
         .then((response) => response.json())
         .then((data) => {
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, []);

    //Recebe o evento do formulário
    const handleDelete = (e) => {
        if(window.confirm("Deseja excluir?"))
            Delete(e);
        window.location.reload();
    };

    async function Delete(id){
        await fetch(`http://127.0.0.1:3000/api/users/delete/${id}`, {
            method: 'POST',
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .catch((err) => {
               console.log(err.message);
            });      
    }

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
                    <td>Id</td>
                    <td>Nome</td>
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
                                {post._id}
                            </td>
                            <td>
                                {post.name}
                            </td>
                            <td>
                                {<Link to="/Update" state={{id: post._id}} >Editar</Link>}
                            </td>
                            <td>
                                {<button onClick={(e)=> handleDelete(post._id)}></button>}
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