import React from "react";
import AirplaneCard, { type Airplane } from "./AirplaneCard";

const airplanes: Airplane[] = [
  {
    id: "1",
    name: "Boeing 747",
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    name: "Airbus A380",
    imageUrl:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    name: "Boeing 787",
    imageUrl:
      "https://images.unsplash.com/photo-1583267746897-2cf415887403?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    name: "Airbus A320",
    imageUrl:
      "https://images.unsplash.com/photo-1569629465841-f4ec57be90a0?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    name: "Boeing 777",
    imageUrl:
      "https://images.unsplash.com/photo-1544037150-6e4ecfcb8a3c?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    name: "Airbus A350",
    imageUrl:
      "https://images.unsplash.com/photo-1518290333662-8ac1bf27e93b?w=800&h=600&fit=crop",
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
