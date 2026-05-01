import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function WhatsAppButton() {
  const message = encodeURIComponent('Hello! I found Vision And Design and would like to know more about your services.');
  const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-[#1A1A1A]" />
      <span className="absolute right-16 bg-[#F2F0ED] text-[#1A1A1A] text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-[#C8A97E]/20">
        Chat with us
      </span>
    </a>
  );
}
