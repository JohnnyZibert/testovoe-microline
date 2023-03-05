import React, { memo } from 'react';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { declension } from '../helpers/declension';
import './ClicksFromServ.css';

interface ClickCounterProps {
    quantityClicks: number
    error: string
}

export const ClicksFromServ = memo((props: ClickCounterProps) => {
    const {
        quantityClicks, error,
    } = props;

    const declensionTime = declension(quantityClicks, ['раз', 'раза', 'раз']);

    return (
        <div className="clicks_fromServer">
            <div className="icon_container">
                <WarningAmberOutlinedIcon sx={{ color: '#FBCC53' }} />
            </div>
            <span>
                {error ? `${error}` : `По версии сервера: ${quantityClicks} ${declensionTime}`}
            </span>
        </div>
    );
});
