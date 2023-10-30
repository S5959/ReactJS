/** Router 설명
 * HashRouter : https://localhost:3000/#/movie
 * BrowserRouter : https://localhost:3000/movie
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;