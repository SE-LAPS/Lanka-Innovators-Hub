import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import SocialLoginButtons from './components/SocialLoginButtons';

const AuthenticationSystem = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <Header />
      
      {/* Main Authentication Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            
            {/* Left Side - Branding & Visual */}
            <div className="flex-1 text-center lg:text-left">
              <div className="relative mb-8">
                <img 
                  src="/images/img_coca.svg" 
                  alt="Coca Logo" 
                  className="w-[120px] h-[40px] mx-auto lg:mx-0 mb-6"
                />
                
                <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#1d1d25] leading-tight mb-6">
                  {isSignUp ? 'Join the Coca Community' : 'Welcome Back to Coca'}
                </h1>
                
                <p className="text-[16px] sm:text-[18px] font-medium text-[#808d9e] leading-relaxed mb-8 max-w-[480px] mx-auto lg:mx-0">
                  {isSignUp 
                    ? 'Create your account and start building amazing digital products with our professional design platform.'
                    : 'Sign in to access your dashboard and continue working on your digital products.'
                  }
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#2a85ff] opacity-10 rounded-full"></div>
                <div className="absolute bottom-0 left-[20%] w-[60px] h-[60px] bg-[#ffd88d] opacity-20 rounded-full"></div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <img src="/images/img_check_circle_1.svg" alt="Check" className="w-5 h-5" />
                  <span className="text-[14px] sm:text-[16px] text-[#1d1d25]">
                    Access to 300+ premium templates
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <img src="/images/img_check_circle_1.svg" alt="Check" className="w-5 h-5" />
                  <span className="text-[14px] sm:text-[16px] text-[#1d1d25]">
                    Collaborative design tools
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <img src="/images/img_check_circle_1.svg" alt="Check" className="w-5 h-5" />
                  <span className="text-[14px] sm:text-[16px] text-[#1d1d25]">
                    Priority customer support
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Authentication Form */}
            <div className="flex-1 max-w-[500px] w-full">
              <div className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0px_40px_100px_#f2f3f7] border border-[#e9ecf2]">
                
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h2 className="text-[28px] sm:text-[32px] font-bold text-[#1d1d25] mb-4">
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </h2>
                  
                  <p className="text-[14px] sm:text-[16px] text-[#808d9e]">
                    {isSignUp 
                      ? 'Fill in your details to get started' :'Enter your credentials to access your account'
                    }
                  </p>
                </div>

                {/* Social Login */}
                <SocialLoginButtons />

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-[1px] bg-[#e9ecf2]"></div>
                  <span className="text-[14px] text-[#808d9e] font-medium">or</span>
                  <div className="flex-1 h-[1px] bg-[#e9ecf2]"></div>
                </div>

                {/* Authentication Forms */}
                {isSignUp ? <SignUpForm /> : <SignInForm />}

                {/* Toggle Auth Mode */}
                <div className="text-center mt-8 pt-6 border-t border-[#e9ecf2]">
                  <p className="text-[14px] sm:text-[16px] text-[#808d9e] mb-2">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  </p>
                  <button
                    onClick={toggleAuthMode}
                    className="text-[14px] sm:text-[16px] font-bold text-[#2a85ff] hover:text-[#1a6bdb] transition-colors"
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </div>
              </div>

              {/* Terms & Privacy */}
              <div className="text-center mt-6">
                <p className="text-[12px] sm:text-[14px] text-[#808d9e] leading-relaxed">
                  By continuing, you agree to our{' '}
                  <Link to="/terms" className="text-[#2a85ff] hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-[#2a85ff] hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuthenticationSystem;