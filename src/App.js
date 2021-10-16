import './App.css';
import {Route, Switch} from "react-router-dom";
// import Stocks from './pages/Dashboard';
import Home from './pages/Home';
import Nav from './components/Nav';
import About from './pages/About';
import Stocks from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/dashboard">
          <Stocks/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
