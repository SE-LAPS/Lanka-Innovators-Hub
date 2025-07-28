import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ContactForm from './components/ContactForm';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import Testimonials from './components/Testimonials';

const ContactInquiryForm = () => {
  return (
    <div className="w-full bg-white">
      <Header />
      
      <ContactHero />
      
      <ContactForm />
      
      <ContactInfo />
      
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default ContactInquiryForm;