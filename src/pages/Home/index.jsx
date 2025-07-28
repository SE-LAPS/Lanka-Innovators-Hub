import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import RatingBar from '../../components/ui/RatingBar';

const HomePage = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

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
            <img 
              src="/images/img_rectangle_6973.png" 
              alt="Design process" 
              className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-[12px] mx-auto mb-8"
            />
            
            <h2 className="text-[50px] sm:text-[60px] lg:text-[80px] font-bold text-[#1d1d25] leading-tight mb-8">
              Here we share our design process
            </h2>
            
            {/* Decorative elements */}
            <img 
              src="/images/img_vector_4_deep_purple_100.svg" 
              alt="Decoration" 
              className="absolute top-0 right-[20%] w-[80px] h-[80px] sm:w-[112px] sm:h-[108px]"
            />
            <img 
              src="/images/img_vector_teal_100.svg" 
              alt="Decoration" 
              className="absolute bottom-0 right-[10%] w-[32px] h-[32px] sm:w-[46px] sm:h-[46px]"
            />
            <img 
              src="/images/img_rectangle_6976.png" 
              alt="Design process" 
              className="absolute top-0 right-0 w-[200px] h-[80px] sm:w-[300px] sm:h-[124px] rounded-[12px]"
            />
          </div>

          {/* Process Steps */}
          <div className="relative">
            <img 
              src="/images/img_vector_light_blue_100.svg" 
              alt="Decoration" 
              className="absolute top-0 left-0 w-[48px] h-[48px] sm:w-[72px] sm:h-[72px]"
            />
            
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
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[6px] bg-gray-100 mb-16"></div>

            {/* Process Images */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
              <img 
                src="/images/img_rectangle_6974.png" 
                alt="Design process step" 
                className="w-full max-w-[250px] h-[200px] sm:h-[250px] object-cover rounded-[12px]"
              />
              <img 
                src="/images/img_rectangle_6975.png" 
                alt="Design process step" 
                className="w-full max-w-[250px] h-[140px] sm:h-[170px] object-cover rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Divider */}
          <div className="w-full h-[2px] bg-[#e9ecf2] mb-16"></div>

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

      <Footer />
    </div>
  );
};

export default HomePage;