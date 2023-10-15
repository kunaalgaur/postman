'use client';

import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import React, { useState } from 'react';
import styles from './SignupForm.module.css';
import { useSignup } from '@/hooks/user-hooks';
import { useAppSelector } from '@/redux/hooks';

const SignupForm = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = useSignup({
        name: name,
        email: email,
        password: password,
    });

    const { loading } = useAppSelector((state) => state.user.signup);

    return (
        <form action="" id={styles.container} onSubmit={handleSubmit}>
            <Input
                name="name"
                text="Please enter your name"
                type="text"
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                name="email"
                text="Please enter your email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                name="Password"
                text="Please create a password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" text="Sign up" loading={loading} />
        </form>
    );
};

export default SignupForm;
