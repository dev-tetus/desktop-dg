import "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Login } from "./pages/";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
