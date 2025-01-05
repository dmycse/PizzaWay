import Link from 'next/link';
import { Button } from '@/components/ui';
import { Container, Title } from '@/components/layout';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib';

type InfoBlockProps = {
  title: string;
  text: string;
  className?: string;
  imageUrl?: string;
};

/**
 * Component: displays a block of information with an image on the right-hand side.
 * 
 * Used in: UnauthorizedPage -> app/(main)/not-auth/page.tsx
 *
 * @example
 * <InfoBlock
 *   title="Page not found"
 *   text="The page you are looking for does not exist."
 *   imageUrl="/static/img/404.svg"
 * />
 */
export const InfoBlock = ({ className, title, text, imageUrl }: InfoBlockProps) => {
  return (
    <Container className={cn(className, 'w-[50rem] flex justify-between items-center gap-12')}>
      <div className="flex flex-col">
        <div className="w-[27rem]">
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
        </div>
      </div>

      <img src={imageUrl} alt={title} width={300} />
    </Container>
  );
};