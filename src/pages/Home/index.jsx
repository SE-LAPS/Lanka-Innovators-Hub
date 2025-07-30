import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import RatingBar from '../../components/ui/RatingBar';

const HomePage = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  // Slideshow functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Lanka Innovators testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya Jayawardena",
      position: "CEO & Co-Founder, HealthConnect.lk",
      avatar: "/images/img_ellipse_37.png",
      text: "Lanka Innovators Hub provided the exact support we needed to refine our business model and connect with key healthcare partners across Sri Lanka. The mentorship was invaluable."
    },
    {
      id: 2,
      name: "Amith Perera",
      position: "Founder, EcoGrow AgriTech",
      avatar: "/images/img_ellipse_37_60x60.png",
      text: "The mentors at Lanka Innovators Hub helped us navigate the complexities of the agriculture market and secure our first round of funding. We've now reached over 750 farmers."
    },
    {
      id: 3,
      name: "Malsha Fernando",
      position: "Co-Founder, EduLanka",
      avatar: "/images/img_ellipse_37_1.png",
      text: "Thanks to Lanka Innovators Hub, we were able to pivot our education platform and scale to serve 50,000+ students across Sri Lanka during the pandemic."
    },
    {
      id: 4,
      name: "Dilshan Rodrigo",
      position: "Founder, GreenEnergy Solutions",
      avatar: "/images/img_ellipse_37_2.png",
      text: "The network and resources provided by Lanka Innovators Hub were crucial in helping us secure partnerships with major energy companies and expand our solar solutions."
    }
  ];

  return (
    <div className="w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12 sm:py-16 lg:py-20">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold text-[#1d1d25] leading-tight mb-6 sm:mb-8">
                Empowering Sri Lankan Innovators
              </h1>
              
              <p className="text-[16px] sm:text-[18px] font-medium text-[#1d1d25] leading-relaxed mb-8 sm:mb-10 max-w-[520px] mx-auto lg:mx-0">
                We help startups and entrepreneurs across Sri Lanka accelerate their growth with mentorship, funding, and a supportive ecosystem to create global impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/application-form">
                  <Button
                    variant="primary"
                    size="large"
                    className="rounded-[8px] px-8 py-4"
                  >
                    Apply Now
                  </Button>
                </Link>
                
                <button className="flex items-center justify-center gap-4 px-6 py-3 border border-[#e9ecf2] rounded-[8px] bg-white text-[#2a85ff] font-bold hover:bg-[#f9faff] transition-colors">
                  <img src="/images/img_playcircle.svg" alt="Play" className="w-6 h-6" />
                  Watch Our Profile
                </button>
              </div>
            </div>
            
            {/* Right Content - Hero Image with Cards */}
            <div className="flex-1 relative">
              <div className="relative">
                {/* Background Shape */}
                <img 
                  src="/images/img_c_gray_100.svg" 
                  alt="Background" 
                  className="w-full max-w-[518px] mx-auto"
                />
                
                {/* Main Hero Image */}
                <img 
                  src="/images/img_young_woman_sit.png" 
                  alt="Young woman sitting" 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[550px] h-auto"
                />
                
                {/* Success Rate Card */}
                <div className="absolute top-[20%] right-0 bg-white rounded-[20px] p-6 shadow-[0px_40px_100px_#f2f3f7] max-w-[240px]">
                  <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1d1d25] mb-2">
                    Success Rate
                  </h3>
                  <div className="flex items-end gap-4 mb-2">
                    <span className="text-[30px] sm:text-[36px] font-bold text-[#1d1d25]">
                      85%
                    </span>
                    <div className="flex items-center gap-1 mb-2">
                      <img src="/images/img_ui_icon_16_up.svg" alt="Up" className="w-4 h-4" />
                      <span className="text-[14px] font-bold text-[#82be6d]">15.2%</span>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#808d9e]">
                    Startup survival rate
                  </p>
                </div>
                
                {/* Stats Card */}
                <div className="absolute bottom-0 left-0 bg-white rounded-[20px] p-6 shadow-[0px_40px_100px_#f2f3f7] max-w-[280px]">
                  <div className="flex items-center gap-6 mb-6">
                    <img 
                      src="/images/img_chart.png" 
                      alt="Chart" 
                      className="w-[70px] h-[70px] rounded-[20px]"
                    />
                    <div>
                      <div className="text-[24px] sm:text-[30px] font-bold text-[#1d1d25]">120+</div>
                      <div className="text-[14px] text-[#808d9e]">Startups Accelerated</div>
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-[#e9ecf2] mb-6"></div>
                  
                  <div className="flex items-center gap-6">
                    <img 
                      src="/images/img_chart_gray_100.png" 
                      alt="Chart" 
                      className="w-[70px] h-[70px] rounded-[20px]"
                    />
                    <div>
                      <div className="text-[24px] sm:text-[30px] font-bold text-[#1d1d25]">$8.5M</div>
                      <div className="text-[14px] text-[#808d9e]">Funding Secured</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


            {/* Build Exclusively Section */}
      <section className="w-full bg-[#2a85ff] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <img 
            src="/images/img_vector_4.svg" 
            alt="Background decoration" 
            className="absolute top-0 right-[10%] w-[120px] h-[120px] sm:w-[172px] sm:h-[164px]"
          />
          <img 
            src="/images/img_vector_deep_orange_200.svg" 
            alt="Background decoration" 
            className="absolute bottom-0 left-[5%] w-[60px] h-[60px] sm:w-[92px] sm:h-[92px]"
          />
        </div>

        {/* Browser Window Mockup */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative max-w-[1200px] mx-auto">
            {/* Browser Header */}
            <div className="bg-[#1d1d25] rounded-t-[24px] p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#ff6955] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffd88d] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#82be6d] rounded-full"></div>
                </div>
                
                <div className="flex-1 max-w-md mx-4">
                  <div className="bg-[#f7f9ff] rounded-[5px] px-4 py-1 flex items-center gap-2">
                    <img src="/images/img_vector_white_a700_16x14.svg" alt="Lock" className="w-3 h-4" />
                    <span className="text-[12px] sm:text-[14px] text-[#1d1d25]">lankainnovators.lk</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <img src="/images/img_vector_white_a700_18x14.svg" alt="Menu" className="w-3 h-4" />
                  <img src="/images/img_vector_white_a700_14x14.svg" alt="Settings" className="w-3 h-3" />
                  <img src="/images/img_vector_white_a700_16x16.svg" alt="Profile" className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Browser Content */}
            <div className="bg-[#f9faff] rounded-b-[24px] p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* User Active Card */}
                <div className="bg-[#1d1d25] rounded-[20px] p-5 text-center">
                  <img src="/images/img_group_3109.svg" alt="Users" className="w-9 h-9 mx-auto mb-3" />
                  <div className="text-[30px] sm:text-[36px] font-bold text-white mb-1">50k</div>
                  <div className="text-[14px] text-[#e9ecf2]">User Active</div>
                </div>

                {/* Chat Interface */}
                <div className="lg:col-span-2 bg-white rounded-[8px] p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <img src="/images/img_avatar_1_2_2.png" alt="Avatar" className="w-12 h-12 rounded-[22px]" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <img src="/images/img_group_33107.png" alt="Status" className="w-4 h-4" />
                        <img src="/images/img_coca.svg" alt="Lanka Innovators" className="w-8 h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-2 bg-[#f2f3fb] rounded"></div>
                        <div className="w-2/3 h-2 bg-[#f2f3fb] rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full h-2 bg-[#f2f3fb] rounded"></div>
                    ))}
                  </div>
                </div>

                {/* Search and Product Card */}
                <div className="space-y-4">
                  <div className="bg-white rounded-[8px] p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 bg-[#f2f3fb] rounded flex items-center justify-center">
                        <img src="/images/img_search.svg" alt="Search" className="w-4 h-4" />
                      </div>
                      <span className="text-[16px] sm:text-[20px] font-bold text-[#d3d5e3]">Search here</span>
                    </div>
                    
                    <div className="bg-white rounded-[16px] p-3 shadow-[0px_60px_100px_#edeff8] flex items-center gap-3">
                      <img src="/images/img_rectangle_6955.png" alt="Product" className="w-12 h-12 rounded-[8px]" />
                      <div className="flex-1">
                        <div className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d25] mb-1">
                          Lanka Innovators Platform
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d25]">$1,920.80</span>
                          <span className="text-[10px] sm:text-[12px] font-bold text-[#82be6d] bg-[#eafae4] px-2 py-1 rounded">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cards */}
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-white rounded-[16px] p-4 shadow-[0px_60px_100px_#edeff8] flex items-center gap-6">
                  <img src="/images/img_ellipse_250.png" alt="User" className="w-12 h-12 rounded-full" />
                  <div className="space-y-2">
                    <div className="w-32 h-2 bg-[#f2f3fb] rounded"></div>
                    <div className="w-20 h-2 bg-[#f2f3fb] rounded"></div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-[18px] sm:text-[20px] font-bold text-[#1d1d25] flex items-center gap-2">
                        198
                        <div className="w-3 h-3 bg-[#8e59ff] rounded"></div>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <img src="/images/img_ui_icon_16_up_deep_orange_400.svg" alt="Down" className="w-4 h-4" />
                        <span className="text-[14px] font-bold text-[#ff6955]">2.4%</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[18px] sm:text-[20px] font-bold text-[#1d1d25] flex items-center gap-2">
                        263
                        <div className="w-3 h-3 bg-[#ffbc99] rounded"></div>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <img src="/images/img_ui_icon_16_up.svg" alt="Up" className="w-4 h-4" />
                        <span className="text-[14px] font-bold text-[#82be6d]">37.8%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[16px] p-4 shadow-[0px_60px_100px_#edeff8] flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ffbc99] rounded-full flex items-center justify-center">
                    <img src="/images/img_ellipse_251.png" alt="User" className="w-12 h-12 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-24 h-2 bg-[#f2f3fb] rounded"></div>
                    <div className="w-16 h-2 bg-[#f2f3fb] rounded"></div>
                  </div>
                </div>

                <div className="bg-white rounded-[20px] p-4 shadow-[0px_40px_100px_#f2f3f7]">
                  <div className="w-12 h-12 bg-[#b0e5fc] rounded-[24px] flex items-center justify-center mb-6">
                    <img src="/images/img_ui_icon_arrow_up_down_filled.svg" alt="Engagement" className="w-6 h-6" />
                  </div>
                  <div className="text-[14px] font-bold text-[#808d9e] mb-2">Engagement</div>
                  <div className="text-[40px] sm:text-[48px] font-bold text-[#1d1d25] mb-4">20k</div>
                  <div className="flex items-center gap-2">
                    <img src="/images/img_ui_icon_16_up.svg" alt="Up" className="w-4 h-4" />
                    <span className="text-[14px] font-bold">
                      <span className="text-[#82be6d]">37.8%</span>
                      <span className="text-[#808d9e]"> this week</span>
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-[20px] p-4 shadow-[0px_40px_100px_#f5f6f9] flex-1 min-w-[300px]">
                  <div className="text-[18px] sm:text-[20px] font-bold text-[#1d1d25] mb-6">Product views</div>
                  <div className="flex items-end gap-3 h-32">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-6 bg-[#b5e4ca] rounded"></div>
                      <span className="text-[12px] sm:text-[14px] font-bold text-[#808d9e]">Mo</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 relative">
                      <div className="w-8 h-24 bg-[#2a85ff] rounded"></div>
                      <span className="text-[12px] sm:text-[14px] font-bold text-[#808d9e]">Tu</span>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#1d1d25] rounded-[8px] px-2 py-1 text-[10px] sm:text-[12px] text-white whitespace-nowrap">
                        Tuesday
                        <div className="flex items-center gap-1 mt-1">
                          <div className="w-2 h-2 bg-[#2a85ff] rounded"></div>
                          <span className="font-bold">550k</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-16 bg-[#b0e5fc] rounded"></div>
                      <span className="text-[12px] sm:text-[14px] font-bold text-[#808d9e]">We</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-4 bg-[#ffbc99] rounded"></div>
                      <span className="text-[12px] sm:text-[14px] font-bold text-[#808d9e]">Th</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-10 bg-[#b5e4ca] rounded"></div>
                      <span className="text-[12px] sm:text-[14px] font-bold text-[#808d9e]">Fr</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-14 bg-[#2a85ff] rounded"></div>
                      <span className="text-[12px] sm:text-[14px] font-bold text-[#808d9e]">Sa</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-12 bg-[#b5e4ca] rounded"></div>
                      <span className="text-[12px] sm:text-[14px] font-bold text-[#808d9e]">Su</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-[12px] sm:text-[14px] font-bold text-[#ffd88d] mb-4 tracking-wider">
              PRODUCT OVERVIEW
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16">
              <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-white leading-tight flex-1">
                Build<br />Exclusively
              </h2>
              <p className="text-[16px] sm:text-[18px] font-medium text-[#e6e9ed] leading-relaxed max-w-[500px]">
                Donec bibendum, dui id ultrices molestie, neque neque porta felis, id viverra ligula justo interdum mi. Nunc malesuada, risus consec maximus consequat, purus enim ultricies nisi, quis ornare.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
            <div>
              <div className="text-[60px] sm:text-[70px] lg:text-[80px] font-bold text-white leading-none mb-2">
                300+
              </div>
              <div className="text-[16px] sm:text-[18px] font-medium text-white">
                PRODUCTS
              </div>
            </div>
            
            <div>
              <div className="text-[60px] sm:text-[70px] lg:text-[80px] font-bold text-white leading-none mb-2">
                85
              </div>
              <div className="text-[16px] sm:text-[18px] font-medium text-white">
                WEB TEMPLATE
              </div>
            </div>
            
            <div>
              <div className="text-[60px] sm:text-[70px] lg:text-[80px] font-bold text-white leading-none mb-2">
                215
              </div>
              <div className="text-[16px] sm:text-[18px] font-medium text-white">
                MOBILE TEMPLATE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Lanka Innovators Hub Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f9faff]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d25] mb-6">About Lanka Innovators Hub</h2>
            <p className="text-lg text-[#808d9e] max-w-3xl mx-auto">
              Lanka Innovators Hub is Sri Lanka's premier startup accelerator, dedicated to empowering local entrepreneurs 
              and connecting them with the resources, mentorship, and funding they need to build globally competitive startups.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-[#e6f3ff] rounded-xl mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3.09 8.26L12 14L20.91 8.26L12 2Z" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.09 15.74L12 22L20.91 15.74" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.09 8.26L12 14.5L20.91 8.26" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-[#808d9e]">
                To create a thriving entrepreneurial ecosystem in Sri Lanka that empowers innovative startups to solve local problems and compete on a global scale.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-[#e6fff0] rounded-xl mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-[#808d9e]">
                To position Sri Lanka as a leading innovation hub in South Asia, fostering breakthrough technologies that drive economic growth and social impact.
              </p>
            </div>
            
            {/* Impact */}
            <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-[#fff0e6] rounded-xl mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#ff6b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Impact</h3>
              <p className="text-[#808d9e]">
                Over 120 startups accelerated, $8.5M in funding secured, 1,500+ jobs created, and countless innovations that are transforming industries across Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d25] mb-6">Our Programs</h2>
            <p className="text-lg text-[#808d9e] max-w-2xl mx-auto">
              Comprehensive support at every stage of your startup journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Core Program */}
            <div className="bg-gradient-to-br from-[#2a85ff] to-[#1a6bff] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-xl">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Lanka Innovators Core</h3>
                  <p className="text-blue-100">6-Month Flagship Accelerator</p>
                </div>
              </div>
              
              <p className="text-blue-50 mb-6">
                Our intensive flagship program for early-stage startups ready to scale. Get investment-ready with expert mentorship, 
                funding opportunities, and access to our extensive network.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Weekly mentor sessions & workshops</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Up to $50K seed funding consideration</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Demo Day presentation opportunity</span>
                </div>
              </div>
              
              <Link to="/application-form">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#2a85ff]">
                  Apply for Core Program
                </Button>
              </Link>
            </div>
            
            {/* Plus Program */}
            <div className="bg-white border-2 border-[#e9ecf2] rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-[#e6fff0] rounded-xl">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1d1d25]">Lanka Innovators Plus</h3>
                  <p className="text-[#808d9e]">Extended 12-Month Support</p>
                </div>
              </div>
              
              <p className="text-[#808d9e] mb-6">
                Continued support for Core program graduates and growth-stage startups. Focus on scaling operations, 
                market expansion, and preparing for Series A funding.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-[#1d1d25]">Strategic advisory & board support</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-[#1d1d25]">International market access</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-[#1d1d25]">Follow-on funding connections</span>
                </div>
              </div>
              
              <Button variant="outline" className="border-[#25c277] text-[#25c277] hover:bg-[#25c277] hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Additional Programs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-[#f9faff] rounded-xl">
              <h4 className="font-bold text-lg mb-2">Startup Discovery Bootcamp</h4>
              <p className="text-sm text-[#808d9e]">3-day intensive for aspiring entrepreneurs to validate ideas and build founding teams</p>
            </div>
            <div className="text-center p-6 bg-[#f9faff] rounded-xl">
              <h4 className="font-bold text-lg mb-2">Lanka Launch Academy</h4>
              <p className="text-sm text-[#808d9e]">8-week pre-accelerator program for early-stage startups to build their MVP</p>
            </div>
            <div className="text-center p-6 bg-[#f9faff] rounded-xl">
              <h4 className="font-bold text-lg mb-2">Open Office Sessions</h4>
              <p className="text-sm text-[#808d9e]">Weekly mentor office hours and networking events open to the startup community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sri Lankan Startup Excellence Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f7f9ff]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d25] mb-6">Sri Lankan Startup Excellence</h2>
            <p className="text-lg text-[#808d9e] max-w-2xl mx-auto">
              Our startups are building innovative solutions with clean, efficient, and scalable technology to address local and global challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Success Story Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#1d1d25] text-white px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#ff6955] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffd88d] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#82be6d] rounded-full"></div>
                </div>
                <span className="text-sm opacity-70">HealthTech Success Story</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-[#1d1d25]">
                  <code>{`// HealthConnect.lk - Healthcare Platform
Founded: 2023
Founders: Priya Jayawardena, Amith Perera

Key Metrics:
- 45+ hospitals connected across Sri Lanka
- 300+ doctors on platform
- 25,000+ monthly active users
- Rs. 12M in funding secured

Technology Stack:
- React Native mobile application
- Node.js backend services
- MongoDB database
- AWS cloud infrastructure
- AI-powered doctor matching algorithm

Impact:
- Reduced patient wait times by 40%
- Improved healthcare access in rural areas
- Created 50+ jobs in health tech sector`}</code>
                </pre>
              </div>
            </div>
            
            {/* Success Story Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#1d1d25] text-white px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#ff6955] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffd88d] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#82be6d] rounded-full"></div>
                </div>
                <span className="text-sm opacity-70">AgriTech Impact Story</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-[#1d1d25]">
                  <code>{`// EcoGrow - Sustainable Agriculture Startup
Founded: 2022
Impact Areas:
- Rural farmer income increased by 32%
- Reduced water usage by 40% through smart irrigation
- Connected 750 small-scale farmers to export markets
- Created 120 new jobs across 5 districts

Key Innovation:
IoT-powered microclimate monitoring system adapted 
for Sri Lankan growing conditions, with mobile app
in Sinhala, Tamil, and English interfaces.

Awards:
- National Agri Innovation Award 2024
- UNSDG Impact Award 2023

Next milestone: Expanding to 10 more districts in 2025`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium">Need help with your startup idea? <a href="/contact-inquiry-form" className="text-[#2a85ff] underline ml-1">Contact our team</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Testimonials Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d25] mb-6">What Our Founders Say</h2>
            <p className="text-lg text-[#808d9e] max-w-2xl mx-auto">
              Hear from the entrepreneurs who have transformed their ideas into successful businesses through Lanka Innovators Hub
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#1d1d25]">{testimonial.name}</h4>
                    <p className="text-sm text-[#808d9e]">{testimonial.position}</p>
                  </div>
                </div>
                
                <p className="text-[#808d9e] leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#ffd700" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Ecosystem Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f9faff]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d25] mb-6">Our Partners & Ecosystem</h2>
            <p className="text-lg text-[#808d9e] max-w-2xl mx-auto">
              We work with leading organizations to provide comprehensive support for Sri Lankan startups
            </p>
          </div>
          
          {/* Partner Logos - Infinite Scroll Animation */}
          <div className="overflow-hidden mb-16">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex flex-shrink-0 items-center gap-12">
                {/* Google */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                    alt="Google" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Microsoft */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
                    alt="Microsoft" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Amazon Web Services */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                    alt="AWS" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Meta */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
                    alt="Meta" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* IBM */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                    alt="IBM" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Salesforce */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" 
                    alt="Salesforce" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Oracle */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" 
                    alt="Oracle" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Intel */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" 
                    alt="Intel" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex flex-shrink-0 items-center gap-12 ml-12">
                {/* Google */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                    alt="Google" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Microsoft */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
                    alt="Microsoft" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Amazon Web Services */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                    alt="AWS" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Meta */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
                    alt="Meta" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* IBM */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                    alt="IBM" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Salesforce */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" 
                    alt="Salesforce" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Oracle */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" 
                    alt="Oracle" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Intel */}
                <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm min-w-[200px] h-[100px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" 
                    alt="Intel" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-bold text-xl mb-3">Government Support</h4>
              <p className="text-[#808d9e]">Working with the Ministry of Technology and key government agencies to support startup-friendly policies and initiatives.</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-xl mb-3">Corporate Partners</h4>
              <p className="text-[#808d9e]">Connecting startups with leading corporations for pilot programs, partnerships, and market validation opportunities.</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-xl mb-3">International Network</h4>
              <p className="text-[#808d9e]">Access to global accelerators, investors, and markets through our international partnership network.</p>
            </div>
          </div>
        </div>
      </section>

{/* Testimonials Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Divider */}
          <div className="w-full h-[2px] bg-[#e9ecf2] mb-16"></div>

          {/* Image Slideshow */}
          <div className="relative w-full h-[300px] sm:h-[400px] mb-16 overflow-hidden rounded-2xl">
            <div className="slideshow-container w-full h-full flex">
              {/* Slide 1 */}
              <div 
                className={`slide absolute w-full h-full transition-opacity duration-1000 ${
                  currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transform: `translateX(${currentSlide === 0 ? '0%' : currentSlide < 0 ? '-100%' : '100%'})`,
                  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Project Showcase" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
                  <div className="text-white ml-8 sm:ml-12 max-w-md">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Creative Design Process</h3>
                    <p className="text-sm sm:text-base opacity-90">Our approach to transforming ideas into visual reality</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 2 */}
              <div 
                className={`slide absolute w-full h-full transition-opacity duration-1000 ${
                  currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transform: `translateX(${currentSlide === 1 ? '0%' : currentSlide < 1 ? '-100%' : '100%'})`,
                  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Project Showcase" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
                  <div className="text-white ml-8 sm:ml-12 max-w-md">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Innovative Solutions</h3>
                    <p className="text-sm sm:text-base opacity-90">Pushing boundaries with forward-thinking design</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 3 */}
              <div 
                className={`slide absolute w-full h-full transition-opacity duration-1000 ${
                  currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transform: `translateX(${currentSlide === 2 ? '0%' : currentSlide < 2 ? '-100%' : '100%'})`,
                  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Project Showcase" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
                  <div className="text-white ml-8 sm:ml-12 max-w-md">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Attention to Detail</h3>
                    <p className="text-sm sm:text-base opacity-90">Every pixel matters in our design philosophy</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 4 */}
              <div 
                className={`slide absolute w-full h-full transition-opacity duration-1000 ${
                  currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transform: `translateX(${currentSlide === 3 ? '0%' : currentSlide < 3 ? '-100%' : '100%'})`,
                  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Project Showcase" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
                  <div className="text-white ml-8 sm:ml-12 max-w-md">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Customer-Centric Design</h3>
                    <p className="text-sm sm:text-base opacity-90">Putting user needs at the center of everything we create</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 5 */}
              <div 
                className={`slide absolute w-full h-full transition-opacity duration-1000 ${
                  currentSlide === 4 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transform: `translateX(${currentSlide === 4 ? '0%' : currentSlide < 4 ? '-100%' : '100%'})`,
                  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Project Showcase" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
                  <div className="text-white ml-8 sm:ml-12 max-w-md">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Collaborative Process</h3>
                    <p className="text-sm sm:text-base opacity-90">Working together with clients to bring ideas to life</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 6 */}
              <div 
                className={`slide absolute w-full h-full transition-opacity duration-1000 ${
                  currentSlide === 5 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transform: `translateX(${currentSlide === 5 ? '0%' : currentSlide < 5 ? '-100%' : '100%'})`,
                  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Project Showcase" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
                  <div className="text-white ml-8 sm:ml-12 max-w-md">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Data-Driven Decisions</h3>
                    <p className="text-sm sm:text-base opacity-90">Using analytics to perfect our design strategy</p>
                  </div>
                </div>
              </div>
            </div>
           
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 transition-colors rounded-full p-2 z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 transition-colors rounded-full p-2 z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {[...Array(totalSlides)].map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-opacity ${
                    currentSlide === index ? 'bg-white opacity-100' : 'bg-white opacity-50'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
          
      {/* Startup Support Services Grid */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d25] mb-6">Startup Support Services</h2>
            <p className="text-lg text-[#808d9e] max-w-2xl mx-auto">
              Comprehensive solutions for your entrepreneurial journey in Sri Lanka
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-[#e9ecf2]">
              <div className="w-16 h-16 flex items-center justify-center bg-[#e6f3ff] rounded-xl mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Incubation Program</h3>
              <p className="text-[#808d9e] mb-4">
                Our 6-month incubation program provides early-stage Sri Lankan startups with workspace, mentorship, and resources to validate ideas and build MVPs.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Dedicated Workspace</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Expert Mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Networking Events</span>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-[#e9ecf2]">
              <div className="w-16 h-16 flex items-center justify-center bg-[#e6fff0] rounded-xl mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16L16 12L12 8" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Acceleration Program</h3>
              <p className="text-[#808d9e] mb-4">
                For startups with traction, our acceleration program offers investment opportunities, strategic partnerships, and market expansion support across Sri Lanka and beyond.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Investment Readiness</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Market Expansion</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Strategic Partnerships</span>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-[#e9ecf2]">
              <div className="w-16 h-16 flex items-center justify-center bg-[#fff0e6] rounded-xl mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#ff6b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#ff6b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#ff6b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#ff6b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Global Market Access</h3>
              <p className="text-[#808d9e] mb-4">
                Connect Sri Lankan innovations with international markets through our global partner network, investment showcases, and cross-border collaboration opportunities.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#ff6b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">International Partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#ff6b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Cross-border Collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#ff6b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Export Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Join Lanka Innovators Hub Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Divider */}
          <div className="w-full h-[2px] bg-[#e9ecf2] mb-16"></div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative">
            {/* Left Image */}
            <img 
              src="/images/img_korean_love_1_166x166.png" 
              alt="Korean love" 
              className="w-[120px] h-[120px] sm:w-[166px] sm:h-[166px] object-cover"
            />

            {/* Center Content */}
            <div 
              className="flex-1 text-center bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 rounded-[20px] relative"
              style={{ backgroundImage: "url('/images/img_c.svg')" }}
            >
              <div className="relative z-10">
                <h2 className="text-[50px] sm:text-[60px] lg:text-[80px] font-bold text-[#1d1d25] leading-tight mb-8">
                  Join Lanka Innovators Hub today
                </h2>
                
                <p className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] mb-8">
                Connect with Sri Lanka's most promising founders and investors
                </p>
                
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="flex items-center">
                    <img src="/images/img_ellipse_38.png" alt="User" className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full border-2 border-white" />
                    <img src="/images/img_ellipse_39.png" alt="User" className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full border-2 border-white -ml-3" />
                    <img src="/images/img_ellipse_40.png" alt="User" className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full border-2 border-white -ml-3" />
                    <img src="/images/img_ellipse_41.png" alt="User" className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full border-2 border-white -ml-3" />
                    <img src="/images/img_ellipse_42.png" alt="User" className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full border-2 border-white -ml-3" />
                  </div>
                  
                  <div className="text-left">
                    <div className="text-[28px] sm:text-[36px] font-bold text-[#1d1d25]">+350</div>
                    <div className="text-[12px] sm:text-[14px] font-bold text-[#808d9e]">entrepreneurs</div>
                  </div>
                </div>

                
                
                <Link to="/application-form">
                  <Button
                    variant="primary"
                    size="large"
                    className="rounded-[8px] px-8 py-3 mb-6"
                  >
                    Apply Now
                  </Button>
                </Link>
                
                <div className="text-center">
                  <p className="text-sm text-[#808d9e] mb-2">Next cohort starts October 2025</p>
                  <p className="text-sm text-[#808d9e]">Early application deadline: June 1, 2025</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <img 
              src="/images/img_smiling_1_102x102.png" 
              alt="Smiling" 
              className="w-[80px] h-[80px] sm:w-[102px] sm:h-[102px] object-cover"
            />

            {/* Decorative Image */}
            <img 
              src="/images/img_stareyes_1.png" 
              alt="Star eyes" 
              className="absolute top-4 right-4 w-[60px] h-[60px] sm:w-[86px] sm:h-[86px]"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;