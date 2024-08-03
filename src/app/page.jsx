import { Hero,  BestSellers, AboutUs, ContactUs } from "../components";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <BestSellers />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
