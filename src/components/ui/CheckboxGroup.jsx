import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const CheckboxGroup = ({
  label,
  options = [],
  selectedValues = [],
  onChange,
  required = false,
  className = '',
  error = '',
  name,
}) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    
    if (checked) {
      onChange([...selectedValues, value]);
    } else {
      onChange(selectedValues.filter(item => item !== value));
    }
  };

  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <p className="block text-sm font-medium text-[#1d1d25] mb-3">
          {label} {required && <span className="text-red-500">*</span>}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {options.map((option) => (
          <Checkbox
            key={option.value}
            id={`${name}-${option.value}`}
            name={name}
            label={option.label}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={handleCheckboxChange}
          />
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

CheckboxGroup.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  selectedValues: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default CheckboxGroup; 