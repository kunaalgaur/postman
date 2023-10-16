import CustomResponse from '@/utils/CustomError';
import ErrorResponse from '@/utils/ErrorResponse';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const DELETE = async (
    req: Request,
    { params }: { params: { collectionId: string } }
) => {
    try {
        const collectionId = params.collectionId;
        await prisma.collection.delete({
            where: { id: collectionId },
        });

        return CustomResponse.success(200, null, 'Collection Deleted.');
    } catch (error) {
        return ErrorResponse.error(error);
    }
};
