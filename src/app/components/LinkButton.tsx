'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LinkButtonProps {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
}

export default function LinkButton({ href, icon, children }: LinkButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 w-full p-4 mb-3 rounded-xl bg-white/5 backdrop-blur-sm 
                 text-left border border-white/10 shadow-sm hover:shadow-md transition-all"
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span>{children}</span>
    </motion.a>
  );
}