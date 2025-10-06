export const twin3d = {
  tab1: '3D Story',
  tab2: 'Before/ After',
  steps: [
    { label: 'Current Problem' },
    { label: 'Proposed Intervention' },
    { label: 'Expected Impact' },
  ],
  kpis: {
    title: 'KIPs and time real',
    items: [
      {
        label: 'Population',
        subtitle: 'inhabitants',
      },
      {
        label: 'Buildings',
        subtitle: 'structures',
      },
      {
        label: 'Green Areas',
        subtitle: 'coverage',
      },
    ],
  },
  problemCard: {
    title: 'Current Problem',
    description: 'High flood risk in 847 hectares',
    metrics: [
      { label: 'Affected population' },
      { label: 'Historical damage' },
      { label: 'Risk area' },
    ],
  },
  comparisonCard: {
    before: {
      title: 'Before intervention',
      floodRisk: 'Flood risk',
      affectedPopulation: 'Affected population',
      annualDamage: 'Annual damage',
    },
    after: {
      title: 'After Intervention',
      floodRisk: 'Flood risk',
      affectedPopulation: 'Affected population',
      annualDamage: 'Annual damage',
    },
    aiPowered: 'AI-powered visual comparison',
    capture: 'Capture',
    export: 'Export Comparison',
  },
};
