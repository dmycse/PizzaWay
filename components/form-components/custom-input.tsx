'use client';

import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { ErrorText, RedAsteriks, ClearButton } from '@/components/shared';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
};

/**
 * CustomInput provides a clear button and error text
 * for input fields registered with React Hook Form.
 */

export const CustomInput = ({ name, label, required, className, ...props }: CustomInputProps) => {

  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;
  
  const onClickClear = () => {
    setValue(name, '', { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RedAsteriks />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md rounded-sm" {...register(name)} {...props} />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-1 pl-1" />}
    </div>
  );
};