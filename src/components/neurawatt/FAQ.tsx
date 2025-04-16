
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section id="faq" className="neurawatt-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neurawatt-gray max-w-2xl mx-auto">
            Get answers to common questions about NeuraWatt's AI-powered energy efficiency solution.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-neurawatt-gray-light rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-neurawatt-gray-light hover:text-neurawatt-purple transition-colors">
                How does NeuraWatt work without installing new hardware?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-2 pb-4 text-neurawatt-gray">
                NeuraWatt integrates with your existing building management systems and IoT devices to collect data. Our software then creates a digital twin of your building, applies AI algorithms to identify inefficiencies, and implements optimizations through your current infrastructure. This software-only approach eliminates the need for costly hardware installations while delivering significant energy savings.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-neurawatt-gray-light rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-neurawatt-gray-light hover:text-neurawatt-purple transition-colors">
                What kind of energy savings can I expect?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-2 pb-4 text-neurawatt-gray">
                Most clients see energy savings between 15-30% within the first year of implementation. The exact amount depends on your building's current efficiency, usage patterns, and systems in place. Our predictive algorithms continuously learn and improve over time, often increasing efficiency gains beyond the first year.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-neurawatt-gray-light rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-neurawatt-gray-light hover:text-neurawatt-purple transition-colors">
                Is NeuraWatt compatible with my existing building management system?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-2 pb-4 text-neurawatt-gray">
                NeuraWatt is designed to be highly compatible with most modern building management systems. We support integration with major BMS platforms including Johnson Controls, Siemens, Honeywell, Schneider Electric, and many others. Our team will perform a compatibility assessment during the initial consultation to ensure seamless integration.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-neurawatt-gray-light rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-neurawatt-gray-light hover:text-neurawatt-purple transition-colors">
                How long does it take to implement NeuraWatt?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-2 pb-4 text-neurawatt-gray">
                Typical implementation takes 2-4 weeks, depending on the size and complexity of your building systems. This includes data integration, digital twin creation, and initial optimization setup. Once implemented, the system begins delivering energy savings immediately while continuously improving its efficiency recommendations through machine learning.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-neurawatt-gray-light rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-neurawatt-gray-light hover:text-neurawatt-purple transition-colors">
                How does the gamified green score system work?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-2 pb-4 text-neurawatt-gray">
                Our green score system assigns sustainability ratings to different zones or departments within your building based on energy usage patterns. Occupants can view their scores through a user-friendly dashboard, compete with other zones, and receive personalized recommendations to improve their score. This gamification element has proven highly effective at encouraging voluntary energy-saving behaviors among building occupants.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
