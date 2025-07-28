import React from 'react';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  icon,
  className = ''
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-[14px] font-medium text-[#1d1d25]">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img src={icon} alt="" className="w-4 h-4 opacity-50" />
          </div>
        )}
        
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 
            ${icon ? 'pl-11' : 'pl-4'} 
            border-2 rounded-[8px] 
            text-[14px] text-[#1d1d25] 
            placeholder-[#808d9e] 
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-[#2a85ff] focus:ring-opacity-20
            ${error 
              ? 'border-[#dc2626] bg-[#fff5f5]' 
              : 'border-[#e9ecf2] bg-white hover:border-[#d1d5db] focus:border-[#2a85ff]'
            }
          `}
        />
      </div>
      
      {error && (
        <p className="text-[12px] text-[#dc2626] flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;