import React, { memo } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { declension } from '../helpers/declension';
import './ClickCounter.css';

export interface ClickCounterProps {
    quantityClicks: number
}

export const ClickCounter = memo((props: ClickCounterProps) => {
    const {
        quantityClicks,
    } = props;
    const declensionTime = declension(quantityClicks, ['раз', 'раза', 'раз']);
    return (
        <div className="number_clicks">
            <div className="icon-container">
                <InfoOutlinedIcon sx={{ color: '#35a1db' }} />
            </div>
            <span>
                {`Кликнули ${quantityClicks} ${declensionTime}`}
            </span>
        </div>
    );
});
