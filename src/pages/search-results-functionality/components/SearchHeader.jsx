import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchHeader = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  suggestions,
  searchHistory,
  onClearHistory
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const suggestionsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Get search query from URL if available
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query');
    if (queryParam) {
      setLocalQuery(queryParam);
      // Submit the search with the URL query
      onSearchSubmit(queryParam);
    }
  }, [location.search, onSearchSubmit]);

  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalQuery(value);
    onSearchChange(value);
    setShowSuggestions(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(localQuery);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    onSearchSubmit(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="bg-[#f9faff] py-8 sm:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[28px] sm:text-[36px] font-bold text-[#1d1d25] text-center mb-6">
            Search Results
          </h1>
          
          <div className="relative" ref={suggestionsRef}>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex items-center">
                <input 
                  type="text"
                  value={localQuery}
                  onChange={handleInputChange}
                  placeholder="Search for templates, resources, or articles..."
                  className="w-full px-5 py-3 sm:py-4 rounded-l-[8px] border-y border-l border-[#e9ecf2] focus:outline-none focus:ring-2 focus:ring-[#2a85ff] text-[#1d1d25]"
                  onFocus={() => setShowSuggestions(true)}
                />
                <button 
                  type="submit"
                  className="bg-[#2a85ff] text-white px-5 py-3 sm:py-4 rounded-r-[8px] hover:bg-[#1a75ef] transition-colors"
                >
                  <img src="/images/img_search_white.svg" alt="Search" className="w-5 h-5" />
                </button>
              </div>
            </form>
            
            {showSuggestions && (localQuery || searchHistory.length > 0) && (
              <div className="absolute w-full bg-white rounded-[8px] shadow-lg z-10 border border-[#e9ecf2] mt-1">
                {searchHistory.length > 0 && (
                  <div className="p-4 border-b border-[#e9ecf2]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[14px] font-bold text-[#808d9e]">Recent Searches</h3>
                      <button 
                        onClick={onClearHistory}
                        className="text-[12px] text-[#2a85ff] hover:text-[#1a75ef] transition-colors"
                      >
                        Clear All
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      {searchHistory.map((item, index) => (
                        <div 
                          key={`history-${index}`}
                          className="flex items-center justify-between cursor-pointer p-2 hover:bg-[#f9faff] rounded-[4px]"
                          onClick={() => handleSuggestionClick(item)}
                        >
                          <div className="flex items-center gap-3">
                            <img src="/images/img_clock.svg" alt="Recent" className="w-4 h-4 opacity-50" />
                            <span className="text-[14px] text-[#1d1d25]">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {suggestions.length > 0 && (
                  <div className="p-4">
                    <h3 className="text-[14px] font-bold text-[#808d9e] mb-2">Suggestions</h3>
                    <div className="space-y-2">
                      {suggestions.map((suggestion, index) => (
                        <div 
                          key={`suggestion-${index}`}
                          className="flex items-center cursor-pointer p-2 hover:bg-[#f9faff] rounded-[4px]"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          <img src="/images/img_search.svg" alt="Search" className="w-4 h-4 opacity-50 mr-3" />
                          <span className="text-[14px] text-[#1d1d25]">{suggestion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

SearchHeader.propTypes = {
  searchQuery: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  suggestions: PropTypes.array,
  searchHistory: PropTypes.array,
  onClearHistory: PropTypes.func
};

export default SearchHeader;