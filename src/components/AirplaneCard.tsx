import React from "react";

export interface Airplane {
  id: string;
  name: string;
  imageUrl: string;
}

interface AirplaneCardProps {
  airplane: Airplane;
}

const AirplaneCard: React.FC<AirplaneCardProps> = ({ airplane }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={airplane.imageUrl}
          alt={airplane.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 text-center">
          {airplane.name}
        </h3>
      </div>
    </div>
  );
};

export default AirplaneCard;
