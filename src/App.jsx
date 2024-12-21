import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct import for BrowserRouter
import HomePageCompoment from './components/HomePageCompoment';  // Assuming this is the correct path
import StudentRegistrationComponent from './components/StudentRegistrationComponent';  // Correctly capitalize the component name
import GuruRegistrationComponent from './components/GuruRegistrationComponent';  // Correctly capitalize the component name

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <Router>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<HomePageCompoment />} />
        <Route path="/studentRegistration" element={<StudentRegistrationComponent />} />
        <Route path="/guruRegistration" element={<GuruRegistrationComponent />} />

      </Routes>
      <FooterComponent />
    </Router>

  );
}

export default App;
