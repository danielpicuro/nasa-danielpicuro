export const projects = {
  headerTitle: 'SELECT PROJECT',
  headerSubtitle: 'Choose a city and project to begin',
  projectCards: [
    {
      id: 'planning',
      title: 'URBAN PLANNING',
      location: 'Lima, Peru',
      population: '10.5M',
      image: '/images/map.jpg',
    },
    {
      id: 'coastal',
      title: 'COASTAL RESILIENCE',
      location: 'Lima, Peru',
      population: '9.7M',
      image: '/images/map.jpg',
    },
    {
      id: 'center',
      title: 'LIMA CITY',
      location: 'Lima, Peru',
      population: '9.7M',
      image: '/images/map.jpg',
      isCenter: true,
    },
    {
      id: 'new',
      isNewProject: true,
    },
    {
      id: 'hospital',
      title: 'HOSPITAL VITARTE',
      location: 'Lima, Peru',
      population: '2M',
      image: '/images/map.jpg',
    },
    {
      id: 'infrastructure',
      title: 'INFRASTRUCTURE',
      location: 'Lima, Peru',
      population: '8.2M',
      image: '/images/map.jpg',
    },
  ],
  newProjectCard: {
    title: 'NEW PROJECT',
    description:
      'Need to set up a new digital twin? Contact our team to configure a new city project with SuperMap integration, 5D cost analysis, and AI-powered insights.',
    buttonText: 'Request New Project',
  },
};
