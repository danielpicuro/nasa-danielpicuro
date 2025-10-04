import React from 'react';

export function Features() {
  const features = [
    {
      title: 'Modelado 3D Avanzado',
      description: 'Crea representaciones digitales precisas de tu ciudad con tecnología de modelado 3D de última generación',
      icon: '🏙️'
    },
    {
      title: 'Análisis Predictivo',
      description: 'Anticipa problemas urbanos y simula soluciones con nuestros algoritmos de IA',
      icon: '📊'
    },
    {
      title: 'Planificación Sostenible',
      description: 'Optimiza recursos y reduce el impacto ambiental con herramientas de planificación inteligente',
      icon: '🌱'
    },
    {
      title: 'Colaboración en Tiempo Real',
      description: 'Trabaja con equipos multidisciplinarios en un entorno colaborativo centralizado',
      icon: '👥'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Características Principales</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}