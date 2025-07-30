import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const PricingPage = () => {
  const [billingType, setBillingType] = useState('monthly');

  const pricingPlans = [
    {
      id: 'silver',
      name: 'STARTUP',
      price: 'Rs. 30,000',
      period: '/month',
      features: [
        'Shared Workspace Access',
        'Basic Mentorship',
        'Networking Events',
        'Business Planning Support',
        'Community Resources',
        'Weekly Check-ins',
        'Basic Market Research',
        'Pitch Deck Review',
        'Digital Marketing Support',
        'Startup Workshop Access'
      ],
      buttonText: 'Choose plan',
      buttonVariant: 'secondary',
      isPopular: false,
      bgColor: 'bg-white',
      textColor: 'text-[#1d1d25]',
      borderColor: 'border-[#e9ecf2]'
    },
    {
      id: 'gold',
      name: 'GROWTH',
      price: 'Rs. 75,000',
      period: '/month',
      features: [
        'Private Office Space',
        'Dedicated Mentors',
        'Investor Introductions',
        'Business Model Validation',
        'Market Strategy Development',
        'Funding Preparation Support',
        'Legal & Accounting Advisory',
        'Marketing & PR Assistance',
        'Technical Resources Access',
        'Priority Workshop Enrollment'
      ],
      buttonText: 'Choose plan',
      buttonVariant: 'primary',
      isPopular: true,
      bgColor: 'bg-[#2a85ff]',
      textColor: 'text-white',
      borderColor: 'border-[#2a85ff]'
    },
    {
      id: 'premium',
      name: 'SCALE',
      price: 'Rs. 150,000',
      period: '/month',
      features: [
        'Executive Office Suite',
        'Strategic Advisory Board',
        'Direct Investor Access',
        'International Market Entry',
        'Corporate Partnership Intro',
        'Government Relations Support',
        'Export Market Development',
        'Media & PR Campaigns',
        'Technology Transfer Support',
        'Board Seat for Key Decisions'
      ],
      buttonText: 'Choose plan',
      buttonVariant: 'secondary',
      isPopular: false,
      bgColor: 'bg-white',
      textColor: 'text-[#1d1d25]',
      borderColor: 'border-[#e9ecf2]'
    }
  ];

  const workSteps = [
    {
      id: 1,
      icon: '/images/img_ic_simple.svg',
      iconBg: 'bg-[#b5e4ca]',
      title: 'Application & Selection',
      description: 'Apply online and go through our selection process'
    },
    {
      id: 2,
      icon: '/images/img_ic_layered.svg',
      iconBg: 'bg-[#ffbc99]',
      title: 'Onboarding & Planning',
      description: 'Get matched with mentors and create your roadmap'
    },
    {
      id: 3,
      icon: '/images/img_jet_plane_right.svg',
      iconBg: 'bg-[#cabdfe]',
      title: 'Growth & Acceleration',
      description: 'Execute your plan with ongoing support and resources'
    }
  ];

  return (
    <div className="w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full">
        <div className="w-full max-w-[1202px] mx-auto px-4 sm:px-6 lg:px-8 pt-[65px] sm:pt-[90px] lg:pt-[130px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Image */}
            <div className="hidden lg:block flex-shrink-0">
              <img 
                src="/images/img_smiling_1.png" 
                alt="Smiling person" 
                className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[142px] lg:h-[142px]"
              />
            </div>

            {/* Center Content */}
            <div className="flex-1 text-center relative">
              <div 
                className="bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-14 rounded-lg"
                style={{ backgroundImage: "url('/images/img_c.svg')" }}
              >
                <div className="max-w-[526px] mx-auto">
                  <h1 className="text-[30px] sm:text-[45px] lg:text-[60px] font-bold font-dm-sans leading-tight text-[#221c4e] mb-4">
                    Program Packages
                  </h1>
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium font-dm-sans leading-relaxed text-[#808d9e]">
                    Choose the right program package for your startup's current stage. All plans include access to our core resources and community network.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block flex-shrink-0">
              <img 
                src="/images/img_korean_love_1.png" 
                alt="Korean love" 
                className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[166px] lg:h-[166px]"
              />
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-white border border-[#e9ecf2] rounded-[8px] p-1 flex">
              <button
                onClick={() => setBillingType('monthly')}
                className={`px-6 sm:px-7 py-2.5 sm:py-3 text-[12px] sm:text-[14px] font-bold font-dm-sans rounded-[8px] transition-all ${
                  billingType === 'monthly' ?'bg-[#2a85ff] text-white' :'bg-transparent text-[#808d9e]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingType('yearly')}
                className={`px-6 sm:px-7 py-2.5 sm:py-3 text-[12px] sm:text-[14px] font-bold font-dm-sans rounded-[8px] transition-all ${
                  billingType === 'yearly' ?'bg-[#2a85ff] text-white' :'bg-transparent text-[#808d9e]'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mt-8 sm:mt-12 lg:mt-16 relative">
            {/* Most Popular Badge */}
            <div className="flex justify-center mb-4">
              <div className="bg-[#ffd88d] border-8 border-white rounded-[26px] px-6 sm:px-8 py-3 sm:py-4">
                <span className="text-[12px] sm:text-[14px] font-bold font-dm-sans text-[#1d1d25]">
                  MOST POPULAR
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 bg-white border border-[#e9ecf2] rounded-[26px] p-6 sm:p-8 lg:p-12 relative">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`${plan.bgColor} ${
                    plan.isPopular ? 'lg:-mt-6 lg:-mb-6' : ''
                  } ${
                    plan.isPopular ? 'rounded-[26px] p-6 sm:p-8 lg:p-12' : 'p-4 sm:p-6'
                  } ${
                    index === 1 ? 'lg:border-l lg:border-r lg:border-[#61a4ff]' : ''
                  } flex flex-col`}
                >
                  {/* Plan Header */}
                  <div className="mb-6">
                    <p className={`text-[12px] sm:text-[14px] font-bold font-dm-sans mb-2 ${
                      plan.isPopular ? 'text-[#ffffff7f]' : 'text-[#1d1d257f]'
                    }`}>
                      {plan.name}
                    </p>
                    <div className="flex items-end gap-1">
                      <span className={`text-[36px] sm:text-[42px] lg:text-[48px] font-bold font-dm-sans ${plan.textColor}`}>
                        {plan.price}
                      </span>
                      <span className={`text-[16px] sm:text-[18px] font-medium font-dm-sans mb-3 ${plan.textColor}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`w-full h-[1px] mb-6 ${
                    plan.isPopular ? 'bg-[#61a4ff]' : 'bg-[#f2f3fb]'
                  }`}></div>

                  {/* Features List */}
                  <div className="flex-1 space-y-4 sm:space-y-6 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <img 
                          src={plan.isPopular ? '/images/img_check_circle_1_gray_100.svg' : '/images/img_check_circle_1.svg'}
                          alt="Check" 
                          className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex-shrink-0"
                        />
                        <span className={`text-[12px] sm:text-[14px] font-normal font-dm-sans ${plan.textColor}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan.isPopular ? 'secondary' : 'secondary'}
                    size="medium"
                    className={`w-full rounded-[8px] ${
                      plan.isPopular 
                        ? 'bg-white text-[#2a85ff] hover:bg-gray-50' 
                        : 'bg-[#f2f3fb] text-[#2a85ff] hover:bg-[#e2e3eb]'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Coca Work Section */}
      <section className="w-full mt-[100px] sm:mt-[150px] lg:mt-[200px]">
        <div className="w-full max-w-[1202px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-[12px] sm:text-[14px] font-bold font-dm-sans text-[#82be6d] mb-2">
              OUR PROCESS
            </p>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-dm-sans text-[#1d1d25] leading-tight">
              How We Support Your Journey
            </h2>
          </div>

          {/* Content Grid */}
          <div className="bg-[#f9faff] rounded-[20px] p-6 sm:p-12 lg:p-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Side - Steps */}
              <div className="space-y-8 lg:space-y-12">
                {workSteps.map((step, index) => (
                  <div key={step.id}>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className={`${step.iconBg} rounded-[30px] p-4 sm:p-5 flex-shrink-0`}>
                        <img 
                          src={step.icon} 
                          alt={step.title}
                          className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold font-dm-sans text-[#1d1d25] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-medium font-dm-sans text-[#808d9e]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < workSteps.length - 1 && (
                      <div className="w-full h-[1px] bg-[#e9ecf2] mt-6 sm:mt-8"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side - CTA */}
              <div className="text-center lg:text-left">
                <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold font-dm-sans text-[#1d1d25] leading-tight mb-6 sm:mb-8">
                  Join Sri Lanka's leading startup hub!
                </h3>
                <p className="text-[14px] sm:text-[16px] font-medium font-dm-sans text-[#1d1d25] leading-relaxed mb-8 sm:mb-12 lg:mb-16">
                  We've helped over 80 startups grow and secure funding. Our network includes top mentors, investors, and industry leaders across Sri Lanka and beyond.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <p className="text-[20px] sm:text-[24px] font-bold font-dm-sans text-[#1d1d25] mb-1">
                      Start at Rs. 30,000
                    </p>
                    <p className="text-[12px] sm:text-[14px] font-normal font-dm-sans text-[#808d9e]">
                      for the Startup package
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="medium"
                    className="border border-[#808d9e] text-[#1d1d25] hover:bg-[#f9faff] rounded-[8px]"
                  >
                    See our pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mt-[100px] sm:mt-[150px] lg:mt-[200px]">
        <div className="w-full max-w-[1202px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a85ff] rounded-[20px] p-8 sm:p-12 lg:p-18">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              <div className="text-center lg:text-left flex-1">
                <p className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold font-dm-sans text-[#ffffff7f] mb-2">
                  Ready to grow your startup?
                </p>
                <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-dm-sans text-white leading-tight">
                  Apply to Lanka Innovators Hub today!
                </h2>
              </div>
              <div className="flex-shrink-0">
                <Button
                  variant="secondary"
                  size="large"
                  className="bg-white text-[#2a85ff] hover:bg-gray-50 rounded-[8px] px-6 sm:px-8 py-3 sm:py-4"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;