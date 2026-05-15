export default function Navbar() {
  const navLinks = ["About", "Projects", "Skills", "Contact"];

  return (
    // Changed width to 'w-max' so it shrink-wraps to its content
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max">
      
      {/* Replaced justify-between with gap-8, increased px padding to 8 */}
      <div className="bg-[#131320]/70 backdrop-blur-md border border-gray-700/50 rounded-full px-8 py-3 flex items-center gap-8 lg:gap-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        
        {/* Logo */}
        <a 
          href="#" 
          // Added 'group' here to control the child spans, and text-white to start
          className="group text-xl font-extrabold tracking-widest text-white transition-all duration-300"
        >
          {/* group-hover:text-pink-500 changes the white text to pink on hover */}
          <span className="transition-colors duration-300 group-hover:text-pink-500">K</span>
          <span className="text-pink-500">.</span>
          <span className="transition-colors duration-300 group-hover:text-pink-500">T</span>
          <span className="text-pink-500">.</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="hover:text-white transition-colors relative group py-1"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a 
          href="/KashikaResume.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="text-sm font-bold bg-pink-500/10 border border-pink-500/50 text-pink-400 px-5 py-2 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(236,72,153,0.2)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] hidden md:block"
        >
          Resume
        </a>
        
      </div>
    </nav>
  );
}