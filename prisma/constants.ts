export const categories = [
  {id: 1, name: 'Pizzas'},
  {id: 2, name: 'Breakfast'},
  {id: 3, name: 'Snaks'},
  {id: 4, name: 'Coffee'},
  {id: 5, name: 'Desserts'},
].map(({ name }) => ({ name }));

export const pizzaSizes = [
  {title: 'Small', label: '25 sm', value: '25'},
  {title: 'Middle', label: '30 sm', value: '30'},
  {title: 'Big', label: '35 sm', value: '35'}
];

export const variantPizzaSizes = pizzaSizes.map(({title, value}) => ({
  name: title,
  value,
}));

export const pizzaTypes = [
  {title: 'Classic', label: 'classic', value: '1'},
  {title: 'Thin', label: 'thin', value: '2'},
];

export const variantPizzaTypes = pizzaTypes.map(({title, value}) => ({
  name: title,
  value,
}));

export const prices = {
  priceMin: 5,
  priceMax: 20,
  rangeStep: 2 
};

// constants for checkout
export const VAT = 18;
export const DELIVERY_PRICE = 10;