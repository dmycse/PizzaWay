import { ReactNode } from 'react';
import { Checkbox } from '@/components/ui';

export type FilterCheckboxProps = {
  label: string;
  value: string;
  checked?: boolean;
  name?: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
}

export const FilterCheckbox = ({
    label,
    value,
    endAdornment,
    checked,
    name,
    onCheckedChange,
  }: FilterCheckboxProps) => {


  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        className="w-6 h-6 rounded-[8px]"
        id={`checkbox-${name}-${value}`}
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <label
        className="flex-1 leading-none cursor-pointer hover:font-semibold"
        htmlFor={`checkbox-${name}-${value}`}
      >
        {label}
      </label>
      {endAdornment}
    </div>
  );
};