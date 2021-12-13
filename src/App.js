import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import NavbarMain from "./components/NavbarMain";

// Pages
import Home from "./home/Home";
import Login from "./login/Login";
import Signup from "./signup/Signup";

import "./App.css";

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <NavbarMain />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
