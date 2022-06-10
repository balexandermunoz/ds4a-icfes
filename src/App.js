import {BrowserRouter, Routes, Route} from "react-router-dom";
import './assets/styles/App.css';
import Home from './components/Home';
import Header from "./components/Header";
import Analysis from "./components/Analysis";
import Models from "./components/Models";
import About from "./components/About";

function App() {
  return (
      <BrowserRouter basename={"/ds4a-icfes"}>
        <div className="App">
            <Header></Header>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/analysis" element={<Analysis />}></Route>
              <Route path="/models" element={<Models />}></Route>
              <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
