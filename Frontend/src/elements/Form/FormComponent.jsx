// ProjectForm.jsx
import React, { useState } from 'react';
import { Form } from './index';

const FormComponent= () => {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      return setMessage('All fields are required.');
    }

    try {
      const res = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setMessage('Project created successfully!');
        setFormData({ title: '', description: '' });
      } else {
        const data = await res.json();
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setMessage('Server error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
      <Form
        name="title"
        value={formData.title}
        onChange={handleChange}
        type="text"
        placeholder="Project Title"
      />
      <Form
        name="description"
        value={formData.description}
        onChange={handleChange}
        type="textarea"
        placeholder="Project Description"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
      >
        Submit
      </button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </form>
  );
};

export default FormComponent;
