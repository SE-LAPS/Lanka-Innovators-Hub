import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({
  id,
  label,
  name,
  value,
  checked,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`w-4 h-4 text-[#2a85ff] border-[#e9ecf2] focus:ring-[#2a85ff] ${className}`}
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

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Radio; 