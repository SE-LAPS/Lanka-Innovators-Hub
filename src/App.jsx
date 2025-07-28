import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import Loader from './components/ui/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {loading ? <Loader /> : <Routes />}
    </>
  );
}

export default App;