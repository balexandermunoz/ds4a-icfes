import { motion } from 'framer-motion';
import Spinner from "react-spinkit";
import AnalysisSelect from "./AnalysisSelect";
import '../assets/styles/Models.css';
import ModelsResult from './ModelsResult';
const Models = (props) => {
    const { dep, handleDep } = props.depData;
    const { mun, municipios, handleMun } = props.munData;
    const { col, colegios, handleCol } = props.colData;
    const { colegiosData, isColLoading, isColError } = props.fetchData;

    return (
        <motion.div className="models"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1>Model</h1>
            <div className='models--explanation'>
                <p> In this section, we would be able to identify specific variables that impact, both in positive and negative way, over the global score, at the school level. </p>
                <p> Then again, we indicate to the model which specific institution are we interested in. Once we tell the model our school of interest, the model will show a table breaking down those variables that are impacting the school’s overall score performance, sorted by those variables that are most likely to add the most, to those that are most likely to subtract the most.
                    Once the table shows up, we can click on the variable of interest and drill down into it. </p>
                <p> Should a variable be clicked, 2 box-plots will be rendered for each category within the selected variable of interest.</p>
                <p> The purpose of this visualization is to get a broad idea of which categories are impacting the variable the most: which ones are most likely to add point and which ones are most likely to take points away.
                    From an educational institution point of view, we are interested in two points:</p>
                <ul>
                    <li> To validate that our institution performs above our cluster, on those categories that add points.</li>
                    <li> To identify those categories that are likely to take points away, since this are the weak points that we are interested in controlling.</li>
                </ul>
            </div>

            {isColLoading && <div className='analysis--spinner'> Getting data... <Spinner name="circle" color={"steelblue"} /> </div>}
            {isColError && <div>Sorry, data not aviliable <span>&#128532;</span> </div>}
            {colegiosData && <div className={"analysis--buttons"}>
                <AnalysisSelect name={"Departamento"} val={dep} options={Object.keys(colegiosData)} handleVal={handleDep}></AnalysisSelect>
                <AnalysisSelect name={"Municipio"} val={mun} options={municipios} handleVal={handleMun}></AnalysisSelect>
                <AnalysisSelect name={"Colegio"} val={col} options={colegios} handleVal={handleCol}></AnalysisSelect>
            </div>}
            {col && <ModelsResult col={col} />}
        </motion.div>
    );
}

export default Models;