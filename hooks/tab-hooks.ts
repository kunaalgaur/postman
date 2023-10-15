import { useAppDispatch } from '@/redux/hooks';
import { add_tab, remove_tab } from '@/redux/reducers/tab-reducer';
import toast from 'react-hot-toast';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';

export const useAddTab = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleAddTab = async () => {
        await axios
            .post('/api/collection', {
                name: 'New Collection',
                authorId: localStorage.getItem('userId'),
            })
            .then((res) => {
                const response = res.data;

                dispatch(
                    add_tab({
                        id: response.data.id,
                        name: response.data.name,
                    })
                );

                toast.success('New Collection created');
                return router.push(`/collection/${response.data.id}`);
            })
            .catch((error) => {
                return toast.error('An unkown error occured.');
            });
    };

    return handleAddTab;
};

export const useRemoveTab = () => {
    const dispatch = useAppDispatch();
    const handleRemoveTab = () => {
        dispatch(remove_tab({}));
    };
    return handleRemoveTab;
};
