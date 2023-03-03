import React from 'react';
import Button from '@mui/material/Button';
import './Button.css'


export interface ButtonProps {
    onClickButton?: () => void
    loading?: boolean
}

export const ClickButton = ({onClickButton,loading}: ButtonProps) => {
    const buttonSX = {
        background: '#FBC02D',
        "&:hover": {
            background: "#eab027",
        },
        color: 'black',
        fontWeight: 'bold',
        padding: '5px 70px',
        width:'100%',
        marginBottom:'15px'
    };
    return <Button variant="contained" sx={buttonSX} onClick={onClickButton} disabled={loading}>
        {loading ? '...Загрузка' : 'Кликнуть'}
    </Button>
};
