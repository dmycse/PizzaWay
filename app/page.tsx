import { Container, ProductCard, ProductsGroup, Title } from "@/components/shared";
import { TopBar, Filters } from "@/components/layout";



export default function Home() {
  return (
    <>
      <Container className='mt-8'>
        <Title text='Pizzas & more' size='lg' className="font-extrabold"/>
      </Container>

      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-16">

          <div className="w=[250px]">
            <Filters />
          </div>

          <div className="mt-10 flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroup title="Pizzas" items={[
                {
                  id: 1, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
                {
                  id: 2, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
                {
                  id: 3, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
                {
                  id: 4, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
                {
                  id: 5, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
                {
                  id: 6, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
              ]} categoryId={1} />
              <ProductsGroup title="Branches" items={[
                {
                  id: 1, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
                {
                  id: 2, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
                {
                  id: 3, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
                {
                  id: 4, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
                {
                  id: 5, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
                {
                  id: 6, 
                  name: "Carbonara", 
                  image_url: "/images/products/beefpizza.webp",
                  price: 10,
                  items: [{price: 10}],
                },
              ]} categoryId={1} />
            </div>
          </div>
          
        </div>
      </Container>


    
    
    </>
    
  );
}
