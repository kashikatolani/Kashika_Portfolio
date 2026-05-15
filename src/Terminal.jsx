export default function Terminal() {
  return (
    <div className="w-full max-w-xl ml-auto bg-[#0a0a12] border border-gray-700/50 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] font-mono text-sm">
      
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-[#131320] border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-gray-500 text-xs">kashika@portfolio</div>
      </div>
      
      {/* Terminal Body: Flex Row for Image + Text */}
      <div className="p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        
        {/* Profile Picture */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-lg overflow-hidden border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
          <img 
            src="/profile.jpg" 
            alt="Kashika" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="text-gray-300 space-y-4 leading-relaxed w-full text-xs sm:text-sm">
          
          {/* Location */}
          <div>
            <div className="flex">
              <span className="text-pink-500 mr-2">&gt;</span>
              <span>Kashika.location</span>
            </div>
            <div className="text-purple-400 ml-4">
              "Vellore / Lucknow"
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex">
              <span className="text-pink-500 mr-2">&gt;</span>
              <span>Kashika.contact</span>
            </div>
            <div className="text-white ml-4 flex flex-wrap gap-1">
              [
              <a href="mailto:kashikatolani5@gmail.com" className="text-pink-400 hover:text-pink-300 hover:underline">"Email"</a>,
              <a href="https://www.linkedin.com/in/kashika-tolani-481953312/?skipRedirect=true" className="text-pink-400 hover:text-pink-300 hover:underline" target="_blank" rel="noreferrer">"LinkedIn"</a>,
              <a href="https://github.com/kashikatolani" className="text-pink-400 hover:text-pink-300 hover:underline" target="_blank" rel="noreferrer">"GitHub"</a>
              ]
            </div>
          </div>

          {/* Resume */}
          <div>
            <div className="flex">
              <span className="text-pink-500 mr-2">&gt;</span>
              <span>Kashika.resume</span>
            </div>
            <div className="ml-4">
              <a href="/KashikaResume.pdf" className="text-purple-400 hover:text-purple-300 hover:underline" target="_blank" rel="noreferrer">"KashikaResume.pdf"</a>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex">
              <span className="text-pink-500 mr-2">&gt;</span>
              <span>Kashika.education</span>
            </div>
            <div className="text-purple-400 ml-4">
              "B.Tech ECE - VIT VELLORE | BS Data Sci - IIT Madras"
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="flex">
              <span className="text-pink-500 mr-2">&gt;</span>
              <span>Kashika.skills</span>
            </div>
            <div className="text-white ml-4 flex flex-wrap gap-1">
              [
              <span className="text-pink-400">"Python"</span>,
              <span className="text-pink-400">"C/C++"</span>,
              <span className="text-pink-400">"React"</span>,
              <span className="text-pink-400">"Flask"</span>,
              <span className="text-pink-400">"OpenCV"</span>,
              <span className="text-pink-400">"Figma"</span>,
              <span className="text-pink-400">"Java"</span>,
             <span className="text-pink-400">"JavaScript"</span>,
              <span className="text-pink-400">"SQL"</span>,
                <span className="text-pink-400">"Git"</span>,
                <span className="text-pink-400">"MongoDB"</span>,
                <span className="text-pink-400">"Assembly (8051)"</span>,
                <span className="text-pink-400">"Verilog"</span>
              ]
            </div>
          </div>

          {/* Blinking Cursor */}
          <div className="flex items-center pt-1">
            <span className="text-pink-500 mr-2">&gt;</span>
            <span className="w-2.5 h-4 bg-pink-500 block animate-pulse shadow-[0_0_8px_rgba(236,72,153,0.8)]"></span>
          </div>

        </div>
      </div>
    </div>
  )
}