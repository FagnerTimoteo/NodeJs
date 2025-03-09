import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/aluno/Login";
import CadastrarAluno from "./pages/aluno/CadastrarAluno";
import CadastrarDisciplina from "./pages/disciplina/CadastrarDisciplina";
import MatricularAluno from "./pages/aluno/MatricularAluno";

//import ListarAlunos from "./pages/aluno/ListarAlunos";
//import ListarDisciplina from "./pages/ListarDisciplina";
//import MatricularAluno from "./pages/MatricularAluno";

export default function RoutesApp(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" exact element={<Login />} />
        <Route path="/CadastrarAluno" exact element={<CadastrarAluno />} />
        <Route path="/CadastrarDisciplina" exact element={<CadastrarDisciplina />} />
        <Route path="/MatricularAluno" exact element={<MatricularAluno />} />
        <Route path="/MatricularAluno/:id" element={<MatricularAluno />} />
      </Routes>
    </BrowserRouter>
    );
}
/*
  <Route  path="/ListarAlunos" exact element={<ListarAlunos />} />
  <Route  path="/ListarDisciplina" exact element={<ListarDisciplina />} />
  <Route  path="/MatricularAluno" exact element={<MatricularAluno />} />
*/