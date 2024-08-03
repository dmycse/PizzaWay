import { Hero,  HomeMenu, AboutUs, ContactUs } from "../components";


export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <HomeMenu />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
