/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable max-len */

import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

export default function Hero() {
  return (
    <section className="hero flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 xl:px-32 py-16">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl text-theme-blue font-bold leading-tight mb-6">
          Growing Your Business <br />
          Is Our Calling
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
        We provide highly skilled developers and designers who leverage the latest technologies to help scale your business swiftly, efficiently, and effectively.
        </p>

        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className="inline-flex items-center gap-3 px-10 py-4 bg-theme-purple text-white text-lg font-semibold rounded-full shadow-lg hover:bg-dark-theme-purple transition-all duration-300"
          >
            See Our Work
            <svg
              className="w-6 h-6 animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </Fade>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Fade direction="up" triggerOnce>
          <img
            src={BuildWebsite}
            alt="Build Website"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </Fade>
      </div>
    </section>
  );
}
