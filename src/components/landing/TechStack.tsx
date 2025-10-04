import React from 'react';

export function TechStack() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Tecnologías Utilizadas</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center justify-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-medium">Modelado 3D</h3>
            </div>
          </div>
          
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center justify-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-medium">Inteligencia Artificial</h3>
            </div>
          </div>
          
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center justify-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-medium">Big Data</h3>
            </div>
          </div>
          
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center justify-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="font-medium">Cloud Computing</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}