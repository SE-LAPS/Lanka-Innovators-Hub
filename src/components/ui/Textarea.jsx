import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  id,
  label,
  placeholder = '',
  value,
  onChange,
  required = false,
  rows = 4,
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
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
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

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  rows: PropTypes.number,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default Textarea; 