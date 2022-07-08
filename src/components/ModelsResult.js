import ModelPlots from './ModelPlots';
import { useState } from 'react';
import Spinner from "react-spinkit";
import useFetch from '../scripts/useFetch';

const ModelsResult = ({ col }) => {

    const { data: featuresData, isLoading: isFeatLoading, isError: isFeatError } = useFetch("https://icfes-ds4a.xyz/Model/Regression/" + col)
    const [feature, setFeature] = useState('');
    const [overflow, setOverflow] = useState(true);
    const featuresMap = {
        'estu_lectura_shap': 'Time allocation to reading',
        'estu_internet_shap': 'Internet access',
        'estu_trabajo_shap': 'Whether the students work',
        'fami_estratovivienda_shap': 'Household socioeconomic stratification',
        'estu_femenino_shap': 'Gender',
        'cole_jornada_shap': 'School day shift',
        'cole_caracter_shap': 'School format',
        'acceso_tecnologia_shap': 'Technology access', // Access to TV, access to PC and access to gaming.
        'acceso_transporte_shap': 'Transportation access',
        'acceso_electro_shap': 'Appliences access', // Has Horno microhondas, lavadora, nevera
        'educ_padres_shap': 'Parents education',
        'trab_padres_shap': 'Parents work',
        'nutri_index_shap': 'Nutritional index',
    }

    const handleCellClick = (feat) => {
        setFeature(feat)
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
        setOverflow(false);
    }
    return (
        <div>
            {isFeatError && <div> Sorry, data not aviliable <span>&#128532;</span> </div>}
            {isFeatLoading && <div className='analysis--spinner'> Loading data... <Spinner name="circle" color={"steelblue"} /> </div>}
            <div className='models--containertable'>
                {featuresData &&
                    <table className='models--containertable--table'>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Mean</th>
                                <th>Min</th>
                                <th>Max</th>
                                <th>Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            {featuresData.SchoolSummary.map((key) => {
                                return (
                                    <tr>
                                        <td onClick={() => { handleCellClick(key.feature) }}> {featuresMap[key.feature]} </td>
                                        <td> {Math.round(key.mean * 100) / 100} </td>
                                        <td> {Math.round(key.min * 100) / 100} </td>
                                        <td> {Math.round(key.max * 100) / 100} </td>
                                        <td> {Math.round(key.rango * 100) / 100} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
                {feature && <ModelPlots feat={feature} featData={featuresData}></ModelPlots>}
                {overflow && <div style={{ height: "300px" }}></div>}
            </div>
        </div>
    );
}

export default ModelsResult;