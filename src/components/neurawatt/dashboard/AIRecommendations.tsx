
import { Lightbulb, ThumbsUp, ThumbsDown } from "lucide-react";

export const AIRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "Reduce HVAC in unused rooms",
      description: "Conference Room B is frequently unoccupied after 3 PM. Set HVAC to eco mode during these hours to save energy.",
      potentialSavings: "45 kWh/week",
      implemented: false,
    },
    {
      id: 2,
      title: "Optimize lighting schedule",
      description: "Our AI detected that the 2nd floor lighting remains on until 9 PM, while occupancy drops to zero by 6:30 PM most days.",
      potentialSavings: "62 kWh/week",
      implemented: true,
    },
    {
      id: 3,
      title: "Adjust temperature setpoints",
      description: "Increasing summer temperature setpoints by 1.5°C could save significant energy with minimal comfort impact.",
      potentialSavings: "86 kWh/week",
      implemented: false,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="h-5 w-5 text-neurawatt-purple" />
        <h3 className="text-lg font-medium">AI Recommendations</h3>
      </div>
      
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className={`p-4 rounded-lg border ${rec.implemented ? 'border-green-200 bg-green-50' : 'border-border'}`}>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium mb-1">{rec.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                <div className="text-xs font-medium text-neurawatt-purple">
                  Potential savings: {rec.potentialSavings}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {rec.implemented ? (
                  <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded font-medium">
                    Implemented
                  </span>
                ) : (
                  <div className="flex gap-1">
                    <button className="p-1.5 rounded-full hover:bg-gray-100">
                      <ThumbsUp className="h-4 w-4 text-gray-500 hover:text-green-500" />
                    </button>
                    <button className="p-1.5 rounded-full hover:bg-gray-100">
                      <ThumbsDown className="h-4 w-4 text-gray-500 hover:text-red-500" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 text-sm text-neurawatt-purple hover:underline">
        View all recommendations
      </button>
    </div>
  );
};
