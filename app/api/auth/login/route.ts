import { NextResponse } from "next/server";

export async function POST(req: Request) {
   try {
    const { email, password } = await req.json()

    if (email === 'test@example.com' && password === 'password') {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  } catch (err) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
} 