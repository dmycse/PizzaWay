
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


export let ProductModal = ({ product, className }: ProductModalProps) => {
  
  let router = useRouter();

  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <VisuallyHidden.Root asChild>
        <DialogTitle>{product?.name}</DialogTitle>  
      </VisuallyHidden.Root>
      <DialogContent
        aria-describedby={undefined}
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        <ProductSelection product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};