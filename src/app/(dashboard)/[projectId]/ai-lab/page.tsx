'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, DollarSign, Target, Lightbulb, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AILabPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBudget, setSelectedBudget] = useState('medio');
  const [selectedObjective, setSelectedObjective] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-xl">
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              Asistente IA
              <span className="ml-3 text-gray-400 font-normal">Recomendador de Stack</span>
            </h1>
            <p className="text-gray-500">
              Sugerencias personalizadas según presupuesto y objetivos
            </p>
          </div>
        </div>
        <Link
          href="/projects/overview"
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Volver
        </Link>
      </div>

      {/* Stepper Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gray-900 rounded-2xl p-8">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((step, index) => (
              <div key={step} className="flex items-center">
                <button
                  onClick={() => handleStepClick(step)}
                  className={cn(
                    'w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg transition-all cursor-pointer',
                    currentStep === step
                      ? 'bg-purple-600 text-white'
                      : currentStep > step
                        ? 'bg-purple-600/50 text-white'
                        : 'bg-gray-700 text-gray-400'
                  )}
                >
                  {step}
                </button>
                {index < 2 && (
                  <div
                    className={cn(
                      'w-16 h-1 mx-2',
                      currentStep > step ? 'bg-purple-600' : 'bg-gray-700'
                    )}
                  />
                )}
              </div>
            ))}
            <span className="ml-auto text-gray-400">
              Paso {currentStep} de {totalSteps}
            </span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gray-900 rounded-2xl p-8 min-h-[400px]">
          {currentStep === 1 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">1. Presupuesto Disponible</h2>
              </div>
              <p className="text-gray-400 mb-8">
                Seleccione el rango de inversión para licencias y servicios (3 años)
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => setSelectedBudget('bajo')}
                  className={cn(
                    'w-full p-6 rounded-xl border-2 transition-all text-left',
                    selectedBudget === 'bajo'
                      ? 'border-cyan-400 bg-cyan-400/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                        selectedBudget === 'bajo' ? 'border-cyan-400' : 'border-gray-600'
                      )}
                    >
                      {selectedBudget === 'bajo' && (
                        <div className="w-3 h-3 rounded-full bg-cyan-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-white font-semibold">Bajo (&lt;$50k USD)</p>
                      <p className="text-gray-400 text-sm">Open source y herramientas básicas</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedBudget('medio')}
                  className={cn(
                    'w-full p-6 rounded-xl border-2 transition-all text-left',
                    selectedBudget === 'medio'
                      ? 'border-cyan-400 bg-cyan-400/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                        selectedBudget === 'medio' ? 'border-cyan-400' : 'border-gray-600'
                      )}
                    >
                      {selectedBudget === 'medio' && (
                        <div className="w-3 h-3 rounded-full bg-cyan-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-white font-semibold">Medio ($50k-$200k USD)</p>
                      <p className="text-gray-400 text-sm">Soluciones comerciales profesionales</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedBudget('alto')}
                  className={cn(
                    'w-full p-6 rounded-xl border-2 transition-all text-left',
                    selectedBudget === 'alto'
                      ? 'border-cyan-400 bg-cyan-400/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                        selectedBudget === 'alto' ? 'border-cyan-400' : 'border-gray-600'
                      )}
                    >
                      {selectedBudget === 'alto' && (
                        <div className="w-3 h-3 rounded-full bg-cyan-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-white font-semibold">Alto (&gt;$200k USD)</p>
                      <p className="text-gray-400 text-sm">
                        Plataformas enterprise con soporte completo
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">2. Objetivo Principal</h2>
              </div>
              <p className="text-gray-400 mb-8">
                ¿Cuál es el objetivo principal de su proyecto de gemelo digital?
              </p>

              <div className="space-y-4">
                {[
                  {
                    id: 'planificacion',
                    label: 'Planificación Urbana',
                    desc: 'Diseño y desarrollo de nuevas áreas',
                  },
                  {
                    id: 'gestion',
                    label: 'Gestión de Infraestructura',
                    desc: 'Mantenimiento y operación de activos',
                  },
                  {
                    id: 'emergencias',
                    label: 'Respuesta a Emergencias',
                    desc: 'Simulación y preparación ante desastres',
                  },
                  {
                    id: 'sostenibilidad',
                    label: 'Sostenibilidad Ambiental',
                    desc: 'Análisis de impacto y optimización',
                  },
                ].map(option => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedObjective(option.id)}
                    className={cn(
                      'w-full p-6 rounded-xl border-2 transition-all text-left',
                      selectedObjective === option.id
                        ? 'border-cyan-400 bg-cyan-400/10'
                        : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                          selectedObjective === option.id ? 'border-cyan-400' : 'border-gray-600'
                        )}
                      >
                        {selectedObjective === option.id && (
                          <div className="w-3 h-3 rounded-full bg-cyan-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{option.label}</p>
                        <p className="text-gray-400 text-sm">{option.desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">3. Prioridad Técnica</h2>
              </div>
              <p className="text-gray-400 mb-8">
                Seleccione la característica técnica más importante para su proyecto
              </p>

              <div className="space-y-4">
                {[
                  {
                    id: 'visualizacion',
                    label: 'Visualización 3D Avanzada',
                    desc: 'Renderizado fotorrealista y experiencia inmersiva',
                  },
                  {
                    id: 'analisis',
                    label: 'Análisis de Datos en Tiempo Real',
                    desc: 'Procesamiento y visualización de datos IoT',
                  },
                  {
                    id: 'colaboracion',
                    label: 'Colaboración Multi-usuario',
                    desc: 'Trabajo simultáneo de múltiples equipos',
                  },
                  {
                    id: 'integracion',
                    label: 'Integración con Sistemas Existentes',
                    desc: 'Conectividad con BIM, GIS y ERP',
                  },
                ].map(option => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedPriority(option.id)}
                    className={cn(
                      'w-full p-6 rounded-xl border-2 transition-all text-left',
                      selectedPriority === option.id
                        ? 'border-cyan-400 bg-cyan-400/10'
                        : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                          selectedPriority === option.id ? 'border-cyan-400' : 'border-gray-600'
                        )}
                      >
                        {selectedPriority === option.id && (
                          <div className="w-3 h-3 rounded-full bg-cyan-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{option.label}</p>
                        <p className="text-gray-400 text-sm">{option.desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="max-w-7xl mx-auto flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={cn(
            'px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2',
            currentStep === 1
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-gray-500 hover:bg-gray-600 text-white'
          )}
        >
          <ArrowLeft className="w-5 h-5" />
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === totalSteps}
          className={cn(
            'px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2',
            currentStep === totalSteps
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-cyan-400 hover:bg-cyan-500 text-gray-900'
          )}
        >
          Siguiente
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
