import { useEffect, useState } from "react"

const useAllFetch = (urlList) => {
    const [data, setData] = useState(Array(urlList.length));
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    useEffect(() => {
        Promise.all(urlList)
        .then(results => {
            const json_results = results.map(r => r.json())
            return json_results
        })
        .then(data => {
            setData(data);
            setIsLoading(false);
            setIsError(null);
        })
        .catch( err => {
            setIsLoading(false);
            setIsError(err.message)
        })
    }, []);

    return { data, isLoading, isError }
};

export default useAllFetch;