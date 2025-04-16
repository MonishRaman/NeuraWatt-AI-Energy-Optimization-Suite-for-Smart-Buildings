
import { Navbar } from "@/components/neurawatt/Navbar";
import { Hero } from "@/components/neurawatt/Hero";
import { Features } from "@/components/neurawatt/Features";
import { Benefits } from "@/components/neurawatt/Benefits";
import { HowItWorks } from "@/components/neurawatt/HowItWorks";
import { Testimonials } from "@/components/neurawatt/Testimonials";
import { FAQ } from "@/components/neurawatt/FAQ";
import { CTA } from "@/components/neurawatt/CTA";
import { Footer } from "@/components/neurawatt/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 right-0 p-4 z-10">
        <Button asChild>
          <Link to="/login">Login / Dashboard</Link>
        </Button>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
