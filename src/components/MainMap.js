import {useRef, useEffect, useState} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@balexandermunoz/mapa-de-colombia-con-san-andres-y-providencia";

function MapaDeColombiaConSanAndresYProvidencia() {
  const chartRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  const handleLoad = () => {
      setIsLoading(false)
  }


  useEffect(() => {
    handleLoad()
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart") return new Inspector(chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef} className='home--map'  style={{transition: 'opacity 1.5s ease-in', opacity: isLoading ? 0: 1 }}/>
    </>
  );
}

export default MapaDeColombiaConSanAndresYProvidencia;