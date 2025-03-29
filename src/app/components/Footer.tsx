'use client';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  return (
    <motion.footer 
      className="w-full mt-8 mb-6 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="flex justify-center space-x-6 mb-4">
        <SocialIcon href="https://youtube.com" icon={<FaYoutube />} label="YouTube" />
        <SocialIcon href="https://instagram.com" icon={<FaInstagram />} label="Instagram" />
        <SocialIcon href="https://x.com" icon={<FaXTwitter />} label="X" />
        <SocialIcon href="https://tiktok.com" icon={<FaTiktok />} label="TikTok" />
      </div>
      <p className="text-xs opacity-50">© {new Date().getFullYear()} JOSEP</p>
    </motion.footer>
  );
}

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-lg opacity-70 hover:opacity-100 transition-opacity"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}