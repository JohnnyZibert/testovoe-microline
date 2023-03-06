import { useCallback, useState } from 'react';
import axios from 'axios';
import { instance } from '../api/instance';

interface IStateData {
    data: number
    error: string
    isLoading: boolean
}

export const useFetch = (url: string, count: number) => {
    const [fetchedData, setFetchData] = useState<IStateData>({
        data: 0,
        error: '',
        isLoading: false,
    });
    const [fetchTimer, setFetchTimer] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            if (!fetchTimer) {
                setFetchData({ ...fetchedData, isLoading: true });

                const response = await instance.post(url, { count: count + 1 });

                const data = await response.data;

                if (data) {
                    setFetchData({
                        data: data.count,
                        error: '',
                        isLoading: false,
                    });
                }
                setFetchTimer(true);

                setTimeout(() => {
                    setFetchTimer(false);
                }, 1000);
            }
        } catch (err) {
            if (axios.isCancel(err)) {
                console.log(`Fetched data aborted ${err}`);
            } else {
                console.log('error occurred', err);
            }
            setFetchData({
                data: 0,
                error: err.message,
                isLoading: false,
            });
        }
    }, [fetchTimer, fetchedData, url, count]);

    return {
        ...fetchedData, fetchData,
    };
};
