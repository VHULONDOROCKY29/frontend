import React, { useState } from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    if (!form.email.trim()) newErrors.email = 'Please enter your email.';
    if (!form.message.trim()) newErrors.message = 'Please enter a message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    try {
      setStatus('Sending...');
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setErrors({});
        setStatus('✅ Your message has been sent successfully!');
      } else {
        setStatus(`❌ Failed to send: ${data.error || 'Unknown error'}`);
      }
    } catch (err) {
      setStatus(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions or ready to collaborate? Reach out, and we'll get back to you promptly.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Drop Us a Line</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full p-2 rounded-md border ${
                      errors.name ? 'border-red-400' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-green-400`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full p-2 rounded-md border ${
                      errors.email ? 'border-red-400' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-green-400`}
                    placeholder="Your Email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full p-2 rounded-md border ${
                      errors.message ? 'border-red-400' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-green-400`}
                    placeholder="Your Message"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-green-400 text-white font-medium py-2 rounded-md hover:bg-green-500 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message
                </motion.button>
                {status && (
                  <p
                    className={`text-sm mt-2 ${
                      status.startsWith('✅') ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reach Out</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="text-green-400 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@isumiconsulting.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-green-400 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(+27) 67 011 6275</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-green-400 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Business Avenue, Suite 456, Tech City, South Africa
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Connect with Us</h3>
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-600 hover:text-green-400">
                      <FaLinkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-400">
                      <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-400">
                      <FaInstagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
