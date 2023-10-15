import CustomResponse from '@/utils/CustomError';
import ErrorResponse from '@/utils/ErrorResponse';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (
    req: Request,
    { params }: { params: { userId: string } }
) => {
    try {
        const userId = params.userId;
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                name: true,
            },
        });
        if (!user) {
            return CustomResponse.error(404, 'User not found.');
        }

        return CustomResponse.success(200, user, 'User found');
    } catch (error) {
        return ErrorResponse.error(error);
    }
};

export const PUT = async (
    req: Request,
    { params }: { params: { userId: string } }
) => {
    try {
        const userId = params.userId;
        const { name, email, password } = await req.json();
        const user = await prisma.user.update({
            where: { id: userId },
            data: {
                name: name,
                email: email,
                password: password,
            },
        });

        if (!user) {
            return CustomResponse.error(404, 'User not found.');
        }

        return CustomResponse.success(200, null, 'User has been updated.');
    } catch (error) {
        return ErrorResponse.error(error);
    }
};

export const DELETE = async (
    req: Request,
    { params }: { params: { userId: string } }
) => {
    try {
        const userId = params.userId;
        const user = await prisma.user.delete({ where: { id: userId } });

        if (!user) {
            return CustomResponse.error(404, 'User not found.');
        }

        return CustomResponse.success(200, null, 'User has been updated.');
    } catch (error) {
        return ErrorResponse.error(error);
    }
};
