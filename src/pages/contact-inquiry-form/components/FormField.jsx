import React from 'react';

const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  placeholder, 
  required = false,
  rows = 4
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  const baseInputClasses = `
    w-full px-4 py-3 border border-[#e9ecf2] rounded-[8px] 
    text-[16px] text-[#1d1d25] placeholder-[#808d9e]
    focus:outline-none focus:ring-2 focus:ring-[#2a85ff] focus:border-transparent
    transition-all duration-200
    ${error ? 'border-[#ff6955] focus:ring-[#ff6955]' : ''}
  `;

  return (
    <div className="space-y-2">
      <label className="block text-[16px] font-semibold text-[#1d1d25]">
        {label}
        {required && <span className="text-[#ff6955] ml-1">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          className={`${baseInputClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={baseInputClasses}
        />
      )}
      
      {error && (
        <p className="text-[14px] text-[#ff6955] flex items-center gap-2">
          <span className="text-[12px]">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;