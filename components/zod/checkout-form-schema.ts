import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Name should contain at least 2 characters' }),
  surName: z.string().min(2, { message: 'Surname should contain at least 2 characters' }),
  email: z.string().email({ message: 'Incorrect email' }),
  phone: z.string().min(10, { message: 'Incorrect phone number' }),
  address: z.string().min(5, { message: 'Incorrect address' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
