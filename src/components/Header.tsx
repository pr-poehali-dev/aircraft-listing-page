import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <h1 className="text-3xl font-light text-gray-900 text-center">
          Каталог самолетов
        </h1>
      </div>
    </header>
  );
};

export default Header;
