'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { Download } from 'lucide-react';

export function Presentation() {
  // Personal information
  const profile = {
    name: 'Nouman Jinabade',
    age: '21 years old',
    location: 'Pune, India',
    description:
      "Hello 👋\nI'm Nouman Jinabade, an engineer specializing in Gen/Agentic AI, Automation & Data Science. I recently completed my B.Tech at Symbiosis Institute of Technology and I'm currently finishing a MicroMasters from MIT. I love building AI, AGI, and RAG solutions, and have completed 50+ projects across various domains. Always curious, always building.",
    src: '/potrait.png',
    fallbackSrc:
      'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3',
  };

  // === Add these variables for control ===
  const imageWidth = 400; // px, change as needed
  const imageHeight = 400; // px, change as needed
  const imageGap = 0; // px, change as needed
  // ======================================

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation for the entire paragraph rather than word-by-word
  const paragraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div
        className="grid grid-cols-1 items-center md:grid-cols-2"
        style={{ gap: imageGap }}
      >
        {/* Image section */}
        <div className="relative mx-auto" style={{ width: imageWidth, height: imageHeight }}>
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full"
            >
              <Image
                src={profile.src}
                alt={profile.name}
                width={imageWidth}
                height={imageHeight}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = profile.fallbackSrc;
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Text content section */}
        <div className="flex flex-col space-y">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>
            <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
              <p className="text-muted-foreground">{profile.age}</p>
              <div className="bg-border hidden h-1.5 w-1.5 rounded-full md:block" />
              <p className="text-muted-foreground">{profile.location}</p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="text-foreground mt-6 leading-relaxed whitespace-pre-line"
          >
            {profile.description}
          </motion.p>

          {/* Ping-pong auto-scrolling tag bar styled like home screen */}
          <PingPongTagBar />

          {/* Two single-row tables side by side: SIT and MIT, with reduced spacing */}
          <div className="flex flex-row gap-2 mt-1 mb-0">
            <div className="inline-block bg-white border border-gray-300 rounded-xl shadow text-xs font-medium text-gray-900 overflow-hidden" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <table>
                <tbody>
                  <tr>
                    <td className="px-2 py-1 font-bold text-gray-700">SIT</td>
                    <td className="px-2 py-1 whitespace-nowrap">CGPA 8.1</td>
                    <td className="px-2 py-1 whitespace-nowrap">GPA 10.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="inline-block bg-white border border-gray-300 rounded-xl shadow text-xs font-medium text-gray-900 overflow-hidden" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <table>
                <tbody>
                  <tr>
                    <td className="px-2 py-1 font-bold text-gray-700">MIT</td>
                    <td className="px-2 py-1 whitespace-nowrap">LAST 96%</td>
                    <td className="px-2 py-1 whitespace-nowrap">AVG 91%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Resume Download Button */}
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 justify-center md:justify-start">
            <a
              href="/CV_RESUME_NOUMAN_JINABADE.pdf"
              download
              className="bg-red-500 hover:bg-black text-white rounded-full px-5 py-2 text-sm font-semibold shadow transition-colors duration-200 flex items-center gap-2"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;

// --- PingPongTagBar component ---
function PingPongTagBar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tags = [
    'AI - Agentic AI', 'Data Science', 'MIT MicroMasters', 'SIT Pune',
    'Leadership' , 'Full Stack Development', 'Adaptibility', 'Team Management'
  ];
  // Duplicate tags for ping-pong effect
  const tagSets = [...tags, ...tags];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let frame: number;
    let direction = 1;
    const speed = 0.5;
    let started = false;
    let timeout: number;
    function animate() {
      if (!container) return;
      const maxScroll = container.scrollWidth - container.offsetWidth;
      container.scrollLeft += speed * direction;
      if (direction === 1 && container.scrollLeft >= maxScroll) {
        container.scrollLeft = maxScroll;
        direction = -1;
      } else if (direction === -1 && container.scrollLeft <= 0) {
        container.scrollLeft = 0;
        direction = 1;
      }
      frame = requestAnimationFrame(animate);
    }
    timeout = window.setTimeout(() => {
      started = true;
      frame = requestAnimationFrame(animate);
    }, 2500);
    return () => {
      if (started) cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="mt-1 mb-0 w-full max-w-lg flex justify-center">
      <div
        ref={scrollRef}
        className="overflow-x-auto w-full bg-white/30 backdrop-blur-lg rounded-full px-4 py-3 scrollbar-hide"
        style={{
          WebkitOverflowScrolling: 'touch',
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div
          className="flex gap-3 min-w-max"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {tagSets.map((tag, idx) => (
            <span
              key={tag + '-' + idx}
              className="rounded-full px-4 py-1 text-xs font-medium whitespace-nowrap flex-shrink-0"
              style={{ scrollSnapAlign: 'center' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
