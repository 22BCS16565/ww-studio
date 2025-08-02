import React, { useState } from 'react';

const initialFormData = {
  name: '',
  company: '',
  email: '',
  contactNumber: '',
  idea: ''
};

const ProjectForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.contactNumber.trim() || !formData.idea.trim()) {
      setMessage('⚠️ Name, Email, Contact Number and Idea are required.');
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('http://localhost:5001/api/projects', { // Use 5001 to match backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('✅ Project submitted successfully!');
        setFormData(initialFormData);
      } else {
        setMessage(data.error || '❌ Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <div style={{ marginBottom: '8px' }}>{message}</div>}
      <div>
        <label>Name*:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Company:</label>
        <input name="company" value={formData.company} onChange={handleChange} />
      </div>
      <div>
        <label>Email*:</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Contact Number*:</label>
        <input name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Idea*:</label>
        <textarea name="idea" value={formData.idea} onChange={handleChange} required />
      </div>
      <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Project'}</button>
    </form>
  );
};

export default ProjectForm;
