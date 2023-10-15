import { NextResponse } from 'next/server';

export default class ErrorResponse {
    static error(error: any) {
        return NextResponse.json(
            {
                name: error.name,
                message: error.message,
            },
            { status: 500 }
        );
    }
}
