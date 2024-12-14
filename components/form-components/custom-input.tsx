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
 * Component: input component that provides a clear button and error text
 * for input fields registered with React Hook Form.
 *
 * Use in: 
 * @param {Object} props
 * @prop {string} name - the name of the input field, used to register the
 * field with React Hook Form.
 * @prop {string} label - the label for the input field. If `required` is true,
 * a required symbol will be appended to the label.
 * @prop {boolean} required - whether the input field is required. If true, a
 * required symbol will be appended to the label.
 * @prop {string} className - additional CSS classes to apply to the component.
 * @prop {object} props - props to be passed to the underlying `Input` component.
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