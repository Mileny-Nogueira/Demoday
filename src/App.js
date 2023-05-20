import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Materia4 from './Pages/Materias/Materia4';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Materia4' element={<Materia4 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
