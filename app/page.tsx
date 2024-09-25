import { Container, Title } from "@/components/shared";
import { Categories, SortPopup } from "@/components/layout";


export default function Home() {
  return (
    <>
      <Container className='mt-8'>
        <Title text='Pizzas' size='lg' className="font-extrabold"/>
       <Categories />
       <SortPopup />
      </Container>
    
    
    </>
    
  );
}
