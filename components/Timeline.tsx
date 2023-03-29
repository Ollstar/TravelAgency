// src/components/Timeline.tsx
import React from "react";
import { timelineData } from "@/data/timeline";

const Timeline: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">Our History</h2>
      <div className="flex flex-col space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="font-bold text-lg mr-4">{item.year}</div>
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
