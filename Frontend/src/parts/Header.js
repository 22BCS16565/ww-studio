/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import { Fade } from 'react-awesome-reveal';
import { Transition } from '@headlessui/react';

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'elements/Button';
import BrandIcon from 'parts/BrandIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/team', label: 'Team' },
    { href: '/project', label: 'Project' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 lg:px-0">
        <BrandIcon />

        {/* Hamburger Icon */}
        <button
          className="lg:hidden focus:outline-none text-theme-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
 <ul className="hidden lg:flex items-center space-x-4 text-theme-blue tracking-wide">
  {navLinks.map((link) => (
    <li key={link.href}>
      <Button
        className={`font-medium text-lg px-5 py-2 rounded-full transition-all duration-300 hover:bg-light-theme-purple hover:text-theme-purple ${
          path === link.href ? 'bg-light-theme-purple text-theme-purple' : ''
        }`}
        type="link"
        href={link.href}
      >
        {link.label}
      </Button>
    </li>
  ))}
  <li>
    <Button
      className="font-medium text-lg px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition-all duration-300"
      type="link"
      href="/discuss-project"
    >
      Discuss Project
    </Button>
  </li>
</ul>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col bg-white text-theme-blue tracking-wide border-t border-gray-200 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Button
                className={`font-medium px-3 block w-full text-left ${
                  path === link.href ? 'active-link' : ''
                }`}
                type="link"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Button>
            </li>
          ))}
          <li>
            <Button
              className="w-full px-4 py-2 font-bold bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition"
              type="link"
              href="/discuss-project"
              onClick={() => setIsMenuOpen(false)}
            >
              Discuss Project
            </Button>
          </li>
        </ul>
      )}
    </header>
  );
}
