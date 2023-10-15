'use client';

import { useAppSelector } from '@/redux/hooks';
import React, { useState } from 'react';
import Tabs from './Tabs/Tabs';
import styles from './Topbar.module.css';

const Topbar = () => {
    const tabs = useAppSelector((state) => state.tab);
    console.log(tabs);
    return (
        <div id={styles.container}>
            {tabs.map((tab, index) => {
                return <Tabs method={tab.method} name={tab.name} key={index} />;
            })}
        </div>
    );
};

export default Topbar;
