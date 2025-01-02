'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

type AdressInputProps = {
  onChange?: (value?: string) => void;
};

/**
 * AdressInput renders a component for entering and selecting addresses.
 * It uses the DaData API (react-dadto provide address suggestions.
 * 
 * Used in: CheckoutAddressData -> /components/shared/checkout/checkout-address-data.tsx
 *
 */
export const AdressInput = ({ onChange }: AdressInputProps) => {
  return (
    <AddressSuggestions
      token="b5b8bb983ddcd08648080e0271d9dd367bb7aa65"
      onChange={data => onChange?.(data?.value)}
    />
  );
};