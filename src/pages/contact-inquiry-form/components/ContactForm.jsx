import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import FormField from './FormField';
import SelectField from './SelectField';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    description: '',
    timeline: '',
    contact: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Web Design',
    'Mobile App Design',
    'UI/UX Design',
    'Brand Identity',
    'E-commerce',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months'
  ];

  const contactMethods = [
    'Email',
    'Phone Call',
    'Video Call',
    'In-person Meeting'
  ];

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.budget) newErrors.budget = 'Budget range is required';
    if (!formData.description.trim()) newErrors.description = 'Project description is required';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          description: '',
          timeline: '',
          contact: ''
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="w-full py-16 sm:py-20 lg:py-24" id="contact-form">
        <div className="w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-[#f9faff] rounded-[24px] p-12">
            <div className="w-20 h-20 bg-[#82be6d] rounded-full flex items-center justify-center mx-auto mb-6">
              <img src="/images/img_check_circle_1.svg" alt="Success" className="w-10 h-10" />
            </div>
            <h2 className="text-[36px] sm:text-[48px] font-bold text-[#1d1d25] mb-4">
              Thank You!
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#808d9e] mb-6">
              Your project inquiry has been received. Our team will get back to you within 24 hours.
            </p>
            <div className="text-[14px] text-[#2a85ff] font-medium">
              Reference ID: #COCA{Date.now().toString().slice(-6)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" id="contact-form">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#1d1d25] leading-tight mb-4">
              Project Inquiry Form
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#808d9e]">
              Tell us about your project and we'll provide a detailed proposal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-[20px] p-6 sm:p-8 shadow-[0px_20px_40px_#f2f3f7] border border-[#e9ecf2]">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#1d1d25] mb-6">
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  placeholder="Enter your full name"
                  required
                />
                
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  placeholder="your.email@company.com"
                  required
                />
              </div>
              
              <FormField
                label="Company Name"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                error={errors.company}
                placeholder="Your company name (optional)"
              />
            </div>

            {/* Project Details */}
            <div className="bg-white rounded-[20px] p-6 sm:p-8 shadow-[0px_20px_40px_#f2f3f7] border border-[#e9ecf2]">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#1d1d25] mb-6">
                Project Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <SelectField
                  label="Project Type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  error={errors.projectType}
                  options={projectTypes}
                  placeholder="Select project type"
                  required
                />
                
                <SelectField
                  label="Budget Range"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  error={errors.budget}
                  options={budgetRanges}
                  placeholder="Select budget range"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <SelectField
                  label="Timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  error={errors.timeline}
                  options={timelines}
                  placeholder="Select timeline"
                />
                
                <SelectField
                  label="Preferred Contact Method"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  error={errors.contact}
                  options={contactMethods}
                  placeholder="How should we contact you?"
                />
              </div>
              
              <FormField
                label="Project Description"
                name="description"
                type="textarea"
                value={formData.description}
                onChange={handleInputChange}
                error={errors.description}
                placeholder="Please describe your project in detail. Include goals, target audience, specific requirements, and any inspiration or references you have in mind."
                required
                rows={6}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={isSubmitting}
                className="rounded-[8px] px-12 py-4 min-w-[200px]"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
              
              <p className="text-[14px] text-[#808d9e] mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;