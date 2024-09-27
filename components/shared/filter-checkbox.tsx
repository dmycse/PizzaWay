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
        id={`checkbox-${String(name)}-${String(value)}`}
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1 hover:font-bold">
        {label}
      </label>
      {endAdornment}
    </div>
  );
};