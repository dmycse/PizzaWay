import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const data = await req.json();

  const user = await prisma.user.create({data});

  return NextResponse.json(user);
}

// export async function DELETE(req: Request) {
//   const data = await req.json();

//   const user = await prisma.user.findFirst({
//     where: {
//       email: data.email
//     }
//   });

//   if (!user) return false;

//   const removedUser = await prisma.user.delete({      
//     where: {
//       id: user.id
//     }
//   });


//   return NextResponse.json(removedUser);
// }