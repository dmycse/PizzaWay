import { Container, TopBar } from "@/components/layout";
import { Title, Filters, ProductsGroup } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";


/**
 * The home page of the application. This page displays all categories and their associated products.
 * It also displays a filter menu for the user to filter the products by category.
 */
export default async function Home() {

  let categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          options: true
        }
      }
    }
  });
  console.log(categories[0].products[0])
  return (
    <>
      <Container className='mt-6'>
        <Title text='Pizzas & More' size='lg' className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter(category => category.products.length > 0)} />

      <Container className="pb-14">
        <div className="flex gap-20">

          <div className="w-[250px]">
            <Filters />
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
                      products={category.products}
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
