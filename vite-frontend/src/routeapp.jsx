import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/aluno/Login";
import CadastrarAluno from "./pages/aluno/CadastrarAluno";
import CadastrarDisciplina from "./pages/disciplina/CadastrarDisciplina";
import MatricularAluno from "./pages/aluno/MatricularAluno";
import ListarDisciplinas from "./pages/disciplina/ListarDisciplinas";

//import ListarAlunos from "./pages/aluno/ListarAlunos";
//import MatricularAluno from "./pages/MatricularAluno";

export default function RoutesApp(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" exact element={<Login />} />
        <Route path="/CadastrarAluno" exact element={<CadastrarAluno />} />
        <Route path="/ListarDisciplinas" exact element={<ListarDisciplinas />} />
        <Route path="/CadastrarDisciplina" exact element={<CadastrarDisciplina />} />
        <Route path="/MatricularAluno" exact element={<MatricularAluno />} />
        <Route path="/MatricularAluno/:id" element={<MatricularAluno />} />
      </Routes>
    </BrowserRouter>
    );
}
/*
  <Route  path="/ListarAlunos" exact element={<ListarAlunos />} />
  <Route  path="/MatricularAluno" exact element={<MatricularAluno />} />
*/