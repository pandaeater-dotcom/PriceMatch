import "./App.css";
import Home from "./components/Home.js";
import PriceMatch from "./components/PriceMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pricematch">
            <PriceMatch />
          </Route>
          <Route path="">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
