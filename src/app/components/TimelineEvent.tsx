import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Shirt, Music, Sparkles, Calendar, Heart, PartyPopper } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TimelineEventProps {
  date: string;
  title: string;
  locationName: string;
  locationUrl: string;
  time: string;
  theme?: string;
  dressCode?: string;
  expectations?: string;
  side: 'left' | 'right';
  icon?: React.ReactNode;
}

export function TimelineEvent({
  date,
  title,
  locationName,
  locationUrl,
  time,
  theme,
  dressCode,
  expectations,
  side,
  icon
}: TimelineEventProps) {
  return (
    <div className={cn(
      "relative flex items-center justify-between w-full mb-12 last:mb-0",
      side === 'left' ? "flex-row-reverse" : "flex-row"
    )}>
      {/* Spacer for the other side */}
      <div className="hidden md:block w-5/12" />

      {/* Center Line Dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-rose-200 border-4 border-white z-10 shadow-md">
         <div className="w-2 h-2 bg-rose-500 rounded-full" />
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={cn(
          "w-full ml-10 md:ml-0 md:w-5/12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-rose-100 hover:shadow-xl transition-shadow",
          side === 'left' ? "md:mr-auto" : "md:ml-auto"
        )}
      >
        <div className="flex items-center gap-2 text-rose-600 font-semibold mb-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm uppercase tracking-wider">{date}</span>
        </div>
        
        <h3 className="text-2xl font-serif text-stone-800 mb-1">{title}</h3>
        
        <div className="space-y-3 text-stone-600 text-sm mt-4">
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-1 text-amber-600 shrink-0" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-1 text-emerald-600 shrink-0" />
            <a 
              href={locationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-700 underline underline-offset-2 transition-colors"
            >
              {locationName}
            </a>
          </div>

          {theme && (
            <div className="flex items-start gap-3">
              <Sparkles className="w-4 h-4 mt-1 text-purple-500 shrink-0" />
              <span><span className="font-semibold text-stone-700">Theme:</span> {theme}</span>
            </div>
          )}

          {dressCode && (
            <div className="flex items-start gap-3">
              <Shirt className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
              <span><span className="font-semibold text-stone-700">Dress Code:</span> {dressCode}</span>
            </div>
          )}

          {expectations && (
            <div className="flex items-start gap-3">
              <PartyPopper className="w-4 h-4 mt-1 text-rose-400 shrink-0" />
              <span><span className="font-semibold text-stone-700">What to expect:</span> {expectations}</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
