'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import WelcomeModal from '@/components/welcome-modal';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import GitHubButton from 'react-github-btn';
import { Poppins } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Analytics } from '@vercel/analytics/next';

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Contact:
    'How can I contact you?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-poppins' });

// List of memoji image paths
const memojiImages = [
  '/memojis-new/MEM2.1.png',
  '/memojis-new/MEM2.2.png',
  '/memojis-new/MEM2.3.png',
  '/memojis-new/MEM2.4.png',
  '/memojis-new/MEM2.5.png',
  '/memojis-new/MEM2.6 2.png',
  '/memojis-new/MEM2.7.png',
];

function RotatingMemoji() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % memojiImages.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative z-10 flex items-center justify-center" style={{ height: 160, width: 160 }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={memojiImages[index]}
          src={memojiImages[index]}
          alt="Nouman's Memoji"
          width={160}
          height={160}
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ borderRadius: '50%' }}
        />
      </AnimatePresence>
    </div>
  );
}

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);

  const goToChat = (query: string) => {
    console.log('goToChat called', { pathname, query });
    router.push(`/chat?query=${encodeURIComponent(query)}`);
  };

  /* hero animations (unchanged) */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
        {/* big blurred footer word */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
          <div
            className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
            style={{ marginBottom: '-2.5rem' }}
          >
            NOUMAN 
          </div>
        </div>

        {/* GitHub button */}
        <div className="absolute top-6 right-8 z-20 flex gap-3 items-center">
          <GitHubButton
            href="https://github.com/nouman11033"
            data-color-scheme="no-preference: light; light: light; dark: light_high_contrast;"
            data-size="large"
            data-show-count="false"
            aria-label="Follow nouman11033 on GitHub"
          >
            Follow
          </GitHubButton>
        </div>

        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => goToChat('Are you looking for an internship?')}
            className="cursor-pointer relative flex items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
          >
            {/* Green pulse dot */}
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            need an AI Engineer?
          </button>
        </div>

        {/* header */}
        <motion.div
          className="z-1 mb-8 flex flex-col items-center text-center md:mb-12 mt-24 md:mt-4"
          variants={topElementVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-base mt-1 text-1xl font-semibold tracking-wide sm:text-1xl md:text-2xl lg:text-3xl">Hello!,   I'm Nouman 👋🏻</h2>
          <h1 className={`text-base font-semibold sm:text-lg md:text-xl lg:text-1xl mt-2 ${poppins.className}`}>
            <span className="italic line-through">Portfolio</span>
            <span className="mx-2">→</span>
            <span>AI Portfolio</span>
          </h1>
        </motion.div>
        {/* centre memoji */}
        <RotatingMemoji />



        {/* input + quick buttons */}
        <motion.div
          variants={bottomElementVariants}
          initial="hidden"
          animate="visible"
          className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
        >
          {/* free-form question */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) goToChat(input.trim());
            }}
            className="relative w-full max-w-lg"
          >
            <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                className="w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Submit question"
                className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* infinite horizontal slider of quick-question buttons */}
          <AutoScrollingSlider questionConfig={questionConfig} questions={questions} goToChat={goToChat} />
        </motion.div>
        <FluidCursor />
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <WelcomeModal />
      </div>
      <Analytics />
    </>
  );
}

// --- AutoScrollingSlider component ---
type QuestionConfig = { key: keyof typeof questions; color: string; icon: LucideIcon };
type AutoScrollingSliderProps = {
  questionConfig: ReadonlyArray<QuestionConfig>;
  questions: typeof questions;
  goToChat: (query: string) => void;
};

function AutoScrollingSlider({ questionConfig, questions, goToChat }: AutoScrollingSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Use two sets of buttons for ping-pong effect
  const buttonSets = [...questionConfig, ...questionConfig];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let frame: number;
    let direction = 1; // 1 = right-to-left, -1 = left-to-right
    const speed = 1; // px per frame
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
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="mt-4 w-full max-w-lg flex justify-center">
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
          {buttonSets.map(({ key, color, icon: Icon }, idx) => (
            <Button
              key={key + '-' + idx}
              onClick={() => goToChat(questions[key])}
              variant="ghost"
              className="shadow-none border-none hover:bg-border/30 aspect-square w-28 cursor-pointer rounded-full py-6 px-2 flex-shrink-0"
              style={{ scrollSnapAlign: 'center' }}
            >
              <div className="flex h-full flex-col items-center justify-center gap-1 text-gray-700">
                <Icon size={22} strokeWidth={2} color={color} />
                <span className="text-xs font-medium sm:text-sm">{key}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
