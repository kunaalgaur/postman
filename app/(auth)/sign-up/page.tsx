import SignupForm from '@/components/forms/SignupForm/SignupForm';
import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const page = () => {
    return (
        <div id={styles.container}>
            <span id={styles.heading}>Sign up to Postman</span>
            <SignupForm />
            <span>
                Already a user? <Link href="/sign-in">Sign in</Link>.
            </span>
        </div>
    );
};

export default page;

// JlqfxvL8yaDjiUXC
