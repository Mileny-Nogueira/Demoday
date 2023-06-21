import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import LoginCadastro from './Pages/LoginCadastro/LoginCadastro';
import Blog from './Pages/Blog/Blog';
import Materia4 from './Pages/Materias/Materia4';
import PoliticaPrivacidade from './Pages/PoliticaPrivacidade/PoliticaPrivacidade';
import Contato from './Pages/Contato/Contato';
import Institucional from  './Pages/Institucional/Institucional'
import Demo from './Pages/Demo/Demo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/LoginCadastro' element={<LoginCadastro />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Materia4' element={<Materia4 />} />
          <Route path='/PoliticaPrivacidade' element={<PoliticaPrivacidade />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Institucional' element={<Institucional />} />
          <Route path='/Demo' element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
