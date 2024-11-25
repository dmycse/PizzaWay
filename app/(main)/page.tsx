import { Container, TopBar } from "@/components/layout";
import { Title, Filters, ProductsGroup } from "@/components/shared";
import { findPizzas } from "@/lib";
import type { GetSearchParams } from "@/lib/find-pizzas";
import { Suspense } from "react";

/**
 * The home page of the application. This page displays all categories and their associated products.
 * It also displays a filter menu for the user to filter the products by category.
 */
export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {

  const categories = await findPizzas(searchParams);
 
  return (
    <>
      <Container className='mt-6'>
        <Title text='Pizzas & More' size='lg' className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter(category => category.products.length > 0)} />

      <Container className="pb-14">
        <div className="flex gap-20">

          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          <div className="mt-8 flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map(category => (
                  category.products.length > 0 && (
                   <ProductsGroup 
                      key={category.id} 
                      categoryName={category.name} 
                      categoryId={category.id}
                      items={category.products}
                  />
                  )
                ))
              }
            </div>
          </div>
          
        </div>
      </Container>
    </>
  );
}
