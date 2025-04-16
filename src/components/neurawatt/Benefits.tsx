
import { ReactNode } from 'react';

interface BenefitItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BenefitItem = ({ icon, title, description }: BenefitItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-neurawatt-purple-light flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-neurawatt-gray-dark">{title}</h3>
        <p className="text-neurawatt-gray">{description}</p>
      </div>
    </div>
  );
};

export const Benefits = () => {
  return (
    <section id="benefits" className="neurawatt-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-neurawatt-purple opacity-10"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-neurawatt-gray-light p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-neurawatt-gray-dark">Building Energy Performance</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-white text-neurawatt-purple rounded-full">Live Data</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-neurawatt-gray">Energy Usage</span>
                      <div className="flex items-center">
                        <span className="text-neurawatt-green font-medium mr-1">-24%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neurawatt-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full bg-neurawatt-gray-light rounded-full h-3">
                      <div className="bg-gradient-to-r from-neurawatt-purple to-neurawatt-green h-3 rounded-full" style={{ width: "76%" }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-neurawatt-purple-light flex items-center justify-center mb-2">
                          <span className="text-neurawatt-purple text-xl font-bold">CO₂</span>
                        </div>
                        <span className="text-sm text-neurawatt-gray">Carbon Reduction</span>
                        <span className="text-lg font-bold text-neurawatt-purple-dark">43 tons</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-neurawatt-green-light flex items-center justify-center mb-2">
                          <span className="text-neurawatt-green text-xl font-bold">$</span>
                        </div>
                        <span className="text-sm text-neurawatt-gray">Cost Savings</span>
                        <span className="text-lg font-bold text-neurawatt-green-dark">$28,500</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neurawatt-gray-dark mb-4">HVAC Optimization</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-neurawatt-gray">Zone 1 Efficiency</span>
                      <span className="text-neurawatt-purple font-medium">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neurawatt-gray">Zone 2 Efficiency</span>
                      <span className="text-neurawatt-purple font-medium">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neurawatt-gray">Zone 3 Efficiency</span>
                      <span className="text-neurawatt-purple font-medium">91%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-neurawatt-green-light rounded-full opacity-20 z-0"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Building into a <span className="text-neurawatt-purple">Smart Energy Ecosystem</span>
            </h2>
            
            <p className="text-neurawatt-gray mb-8">
              NeuraWatt delivers measurable benefits without the need for costly hardware installations or disruptive retrofits. Our software-only solution creates immediate impact with minimal upfront investment.
            </p>
            
            <div className="space-y-8">
              <BenefitItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-neurawatt-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Reduced Energy Costs"
                description="Cut operational expenses by 15-30% through intelligent energy optimization and waste reduction without hardware installation."
              />
              
              <BenefitItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-neurawatt-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Lower Carbon Footprint"
                description="Achieve sustainability goals with significant carbon emissions reduction through digital-twin based environmental modeling."
              />
              
              <BenefitItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-neurawatt-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                }
                title="Enhanced Comfort & Productivity"
                description="Improve occupant experience through personalized environmental conditions that adapt to behavioral patterns."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
