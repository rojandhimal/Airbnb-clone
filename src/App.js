import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Switch>
            <Route path="/">
             <Home />
            </Route>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
