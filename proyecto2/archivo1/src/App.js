import logo from './logo.svg';
import './App.css';
import Inicio from './Componentes/Inicio/pagini';
import Menu from './Componentes/Menu/navbar'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import inicio from './Componentes/Inicio/pagini';
import {useFirebaseApp} from 'reactfire';
import Login from './Componentes/LogIn/Login'



function App() {
  return (
    <Router>
    <div>
      <Menu></Menu>
      <Switch>
        <Route path = './Inicio' exact><Inicio/></Route>
        <Route path = './Login' exact><Login/></Route>
        <Route></Route>
        <Route></Route>
      </Switch>


    </div>
    </Router>
  );
}

export default App;
