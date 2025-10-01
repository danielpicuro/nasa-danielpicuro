import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faRocket, faMap, faUserAstronaut, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * Componente Sidebar: Barra lateral para navegación en secciones específicas
 * Utilizado principalmente en la sección Get Started para mostrar documentación
 */
interface SidebarProps {
  activeSection?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection = 'introduction' }) => {
  const sections = [
    { id: 'introduction', label: 'Introduction', icon: faBook },
    { id: 'getting-started', label: 'Getting Started', icon: faRocket },
    { id: 'locations', label: 'Locations', icon: faMap },
    { id: 'team', label: 'Meet the Team', icon: faUserAstronaut },
    { id: 'faq', label: 'FAQ', icon: faQuestionCircle },
  ];

  return (
    <div className="bg-gray-100 w-full md:w-64 p-4 h-full">
      <h3 className="text-lg font-bold mb-6 text-gray-800">Documentation</h3>
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className={`flex items-center p-3 rounded-md transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FontAwesomeIcon icon={section.icon} className="h-5 w-5 mr-3" />
                <span>{section.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;