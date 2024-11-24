import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

// Navigation Component
const Navbar = () => (
  <nav className="bg-white shadow-lg">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold text-blue-600">CardioDoc</Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/departments" className="text-gray-700 hover:text-blue-600">Departments</Link>
          <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
        </div>
      </div>
    </div>
  </nav>
);

// Hero Section Component
const Hero = () => (
  <div className="relative bg-blue-50 py-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            We Care For Your Heart Health
          </h1>
          <p className="text-gray-600 mb-8">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
            fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
            molestias.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/history" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Track your past
            </Link>
            <Link 
              to="/form" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Track Your Heart
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Health Parameters Form Component
const HealthForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    chestPainType: '',
    restingBP: '',
    cholesterol: '',
    fastingBS: '',
    restingECG: '',
    maxHR: '',
    exerciseAngina: '',
    oldpeak: '',
    stSlope: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // submission logic add karna h
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Health Parameters Form</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label className="block text-gray-700 mb-2">Age</label>
            <input
              type="number"
              className="w-full border rounded-lg px-4 py-2"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              placeholder="Enter age"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Sex</label>
            <select 
              className="w-full border rounded-lg px-4 py-2"
              value={formData.sex}
              onChange={(e) => setFormData({...formData, sex: e.target.value})}
            >
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Chest Pain Type</label>
            <select 
              className="w-full border rounded-lg px-4 py-2"
              value={formData.chestPainType}
              onChange={(e) => setFormData({...formData, chestPainType: e.target.value})}
            >
              <option value="">Select Chest Pain Type</option>
              <option value="TA">Typical Angina</option>
              <option value="ATA">Atypical Angina</option>
              <option value="NAP">Non-Anginal Pain</option>
              <option value="ASY">Asymptomatic</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Resting Blood Pressure</label>
            <input
              type="number"
              className="w-full border rounded-lg px-4 py-2"
              value={formData.restingBP}
              onChange={(e) => setFormData({...formData, restingBP: e.target.value})}
              placeholder="Enter resting BP (mm Hg)"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Cholesterol</label>
            <input
              type="number"
              className="w-full border rounded-lg px-4 py-2"
              value={formData.cholesterol}
              onChange={(e) => setFormData({...formData, cholesterol: e.target.value})}
              placeholder="Enter cholesterol (mm/dl)"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Fasting Blood Sugar</label>
            <select 
              className="w-full border rounded-lg px-4 py-2"
              value={formData.fastingBS}
              onChange={(e) => setFormData({...formData, fastingBS: e.target.value})}
            >
              <option value="">Select Fasting BS</option>
              <option value="1">Greater than 120 mg/dl</option>
              <option value="0">Less than or equal to 120 mg/dl</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Resting ECG</label>
            <select 
              className="w-full border rounded-lg px-4 py-2"
              value={formData.restingECG}
              onChange={(e) => setFormData({...formData, restingECG: e.target.value})}
            >
              <option value="">Select Resting ECG</option>
              <option value="Normal">Normal</option>
              <option value="ST">ST-T Wave Abnormality</option>
              <option value="LVH">Left Ventricular Hypertrophy</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Maximum Heart Rate</label>
            <input
              type="number"
              className="w-full border rounded-lg px-4 py-2"
              value={formData.maxHR}
              onChange={(e) => setFormData({...formData, maxHR: e.target.value})}
              placeholder="Enter maximum heart rate"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Exercise-Induced Angina</label>
            <select 
              className="w-full border rounded-lg px-4 py-2"
              value={formData.exerciseAngina}
              onChange={(e) => setFormData({...formData, exerciseAngina: e.target.value})}
            >
              <option value="">Select Exercise Angina</option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Oldpeak (ST Depression)</label>
            <input
              type="number"
              step="0.1"
              className="w-full border rounded-lg px-4 py-2"
              value={formData.oldpeak}
              onChange={(e) => setFormData({...formData, oldpeak: e.target.value})}
              placeholder="Enter oldpeak value"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">ST Slope</label>
            <select 
              className="w-full border rounded-lg px-4 py-2"
              value={formData.stSlope}
              onChange={(e) => setFormData({...formData, stSlope: e.target.value})}
            >
              <option value="">Select ST Slope</option>
              <option value="Up">Upsloping</option>
              <option value="Flat">Flat</option>
              <option value="Down">Downsloping</option>
            </select>
          </div>
        </div>
        <button 
          type="submit" 
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// History Dashboard Component
const HistoryDashboard = () => {
  const patientData = {
    age: 52,
    sex: 'Male (0)',
    chestPainType: 'ATA (0)',
    restingBP: 120,
    cholesterol: 284,
    fastingBS: 'No (0)',
    restingECG: 'Normal (0)',
    maxHR: 118,
    exerciseAngina: 'No (0)',
    oldpeak: 0,
    stSlope: 'Flat (1)'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Health Parameters Dashboard</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(patientData).map(([key, value]) => (
            <div key={key} className="border-b pb-2">
              <span className="font-medium">{key}: </span>
              <span className="text-gray-600">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Form Component
const Contact = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
    <div className="max-w-4xl mx-auto">
      <form className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-4 py-2"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border rounded-lg px-4 py-2"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="border rounded-lg px-4 py-2"
        ></textarea>
        <button 
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Reach at..</h4>
          <div className="space-y-2">
            <p>Location</p>
            <p>Call +01 1234567890</p>
            <p>demo@gmail.com</p>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">About</h4>
          <p>
            Beatae provident nobis mollitia magnam voluptatum, unde dicta facilis
            minima veniam corporis laudantium alias tenetur eveniet illum.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Links</h4>
          <div className="space-y-2">
            <Link to="/" className="block hover:text-blue-400">Home</Link>
            <Link to="/about" className="block hover:text-blue-400">About</Link>
            <Link to="/departments" className="block hover:text-blue-400">Departments</Link>
            <Link to="/doctors" className="block hover:text-blue-400">Doctors</Link>
            <Link to="/contact" className="block hover:text-blue-400">Contact Us</Link>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg text-gray-800"
          />
          <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/form" element={<HealthForm />} />
            <Route path="/history" element={<HistoryDashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;