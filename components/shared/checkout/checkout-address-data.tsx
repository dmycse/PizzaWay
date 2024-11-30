'use client';

import { CustomInput, CustomTextarea } from '@/components/form-components';
import { AdressInput } from '@/components/form-components';
import { CheckoutWhiteBlock, ErrorText } from '@/components/shared';
import { Controller, useFormContext } from 'react-hook-form';

type CheckoutAddressDataProps = {
  className?: string;
};

export const CheckoutAddressData = ({ className }: CheckoutAddressDataProps) => {
  
  const { control } = useFormContext();

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