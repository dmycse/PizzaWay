import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';

type SortPopupProps = {
  className?: string;
}
// * Component needs to be fixed. Not in use now.
/**
 * Component: A popup for sorting items. It displays the current sorting
 * criterion with an orange color and can be clicked to change the sorting
 * criterion.
 *
 * Parent component: TopBar -> components/layout/topbar.tsx
 */
export const SortPopup = ({ className }: SortPopupProps) => {
  return (
    <div
      className={cn(
        'px-5 h-[52px] inline-flex items-center gap-1 bg-gray-50 rounded-2xl cursor-pointer',
        className,
      )}>
      <ArrowUpDown size={16} />
      <b>Sort:</b>
      <b className="text-orange-500">popular</b>
    </div>
  );
};