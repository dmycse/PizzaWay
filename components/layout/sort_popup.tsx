import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';

type SortPopupProps = {
  className?: string;
}

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