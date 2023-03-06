import React, { useCallback, useState } from 'react';
import './App.css';
import { ClickButton } from './components/Button/Button';
import { ClickCounter } from './components/ClickCounter/ClickCounter';
import { useFetch } from './hooks/useFetch';
import { ClicksFromServ } from './components/ClicksFromServer/ClicksFromServ';
import { getCountUrl } from './api/instance';

function App() {
    const [quantityClicks, setQuantityClicks] = useState<number>(0);

    const {
        data: clicksOfServer, isLoading, error, fetchData,
    } = useFetch(getCountUrl, quantityClicks);

    const onClickButton = useCallback(() => {
        setQuantityClicks((prev) => prev + 1);
        fetchData();
    }, [fetchData]);

    return (
        <div className="App">
            <div className="content">
                <ClickButton
                    onClickButton={onClickButton}
                    loading={isLoading}
                />
                <ClickCounter
                    quantityClicks={quantityClicks || 0}
                />

                <ClicksFromServ
                    quantityClicks={clicksOfServer}
                    error={error}
                />
            </div>
        </div>
    );
}

export default App;
