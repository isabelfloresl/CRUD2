import './App.css';
import CrudApp from './componentes/CrudApp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CrudApi from './componentes/CrudApi';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element= {<CrudApp/>} />
    <Route path="/crudapi" element= {<CrudApi/>} />

    </Routes>
    </BrowserRouter>

    
     
  
  );
}

export default App;
