import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Menu Principal</h1>
            <nav>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>
                        <Link to="/">🏠 Início</Link>
                    </li>
                    <li>
                        <Link to="/Login">🔑 Login</Link>
                    </li>
                    <li>
                        <Link to="/CadastrarAluno">🧑‍🎓 Cadastrar Aluno</Link>
                    </li>
                    <li>
                        <Link to="/CadastrarDisciplina">📘 Cadastrar Disciplina</Link>
                    </li>
                    <li>
                        <Link to="/RelacionarAlunoDisciplina">📘 Relacionar Aluno e Disciplina</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
