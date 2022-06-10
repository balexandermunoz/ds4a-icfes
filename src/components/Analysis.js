import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../assets/styles/Analysis.css';
import colegiosData from '../assets/colegios.json';

const Analysis = (props) => {
    const centinelPlot = true // If true, the plot shows it.

    // Let's write the logic to select buttons:
    const [dep, setDep] = useState("")
    const [municipios, setMunicipios] = useState([])
    const [colegios, setColegios] = useState([])

    let departamentOptions = Object.keys(colegiosData)

    const handleDep = (e) => {
        const currDpto = e.target.value
        const currMunicipios = Object.keys(colegiosData[currDpto])
        setDep(currDpto)
        setMunicipios(currMunicipios)
        setColegios(colegiosData[currDpto][currMunicipios[0]])
    }
    const handleMun = (e) => {
        const currMun = e.target.value
        setColegios( colegiosData[dep][currMun] )
    }
    const handleCol = (e) => {
        const currCol = e.target.value
        console.log(currCol)
    }
    return (
        <div className="analysis">
            <h1>How is my school doing in the ICFES test?</h1>
            <div className={"analysis--buttons"}>
                <select value={dep}
                        onChange={ handleDep }
                        name="departamento"
                        className={"analysis--buttons--select"}
                        id="departamento">
                    <option value=""
                            className={"analysis--buttons--select--option"}
                            disabled>
                        Departamento
                    </option>
                    {departamentOptions.map((nameDep) =>
                        <option value={nameDep}
                                key={nameDep}
                                className={"analysis--buttons--select--option"}>
                            {nameDep}
                        </option>
                    )}
                </select>

                <select onChange={ handleMun }
                        name="municipio"
                        className={"analysis--buttons--select"}
                        defaultValue={""}
                        id="municipio">
                    <option value=""
                            className={"analysis-buttons--select--option"}
                            disabled>
                        Municipio
                    </option>
                    {municipios.map((mun) =>
                        <option value={mun}
                                className={"analysis--buttons--select--option"}
                                key={mun}>
                            {mun}
                        </option>
                    )}
                </select>

                <select name="colegio"
                        onChange={ handleCol }
                        className={"analysis--buttons--select"}
                        defaultValue={""}
                        id="colegio">
                    <option value=""
                            className={"analysis--buttons--select--option"}
                            disabled>
                        Colegio
                    </option>
                    {colegios.map((col) =>
                        <option value={col}
                                className={"analysis--buttons--select--option"}
                                key={col}>
                            {col}
                        </option>
                    )}
                </select>
            </div>
            <iframe id="serviceFrameSend"
                    className={"analysis--plot"}
                    src={process.env.PUBLIC_URL+"/plots/ColegioAGrafica1.html"}
                    target="frame" width={"100%"} height={"500px"}></iframe>

            <div className={"analysis--link"}>
                Do you want to know how to increase your ICFES score? See our model here:
                <Link className="analysis--link--button" to="/models"> Go to model! </Link>
            </div>
        </div>
    );
}

export default Analysis;