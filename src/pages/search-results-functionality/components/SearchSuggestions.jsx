import React from 'react';

const SearchSuggestions = ({ suggestions, searchHistory, onSuggestionClick }) => {
  const popularCategories = [
    {
      title: 'Design Templates',
      icon: '/images/img_rectangle_6955.png',
      color: 'bg-[#2a85ff]',
      items: ['Landing Pages', 'Mobile Apps', 'E-commerce', 'Portfolios']
    },
    {
      title: 'Case Studies',
      icon: '/images/img_rectangle_6973.png',
      color: 'bg-[#82be6d]',
      items: ['UX Research', 'Redesign Projects', 'Brand Identity', 'User Testing']
    },
    {
      title: 'Resources',
      icon: '/images/img_text.svg',
      color: 'bg-[#8e59ff]',
      items: ['Design Articles', 'Best Practices', 'Trends 2024', 'Tutorials']
    },
    {
      title: 'Support',
      icon: '/images/img_frame_2.svg',
      color: 'bg-[#ff6955]',
      items: ['Getting Started', 'Customization', 'Pricing Info', 'Contact Us']
    }
  ];

  const featuredContent = [
    {
      title: 'New Mobile UI Kit 2024',
      description: 'Latest mobile design components and patterns',
      thumbnail: '/images/img_rectangle_6976.png',
      badge: 'New',
      badgeColor: 'bg-[#82be6d]'
    },
    {
      title: 'E-commerce Redesign Case Study',
      description: 'How we increased conversion by 45%',
      thumbnail: '/images/img_rectangle_6973.png',
      badge: 'Popular',
      badgeColor: 'bg-[#2a85ff]'
    },
    {
      title: 'Design System Best Practices',
      description: 'Building scalable design systems',
      thumbnail: '/images/img_rectangle_6974.png',
      badge: 'Trending',
      badgeColor: 'bg-[#ff6955]'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Search History */}
      {searchHistory.length > 0 && (
        <section className="bg-white rounded-[16px] p-6 shadow-[0px_10px_30px_#f2f3f7] border border-[#e9ecf2]">
          <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1d1d25] mb-4 flex items-center gap-3">
            <span className="text-[24px]">🕒</span>
            Recent Searches
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {searchHistory.slice(0, 8).map((item, index) => (
              <button
                key={index}
                onClick={() => onSuggestionClick(item)}
                className="px-4 py-2 bg-[#f9faff] rounded-full text-[14px] text-[#2a85ff] border border-[#e9ecf2] hover:border-[#2a85ff] hover:shadow-[0px_8px_20px_#2a85ff20] transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Popular Categories */}
      <section className="space-y-6">
        <h2 className="text-[24px] sm:text-[32px] font-bold text-[#1d1d25] flex items-center gap-3">
          <span className="text-[32px]">🔥</span>
          Popular Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-[16px] p-6 shadow-[0px_10px_30px_#f2f3f7] border border-[#e9ecf2] hover:shadow-[0px_20px_40px_#f2f3f7] hover:border-[#2a85ff] transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center`}>
                  <img 
                    src={category.icon} 
                    alt={category.title} 
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-[20px] font-bold text-[#1d1d25]">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    onClick={() => onSuggestionClick(item)}
                    className="w-full text-left px-3 py-2 rounded-[8px] hover:bg-[#f9faff] transition-colors text-[#808d9e] text-[14px] hover:text-[#2a85ff]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      <section className="space-y-6">
        <h2 className="text-[24px] sm:text-[32px] font-bold text-[#1d1d25] flex items-center gap-3">
          <span className="text-[32px]">⭐</span>
          Featured Content
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <article 
              key={index}
              className="bg-white rounded-[16px] overflow-hidden shadow-[0px_10px_30px_#f2f3f7] border border-[#e9ecf2] hover:shadow-[0px_20px_40px_#f2f3f7] hover:border-[#2a85ff] transition-all duration-200 group cursor-pointer"
              onClick={() => onSuggestionClick(content.title)}
            >
              <div className="relative">
                <img 
                  src={content.thumbnail} 
                  alt={content.title}
                  className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 ${content.badgeColor} text-white text-[12px] font-semibold rounded-full`}>
                  {content.badge}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-[18px] font-bold text-[#1d1d25] mb-2 group-hover:text-[#2a85ff] transition-colors">
                  {content.title}
                </h3>
                <p className="text-[14px] text-[#808d9e] leading-relaxed">
                  {content.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Popular Searches */}
      <section className="bg-gradient-to-br from-[#f9faff] to-[#f2f3fb] rounded-[16px] p-6 border border-[#e9ecf2]">
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1d1d25] mb-4 flex items-center gap-3">
          <span className="text-[24px]">📈</span>
          Trending Searches
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {suggestions.slice(0, 8).map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSuggestionClick(suggestion)}
              className="flex items-center gap-3 p-3 bg-white rounded-[8px] hover:shadow-[0px_8px_20px_#f2f3f7] transition-all duration-200 text-left"
            >
              <div className="w-8 h-8 bg-[#f2f3fb] rounded-full flex items-center justify-center">
                <span className="text-[14px] font-bold text-[#2a85ff]">
                  {index + 1}
                </span>
              </div>
              <span className="text-[14px] text-[#1d1d25] font-medium">
                {suggestion}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-white rounded-[16px] p-6 shadow-[0px_10px_30px_#f2f3f7] border border-[#e9ecf2] text-center">
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1d1d25] mb-4">
          Can't find what you're looking for?
        </h2>
        <p className="text-[16px] text-[#808d9e] mb-6 max-w-[500px] mx-auto">
          Our search covers templates, case studies, articles, pricing, and help documentation. 
          Try different keywords or browse by category.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onSuggestionClick('help')}
            className="px-6 py-3 bg-[#2a85ff] text-white rounded-[8px] font-semibold hover:bg-[#1a75ef] transition-colors"
          >
            Browse Help Center
          </button>
          <button 
            onClick={() => onSuggestionClick('contact')}
            className="px-6 py-3 border border-[#e9ecf2] text-[#1d1d25] rounded-[8px] font-semibold hover:border-[#2a85ff] hover:text-[#2a85ff] transition-colors"
          >
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default SearchSuggestions;