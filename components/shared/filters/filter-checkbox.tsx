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

/**
 * Component: renders a checkbox with a label and optional end adornment.
 *
 * Parent component: FilterCheckboxGroup -> /components/shared/filters/filter-checkbox-group.tsx
 * 
 * @example
 * <FilterCheckbox
 *   label="Option 1"
 *   value="1"
 *   checked={true}
 *   name="group1"
 *   onCheckedChange={(checked) => console.log(checked)}
 * />
 */
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
        htmlFor={`checkbox-${name}-${value}`}
        className="flex-1 leading-none cursor-pointer hover:font-semibold"
      >
        {label}
      </label>
      {endAdornment}
    </div>
  );
};