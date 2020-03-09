import React from 'react';
import './App.css';
import Login from './componentes/login/index'
//import Teste from './componentes/teste/index'
import Routes from './componentes/routes/Routes'

function App() {
  return (
    <div className="App">
		<Routes logged='true' />
    </div>
  );
}

export default App;
