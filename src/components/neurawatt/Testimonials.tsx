
export const Testimonials = () => {
  return (
    <section className="neurawatt-section bg-neurawatt-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-neurawatt-gray max-w-2xl mx-auto">
            Real results from building managers and property owners who have implemented NeuraWatt's intelligent energy solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="We've reduced our energy costs by 27% in just the first quarter after implementing NeuraWatt. The predictive modeling is remarkably accurate."
            author="Sarah Johnson"
            position="Facility Manager"
            company="Horizon Office Towers"
          />
          
          <TestimonialCard 
            quote="The gamified green score system has completely transformed how our tenants think about energy usage. Everyone is engaged and competing for the top spot."
            author="Michael Chen"
            position="Property Director"
            company="Emerald Properties"
          />
          
          <TestimonialCard 
            quote="What impressed me most was how quickly we saw results without having to install any new hardware. The digital twin technology is truly revolutionary."
            author="David Rodriguez"
            position="Sustainability Officer"
            company="Metro Living Apartments"
          />
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="flex space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xl font-medium text-neurawatt-gray-dark mb-2">
            4.9 out of 5 stars from 200+ reviews
          </p>
          <p className="text-neurawatt-gray">
            Join hundreds of satisfied building owners and managers
          </p>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard = ({ quote, author, position, company }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full neurawatt-card-hover">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neurawatt-purple opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      
      <p className="text-neurawatt-gray-dark mb-6">"{quote}"</p>
      
      <div>
        <p className="font-semibold text-neurawatt-gray-dark">{author}</p>
        <p className="text-neurawatt-gray text-sm">{position}</p>
        <p className="text-neurawatt-purple text-sm">{company}</p>
      </div>
    </div>
  );
};
