import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import NavbarMain from "./components/NavbarMain";

// Pages
import Home from "./home/Home";
import Login from "./login/Login";
import Signup from "./signup/Signup";


function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div>
      {authIsReady && (
        <BrowserRouter>
          <NavbarMain />
          <Switch>
            <Route exact path="/">
              {user && <Home />}
              {!user && <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
