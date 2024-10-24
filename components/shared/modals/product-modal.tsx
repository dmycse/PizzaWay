
'use client';

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProductWithRelations } from "@/prisma/prisma-types";
import { ChoosePizza } from "../pizzas/choose-pizza";
import { cn } from "@/lib/utils";

type ProductModalProps =  {
  product: ProductWithRelations;
  className?: string;
};


export let ProductModal = ({ product, className }: ProductModalProps) => {
  
  let router = useRouter();

  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        <ChoosePizza  {...product} onSubmit={() => router.back()} />
        {/* <ProductForm product={product} onSubmit={() => router.back()} /> */}
      </DialogContent>
    </Dialog>
  );
};