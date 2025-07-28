import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-dm-sans font-bold rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-[#2a85ff] text-white hover:bg-[#1a75ef] focus:ring-blue-500',
    secondary: 'bg-[#f2f3fb] text-[#2a85ff] hover:bg-[#e2e3eb] focus:ring-blue-500',
    outline: 'border border-[#e9ecf2] text-[#1d1d25] hover:bg-[#f9faff] focus:ring-gray-300',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm',
    medium: 'px-6 py-2.5 text-sm sm:px-7 sm:py-3 sm:text-base',
    large: 'px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;