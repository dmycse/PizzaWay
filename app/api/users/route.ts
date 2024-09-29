import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const users = await prisma.user.findMany();

  return Response.json(users);
}

export async function POST(req: Request) {
  const data = await req.json();

  const user = await prisma.user.create({data});

  return Response.json(user);
}