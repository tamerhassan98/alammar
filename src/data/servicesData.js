import { translations } from '../translations';

export const getServicesData = (language) => {
  const t = translations[language];
  
  return [
    {
      id: "service1",
      title: t.service1Title || "Building Maintenance",
      description: t.service1Desc || "Comprehensive maintenance services to keep your building in perfect condition, including preventive and corrective maintenance.",
      imageUrl: "https://source.unsplash.com/random/100x100/?maintenance",
      features: [
        "Preventive maintenance planning",
        "Corrective maintenance",
        "Equipment servicing and repair",
        "Building systems maintenance",
        "Emergency response services"
      ]
    },
    {
      id: "service2",
      title: t.service2Title || "Security Management",
      description: t.service2Desc || "Round-the-clock security services to ensure the safety of your premises, assets, and people.",
      imageUrl: "https://source.unsplash.com/random/100x100/?security",
      features: [
        "Access control systems",
        "Surveillance systems",
        "Security personnel",
        "Security audits and assessments",
        "Emergency and evacuation planning"
      ]
    },
    {
      id: "service3",
      title: t.service3Title || "Cleaning Services",
      description: t.service3Desc || "Professional cleaning solutions for all types of facilities, ensuring a clean and healthy environment.",
      imageUrl: "https://source.unsplash.com/random/100x100/?cleaning",
      features: [
        "Regular janitorial services",
        "Deep cleaning",
        "Specialized cleaning",
        "Waste management",
        "Green cleaning practices"
      ]
    },
    {
      id: "service4",
      title: t.service4Title || "HVAC Systems",
      description: t.service4Desc || "Installation, maintenance, and repair of heating, ventilation, and air conditioning systems for optimal comfort.",
      imageUrl: "https://source.unsplash.com/random/100x100/?hvac",
      features: [
        "System installation",
        "Preventive maintenance",
        "Repair services",
        "Energy efficiency optimization",
        "Indoor air quality improvements"
      ]
    },
    {
      id: "service5",
      title: t.service5Title || "Landscaping",
      description: t.service5Desc || "Professional landscaping services to enhance the aesthetic appeal of your property and maintain outdoor areas.",
      imageUrl: "https://source.unsplash.com/random/100x100/?landscaping",
      features: [
        "Landscape design",
        "Lawn maintenance",
        "Tree and shrub care",
        "Irrigation systems",
        "Seasonal plantings"
      ]
    },
    {
      id: "service6",
      title: t.service6Title || "Energy Management",
      description: t.service6Desc || "Smart energy solutions to reduce consumption, lower costs, and promote sustainability.",
      imageUrl: "https://source.unsplash.com/random/100x100/?energy",
      features: [
        "Energy audits",
        "Consumption monitoring",
        "Efficiency improvements",
        "Renewable energy integration",
        "Cost reduction strategies"
      ]
    }
  ];
};

export const servicesData = getServicesData('en'); 