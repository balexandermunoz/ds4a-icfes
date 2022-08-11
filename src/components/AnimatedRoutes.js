import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
// import useFetch from '../scripts/useFetch';
import Home from './Home';
import Analysis from "./Analysis";
import Models from "./Models";
import About from "./About";
import colegiosData from "../assets/json/colegiosDane.json"

const AnimatedRoutes = () => {
    const location = useLocation();
    // const { data: colegiosData, isLoading, isError } = useFetch('https://icfes-ds4a.xyz/MasterData/School');
    const isLoading = false; const isError = false;
    const [dep, setDep] = useState("");
    const [mun, setMun] = useState("");
    const [col, setCol] = useState("");
    const [municipios, setMunicipios] = useState([]);
    const [colegios, setColegios] = useState([]);

    const handleDep = (e) => {
        const currDpto = e.target.value
        const currMunicipios = Object.keys(colegiosData[currDpto])
        setDep(currDpto)
        setMunicipios(currMunicipios)
        setMun("")
        setCol("")
    }
    const handleMun = (e) => {
        const currMun = e.target.value
        setMun(currMun)
        setCol("")
        setColegios(Object.values(colegiosData[dep][currMun]))
    }
    const handleCol = (e) => {
        const currCol = e.target.value
        setCol(currCol)
    }

    const depData = { dep, handleDep }
    const munData = { mun, municipios, handleMun }
    const colData = { col, colegios, handleCol }
    const fetchData = { colegiosData, isLoading, isError }

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/analysis" element={
                    <Analysis depData={depData} munData={munData} colData={colData} fetchData={fetchData} />} />
                <Route path="/models" element={
                    <Models depData={depData} munData={munData} colData={colData} fetchData={fetchData} />
                } />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;