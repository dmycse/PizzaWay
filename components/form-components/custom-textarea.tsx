'use client';

import { useFormContext } from 'react-hook-form';
import { Textarea } from '@/components/ui';
import { ClearButton, ErrorText, RedAsteriks } from '@/components/shared';

interface CustomTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}


/**
 * Component: a textarea component that uses React Hook Form to register the textarea,
 *   and display an error message and clear button if the field has an error.
 *
 * @param {Object} props
 * @prop {string} name - the name of the textarea field. Used to register the field with React Hook Form.
 * @prop {string} [label] - the label for the textarea.
 * @prop {boolean} [required] - whether the textarea is required.
 * @prop {string} [className] - additional CSS classes to apply to the component.
 */
export const CustomTextarea = ({ className, name, label, required, ...props }: CustomTextareaProps) => {
  
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, '');
  };

  return (
    <div className={className}>
      <p className="font-medium mb-2">
        {label} {required && <RedAsteriks />}
      </p>

      <div className="relative">
        <Textarea className="h-12 text-md" {...register(name)} {...props} />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-1" />}
    </div>
  );
};