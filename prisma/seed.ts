import { prisma } from './prisma-client';
import { hashPassword } from '../utils/password';
import { categories, ingredients, products } from '../prisma/constants';


async function createData() {
  await prisma.user.createMany({
    data: [
      { 
        fullName: 'John Doe', 
        email: 'john@example.com',
        password: await hashPassword('123456') || '',
        verified: new Date(),
        role: "USER"
      },
      {
        fullName: 'Piter Alison', 
        email: 'piter@example.com',
        password: await hashPassword('123456') || '',
        verified: new Date(),
        role: "ADMIN"
      }
    ]
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Pepironi fresh',
      imageUrl:
        '/images/products/pizzas/peperoni_fresh.webp',
      categoryId: 1,
      // extra ingredients for an order connect [{id: 1}, {id: 2},...]  
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Cheese',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Chorizo fresh',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 15),
      },
    },
  });

  await prisma.productOption.createMany({
    data: [
      // Pizza "Peperoni fresh"
      { productId: pizza1.id, pizzaType: 1, pizzaSize: 25, price: 10 },
      { productId: pizza1.id, pizzaType: 2, pizzaSize: 30, price: 14},
      { productId: pizza1.id, pizzaType: 2, pizzaSize: 35, price: 18 },

      // Pizza "Chessy"
      { productId: pizza2.id, pizzaType: 1, pizzaSize: 25, price: 12 },
      { productId: pizza2.id, pizzaType: 1, pizzaSize: 30, price: 14, },
      { productId: pizza2.id, pizzaType: 1, pizzaSize: 35, price: 16, },
      { productId: pizza2.id, pizzaType: 2, pizzaSize: 25, price: 14},
      { productId: pizza2.id, pizzaType: 2, pizzaSize: 30, price: 16, },
      { productId: pizza2.id, pizzaType: 2, pizzaSize: 35, price: 18 },

      // Pizza "Chorizo fresh"
      { productId: pizza3.id, pizzaType: 1, pizzaSize: 25, price: 14 },
      { productId: pizza3.id, pizzaType: 2, pizzaSize: 30, price: 17 },
      { productId: pizza3.id, pizzaType: 2, pizzaSize: 35, price: 20 },

      // Other products
      { productId: 1, price: 5 },
      { productId: 2, price: 6 },
      { productId: 3, price: 7 },
      { productId: 4, price: 8 },
      { productId: 5, price: 9 },
      { productId: 6, price: 5 },
      { productId: 7, price: 6 },
      { productId: 8, price: 7 },
      { productId: 9, price: 8 },
      { productId: 10, price: 9 },
      { productId: 11, price: 5 },
      { productId: 12, price: 6 },
      { productId: 13, price: 7 },
      { productId: 14, price: 8 },
      { productId: 15, price: 9 },
      { productId: 16, price: 5 },
      { productId: 17, price: 6 },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        sum: 0,
        token: '11111',
      },
      {
        userId: 2,
        sum: 0,
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productOptionId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function deleteData() {
  await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "products" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "product_options" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ingredients" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "carts" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "cart_items" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await deleteData();
    await createData();
  } catch (error) {
      console.log(error)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })