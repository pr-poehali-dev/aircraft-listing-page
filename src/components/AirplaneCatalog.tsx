import React from "react";
import AirplaneCard, { type Airplane } from "./AirplaneCard";

const airplanes: Airplane[] = [
  {
    id: "1",
    name: "Boeing 747",
  },
  {
    id: "2",
    name: "Airbus A380",
  },
  {
    id: "3",
    name: "Boeing 787",
  },
  {
    id: "4",
    name: "Airbus A320",
  },
  {
    id: "5",
    name: "Boeing 777",
  },
  {
    id: "6",
    name: "Airbus A350",
  },
];

const AirplaneCatalog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {airplanes.map((airplane) => (
          <AirplaneCard key={airplane.id} airplane={airplane} />
        ))}
      </div>
    </div>
  );
};

export default AirplaneCatalog;
