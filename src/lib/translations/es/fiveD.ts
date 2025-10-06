export const fiveD = {
  blackButton: 'Negro',
  headerTitle: 'Costos 5D - Glodon',
  headerSubtitle: 'Simule el impacto climático y ambiental con datos y sensores de la NASA',
  seeTwinButton: 'Ver gemelo en 3D',
  sendTo5DButton: 'Enviar a 5D',
  scenariosTitle: 'Escenarios disponibles',
  scenarios: [
    {
      id: 'base',
      title: 'Escenario Base Anual',
      description: 'Situación actual sin intervenciones',
    },
    {
      id: 'green-roofs',
      title: 'Techos verdes',
      description: 'Implementación de techos fríos y vegetación',
    },
    {
      id: 'permeable',
      title: 'Pavimento permeable',
      description: 'Reemplazo de asfalto por pavimento permeable',
    },
    {
      id: 'combined',
      title: 'Solución combinada',
      description: 'Techos verdes + pavimento + árboles',
    },
  ],
  greenRoofsMetrics: {
    title: 'Métricas de Impacto - Techos Verdes',
    metrics: [
      { label: 'Riesgo de inundación', subtitle: '25% de área afectada' },
      { label: 'Isla de calor', subtitle: '-3% de intensidad' },
      { label: 'Calidad del aire', subtitle: '82% de calidad (NOx/CO₂)' },
      { label: 'Inversión requerida', subtitle: 'USD (solo CapEx)' },
    ],
  },
  skinsMetrics: {
    title: 'Skins 6D aplicados',
    metrics: [
      { label: '75% de área afectada', subtitle: '28% de intensidad' },
      { label: 'Calidad del aire', subtitle: '82% de calidad (NOx/CO₂)' },
      { label: 'Inversión requerida', subtitle: 'USD (solo CapEx)' },
      { label: 'Calidad del aire', subtitle: 'USD (solo CapEx)' },
    ],
  },
  returnPeriodSlider: {
    title: 'Período de retorno (NASA GPM)',
    subtitle: 'Simule el impacto climático y ambiental con datos y sensores de la NASA',
    t10: 'T=10',
    t100: 'T=100',
  },
};
