import { motion } from "motion/react";
import { MapPin, Clock, Shirt, Music, Palette, PartyPopper } from "lucide-react";

export interface EventDetails {
  id: string;
  date: string;
  title: string;
  locationName: string;
  locationUrl: string;
  time: string;
  theme?: string;
  dressCode: string;
  whatToExpect: string[];
}

interface EventCardProps {
  event: EventDetails;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center justify-between w-full mb-12 md:mb-24 ${
        isEven ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Spacer for the other side of the timeline */}
      <div className="hidden md:block w-5/12" />

      {/* Timeline Node */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-[#D4A373] border-4 border-[#FAEDCD] shadow-lg z-10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>

      {/* Content Card */}
      <div className="w-full md:w-5/12 pl-12 md:pl-0">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-[#FAEDCD] hover:shadow-2xl transition-shadow duration-300">
          {/* Date Badge */}
          <div className="inline-block bg-[#CCD5AE] text-[#FEFAE0] text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-sm tracking-wider">
            {event.date}
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-[#D4A373] mb-2 font-bold">
            {event.title}
          </h3>

          <div className="space-y-3 text-gray-600 font-sans">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#E9EDC9] shrink-0 mt-0.5" stroke="#D4A373" />
              <span className="text-sm font-medium">{event.time}</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E9EDC9] shrink-0 mt-0.5" stroke="#D4A373" />
              <a
                href={event.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-[#D4A373] underline decoration-[#D4A373]/30 transition-colors"
              >
                {event.locationName}
              </a>
            </div>

            {event.theme && (
              <div className="flex items-start gap-3">
                <Palette className="w-5 h-5 text-[#E9EDC9] shrink-0 mt-0.5" stroke="#D4A373" />
                <span className="text-sm">
                  <span className="font-semibold">Theme:</span> {event.theme}
                </span>
              </div>
            )}

            <div className="flex items-start gap-3">
              <Shirt className="w-5 h-5 text-[#E9EDC9] shrink-0 mt-0.5" stroke="#D4A373" />
              <span className="text-sm">
                <span className="font-semibold">Dress Code:</span> {event.dressCode}
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-[#FAEDCD]">
              <div className="flex items-center gap-2 mb-2 text-[#D4A373] font-serif font-semibold">
                <PartyPopper className="w-4 h-4" />
                <span>What to Expect</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {event.whatToExpect.map((item, i) => (
                  <span
                    key={i}
                    className="bg-[#FAEDCD]/50 text-[#D4A373] text-xs px-2 py-1 rounded-md border border-[#FAEDCD]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
