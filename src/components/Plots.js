import colTestMeanData from '../assets/json/ColPeriodTestMean_Plot1.json';
import colEstratData from '../assets/json/ColEstrPerc_Plot4.json';
import colTieneCompData from '../assets/json/ColTieneComp.json';
import colTieneInterData from '../assets/json/ColTieneInter.json';

import Plot from 'react-plotly.js';
import { useMediaQuery } from 'react-responsive'

import '../assets/styles/Plots.css';

const Plots = ({ cole }) => {
    const keysPuntajes = ['P. Global', 'L. Crítica', 'Matemáticas', 'C. Naturales', 'C. Sociales', 'Inglés']
    const colors = ['#E5824E', '#9B4E54', '#374E7C', '#9C3768', '#195A64', '#3EB6C4', '#8889C7']
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    // Average results per test:
    const layoutOne = {
        showlegend: !isMobile,
        responsive: true,
        title: {
            text: 'Trend line of average test results.'
        },
        xaxis: {
            title: {
                text: 'Year',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Average score',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            }
        },
    }
    const tracesOne = keysPuntajes.map((key) => (
        {
            x: Object.keys(colTestMeanData[cole][key]),
            y: Object.values(colTestMeanData[cole][key]),
            name: key,
            type: 'scatter'
        }
    ));

    // Percentage of students per social stratification:
    const layoutTwo = {
        responsive: true,
        title: {
            text: 'Percentage of students per social stratification.'
        },
        xaxis: {
            title: {
                text: 'Social stratification',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Percentage of students',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            }
        },
    }
    const tracesTwo = {
        x: Object.keys(colEstratData[cole]),
        y: Object.values(colEstratData[cole]).map((x) => x * 100),
        name: 'Barplot',
        marker: {
            color: Object.values(colEstratData[cole]).map((x, idx) => colors[idx]),
        },
        type: 'bar'
    };

    // Colegio has computer:
    const layoutThree = {
        showlegend: isMobile,
        title: 'How many students have computer?',
        responsive: true,
        pattern: 'independent',
    }
    const TracesThree = {
        values: Object.values(colTieneCompData[cole]),
        labels: Object.keys(colTieneCompData[cole]),
        type: 'pie',
        hole: .4,
        marker: {
            colors: ["#49567A", '#A6B4D8']
        },
    }

    // Colegio has internet access:
    const layoutFour = {
        showlegend: !isMobile,
        title: 'How many students have internet access?',
        responsive: true,
    }
    const TracesFour = {
        values: Object.values(colTieneInterData[cole]),
        labels: Object.keys(colTieneInterData[cole]),
        type: 'pie',
        marker: {
            colors: ["#49567A", '#A6B4D8']
        },
    }

    return (
        <div className='plots'>
            <Plot data={tracesOne}
                layout={layoutOne}
                useResizeHandler={true}
                style={{ width: "100%", height: "100%" }}>

            </Plot>
            <Plot data={[tracesTwo]}
                layout={layoutTwo}
                useResizeHandler={true}
                style={{ width: "100%", height: "100%" }}>
            </Plot>
            <div className='plots--pies'>
                <Plot data={[TracesThree]}
                    layout={layoutThree}
                    useResizeHandler={true}
                    className={"plots--pies--pie"}>
                </Plot>
                <Plot data={[TracesFour]}
                    layout={layoutFour}
                    useResizeHandler={true}
                    className={"plots--pies--pie"}>
                </Plot>
            </div>
        </div>
    );
}

export default Plots;