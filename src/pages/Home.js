import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const cards = [
    {
      title: "Our Mission",
      desc: "To empower organizations with smart digital tools that simplify complexity, amplify growth, and drive positive impact.",
      colorClass: "bg-blue-100 text-blue-900",
    },
    {
      title: "Our Vision",
      desc: "To be a trusted innovation partner known for transforming ideas into sustainable digital solutions across Africa and beyond.",
      colorClass: "bg-purple-100 text-purple-900",
    },
    {
      title: "Our Goals",
      desc: "Deliver high-quality, human-centered solutions; ensure security and scalability; and foster long-term client success.",
      colorClass: "bg-green-100 text-green-900",
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Tech Innovators",
      feedback: "Isumi Consulting has been an invaluable partner, helping us streamline our IT operations and scale effortlessly. Their expertise is unmatched!",
      image: "https://th.bing.com/th/id/OIP.qdCFDNqU9ebHWeECQZzHEgHaE7?cb=iwc1&rs=1&pid=ImgDetMain"
    },
    {
      name: "Jane Smith",
      position: "CTO, GreenTech Solutions",
      feedback: "Working with Isumi Consulting was a game-changer. They transformed our digital strategy, ensuring long-term success with scalable solutions.",
      image: "https://th.bing.com/th/id/OIP.Uh5TJQNmyz7T7AXPIvkHtgHaE7?cb=iwc1&rs=1&pid=ImgDetMain"
    },
    {
      name: "James Lee",
      position: "Head of IT, Global Finance Inc.",
      feedback: "We rely on Isumi Consulting for all our IT needs. Their team consistently delivers high-quality, secure, and scalable solutions on time.",
      image: "https://th.bing.com/th/id/OIP.DxTtmTaHy9T1rJYgeI9V-AHaE7?cb=iwc1&rs=1&pid=ImgDetMain"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-content home-bg">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-24 px-6 flex items-center justify-center overflow-hidden rounded-2xl shadow-lg mx-4 mt-6">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0 rounded-2xl"></div>
        <div className="relative z-10 max-w-4xl text-center animate-fadeInUp space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-blue-400">Your</span> Digital Growth <span className="text-blue-400">Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            We craft smart, scalable, and secure solutions tailored for businesses, NGOs, and enterprises.
            <br />
            At <strong>Isumi Consulting</strong>, we transform complexity into clarity—so you can focus on impact.
          </p>
          <Link
            to="/client-portal"
            className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg transition-all duration-300 ease-in-out"
          >
            🚀 Let’s Work Together
          </Link>
        </div>
      </section>

      {/* Mission / Vision / Goals Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {cards.map((card, index) => {
          const isVisible = hoveredIndex === null || hoveredIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`transition-opacity duration-300 ease-in-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} p-6 rounded-2xl shadow-md cursor-pointer ${card.colorClass}`}
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-base">{card.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Client Feedback Section */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-600">
          At Isumi Consulting, we help businesses unlock their potential with tailored IT solutions. Here's what our clients say:
        </p>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex justify-center items-center space-x-6">
              <img
                src={testimonials[currentTestimonialIndex].image}
                alt={testimonials[currentTestimonialIndex].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
              <div className="space-y-4">
                <p className="text-xl font-semibold">{testimonials[currentTestimonialIndex].name}</p>
                <p className="text-md text-gray-500">{testimonials[currentTestimonialIndex].position}</p>
                <p className="text-lg italic text-gray-700">{testimonials[currentTestimonialIndex].feedback}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-16 px-6 text-center rounded-lg shadow-lg mt-12">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Something Amazing?</h2>
        <p className="mb-6 text-lg">Let’s build a solution that propels your mission forward.</p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-xl shadow-lg hover:bg-slate-100 transition-all"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default Home;
