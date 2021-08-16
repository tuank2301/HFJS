
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BattleshipGame from "./pages/BattleshipGame";
import Cars from "./pages/Cars";
import Doc from "./pages/Doc";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/battleshipGame' component={BattleshipGame} />
          <Route path='/cars' component={Cars} />
          <Route path='/doc' component={Doc} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
