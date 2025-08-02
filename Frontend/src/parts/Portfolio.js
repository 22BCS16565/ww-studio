/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';

import Button from '../elements/Button';

export default function Portfolio({ data }) {
  return (
    <section className="container mx-auto flex flex-col items-center mt-20">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl font-extrabold text-theme-blue text-center mb-4">
          Our Selected Projects
        </h1>
      </Fade>

      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-500 text-center mb-12 max-w-2xl">
          We&apos;re ready to scale up your business with world-class execution.
        </p>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <Fade
            key={item.id}
            direction="up"
            triggerOnce
            delay={500 * item.id}
          >
            <Button type="link" href={`/project/${item.id}`}>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl transform transition duration-500 hover:scale-[1.05] bg-white">
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40 opacity-0 group-hover:opacity-100 transition duration-500 z-10 rounded-2xl" />

                <img
                  src={item.imageUrl}
                  alt="Portfolio"
                  className="w-full h-60 object-cover rounded-t-2xl"
                />

                <div className="p-5 relative z-20">
                  <h2 className="text-xl text-theme-blue font-semibold text-center mb-1">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 text-sm text-center">{item.type}</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20">
                  <svg
                    className="w-14 h-14 text-white bg-black bg-opacity-40 rounded-full p-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            </Button>
          </Fade>
        ))}
      </div>

      <Fade direction="up" triggerOnce>
        <Button
          href="/project"
          type="link"
          className="flex items-center justify-center mt-16 rounded-full border border-theme-purple text-theme-purple hover:bg-theme-purple hover:text-white transition-all duration-300 px-6 py-3 text-base sm:text-lg"
        >
          See More
          <svg
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </Fade>
    </section>
  );
}
