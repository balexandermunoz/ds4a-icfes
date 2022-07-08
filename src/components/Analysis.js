import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Spinner from "react-spinkit";

import AnalysisSelect from "./AnalysisSelect";
import Plots from './Plots';

import '../assets/styles/Analysis.css';

const Analysis = (props) => {
    const {dep, handleDep} = props.depData;
    const {mun, municipios, handleMun} = props.munData;
    const {col, colegios, handleCol} = props.colData;
    const {colegiosData, isLoading, isError} = props.fetchData;

    return (
        <motion.div
            className="analysis"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1>How is my school doing in the SABER test?</h1>
            {isLoading && <div className='analysis--spinner'> Getting data... <Spinner name="circle" color={"steelblue"} /> </div>}
            {isError && <div>Sorry, data not aviliable <span>&#128532;</span> </div>}
            {colegiosData && <div className={"analysis--buttons"}>
                <AnalysisSelect name={"Departamento"} val={dep} options={Object.keys(colegiosData)} handleVal={handleDep}></AnalysisSelect>
                <AnalysisSelect name={"Municipio"} val={mun} options={municipios} handleVal={handleMun}></AnalysisSelect>
                <AnalysisSelect name={"Colegio"} val={col} options={colegios} handleVal={handleCol}></AnalysisSelect>
            </div>}
            {col && <Plots cole={col} />}
            <div className={"analysis--link"}>
                Do you want to know how to increase your SABER score? See our model here:
                <Link className="analysis--link--button" to="/models"> Go to model! </Link>
            </div>
        </motion.div>);
}

export default Analysis;