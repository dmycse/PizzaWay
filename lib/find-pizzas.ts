import { prisma } from '@/prisma/prisma-client';

export type GetSearchParams = {
  query?: string;
  sortBy?: string;
  pizzaSize?: string;
  pizzaType?: string;
  ingredients?: string;
  priceMin?: string;
  priceMax?: string;
};

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 50;

export const findPizzas = async (params: GetSearchParams) => {

  const sizes = params.pizzaSize?.split(',').map(Number);
  const types = params.pizzaType?.split(',').map(Number);
  const ingredientsIdArr = params.ingredients?.split(',').map(Number);

  const minPrice = Number(params.priceMin) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(params.priceMax) || DEFAULT_MAX_PRICE;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: 'desc',
        },
        where: {
          ingredients: ingredientsIdArr
            ? {
                some: {
                  id: {
                    in: ingredientsIdArr,
                  },
                },
              }
            : undefined,
          options: {
            some: {
              pizzaSize: {
                in: sizes,
              },
              pizzaType: {
                in: types,
              },
              price: {
                gte: minPrice, // >=
                lte: maxPrice, // <=
              },
            },
          },
        },
        include: {
          ingredients: true,
          options: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              price: 'asc',
            },
          },
        },
      },
    },
  });

  return categories;
};