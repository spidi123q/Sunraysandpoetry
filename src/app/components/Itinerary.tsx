import { MapPin, Clock, Music, Palette, Shirt, PartyPopper, CalendarDays } from "lucide-react";
import { motion } from "motion/react";

interface Event {
  date: string;
  title: string;
  location: string;
  locationUrl: string;
  time: string;
  theme?: string;
  dressCode: string;
  expectations?: string;
  icon: any;
}

const events: Event[] = [
  {
    date: "22nd March 2026",
    title: "Sangeet: Team Bride vs Team Groom",
    location: "Bride’s Residence",
    locationUrl: "https://maps.app.goo.gl/7cpYvfQqU7osTXsZ8?g_st=ic",
    time: "5:00 PM - 9:00 PM",
    theme: "Sangeet",
    dressCode: "Dark colour and shimmery material preferred (Dark Green, Navy Blue, Black, etc)",
    expectations: "Pudava Kodukkal, Dance, Music, Speeches, Antakshari, Dumb Charades, DJ Night",
    icon: Music,
  },
  {
    date: "24th March 2026",
    title: "Vintage Haldi: Phoolon Ki Holi",
    location: "KR Thekkedathu Mana",
    locationUrl: "https://maps.app.goo.gl/cxGdcZmmo3VhUMgi8?g_st=ic",
    time: "4:00 PM onwards",
    theme: "Vintage Haldi",
    dressCode: "Light shades and breathable materials preferred (Beige, Off White, Light Yellow, etc)",
    expectations: "Haldi, Holi with flower petals and water, Fun interactive games, Story telling with photo/video slideshow with projector setup",
    icon: Palette,
  },
  {
    date: "25th March 2026 (Morning)",
    title: "Temple Wedding",
    location: "Guruvayur Temple",
    locationUrl: "https://maps.app.goo.gl/Gp7gNSWLSHfANLsg6",
    time: "10:00 AM",
    dressCode: "Temple vibe (Kasavu preferred)",
    icon: CalendarDays,
  },
  {
    date: "25th March 2026 (Afternoon)",
    title: "Varamalyam Ceremony",
    location: "KR Thekkedathu Mana",
    locationUrl: "https://maps.app.goo.gl/cxGdcZmmo3VhUMgi8?g_st=ic",
    time: "4:00 PM",
    dressCode: "Peach, Pink, Sandal shades preferred",
    icon: PartyPopper,
  },
  {
    date: "25th March 2026 (Night)",
    title: "Reception",
    location: "KR Thekkedathu Mana",
    locationUrl: "https://maps.app.goo.gl/cxGdcZmmo3VhUMgi8?g_st=ic",
    time: "7:30 PM",
    dressCode: "Same as Varamalyam Ceremony or any function wear",
    icon: PartyPopper,
  }
];

const Itinerary = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-serif text-center text-rose-900 mb-12">Wedding Itinerary</h2>
      <div className="relative border-l-2 border-rose-200 ml-4 md:ml-8 space-y-12">
        {events.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            <span className="absolute -left-[9px] top-0 p-1 bg-rose-100 rounded-full border-4 border-white">
              <event.icon className="w-4 h-4 text-rose-600" />
            </span>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-2">
                    {event.date}
                  </span>
                  <h3 className="text-2xl font-serif text-gray-800">{event.title}</h3>
                </div>
                {/* Time Badge */}
                 <div className="flex items-center text-rose-700 font-medium whitespace-nowrap bg-rose-50 px-3 py-1 rounded-lg self-start">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="space-y-3">
                  <a 
                    href={event.locationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-rose-600 transition-colors group"
                  >
                    <MapPin className="w-5 h-5 mr-2 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{event.location}</span>
                  </a>
                  
                  <div className="flex items-start">
                    <Shirt className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                    <span>{event.dressCode}</span>
                  </div>
                </div>

                {event.expectations && (
                  <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100">
                    <h4 className="text-amber-800 font-medium mb-2 text-sm uppercase tracking-wide">What to expect</h4>
                    <p className="text-sm text-amber-900/80 leading-relaxed">{event.expectations}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
