import { CheckoutWhiteBlock } from '@/components/shared/checkout';
import { CustomInput } from '@/components/form-components';

type CheckoutPersonalDataProps = {
  className?: string;
};

/**
 * CheckoutPersonalData renders a form with the personal data information. 
 * The form contains 4 inputs for the first name, surname, email and phone.
 *
 * Use in: Checkout page -> /app/(checkout)/checkout/page.tsx
 */
export const CheckoutPersonalData = ({ className }: CheckoutPersonalDataProps) => {
  return (
    <CheckoutWhiteBlock title="2. Personal Data" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <CustomInput name="firstName" className="text-base" placeholder="Name" />
        <CustomInput name="surName" className="text-base" placeholder="Surname" />
        <CustomInput name="email" className="text-base" placeholder="E-Mail" />
        <CustomInput name="phone" className="text-base" placeholder="Phone" />
      </div>
    </CheckoutWhiteBlock>
  );
};