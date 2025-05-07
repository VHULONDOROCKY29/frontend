import React, { useState, useEffect } from 'react';

function InternshipForm() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    address: '',
    age: '',
    idNumber: '',
    gender: '',
    race: '',
    hasITQualification: '',
    qualificationStatus: '',
    idCopy: null,
    cv: null,
    certificate: null,
    grade12: null,
    miscDoc: null,
    popiConsent: false,
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (messageType === 'success') {
      const timer = setTimeout(() => setMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [messageType]);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (type === 'file') {
      const file = files[0];
      if (!file) return;

      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];

      if (!validTypes.includes(file.type)) {
        setMessageType('error');
        setMessage('Only PDF or Word documents are allowed.');
        return;
      }

      const fileName = file.name.toLowerCase();

      const fileValidationMap = {
        cv: 'cv',
        idCopy: 'id',
        certificate: ['cert', 'certificate'],
        grade12: ['grade12', 'matric'],
      };

      if (fileValidationMap[name]) {
        const expectedKeywords = Array.isArray(fileValidationMap[name])
          ? fileValidationMap[name]
          : [fileValidationMap[name]];

        const isValidName = expectedKeywords.some(keyword => fileName.includes(keyword));
        if (!isValidName) {
          setMessageType('error');
          setMessage(`Please upload a file that includes "${expectedKeywords.join('" or "')}" in the file name for ${name}.`);
          return;
        }
      }

      setFormData({ ...formData, [name]: file });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      'name', 'number', 'email', 'address', 'age',
      'idNumber', 'gender', 'race',
      'hasITQualification', 'qualificationStatus',
      'idCopy', 'cv', 'certificate', 'grade12',
      'popiConsent',
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setMessageType('error');
        setMessage(`⚠️ Please complete the field: ${field}`);
        return;
      }
    }

    if (formData.age < 18 || formData.age > 35) {
      setMessageType('error');
      setMessage('⚠️ Applicants must be between the age of 18 and 35.');
      return;
    }

    if (!/^[0-9]{13}$/.test(formData.idNumber)) {
      setMessageType('error');
      setMessage('⚠️ ID Number must be exactly 13 digits.');
      return;
    }

    setShowConfirm(true);
  };

  const confirmSubmit = async () => {
    setShowConfirm(false);

    const data = new FormData();
    for (const key in formData) {
      const value = formData[key];
      if (value instanceof File || typeof value === 'string' || typeof value === 'boolean') {
        data.append(key, value);
      }
    }

    try {
      const response = await fetch('http://localhost:5000/api/internship', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setMessageType('success');
      setMessage('🎉 Application submitted successfully! Thank you for applying.');

      setFormData({
        name: '',
        number: '',
        email: '',
        address: '',
        age: '',
        idNumber: '',
        gender: '',
        race: '',
        hasITQualification: '',
        qualificationStatus: '',
        idCopy: null,
        cv: null,
        certificate: null,
        grade12: null,
        miscDoc: null,
        popiConsent: false,
      });

      document.querySelectorAll('input[type="file"]').forEach(input => input.value = '');

    } catch (err) {
      setMessageType('error');
      setMessage('❌ Submission failed. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-purple-100 border border-purple-300 p-6 rounded-2xl shadow-lg space-y-6"
      >
        <h3 className="text-2xl font-bold text-center text-purple-800">Internship Application</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[{ name: 'name', placeholder: 'Full Name', type: 'text' },
          { name: 'number', placeholder: 'Phone Number', type: 'tel', pattern: '[0-9]{10}' },
          { name: 'email', placeholder: 'Email Address', type: 'email' },
          { name: 'address', placeholder: 'Physical Address', type: 'text' },
          { name: 'age', placeholder: 'Age (18-35)', type: 'number' }
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              pattern={field.pattern}
              onChange={handleChange}
              className="w-full border border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm"
              required
            />
          ))}

          <input
            type="password"
            name="idNumber"
            placeholder="ID Number (13 digits)"
            value={formData.idNumber}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm"
            required
            maxLength={13}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <select name="race" value={formData.race} onChange={handleChange} className="w-full border border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" required>
            <option value="">Select Racial Group</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Coloured">Coloured</option>
            <option value="Indian">Indian</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select name="hasITQualification" value={formData.hasITQualification} onChange={handleChange} className="w-full border border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" required>
            <option value="">Have IT Qualification?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <select name="qualificationStatus" value={formData.qualificationStatus} onChange={handleChange} className="w-full border border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" required>
            <option value="">Qualification Status</option>
            <option value="completed">Completed</option>
            <option value="in-progress">Still in Progress</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[{ name: 'idCopy', label: 'ID Copy' },
          { name: 'cv', label: 'CV' },
          { name: 'certificate', label: 'IT Certificate' },
          { name: 'grade12', label: 'Grade 12 Certificate' },
          { name: 'miscDoc', label: 'Miscellaneous Document' }
          ].map((field) => (
            <div key={field.name}>
              <label className="text-sm font-medium text-purple-700 mb-1 block">{field.label}</label>
              <input
                type="file"
                name={field.name}
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                className="w-full px-3 py-1 border border-purple-300 rounded-lg bg-purple-50 text-sm file:bg-purple-200 file:text-purple-800 file:rounded-full file:px-3 file:py-1 file:border-0"
                required={field.name !== 'miscDoc'}
              />
              {formData[field.name] && (
                <div className="text-xs mt-1 text-purple-600">{formData[field.name]?.name}</div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2">
          <input
            type="checkbox"
            name="popiConsent"
            checked={formData.popiConsent}
            onChange={handleChange}
            required
          />
          <label className="text-sm text-purple-700">
            I consent to the processing of my personal information under the POPI Act.
          </label>
        </div>

        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-all">
          Submit Application
        </button>
      </form>

      {showConfirm && (
        <div className="max-w-xl mx-auto mt-4 p-3 rounded-lg text-center text-sm font-medium bg-yellow-100 text-yellow-700 border border-yellow-300">
          <p>Are you sure you want to submit your application?</p>
          <div className="flex justify-center gap-4 mt-3">
            <button
              onClick={confirmSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Yes, Submit
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {message && (
        <div
          aria-live="polite"
          className={`max-w-xl mx-auto my-4 p-3 rounded-lg text-sm font-medium ${messageType === 'error'
            ? 'bg-red-100 text-red-700 border border-red-300'
            : 'bg-green-100 text-green-700 border border-green-300'}`}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default function Internship() {
  return (
    <div className="min-h-screen bg-purple-50 py-10 px-4">
      <InternshipForm />
    </div>
  );
}
