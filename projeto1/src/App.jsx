import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Titulo from './Titulo.jsx'
// componentes de paginação
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/contato' element={<Contato />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App