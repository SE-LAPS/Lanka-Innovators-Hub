import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search-results-functionality?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/images/Nav.png" 
              alt="Lanka Innovators Hub" 
              className="w-[100px] h-[30px] sm:w-[120px] sm:h-[36px] lg:w-[140px] lg:h-[42px]"
            />
          </Link>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-[#1d1d25] font-medium hover:text-[#2a85ff] transition-colors">
              Home
            </Link>
            <Link to="/application-form" className="text-[#1d1d25] font-medium hover:text-[#2a85ff] transition-colors">
              Apply
            </Link>
            <Link to="/pricing" className="text-[#1d1d25] font-medium hover:text-[#2a85ff] transition-colors">
              Pricing
            </Link>
            <Link to="/contact-inquiry-form" className="text-[#1d1d25] font-medium hover:text-[#2a85ff] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search and Auth */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[200px] px-4 py-2 rounded-full border border-[#e9ecf2] focus:outline-none focus:ring-2 focus:ring-[#2a85ff]"
                  />
                  <button type="submit" className="ml-2">
                    <img 
                      src="/images/img_search.svg" 
                      alt="Search" 
                      className="w-[20px] h-[20px]"
                    />
                  </button>
                  <button 
                    type="button" 
                    className="ml-2"
                    onClick={() => setSearchOpen(false)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#1d1d25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              ) : (
                <button onClick={() => setSearchOpen(true)}>
                  <img 
                    src="/images/img_search.svg" 
                    alt="Search" 
                    className="w-[24px] h-[24px]"
                  />
                </button>
              )}
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <Link to="/authentication-system-sign-in-sign-up">
                <Button
                  variant="secondary"
                  size="small"
                  className="rounded-[8px]"
                >
                  Sign In
                </Button>
              </Link>
              
              <Link to="/application-form">
                <Button
                  variant="primary"
                  size="small"
                  className="rounded-[8px]"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <img 
                src="/images/img_search.svg" 
                alt="Search" 
                className="w-[24px] h-[24px]"
              />
            </button>
            
            <button 
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#1d1d25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden py-4 border-t border-[#e9ecf2]">
            <form onSubmit={handleSearchSubmit}>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-[#e9ecf2] focus:outline-none focus:ring-2 focus:ring-[#2a85ff]"
                />
                <button 
                  type="submit"
                  className="bg-[#2a85ff] text-white p-2 rounded-lg"
                >
                  <img 
                    src="/images/img_search.svg" 
                    alt="Search" 
                    className="w-[20px] h-[20px]"
                  />
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-[#e9ecf2]">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-[#1d1d25] font-medium hover:text-[#2a85ff] transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/application-form" 
                className="text-[#1d1d25] font-medium hover:text-[#2a85ff] transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Apply
              </Link>
              <Link 
                to="/pricing" 
                className="text-[#1d1d25] font-medium hover:text-[#2a85ff] transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact-inquiry-form" 
                className="text-[#1d1d25] font-medium hover:text-[#2a85ff] transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="flex flex-col gap-4 pt-4 border-t border-[#e9ecf2]">
                <Link 
                  to="/authentication-system-sign-in-sign-up"
                  onClick={() => setMenuOpen(false)}
                >
                  <Button
                    variant="secondary"
                    size="medium"
                    className="w-full rounded-[8px]"
                  >
                    Sign In
                  </Button>
                </Link>
                
                <Link 
                  to="/application-form"
                  onClick={() => setMenuOpen(false)}
                >
                  <Button
                    variant="primary"
                    size="medium"
                    className="w-full rounded-[8px]"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;