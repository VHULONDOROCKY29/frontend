import React, { useState } from 'react';
import axios from 'axios';  // Import axios for making HTTP requests

function ClientPortal() {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    email: '',
    startDate: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [responseMessage, setResponseMessage] = useState(''); // To store response message

  const validate = () => {
    const newErrors = {};
    if (!formData.projectName || formData.projectName.length < 3) {
      newErrors.projectName = 'Project name must be at least 3 characters.';
    }
    if (!formData.description || formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters.';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'A valid email is required.';
    }
    if (!formData.startDate) {
      newErrors.startDate = 'Please select a start date.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setShowConfirm(true);
  };

  const confirmSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/projects', formData);
      setResponseMessage(response.data.message); // Set success message
      setSubmitted(true);
      setFormData({
        projectName: '',
        description: '',
        email: '',
        startDate: '',
      });
      setErrors({});
      setShowConfirm(false);
    } catch (error) {
      setResponseMessage('Failed to submit project request. Please try again.'); // Set error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white p-6">
      <div className="w-full max-w-lg bg-gradient-to-br from-purple-800 to-indigo-800 p-8 rounded-2xl shadow-2xl border border-white/10 animate-fade-in relative">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-white">🚀 Client Project Portal</h2>
        <p className="text-sm text-gray-200 text-center mb-8">
          Submit a new project request and we'll get back to you in lightspeed.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1">Project Name</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            {errors.projectName && <p className="text-red-300 text-sm mt-1">{errors.projectName}</p>}
          </div>

          <div>
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            {errors.description && <p className="text-red-300 text-sm mt-1">{errors.description}</p>}
          </div>

          <div>
            <label className="block mb-1">Contact Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            {errors.startDate && <p className="text-red-300 text-sm mt-1">{errors.startDate}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Submit Project Request ✨
          </button>
        </form>

        {showConfirm && (
          <div className="mt-6 p-4 bg-yellow-100 text-yellow-800 rounded-lg border border-yellow-300">
            <p className="mb-3 font-semibold">Are you sure you want to submit your project request?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={confirmSubmit}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                Yes, Submit
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {submitted && (
          <div className="mt-6 bg-green-100 text-green-800 px-4 py-3 rounded-lg border border-green-300">
            🎉 Project request submitted successfully! Thank you for reaching out.
          </div>
        )}

        {responseMessage && (
          <div className={`mt-6 px-4 py-3 rounded-lg ${submitted ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} border`}>
            {responseMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientPortal;
