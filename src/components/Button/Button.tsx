import Button from '@mui/material/Button';
import './Button.css';
import { memo } from 'react';

export interface ButtonProps {
    onClickButton?: () => void
    loading?: boolean
}

export const ClickButton = memo(({ onClickButton, loading }: ButtonProps) => {
    const buttonSX = {
        background: '#FBC02D',
        '&:hover': {
            background: '#eab027',
        },
        color: 'black',
        fontWeight: 'bold',
        padding: '5px 70px',
        width: '100%',
        marginBottom: '15px',
    };
    return (
        <Button variant="contained" sx={buttonSX} onClick={onClickButton} disabled={loading}>
            {loading ? '...Загрузка' : 'Кликнуть'}
        </Button>
    );
});
