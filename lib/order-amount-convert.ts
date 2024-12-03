export const orderAmountConvert = (amount: number, factor = 100) =>{
  return Math.round(amount * factor);
};
