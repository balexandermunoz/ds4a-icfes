import { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Spinner from "react-spinkit";

import AnalysisSelect from "./AnalysisSelect";
import useFetch from '../scripts/useFetch';
import Plots from './Plots';

import '../assets/styles/Analysis.css';

const Analysis = () => {
    // Let's write the logic to select buttons:
    const { data:colegiosData, isLoading, isError } = useFetch('https://ec2-54-83-150-132.compute-1.amazonaws.com/MasterData/School');

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

    return (
        <motion.div
            className="analysis"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1>How is my school doing in the ICFES test?</h1>
            {isLoading && <div className='analysis--spinner'> Getting data... <Spinner name="circle" color={"steelblue"} /> </div>}
            {isError && <div>Sorry, data not aviliable <span>&#128532;</span> </div>}
            {colegiosData && <div className={"analysis--buttons"}>
                <AnalysisSelect name={"Departamento"} val={dep} options={Object.keys(colegiosData)} handleVal={handleDep}></AnalysisSelect>
                <AnalysisSelect name={"Municipio"} val={mun} options={municipios} handleVal={handleMun}></AnalysisSelect>
                <AnalysisSelect name={"Colegio"} val={col} options={colegios} handleVal={handleCol}></AnalysisSelect>
            </div>}
            {Boolean(col) && <Plots cole={col} />}
            <div className={"analysis--link"}>
                Do you want to know how to increase your ICFES score? See our model here:
                <Link className="analysis--link--button" to="/models"> Go to model! </Link>
            </div>
        </motion.div>);
}

export default Analysis;