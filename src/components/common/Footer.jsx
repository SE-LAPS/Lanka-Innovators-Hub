import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-[100px] sm:mt-[150px] lg:mt-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Border Line */}
        <div className="w-full h-[2px] bg-[#f2f3fb]"></div>
        
        <div className="py-12 sm:py-16 lg:py-20">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/images/img_footer_logo.png" 
                alt="Coca Logo" 
                className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] lg:w-[60px] lg:h-[60px]"
              />
            </Link>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <p className="text-[16px] sm:text-[18px] font-medium text-[#808d9e] text-center sm:text-left">
                Ready to get started?
              </p>
              <Button
                variant="primary"
                size="medium"
                className="rounded-[8px] px-6 py-3 sm:px-8 sm:py-3"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[#e9ecf2] mb-8 sm:mb-12"></div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1d1d25] leading-tight mb-6 sm:mb-8">
                Subscribe to our newsletter
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#1d1d2519] pb-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 text-[14px] sm:text-[16px] font-medium text-[#808d9e7f] bg-transparent border-none outline-none placeholder-[#808d9e7f]"
                  />
                  <button className="ml-4">
                    <img 
                      src="/images/img_submit.svg" 
                      alt="Submit" 
                      className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="text-[14px] sm:text-[16px] font-bold text-[#2a85ff] mb-4 sm:mb-6">
                Services
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link to="/email-marketing" className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] hover:text-[#2a85ff] transition-colors">
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/campaigns" className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] hover:text-[#2a85ff] transition-colors">
                    Campaigns
                  </Link>
                </li>
                <li>
                  <Link to="/branding" className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] hover:text-[#2a85ff] transition-colors">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link to="/offline" className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] hover:text-[#2a85ff] transition-colors">
                    Offline
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div>
              <h4 className="text-[14px] sm:text-[16px] font-bold text-[#2a85ff] mb-4 sm:mb-6">
                About
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link to="/our-story" className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] hover:text-[#2a85ff] transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/benefits" className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] hover:text-[#2a85ff] transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] hover:text-[#2a85ff] transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] hover:text-[#2a85ff] transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h4 className="text-[14px] sm:text-[16px] font-bold text-[#2a85ff] mb-4 sm:mb-6">
                Help
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link to="/faqs" className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] hover:text-[#2a85ff] transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] hover:text-[#2a85ff] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-[14px] sm:text-[16px] font-medium text-[#808d9e] text-center sm:text-left">
              ©2025 - <a href="https://techxdoz.com" target="_blank" rel="noopener noreferrer" className="text-[#2a85ff] hover:underline">TECHXDOZ</a> Design
            </p>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <Link to="/facebook" className="hover:opacity-75 transition-opacity">
                <img 
                  src="/images/img_path.svg" 
                  alt="Facebook" 
                  className="w-[6px] h-[14px] sm:w-[8px] sm:h-[18px]"
                />
              </Link>
              <Link to="/twitter" className="hover:opacity-75 transition-opacity">
                <img 
                  src="/images/img_path_blue_gray_400.svg" 
                  alt="Twitter" 
                  className="w-[18px] h-[12px] sm:w-[22px] sm:h-[16px]"
                />
              </Link>
              <Link to="/instagram" className="hover:opacity-75 transition-opacity">
                <img 
                  src="/images/img_004_instagram.svg" 
                  alt="Instagram" 
                  className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;