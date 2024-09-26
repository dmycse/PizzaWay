import { Container, Title } from "@/components/shared";
import { TopBar, Filters } from "@/components/layout";



export default function Home() {
  return (
    <>
      <Container className='mt-8'>
        <Title text='Pizzas' size='lg' className="font-extrabold"/>
      </Container>

      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-16">

          <div className="w=[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* Products list */}
            </div>
          </div>
          
        </div>
      </Container>

      
    
    
    </>
    
  );
}
