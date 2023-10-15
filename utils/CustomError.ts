import { NextResponse } from 'next/server';

export default class CustomResponse {
    static success(statusCode: number, data: any, message: string) {
        return NextResponse.json(
            { message: message, data: data },
            { status: statusCode }
        );
    }

    static error(statusCode: number, message: string) {
        return NextResponse.json({ message: message }, { status: statusCode });
    }
}
