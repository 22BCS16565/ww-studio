/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Header from 'parts/Header';
import Footer from 'parts/Footer';
import { DiscussForm } from 'parts/DiscussForm';

const initialFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectIdea: '',
};

export const DiscussProjectPage = () => {
  const [data, setData] = useState(initialFormData);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => setData(initialFormData);

  return (
    <>
      <Header />

      {/* Framer Motion Animation Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="min-h-screen px-4 py-8"
      >
        <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
      </motion.div>

      <Footer />
    </>
  );
};
