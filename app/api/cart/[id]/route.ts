import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import { getCartTotalAmount } from '@/lib';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    let id = +params.id;
    let data = (await req.json()) as { quantity: number };
    let token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Cart token not found' });
    }

    let cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: 'Cart item not found' });
    }

    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: data.quantity,
      },
    });

    let updatedUserCart = await getCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
      console.log('[CART_PATCH] Server error', error);
      return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Cart token not found' });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: 'Cart item not found' });
    }

    await prisma.cartItem.delete({
      where: {
        id: Number(params.id),
      },
    });

    const updatedUserCart = await getCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log('[CART_DELETE] Server error', error);
    return NextResponse.json({ message: 'Не удалось удалить корзину' }, { status: 500 });
  }
}