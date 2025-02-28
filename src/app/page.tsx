import Hero from "./components/Hero";
import FloatingButton from "@/app/components/FloatingButton";
import FadeInOnScroll from "@/app/components/FadeInOnScroll";
import AboutUs from "@/app/components/AboutUs";


export default function Home() {
  return (
    <main>
      <Hero />
      {/* Secção "About Us" */}
      <AboutUs />
      <FloatingButton/>
    </main>
  );
}
