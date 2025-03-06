import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/aluno/Login";
import CadastrarAluno from "./pages/aluno/CadastrarAluno";
import CadastrarDisciplina from "./pages/disciplina/CadastrarDisciplina";
import RelacionarAlunoDisciplina from "./pages/aluno/RelacionarAlunoDisciplina";

//import ListarAlunos from "./pages/aluno/ListarAlunos";
//import ListarDisciplina from "./pages/ListarDisciplina";
//import RelacionarAlunoDisciplina from "./pages/RelacionarAlunoDisciplina";

export default function RoutesApp(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" exact element={<Login />} />
        <Route path="/CadastrarAluno" exact element={<CadastrarAluno />} />
        <Route path="/CadastrarDisciplina" exact element={<CadastrarDisciplina />} />
        <Route path="/RelacionarAlunoDisciplina" exact element={<RelacionarAlunoDisciplina />} />
        <Route path="/RelacionarAlunoDisciplina/:id" element={<RelacionarAlunoDisciplina />} />
      </Routes>
    </BrowserRouter>
    );
}
/*
  <Route  path="/ListarAlunos" exact element={<ListarAlunos />} />
  <Route  path="/ListarDisciplina" exact element={<ListarDisciplina />} />
  <Route  path="/RelacionarAlunoDisciplina" exact element={<RelacionarAlunoDisciplina />} />
*/