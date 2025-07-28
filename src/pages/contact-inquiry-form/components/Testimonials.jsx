import React from 'react';
import RatingBar from '../../../components/ui/RatingBar';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar: "/images/img_ellipse_37.png",
      text: "The Coca team exceeded our expectations. Their response was incredibly fast and the final design was exactly what we envisioned for our startup.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager, InnovateCorp",
      avatar: "/images/img_ellipse_37_1.png",
      text: "Professional, timely, and creative. The contact process was smooth and they delivered a comprehensive proposal within 48 hours.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCo",
      avatar: "/images/img_ellipse_37_2.png",
      text: "From first contact to final delivery, Coca maintained excellent communication. The 24-hour response guarantee is not just a promise - they deliver on it.",
      rating: 5
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[12px] sm:text-[14px] font-bold text-[#2a85ff] mb-4 tracking-wider">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#1d1d25] leading-tight">
            What our clients say about working with us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-[#f9faff] rounded-[20px] p-6 sm:p-8 border border-[#e9ecf2]"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-[60px] h-[60px] rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[18px] sm:text-[20px] font-bold text-[#1d1d25] mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[14px] text-[#808d9e]">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              
              <p className="text-[14px] sm:text-[16px] font-medium text-[#1d1d25] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              <RatingBar rating={testimonial.rating} size="medium" />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-[20px] p-8 shadow-[0px_20px_40px_#f2f3f7] border border-[#e9ecf2]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[36px] sm:text-[48px] font-bold text-[#2a85ff] mb-2">500+</div>
              <div className="text-[14px] sm:text-[16px] text-[#808d9e]">Happy Clients</div>
            </div>
            <div>
              <div className="text-[36px] sm:text-[48px] font-bold text-[#82be6d] mb-2">98%</div>
              <div className="text-[14px] sm:text-[16px] text-[#808d9e]">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-[36px] sm:text-[48px] font-bold text-[#ff6955] mb-2">6h</div>
              <div className="text-[14px] sm:text-[16px] text-[#808d9e]">Avg Response Time</div>
            </div>
            <div>
              <div className="text-[36px] sm:text-[48px] font-bold text-[#8e59ff] mb-2">1000+</div>
              <div className="text-[14px] sm:text-[16px] text-[#808d9e]">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;