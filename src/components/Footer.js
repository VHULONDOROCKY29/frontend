import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Isumi Consulting</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Transforming digital solutions to accelerate your business growth in an ever-evolving world. At Isumi Consulting, we deliver innovative and scalable IT services designed to meet the unique needs of our clients.
            </p>
            <p className="text-sm">
              <span className="font-semibold">Address:</span> 123 Business Avenue, Suite 456, Tech City, South Africa <br />
              <span className="font-semibold">Email:</span> <a href="mailto:info@isumiconsulting.com" className="hover:text-blue-400">info@isumiconsulting.com</a><br />
              <span className="font-semibold">Phone:</span> <a href="tel:+1234567890" className="hover:text-blue-400">(+27) 67 011 6275</a>
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="/clientportal" className="hover:text-blue-400 transition-colors">Client Portal</a></li>
              <li><a href="/internship" className="hover:text-blue-400 transition-colors">Internships</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Stay Connected</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter and stay up-to-date with the latest insights, offers, and updates from Isumi Consulting.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full text-gray-900 rounded-l-md focus:outline-none"
                aria-label="Email for newsletter"
              />
              <button
                className="bg-blue-600 p-3 rounded-r-md hover:bg-blue-700 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-4">
              <a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-2xl hover:text-green-500 transition-colors"></i>
              </a>
              <a
                href="https://www.facebook.com/login"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-2xl hover:text-blue-600 transition-colors"></i>
              </a>
              <a
                href="https://twitter.com/IsumiConsulting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-2xl hover:text-blue-400 transition-colors"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">© 2025 Isumi Consulting. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
