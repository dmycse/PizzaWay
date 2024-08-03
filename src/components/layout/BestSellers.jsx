import Image from "next/image";
import { HeaderSection } from "..";
import { bestSellers } from "../../data";

export default function BestSellers() {
  return (
    <section>
      <div className="wrapper">
        <div className="max-md:hidden absolute left-0 right-0 w-full">
          <div className="absolute -top-[90px] -left-[80px] -z-10 text-left">
            <Image src={'/assets/greenpeper.jpeg'} width={300} height={300} alt={'tomatoes'} />
          </div>
          <div className="absolute -top-[90px] -right-[70px] -z-10">
            <Image src={'/assets/redpeper.png'} width={300} height={300} alt={'peprika'} />
          </div>
        </div>
        <div className="pt-10 mb-24 max-md:pt-4 max-md:mb-10 flex flex-col items-center">
          <HeaderSection
            subHeader={'check out'}
            mainHeader={'Our Menu'} />
        </div>
        {/* <div className="grid sm:grid-cols-3 gap-4">
          {bestSellers?.length > 0 && bestSellers.map(item => (
            <MenuItem key={item._id} {...item} />
          ))}
        </div> */}
        <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers.map(item => (
          <div id={item.id} className="p-4 border-2 border-orange-500 shadow-lg text-center rounded-lg">
            <div className="w-full flex-1 flex justify-center h-[150px]">
              <img src={item.url} alt={`${item.title} pizza`} width={250} height={200} />
            </div>
            <h4 className="my-4 font-bold text-xl">
              <span className="text-primary">{item.title}</span>{' '}
              <span className="text-secondary">Pizza</span>
            </h4>
            <p className="mb-4 text-gray-500 text-sm">
              {item.description}
            </p>
            <button className="py-2 px-14 max-md:px-8 bg-primary text-white rounded-md">
              Add to Cart €{item.price}
            </button>
        </div>
        ))}  
        </div>
      </div>
    </section>
  )
}
