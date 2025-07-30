import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        <img 
          src="/images/img_footer_logo.png" 
          alt="Loading" 
          className="w-24 h-24"
          style={{
            animation: "loaderPulse 1.5s ease-in-out infinite"
          }}
        />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-[#2a85ff] rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div className="w-2 h-2 bg-[#2a85ff] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-[#2a85ff] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes loaderPulse {
            0% {
              transform: scale(0.95);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.05);
              opacity: 1;
            }
            100% {
              transform: scale(0.95);
              opacity: 0.7;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader; 