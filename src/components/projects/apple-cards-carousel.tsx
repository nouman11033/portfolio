'use client';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { cn } from '@/lib/utils';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0,
  hideArrows = false,
}: {
  items: React.ReactNode[];
  initialScroll?: number;
  hideArrows?: boolean;
}) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'right' | 'left'>('right');

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  // Delay auto-scroll start to allow DOM/images to settle
  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    let frame: number;
    const scroll = () => {
      if (!isPaused && carouselRef.current) {
        const el = carouselRef.current;
        if (scrollDirection === 'right') {
          el.scrollLeft += 1.5;
          if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
            setScrollDirection('left');
          }
        } else {
          el.scrollLeft -= 1.5;
          if (el.scrollLeft <= 0) {
            setScrollDirection('right');
          }
        }
      }
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [isPaused, isReady, scrollDirection]);

  useEffect(() => {
    if (!carouselRef.current) return;
    const handleScroll = () => checkScrollability();
    const ref = carouselRef.current;
    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // Get the card width and gap based on viewport size
  const getScrollDistance = () => {
    // Card width (w-56 = 224px) + gap-4 (16px)
    const cardWidth = 224;
    const gap = 16;
    const totalWidth = cardWidth + gap;

    // Scroll by 2 cards on desktop, 1 on mobile
    const cardsToScroll = 1;
    return totalWidth * cardsToScroll;
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -getScrollDistance(),
        behavior: 'smooth',
      });
      setTimeout(checkScrollability, 300);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: getScrollDistance(),
        behavior: 'smooth',
      });
      setTimeout(checkScrollability, 300);
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 224; // w-56 (224px)
      const gap = isMobile() ? 16 : 16; // gap-4 (16px)
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  // Pause auto-scroll on hover or arrow interaction
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div className="flex flex-row items-stretch w-full">
          {/* Standalone summary card */}
          <div className="flex-shrink-0 mr-4">{items[0]}</div>
          {/* Scrollable cards */}
          <div
            className="flex overflow-x-auto scroll-smooth gap-4 [scrollbar-width:none]"
            ref={carouselRef}
            style={{ width: '100%' }}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          >
            {items.slice(1).map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: 'easeOut',
                    once: true,
                  },
                }}
                key={'card' + (index + 1)}
                className="rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        {/* Only render arrows if hideArrows is not true */}
        {!hideArrows && (
          <div className="mr-10 flex justify-end gap-2 md:mr-20 mt-8">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={e => { handlePause(); scrollLeft(); setTimeout(handleResume, 500); }}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={e => { handlePause(); scrollRight(); setTimeout(handleResume, 500); }}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        )}
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
  isSummary = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
  isSummary?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  //@ts-ignore
  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-52 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white font-sans dark:bg-neutral-900"
            >
              {/* Sticky close button */}
              <div className="sticky top-4 z-52 flex justify-end px-8 pt-8 md:px-14 md:pt-8">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/90 shadow-md dark:bg-white/90"
                  onClick={handleClose}
                >
                  <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </button>
              </div>

              {/* Header section with consistent padding */}
              <div className="relative px-8 pt-2 pb-0 md:px-14">
                <div>
                  <motion.p
                    layoutId={layout ? `category-${card.title}` : undefined}
                    className="text-base font-medium text-black dark:text-white"
                  >
                    {card.category}
                  </motion.p>
                  <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
                  >
                    {card.title}
                  </motion.p>
                </div>
              </div>

              {/* Content with consistent padding */}
              <div className="px-8 pt-8 pb-14 md:px-14">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className={`relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl ${
          isSummary && card.title === 'ITC Projects Summary'
            ? 'bg-[linear-gradient(180deg,_rgba(255,255,255,0.95)_0%,_rgba(19,42,101,0.08)_60%,_rgba(19,42,101,0.03)_100%)] text-[#132A65]'
            : isSummary && card.title === 'Deep Learning | AI Summary'
            ? 'bg-black text-white'
            : isSummary && card.title === 'Data Science Summary'
            ? 'bg-black text-white'
            : card.title === 'TTT Transformer'
            ? 'bg-white text-black border-2 border-black'
            : card.title === 'Underwater ROV / Drone'
            ? 'bg-[#f3f3f3] text-black border-2 border-black'
            : card.title === 'SCM Dispatch Planning Tool'
            ? 'bg-[#f3f3f3] text-black border-2 border-black'
            : card.title === 'Ink Marker Detection & Logging System'
            ? 'bg-white !text-black text-black border-2 border-black'
            : card.title === 'Ink Penetration Detection & Logging System'
            ? 'bg-white !text-black text-black border-2 border-black'
            : card.title === 'Truck Coal Unloading Cycle D&L System'
            ? 'bg-white !text-black text-black border-2 border-black'
            : card.title === 'Blister Detection & Rating SYS'
            ? 'bg-white text-black border-2 border-black'
            : card.title === 'Agentic GPT & AMS'
            ? 'bg-black text-white'
            : card.title === 'Quadruped 4 Femur-Fibula Joint Bot'
            ? 'bg-white text-black border-2 border-black'
            : card.title === 'Animatronic Eyes'
            ? 'bg-black text-white'
            : card.title === 'Animatronic Mouth'
            ? 'text-white'
            : card.title === 'Digital Twin for 3D Printers - AutoEncoder'
            ? 'bg-black text-white'
            : card.title === 'Automated Dashboard Generation Using LLMs'
            ? 'bg-black text-white'
            : isSummary
            ? 'bg-black text-white'
            : 'bg-gray-100 dark:bg-neutral-900'
        }`}
        style={card.title === 'Ink Marker Detection & Logging System' ? { color: 'black' } : {}}
      >
        {/* ITC Summary Card Logo Centered */}
        {isSummary && card.title === 'ITC Projects Summary' && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <img src="/Projects/ITC/image.png" alt="ITC Logo" className="w-16 h-16 object-contain" />
          </div>
        )}
        {/* Data Science Summary Card Video Centered */}
        {isSummary && card.title === 'Data Science Summary' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden">
            <video src="/Projects/datascience/ds.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl shadow-lg" style={{ objectPosition: 'center top' }} />
          </div>
        )}
        {/* Underwater ROV / Drone Card Cover Image Centered */}
        {card.title === 'Underwater ROV / Drone' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden">
            <img src="/Projects/robotics/ROV-COVER.png" alt="ROV Cover" className="w-50 h-50 object-contain" />
          </div>
        )}
        {/* Quadruped 4 Femur-Fibula Joint Bot Card Cover Image Centered */}
        {card.title === 'Quadruped 4 Femur-Fibula Joint Bot' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden">
            <img src="/Projects/robotics/fm3.png" alt="Quadruped Bot Cover" className="w-50 h-50 object-contain" />
          </div>
        )}
        {/* Animatronic Eyes Card Cover Image Centered */}
        {card.title === 'Animatronic Eyes' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden">
            <img src="/Projects/robotics/eyes.avif" alt="Animatronic Eyes Cover" className="w-45 h-45 object-contain" />
          </div>
        )}
        {/* Animatronic Mouth Card Cover Background Image */}
        {card.title === 'Animatronic Mouth' && (
          <>
            <img src="/Projects/robotics/mouthx.png" alt="Animatronic Mouth Cover" className="absolute inset-0 w-full h-full object-cover scale-110 z-10" />
            <div className="absolute inset-0 bg-black/40 z-20" />
          </>
        )}
        {/* HR - Tableau Dashboard Card Cover Background Image */}
        {card.title === 'HR - Tableau Dashboard' && (
          <>
            <img src="/Projects/datascience/hrcover.png" alt="HR Dashboard Cover" className="absolute inset-0 w-full h-full object-cover scale-110 z-10" />
            <div className="absolute inset-0 bg-black/40 z-20" />
          </>
        )}
        {/* Friends Dashboard Remake by George Koursaros Card Cover Background Image */}
        {card.title === 'Friends Dashboard Remake by George Koursaros' && (
          <>
            <img src="/Projects/datascience/friends.png" alt="Friends Dashboard Cover" className="absolute inset-0 w-full h-full object-cover scale-110 z-10" />
            <div className="absolute inset-0 bg-black/40 z-20" />
          </>
        )}
        {/* Time-series Data Dashboard Card Cover Background Image */}
        {card.title === 'Time-series Data Dashboard' && (
          <>
            <img src="/Projects/datascience/dsp1.png" alt="Time-series Dashboard Cover" className="absolute inset-0 w-full h-full object-cover scale-110 z-10" />
            <div className="absolute inset-0 bg-black/40 z-20" />
          </>
        )}
        {/* Robotics Summary Card Video Centered */}
        {isSummary && card.title === 'Summary' && card.category === 'Robotics' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden">
            <video src="/Projects/robotics/robotics-summary.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl shadow-lg" style={{ objectPosition: 'center top' }} />
          </div>
        )}
        {/* Deep Learning Summary Card Video Centered */}
        {isSummary && card.title === 'Summary' && card.category === 'Deep Learning' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden">
            <video src="/Projects/deep learning/ai.mp4" autoPlay loop muted playsInline className="w-64 h-64 object-cover rounded-xl shadow-lg" style={{ objectPosition: 'center top' }} />
          </div>
        )}
        {/* TTT Transformer Card Image Centered */}
        {card.title === 'TTT Transformer' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden">
            <img src="/Projects/deep learning/ttt2.png" alt="TTT Transformer Cover" className="w-40 h-40 object-contain" />
          </div>
        )}
        {/* Digital Twin for 3D Printers - AutoEncoder Card Image Centered */}
        {card.title === 'Digital Twin for 3D Printers - AutoEncoder' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden">
            <img src="/Projects/deep learning/dt2.png" alt="Digital Twin Cover" className="w-40 h-40 object-contain" />
          </div>
        )}
        {/* Automated Dashboard Generation Using LLMs Card Image Centered */}
        {card.title === 'Automated Dashboard Generation Using LLMs' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden">
            <img src="/Projects/deep learning/cover-dash.png" alt="Automated Dashboard Cover" className="w-38 h-38 object-contain" />
          </div>
        )}
        {/* SCM Dispatch Planning Tool Card Cover Image Centered */}
        {card.title === 'SCM Dispatch Planning Tool' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden bg-white">
            <img src="/Projects/ITC/scm3.png" alt="SCM Dashboard Cover" className="w-48 h-48 object-contain" />
          </div>
        )}
        {/* Truck Coal Unloading Cycle D&L System Card Cover Image Centered */}
        {card.title === 'Truck Coal Unloading Cycle D&L System' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden bg-white">
            <img src="/Projects/ITC/truck.png" alt="Truck Coal Unloading Cycle Main" className="w-48 h-48 object-contain" />
          </div>
        )}
        {/* Ink Marker Detection & Logging System Card Cover Image Centered */}
        {card.title === 'Ink Marker Detection & Logging System' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden bg-white">
            <img src="/Projects/ITC/ink1.png" alt="Ink Marker Detection Main" className="w-48 h-48 object-contain" />
          </div>
        )}
        {/* Ink Penetration Detection & Logging System Card Cover Image Centered */}
        {card.title === 'Ink Penetration Detection & Logging System' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden bg-white">
            <img src="/Projects/ITC/pen.png" alt="Ink Penetration Detection Main" className="w-48 h-48 object-contain" />
          </div>
        )}
        {/* Agentic GPT & AMS Card Cover Image Centered */}
        {card.title === 'Agentic GPT & AMS' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden bg-black">
            <img src="/Projects/ITC/ai1.png" alt="Agentic GPT & AMS Cover" className="w-48 h-48 object-contain" />
          </div>
        )}
        {/* Blister Detection & Rating SYS Card Cover Video Centered */}
        {card.title === 'Blister Detection & Rating SYS' && (
          <div className="absolute inset-0 flex items-center justify-center z-25 overflow-hidden bg-white">
            <video
              src="/Projects/ITC/blistervid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-38 h-28 object-contain"
            />
          </div>
        )}
        {/*<div className="absolute inset-0 z-20 cursor-pointer bg-black/20 hover:bg-black/2" />*/}
        <div className={`relative z-40 p-8 ${
          isSummary && card.title === 'Deep Learning | AI Summary'
            ? 'text-white'
            : isSummary && card.title === 'Data Science Summary'
            ? 'text-white'
            : card.title === 'TTT Transformer' || card.title === 'Underwater ROV / Drone' || card.title === 'Quadruped 4 Femur-Fibula Joint Bot' || card.title === 'SCM Dispatch Planning Tool' || card.title === 'Blister Detection & Rating SYS'
            ? 'text-black'
            : card.title === 'Agentic GPT & AMS'
            ? 'text-white'
            : card.title === 'Animatronic Eyes' || card.title === 'Animatronic Mouth' || card.title === 'HR - Tableau Dashboard' || card.title === 'Friends Dashboard Remake by George Koursaros' || card.title === 'Time-series Data Dashboard'
            ? 'text-white'
            : card.title === 'Digital Twin for 3D Printers - AutoEncoder'
            ? 'text-white'
            : card.title === 'Automated Dashboard Generation Using LLMs'
            ? 'text-white'
            : ''
        }`}>
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className={`text-left font-sans text-sm font-medium ${
              isSummary && card.title === 'ITC Projects Summary'
                ? 'text-[#132A65]'
                : isSummary && (card.title === 'Data Science Summary' || card.title === 'Summary')
                ? 'text-white'
                : card.title === 'TTT Transformer' || card.title === 'Underwater ROV / Drone' || card.title === 'Quadruped 4 Femur-Fibula Joint Bot' || card.title === 'SCM Dispatch Planning Tool' || card.title === 'Blister Detection & Rating SYS'
                ? 'text-black'
                : card.title === 'Ink Marker Detection & Logging System' || card.title === 'Ink Penetration Detection & Logging System' || card.title === 'Truck Coal Unloading Cycle D&L System'
                ? '!text-black text-black'
                : card.title === 'Agentic GPT & AMS'
                ? 'text-white'
                : card.title === 'Animatronic Eyes' || card.title === 'Animatronic Mouth'
                ? 'text-white'
                : card.title === 'Digital Twin for 3D Printers - AutoEncoder'
                ? 'text-white'
                : card.title === 'Integrated Hand Gesturing Recognition Software (ASL)'
                ? 'text-white'
                : card.title === 'Automated Dashboard Generation Using LLMs'
                ? 'text-white'
                : 'text-white md:text-base'
            }`}
            style={card.title === 'Ink Marker Detection & Logging System' || card.title === 'Ink Penetration Detection & Logging System' ? { color: 'black' } : {}}
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className={`max-w-xs text-left font-sans font-semibold [text-wrap:balance] ${
              isSummary && card.title === 'ITC Projects Summary'
                ? 'text-xl md:text-3xl text-[#132A65]'
                : isSummary && (card.title === 'Data Science Summary' || card.title === 'Summary')
                ? 'text-xl md:text-3xl text-white'
                : card.title === 'TTT Transformer' || card.title === 'Underwater ROV / Drone' || card.title === 'Quadruped 4 Femur-Fibula Joint Bot' || card.title === 'SCM Dispatch Planning Tool' || card.title === 'Blister Detection & Rating SYS'
                ? 'text-base md:text-xl text-black'
                : card.title === 'Ink Marker Detection & Logging System' || card.title === 'Ink Penetration Detection & Logging System' || card.title === 'Truck Coal Unloading Cycle D&L System'
                ? '!text-black text-black text-base md:text-xl'
                : card.title === 'Agentic GPT & AMS'
                ? 'text-base md:text-xl text-white'
                : card.title === 'Animatronic Eyes' || card.title === 'Animatronic Mouth'
                ? 'text-base md:text-xl text-white'
                : card.title === 'Digital Twin for 3D Printers - AutoEncoder'
                ? 'text-base md:text-xl text-white'
                : card.title === 'Integrated Hand Gesturing Recognition Software (ASL)'
                ? 'text-base md:text-xl text-white'
                : card.title === 'Automated Dashboard Generation Using LLMs'
                ? 'text-base md:text-xl text-white'
                : 'text-base md:text-xl text-white'
            }`}
            style={card.title === 'Ink Marker Detection & Logging System' || card.title === 'Ink Penetration Detection & Logging System' ? { color: 'black' } : {}}
          >
            {card.title === 'Ink Marker Detection & Logging System'
              ? 'Ink-Marker D&L SYS'
              : card.title === 'Ink Penetration Detection & Logging System'
              ? 'Ink-Penetration D&L System'
              : card.title === 'Truck Coal Unloading Cycle D&L System'
              ? 'Truck Coal D&L System'
              : isSummary && (card.title === 'Data Science Summary' || card.title === 'ITC Projects Summary') ? 'Summary'
              : card.title === 'Automated Dashboard Generation Using LLMs' ? 'Dashboard Gen with LLMs'
              : card.title === 'Integrated Hand Gesturing Recognition Software (ASL)' ? 'Gesture Recognition (ASL)'
              : card.title === 'Quadruped 4 Femur-Fibula Joint Bot' ? '4 Femur Fibula Bot'
              : card.title === 'Friends Dashboard Remake by George Koursaros' ? 'Friends Dashboard'
              : card.title === 'HR - Tableau Dashboard' ? 'HR Dashboard'
              : card.title === 'Time-series Data Dashboard' ? 'Time-series Dashboard'
              : card.title}
          </motion.p>
        </div>
        {/* Only show BlurImage for non-summary or non-ITC/Deep Learning summary cards, and only if card.src is not empty */}
        {!(isSummary && (card.title === 'ITC Projects Summary' || card.title === 'Deep Learning | AI Summary')) && card.src && card.title !== 'TTT Transformer' && card.title !== 'Digital Twin for 3D Printers - AutoEncoder' && (
          <BlurImage
            src={card.src}
            alt={card.title}
            fill
            className="absolute inset-0 z-10 object-cover"
          />
        )}
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        'transition duration-300',
        isLoading ? 'blur-sm' : 'blur-0',
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt ? alt : 'Background of a beautiful view'}
      {...rest}
    />
  );
};
