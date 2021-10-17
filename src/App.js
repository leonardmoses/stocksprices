import './App.css';
import {Route, Switch} from "react-router-dom";
// import Stocks from './pages/Dashboard';
import stocks from "./data.json";
import Home from './pages/Home';
import Nav from './components/Nav';
import About from './pages/About';
import Stocks from './pages/Dashboard';
import StockPrice from './pages/Stock';

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
        <Route path="/stock/:symbol"
        render={(props) => <StockPrice stocks={stocks} {...props} />}
        />
        
      </Switch>
    </div>
  );
}

export default App;
