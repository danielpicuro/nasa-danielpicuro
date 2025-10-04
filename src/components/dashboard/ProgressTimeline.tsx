import React from 'react';

export function ProgressTimeline() {
  const milestones = [
    { title: 'Inicio del proyecto', date: '10 Oct 2023', completed: true },
    { title: 'Análisis de requisitos', date: '25 Oct 2023', completed: true },
    { title: 'Diseño preliminar', date: '15 Nov 2023', completed: true },
    { title: 'Implementación', date: '10 Dic 2023', completed: false },
    { title: 'Pruebas', date: '15 Ene 2024', completed: false },
  ];

  return (
    <div className="space-y-4">
      {milestones.map((milestone, index) => (
        <div key={index} className="flex items-start">
          <div className="flex flex-col items-center mr-4">
            <div className={`w-4 h-4 rounded-full ${milestone.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            {index < milestones.length - 1 && (
              <div className="w-0.5 h-10 bg-gray-200"></div>
            )}
          </div>
          <div>
            <p className="font-medium">{milestone.title}</p>
            <p className="text-sm text-gray-500">{milestone.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}