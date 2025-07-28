import React from 'react';

const ContactInfo = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f9faff]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#1d1d25] leading-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#808d9e]">
            Multiple ways to reach our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white rounded-[20px] p-8 text-center shadow-[0px_20px_40px_#f2f3f7]">
            <div className="w-16 h-16 bg-[#2a85ff] rounded-full flex items-center justify-center mx-auto mb-6">
              <img src="/images/img_submit.svg" alt="Email" className="w-8 h-8" />
            </div>
            <h3 className="text-[24px] font-bold text-[#1d1d25] mb-4">Email Us</h3>
            <p className="text-[16px] text-[#808d9e] mb-6">
              Send us an email and we'll respond within 24 hours
            </p>
            <a 
              href="mailto:hello@coca.design" 
              className="text-[18px] font-semibold text-[#2a85ff] hover:underline"
            >
              hello@coca.design
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-[20px] p-8 text-center shadow-[0px_20px_40px_#f2f3f7]">
            <div className="w-16 h-16 bg-[#82be6d] rounded-full flex items-center justify-center mx-auto mb-6">
              <img src="/images/img_frame_2.svg" alt="Phone" className="w-8 h-8" />
            </div>
            <h3 className="text-[24px] font-bold text-[#1d1d25] mb-4">Call Us</h3>
            <p className="text-[16px] text-[#808d9e] mb-6">
              Speak directly with our design consultants
            </p>
            <a 
              href="tel:+1234567890" 
              className="text-[18px] font-semibold text-[#2a85ff] hover:underline"
            >
              +1 (234) 567-890
            </a>
          </div>

          {/* Office */}
          <div className="bg-white rounded-[20px] p-8 text-center shadow-[0px_20px_40px_#f2f3f7]">
            <div className="w-16 h-16 bg-[#ffbc99] rounded-full flex items-center justify-center mx-auto mb-6">
              <img src="/images/img_path.svg" alt="Location" className="w-8 h-8" />
            </div>
            <h3 className="text-[24px] font-bold text-[#1d1d25] mb-4">Visit Us</h3>
            <p className="text-[16px] text-[#808d9e] mb-6">
              Come visit our office for an in-person consultation
            </p>
            <address className="text-[16px] text-[#1d1d25] not-italic">
              123 Design Street<br />
              Creative District<br />
              New York, NY 10001
            </address>
          </div>
        </div>

        {/* Response Time Guarantee */}
        <div className="bg-gradient-to-r from-[#2a85ff] to-[#61a4ff] rounded-[24px] p-8 sm:p-12 text-center text-white">
          <h3 className="text-[32px] sm:text-[40px] font-bold mb-4">
            24-Hour Response Guarantee
          </h3>
          <p className="text-[16px] sm:text-[18px] opacity-90 mb-8 max-w-[600px] mx-auto">
            We understand that time is crucial for your project. That's why we guarantee 
            a response to all inquiries within 24 hours, including weekends.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-[20px] font-bold">⚡</span>
              </div>
              <div className="text-left">
                <div className="text-[18px] font-semibold">Quick Response</div>
                <div className="text-[14px] opacity-80">Average 6 hours</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-[20px] font-bold">📞</span>
              </div>
              <div className="text-left">
                <div className="text-[18px] font-semibold">Follow-up Call</div>
                <div className="text-[14px] opacity-80">Within 48 hours</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-[20px] font-bold">📋</span>
              </div>
              <div className="text-left">
                <div className="text-[18px] font-semibold">Detailed Proposal</div>
                <div className="text-[14px] opacity-80">Within 3-5 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;