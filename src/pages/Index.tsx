import React from "react";
import Header from "@/components/Header";
import AirplaneCatalog from "@/components/AirplaneCatalog";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <AirplaneCatalog />
      </main>
    </div>
  );
};

export default Index;
