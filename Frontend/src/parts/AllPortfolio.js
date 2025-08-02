/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {
  Tab, Tabs, TabList, TabPanel, 
} from 'react-tabs';
import Button from 'elements/Button';

export default function AllPortfolio({ data }) {
  const mobile = data.filter((item) => item.type === 'Mobile Apps');
  const website = data.filter((item) => item.type === 'Website');

  const renderCards = (items) => items.map((item, index) => (
      <Button type="link" href={`/project/${item.id}`} key={index}>
        <div className="group rounded-2xl shadow-xl w-auto m-3 transform transition duration-300 hover:scale-105 portofolio-card">
          <div className="relative">
            <img src={item.imageUrl} alt={item.title} className="rounded-t-2xl w-full h-auto z-0" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition bg-black flex justify-center items-center rounded-2xl">
              <svg
                className="w-16 h-16 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
            <p className="font-light text-gray-500 text-center">{item.type}</p>
          </div>
        </div>
      </Button>
  ));

  return (
    <Fade triggerOnce>
      <section className="container mx-auto px-4">
        <Tabs>
          <TabList>
            <div className="flex flex-wrap mb-5 gap-3">
              {['Mobile', 'Website', 'UI/UX'].map((tab, index) => (
                <Tab key={index}>
                  <button className="font-medium px-5 py-2 text-theme-purple text-base border border-theme-purple rounded-full transition-all duration-200 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
                    {tab}
                  </button>
                </Tab>
              ))}
            </div>
          </TabList>

          <TabPanel>
            <Fade cascade triggerOnce damping={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 justify-items-center">
                {renderCards(mobile)}
              </div>
            </Fade>
          </TabPanel>

          <TabPanel>
            <Fade cascade triggerOnce damping={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 justify-items-center">
                {renderCards(website)}
              </div>
            </Fade>
          </TabPanel>

          <TabPanel>
            <Fade cascade triggerOnce damping={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 justify-items-center">
                {renderCards(data)}
              </div>
            </Fade>
          </TabPanel>
        </Tabs>
      </section>
    </Fade>
  );
}
