import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@/redux/hooks';

export const useGetAllCollection = (userId: string) => {
    const [collections, setCollections] = useState<any[] | undefined>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getAllCollection = async () => {
            await axios
                .get(`/api/collection/${userId}`)
                .then((res) => {
                    const response = res.data;
                    setCollections(response.data);
                })
                .catch(() => {
                    return toast.error('An unknown error occured');
                });
        };

        getAllCollection();
    }, [userId]);

    return collections;
};
