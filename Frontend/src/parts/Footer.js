/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">WWtech</h3>
            <p className="text-gray-400 text-base mb-4">
              We are a creative digital agency specializing in web and App development solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white text-xl"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white text-xl"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white text-xl"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white text-xl"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Mobile Applications</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
  <li>
    <Link to="/" className="text-gray-400 hover:underline">Home</Link>
  </li>
  <li>
    <Link to="/" className="text-gray-400 hover:underline">About</Link>
  </li>
  <li>
    <Link to="/project" className="text-gray-400 hover:underline">Portfolio</Link>
  </li>
  <li>
    <Link to="/team" className="text-gray-400 hover:underline">Contact</Link>
  </li>
</ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <p className="text-gray-400">Chandigarh,India</p>
            <p className="text-gray-400">9306110677</p>
            <p className="text-gray-400">kabircsecu@gmail.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center mt-10 border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 WWtech. All rights reserved. Made with{' '}
            <span className="text-red-500">❤️</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
