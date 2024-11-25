import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import { getCartTotalAmount } from '@/lib';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {

  try {
    const id = +params.id;
    const {quantity} = (await req.json()) as { quantity: number };
    const token = req.cookies.get('cartToken')?.value;
   
    if (!token) {
      return NextResponse.json({ error: 'Cart token not found' });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });
    
    if (!cartItem) {
      return NextResponse.json({ error: 'Cart Item not found' });
    }

    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity,
      },
    });

    const updatedUserCart = await getCartTotalAmount(token);
    console.log('updatedUserCart', updatedUserCart);
    return NextResponse.json(updatedUserCart);
  } catch (error) {
      console.log('[CART_PATCH] Server', error);
      return NextResponse.json({ message: 'The cart hasn\'t been updated' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = +params.id;
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Cart token not found' });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: 'Cart item not found' });
    }

    await prisma.cartItem.delete({
      where: {
        id: +params.id,
      },
    });

    const updatedUserCart = await getCartTotalAmount(token);
    
    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log('[CART_DELETE] Server', error);
    return NextResponse.json({ message: 'The Cart hasn\'t been deleted' }, { status: 500 });
  }
}