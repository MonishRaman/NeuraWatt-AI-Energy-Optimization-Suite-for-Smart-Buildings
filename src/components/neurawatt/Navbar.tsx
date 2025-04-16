
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-neurawatt-purple to-neurawatt-purple-dark bg-clip-text text-transparent">
            NeuraWatt
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-neurawatt-gray-dark hover:text-neurawatt-purple transition-colors">Features</a>
          <a href="#benefits" className="text-neurawatt-gray-dark hover:text-neurawatt-purple transition-colors">Benefits</a>
          <a href="#how-it-works" className="text-neurawatt-gray-dark hover:text-neurawatt-purple transition-colors">How It Works</a>
          <a href="#faq" className="text-neurawatt-gray-dark hover:text-neurawatt-purple transition-colors">FAQ</a>
        </div>
        
        <div className="hidden md:block">
          <Button className="neurawatt-btn-primary">
            Request Demo
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-neurawatt-gray-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-neurawatt-gray-dark hover:text-neurawatt-purple transition-colors">Features</a>
            <a href="#benefits" className="text-neurawatt-gray-dark hover:text-neurawatt-purple transition-colors">Benefits</a>
            <a href="#how-it-works" className="text-neurawatt-gray-dark hover:text-neurawatt-purple transition-colors">How It Works</a>
            <a href="#faq" className="text-neurawatt-gray-dark hover:text-neurawatt-purple transition-colors">FAQ</a>
            <Button className="neurawatt-btn-primary w-full">
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" className="fill-neurawatt-purple" />
    <path d="M20 8V32" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M10 15L30 15" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M10 25L30 25" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <circle cx="20" cy="15" r="3" fill="white" />
    <circle cx="20" cy="25" r="3" fill="white" />
    <path d="M13 32L20 25L27 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
