'use client';

import { CustomInput, CustomTextarea } from '@/components/form-components';
// import { AdressInput } from '@/components/form-components';
import { CheckoutWhiteBlock } from '@/components/shared';
// import { ErrorText } from '@/components/shared';
// import { useFormContext } from 'react-hook-form';
// import { Controller } from 'react-hook-form';

type CheckoutAddressDataProps = {
  className?: string;
};

/**
 * CheckoutAddressData renders a form with the delivery address information. 
 * The form contains an input for the address, and a textarea for comments.
 *
 * Use in: Checkout page -> /app/(checkout)/checkout/page.tsx
 *
 */
export const CheckoutAddressData = ({ className }: CheckoutAddressDataProps) => {
  
  // const { control } = useFormContext();

  return (
    <CheckoutWhiteBlock title="3. Delivery address" className={className}>
      <div className="flex flex-col gap-5">

        <CustomInput name="address" className="text-base" placeholder="Address" />
        
        {/* <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AdressInput onChange={field.onChange} />
              {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
            </>
          )}
        /> */}

        <CustomTextarea
          name="comment"
          className="text-base"
          placeholder="Comments"
          rows={5}
        />
      </div>
    </CheckoutWhiteBlock>
  );
};