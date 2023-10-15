import CustomResponse from '@/utils/CustomError';
import ErrorResponse from '@/utils/ErrorResponse';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    try {
        const { email, password } = await req.json();
        const user = await prisma.user.findUnique({ where: { email: email } });
        if (!user) {
            return CustomResponse.error(404, 'User not found');
        }
        const validatePassword = await bcrypt.compare(
            password,
            user.password as string
        );
        if (!validatePassword) {
            return CustomResponse.error(403, 'Incorrect passwoord');
        }
        const token = jwt.sign(
            user.id as string,
            process.env.JWT_SECRET as string
        );
        const response = CustomResponse.success(
            200,
            { token: token, userId: user.id },
            'Logged in.'
        );

        response.cookies.set('token', token);
        return response;
    } catch (error) {
        return ErrorResponse.error(error);
    }
};
