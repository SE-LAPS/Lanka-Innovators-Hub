import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ 
  rating = 5, 
  maxRating = 5, 
  size = 'medium',
  color = '#ffd88d',
  emptyColor = '#e9ecf2',
  className = '',
  ...props 
}) => {
  const sizes = {
    small: 'w-3 h-3 sm:w-4 sm:h-4',
    medium: 'w-4 h-4 sm:w-5 sm:h-5',
    large: 'w-5 h-5 sm:w-6 sm:h-6',
  };
  
  const stars = [];
  
  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= rating;
    stars.push(
      <svg
        key={i}
        className={`${sizes[size]} transition-colors duration-200`}
        fill={isFilled ? color : emptyColor}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  
  return (
    <div className={`flex items-center gap-1 ${className}`} role="img" aria-label={`${rating} out of ${maxRating} stars`}>
      {stars}
    </div>
  );
};

RatingBar.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  emptyColor: PropTypes.string,
  className: PropTypes.string,
};

export default RatingBar;