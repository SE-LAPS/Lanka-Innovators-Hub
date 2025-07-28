import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import PricingPage from './pages/Pricing';
import ContactInquiryForm from './pages/contact-inquiry-form';
import SearchResultsFunctionality from './pages/search-results-functionality';
import AuthenticationSystem from './pages/authentication-system-sign-in-sign-up';
import ApplicationForm from './pages/application-form';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact-inquiry-form" element={<ContactInquiryForm />} />
        <Route path="/search-results-functionality" element={<SearchResultsFunctionality />} />
        <Route path="/authentication-system-sign-in-sign-up" element={<AuthenticationSystem />} />
        <Route path="/application-form" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;