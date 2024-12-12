import Link from 'next/link';

import { Button } from '@/components/ui';
import { Title } from '@/components/layout';

import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib';

type InfoBlockProps = {
  title: string;
  text: string;
  className?: string;
  imageUrl?: string;
};

export const InfoBlock = ({ className, title, text, imageUrl }: InfoBlockProps) => {
  return (
    <div className={cn(className, 'w-[840px] flex justify-between items-center gap-12')}>
      <div className="flex flex-col">
        <div className="w-[445px]">
          <Title size="lg" text={title} className="font-extrabold text-primary" />
          <p className="text-gray-400 text-lg">{text}</p>
        </div>

        <div className="mt-11 flex gap-5">
          <Link href="/">
            <Button variant="outline" className="text-brand gap-2 border-brand hover:bg-brand hover:text-white">
              <ArrowLeft />
              Go home
            </Button>
          </Link>
          <Link href="">
            <Button variant="outline" className="text-gray-500 border-gray-400 hover:bg-gray-300 hover:text-gray-500">
              Reset
            </Button>
          </Link>
        </div>
      </div>

      <img src={imageUrl} alt={title} width={300} />
    </div>
  );
};