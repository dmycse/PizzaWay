import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/prisma/prisma-client';
import { authOptions } from '@/lib/auth-options';

// export const dynamic = 'force-dynamic';

export async function GET() {

  try {
    const user = await getServerSession(authOptions);
    console.log('user', user);
    if (!user) {
      return NextResponse.json({ message: 'You are not logged in' }, { status: 401 });
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: '[USER_GET] Server error' }, { status: 500 });
  }
}