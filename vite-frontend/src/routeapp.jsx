import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pagina2  from "./pages/Pagina2";
import Inserir from "./pages/Inserir";
import Update from "./pages/Update"

export default function RoutesApp(){
    return(
    <BrowserRouter>
      <Routes>
          <Route  path="/Pagina2" exact element={<Pagina2 />} />
          <Route  path="/Inserir" element={<Inserir />} />
          <Route  path="/Update" element={<Update />} />
          {/* <Route  path="/Inserir" element={<Update />} /> */}
      </Routes>
    </BrowserRouter>
    );
}