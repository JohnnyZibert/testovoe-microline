import React, {ReactNode} from 'react';
import {declension} from "../helpers/declension";
import './ReportServer.css'


export interface ClickCounterProps {
    icon:ReactNode
    text: string
    className:string
    quantityClicks:  string | number
}


export const Warn = (props: ClickCounterProps) => {
    const {icon, text, className, quantityClicks} = props
    const declensionTime = declension(Number(quantityClicks), ['раз', 'раза','раз'])
    return (
        <div className={className}>
            <div className='iconContainer'>{icon}</div>
            <span>{text} {quantityClicks} {declensionTime}</span>
        </div>
    );
};
