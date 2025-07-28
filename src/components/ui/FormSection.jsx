import React from 'react';
import PropTypes from 'prop-types';

const FormSection = ({
  title,
  children,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="border-b border-[#e9ecf2] pb-4 mb-8">
        <h2 className="text-xl font-bold text-[#1d1d25]">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

FormSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default FormSection; 