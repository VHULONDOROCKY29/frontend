import React, { useState } from 'react';
import { motion } from 'framer-motion';

const servicesGrouped = [
  {
    id: 1,
    title: 'Development Services',
    services: [
      {
        id: '1a',
        title: 'Custom Software Development',
        description: 'Tailored software solutions for your business.',
        details: 'We analyze your business needs and develop customized software applications that drive efficiency and scalability.',
      },
      {
        id: '1b',
        title: 'Mobile & Web Application Development',
        description: 'Cross-platform apps for all devices.',
        details: 'Build engaging, responsive mobile and web apps that deliver a seamless experience across all platforms.',
      },
      {
        id: '1c',
        title: 'Website Design and Development',
        description: 'Modern, responsive websites.',
        details: 'Design and build fast, user-friendly websites with SEO optimization and modern design standards.',
      },
      {
        id: '1d',
        title: 'E-commerce Platforms',
        description: 'Robust online stores for your business.',
        details: 'Develop and deploy scalable e-commerce platforms with secure payment integration and inventory management.',
      },
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'Business & Compliance Solutions',
    services: [
      {
        id: '2a',
        title: 'System Integrations',
        description: 'Seamless integration of your IT systems.',
        details: 'Integrate legacy systems, cloud platforms, and APIs to create a unified IT environment.',
      },
      {
        id: '2b',
        title: 'Database Design & Management',
        description: 'Efficient and secure database solutions.',
        details: 'Design, optimize, and maintain secure databases that scale with your business.',
      },
      {
        id: '2c',
        title: 'Cybersecurity Assessments',
        description: 'Protect your business with our security audits.',
        details: 'We perform in-depth assessments and offer solutions to safeguard your digital assets.',
      },
      {
        id: '2d',
        title: 'POPIA Compliance',
        description: 'Ensure compliance with data protection laws.',
        details: 'Guidance and tools to help your business comply with South African data protection regulations.',
      },
    ],
    color: 'from-green-500 to-teal-600',
  },
  {
    id: 3,
    title: 'Consulting & Training',
    services: [
      {
        id: '3a',
        title: 'Tech Consulting',
        description: 'Strategic consulting for SMEs and NGOs.',
        details: 'Align your technology with your business goals through expert consulting and roadmap planning.',
      },
      {
        id: '3b',
        title: 'Technical Skills Training',
        description: 'Upskill your team with our training programs.',
        details: 'We provide hands-on training sessions tailored to your tech stack and workforce needs.',
      },
    ],
    color: 'from-purple-500 to-pink-600',
  },
];

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  const toggleDetails = (id) => {
    setExpandedService((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-10 px-4 md:px-10 font-sans">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 tracking-tight">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesGrouped.map((group) => (
          <motion.div
            key={group.id}
            className={`bg-gradient-to-br ${group.color} text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group transition-all`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:underline underline-offset-4">
              {group.title}
            </h3>
            <div className="space-y-4 max-h-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out">
              {group.services.map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-white bg-opacity-10 p-3 rounded-md transition"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-lg">{service.title}</h4>
                  <p className="text-sm text-white/90">{service.description}</p>
                  <button
                    onClick={() => toggleDetails(service.id)}
                    className="mt-2 text-sm underline underline-offset-4 hover:text-yellow-300 transition"
                  >
                    {expandedService === service.id ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedService === service.id && (
                    <div className="mt-2 bg-white bg-opacity-20 p-2 rounded text-sm">
                      <p>{service.details}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
