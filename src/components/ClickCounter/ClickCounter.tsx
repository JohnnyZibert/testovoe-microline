import React, {ReactNode} from 'react';
import {declension} from "../helpers/declension";
import './ClickCounter.css'


export interface ClickCounterProps {
    icon:ReactNode
    text: string
    className:string
    quantityClicks: number
}


export const ClickCounter = (props: ClickCounterProps) => {
    const {icon, text, className, quantityClicks} = props
    const declensionTime = declension(quantityClicks, ['раз', 'раза','раз'])
    return (
        <div className={className}>
            <div className='iconContainer'>{icon}</div>
            <span>{text} {quantityClicks} {declensionTime}</span>
        </div>
    );
};
