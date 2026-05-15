import { useState, useEffect } from 'react'
import Hero from './Hero'
import Loader from './Loader'
import Navbar from './Navbar'
import About from './About' // <-- Correctly imported

function App() {
  const [loadingState, setLoadingState] = useState('loading'); 

  useEffect(() => {
    // Phase 1: Wait for the Loader text to finish
    const exitTimer = setTimeout(() => {
      setLoadingState('exiting');
      
      // Phase 2: Animation buffer before removing Loader from DOM
      const doneTimer = setTimeout(() => {
        setLoadingState('done');
      }, 1200); 

      return () => clearTimeout(doneTimer);
    }, 3500); 

    return () => clearTimeout(exitTimer);
  }, []);

  return (
    <div className="bg-[#0a0a16] min-h-screen font-sans">
      
      {/* 1. The Loader Layer */}
      {loadingState !== 'done' && (
        <Loader isExiting={loadingState === 'exiting'} />
      )}
      
      {/* 2. The Content Layer (Everything here fades in together) */}
      <div className={loadingState === 'done' ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}>
        <Navbar />
        
        <main>
          <Hero />
          <About /> 
          {/* Future sections (Projects, Contact) will go here too! */}
        </main>

      </div>
    </div>
  )
}

export default App