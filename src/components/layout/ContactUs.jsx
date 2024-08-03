import { HeaderSection } from "../../components";
import { contactUs } from "../../data";

export default function ContactUs() {

  let {subHeader, mainHeader, phone, email } = contactUs;

  return (
    <section className="my-6">
      <div className="wrapper flex flex-col items-center">
        <HeaderSection 
          subHeader={subHeader}
          mainHeader={mainHeader} 
        />
        <div className="mt-4 flex flex-col gap-2 items-center text-3xl text-gray-500">
          <a href={`tel:${phone.replace(/\s/g,'')}`}>
          {phone}
          </a>
          <a href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    </section>
  )
}
