import { cn } from '@/lib/utils';

type ErrorTextProps = {
  text: string;
  className?: string;
};

export const ErrorText = ({ text, className }: ErrorTextProps) => {
  return <p className={cn('text-red-500 text-sm', className)}>{text}</p>;
};