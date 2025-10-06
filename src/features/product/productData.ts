/**
 * Datos de ejemplo para productos
 * En un entorno real, estos datos vendrían de una API o base de datos
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  specifications: Record<string, string>;
  relatedProducts: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'satellite-communication-system',
    name: 'Satellite Communication System',
    description: 'Advanced satellite communication system for remote operations',
    longDescription:
      'Our state-of-the-art satellite communication system provides reliable connectivity in the most remote locations on Earth and beyond. Designed for mission-critical operations, this system offers high-bandwidth data transfer, encrypted communications, and resilience against environmental challenges. Used by research teams, military operations, and space missions worldwide.',
    price: 125000,
    image: '/images/product-satellite.jpg',
    category: 'Communication',
    features: [
      'Global coverage with low latency',
      'Military-grade encryption',
      'Solar-powered with battery backup',
      'Compact and lightweight design',
      'Compatible with all major communication protocols',
    ],
    specifications: {
      Bandwidth: '500 Mbps',
      Weight: '12.5 kg',
      Dimensions: '45 x 35 x 15 cm',
      'Power Consumption': '35W',
      'Operating Temperature': '-40°C to +85°C',
      Encryption: 'AES-256',
    },
    relatedProducts: ['3', '5'],
  },
  {
    id: '2',
    slug: 'mars-habitat-module',
    name: 'Mars Habitat Module',
    description: 'Self-sustaining habitat designed for Mars surface operations',
    longDescription:
      'The Mars Habitat Module represents the pinnacle of extraterrestrial living technology. This self-contained environment supports up to six astronauts with integrated life support systems, radiation shielding, and psychological comfort features. The module includes hydroponics for food production, water recycling, and can be connected to other modules to form larger habitation complexes.',
    price: 750000,
    image: '/images/product-habitat.jpg',
    category: 'Habitation',
    features: [
      'Self-sustaining life support system',
      'Radiation and micrometeorite shielding',
      'Expandable architecture',
      'Integrated hydroponics bay',
      'Psychological well-being design elements',
      'Emergency survival systems',
    ],
    specifications: {
      Capacity: '6 astronauts',
      'Habitable Volume': '110 cubic meters',
      'Power Generation': '25 kW solar array',
      'Water Recycling': '98% efficiency',
      'Oxygen Generation': '6 person capacity',
      'Expected Lifespan': '15 years',
    },
    relatedProducts: ['4', '6'],
  },
  {
    id: '3',
    slug: 'lunar-rover-explorer',
    name: 'Lunar Rover Explorer',
    description: 'All-terrain exploration vehicle designed for lunar surface',
    longDescription:
      'The Lunar Rover Explorer is an advanced mobility platform designed specifically for the challenging terrain of the lunar surface. With its innovative six-wheel design and articulated suspension, it can navigate craters, slopes, and regolith with unprecedented stability. Equipped with multiple scientific instruments, sample collection tools, and high-definition cameras, this rover extends human exploration capabilities while providing valuable scientific data.',
    price: 420000,
    image: '/images/product-rover.jpg',
    category: 'Exploration',
    features: [
      'Six-wheel independent drive system',
      'Articulated suspension for extreme terrain',
      'Sample collection and analysis suite',
      'High-definition stereoscopic cameras',
      'Dust-resistant sealed components',
      'Solar panels with battery storage',
    ],
    specifications: {
      Speed: '12 km/h',
      Range: '70 km per charge',
      Weight: '450 kg',
      'Payload Capacity': '150 kg',
      'Operating Temperature': '-170°C to +120°C',
      'Battery Life': '8 hours active use',
    },
    relatedProducts: ['1', '5'],
  },
  {
    id: '4',
    slug: 'orbital-laboratory-module',
    name: 'Orbital Laboratory Module',
    description: 'Specialized research facility for microgravity experiments',
    longDescription:
      'The Orbital Laboratory Module provides researchers with a state-of-the-art facility for conducting experiments in the unique environment of microgravity. Designed to dock with existing space stations or operate independently, this module features customizable research bays, precise environmental controls, and automated systems for experiment monitoring. From biological research to materials science, this platform accelerates scientific discovery beyond Eart&rsquo; boundaries.',
    price: 620000,
    image: '/images/product-lab.jpg',
    category: 'Research',
    features: [
      'Customizable experiment bays',
      'Precise environmental control',
      'Remote operation capabilities',
      'Automated sample processing',
      'Data downlink in real-time',
      'Compatible with ISS and commercial stations',
    ],
    specifications: {
      'Research Volume': '45 cubic meters',
      'Power Available': '15 kW',
      'Cooling Capacity': '8 kW',
      'Data Storage': '20 petabytes',
      'Downlink Speed': '1.2 Gbps',
      'Experiment Racks': '12 standard units',
    },
    relatedProducts: ['2', '6'],
  },
  {
    id: '5',
    slug: 'space-suit-advanced',
    name: 'Advanced EVA Space Suit',
    description: 'Next-generation space suit for extended extravehicular activities',
    longDescription:
      'Our Advanced EVA Space Suit represents the culmination of decades of space suit design and innovation. Engineered for comfort during extended spacewalks, this suit features improved mobility joints, enhanced life support systems, and integrated communications. The modular design allows for quick repairs and customization based on mission parameters, while the advanced materials provide superior protection against radiation and micrometeorites.',
    price: 12000000,
    image: '/images/product-spacesuit.jpg',
    category: 'Personal Equipment',
    features: [
      'Enhanced mobility joint system',
      'Extended life support (12 hours)',
      'Integrated augmented reality display',
      'Modular component design',
      'Advanced thermal regulation',
      'Radiation monitoring and protection',
    ],
    specifications: {
      Weight: '52 kg (Earth gravity)',
      'Operating Pressure': '4.3 psi',
      'Oxygen Supply': '12 hours',
      'Battery Life': '14 hours',
      'Temperature Range': '-157°C to +121°C',
      Communication: 'Integrated multi-band',
    },
    relatedProducts: ['1', '3'],
  },
  {
    id: '6',
    slug: 'asteroid-mining-equipment',
    name: 'Asteroid Mining Equipment',
    description: 'Specialized tools and machinery for resource extraction from asteroids',
    longDescription:
      'Our Asteroid Mining Equipment package provides everything needed to establish resource extraction operations on near-Earth asteroids. This comprehensive system includes autonomous drilling units, material processing facilities, and resource storage containers. The equipment is designed to operate in microgravity and vacuum conditions, with remote operation capabilities and self-diagnostic systems to minimize maintenance requirements in challenging space environments.',
    price: 870000,
    image: '/images/product-mining.jpg',
    category: 'Resource Extraction',
    features: [
      'Autonomous drilling and extraction',
      'In-situ resource processing',
      'Microgravity-optimized operations',
      'Remote control capabilities',
      'Self-diagnostic and repair systems',
      'Modular expansion options',
    ],
    specifications: {
      'Drilling Depth': 'Up to 20 meters',
      'Processing Capacity': '500 kg per day',
      'Power Requirements': '35 kW',
      'Communication Range': 'Up to 0.5 AU',
      'Operational Lifetime': '8 years',
      'Autonomous Operation': 'Up to 6 months',
    },
    relatedProducts: ['2', '4'],
  },
];

/**
 * Función para obtener un producto por su slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

/**
 * Función para obtener todos los slugs de productos
 */
export function getAllProductSlugs(): string[] {
  return products.map(product => product.slug);
}

/**
 * Función para obtener productos relacionados
 */
export function getRelatedProducts(productIds: string[]): Product[] {
  return products.filter(product => productIds.includes(product.id));
}
