"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (current < 0.05) {
      setVisible(true);
      return;
    }

    const previous = scrollYProgress.getPrevious();
    if (typeof previous !== "number") return;

    const direction = current - previous;
    setVisible(direction < 0);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-10 left-1/2 z-[5000] -translate-x-1/2",
          "max-sm:left-auto max-sm:right-4 max-sm:translate-x-0",
          className
        )}
      >
        {/* ================= DESKTOP ================= */}
        <div
          className="
            hidden sm:flex
            items-center
            rounded-full
            border border-white/20
            bg-white/80
            px-3 py-2.5
            shadow-lg shadow-black/10
            backdrop-blur-md
            dark:bg-black/50
          "
        >
          {/* Navigation */}
          <div className="flex items-center">
            {navItems.map((navItem, idx) => (
              <React.Fragment key={`link-${idx}`}>
                {/* Separator */}
                {idx > 0 && (
                  <div className="h-4 w-px bg-neutral-300/70 dark:bg-white/20" />
                )}

                <Link
                  href={navItem.link}
                  className="
                    relative
                    px-4 py-1.5
                    text-sm
                    font-medium
                    text-neutral-600
                    transition-colors
                    hover:text-neutral-900
                    dark:text-neutral-300
                    dark:hover:text-white
                  "
                >
                  {navItem.name}
                </Link>
              </React.Fragment>
            ))}
          </div>

          {/* Separator before CTA */}
          <div className="mx-1 h-5 w-px bg-neutral-300/70 dark:bg-white/20" />

          {/* CTA */}
          <Link
            href="/liquidation"
            className="
              rounded-full
              bg-red-600
              px-4 py-1.5
              text-sm
              font-medium
              text-white
              transition-all
              hover:bg-red-700
              hover:shadow-md
              dark:bg-white
              dark:text-black
              dark:hover:bg-neutral-100
            "
          >
            Déstockage
          </Link>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative sm:hidden">
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            aria-expanded={isOpen}
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full
              border border-white/20
              bg-white/40
              shadow-lg
              backdrop-blur-md
              dark:bg-black/70
              
            "
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-6 bg-neutral-800 transition-all duration-200 dark:bg-white",
                  isOpen && "translate-y-2 rotate-45"
                )}
              />

              <span
                className={cn(
                  "h-0.5 w-6 bg-neutral-800 transition-all duration-200 dark:bg-white",
                  isOpen && "opacity-0"
                )}
              />

              <span
                className={cn(
                  "h-0.5 w-6 bg-neutral-800 transition-all duration-200 dark:bg-white",
                  isOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{ duration: 0.2 }}
                className="
                  absolute
                  right-0
                  top-full
                  mt-2
                  w-52
                  rounded-2xl
                  border border-white/20
                  bg-white/90
                  p-2
                  shadow-xl
                  backdrop-blur-md
                  dark:bg-black/80
                "
              >
                {navItems.map((navItem, idx) => (
                  <React.Fragment key={`mobile-link-${idx}`}>
                    <Link
                      href={navItem.link}
                      onClick={() => setIsOpen(false)}
                      className="
                        block
                        px-4 py-2.5
                        text-sm
                        font-medium
                        text-neutral-700
                        hover:text-neutral-950
                        dark:text-neutral-300
                        dark:hover:text-white
                      "
                    >
                      {navItem.name}
                    </Link>

                    {idx < navItems.length - 1 && (
                      <div className="mx-3 h-px bg-neutral-200 dark:bg-white/10" />
                    )}
                  </React.Fragment>
                ))}

                <div className="my-1 h-px bg-neutral-200 dark:bg-white/10" />

                <Link
                  href="/liquidation"
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    rounded-full
                    bg-red-600
                    px-4 py-2.5
                    text-center
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  Déstockage
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
