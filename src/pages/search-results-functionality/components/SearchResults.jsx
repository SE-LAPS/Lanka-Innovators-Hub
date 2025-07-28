import React from 'react';
import SearchResultCard from './SearchResultCard';

const SearchResults = ({ query, results, isLoading, filters }) => {
  const getTypeIcon = (type) => {
    const icons = {
      template: '/images/img_rectangle_6955.png',
      'case-study': '/images/img_rectangle_6973.png',
      pricing: '/images/img_path.svg',
      article: '/images/img_text.svg',
      help: '/images/img_frame_2.svg'
    };
    return icons[type] || '/images/img_search.svg';
  };

  const getTypeColor = (type) => {
    const colors = {
      template: 'bg-[#2a85ff]',
      'case-study': 'bg-[#82be6d]',
      pricing: 'bg-[#ff6955]',
      article: 'bg-[#8e59ff]',
      help: 'bg-[#ffbc99]'
    };
    return colors[type] || 'bg-[#808d9e]';
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[24px] sm:text-[28px] font-bold text-[#1d1d25]">
            Searching for "{query}"...
          </h2>
        </div>
        
        {/* Loading skeleton */}
        <div className="space-y-6">
          {[...Array(3)].map((_, index) => (
            <div 
              key={index}
              className="bg-white rounded-[16px] p-6 shadow-[0px_10px_30px_#f2f3f7] border border-[#e9ecf2] animate-pulse"
            >
              <div className="flex gap-6">
                <div className="w-[120px] h-[80px] bg-[#f2f3fb] rounded-[8px]"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-6 bg-[#f2f3fb] rounded w-3/4"></div>
                  <div className="h-4 bg-[#f2f3fb] rounded w-full"></div>
                  <div className="h-4 bg-[#f2f3fb] rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (results.length === 0 && query) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-[#f2f3fb] rounded-full flex items-center justify-center mx-auto mb-6">
          <img 
            src="/images/img_search.svg" 
            alt="No results" 
            className="w-12 h-12 opacity-40"
          />
        </div>
        
        <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1d1d25] mb-4">
          No results found
        </h2>
        
        <p className="text-[16px] sm:text-[18px] text-[#808d9e] mb-8 max-w-[500px] mx-auto">
          We couldn't find any results for "<strong>{query}</strong>". 
          Try adjusting your search terms or filters.
        </p>
        
        <div className="space-y-4">
          <div className="text-[16px] font-semibold text-[#1d1d25] mb-2">Try searching for:</div>
          <div className="flex flex-wrap justify-center gap-3">
            {['templates', 'case studies', 'pricing', 'UI design', 'mobile app'].map((suggestion) => (
              <span 
                key={suggestion}
                className="px-4 py-2 bg-[#f9faff] rounded-full text-[14px] text-[#2a85ff] border border-[#e9ecf2]"
              >
                {suggestion}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[24px] sm:text-[28px] font-bold text-[#1d1d25] mb-2">
            Search Results
          </h2>
          <p className="text-[16px] text-[#808d9e]">
            Found {results.length} result{results.length !== 1 ? 's' : ''} for "<strong>{query}</strong>"
          </p>
        </div>
        
        {/* Quick filters */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-[14px] text-[#808d9e]">Quick filter:</span>
          {['all', 'template', 'case-study', 'article'].map((type) => (
            <button
              key={type}
              className={`
                px-3 py-1 rounded-full text-[12px] font-medium border transition-all
                ${filters.category === type || (type === 'all' && filters.category === 'all')
                  ? 'bg-[#2a85ff] text-white border-[#2a85ff]' :'bg-white text-[#808d9e] border-[#e9ecf2] hover:border-[#2a85ff]'
                }
              `}
            >
              {type === 'all' ? 'All' : type.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>
      
      {/* Results by Category */}
      {results.length > 0 && (
        <div className="space-y-8">
          {/* Group results by category if showing all */}
          {filters.category === 'all' ? (
            (() => {
              const groupedResults = results.reduce((acc, result) => {
                const category = result.category;
                if (!acc[category]) acc[category] = [];
                acc[category].push(result);
                return acc;
              }, {});

              return Object.entries(groupedResults).map(([category, categoryResults]) => (
                <div key={category} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 ${getTypeColor(categoryResults[0].type)} rounded-full flex items-center justify-center`}>
                      <img 
                        src={getTypeIcon(categoryResults[0].type)} 
                        alt={category} 
                        className="w-4 h-4"
                      />
                    </div>
                    <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1d1d25]">
                      {category}
                    </h3>
                    <span className="text-[14px] text-[#808d9e]">
                      ({categoryResults.length})
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    {categoryResults.map((result) => (
                      <SearchResultCard key={result.id} result={result} query={query} />
                    ))}
                  </div>
                </div>
              ));
            })()
          ) : (
            // Show all results without grouping
            <div className="space-y-4">
              {results.map((result) => (
                <SearchResultCard key={result.id} result={result} query={query} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;