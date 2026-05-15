import { useState, useEffect } from 'react'
import Hero from './Hero'
import Loader from './Loader'
import Navbar from './Navbar'

function App() {
  // We use three states: 'loading', 'exiting', and 'done'
  const [loadingState, setLoadingState] = useState('loading'); 

  useEffect(() => {
    // Phase 1: Wait 3.5 seconds, then start the "Exit" animation
    const exitTimer = setTimeout(() => {
      setLoadingState('exiting');
      
      // Phase 2: Wait 1.2 seconds for the CSS transition to finish, then remove loader
      const doneTimer = setTimeout(() => {
        setLoadingState('done');
      }, 1200); // This matches the 1200ms duration in your Loader.jsx

      return () => clearTimeout(doneTimer);
    }, 3500); // 3500ms = 3.5 seconds to watch HELLO_WORLD_

    return () => clearTimeout(exitTimer);
  }, []);

  return (
    <div className="bg-[#0a0a16] min-h-screen font-sans">
      
      {/* The Loader shows until the state is 'done' */}
      {loadingState !== 'done' && (
        <Loader isExiting={loadingState === 'exiting'} />
      )}
      
      {/* The Navbar and Hero show up properly once loading is over */}
      <div className={loadingState === 'done' ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}>
        <Navbar />
        <Hero />
      </div>
      
    </div>
  )
}

export default App