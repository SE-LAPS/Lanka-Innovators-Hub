import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import SearchHeader from './components/SearchHeader';
import SearchResults from './components/SearchResults';
import SearchFilters from './components/SearchFilters';
import SearchSuggestions from './components/SearchSuggestions';

const SearchResultsFunctionality = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    sortBy: 'relevance',
    dateRange: 'all'
  });
  const [searchHistory, setSearchHistory] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Get initial query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query');
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [location.search]);

  // Mock data for search functionality
  const mockSearchData = [
    {
      id: 1,
      type: 'template',
      title: 'Stunning Landing Page Template',
      description: 'Modern and responsive landing page template perfect for startups and agencies. Includes all sections and components.',
      thumbnail: '/images/img_rectangle_6955.png',
      category: 'Web Design',
      date: '2024-01-15',
      tags: ['landing page', 'template', 'responsive'],
      url: '/templates/landing-page'
    },
    {
      id: 2,
      type: 'case-study',
      title: 'E-commerce Redesign Case Study',
      description: 'Complete redesign process for a major e-commerce platform, increasing conversion rates by 45%.',
      thumbnail: '/images/img_rectangle_6973.png',
      category: 'Case Study',
      date: '2024-01-10',
      tags: ['e-commerce', 'redesign', 'UX'],
      url: '/case-studies/ecommerce-redesign'
    },
    {
      id: 3,
      type: 'pricing',
      title: 'Design Service Pricing',
      description: 'Transparent pricing for all our design services. Choose from different packages based on your needs.',
      thumbnail: '/images/img_rectangle_6974.png',
      category: 'Pricing',
      date: '2024-01-08',
      tags: ['pricing', 'services', 'packages'],
      url: '/pricing'
    },
    {
      id: 4,
      type: 'article',
      title: 'UI Design Best Practices 2024',
      description: 'Latest trends and best practices in UI design. Learn how to create modern and user-friendly interfaces.',
      thumbnail: '/images/img_rectangle_6975.png',
      category: 'Article',
      date: '2024-01-05',
      tags: ['UI design', 'best practices', 'trends'],
      url: '/articles/ui-design-practices'
    },
    {
      id: 5,
      type: 'template',
      title: 'Mobile App UI Kit',
      description: 'Comprehensive UI kit for mobile apps with 50+ screens and components. Available in Figma and Sketch.',
      thumbnail: '/images/img_rectangle_6976.png',
      category: 'Mobile Design',
      date: '2024-01-03',
      tags: ['mobile', 'UI kit', 'app design'],
      url: '/templates/mobile-ui-kit'
    },
    {
      id: 6,
      type: 'help',
      title: 'How to Customize Templates',
      description: 'Step-by-step guide on how to customize our design templates to match your brand and requirements.',
      thumbnail: '/images/img_group_33125.png',
      category: 'Help',
      date: '2024-01-01',
      tags: ['tutorial', 'customization', 'templates'],
      url: '/help/customize-templates'
    },
    {
      id: 7,
      type: 'template',
      title: 'Lanka Innovators Hub Application Form',
      description: 'Apply for the Lanka Innovators Hub Core Program to accelerate your startup growth.',
      thumbnail: '/images/img_rectangle_6973.png',
      category: 'Program',
      date: '2024-01-20',
      tags: ['startup', 'accelerator', 'application', 'lanka innovators'],
      url: '/application-form'
    }
  ];

  const searchSuggestionsList = [
    'landing page template',
    'mobile app design',
    'e-commerce redesign',
    'UI design best practices',
    'pricing packages',
    'case studies',
    'design system',
    'brand identity',
    'user experience',
    'web development',
    'lanka innovators',
    'application form'
  ];

  // Perform search
  const performSearch = (query, currentFilters = filters) => {
    if (!query?.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Update URL with search query
    navigate(`/search-results-functionality?query=${encodeURIComponent(query)}`);
    
    // Simulate API call delay
    setTimeout(() => {
      let results = mockSearchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );

      // Apply filters
      if (currentFilters.category !== 'all') {
        results = results.filter(item => item.category === currentFilters.category);
      }

      // Sort results
      if (currentFilters.sortBy === 'date') {
        results.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (currentFilters.sortBy === 'title') {
        results.sort((a, b) => a.title.localeCompare(b.title));
      }

      setSearchResults(results);
      setIsSearching(false);

      // Add to search history if not already present
      if (query && !searchHistory.includes(query)) {
        setSearchHistory(prev => [query, ...prev.slice(0, 4)]);
      }
    }, 500);
  };

  // Handle search input change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    
    // Generate suggestions based on input
    if (query.length > 0) {
      const filteredSuggestions = searchSuggestionsList.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  // Handle search submit
  const handleSearchSubmit = (query = searchQuery) => {
    if (query?.trim()) {
      performSearch(query);
      setSuggestions([]);
    }
  };

  // Handle filter change
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    if (searchQuery) {
      performSearch(searchQuery, newFilters);
    }
  };

  // Load search history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('lanka-innovators-search-history');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
    
    // Perform initial search if query is present in URL
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query');
    if (queryParam) {
      performSearch(queryParam);
    }
  }, []);

  // Save search history to localStorage
  useEffect(() => {
    localStorage.setItem('lanka-innovators-search-history', JSON.stringify(searchHistory));
  }, [searchHistory]);

  return (
    <div className="w-full bg-white">
      <Header />
      
      <SearchHeader 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        suggestions={suggestions}
        searchHistory={searchHistory}
        onClearHistory={() => setSearchHistory([])}
      />
      
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <SearchFilters 
              filters={filters}
              onFilterChange={handleFilterChange}
              resultsCount={searchResults.length}
            />
          </aside>
          
          {/* Search Results */}
          <div className="lg:w-3/4">
            {searchQuery ? (
              <SearchResults 
                query={searchQuery}
                results={searchResults}
                isLoading={isSearching}
                filters={filters}
              />
            ) : (
              <SearchSuggestions 
                suggestions={searchSuggestionsList}
                searchHistory={searchHistory}
                onSuggestionClick={handleSearchSubmit}
              />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResultsFunctionality;