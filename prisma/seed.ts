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
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
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


  await prisma.story.createMany({
    data: [
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/7oc/5nf/ipn/oznceu2ywv82tdlnpwriyrq/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=38903958',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/q0t/flg/0ph/xt67uw7kgqe9bag7spwkkyw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=2941222737',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/lza/rsp/2gc/xrar8zdspl4saq4uajmso38/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=4207486284',
      },
    ],
  });

  await prisma.storyItem.createMany({
    data: [
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE',
      },
    ],
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