import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Heder from "./components/Heder";
import Navbaar from "./components/Navbaar";
import Aboutus from "./pages/Aboutus";
import Gallary from "./pages/Gallary";
import Secoundpg from "./pages/Secoundpg";
import Thierdpg from "./pages/Thierdpg";
import Fourthpg from "./pages/Fourthpg";
import Fifthpg from "./pages/Fifthpg";
import Sixthpg from "./pages/Sixthpg";
import Sub from "./pages/Sub";
import Blag from "./pages/Blag";
import Eavent from "./pages/Eavent";
import Place from "./pages/Place";
function App() {
  return (
    <div className="App">
      <Router>
        <Heder />
        <Navbaar />
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/Aboutus">
            <Aboutus/>
          </Route>

          <Route exact path="/Gallary">
            <Gallary/>
          </Route>

          <Route exact path="/secound">
            <Secoundpg/>
          </Route>
          
          <Route exact path="/thierd">
            <Thierdpg/>
          </Route>

          <Route exact path="/Fourth">
            <Fourthpg/>
          </Route>

          <Route exact path="/Fifth">
            <Fifthpg/>
          </Route>

          <Route exact path="/Sixth">
            <Sixthpg/>
          </Route>

          <Route exact path="/Sub">
            <Sub/>
          </Route>

          <Route exact path="/Blag">
            <Blag/>
          </Route>

          <Route exact path="/Event">
            <Eavent/>
          </Route>

          <Route exact path="/Place">
            <Place/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
