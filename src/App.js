import './App.css';
import CrudApp from './componentes/CrudApp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CrudApi from './componentes/CrudApi';

function App() {
  return (
    

    <div>

    <CrudApp/>
     <CrudApi/>

    </div>
   

   

    
     
  
  );
}

export default App;
