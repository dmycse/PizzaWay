export default function HeaderSection({subHeader, mainHeader}) {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {subHeader}
      </h3>
      <h2 className="text-orange-500 font-bold text-4xl max-md:text-3xl">
        {mainHeader}
      </h2>
    </>
  );
}