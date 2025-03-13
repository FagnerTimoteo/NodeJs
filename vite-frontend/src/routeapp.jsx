import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import CadastrarUsuario from "./pages/CadastrarUsuario";


import CadastrarAluno from "./pages/aluno/CadastrarAluno";
import ListarAluno from "./pages/aluno/ListarAluno";

import AtualizarAluno from "./pages/aluno/CadastrarAluno";


import CadastrarDisciplina from "./pages/disciplina/CadastrarDisciplina";
import ListarDisciplinas from "./pages/disciplina/ListarDisciplinas";
import AtualizarDisciplina from "./pages/disciplina/UpdateDisciplina";


import MatricularAluno from "./pages/aluno/MatricularAluno";
import ListarMatriculasAlunos from "./pages/aluno/ListarMatriculas"

export default function RoutesApp(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastrar/Usuario" element={<CadastrarUsuario />} />

          <Route path="/Cadastrar/Aluno" element={<CadastrarAluno />} />
          <Route path="/Aluno/Listar" element={<ListarAluno />} />

          <Route path="/Aluno/Atualizar/:id" element={<AtualizarAluno />} />

          <Route path="/Disciplinas/Cadastrar" exact element={<CadastrarDisciplina />} />
          <Route path="/Disciplinas/Listar" exact element={<ListarDisciplinas />} />
          <Route path="/Disciplinas/Atualizar/:id" exact element={<AtualizarDisciplina />} />

          <Route path="/Aluno/Matricular/:id" exact element={<MatricularAluno />} />
          <Route path="/Aluno/Matricula/Listar/:id" exact element={<ListarMatriculasAlunos />} />
        </Routes>
      </BrowserRouter>
    );
}