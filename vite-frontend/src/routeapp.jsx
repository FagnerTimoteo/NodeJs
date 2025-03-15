import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AutentificaProvedor, AutentificaContexto } from "./AutentificaContexto";
import { useContext } from "react";

import Header from "./components/Header";
import Login from "./pages/Login";
import CadastrarUsuario from "./pages/CadastrarUsuario";
import Home from "./pages/Home";
import CadastrarAluno from "./pages/aluno/CadastrarAluno";
import ListarAluno from "./pages/aluno/ListarAluno";
import AtualizarAluno from "./pages/aluno/AtualizarAluno";
import CadastrarDisciplina from "./pages/disciplina/CadastrarDisciplina";
import ListarDisciplinas from "./pages/disciplina/ListarDisciplinas";
import AtualizarDisciplina from "./pages/disciplina/UpdateDisciplina";
import MatricularAluno from "./pages/matricula/MatricularAluno";
import ListarMatriculasAlunos from "./pages/matricula/ListarMatriculas";

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useContext(AutentificaContexto);
  return isAuthenticated ? element : <Navigate to="/Login" />;
}

function AppRoutes() {
  const { isAuthenticated } = useContext(AutentificaContexto);

  return (
    <BrowserRouter>
      {isAuthenticated && <Header />}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastrar/Usuario" element={<CadastrarUsuario />} />
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/Cadastrar/Aluno" element={<ProtectedRoute element={<CadastrarAluno />} />} />
        <Route path="/Aluno/Listar" element={<ProtectedRoute element={<ListarAluno />} />} />
        <Route path="/Aluno/Atualizar/:id" element={<ProtectedRoute element={<AtualizarAluno />} />} />
        <Route path="/Disciplinas/Cadastrar" element={<ProtectedRoute element={<CadastrarDisciplina />} />} />
        <Route path="/Disciplinas/Listar" element={<ProtectedRoute element={<ListarDisciplinas />} />} />
        <Route path="/Disciplinas/Atualizar/:id" element={<ProtectedRoute element={<AtualizarDisciplina />} />} />
        <Route path="/Aluno/Matricular/:id" element={<ProtectedRoute element={<MatricularAluno />} />} />
        <Route path="/Aluno/Matricula/Listar/:id" element={<ProtectedRoute element={<ListarMatriculasAlunos />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function RoutesApp() {
  return (
    <AutentificaProvedor>
      <AppRoutes />
    </AutentificaProvedor>
  );
}
