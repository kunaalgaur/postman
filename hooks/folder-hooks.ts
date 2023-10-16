import axios from '@/lib/axios';

type CreateFolder = {
    name: string;
    authorId: string;
};

export const useCreateFolder = ({ name, authorId }: CreateFolder) => {
    const createFolder = async () => {
        await axios
            .post('/api/folder', {
                name: name,
                authorId: authorId,
            })
            .then(() => {})
            .catch(() => {})
            .finally(() => {});
    };
    return createFolder();
};
