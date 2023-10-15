'use client';

import React, { useState } from 'react';
import {
    BsChevronRight,
    BsChevronDown,
    BsThreeDotsVertical,
} from 'react-icons/bs';
import styles from './Collection.module.css';
import Link from 'next/link';

const Collection = ({ name, id }: { name: string; id: string }) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [options, setOptions] = useState<boolean>(false);
    return (
        <div id={styles.container}>
            <div id={styles.wrapper}>
                <div id={styles.left} onClick={() => setToggle(!toggle)}>
                    <div id={styles.icon}>
                        {toggle ? <BsChevronDown /> : <BsChevronRight />}
                    </div>
                    <span id={styles.name}>
                        {edit ? (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Edit collection name..."
                                    id={styles.input}
                                />
                                <span id={styles.button}>Save</span>
                            </div>
                        ) : (
                            name
                        )}
                    </span>
                </div>
                <div id={styles.right} onClick={() => setOptions(!options)}>
                    <BsThreeDotsVertical id={styles.icon} />
                    <div
                        id={styles.options}
                        style={{ display: options ? 'flex' : 'none' }}>
                        <span
                            className={styles.option}
                            onClick={() => setEdit(true)}>
                            Edit
                        </span>
                        <span className={styles.option}>Delete</span>
                        <span className={styles.option}>Add folder</span>
                        <span className={styles.option}>Add request</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
