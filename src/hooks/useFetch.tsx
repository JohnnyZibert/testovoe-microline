import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";


// export const useFetch = (url: string) => {
//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState<unknown>(null)
//
//     useEffect(() => {
//         setLoading(true)
//         axios.get(url)
//             .then((res) => setData(res.data))
//             .catch((err) => setError(err))
//             .finally(() => setLoading(false))
//     }, [url])
//     return {data, loading, error}
// };


export const useFetchData = ({url, headers,payload}: any) => {
    const [res, setRes] = useState({data: {id:''}, error: null, isLoading: false});
    // You POST method here
    const callAPI = useCallback(() => {
        setRes(prevState => ({...prevState, isLoading: true}));
        axios.post(url, headers, payload)
            .then(res => {
                setRes({data: res.data, isLoading: false, error: null});
            })
            .catch((error) => {
            setRes({data: {id: ''}, isLoading: false, error});
        })
    }, [url, JSON.stringify(headers), JSON.stringify(payload)])
    return {res, callAPI};
}
