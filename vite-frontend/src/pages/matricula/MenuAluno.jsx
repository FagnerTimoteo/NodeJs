import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MenuAluno() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [aluno, setAluno] = useState(null);

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [matricula, setMatricula] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');
    const [senha, setSenha] = useState('');

    const [editando, setEditando] = useState({
        nome: false,
        endereco: false,
        dataNascimento: false,
        matricula: false,
        telefone: false,
        email: false,
        curso: false,
        senha: false,
    });

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/Aluno/find/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setAluno(data);
                    setNome(data.nome || '');
                    setEndereco(data.endereco || '');
                    setDataNascimento(data.dataNascimento || '');
                    setMatricula(data.matricula || '');
                    setTelefone(data.telefone || '');
                    setEmail(data.email || '');
                    setCurso(data.curso || '');
                    setSenha('');
                }
            })
            .catch((err) => console.error("Erro ao buscar aluno:", err));
    }, [id]);

    const toggleEdit = (campo) => {
        setEditando((prev) => ({ ...prev, [campo]: !prev[campo] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`http://127.0.0.1:3000/api/Aluno/update/${id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({
                nome, endereco, dataNascimento, matricula, telefone, email, curso, senha
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                setAluno(data);
                setEditando({
                    nome: false, endereco: false, dataNascimento: false,
                    matricula: false, telefone: false, email: false,
                    curso: false, senha: false
                });
            }
        })
        .catch((err) => console.log(err.message));
    };

    const handleDelete = async () => {
        if (window.confirm("Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita!")) {
            await fetch(`http://127.0.0.1:3000/api/Aluno/delete/${id}`, {
                method: "DELETE",
            })
            .then((response) => {
                if (response.ok) {
                    alert("Conta excluída com sucesso.");
                    navigate("/");
                } else {
                    alert("Erro ao excluir a conta.");
                }
            })
            .catch((err) => console.error("Erro ao excluir aluno:", err));
        }
    };

    return (
        <div className="container mt-4">
            {aluno ? (
                <form onSubmit={handleSubmit}>
                    <table className="table table-bordered">
                        <tbody>
                            {[
                                { label: "Nome", value: nome, setter: setNome, campo: "nome" },
                                { label: "Endereço", value: endereco, setter: setEndereco, campo: "endereco" },
                                { label: "Data de Nascimento", value: dataNascimento, setter: setDataNascimento, campo: "dataNascimento" },
                                { label: "Matrícula", value: matricula, setter: setMatricula, campo: "matricula" },
                                { label: "Telefone", value: telefone, setter: setTelefone, campo: "telefone" },
                                { label: "Email", value: email, setter: setEmail, campo: "email" },
                                { label: "Curso", value: curso, setter: setCurso, campo: "curso" },
                                { label: "Senha", value: senha, setter: setSenha, campo: "senha", placeholder: "Nova senha" },
                            ].map(({ label, value, setter, campo, placeholder }) => (
                                <tr key={campo}>
                                    <th>{label}</th>
                                    <td>
                                        <input
                                            className="form-control"
                                            type="text"
                                            disabled={!editando[campo]}
                                            value={value}
                                            placeholder={placeholder || ""}
                                            onChange={(e) => setter(e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            onClick={() => toggleEdit(campo)}
                                        >
                                            {editando[campo] ? "Salvar" : "Editar"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                </form>
            ) : (
                <p>Carregando aluno...</p>
            )}
            <button onClick={handleDelete} className="btn btn-danger mt-3">Apagar conta</button>
        </div>
    );
}
