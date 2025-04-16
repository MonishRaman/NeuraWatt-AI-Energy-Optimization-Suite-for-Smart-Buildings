
export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="neurawatt-section neurawatt-gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How NeuraWatt Works
          </h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Our software-only solution transforms your building's energy performance through four key steps, with no hardware installation required.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white bg-opacity-20 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <Step 
              number="01"
              title="Data Integration"
              description="NeuraWatt connects to your existing building management system to gather historical and real-time data."
            />
            
            <Step 
              number="02"
              title="Digital Twin Creation"
              description="We create a virtual replica of your building's systems and occupancy patterns for simulation."
            />
            
            <Step 
              number="03"
              title="AI Analysis & Optimization"
              description="Our algorithms identify efficiency opportunities and generate optimal control strategies."
            />
            
            <Step 
              number="04"
              title="Automated Implementation"
              description="Optimization recommendations are automatically implemented through your existing systems."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => {
  return (
    <div className="relative">
      <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20 h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-white text-neurawatt-purple flex items-center justify-center font-bold text-xl mr-4">
            {number}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="opacity-90">{description}</p>
      </div>
    </div>
  );
};
