export const fiveD = {
  blackButton: 'Black',
  headerTitle: '5D Costs - Glodon',
  headerSubtitle: 'Simulate climate and environmental impact with NASA data and sensors',
  seeTwinButton: 'See twin in 3D',
  sendTo5DButton: 'Send to 5D',
  scenariosTitle: 'Available scenarios',
  scenarios: [
    {
      id: 'base',
      title: 'Annual Base Scenario',
      description: 'Current situation without interventions',
    },
    {
      id: 'green-roofs',
      title: 'Green roofs',
      description: 'Implementation of cool roofs and vegetation',
    },
    {
      id: 'permeable',
      title: 'Permeable pavement',
      description: 'Replacing asphalt with permeable pavement',
    },
    {
      id: 'combined',
      title: 'Combined solution',
      description: 'Green roofs + pavement + trees',
    },
  ],
  greenRoofsMetrics: {
    title: 'Impact Metrics - Green Roofs',
    metrics: [
      { label: 'Flood risk', subtitle: '25% affected area' },
      { label: 'heat island', subtitle: '-3% intensity' },
      { label: 'Air quality', subtitle: '82% quality (NOx/CO₂)' },
      { label: 'Investment required', subtitle: 'USD (CapEx only)' },
    ],
  },
  skinsMetrics: {
    title: '6D Skins applied',
    metrics: [
      { label: '75% affected area', subtitle: '28% intensity' },
      { label: 'Air quality', subtitle: '82% quality (NOx/CO₂)' },
      { label: 'Investment required', subtitle: 'USD (CapEx only)' },
      { label: 'Air quality', subtitle: 'USD (CapEx only)' },
    ],
  },
  returnPeriodSlider: {
    title: 'Return period (NASA GPM)',
    subtitle: 'Simulate climate and environmental impact with NASA data and sensors',
    t10: 'T=10',
    t100: 'T=100',
  },
};
