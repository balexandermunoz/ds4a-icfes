import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    useEffect(() => {
        console.log("Fetching school data...")
        fetch(url, { mode: 'cors' })
            .then(response => {
                if (!response.ok) {
                    throw Error('Could not fetch the data for that resource')
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setIsError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setIsError(err.message)
            })
    }, [url]);

    return { data, isLoading, isError }
};

export default useFetch;