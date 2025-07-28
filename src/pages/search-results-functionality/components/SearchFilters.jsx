import React from 'react';

const SearchFilters = ({ filters, onFilterChange, resultsCount }) => {
  const categories = [
    { value: 'all', label: 'All Results', count: resultsCount },
    { value: 'Web Design', label: 'Web Design', count: 0 },
    { value: 'Mobile Design', label: 'Mobile Design', count: 0 },
    { value: 'Case Study', label: 'Case Studies', count: 0 },
    { value: 'Article', label: 'Articles', count: 0 },
    { value: 'Pricing', label: 'Pricing', count: 0 },
    { value: 'Help', label: 'Help & Support', count: 0 }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'date', label: 'Most Recent' },
    { value: 'title', label: 'Alphabetical' }
  ];

  const dateRanges = [
    { value: 'all', label: 'Any Time' },
    { value: 'week', label: 'Past Week' },
    { value: 'month', label: 'Past Month' },
    { value: 'year', label: 'Past Year' }
  ];

  const handleFilterChange = (key, value) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <aside className="space-y-6">
      {/* Filters Header */}
      <div className="bg-white rounded-[16px] p-6 shadow-[0px_10px_30px_#f2f3f7] border border-[#e9ecf2]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] font-bold text-[#1d1d25]">Filters</h2>
          <button 
            onClick={() => onFilterChange({ category: 'all', sortBy: 'relevance', dateRange: 'all' })}
            className="text-[14px] text-[#2a85ff] hover:underline"
          >
            Clear All
          </button>
        </div>
        
        <div className="text-[14px] text-[#808d9e]">
          {resultsCount} result{resultsCount !== 1 ? 's' : ''} found
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-[16px] p-6 shadow-[0px_10px_30px_#f2f3f7] border border-[#e9ecf2]">
        <h3 className="text-[18px] font-semibold text-[#1d1d25] mb-4 flex items-center gap-2">
          <img src="/images/img_ic_layered.svg" alt="Category" className="w-5 h-5" />
          Category
        </h3>
        
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleFilterChange('category', category.value)}
              className={`
                w-full flex items-center justify-between p-3 rounded-[8px] text-left
                transition-all duration-200 text-[14px]
                ${filters.category === category.value
                  ? 'bg-[#f7f9ff] text-[#2a85ff] border border-[#2a85ff]'
                  : 'hover:bg-[#f9faff] text-[#1d1d25] border border-transparent'
                }
              `}
            >
              <span>{category.label}</span>
              {category.count > 0 && (
                <span className={`
                  px-2 py-1 rounded-full text-[12px] font-medium
                  ${filters.category === category.value
                    ? 'bg-[#2a85ff] text-white'
                    : 'bg-[#f2f3fb] text-[#808d9e]'
                  }
                `}>
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Filter */}
      <div className="bg-white rounded-[16px] p-6 shadow-[0px_10px_30px_#f2f3f7] border border-[#e9ecf2]">
        <h3 className="text-[18px] font-semibold text-[#1d1d25] mb-4 flex items-center gap-2">
          <img src="/images/img_ui_icon_arrow_up_down_filled.svg" alt="Sort" className="w-5 h-5" />
          Sort By
        </h3>
        
        <div className="space-y-2">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleFilterChange('sortBy', option.value)}
              className={`
                w-full flex items-center gap-3 p-3 rounded-[8px] text-left
                transition-all duration-200 text-[14px]
                ${filters.sortBy === option.value
                  ? 'bg-[#f7f9ff] text-[#2a85ff] border border-[#2a85ff]'
                  : 'hover:bg-[#f9faff] text-[#1d1d25] border border-transparent'
                }
              `}
            >
              <div className={`
                w-4 h-4 rounded-full border-2 flex items-center justify-center
                ${filters.sortBy === option.value ? 'border-[#2a85ff]' : 'border-[#e9ecf2]'}
              `}>
                {filters.sortBy === option.value && (
                  <div className="w-2 h-2 bg-[#2a85ff] rounded-full"></div>
                )}
              </div>
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Date Range Filter */}
      <div className="bg-white rounded-[16px] p-6 shadow-[0px_10px_30px_#f2f3f7] border border-[#e9ecf2]">
        <h3 className="text-[18px] font-semibold text-[#1d1d25] mb-4 flex items-center gap-2">
          <span className="text-[16px]">📅</span>
          Date Range
        </h3>
        
        <div className="space-y-2">
          {dateRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => handleFilterChange('dateRange', range.value)}
              className={`
                w-full flex items-center gap-3 p-3 rounded-[8px] text-left
                transition-all duration-200 text-[14px]
                ${filters.dateRange === range.value
                  ? 'bg-[#f7f9ff] text-[#2a85ff] border border-[#2a85ff]'
                  : 'hover:bg-[#f9faff] text-[#1d1d25] border border-transparent'
                }
              `}
            >
              <div className={`
                w-4 h-4 rounded border-2 flex items-center justify-center
                ${filters.dateRange === range.value ? 'border-[#2a85ff] bg-[#2a85ff]' : 'border-[#e9ecf2]'}
              `}>
                {filters.dateRange === range.value && (
                  <img src="/images/img_check_circle_1.svg" alt="Selected" className="w-3 h-3" />
                )}
              </div>
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Tips */}
      <div className="bg-gradient-to-br from-[#f9faff] to-[#f2f3fb] rounded-[16px] p-6 border border-[#e9ecf2]">
        <h3 className="text-[16px] font-semibold text-[#1d1d25] mb-3 flex items-center gap-2">
          <span className="text-[16px]">💡</span>
          Search Tips
        </h3>
        
        <ul className="space-y-2 text-[13px] text-[#808d9e]">
          <li className="flex items-start gap-2">
            <span className="text-[#82be6d] font-bold">•</span>
            Use quotes for exact phrases: "landing page"
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#82be6d] font-bold">•</span>
            Combine terms: mobile AND design
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#82be6d] font-bold">•</span>
            Use wildcards: design*
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#82be6d] font-bold">•</span>
            Search by tags: #ui-kit
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SearchFilters;