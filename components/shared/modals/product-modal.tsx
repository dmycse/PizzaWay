
'use client';

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { ProductWithRelations } from "@/prisma/prisma-types";
import { ProductSelection } from "@/components/shared";
import { cn } from "@/lib/utils";

type ProductModalProps =  {
  product: ProductWithRelations;
  className?: string;
};

/**
 * Component: displays a modal window with the selected product. The window is displayed
 * when the product is selected and will be closed when the user clicks outside of the window
 * or presses escape.
 * 
 * Used in: ProductModalPage -> app/(main)/@modal/(.)products/[id]/page.tsx
 */


export const ProductModal = ({ product, className }: ProductModalProps) => {
  
  const router = useRouter();

  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <VisuallyHidden.Root asChild>
        <DialogTitle>{product?.name}</DialogTitle>  
      </VisuallyHidden.Root>
      <DialogContent
        aria-describedby={undefined}
        className={cn(
          'p-0 max-w-[850px] min-h-[400px] bg-white overflow-hidden',
          className,
        )}>
        <ProductSelection product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};