import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardData = [
    {
      id: "01",
      title: "ORIGIN",
      cardLabel: "EDUCATION",
      highlight: "Foundation.",
      header: "Undergraduate Dual Degree Program",
      focus1: "VIT VELLORE BTECH ECE",
      focus2: "IIT MADRAS BS Data Science",
      body: "Currently based in Vellore/Lucknow. Seeking hybrid or remote opportunities to apply theoretical data models to real-world hardware systems.",
      status: "OPEN TO WORK"
    },
    {
      id: "02",
      title: "STACK",
      cardLabel: "TECHNICAL STACK",
      highlight: "Expertise.",
      header: "The Complete Tech Spectrum",
      focus1: "PYTHON / JAVA / C++",
      focus2: "NODE.JS / REACT",
      body: "Engineering the complete technical spectrum—from crafting smooth, high-fidelity UI/UX experiences and robust full-stack architectures, to applying data science and programming low-level hardware assembly.",
      status: "MULTIDISCIPLINARY"
    },
    {
      id: "03",
      title: "LOGIC",
      cardLabel: "SPECIALISATION",
      highlight: "Specialty.",
      header: "Hardware & UI/UX Integration",
      focus1: "SIGNAL PROCESSING",
      focus2: "UI/UX DESIGN",
      body: "Bridging the gap between high-fidelity user interfaces (Figma) and complex biomedical data processing (OpenCV, Arduino).",
      status: "BRIDGING SYSTEMS"
    },
    {
      id: "04",
      title: "ROLES",
      cardLabel: "CAREER PATHWAY",
      highlight: "Trajectory.",
      header: "Target Career Pathways",
      focus1: "SDE / DATA ANALYST / AI RESEARCH",
      focus2: "PRODUCT DESIGN / SYSTEMS ARCHITECT",
      body: "Passionate about shaping the future at the intersection of AI research, biomedical engineering, custom hardware architecture, and intuitive product interfaces.",
      status: "READY TO BUILD"
    }
  ];

  const avatars = ["/avatar-1.png", "/avatar-2.png", "/avatar-3.png", "/avatar-4.png"];

  return (
    <section id="about" className="relative py-32 px-6 flex justify-center items-center min-h-screen overflow-hidden">
      
      {/* Ambient glow behind the cards */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-pink-500/[0.02] rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* LEFT SIDE: The Dynamic Dossier Matrix */}
        <div className="w-full max-w-xl">
          {/* Brand Header */}
          <div className="mb-12">
            <h2 className="text-white text-sm font-black tracking-[0.5em] uppercase opacity-40 mb-2 font-mono">About Me</h2>
            <h1 className="text-white text-5xl font-black tracking-tighter uppercase italic leading-none drop-shadow-lg">
              Kashika Tolani
            </h1>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20">
              {cardData[activeIndex].id}
            </span>
            <div className="h-px bg-white/20 flex-1"></div>
            <span className="text-pink-500 font-mono tracking-[0.3em] uppercase text-xs font-bold">
              {cardData[activeIndex].title}
            </span>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl text-white/90 font-medium tracking-tight leading-snug">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-black">
                {cardData[activeIndex].highlight}
              </span>
              <br />
              {cardData[activeIndex].header}
            </h3>
            
            <div className="flex flex-col gap-2 border-l-2 border-pink-500/50 pl-6 py-2 mt-6 font-mono">
              <p className="text-lg font-bold text-white tracking-widest uppercase">{cardData[activeIndex].focus1}</p>
              <p className="text-lg font-bold text-pink-400 tracking-widest uppercase">{cardData[activeIndex].focus2}</p>
            </div>

            <p className="text-white/60 leading-relaxed text-sm max-w-md mt-6">{cardData[activeIndex].body}</p>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse shadow-[0_0_10px_#ec4899]"></div>
            <span className="text-[10px] text-white/40 font-mono tracking-[0.4em] uppercase">{cardData[activeIndex].status}</span>
          </div>
        </div>

        {/* RIGHT SIDE: 3D Cards + Swipe Hint */}
        <div className="flex flex-col items-center lg:ml-auto">
          <div className="w-[350px] h-[480px] [perspective:1200px] shrink-0">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full h-full"
            >
              {avatars.map((img, index) => (
                <SwiperSlide key={index} className="rounded-[2.2rem] bg-[#12121a]/80 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden group cursor-grab active:cursor-grabbing">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-black/60 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative w-full h-full flex flex-col p-8 z-10">
                    {/* Biometric Stage */}
                    <div className="flex-1 flex items-center justify-center z-10 relative mt-2">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border border-white/5 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 border border-dashed border-pink-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>

                      <img 
                        src={img} 
                        alt="Avatar" 
                        className={`relative z-10 w-full h-48 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-110 
                          ${index === 0 ? '-translate-y-2 translate-x-2' : 
                            index === 1 ? '-translate-y-4 translate-x-4' : 
                            '-translate-y-2'}`} 
                      />

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[90px] w-28 h-2 bg-black/80 blur-[4px] rounded-[100%]"></div>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-auto z-10 pt-6 border-t border-white/10 text-center font-mono">
                      <h3 className="text-white text-2xl font-black tracking-tighter uppercase italic leading-none drop-shadow-md">
                        {cardData[index].cardLabel}
                      </h3>
                      <div className="mt-4 flex flex-col items-center gap-1.5 uppercase">
                        <span className="text-pink-500 text-[9px] font-bold tracking-[0.15em] leading-tight">{cardData[index].focus1}</span>
                        <span className="text-white/40 text-[8px] font-bold tracking-[0.4em]">{cardData[index].focus2}</span>
                      </div>
                    </div>

                    {/* Refractive Edge */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* HOLD & SWIPE HINT */}
          <div className="mt-10 flex flex-col items-center gap-2 opacity-30 animate-pulse pointer-events-none">
             <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-white/50"></div>
                <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-white">
                  Hold & Swipe
                </span>
                <div className="w-10 h-[1px] bg-white/50"></div>
             </div>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
             </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;