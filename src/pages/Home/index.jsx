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

  const testimonials = [
    {
      id: 1,
      name: "Rakabuming Suhu",
      position: "CEO Sans Brothers",
      avatar: "/images/img_ellipse_37.png",
      text: "It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations."
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      position: "CEO Sans Brothers",
      avatar: "/images/img_ellipse_37_60x60.png",
      text: "It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations."
    },
    {
      id: 3,
      name: "Eleanor Pena",
      position: "CEO Sans Brothers",
      avatar: "/images/img_ellipse_37_1.png",
      text: "It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations."
    },
    {
      id: 4,
      name: "Zhafira Azalea",
      position: "CEO Sans Brothers",
      avatar: "/images/img_ellipse_37_2.png",
      text: "It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations."
    }
  ];

  const secondRowTestimonials = [
    {
      id: 5,
      name: "Ronald Richards",
      position: "CEO Sans Brothers",
      avatar: "/images/img_ellipse_37_3.png",
      text: "It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations."
    },
    {
      id: 6,
      name: "Rakabuming Suhu",
      position: "CEO Sans Brothers",
      avatar: "/images/img_ellipse_37_4.png",
      text: "It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations."
    },
    {
      id: 7,
      name: "Jerome Bell",
      position: "CEO Sans Brothers",
      avatar: "/images/img_ellipse_37_5.png",
      text: "It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations."
    },
    {
      id: 8,
      name: "Rakabuming Suhu",
      position: "CEO Sans Brothers",
      avatar: "/images/img_ellipse_37_6.png",
      text: "It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations."
    }
  ];

  // Slideshow effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

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
                Ready to Deliver Wonderfull digital product
              </h1>
              
              <p className="text-[16px] sm:text-[18px] font-medium text-[#1d1d25] leading-relaxed mb-8 sm:mb-10 max-w-[520px] mx-auto lg:mx-0">
                We help people to grow their business using coca landing page ui kit with professional and powerfull digital solution. Collaborate with our dedicated designers.
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
                
                {/* Earnings Card */}
                <div className="absolute top-[20%] right-0 bg-white rounded-[20px] p-6 shadow-[0px_40px_100px_#f2f3f7] max-w-[240px]">
                  <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1d1d25] mb-2">
                    Earnings
                  </h3>
                  <div className="flex items-end gap-4 mb-2">
                    <span className="text-[30px] sm:text-[36px] font-bold text-[#1d1d25]">
                      $32,019
                    </span>
                    <div className="flex items-center gap-1 mb-2">
                      <img src="/images/img_ui_icon_16_up.svg" alt="Up" className="w-4 h-4" />
                      <span className="text-[14px] font-bold text-[#82be6d]">37.8%</span>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#808d9e]">
                    Last year earning ($21,045)
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
                      <div className="text-[24px] sm:text-[30px] font-bold text-[#1d1d25]">289</div>
                      <div className="text-[14px] text-[#808d9e]">Items Downloaded</div>
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
                      <div className="text-[24px] sm:text-[30px] font-bold text-[#1d1d25]">687</div>
                      <div className="text-[14px] text-[#808d9e]">Deals this month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="w-full py-8 sm:py-12">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 opacity-60">
            <div className="flex items-center gap-3">
              <img src="/images/img_spotify.svg" alt="Spotify" className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]" />
              <img src="/images/img_text.svg" alt="Spotify Text" className="w-[76px] h-[20px] sm:w-[92px] sm:h-[24px]" />
            </div>
            <img src="/images/img_group_33157.png" alt="Slack" className="w-[120px] h-[30px] sm:w-[150px] sm:h-[38px]" />
            <div className="flex items-center gap-1">
              <img src="/images/img_vector.svg" alt="Envato" className="w-[20px] h-[24px] sm:w-[24px] sm:h-[28px]" />
              <img src="/images/img_vector_blue_gray_400.svg" alt="Envato Text" className="w-[110px] h-[26px] sm:w-[134px] sm:h-[32px]" />
            </div>
            <img src="/images/img_group_33157.png" alt="Google" className="w-[120px] h-[30px] sm:w-[150px] sm:h-[46px]" />
            <img src="/images/img_group_33157.png" alt="Netflix" className="w-[130px] h-[40px] sm:w-[162px] sm:h-[50px]" />
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
                    <span className="text-[12px] sm:text-[14px] text-[#1d1d25]">cocalanding.kit</span>
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
                        <img src="/images/img_coca.svg" alt="Coca" className="w-8 h-2" />
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
                          Stunning - Coca UI kit
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

      {/* Design Process Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 relative">
            <h2 className="text-[50px] sm:text-[60px] lg:text-[80px] font-bold text-[#1d1d25] leading-tight mb-8">
              Here we share our design process
            </h2>
            
            {/* Decorative elements removed */}
          </div>

          {/* Process Steps */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
              {/* Step 1 */}
              <div className="text-center lg:text-left">
                <div className="text-[60px] sm:text-[70px] lg:text-[80px] font-bold text-[#e9ecf2] leading-none mb-4">
                  01
                </div>
                <h3 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#1d1d25] leading-tight mb-4">
                  Research & Plan
                </h3>
                <p className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] leading-relaxed">
                  Design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later.
                </p>
                <div className="mt-6 opacity-80">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#2a85ff] font-medium">UX Research</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#2a85ff] font-medium">User Personas</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#2a85ff] font-medium">Market Analysis</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center lg:text-left">
                <div className="text-[60px] sm:text-[70px] lg:text-[80px] font-bold text-[#e9ecf2] leading-none mb-4">
                  02
                </div>
                <h3 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#1d1d25] leading-tight mb-4">
                  Mock Up
                </h3>
                <p className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] leading-relaxed">
                  Creating a mock up is the step of the design process most people recognize — it is the most visual part of the process In-depth sketching and brainstorming.
                </p>
                <div className="mt-6 opacity-80">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#2a85ff] font-medium">Wireframing</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#2a85ff] font-medium">UI Design</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#2a85ff] font-medium">Prototyping</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center lg:text-left">
                <div className="text-[60px] sm:text-[70px] lg:text-[80px] font-bold text-[#e9ecf2] leading-none mb-4">
                  03
                </div>
                <h3 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#1d1d25] leading-tight mb-4">
                  Build
                </h3>
                <p className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] leading-relaxed">
                  Implement the solution (often with the help of other professionals like programmers, printers, or manufacturers)Revise the solution as technical issues.
                </p>
                <div className="mt-6 opacity-80">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#2a85ff] font-medium">Frontend Development</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#2a85ff] font-medium">API Integration</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#2a85ff] font-medium">Testing & QA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[6px] bg-gray-100 mb-16"></div>
            
            {/* Web Tech Section */}
            <div className="bg-[#f9faff] rounded-2xl p-8 sm:p-10 mb-16">
              <h3 className="text-[24px] sm:text-[30px] font-bold text-center mb-8">Technologies We Use</h3>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white shadow-sm mb-2">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L1 7L12 12L23 7L12 2Z" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1 17L12 22L23 17" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1 12L12 17L23 12" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">React</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white shadow-sm mb-2">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 18V12" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 15H15" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Node.js</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white shadow-sm mb-2">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7H7.01" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">TailwindCSS</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white shadow-sm mb-2">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">API Design</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white shadow-sm mb-2">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Snippets Section */}
      <section className="w-full py-16 bg-[#f7f9ff]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d25] mb-6">Web Development Excellence</h2>
            <p className="text-lg text-[#808d9e] max-w-2xl mx-auto">
              We bring your ideas to life with clean, efficient, and maintainable code.
              Our development team follows industry best practices to deliver performant solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* React Component Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#1d1d25] text-white px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#ff6955] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffd88d] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#82be6d] rounded-full"></div>
                </div>
                <span className="text-sm opacity-70">React Component</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-[#1d1d25]">
                  <code>{`import React, { useState } from 'react';

const FeatureCard = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={\`p-6 rounded-lg transition-all \${
        isHovered 
          ? "bg-blue-50 shadow-lg" 
          : "bg-white"
      }\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;`}</code>
                </pre>
              </div>
            </div>
            
            {/* API Integration Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#1d1d25] text-white px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#ff6955] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffd88d] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#82be6d] rounded-full"></div>
                </div>
                <span className="text-sm opacity-70">API Integration</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-[#1d1d25]">
                  <code>{`// Data fetching with modern React
import { useState, useEffect } from 'react';

export function useProductData(categoryId) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          \`/api/products?category=\${categoryId}\`
        );
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [categoryId]);
  
  return { products, loading, error };
}`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium">Need help with your web development project? <a href="/contact-inquiry-form" className="text-[#2a85ff] underline ml-1">Contact our team</a></span>
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

          <div className="text-center mb-16">
            <h2 className="text-[50px] sm:text-[60px] lg:text-[80px] font-bold text-[#1d1d25] leading-tight">
              Customer said about coca
            </h2>
          </div>

          {/* First Row of Testimonials */}
          <div className="flex gap-6 sm:gap-8 lg:gap-12 overflow-x-auto pb-4 mb-8 sm:mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[400px] bg-[#f9faffab] rounded-[20px] p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-center gap-4 sm:gap-5 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[16px] sm:text-[20px] font-bold text-[#1d1d25] mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-[12px] sm:text-[14px] text-[#808d9e]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                
                <p className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                
                <RatingBar rating={5} size="medium" />
              </div>
            ))}
          </div>

          {/* Second Row of Testimonials */}
          <div className="flex gap-6 sm:gap-8 lg:gap-12 overflow-x-auto pb-4 mb-12">
            {secondRowTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[400px] bg-[#f9faffab] rounded-[20px] p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-center gap-4 sm:gap-5 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[16px] sm:text-[20px] font-bold text-[#1d1d25] mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-[12px] sm:text-[14px] text-[#808d9e]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                
                <p className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                
                <RatingBar rating={5} size="medium" />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            <div className="w-[60px] sm:w-[72px] h-[4px] sm:h-[6px] bg-[#2a85ff] rounded"></div>
            <div className="w-[60px] sm:w-[72px] h-[4px] sm:h-[6px] bg-[#f2f3fb] rounded"></div>
            <div className="w-[60px] sm:w-[72px] h-[4px] sm:h-[6px] bg-[#f2f3fb] rounded"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                  Get ready to build your own coca
                </h2>
                
                <p className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] mb-8">
                  Join thousand users and teams in the community
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
                    <div className="text-[28px] sm:text-[36px] font-bold text-[#1d1d25]">+28k</div>
                    <div className="text-[12px] sm:text-[14px] font-bold text-[#808d9e]">happy customer</div>
                  </div>
                </div>
                
                <Link to="/application-form">
                  <Button
                    variant="primary"
                    size="large"
                    className="rounded-[8px] px-8 py-3"
                  >
                    Apply Now
                  </Button>
                </Link>
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

      {/* Web Development Services Grid */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f9faff]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d25] mb-6">Web Development Services</h2>
            <p className="text-lg text-[#808d9e] max-w-2xl mx-auto">
              Comprehensive solutions for your digital transformation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-[#e6f3ff] rounded-xl mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Website Development</h3>
              <p className="text-[#808d9e] mb-4">
                Custom-built, responsive websites designed to engage visitors and drive conversions. From corporate websites to e-commerce platforms.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Responsive Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">SEO-Friendly Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#2a85ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Performance Optimization</span>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-[#e6fff0] rounded-xl mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16L16 12L12 8" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Application Development</h3>
              <p className="text-[#808d9e] mb-4">
                Complex web applications with rich functionality, from SaaS platforms to enterprise solutions tailored to your business needs.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">User Authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Database Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#25c277" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Real-time Features</span>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-[#fff4e6] rounded-xl mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#ff9533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#ff9533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">API Development</h3>
              <p className="text-[#808d9e] mb-4">
                Robust and scalable APIs to power your applications and integrate with third-party services. RESTful or GraphQL based on your needs.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#ff9533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">RESTful Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#ff9533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Authentication & Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#ff9533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">API Documentation</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/application-form">
              <Button
                variant="primary"
                size="large"
                className="rounded-[8px] px-10 py-4"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;