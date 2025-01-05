import { cn } from '@/lib/utils';

type ErrorTextProps = {
  text: string;
  className?: string;
};

/**
 * ErrorText is a functional component that renders an error message.
 */

export const ErrorText = ({ text, className }: ErrorTextProps) => {
  return <p className={cn('text-red-500 text-sm', className)}>{text}</p>;
};