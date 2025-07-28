import React from 'react';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#f9faff] to-[#f2f3fb]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          {/* Decorative elements */}
          <img 
            src="/images/img_vector_4_deep_purple_100.svg" 
            alt="Decoration" 
            className="absolute top-0 right-[10%] w-[80px] h-[80px] sm:w-[112px] sm:h-[108px] opacity-60"
          />
          <img 
            src="/images/img_vector_teal_100.svg" 
            alt="Decoration" 
            className="absolute bottom-0 left-[15%] w-[32px] h-[32px] sm:w-[46px] sm:h-[46px] opacity-60"
          />
          
          <div className="text-[12px] sm:text-[14px] font-bold text-[#2a85ff] mb-4 tracking-wider">
            GET IN TOUCH
          </div>
          
          <h1 className="text-[50px] sm:text-[60px] lg:text-[80px] font-bold text-[#1d1d25] leading-tight mb-8">
            Ready to start your project with Coca?
          </h1>
          
          <p className="text-[16px] sm:text-[18px] font-medium text-[#808d9e] leading-relaxed mb-12 max-w-[600px] mx-auto">
            Let's discuss your design needs and create something amazing together. 
            Our team responds within 24 hours to all project inquiries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-[#82be6d]">
              <img src="/images/img_check_circle_1.svg" alt="Check" className="w-5 h-5" />
              <span className="text-[14px] sm:text-[16px] font-medium">24h Response Time</span>
            </div>
            <div className="flex items-center gap-2 text-[#82be6d]">
              <img src="/images/img_check_circle_1.svg" alt="Check" className="w-5 h-5" />
              <span className="text-[14px] sm:text-[16px] font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-[#82be6d]">
              <img src="/images/img_check_circle_1.svg" alt="Check" className="w-5 h-5" />
              <span className="text-[14px] sm:text-[16px] font-medium">Professional Team</span>
            </div>
          </div>
          
          <Button
            variant="primary"
            size="large"
            className="rounded-[8px] px-8 py-4"
            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
          >
            Fill the form
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;