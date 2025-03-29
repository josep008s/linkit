'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <motion.div 
      className="flex flex-col items-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative w-24 h-24 mb-4 overflow-hidden rounded-full border-2 border-white/10 shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/profile.svg"
          alt="JOSEP"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      <motion.h1 
        className="text-2xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        JOSEP
      </motion.h1>
      
      <motion.p 
        className="text-center text-sm opacity-80 max-w-xs px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        Ingeniero Acústico, Emprendedor y Escritor moderno.
        Especializado en soluciones creativas con IA.
      </motion.p>
    </motion.div>
  );
}