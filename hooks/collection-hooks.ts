import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@/redux/hooks';
import {
    deleteCollection_loading_start,
    deleteCollection_loading_stop,
    getAllCollection_loading_start,
    getAllCollection_loading_stop,
    updateCollection_loading_start,
    updateCollection_loading_stop,
} from '@/redux/reducers/collection-reducer';

export const useGetAllCollection = (userId: string) => {
    const [collections, setCollections] = useState<any[] | undefined>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getAllCollection = async () => {
            dispatch(getAllCollection_loading_start());
            await axios
                .get(`/api/collection/${userId}`)
                .then((res) => {
                    const response = res.data;
                    setCollections(response.data);
                })
                .catch(() => {
                    return toast.error('An unknown error occured');
                })
                .finally(() => {
                    dispatch(getAllCollection_loading_stop());
                });
        };

        getAllCollection();
    }, [userId, dispatch]);

    return collections;
};

export const useUpdateCollection = (collectionId: string, name: string) => {
    const dispatch = useAppDispatch();
    const handleEdit = async () => {
        await axios
            .put(`/api/collection/update/${collectionId}`, {
                name: name,
            })
            .then((res) => {
                const response = res.data;
                toast.success('Name updated.');
                return dispatch(updateCollection_loading_start());
            })
            .catch((error) => {
                return toast.error('An unknown error occured.');
            })
            .finally(() => {
                return dispatch(updateCollection_loading_stop());
            });
    };

    return handleEdit;
};

export const useDeleteCollection = (collectionId: string) => {
    const dispatch = useAppDispatch();
    const handleDelete = async () => {
        await axios
            .delete(`/api/collection/delete/${collectionId}`)
            .then(() => {
                dispatch(deleteCollection_loading_start());
                toast.success('Collection deleted');
            })
            .catch(() => {
                toast.error('An unknown error occured.');
            })
            .finally(() => {
                dispatch(deleteCollection_loading_stop());
            });
    };
    return handleDelete;
};
