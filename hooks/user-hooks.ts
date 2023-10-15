import { useAppDispatch } from '@/redux/hooks';
import {
    getUser_loading_start,
    getUser_loading_stop,
    signin_loading_failure,
    signin_loading_request,
    signin_loading_success,
    signup_loading_failure,
    signup_loading_request,
    signup_loading_success,
} from '@/redux/reducers/user-reducer';
import { FormEvent, useEffect, useState } from 'react';
import axios from '@/lib/axios';
import toast from 'react-hot-toast';
import { isEmailValid } from '@/utils/isEmailValid';
import { isPasswordValid } from '@/utils/isPasswordValid';
import { useRouter } from 'next/navigation';

type Signup = {
    name: string;
    email: string;
    password: string;
};

export const useSignup = ({ name, email, password }: Signup) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!name) {
            return toast.error('Please enter your name.');
        }

        if (!email) {
            return toast.error('Please enter your email.');
        }

        if (!isEmailValid(email)) {
            return toast.error('Please enter a valid email.');
        }

        if (!password) {
            return toast.error('Please enter a password.');
        }

        if (!isPasswordValid(password)) {
            return toast.error(
                'Password must contain atleast one uppercase, one lowercase, alphabet, one number and mut have atleast 8 charcters.'
            );
        }

        dispatch(signup_loading_request());
        await axios
            .post('/api/user/sign-up', {
                name: name,
                email: email,
                password: password,
            })
            .then((res) => {
                dispatch(signup_loading_success());
                toast.success('Account created.');
                return router.push('/sign-in');
            })
            .catch((error) => {
                dispatch(signup_loading_failure(error));
                return toast.error('An unkown error occured.');
            });
    };

    return handleSubmit;
};

type Signin = {
    email: string;
    password: string;
};

export const useSignin = ({ email, password }: Signin) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!email) {
            return toast.error('Please enter your email.');
        }

        if (!isEmailValid(email)) {
            return toast.error('Please enter a valid email.');
        }

        if (!password) {
            return toast.error('Please enter a password.');
        }

        if (!isPasswordValid(password)) {
            return toast.error(
                'Password must contain atleast one uppercase, one lowercase, alphabet, one number and mut have atleast 8 charcters.'
            );
        }

        dispatch(signin_loading_request());
        await axios
            .post('/api/user/sign-in', {
                email: email,
                password: password,
            })
            .then((res) => {
                const response = res.data;
                const token = response.data.token;
                const userId = response.data.userId;

                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);

                dispatch(
                    signin_loading_success({ token: token, userId: userId })
                );

                toast.success('Logged in.');

                return router.push('/');
            })
            .catch((error) => {
                dispatch(signin_loading_failure(error));
                return toast.error('And unknown error occured.');
            });
    };

    return handleSubmit;
};

type User = {
    name: string;
};

export const useGetUser = (userId: string) => {
    const dispatch = useAppDispatch();
    const [user, setUser] = useState<User | undefined>();

    useEffect(() => {
        const getUser = async () => {
            dispatch(getUser_loading_start());
            await axios
                .get(`/api/user/${userId}`)
                .then((res) => {
                    const response = res.data;
                    return setUser(response.data);
                })
                .catch((error) => {
                    return toast.error('An unknown error occured.');
                })
                .finally(() => {
                    dispatch(getUser_loading_stop());
                });
        };

        getUser();
    }, [userId, dispatch]);

    return user;
};
