import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  name,
  value,
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-start gap-2 mb-3">
      <input
        type="checkbox"
        id={id}
        name={name || id}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`mt-1 w-4 h-4 text-[#2a85ff] border-[#e9ecf2] rounded focus:ring-[#2a85ff] ${className}`}
        {...props}
      />
      {label && (
        <label htmlFor={id} className="text-sm text-[#1d1d25]">
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Checkbox; 