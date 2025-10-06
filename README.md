# With Trae - NASA Urban Intelligence Platform

With Trae es una plataforma de inteligencia urbana desarrollada con Next.js que utiliza datos de la NASA y tecnologías de IA para redefinir el urbanismo. La plataforma combina análisis espacial, gemelos digitales y herramientas de planificación urbana para crear ciudades más inteligentes y sostenibles.

## Resumen del Proyecto

With Trae fue desarrollado con la visión de transformar la planificación urbana mediante el uso de datos satelitales de la NASA y tecnologías de inteligencia artificial. La plataforma ofrece:

- **Análisis de datos espaciales**: Integración de datos satelitales de la NASA para análisis urbano
- **Gemelos digitales 3D**: Visualización y modelado 3D de ciudades y proyectos urbanos
- **Herramientas de planificación**: Módulos especializados para planificación urbana, análisis de recursos y gestión de infraestructura
- **IA urbana**: Asistente de IA para recomendaciones y análisis automatizado
- **Gestión de proyectos**: Sistema completo de gestión de proyectos urbanos con métricas 5D, 6D y 7D

## Características Principales

### 🏙️ Dashboard Principal

- **Overview**: Vista general de proyectos con métricas clave (CAPEX, población expuesta, riesgo de inundación)
- **Data**: Visualización de datos espaciales con controles de capas, vista día/noche y herramientas de análisis
- **Planning**: Herramientas de planificación urbana con mapas interactivos
- **Resources**: Análisis de recursos urbanos con visualizaciones 3D
- **Analysis**: Módulo de análisis avanzado con métricas de sostenibilidad
- **Reports**: Generación de reportes y documentación
- **AI Lab**: Laboratorio de inteligencia artificial para análisis automatizado

### 🛠️ Herramientas Especializadas

- **3D Twin**: Gemelo digital 3D con herramientas de edición y visualización
- **5D Management**: Gestión de costos y presupuestos (5D BIM)
- **6D Sustainability**: Análisis de sostenibilidad y impacto ambiental
- **7D Operations**: Gestión de operaciones y mantenimiento
- **Live Sync**: Sincronización en tiempo real con herramientas BIM

### 🔐 Sistema de Acceso

- **Login simplificado**: Formulario de acceso que recopila información del usuario (email, rol, presupuesto, prioridades)
- **Integración con Supabase**: Almacenamiento de datos de acceso para seguimiento de usuarios
- **Sin registro**: Acceso directo sin proceso de registro o confirmación

## Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Framer Motion
- **UI Components**: Radix UI, Lucide React
- **3D Visualization**: GSAP, WebGL
- **Database**: Supabase
- **AI Integration**: Google GenAI
- **Maps**: Google Maps API
- **Development**: ESLint, Prettier, Husky

## Getting Started

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

1. Clona el repositorio:

```bash
git clone <repository-url>
cd with-trae-nasa
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Configura las variables de entorno:

4. Ejecuta el servidor de desarrollo:

```bash
pnpm dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── (auth)/            # Rutas de autenticación
│   │   └── login/         # Página de login
│   ├── (dashboard)/       # Dashboard principal
│   │   ├── data/          # Visualización de datos
│   │   ├── planning/      # Herramientas de planificación
│   │   ├── resources/     # Análisis de recursos
│   │   ├── analysis/      # Análisis avanzado
│   │   ├── reports/       # Reportes
│   │   ├── ai-lab/        # Laboratorio de IA
│   │   ├── 3d-twin/       # Gemelo digital 3D
│   │   ├── 5D/            # Gestión 5D
│   │   ├── 6D/            # Sostenibilidad 6D
│   │   ├── 7D/            # Operaciones 7D
│   │   └── live-sync/     # Sincronización en vivo
│   └── (home)/            # Página de inicio
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI base
│   ├── landing/          # Componentes de landing
│   ├── overview/         # Componentes de overview
│   ├── planning/         # Componentes de planificación
│   └── shared/           # Componentes compartidos
├── features/             # Características específicas
│   ├── map/              # Funcionalidad de mapas
│   └── product/          # Datos de productos
├── hooks/                # Custom hooks
├── lib/                  # Utilidades y configuraciones
└── types/                # Definiciones de tipos TypeScript
```

## Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Servidor de desarrollo con Turbopack
pnpm build            # Build de producción con Turbopack
pnpm start            # Servidor de producción

# Calidad de código
pnpm lint             # Ejecutar ESLint
pnpm format           # Formatear código con Prettier
pnpm check-format     # Verificar formato

# Git hooks
pnpm prepare          # Configurar Husky
```

**With Trae** - Transformando el urbanismo con datos de la NASA e inteligencia artificial.
