import React from 'react';
import styles from './Button.module.css'
const Button = ({children, onButtonClick}) => {
    return (
        <button onClick={onButtonClick} className={styles.button}>
            {children}
        </button>
    );
};

export default Button;