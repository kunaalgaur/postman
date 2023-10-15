import CustomResponse from '@/utils/CustomError';
import ErrorResponse from '@/utils/ErrorResponse';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    try {
        const { name, authorId } = await req.json();
        const collection = await prisma.collection.create({
            data: {
                name: name,
                authorId: authorId,
            },
        });

        return CustomResponse.success(201, collection, 'Created a collection');
    } catch (error) {
        return ErrorResponse.error(error);
    }
};
