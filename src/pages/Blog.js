import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Cloud Computing 2025",
      excerpt: "Cloud tech reshapes IT with scalability.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Apr 15, 2025",
      category: "Cloud",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Cybersecurity Trends",
      excerpt: "Strategies to counter cyber threats.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Apr 10, 2025",
      category: "Security",
      readTime: "7 min",
    },
    {
      id: 3,
      title: "AI-Powered IT",
      excerpt: "AI revolutionizes IT consulting.",
      image: "https://images.unsplash.com/photo-1516321310764-908d0c4a7b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Apr 5, 2025",
      category: "AI",
      readTime: "6 min",
    },
  ];

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setMessage("Please enter your email.");
      setIsSuccess(false);
    } else if (!emailRegex.test(email)) {
      setMessage("Invalid email format.");
      setIsSuccess(false);
    } else {
      setMessage("Subscribing...");
      setTimeout(() => {
        setMessage("Successfully subscribed!");
        setIsSuccess(true);
        setEmail("");
      }, 1000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
    }),
    hover: {
      rotate: 1,
      scale: 1.03,
      boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-sans">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-400 text-white py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
            animate={{
              rotate: [0, -2, 3, -4, 2, 0],
              x: [0, 1, -1, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            TechTrend Insights
          </motion.h2>
          <motion.p
            className="text-base md:text-lg mb-6 max-w-md mx-auto"
            animate={{
              rotate: [0, 1, -2, 1, -1, 0],
              x: [-1, 1, -1, 2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Stay ahead of the curve with expert takes on emerging tech, cybersecurity, and digital strategy.
          </motion.p>
          <motion.a
            href="#posts"
            className="inline-block bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold shadow-sm hover:bg-indigo-100 transition-all"
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            whileHover={{ scale: 1.15 }}
          >
            🚀 Dive In
          </motion.a>
        </div>
      </motion.section>

      {/* Featured Video Section */}
      <motion.section
        className="py-8 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Featured Insight</h3>
          <motion.div
            className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-sm p-3"
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="IT Consulting Insights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center mt-3 text-gray-600 text-sm">
              IT strategies for 2025 webinar.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section
        id="posts"
        className="py-8 bg-gray-100"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3 relative">
                  <motion.span
                    className="absolute top-2 right-2 bg-indigo-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {post.category}
                  </motion.span>
                  <div className="flex flex-wrap gap-2 mb-2 text-xs text-white">
                    <span className="bg-indigo-400 px-2 py-0.5 rounded-full">#TechTrends</span>
                    <span className="bg-purple-400 px-2 py-0.5 rounded-full">#{post.category}</span>
                  </div>
                  <h4 className="text-base font-semibold mb-1 text-gray-800">{post.title}</h4>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs">
                    <div className="text-gray-500">
                      <span>{post.date}</span> • <span>{post.readTime}</span>
                    </div>
                    <motion.a
                      href="#"
                      className="text-indigo-600 font-medium hover:text-indigo-800 transition"
                      whileHover={{ x: 5 }}
                    >
                      Read
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stay Updated Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            className="text-2xl font-bold mb-3"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Join Our Newsletter
          </motion.h3>
          <motion.p
            className="text-sm mb-4 max-w-sm mx-auto"
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Get IT insights delivered to your inbox.
          </motion.p>
          <motion.div
            className="max-w-sm mx-auto flex"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-200"
            />
            <motion.button
              onClick={handleSubscribe}
              className="bg-indigo-400 px-5 py-2 rounded-r-md font-semibold text-sm hover:bg-indigo-500 transition-all"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              whileHover={{ scale: 1.15 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
          {message && (
            <p className={`mt-3 text-sm ${isSuccess ? "text-green-300" : "text-red-200"}`}>
              {message}
            </p>
          )}
        </div>
      </motion.section>
    </div>
  );
}
