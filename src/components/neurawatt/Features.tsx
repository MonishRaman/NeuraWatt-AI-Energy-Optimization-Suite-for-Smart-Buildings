
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accentColor: string;
}

const FeatureCard = ({ icon, title, description, accentColor }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden neurawatt-card-hover">
      <div className={`h-2 ${accentColor}`}></div>
      <div className="p-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neurawatt-gray-light mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-neurawatt-gray-dark">{title}</h3>
        <p className="text-neurawatt-gray">{description}</p>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section id="features" className="neurawatt-section bg-neurawatt-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Features
          </h2>
          <p className="text-neurawatt-gray max-w-2xl mx-auto">
            Our AI-powered platform delivers comprehensive energy optimization through advanced digital solutions that require no hardware installation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-neurawatt-purple">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            title="Virtual Occupancy Simulator" 
            description="Accurately models human behavior patterns to predict building usage and optimize energy systems accordingly."
            accentColor="bg-neurawatt-purple"
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-neurawatt-green">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Energy Waste Predictor" 
            description="Identifies potential energy waste before it occurs, allowing for proactive adjustments to building systems."
            accentColor="bg-neurawatt-green"
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-neurawatt-purple-dark">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            title="Smart Scheduling Recommendations" 
            description="AI-generated schedules that optimize HVAC and lighting systems based on predicted usage patterns."
            accentColor="bg-neurawatt-purple-dark"
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-neurawatt-green-dark">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            title="Gamified Green Score System" 
            description="Engaging sustainability metrics that motivate stakeholders to participate in energy-saving initiatives."
            accentColor="bg-neurawatt-green-dark"
          />
        </div>
      </div>
    </section>
  );
};
