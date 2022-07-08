import { useState } from 'react';
import Spinner from "react-spinkit";
import AnalysisSelect from "./AnalysisSelect";
import useFetch from '../scripts/useFetch';

import '../assets/styles/Analysis.css';

const SelectButtons = ({col, handleCol}) => {
    const { data:colegiosData, isLoading, isError } = useFetch('https://icfes-ds4a.xyz/MasterData/School');

    const [dep, setDep] = useState("");
    const [mun, setMun] = useState("");
    const [municipios, setMunicipios] = useState([]);
    const [colegios, setColegios] = useState([]);

    const handleDep = (e) => {
        const currDpto = e.target.value
        const currMunicipios = Object.keys(colegiosData[currDpto])
        setDep(currDpto)
        setMunicipios(currMunicipios)
        setMun("")
    }
    const handleMun = (e) => {
        const currMun = e.target.value
        setMun(currMun)
        setColegios(Object.values(colegiosData[dep][currMun]))
    }

    return (
        <div>
            {isLoading && <div className='analysis--spinner'> Getting data... <Spinner name="circle" color={"steelblue"} /> </div>}
            {isError && <div>Sorry, data not aviliable <span>&#128532;</span> </div>}
            {colegiosData && 
            <div className={"analysis--buttons"}>
                <AnalysisSelect name={"Departamento"} val={dep} options={Object.keys(colegiosData)} handleVal={handleDep}></AnalysisSelect>
                <AnalysisSelect name={"Municipio"} val={mun} options={municipios} handleVal={handleMun}></AnalysisSelect>
                <AnalysisSelect name={"Colegio"} val={col} options={colegios} handleVal={handleCol}></AnalysisSelect>
            </div>}
        </div>
            );
}

export default SelectButtons;