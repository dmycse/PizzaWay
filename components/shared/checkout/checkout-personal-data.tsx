import { CheckoutWhiteBlock } from '@/components/shared/checkout';
import { CustomInput } from '@/components/form-components';

type CheckoutPersonalDataProps = {
  className?: string;
};

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