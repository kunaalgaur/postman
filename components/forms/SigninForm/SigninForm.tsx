'use client';

import React, { useState } from 'react';
import styles from './SigninForm.module.css';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import { useSignin } from '@/hooks/user-hooks';
import { useAppSelector } from '@/redux/hooks';

const SigninForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = useSignin({ email: email, password: password });
    const { loading } = useAppSelector((state) => state.user.signin);
    return (
        <form action="" id={styles.container} onSubmit={handleSubmit}>
            <Input
                name="email"
                type="text"
                text="Please enter your email."
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                name="password"
                type="password"
                text="Please enter your password."
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" text="Sign in" loading={loading} />
        </form>
    );
};

export default SigninForm;
