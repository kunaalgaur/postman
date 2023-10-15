import React from 'react';
import styles from './Input.module.css';

type Props = {
    text: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    type: string;
    name: string;
};

const Input = ({ text, onChange, name, type }: Props) => {
    return (
        <label htmlFor={name} id={styles.container}>
            <span id={styles.text}>{text}</span>
            <input
                type={type}
                name={name}
                onChange={onChange}
                id={styles.input}
            />
        </label>
    );
};

export default Input;
