'use client';

import React from 'react';
import styles from './Tabs.module.css';
import { BsXLg } from 'react-icons/bs';
import { useRemoveTab } from '@/hooks/tab-hooks';

type Props = {
    method: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'OPTION' | 'DELETE' | undefined;
    name: string;
};

const Tabs = ({ method, name }: Props) => {
    const handleRemoveTab = useRemoveTab();
    return (
        <div id={styles.container}>
            <div id={styles.wrapper}>
                <span id={styles.method}>{method}</span>
                <span id={styles.name}>{name}</span>
            </div>
            <BsXLg id={styles.icon} onClick={handleRemoveTab} />
        </div>
    );
};

export default Tabs;
