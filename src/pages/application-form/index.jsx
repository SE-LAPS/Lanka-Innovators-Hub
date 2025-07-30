import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import Select from '../../components/ui/Select';
import Checkbox from '../../components/ui/Checkbox';
import Radio from '../../components/ui/Radio';
import CheckboxGroup from '../../components/ui/CheckboxGroup';
import FormSection from '../../components/ui/FormSection';

const ApplicationForm = () => {
  // Define form state using useState hooks
  const [formData, setFormData] = useState({
    // Applicant Details
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    phone: '',
    
    // Startup Details
    startupName: '',
    website: '',
    description: '',
    incorporationDate: '',
    location: '',
    registrationNumber: '',
    
    // Industry and Clusters
    industries: [],
    clusters: [],
    
    // Materials
    pitchDeck: '',
    videoPitch: '',
    
    // Solution and Impact
    problem: '',
    uniqueness: '',
    idea: '',
    developmentStatus: '',
    impact: '',
    future: '',
    
    // SDGs
    sdgs: [],
    
    // IP and Research
    academicResearch: '',
    intellectualProperty: '',
    
    // Market and Users
    mvpLaunchDate: '',
    targetCustomers: '',
    traction: '',
    revenueModel: '',
    competitors: '',
    
    // Team
    teamInfo: '',
    linkedInProfiles: '',
    teamFit: '',
    founderExperience: '',
    totalCoFounders: '',
    femaleFounders: '',
    maleFounders: '',
    nonBinaryFounders: '',
    
    // Funding
    ownershipStructure: '',
    coFoundersOwnership: '',
    equityFunding: '',
    nonEquityFunding: '',
    seekingInvestment: '',
    runway: '',
    seedCapital: '',
    
    // Final Questions
    shareData: '',
    heardFrom: '',
    programExpectations: '',
    previousSupport: [],
    teamMet: '',
    otherPrograms: '',
    additionalInfo: '',
    
    // Consent
    dataConsent: false,
    updates: false,
  });

  // Track current form step
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  // Track completed steps
  const [completedSteps, setCompletedSteps] = useState([]);

  // Track validation errors
  const [validationError, setValidationError] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  // Handle array field changes (checkbox groups)
  const handleArrayChange = (name, values) => {
    setFormData({ ...formData, [name]: values });
  };

  // Validation functions for each step
  const validateStep = (stepNumber) => {
    switch (stepNumber) {
      case 1: // Applicant Details
        return formData.firstName.trim() !== '' && 
               formData.lastName.trim() !== '' && 
               formData.jobTitle.trim() !== '' && 
               formData.email.trim() !== '' && 
               formData.phone.trim() !== '';
      
      case 2: // Your Startup
        return formData.startupName.trim() !== '' && 
               formData.description.trim() !== '' && 
               formData.incorporationDate.trim() !== '' && 
               formData.location.trim() !== '' && 
               formData.registrationNumber.trim() !== '' && 
               formData.industries.length > 0 && 
               formData.pitchDeck.trim() !== '';
      
      case 3: // Your Solution and Impact
        return formData.problem.trim() !== '' && 
               formData.uniqueness.trim() !== '' && 
               formData.idea.trim() !== '';
      
      case 4: // Market, Users & Progress
        return formData.mvpLaunchDate.trim() !== '' && 
               formData.targetCustomers.trim() !== '' && 
               formData.traction.trim() !== '' && 
               formData.revenueModel.trim() !== '' && 
               formData.competitors.trim() !== '';
      
      case 5: // The Team
        return formData.teamInfo.trim() !== '' && 
               formData.totalCoFounders.trim() !== '' && 
               formData.femaleFounders.trim() !== '' && 
               formData.maleFounders.trim() !== '' && 
               formData.nonBinaryFounders.trim() !== '';
      
      case 6: // Funding & Ownership
        return formData.ownershipStructure.trim() !== '' && 
               formData.coFoundersOwnership.trim() !== '' && 
               formData.equityFunding.trim() !== '' && 
               formData.nonEquityFunding.trim() !== '' && 
               formData.seekingInvestment.trim() !== '' && 
               formData.runway.trim() !== '' && 
               formData.seedCapital.trim() !== '';
      
      case 7: // Final Questions
        return formData.shareData.trim() !== '' && 
               formData.heardFrom.trim() !== '' && 
               formData.programExpectations.trim() !== '' &&
               formData.dataConsent === true;
      
      default:
        return false;
    }
  };

  // Navigate to next step
  const nextStep = () => {
    if (validateStep(currentStep)) {
      // Clear any validation errors
      setValidationError('');
      // Mark current step as completed
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      // Show validation error
      setValidationError('Please fill in all required fields marked with * before proceeding to the next step.');
      window.scrollTo(0, 0);
    }
  };

  // Navigate to previous step
  const prevStep = () => {
    setValidationError('');
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateStep(7)) {
      // Mark final step as completed
      if (!completedSteps.includes(7)) {
        setCompletedSteps([...completedSteps, 7]);
      }
      setValidationError('');
      console.log("Form submitted:", formData);
      
      // In a real app, you'd send this data to your backend
      alert("Application submitted successfully! We'll be in touch soon.");
    } else {
      setValidationError('Please fill in all required fields and accept the data consent before submitting.');
      window.scrollTo(0, 0);
    }
  };

  // Industry options
  const industryOptions = [
    { value: 'healthtech', label: 'HealthTech / MedTech' },
    { value: 'agritech', label: 'AgriTech / Food Innovation' },
    { value: 'edtech', label: 'Education Technology (EdTech)' },
    { value: 'cleantech', label: 'Clean Energy / ClimateTech' },
    { value: 'fintech', label: 'Financial Technology (FinTech)' },
    { value: 'mobility', label: 'Transport & Mobility' },
    { value: 'digital', label: 'Digital Services & AI' },
    { value: 'biotech', label: 'BioTech / Pharmaceuticals' },
    { value: 'industrial', label: 'Industrial Solutions' },
    { value: 'security', label: 'Security & Surveillance' },
    { value: 'property', label: 'Property & Urban Innovation' },
    { value: 'other', label: 'Other' },
  ];

  // Cluster options
  const clusterOptions = [
    { value: 'health', label: 'Health & Life Sciences' },
    { value: 'deeptech', label: 'DeepTech & Scientific Innovation' },
    { value: 'digital', label: 'Inclusive & Disruptive Digital Solutions' },
    { value: 'green', label: 'Green Growth & Energy' },
  ];

  // SDG options
  const sdgOptions = [
    { value: 'sdg1', label: 'SDG 1 – No Poverty' },
    { value: 'sdg2', label: 'SDG 2 – Zero Hunger' },
    { value: 'sdg3', label: 'SDG 3 – Good Health & Well-being' },
    { value: 'sdg4', label: 'SDG 4 – Quality Education' },
    { value: 'sdg5', label: 'SDG 5 – Gender Equality' },
    { value: 'sdg6', label: 'SDG 6 – Clean Water & Sanitation' },
    { value: 'sdg7', label: 'SDG 7 – Clean & Affordable Energy' },
    { value: 'sdg8', label: 'SDG 8 – Decent Work & Growth' },
    { value: 'sdg9', label: 'SDG 9 – Industry & Infrastructure' },
    { value: 'sdg10', label: 'SDG 10 – Reduced Inequality' },
    { value: 'sdg11', label: 'SDG 11 – Sustainable Cities' },
    { value: 'sdg12', label: 'SDG 12 – Sustainable Consumption' },
    { value: 'sdg13', label: 'SDG 13 – Climate Action' },
    { value: 'sdg14', label: 'SDG 14 – Life Below Water' },
    { value: 'sdg15', label: 'SDG 15 – Life on Land' },
    { value: 'sdg16', label: 'SDG 16 – Peace & Justice' },
    { value: 'sdg17', label: 'SDG 17 – Global Partnerships' },
  ];

  // Previous support options
  const supportOptions = [
    { value: 'office', label: 'Open Office Sessions' },
    { value: 'bootcamp', label: 'Startup Discovery Bootcamp' },
    { value: 'academy', label: 'Lanka Launch Academy' },
    { value: 'other', label: 'Other' },
    { value: 'none', label: 'No' },
  ];

  // Form steps
  const formSteps = [
    { id: 1, title: 'APPLICANT DETAILS' },
    { id: 2, title: 'YOUR STARTUP' },
    { id: 3, title: 'YOUR SOLUTION AND IMPACT' },
    { id: 4, title: 'MARKET, USERS & PROGRESS' },
    { id: 5, title: 'THE TEAM' },
    { id: 6, title: 'FUNDING & OWNERSHIP' },
    { id: 7, title: 'FINAL QUESTIONS' },
  ];
  
  return (
    <div className="w-full bg-white">
      <Header />
      
      {/* Form Header */}
      <section className="w-full bg-[#2a85ff] py-16 text-white">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Lanka Innovators Hub – Core Program Application
            </h1>
            <p className="text-lg mb-8">
              Welcome to Lanka Innovators Hub!
            </p>
            <p className="text-base mb-6">
              Lanka Innovators Core is our intensive 6-month flagship accelerator for early-stage startups in Sri Lanka, 
              designed to connect you with lifelong support, expert mentorship, and investment-readiness training. 
              After completing this program, you'll be eligible for continued support through Lanka Innovators Plus, 
              extending up to 12 months based on your progress and growth.
            </p>
            <p className="text-base mb-6">
              Our upcoming cohort begins on 7 October 2025, culminating in Demo Day in March 2026. 
              Early application deadline is 1 June 2025, giving you priority for early feedback and selection before the holiday season. 
              Final deadline: 17 August 2025. Online pitch evaluations take place 9–10 June 2025.
            </p>
            
            <div className="bg-white/10 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3 mb-4">
                <div className="text-2xl">📌</div>
                <p className="text-left">
                  <span className="font-bold">Tip:</span> Browse the full form first so you can complete it in one go (takes ~20 minutes). 
                  Keep your responses concise and impactful. Required questions are marked with * but we recommend filling in all sections for a stronger application.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">📍</div>
                <p className="text-left">
                  <span className="font-bold">Eligibility:</span> Your business must be a registered Sri Lankan legal entity (e.g., Private Limited Company).
                </p>
              </div>
            </div>
            
            <p className="text-base mb-2">
              For queries, reach out to: <a href="mailto:apply@ABCinnovators.lk" className="underline">apply@ABCinnovators.lk</a> or contact one of our startup advisors.
            </p>
            <p className="text-base mb-6">
              We're excited to hear your story!
            </p>
            <p className="text-base font-medium">
              – Lanka Innovators Hub Team
            </p>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="w-full py-16">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Progress Bar (Top Center) */}
            <div className="w-full mb-8">
              <div className="bg-white p-6 rounded-lg border border-[#e9ecf2]">
                <h3 className="text-lg font-bold mb-6 text-[#1d1d25] text-center">Application Progress</h3>
                <div className="flex flex-col md:flex-row justify-between items-center">
                  {formSteps.map((step) => (
                    <div key={step.id} className="flex flex-col items-center mb-4 md:mb-0">
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center 
                                   ${currentStep === step.id ? 'bg-[#2a85ff] text-white' : 
                                     completedSteps.includes(step.id) ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`}
                      >
                        {completedSteps.includes(step.id) ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        ) : (
                          step.id
                        )}
                      </div>
                      <p className={`text-sm mt-2 text-center ${currentStep === step.id ? 'font-bold text-[#1d1d25]' : 
                                   completedSteps.includes(step.id) ? 'font-medium text-gray-500' : 'text-gray-400'}`}>
                        {step.title}
                      </p>
                    </div>
                  ))}

                  {/* Removed connecting lines between steps */}
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="w-full">
              {/* Step 1: Applicant Details */}
              {currentStep === 1 && (
                <FormSection title="APPLICANT DETAILS">
                  <Input
                    id="firstName"
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="lastName"
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="jobTitle"
                    label="Job Title & Role in the Company"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="phone"
                    label="Phone (+94)"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </FormSection>
              )}
              
              {/* Step 2: Startup Details */}
              {currentStep === 2 && (
                <FormSection title="YOUR STARTUP">
                  <Input
                    id="startupName"
                    label="Startup Name"
                    value={formData.startupName}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="website"
                    label="Website (if any)"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                  
                  <Textarea
                    id="description"
                    label="Briefly describe your startup and what you do (2 sentences max)"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="incorporationDate"
                    label="Year of Incorporation (DD-MM-YYYY)"
                    value={formData.incorporationDate}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="location"
                    label="Head Office Location (City/District)"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="registrationNumber"
                    label="Company Registration Number (BR/Reg ID)"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <CheckboxGroup
                    name="industries"
                    label="Primary Industry (Select up to 3)"
                    options={industryOptions}
                    selectedValues={formData.industries}
                    onChange={(values) => handleArrayChange('industries', values)}
                    required
                  />
                  
                  <CheckboxGroup
                    name="clusters"
                    label="If relevant, which of our innovation clusters align with your startup?"
                    options={clusterOptions}
                    selectedValues={formData.clusters}
                    onChange={(values) => handleArrayChange('clusters', values)}
                  />
                  
                  <Input
                    id="pitchDeck"
                    label="Upload your pitch deck (share link)"
                    value={formData.pitchDeck}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="videoPitch"
                    label="3-minute video pitch link (optional)"
                    value={formData.videoPitch}
                    onChange={handleInputChange}
                  />
                </FormSection>
              )}
              
              {/* Step 3: Solution and Impact */}
              {currentStep === 3 && (
                <FormSection title="YOUR SOLUTION AND IMPACT">
                  <Textarea
                    id="problem"
                    label="What problem is your startup solving? Why is it important? Who faces this issue?"
                    value={formData.problem}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    id="uniqueness"
                    label="What's unique about your solution or product?"
                    value={formData.uniqueness}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    id="idea"
                    label="How did the idea come about? What's your approach to solving the problem?"
                    value={formData.idea}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    id="developmentStatus"
                    label="What is the current status of your product development? What Technology Readiness Level (TRL) applies?"
                    value={formData.developmentStatus}
                    onChange={handleInputChange}
                  />
                  
                  <Textarea
                    id="impact"
                    label="What impact do you aim to make socially, economically, or environmentally? How will you measure it?"
                    value={formData.impact}
                    onChange={handleInputChange}
                  />
                  
                  <Textarea
                    id="future"
                    label="In what way does your innovation help shape a better future?"
                    value={formData.future}
                    onChange={handleInputChange}
                  />
                  
                  <CheckboxGroup
                    name="sdgs"
                    label="Which Sustainable Development Goals (SDGs) does your work directly impact (up to 3)?"
                    options={sdgOptions}
                    selectedValues={formData.sdgs}
                    onChange={(values) => handleArrayChange('sdgs', values)}
                  />
                  
                  <Textarea
                    id="academicResearch"
                    label="Is your innovation backed by academic research? If yes, which institution(s)?"
                    value={formData.academicResearch}
                    onChange={handleInputChange}
                  />
                  
                  <Textarea
                    id="intellectualProperty"
                    label="Do you hold any intellectual property or patents? Describe your IP strategy and how you maintain a competitive edge. Have you explored freedom-to-operate or any regulatory requirements?"
                    value={formData.intellectualProperty}
                    onChange={handleInputChange}
                  />
                </FormSection>
              )}
              
              {/* Step 4: Market, Users & Progress */}
              {currentStep === 4 && (
                <FormSection title="MARKET, USERS & PROGRESS">
                  <Input
                    id="mvpLaunchDate"
                    label="MVP (Minimum Viable Product) Launch Date (DD-MM-YYYY)"
                    value={formData.mvpLaunchDate}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    id="targetCustomers"
                    label="Who are your target customers? What is the estimated size of your market?"
                    value={formData.targetCustomers}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    id="traction"
                    label="Describe any sales, pilots, or traction so far."
                    value={formData.traction}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    id="revenueModel"
                    label="Revenue model – how do you make or plan to make money? Do you have paying customers? If yes, who and how much revenue?"
                    value={formData.revenueModel}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    id="competitors"
                    label="Who are your major competitors? What gives your solution a clear advantage?"
                    value={formData.competitors}
                    onChange={handleInputChange}
                    required
                  />
                </FormSection>
              )}
              
              {/* Step 5: Team */}
              {currentStep === 5 && (
                <FormSection title="THE TEAM">
                  <Textarea
                    id="teamInfo"
                    label="Tell us about your team: names, roles, time commitment, experience, and expertise. Who are the co-founders? Who handles business development vs. tech?"
                    value={formData.teamInfo}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    id="linkedInProfiles"
                    label="Share LinkedIn profiles of all co-founders."
                    value={formData.linkedInProfiles}
                    onChange={handleInputChange}
                  />
                  
                  <Textarea
                    id="teamFit"
                    label="Why is your team a strong fit? How long have you worked together? What motivates you as a group?"
                    value={formData.teamFit}
                    onChange={handleInputChange}
                  />
                  
                  <Textarea
                    id="founderExperience"
                    label="Are you first-time founders or do you have previous startup experience? Please share briefly."
                    value={formData.founderExperience}
                    onChange={handleInputChange}
                  />
                  
                  <Input
                    id="totalCoFounders"
                    label="Total number of co-founders"
                    value={formData.totalCoFounders}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="femaleFounders"
                    label="Female founders"
                    value={formData.femaleFounders}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="maleFounders"
                    label="Male founders"
                    value={formData.maleFounders}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="nonBinaryFounders"
                    label="Non-binary founders"
                    value={formData.nonBinaryFounders}
                    onChange={handleInputChange}
                    required
                  />
                </FormSection>
              )}
              
              {/* Step 6: Funding & Ownership */}
              {currentStep === 6 && (
                <FormSection title="FUNDING & OWNERSHIP">
                  <Textarea
                    id="ownershipStructure"
                    label="Ownership structure (cap table) – who owns what?"
                    value={formData.ownershipStructure}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Input
                    id="coFoundersOwnership"
                    label="Co-founders' combined ownership (%)"
                    value={formData.coFoundersOwnership}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    id="equityFunding"
                    label="Have you raised any equity funding before? From whom, when, and at what valuation?"
                    value={formData.equityFunding}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    id="nonEquityFunding"
                    label="Any non-equity funding (e.g., grants, awards)? From whom and how much?"
                    value={formData.nonEquityFunding}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <div className="mb-6">
                    <p className="block text-sm font-medium text-[#1d1d25] mb-3">
                      Are you currently seeking investment? <span className="text-red-500">*</span>
                    </p>
                    
                    <div className="space-y-2">
                      <Radio
                        id="seekingInvestment-yes"
                        name="seekingInvestment"
                        value="yes"
                        checked={formData.seekingInvestment === 'yes'}
                        onChange={handleInputChange}
                        label="Yes"
                      />
                      
                      <Radio
                        id="seekingInvestment-no"
                        name="seekingInvestment"
                        value="no"
                        checked={formData.seekingInvestment === 'no'}
                        onChange={handleInputChange}
                        label="No"
                      />
                    </div>
                  </div>
                  
                  <Input
                    id="runway"
                    label="Current runway (in months)"
                    value={formData.runway}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <div className="mb-6">
                    <p className="block text-sm font-medium text-[#1d1d25] mb-3">
                      Would you like to be considered for a potential investment from Lanka Seed Capital? <span className="text-red-500">*</span>
                    </p>
                    
                    <div className="space-y-2">
                      <Radio
                        id="seedCapital-yes"
                        name="seedCapital"
                        value="yes"
                        checked={formData.seedCapital === 'yes'}
                        onChange={handleInputChange}
                        label="Yes"
                      />
                      
                      <Radio
                        id="seedCapital-no"
                        name="seedCapital"
                        value="no"
                        checked={formData.seedCapital === 'no'}
                        onChange={handleInputChange}
                        label="No"
                      />
                    </div>
                  </div>
                </FormSection>
              )}
              
              {/* Step 7: Final Questions */}
              {currentStep === 7 && (
                <>
                  <FormSection title="FINAL QUESTIONS">
                    <div className="mb-6">
                      <p className="block text-sm font-medium text-[#1d1d25] mb-3">
                        May we share your pitch deck with trusted advisors in our network for feedback? <span className="text-red-500">*</span>
                      </p>
                      
                      <div className="space-y-2">
                        <Radio
                          id="shareData-yes"
                          name="shareData"
                          value="yes"
                          checked={formData.shareData === 'yes'}
                          onChange={handleInputChange}
                          label="Yes"
                        />
                        
                        <Radio
                          id="shareData-no"
                          name="shareData"
                          value="no"
                          checked={formData.shareData === 'no'}
                          onChange={handleInputChange}
                          label="No"
                        />
                      </div>
                    </div>
                    
                    <Input
                      id="heardFrom"
                      label="How did you hear about Lanka Innovators Hub?"
                      value={formData.heardFrom}
                      onChange={handleInputChange}
                      required
                    />
                    
                    <Textarea
                      id="programExpectations"
                      label="What do you hope to gain from joining our Core program?"
                      value={formData.programExpectations}
                      onChange={handleInputChange}
                      required
                    />
                    
                    <CheckboxGroup
                      name="previousSupport"
                      label="Have you received any support from us previously? (select all that apply)"
                      options={supportOptions}
                      selectedValues={formData.previousSupport}
                      onChange={(values) => handleArrayChange('previousSupport', values)}
                    />
                    
                    <Input
                      id="teamMet"
                      label="Have you already met with anyone on our team? If yes, who?"
                      value={formData.teamMet}
                      onChange={handleInputChange}
                    />
                    
                    <Textarea
                      id="otherPrograms"
                      label="Have you taken part in any other startup accelerator or incubator before? Please list them and when."
                      value={formData.otherPrograms}
                      onChange={handleInputChange}
                    />
                    
                    <Textarea
                      id="additionalInfo"
                      label="Anything else you'd like to tell us?"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                    />
                  </FormSection>
                  
                  {/* Data Consent */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-[#e9ecf2] mt-8">
                    <h3 className="font-bold text-lg mb-4">Data Consent and Privacy Notice</h3>
                    
                    <p className="text-sm mb-6">
                      By submitting this form, you consent to Lanka Innovators Hub collecting and processing your data solely for the purpose of evaluating your application and engaging you in our programs and services. You may opt out of further communication at any time.
                    </p>
                    
                    <div className="space-y-4">
                      <Checkbox
                        id="dataConsent"
                        name="dataConsent"
                        checked={formData.dataConsent}
                        onChange={handleCheckboxChange}
                        label="I consent to Lanka Innovators Hub contacting me and handling my personal data for these purposes."
                      />
                      
                      <Checkbox
                        id="updates"
                        name="updates"
                        checked={formData.updates}
                        onChange={handleCheckboxChange}
                        label="I agree to receive occasional updates and relevant opportunities from Lanka Innovators Hub."
                      />
                    </div>
                  </div>
                </>
              )}
              
              {/* Validation Error Message */}
              {validationError && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-700 text-sm font-medium">{validationError}</p>
                  </div>
                </div>
              )}
              
              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="min-w-[120px]"
                  >
                    Previous
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    variant="primary"
                    onClick={nextStep}
                    className="min-w-[120px]"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    className="min-w-[160px]"
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ApplicationForm; 