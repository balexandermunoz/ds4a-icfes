import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AnalysisSelect from "./AnalysisSelect";
import Plots from './Plots';

import '../assets/styles/Analysis.css';
import colegiosData from '../assets/json/colegiosDane.json';

const Analysis = () => {
    // Let's write the logic to select buttons:
    const [dep, setDep] = useState("");
    const [mun, setMun] = useState("");
    const [col, setCol] = useState("");
    const [municipios, setMunicipios] = useState([]);
    const [colegios, setColegios] = useState([]);

    let departamentOptions = Object.keys(colegiosData)

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

    return (<div className="analysis">
        <h1>How is my school doing in the ICFES test?</h1>
        <div className={"analysis--buttons"}>
            <AnalysisSelect name={"Departamento"} val={dep} options={departamentOptions} handleVal={handleDep}></AnalysisSelect>
            <AnalysisSelect name={"Municipio"} val={mun} options={municipios} handleVal={handleMun}></AnalysisSelect>
            <AnalysisSelect name={"Colegio"} val={col} options={colegios} handleVal={handleCol}></AnalysisSelect>
        </div>
        {Boolean(col) && <Plots cole={col} />}
        <div className={"analysis--link"}>
            Do you want to know how to increase your ICFES score? See our model here:
            <Link className="analysis--link--button" to="/models"> Go to model! </Link>
        </div>
    </div >);
}

export default Analysis;