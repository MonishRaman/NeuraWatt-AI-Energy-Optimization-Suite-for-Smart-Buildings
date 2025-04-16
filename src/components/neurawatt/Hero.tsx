
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-32">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-neurawatt-gray-light opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bTEyIDEydjZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bS0yNCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-neurawatt-purple to-neurawatt-purple-dark bg-clip-text text-transparent">Intelligent</span> Energy Management for Smart Buildings
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neurawatt-gray-dark max-w-lg mx-auto md:mx-0">
              Reduce energy waste without hardware installation through AI-powered predictive modeling and digital twin simulation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="neurawatt-btn-primary">
                Request Demo
              </Button>
              <Button className="neurawatt-btn-secondary">
                Learn More
              </Button>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              <div className="flex items-center">
                <div className="text-neurawatt-green-dark text-2xl mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-neurawatt-gray-dark">No Hardware Required</span>
              </div>
              <div className="flex items-center">
                <div className="text-neurawatt-green-dark text-2xl mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-neurawatt-gray-dark">15-30% Energy Savings</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-neurawatt-purple-light to-neurawatt-purple p-1">
                <div className="bg-white p-4 rounded-t-lg flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-neurawatt-gray">NeuraWatt Dashboard</div>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-neurawatt-gray-light rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-neurawatt-gray-dark">Energy Consumption</h3>
                    <span className="text-neurawatt-green text-sm font-medium px-2 py-1 bg-neurawatt-green-light rounded-full">-27% This Month</span>
                  </div>
                  <div className="h-40 relative">
                    {/* Simplified chart visualization */}
                    <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                      <div className="w-1/7 h-[65%] bg-neurawatt-gray mx-1 rounded-t-sm"></div>
                      <div className="w-1/7 h-[80%] bg-neurawatt-gray mx-1 rounded-t-sm"></div>
                      <div className="w-1/7 h-[70%] bg-neurawatt-gray mx-1 rounded-t-sm"></div>
                      <div className="w-1/7 h-[90%] bg-neurawatt-gray mx-1 rounded-t-sm"></div>
                      <div className="w-1/7 h-[60%] bg-neurawatt-purple mx-1 rounded-t-sm"></div>
                      <div className="w-1/7 h-[50%] bg-neurawatt-purple mx-1 rounded-t-sm"></div>
                      <div className="w-1/7 h-[40%] bg-neurawatt-green mx-1 rounded-t-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neurawatt-gray-light rounded-lg p-4">
                    <h3 className="font-semibold text-neurawatt-gray-dark text-sm mb-2">Smart Schedule</h3>
                    <div className="flex justify-between">
                      <span className="text-xs text-neurawatt-gray">Optimized</span>
                      <span className="text-xs font-medium text-neurawatt-purple">97%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2 mt-1">
                      <div className="bg-neurawatt-purple h-2 rounded-full" style={{ width: "97%" }}></div>
                    </div>
                  </div>
                  <div className="bg-neurawatt-gray-light rounded-lg p-4">
                    <h3 className="font-semibold text-neurawatt-gray-dark text-sm mb-2">Green Score</h3>
                    <div className="flex items-center justify-center h-10">
                      <span className="text-2xl font-bold text-neurawatt-green">A+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neurawatt-green-light rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-neurawatt-purple-light rounded-full opacity-50 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
