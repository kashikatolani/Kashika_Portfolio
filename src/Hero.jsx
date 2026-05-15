import Terminal from './Terminal'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a16] text-white flex items-center px-8 md:px-24 border-t-4 border-pink-500 overflow-hidden">
      
      {/* --- NEW: Subtle Cyberpunk Grid Texture --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The geometric grid lines fading out at the edges */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ec489915_1px,transparent_1px),linear-gradient(to_bottom,#ec489915_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Deep background ambient glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-purple-900/20 blur-[100px]"></div>
      </div>

      {/* Main Content Container (z-10 keeps it floating above the background) */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-auto">
        
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <div className="inline-block bg-pink-500/10 border border-pink-500/50 text-pink-400 px-3 py-1 rounded-full text-xs font-mono tracking-widest backdrop-blur-sm">
            DEV | DESIGN | DATA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm Kashika. <br />
            I build at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">intersection</span> <br />
            of hardware, data, and intelligence.
          </h1>
          
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            I engineer intelligent, end-to-end systems—bridging applied data science, web architecture, and biomedical processing to deliver technology that truly matters
          </p>
          
          <div className="flex gap-4 pt-4">
            <button className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]">
              Explore Projects ↗
            </button>
            <button className="border border-gray-600 hover:border-pink-500 text-gray-300 hover:text-pink-400 font-bold py-3 px-8 rounded-full transition-all backdrop-blur-sm">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side: Terminal Component */}
        <div className="hidden md:flex justify-end items-center">
           <Terminal />
        </div>

      </div>
    </section>
  )
}