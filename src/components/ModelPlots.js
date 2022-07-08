import Plot from 'react-plotly.js';

const ModelPlots = ({ feat, featData }) => {

    const featName = feat.replaceAll('_shap', '')
    const colegioDataCat = featData.SchoolSummaryCategory[featName]
    const clusterDataCat = featData.ClusterSummaryCategory[featName]

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

    const categoryMap = {
        'educ_padres': {
            0: 'Ninguno',
            1: 'Primaria incompleta',
            2: 'Primaria completa',
            3: 'Secundaria incompleta',
            4: 'Secundaria completa',
            5: 'Técnica incompleta',
            6: 'Técnica completa',
            7: 'Educación profesional incompleta',
            8: 'Educación profesional completa',
            9: 'Postgrado',
        },
        'estu_trabajo': {
            0: 'No trabaja',
            1: 'Trabaja',
        },
        'nutri_index': {
            0: 'Muy bajo',
            1: 'Bajo',
            2: 'Medio',
            3: 'Alto'
        },
        'acceso_tecnologia': {
            0: 'No',
            1: 'Si'
        },
        'acceso_electro': {
            0: 'No',
            1: 'Si'
        },
        'estu_internet': {
            0: 'No',
            1: 'Si'
        },
        'trab_padres': {
            0: 'Ninguno trabaja',
            1: 'Uno trabaja',
            2: 'Ambos trabajan'
        },
        'estu_lectura': {
            0: 'No lee',
            1: 'Lee'
        },
        'estu_femenino': {
            0: 'Masculino',
            1: 'Femenino'
        },
        'acceso_transporte': {
            0: 'No',
            1: 'Si'
        }
    }

    const clusterFiguresData = Object.keys(clusterDataCat).map((key, index) => {
        let min = clusterDataCat[key]['min']
        let q1 = clusterDataCat[key]['25']
        let q2 = clusterDataCat[key]['50'] // median
        let q3 = clusterDataCat[key]['75']
        let max = clusterDataCat[key]['max']
        let mean = clusterDataCat[key]['mean']

        const newName = categoryMap.hasOwnProperty(featName) ? categoryMap[featName][parseInt(key)] : key
        const showlegend = (index === 1) ? true : false

        const trace = {
            q1: [q1],
            median: [q2],
            q3: [q3],
            mean: [mean],
            lowerfence: [min],
            upperfence: [max],
            type: 'box',
            name: 'Cluster',
            marker: { color: '#3D9970' },
            x0: newName,
            showlegend: showlegend
        };

        return trace;
    })

    const colegioFiguresData = Object.keys(colegioDataCat).map((key, index) => {
        let min = colegioDataCat[key]['min']
        let q1 = colegioDataCat[key]['25']
        let q2 = colegioDataCat[key]['50'] // median
        let q3 = colegioDataCat[key]['75']
        let max = colegioDataCat[key]['max']
        let mean = colegioDataCat[key]['mean']

        const newName = categoryMap.hasOwnProperty(featName) ? categoryMap[featName][parseInt(key)] : key
        const showlegend = (index === 1) ? true : false
        const trace = {
            q1: [q1],
            median: [q2],
            q3: [q3],
            mean: [mean],
            lowerfence: [min],
            upperfence: [max],
            type: 'box',
            name: 'Colegio',
            marker: { color: '#FF4136' },
            x0: newName,
            showlegend: showlegend,
            hovertext: ['text1'],
        };

        return trace;
    })

    const layout = {
        title: {
            text: featuresMap[feat],
            font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
            }
        },
        boxmode: 'group',
        xaxis: {
            type: 'category',
            zeroline: false,
            zerolinecolor: 'rgba(0,255,0,0.5)',
            showline: false,
            hoverformat: '.2f',
        },
        yaxis: {
            zeroline: false,
            hoverformat: '.2f',
        },
    }

    return (
        <Plot
            data={clusterFiguresData.concat(colegioFiguresData)}
            layout={layout}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
        >

        </Plot>
    );
}

export default ModelPlots;