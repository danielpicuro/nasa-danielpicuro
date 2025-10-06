export const aiPrompts: Record<
  string,
  Record<string, { initialPrompt: string; pageContext: string }>
> = {
  '/': {
    en: {
      initialPrompt: 'Hello! How can I help you with your urban planning project today?',
      pageContext:
        'The user is on the main landing page or an unconfigured page. Provide general assistance related to urban planning.',
    },
    es: {
      initialPrompt: '¡Hola! ¿Cómo puedo ayudarte hoy con tu proyecto de planificación urbana?',
      pageContext:
        'El usuario se encuentra en la página de inicio principal o en una página no configurada. Ofrece asistencia general relacionada con la planificación urbana.',
    },
  },
  '/planning': {
    en: {
      initialPrompt:
        'Welcome to the Urban Planning page. Here you can design and analyze different urban development scenarios. Ask me about creating a new plan, comparing metrics between zones, or for suggestions on sustainable infrastructure.',
      pageContext:
        'The user is on the Urban Planning page, a tool for designing and analyzing urban development scenarios. It includes a map interface, scenario tabs, and metrics for population, land use, and infrastructure.',
    },
    es: {
      initialPrompt:
        'Bienvenido a la página de Planificación Urbana. Aquí puedes diseñar y analizar diferentes escenarios de desarrollo urbano. Pregúntame sobre cómo crear un nuevo plan, comparar métricas entre zonas o pídeme sugerencias sobre infraestructura sostenible.',
      pageContext:
        'El usuario se encuentra en la página de Planificación Urbana, una herramienta para diseñar y analizar escenarios de desarrollo urbano. Incluye características como una interfaz de mapa, pestañas de escenarios y métricas de población, uso del suelo e infraestructura.',
    },
  },
  '/projects': {
    en: {
      initialPrompt:
        'Welcome to the Project Selection page. Here you can browse and choose a city or project to begin your work. Use the carousel to navigate through available projects.',
      pageContext:
        'The user is on the main project selection screen. They are presented with a carousel of available projects to choose from, including urban planning, coastal resilience, and specific infrastructure projects.',
    },
    es: {
      initialPrompt:
        'Bienvenido a la página de Selección de Proyectos. Aquí puedes explorar y elegir una ciudad o proyecto para comenzar tu trabajo. Usa el carrusel para navegar por los proyectos disponibles.',
      pageContext:
        'El usuario está en la pantalla principal de selección de proyectos. Se le presenta un carrusel de proyectos disponibles para elegir, incluyendo planificación urbana, resiliencia costera y proyectos de infraestructura específicos.',
    },
  },
  '/data': {
    en: {
      initialPrompt:
        'Welcome to the Data page. This is your mission control for all geospatial information. You can toggle layers, change the view, and interact with the map. Ask me to find specific data or suggest interesting layers to combine.',
      pageContext:
        'The user is on the main Data & Map view. This page features an interactive map (2D/3D), layer controls, a directory sidebar, weather controls, and data panels. The user can visualize and analyze various geospatial datasets related to their urban project.',
    },
    es: {
      initialPrompt:
        'Bienvenido a la página de Datos. Este es tu control de misión para toda la información geoespacial. Puedes activar/desactivar capas, cambiar la vista e interactuar con el mapa. Pídeme que busque datos específicos o que sugiera capas interesantes para combinar.',
      pageContext:
        'El usuario se encuentra en la vista principal de Datos y Mapa. Esta página cuenta con un mapa interactivo (2D/3D), controles de capas, una barra lateral de directorios, controles meteorológicos y paneles de datos. El usuario puede visualizar y analizar diversos conjuntos de datos geoespaciales relacionados con su proyecto urbano.',
    },
  },
  '/5D': {
    en: {
      initialPrompt:
        'Welcome to the 5D Costs page. Here you can simulate climate and environmental impacts on your project. Compare different scenarios and analyze the impact metrics. Ask me to explain what a scenario means or how the metrics are calculated.',
      pageContext:
        'The user is on the 5D Costs & Simulation page. This page allows users to compare different intervention scenarios (like green roofs, permeable pavement) and see their impact on metrics such as flood risk, air quality, and investment required. It uses a slider for return periods and shows detailed impact panels.',
    },
    es: {
      initialPrompt:
        'Bienvenido a la página de Costos 5D. Aquí puedes simular los impactos climáticos y ambientales en tu proyecto. Compara diferentes escenarios y analiza las métricas de impacto. Pídeme que te explique qué significa un escenario o cómo se calculan las métricas.',
      pageContext:
        'El usuario se encuentra en la página de Costos y Simulación 5D. Esta página permite a los usuarios comparar diferentes escenarios de intervención (como techos verdes, pavimento permeable) y ver su impacto en métricas como el riesgo de inundación, la calidad del aire y la inversión requerida. Utiliza un control deslizante para los períodos de retorno y muestra paneles de impacto detallados.',
    },
  },
  '/ai-lab': {
    en: {
      initialPrompt:
        'Welcome to the AI Lab. Here you can configure the AI assistant for your project. Select your budget, project priority, and infrastructure preferences.',
      pageContext:
        'The user is on the AI Lab page, a stepper component to configure the AI assistant. The user can select budget, project priority, and infrastructure preferences.',
    },
    es: {
      initialPrompt:
        'Bienvenido al Laboratorio de IA. Aquí puedes configurar el asistente de IA para tu proyecto. Selecciona tu presupuesto, prioridad de proyecto y preferencias de infraestructura.',
      pageContext:
        'El usuario se encuentra en la página de Laboratorio de IA, un componente de pasos para configurar el asistente de IA. El usuario puede seleccionar el presupuesto, la prioridad del proyecto y las preferencias de infraestructura.',
    },
  },
  // Add other pages here...
};

export type aiPromptsType = typeof aiPrompts;
