'use client';

import React from 'react';
import styles from './Leftbar.module.css';
import { useGetUser } from '@/hooks/user-hooks';
import { BsPlus } from 'react-icons/bs';
import { useAppDispatch } from '@/redux/hooks';
import { add_tab } from '@/redux/reducers/tab-reducer';
import toast from 'react-hot-toast';
import { useAddTab } from '@/hooks/tab-hooks';
import { useGetAllCollection } from '@/hooks/collection-hooks';
import Collection from '@/components/Collection/Collection';

const Leftbar = () => {
    const dispatch = useAppDispatch();
    const userId = localStorage.getItem('userId');
    const user = useGetUser(userId as string);
    const handleAddTab = useAddTab();
    const collections = useGetAllCollection(
        localStorage.getItem('userId') as string
    );
    return (
        <div id={styles.container}>
            <div id={styles.top}>
                <span id={styles.name}>{user?.name}</span>
                <span id={styles.button}>Sign out</span>
            </div>
            <div id={styles.middle}>
                <BsPlus id={styles.icon} onClick={handleAddTab} />
                <input
                    type="text"
                    id={styles.input}
                    placeholder="Search a collection..."
                />
            </div>
            <div id={styles.bottom}>
                {collections?.map((collection, index) => {
                    return (
                        <Collection
                            name={collection.name}
                            key={index}
                            id={collection._id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Leftbar;
