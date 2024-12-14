import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Devices } from "@/components/sections/Devices";
import { CTA } from "@/components/sections/CTA";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Devices />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;