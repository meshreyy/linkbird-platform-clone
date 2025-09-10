import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email, password }: SignupRequestBody = await request.json();

    // TODO: Add validation here (e.g. email format, password strength)

    // TODO: Check if user already exists in your database

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // TODO: Save user (name, email, hashedPassword) in your database

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
