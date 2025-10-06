export const twin3d = {
  tab1: 'Historia 3D',
  tab2: 'Antes/ Después',
  steps: [
    { label: 'Problema Actual' },
    { label: 'Intervención Propuesta' },
    { label: 'Impacto Esperado' },
  ],
  kpis: {
    title: 'KIPs y tiempo real',
    items: [
      {
        label: 'Población',
        subtitle: 'habitantes',
      },
      {
        label: 'Edificios',
        subtitle: 'estructuras',
      },
      {
        label: 'Áreas Verdes',
        subtitle: 'cobertura',
      },
    ],
  },
  problemCard: {
    title: 'Problema Actual',
    description: 'Alto riesgo de inundación en 847 hectáreas',
    metrics: [
      { label: 'Población afectada' },
      { label: 'Daño histórico' },
      { label: 'Área de riesgo' },
    ],
  },
  comparisonCard: {
    before: {
      title: 'Antes de la intervención',
      floodRisk: 'Riesgo de inundación',
      affectedPopulation: 'Población afectada',
      annualDamage: 'Daño anual',
    },
    after: {
      title: 'Después de la intervención',
      floodRisk: 'Riesgo de inundación',
      affectedPopulation: 'Población afectada',
      annualDamage: 'Daño anual',
    },
    aiPowered: 'Comparación visual impulsada por IA',
    capture: 'Capturar',
    export: 'Exportar Comparación',
  },
};
