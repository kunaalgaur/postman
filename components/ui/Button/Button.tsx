import React from 'react';
import styles from './Button.module.css';
import ReactLoading from 'react-loading';

type Props = {
    type: 'button' | 'reset' | 'submit' | undefined;
    text: string;
    loading?: boolean;
};

const Button = ({ type, text, loading }: Props) => {
    return (
        <button type={type} id={styles.button}>
            {loading ? (
                <ReactLoading
                    type="bubbles"
                    color="white"
                    height={20}
                    width={20}
                />
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
