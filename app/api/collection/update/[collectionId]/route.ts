import CustomResponse from '@/utils/CustomError';
import ErrorResponse from '@/utils/ErrorResponse';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const PUT = async (
    req: Request,
    { params }: { params: { collectionId: string } }
) => {
    try {
        const collectionId = params.collectionId;
        const { name } = await req.json();
        const collections = await prisma.collection.update({
            where: { id: collectionId },
            data: {
                name: name,
            },
        });

        return CustomResponse.success(200, collections, 'Collections updated');
    } catch (error) {
        return ErrorResponse.error(error);
    }
};
