import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Home';
import Analysis from "./Analysis";
import Models from "./Models";
import About from "./About";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/analysis" element={<Analysis />}></Route>
                <Route path="/models" element={<Models />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;