/**
 * Convert an amount of money from euros to cents (or another factor).
 * 
 * @returns the converted amount
 */
export const orderAmountConvert = (amount: number, factor = 100) =>{
  return Math.round(amount * factor);
};
