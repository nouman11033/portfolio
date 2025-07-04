'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Importation correcte pour Next.js 13+
import { useState } from 'react';

// Added a trigger prop to accept custom triggers
interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialisation du router avec useRouter

  // Default trigger is the logo
  const defaultTrigger = (
    <Button
      variant="ghost"
      className="h-auto w-auto cursor-pointer rounded-2xl bg-transparent p-0 shadow-none hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={() => setIsOpen(true)}
    >
      {/* Info Icon with Black Circle Background */}
      <span className="inline-flex items-center justify-center self-center bg-neutral-800 h-8 px-3 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 md:w-6 md:h-6"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </span>
      <span className="sr-only">About Nouman</span>
    </Button>
  );

  // Fonction qui utilise window.location pour forcer un rechargement complet
  const handleContactMe = () => {
    setIsOpen(false);
    // Forcer un rechargement complet de la page avec la requête
    window.location.href = '/chat?query=How%20can%20I%20contact%20you%3F';
  };

  return (
    <>
      {/* Use custom trigger if provided, otherwise use default */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background z-52 max-h-[85vh] overflow-auto rounded-2xl border-none p-4 py-6 shadow-xl sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col"
          >
            {/* Header */}
            <DialogHeader className="relative flex flex-row items-start justify-between px-8 pt-8 pb-6">
              <div>
                <DialogTitle className="flex items-center gap-2 text-4xl font-bold tracking-tight">
                  Welcome to AI Portfolio
                </DialogTitle>
                <DialogDescription className="mt-2 text-base">
                  {/*My interactive AI portfolio experience*/}
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="sticky top-0 right-0 cursor-pointer rounded-full bg-black p-2 text-white hover:bg-black/90 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>

            {/* Content area */}
            <div className="space-y-6 overflow-y-auto px-2 py-4 md:px-8">
              <section className="bg-accent w-full space-y-8 rounded-2xl p-8">
                {/* What section */}
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    What's ????
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    I'm so excited to present my{' '}
                    <strong>brand new AI Portfolio.</strong>
                    <br /> Whether you're a recruiter, a friend, family member,
                    or just curious, feel free to ask anything you want!
                  </p>
                </div>

                {/* Why section */}
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    Why ???
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    Traditional portfolios can be limiting. <br /> They can't
                    adapt to every visitor's specific needs. <br /> My portfolio
                    becomes{' '}
                    <strong>
                      exactly what you're interested in knowing about me and my
                      work.
                    </strong>
                  </p>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center px-8 pt-4 pb-0 md:pb-8">
              <Button
                onClick={() => setIsOpen(false)}
                className="h-auto rounded-full px-4 py-3"
                size="sm"
              >
                Start Chatting
              </Button>
              <div
                className="mt-6 flex cursor-pointer flex-wrap gap-1 text-center text-sm"
                onClick={handleContactMe}
              >
                <p className="text-muted-foreground">
                  If you love it, please share it! Feedback is always welcome.
                </p>
                <div className="flex cursor-pointer items-center text-blue-500 hover:underline">
                  Contact me.
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
