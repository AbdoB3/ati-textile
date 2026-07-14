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

export const FloatingNav = ({
  navItems,
  className
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
  // Toujours visible tout en haut de la page
  if (current < 0.05) {
    setVisible(true);
    return;
  }

  const previous = scrollYProgress.getPrevious();
  if (typeof previous !== "number") return; // évite le NaN au premier event

  const direction = current - previous;
  setVisible(direction < 0); // scroll vers le haut => visible
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
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-[5000] items-center justify-center",
          className
        )}>
        <div
          className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/80 px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md dark:border-white/10 dark:bg-black/50">
          {/* Nav items container */}
          <div className="flex items-center gap-1">
            {navItems.map((navItem, idx) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
                )}>
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-neutral-200 dark:bg-white/10" />

          {/* CTA Button */}
          <button
            className="relative rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-red-800 hover:shadow-lg hover:shadow-neutral-900/20 dark:bg-white dark:text-black dark:hover:bg-neutral-100 dark:hover:shadow-white/20">
            <span><Link href="/liquidation">Déstockage</Link></span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
