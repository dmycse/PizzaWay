import { ingredients } from './ingredients';


export const pizzas = {

  pizza1: {
    name: 'Pepironi fresh',
    imageUrl: '/images/products/pizzas/peperoni_fresh.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(0, 9)
    }
  },

  pizza2: {
    name: 'Cheese',
    imageUrl: '/images/products/pizzas/pizza_cheese.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(0, 10)
    }
  },

  pizza3: {
    name: 'Chorizo fresh',
    imageUrl: '/images/products/pizzas/chorizo_fresh.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(10)
    }
  },

  pizza4: {
    name: 'Ham&mushrooms',
    imageUrl: '/images/products/pizzas/ham_mushrooms.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(10,19)
    }
  },

  pizza5: {
    name: 'Meaty',
    imageUrl: '/images/products/pizzas/meaty.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(0,16)
    }
  },

  pizza6: {
    name: 'Julien',
    imageUrl: '/images/products/pizzas/julien.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(0,12)
    }
  },

  pizza7: {
    name: 'PizzaWay',
    imageUrl: '/images/products/pizzas/pizza_way.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(0,6)
    }
  },

  pizza8: {
    name: 'Cheese chick',
    imageUrl: '/images/products/pizzas/cheese_chick.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(6,16)
    }
  },

  pizza9: {
    name: 'Four seasons',
    imageUrl: '/images/products/pizzas/four_seasons.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(1,4)
    }
  },

  pizza10: {
    name: 'Vegan',
    imageUrl: '/images/products/pizzas/vegan.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(10,15)
    }
  },

  pizza11: {
    name: 'Diablo Hot',
    imageUrl: '/images/products/pizzas/diablo_hot.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(10,18)
    }
  },

  pizza12: {
    name: 'Margarita',
    imageUrl: '/images/products/pizzas/margarita.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(1,9)
    }
  },

  pizza13: {
    name: 'Burger',
    imageUrl: '/images/products/pizzas/burger.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(1,7)
    }
  },

  pizza14: {
    name: 'Hawaiian',
    imageUrl: '/images/products/pizzas/hawaiian.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(1,7)
    }
  },

  pizza15: {
    name: 'Ranch',
    imageUrl: '/images/products/pizzas/ranch.webp',
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(1,7)
    }
  },
}