import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  id,
  label,
  options = [],
  value,
  onChange,
  required = false,
  placeholder = 'Select an option',
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
      <select
        id={id}
        name={id}
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
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default Select; 