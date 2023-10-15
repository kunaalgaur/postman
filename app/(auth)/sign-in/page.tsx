import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import SigninForm from '@/components/forms/SigninForm/SigninForm';

const page = () => {
    return (
        <div id={styles.container}>
            <span id={styles.heading}>Sign in to Postman</span>
            <SigninForm />
            <span>
                New here? <Link href="/sign-up">Sign up</Link>.
            </span>
        </div>
    );
};

export default page;
