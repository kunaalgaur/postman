import CustomResponse from '@/utils/CustomError';
import ErrorResponse from '@/utils/ErrorResponse';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    try {
        const { name, email, password } = await req.json();
        const user = await prisma.user.findUnique({ where: { email: email } });
        if (user) {
            return CustomResponse.error(401, 'Email is already registerd.');
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            },
        });
        return CustomResponse.success(201, null, 'User created.');
    } catch (error) {
        return ErrorResponse.error(error);
    }
};
