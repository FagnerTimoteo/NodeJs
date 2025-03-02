import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoutesApp from './routeapp.jsx'
import CasdastrarAluno from './pages/CasdastrarAluno.jsx'
import CadastrarDisciplina from './pages/CadastrarDisciplina.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<RoutesApp></RoutesApp>*/}
    <CasdastrarAluno></CasdastrarAluno>
    <CadastrarDisciplina></CadastrarDisciplina>
  </StrictMode>
)
