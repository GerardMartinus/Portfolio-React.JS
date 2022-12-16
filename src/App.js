import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './componentes/Home'
import SobreMim from './componentes/SobreMim'
import Projetos from './componentes/Projetos'

function App() {
  return (
    
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="/projetos" element={<Projetos />} />
    </Routes>
    </Router>


  );
}

export default App;
