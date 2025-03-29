'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LinkSectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export default function LinkSection({ title, children, delay = 0 }: LinkSectionProps) {
  return (
    <motion.section 
      className="w-full mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <motion.h2 
        className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: delay + 0.1, duration: 0.3 }}
      >
        {title}
      </motion.h2>
      <div className="space-y-2">
        {children}
      </div>
    </motion.section>
  );
}