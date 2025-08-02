/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Fade from 'react-awesome-reveal';

export default function Advantage({ data }) {
  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Why Us</h1>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            Why you should choose us to handle your project.
          </p>
        </Fade>

        <div className="flex flex-col sm:flex-row">
          {[0, 1].map((columnIndex) => (
            <Fade key={columnIndex} triggerOnce cascade damping={0.2}>
              <div className="flex flex-col">
                {data[columnIndex].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-300 hover:scale-105"
                  >
                    <img src={item.imageUrl} alt={item.title} className="w-1/3" />
                    <div className="flex flex-col pl-5">
                      <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                      <p className="font-light text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
