import React, { useState } from 'react';

function InternshipForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (no backend)
    console.log('Internship Application:', {
      name: formData.name,
      email: formData.email,
      resume: formData.resume ? formData.resume.name : 'No file',
    });
    alert('Application submitted successfully! (Mock submission)');
    setFormData({ name: '', email: '', resume: null });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-purple-100 border border-purple-300 p-6 rounded-2xl shadow-lg space-y-6"
    >
      <h3 className="text-2xl font-bold text-center text-purple-800">Internship Application</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-purple-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-purple-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-700">Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            accept=".pdf"
            className="w-full px-3 py-1 border border-purple-300 rounded-lg bg-purple-50 text-sm file:bg-purple-200 file:text-purple-800 file:rounded-full file:px-3 file:py-1 file:border-0"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-all"
      >
        Submit Application
      </button>
    </form>
  );
}

export default InternshipForm;
