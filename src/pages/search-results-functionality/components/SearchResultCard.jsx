import React from 'react';

const SearchResultCard = ({ result, query }) => {
  const getTypeColor = (type) => {
    const colors = {
      template: 'text-[#2a85ff] bg-[#f7f9ff]',
      'case-study': 'text-[#82be6d] bg-[#f0f9f0]',
      pricing: 'text-[#ff6955] bg-[#fff5f5]',
      article: 'text-[#8e59ff] bg-[#f5f3ff]',
      help: 'text-[#ffbc99] bg-[#fff8f5]'
    };
    return colors[type] || 'text-[#808d9e] bg-[#f2f3fb]';
  };

  const highlightText = (text, searchQuery) => {
    if (!searchQuery) return text;
    
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-[#ffd88d] text-[#1d1d25] px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <article className="bg-white rounded-[16px] p-6 shadow-[0px_10px_30px_#f2f3f7] border border-[#e9ecf2] hover:shadow-[0px_20px_40px_#f2f3f7] hover:border-[#2a85ff] transition-all duration-200 group">
      <div className="flex gap-6">
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          <img 
            src={result.thumbnail} 
            alt={result.title}
            className="w-[120px] h-[80px] sm:w-[140px] sm:h-[90px] object-cover rounded-[8px] group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className={`px-2 py-1 rounded-full text-[12px] font-medium ${getTypeColor(result.type)}`}>
                {result.type.replace('-', ' ')}
              </span>
              <span className="text-[12px] text-[#808d9e]">
                {formatDate(result.date)}
              </span>
            </div>
            
            <button className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f9faff] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <img 
                src="/images/img_arrow_right.svg" 
                alt="View" 
                className="w-4 h-4"
              />
            </button>
          </div>
          
          {/* Title */}
          <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1d1d25] mb-2 line-clamp-2 group-hover:text-[#2a85ff] transition-colors">
            <a href={result.url} className="hover:underline">
              {highlightText(result.title, query)}
            </a>
          </h3>
          
          {/* Description */}
          <p className="text-[14px] sm:text-[16px] text-[#808d9e] leading-relaxed mb-4 line-clamp-2">
            {highlightText(result.description, query)}
          </p>
          
          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Tags */}
            <div className="flex items-center gap-2">
              {result.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-[#f2f3fb] text-[#808d9e] text-[12px] rounded-full"
                >
                  #{tag}
                </span>
              ))}
              {result.tags.length > 3 && (
                <span className="text-[12px] text-[#808d9e]">
                  +{result.tags.length - 3} more
                </span>
              )}
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-2">
              <a 
                href={result.url}
                className="text-[14px] font-semibold text-[#2a85ff] hover:underline"
              >
                View →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SearchResultCard;