import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  className = '',
  error = '',
  ...props
}) => {
  return (
    <div className="mb-6">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-[#1d1d25] mb-2"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full px-4 py-3 rounded-md border ${error ? 'border-red-500' : 'border-[#e9ecf2]'}
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-all duration-200 bg-white text-[#1d1d25]
          ${className}
        `.trim()}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default Input; 