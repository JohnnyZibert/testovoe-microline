import { useCallback, useState } from 'react';
import axios from 'axios';
import { instance } from '../api/instance';

interface IStateData {
    data: number
    error: string
}

export const useFetch = (url: string, count: number) => {
    const [fetchedData, setFetchData] = useState<IStateData>({
        data: 0,
        error: '',
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await instance.post(url, { count });
            const data = await response.data;
            if (data) {
                setFetchData({
                    data: data.count,
                    error: '',
                });
            }
            setIsLoading(false);
        } catch (err) {
            if (axios.isCancel(err)) {
                console.log(`Fetched data aborted ${err}`);
            } else {
                console.log('error occurred', err);
            }
            setIsLoading(false);
            setFetchData({
                data: 0,
                error: err.message,
            });
        }
    }, [url, count]);

    const { data, error } = fetchedData;

    return {
        data, isLoading, error, fetchData,
    };
};
