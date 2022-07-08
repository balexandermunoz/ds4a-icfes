import { BrowserRouter } from "react-router-dom";
import './assets/styles/App.css';
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={"/ds4a-icfes"}>
        <Header></Header>
        <AnimatedRoutes></AnimatedRoutes>
      </BrowserRouter>
    </div>
  );
}
export default App;
