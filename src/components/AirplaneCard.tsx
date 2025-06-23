import React from "react";
import Icon from "@/components/ui/icon";

export interface Airplane {
  id: string;
  name: string;
}

interface AirplaneCardProps {
  airplane: Airplane;
}

const AirplaneCard: React.FC<AirplaneCardProps> = ({ airplane }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-700">
      <div className="aspect-[4/3] flex items-center justify-center bg-gray-700">
        <Icon name="Plane" size={32} className="text-blue-400" />
      </div>
      <div className="p-2">
        <h3 className="text-sm font-medium text-white text-center">
          {airplane.name}
        </h3>
      </div>
    </div>
  );
};

export default AirplaneCard;
