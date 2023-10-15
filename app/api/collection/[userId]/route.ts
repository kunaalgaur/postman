import CustomResponse from '@/utils/CustomError';
import ErrorResponse from '@/utils/ErrorResponse';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (
    req: Request,
    { params }: { params: { userId: string } }
) => {
    try {
        const authorId = params.userId;
        const collections = await prisma.collection.findMany({
            where: { authorId: authorId },
        });

        return CustomResponse.success(200, collections, 'Collections found.');
    } catch (error) {
        return ErrorResponse.error(error);
    }
};
