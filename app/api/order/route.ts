import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function DELETE(req: NextRequest) {
  try {
    
    const token = req.cookies.get('cartToken')?.value;

    await prisma.order.deleteMany({
      where: {
        token
      },
    });

    return NextResponse.json({message: 'The Order has been deleted'});

  } catch (error) {
    console.log('[ORDER_DELETE] Server', error);
    return NextResponse.json({ message: 'The Order hasn\'t been deleted' }, { status: 500 });
  }
}