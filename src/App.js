import {BrowserRouter, Switch, Route } from 'react-router-dom'
import NavbarMain from './components/NavbarMain';

// Pages
import Home from './home/Home';
import Login from './login/Login'
import Signup from './signup/Signup'

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarMain/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
