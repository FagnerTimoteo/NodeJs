import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/aluno/Login";
import CadastrarAluno from "./pages/aluno/CadastrarAluno";
import ListarAlunos from "./pages/aluno/ListarAlunos";
import CadastrarDisciplina from "./pages/disciplina/CadastrarDisciplina";
//import ListarDisciplina from "./pages/ListarDisciplina";
//import RelacionarAlunoDisciplina from "./pages/RelacionarAlunoDisciplina";

export default function RoutesApp(){
    return(
    <BrowserRouter>
      <Routes>
          {/* <Route  path="/Pagina2" exact element={<Pagina2 />} /> */}
          <Route  path="/Login" exact element={<Login />} />
          <Route  path="/CadastrarAluno" exact element={<CadastrarAluno />} />
          <Route  path="/ListarAlunos" exact element={<ListarAlunos />} />
          <Route  path="/CadastrarDisciplina" exact element={<CadastrarDisciplina />} />
          
          {/* <Route  path="/Inserir" element={<Update />} /> */}
      </Routes>
    </BrowserRouter>
    );
}

/*
  <Route  path="/ListarDisciplina" exact element={<ListarDisciplina />} />
  <Route  path="/RelacionarAlunoDisciplina" exact element={<RelacionarAlunoDisciplina />} />
*/