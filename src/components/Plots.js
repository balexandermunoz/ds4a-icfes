// Json data:
import colTestMeanData from '../assets/json/ColPeriodTestMeanALL.json';
import colEstratData from '../assets/json/ColEstratoData.json';
import colTieneCompData from '../assets/json/ColTieneComp.json';
import colTieneInterData from '../assets/json/ColTieneInter.json';
import colLecturaDiariaData from '../assets/json/ColLecturaDiaria.json';
import colInternetDiarioData from '../assets/json/ColInternetDiario.json';
import colPercentileData from '../assets/json/ColPercentile.json';

// Circular progressbar: 
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import RadialSeparators from "./RadialSeparators";
import 'react-circular-progressbar/dist/styles.css';
import '../assets/styles/Plots.css';

import Plot from 'react-plotly.js';
import { useMediaQuery } from 'react-responsive';
import { useSpring, animated } from 'react-spring';

const Plots = ({ cole }) => {
    const keysPuntajesTest = ['L. Crítica', 'Matemáticas', 'C. Naturales', 'C. Sociales', 'Inglés']
    const colors = ['#E5824E', '#9B4E54', '#374E7C', '#9C3768', '#195A64', '#3EB6C4', '#8889C7']
    const perimeter = 0.75;
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const animationStyle = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: true,
        delay: 0,
        duration: 5000,
    });

    const mapPeriodos = {
        "2014.5": '2014 - B',
        "2015.0": '2015 - A',
        "2015.5": '2015 - B',
        "2016.0": '2016 - A',
        "2016.5": '2016 - B',
        "2017.0": '2017 - A',
        "2017.5": '2017 - B',
        "2018.0": '2018 - A',
        "2018.5": '2018 - B',
        "2019.0": '2019 - A',
        "2019.5": '2019 - B',
        "2020.0": '2020 - A',
        "2020.5": '2020 - B',
        "2021.0": '2021 - A',
        "2021.5": '2021 - B'
    }
    // Average results per test:
    const layoutOne = {
        showlegend: false,
        responsive: true,
        title: {
            text: 'Trend line of average global score.'
        },
        xaxis: {
            tickmode: "array",
            tickvals: Object.keys(colTestMeanData[cole]["P. Global"]),
            ticktext: Object.keys(colTestMeanData[cole]["P. Global"]).map((year) => mapPeriodos[year]),
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
    const tracesOne = [{
        x: Object.keys(colTestMeanData[cole]["P. Global"]),
        y: Object.values(colTestMeanData[cole]["P. Global"]),
        name: 'Global',
        type: 'scatter'
    }]

    const layoutOneTest = {
        showlegend: !isMobile,
        responsive: true,
        title: {
            text: 'Trend line of average score per test.'
        },
        xaxis: {
            tickmode: "array",
            tickvals: Object.keys(colTestMeanData[cole]["P. Global"]),
            ticktext: Object.keys(colTestMeanData[cole]["P. Global"]).map((year) => mapPeriodos[year]),
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
    const tracesOneTests = keysPuntajesTest.map((key) => (
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
    const totalEstrato = Object.values(colEstratData[cole]).reduce((partialSum, a) => partialSum + a, 0);
    const tracesTwo = {
        x: Object.keys(colEstratData[cole]),
        y: Object.values(colEstratData[cole]).map((x) => (x / totalEstrato) * 100),
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

    // Colegio time reading students:
    const layoutFive = {
        responsive: true,
        title: {
            text: 'How much time do students spend reading daily?'
        },
        xaxis: {
            title: {
                text: 'Hours of daily reading',
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
    const totalLectura = Object.values(colLecturaDiariaData[cole]).reduce((partialSum, a) => partialSum + a, 0);
    const tracesFive = {
        x: Object.keys(colLecturaDiariaData[cole]),
        y: Object.values(colLecturaDiariaData[cole]).map((x) => (x / totalLectura) * 100),
        name: 'Barplot',
        marker: {
            color: Object.values(colLecturaDiariaData[cole]).map((x, idx) => colors[idx]),
        },
        type: 'bar'
    };

    // Colegio time on internet:
    const layoutSix = {
        responsive: true,
        title: {
            text: 'How much time do students spend on internet daily with no academic purposes?'
        },
        xaxis: {
            title: {
                text: 'Hours spending',
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
    const totalInternet = Object.values(colInternetDiarioData[cole]).reduce((partialSum, a) => partialSum + a, 0);
    const tracesSix = {
        x: Object.keys(colInternetDiarioData[cole]),
        y: Object.values(colInternetDiarioData[cole]).map((x) => (x / totalInternet) * 100),
        name: 'Barplot',
        marker: {
            color: Object.values(colInternetDiarioData[cole]).map((x, idx) => colors[idx]),
        },
        type: 'bar'
    };
    return (

        <animated.div className='plots' style={animationStyle}>
            <Plot data={tracesOne}
                layout={layoutOne}
                useResizeHandler={true}
                style={{ width: "100%", height: "100%" }}>
            </Plot>
            <Plot data={tracesOneTests}
                layout={layoutOneTest}
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
            <Plot data={[tracesFive]}
                layout={layoutFive}
                useResizeHandler={true}
                style={{ width: "100%", height: "100%" }}>
            </Plot>
            <Plot data={[tracesSix]}
                layout={layoutSix}
                useResizeHandler={true}
                style={{ width: "100%", height: "100%" }}>
            </Plot>
            <div className='plots--percentile'>
                <h3>Percentile</h3>
                <div className='plots--percentile--progressbar'>
                    <CircularProgressbarWithChildren value={colPercentileData[cole]}
                        text={colPercentileData[cole]}
                        circleRatio={perimeter}
                        styles={buildStyles({ rotation: 1 - (perimeter / 2) })}>
                        <RadialSeparators
                            circleRatio={perimeter}
                            count={9}
                            style={{
                                background: "#fff",
                                width: "2px",
                                // This needs to be equal to props.strokeWidth
                                height: `${10}%`
                            }}
                        />
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </animated.div >
    )
}

export default Plots;