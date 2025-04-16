
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="neurawatt-section bg-neurawatt-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Building's Energy Efficiency?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of buildings already saving energy, reducing costs, and minimizing their environmental impact with NeuraWatt.
          </p>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">15-30%</div>
                <p className="opacity-80">Energy Cost Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">2-4 wks</div>
                <p className="opacity-80">Implementation Time</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$0</div>
                <p className="opacity-80">Hardware Costs</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-neurawatt-purple hover:bg-neurawatt-gray-light" asChild>
                <Link to="/login">
                  Schedule a Demo
                </Link>
              </Button>
              <Button className="bg-transparent border border-white hover:bg-white hover:bg-opacity-10" asChild>
                <Link to="/login">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
