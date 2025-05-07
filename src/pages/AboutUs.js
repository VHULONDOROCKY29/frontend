import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io5'; // Updated Twitter icon import
import { motion } from 'framer-motion';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Dr. Elena Martinez',
      role: 'Founder & CEO',
      image: 'https://img.freepik.com/premium-photo/ceo-businessman-portrait-white-background_693425-12050.jpg',
      quote: 'Innovating for a sustainable future.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'James Chen',
      role: 'CTO',
      image: 'https://th.bing.com/th/id/R.75643a8dff7e0fb2c6c71175cf48f8ec?rik=1HrnmZUFKVqnXg&pid=ImgRaw&r=0',
      quote: 'Technology that transforms lives.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Sarah Williams',
      role: 'COO',
      image: 'https://as2.ftcdn.net/v2/jpg/03/12/40/73/1000_F_312407327_ZAapGOEGjEvsMCyNGm9Hom99XkeJOeOn.jpg',
      quote: 'Building bridges through innovation.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    }
  ];

  const coreValues = [
    { icon: '🌟', title: 'Excellence', description: 'Delivering unparalleled quality in every solution.' },
    { icon: '🤝', title: 'Collaboration', description: 'Partnering for shared success and growth.' },
    { icon: '💡', title: 'Innovation', description: 'Pushing boundaries with creative solutions.' },
    { icon: '🌍', title: 'Sustainability', description: 'Building for a better, greener tomorrow.' }
  ];

  return (
    <div className="bg-gray-100">
      {/* Preload Leadership Images */}
      <link
        rel="preload"
        as="image"
        href={teamMembers[0].image}
        fetchpriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={teamMembers[1].image}
        fetchpriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={teamMembers[2].image}
        fetchpriority="high"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-200 to-gray-300 text-gray-800 py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Horizon Innovations
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're a team of visionaries dedicated to transforming businesses through cutting-edge technology and sustainable solutions.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-r from-blue-300 to-gray-200 text-gray-800 p-8 rounded-xl shadow-lg"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg">
                To empower organizations with innovative, sustainable, and scalable technology solutions that drive meaningful impact.
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-r from-teal-200 to-gray-200 text-gray-800 p-8 rounded-xl shadow-lg"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg">
                To lead the global technology landscape by fostering innovation, sustainability, and collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Meet Our Leadership
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  loading="eager"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-400 font-medium">{member.role}</p>
                <p className="text-gray-600 italic mt-2">"{member.quote}"</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-400">
                    <FaLinkedin size={24} />
                  </a>
                  <a href={member.social.twitter} className="text-gray-500 hover:text-blue-400">
                    <IoLogoTwitter size={24} /> {/* Updated Twitter Icon */}
                  </a>
                  <a href={member.social.instagram} className="text-gray-500 hover:text-blue-400">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-300 text-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join Our Journey
          </motion.h2>
          <motion.p
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Partner with us to unlock the full potential of technology and drive your business forward.
          </motion.p>
          <motion.a
            href="/client-portal"
            className="inline-block bg-white text-blue-400 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
}
