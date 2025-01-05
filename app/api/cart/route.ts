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
    
    const findCartItems = await prisma.cartItem.findMany({
      where: {
        cartId: userCart.id,
        productOptionId: data.productOptionId,
      },
      include: {
        ingredients: true
      },
    });
    
    const exactMatchCartItem = findCartItems.find(cartItem => {
      
      if (!data.ingredients) return true;

      const ingredientIds = cartItem.ingredients.map(ingredient => ingredient.id);
      
      return (
        ingredientIds.length === data.ingredients?.length &&
        ingredientIds.every(id => data.ingredients?.includes(id))
      );
    });

    // if the cartItem has been found, do quantity+1
    if (exactMatchCartItem) {
      await prisma.cartItem.update({
        where: {
          id: exactMatchCartItem.id,
        },
        data: {
          quantity: exactMatchCartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productOptionId: data.productOptionId,
          ingredients: { connect: data.ingredients?.map(id => ({ id })) },
          // quantity: 1,
        },
      });
    }

    const updatedUserCart = await getCartTotalAmount(token);
    
    const resp = NextResponse.json(updatedUserCart);
    resp.cookies.set('cartToken', token);

    return resp;
  } catch (error) {
    console.log('[API_CART_POST] Server', error);
    return NextResponse.json({ message: 'The cart data cant be created' }, { status: 500 });
  }
}