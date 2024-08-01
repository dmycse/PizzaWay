import { HeaderSection } from "@/components";
import { aboutUs } from "@/data";

export default function AboutUs() {

  let {subHeader, mainHeader, description, extraDescription } = aboutUs;

  return (
    <section className="my-6">
      <div className="wrapper flex flex-col items-center">
        <HeaderSection 
          subHeader={subHeader}
          mainHeader={mainHeader} 
        />
        <div className="mt-4 max-w-2xl mx-auto space-y-4 text-gray-500 text-center">
          <p>{description}</p>
          <p>{extraDescription}</p>
        </div>
      </div>
    </section>
  )
}
