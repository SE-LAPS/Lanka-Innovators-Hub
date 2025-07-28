import React, { useState } from 'react';

const SelectField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  error, 
  options, 
  placeholder, 
  required = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(name, option);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2 relative">
      <label className="block text-[16px] font-semibold text-[#1d1d25]">
        {label}
        {required && <span className="text-[#ff6955] ml-1">*</span>}
      </label>
      
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full px-4 py-3 border border-[#e9ecf2] rounded-[8px] 
            text-[16px] text-left bg-white
            focus:outline-none focus:ring-2 focus:ring-[#2a85ff] focus:border-transparent
            transition-all duration-200 flex items-center justify-between
            ${error ? 'border-[#ff6955] focus:ring-[#ff6955]' : ''}
            ${!value ? 'text-[#808d9e]' : 'text-[#1d1d25]'}
          `}
        >
          {value || placeholder}
          <img 
            src="/images/img_arrow_right.svg" 
            alt="Arrow" 
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#e9ecf2] rounded-[8px] shadow-[0px_20px_40px_#f2f3f7] z-50 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`
                  w-full px-4 py-3 text-left text-[16px] hover:bg-[#f9faff] 
                  transition-colors border-b border-[#f2f3fb] last:border-0
                  ${value === option ? 'bg-[#f9faff] text-[#2a85ff] font-medium' : 'text-[#1d1d25]'}
                `}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-[14px] text-[#ff6955] flex items-center gap-2">
          <span className="text-[12px]">⚠</span>
          {error}
        </p>
      )}
      
      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SelectField;