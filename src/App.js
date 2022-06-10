import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './assets/styles/App.css';
import Home from './components/Home';
import Header from "./components/Header";
import Analysis from "./components/Analysis";
import Models from "./components/Models";
import About from "./components/About";

import {ReactComponent as HomeIcon} from './assets/images/home.svg';
function App() {
  return (
      <Router>
        <div className="App">
            <Header></Header>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/analysis" element={<Analysis />}></Route>
              <Route path="/models" element={<Models />}></Route>
              <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
