import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";

import Login from "./pages/aluno/Login";
import CadastrarAluno from "./pages/aluno/CadastrarAluno";

import MenuAluno from "./pages/aluno/MenuAluno";

import CadastrarDisciplina from "./pages/disciplina/CadastrarDisciplina";

import ListarMatriculasAlunos from "./pages/aluno/ListarMatriculas"

import UpdateMatriculasAlunos from "./pages/aluno/ListarMatriculas"

import MatricularAluno from "./pages/aluno/MatricularAluno";
import ListarDisciplinas from "./pages/disciplina/ListarDisciplinas";
import UpdateDisciplina from "./pages/disciplina/UpdateDisciplina";

export default function RoutesApp(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />

        <Route path="/Aluno/Login" element={<Login />} />
        <Route path="/Aluno/:id" element={<MenuAluno />} />
        <Route path="/Aluno/Cadastrar" element={<CadastrarAluno />} />
        <Route path="/Aluno/Matricular/:id" exact element={<MatricularAluno />} />

        <Route path="/Aluno/Matriculas/Listar/:id" exact element={<ListarMatriculasAlunos />} />

        <Route path="/Aluno/Matriculas/Update/:id" exact element={<UpdateMatriculasAlunos />} />

        <Route path="/Disciplinas/Listar" exact element={<ListarDisciplinas />} />
        <Route path="/Disciplinas/Update/:id" exact element={<UpdateDisciplina />} />
        <Route path="/Disciplinas/Cadastrar" exact element={<CadastrarDisciplina />} />

        
      </Routes>
    </BrowserRouter>
    );
}