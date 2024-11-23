import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import { findOrCreateCart, getCartTotalAmount } from '@/lib';
import { CreateCartItemValues } from '@/utils/cart.dto';


export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        // OR: [
        //   {
        //     token,
        //   },
        // ],
        token
      },
      include: {
        items: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            productOption: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });
   
    return NextResponse.json(userCart);

  } catch (error) {
    console.log('[API_CART_GET] Server', error);
    return NextResponse.json({ message: 'The cart data could not be got' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get('cartToken')?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartItemValues;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productOptionId: data.productOptionId,
        ingredients: {
          every: {
            id: { in: data.ingredients },
          },
        },
      },
    });

    // if a cartItem has been found, do +1
    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productOptionId: data.productOptionId,
          quantity: 1,
          ingredients: { connect: data.ingredients?.map(id => ({ id })) },
        },
      });
    }

    const updatedUserCart = await getCartTotalAmount(token);

    const resp = NextResponse.json(updatedUserCart);
    resp.cookies.set('cartToken', token);

    return resp;
  } catch (error) {
    console.log('[API_CART_POST] Server error', error);
    return NextResponse.json({ message: 'The cart data cant be created' }, { status: 500 });
  }
}