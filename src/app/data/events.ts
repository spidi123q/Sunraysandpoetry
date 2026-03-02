
export interface EventDetails {
  title: string;
  location: string;
  locationUrl: string;
  time: string;
  theme?: string;
  dressCode: string;
  description: string;
}

export interface DayItinerary {
  date: string;
  events: EventDetails[];
}

export const itinerary: DayItinerary[] = [
  {
    date: "22nd March 2026",
    events: [
      {
        title: "Sangeet: Team Bride vs Team Groom",
        location: "Bride’s Residence",
        locationUrl: "https://maps.app.goo.gl/7cpYvfQqU7osTXsZ8?g_st=ic",
        time: "5:00 PM - 9:00 PM",
        theme: "Sangeet",
        dressCode: "Dark colours and shimmery material preferred (Dark Green, Navy Blue, Black, etc)",
        description: "Pudava kodukkal, dance, music, speeches, antakshari, dumb charades, DJ night",
      },
    ],
  },
  {
    date: "24th March 2026",
    events: [
      {
        title: "Vintage Haldi: Phoolon Ki Holi",
        location: "KR Thekkedathu Mana",
        locationUrl: "https://maps.app.goo.gl/cxGdcZmmo3VhUMgi8?g_st=ic",
        time: "4:00 PM onwards",
        theme: "Vintage Haldi",
        dressCode: "Light shades and breathable materials preferred (Beige, Off-white, Light Yellow, etc)",
        description: "Haldi, Holi with flower petals and water, fun interactive games, storytelling with photo/video slideshow",
      },
    ],
  },
  {
    date: "25th March 2026",
    events: [
      {
        title: "Temple Wedding",
        location: "Guruvayur Temple",
        locationUrl: "https://maps.app.goo.gl/Gp7gNSWLSHfANLsg6",
        time: "10:00 AM",
        dressCode: "Temple vibe (Kasavu preferred)",
        description: "Traditional temple wedding ceremony",
      },
      {
        title: "Varamala Ceremony",
        location: "KR Thekkedathu Mana",
        locationUrl: "https://maps.app.goo.gl/cxGdcZmmo3VhUMgi8?g_st=ic",
        time: "4:00 PM",
        dressCode: "Peach, Pink, Sandal shades preferred",
        description: "Traditional garland exchange ceremony",
      },
      {
        title: "Reception",
        location: "KR Thekkedathu Mana",
        locationUrl: "https://maps.app.goo.gl/cxGdcZmmo3VhUMgi8?g_st=ic",
        time: "7:30 PM",
        dressCode: "Same as Varamala or any function wear",
        description: "Evening reception with dinner and celebration",
      },
    ],
  },
];
