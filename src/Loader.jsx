import { useState, useEffect } from 'react';

export default function Loader({ isExiting }) {
  const skills = [
    "/python.png", "/react.png", "/javascript.png", "/flask.png",
    "/opencv.png", "/java.png", "/cpp.png", "/figma.png"
  ];
  
  const avatars = ["/avatar-1.png", "/avatar-2.png", "/avatar-3.png"];
  
  const [loadingText, setLoadingText] = useState("WAKING_UP...");
  const [currentAvatar, setCurrentAvatar] = useState(0);

  // 1. Text Logic: Stops on HELLO_WORLD_
  useEffect(() => {
    const messages = ["MOUNTING_FILESYSTEM...", "LOADING_CORE_MODULES...", "STARTING_KERNEL...", "HELLO_WORLD_"];
    let i = 0;
    const textInterval = setInterval(() => {
      i++;
      if (i < messages.length) {
        setLoadingText(messages[i]);
      } else {
        clearInterval(textInterval);
      }
    }, 700); 
    return () => clearInterval(textInterval);
  }, []);
  // 2. Avatar Logic: Cycles expressions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvatar((prev) => (prev + 1) % avatars.length);
    }, 800); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#0a0a16] flex items-center justify-center overflow-hidden transition-all duration-[1200ms] ease-in-out ${
        isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Cyber Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-pink-600/15 to-purple-600/15 blur-[120px] rounded-full"></div>

      <div className="relative w-64 h-64 flex items-center justify-center">
        
        {/* Physical Orbit Ring */}
        <div className="absolute w-[240px] h-[240px] border-2 border-dashed border-pink-500/30 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.1)] animate-[spin_15s_linear_infinite_reverse]"></div>

        {/* Cyberpunk Hologram Reactor Avatar */}
        <div className="absolute z-10 w-32 h-32 flex items-center justify-center animate-float rounded-full bg-gradient-to-br from-[#131320] to-[#0a0a16] border-2 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.4),inset_0_0_20px_rgba(168,85,247,0.5)] ring-4 ring-purple-500/20 overflow-hidden">
          <img 
            src={avatars[currentAvatar]} 
            alt="Avatar" 
            className="w-[85%] h-[85%] object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] translate-y-1" 
            onError={(e) => {e.target.src = "/profile.jpg"}} 
          />
        </div>

        {/* Orbiting Track */}
        <div className="absolute w-full h-full animate-orbit">
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 360;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
                style={{
                  transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center animate-counter">
                  <img 
                    src={skill} 
                    alt="Skill" 
                    className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Loading Text */}
      <div className="absolute bottom-20 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-mono text-sm tracking-[0.3em] animate-pulse font-bold">
        {loadingText}
      </div>
    </div>
  );
}