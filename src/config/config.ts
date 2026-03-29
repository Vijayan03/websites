// ============================================================
//  DEVA ICE CREAM — Central Configuration
//  Edit this file to update brand info, services, gallery, etc.
// ============================================================

export const brand = {
  name: "Deva Ice Cream",
  tagline: "Sweet Moments for Your Special Events",
  subTagline: "Premium ice cream & gourmet snacks crafted for weddings, parties, and unforgettable celebrations.",
  phone: "+91 9025134105",
  phoneRaw: "+91 9025134105",
  whatsapp: "+91 9025134105",
  email: "hello@devaicecream.com",
  address: "Meingnanam @ Manju, South Mada Street, Nellorepet, Gudiyatham, Vellore - 632602, Tamil Nadu, India",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Gudiyatham,+Vellore,+Tamil+Nadu&output=embed",
  socialLinks: {
    instagram: "https://instagram.com/devaicecream",
    facebook: "https://facebook.com/devaicecream",
  },
};

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
}

export const services: Service[] = [
  {
    id: "ice-cream-catering",
    icon: "🍦",
    title: "Ice Cream Catering",
    description:
      "Premium ice cream catering for any event. From classic scooters to dedicated serving stations.",
    features: ["Multiple flavours", "Standard cones", "Branded cups", "Trained servers"],
    color: "#e11d48",
    bgColor: "#fff1f2",
  },
  {
    id: "fruit-salad",
    icon: "🍓",
    title: "Fruit Salad Stall",
    description:
      "Freshly cut seasonal fruits served in elegant bowls. Perfect healthy option for your guests.",
    features: ["Seasonal fruits", "Custom toppings", "Live counter", "Vegan friendly"],
    color: "#b97c0e",
    bgColor: "#fef9e7",
  },
  {
    id: "popcorn",
    icon: "🍿",
    title: "Popcorn Stall",
    description:
      "Freshly popped popocorn in various gourmet flavours to keep the party munching going.",
    features: ["Butter & caramel", "Live popping", "Event branding", "Quick service"],
    color: "#a96530",
    bgColor: "#faf6f0",
  },
  {
    id: "welcome-kits",
    icon: "🎁",
    title: "Welcome Reception Kits",
    description:
      "Curated welcome hampers given to guests at the entrance to set the mood for a joyful event.",
    features: ["Sweets & mints", "Premium packaging", "Greeting note", "Luxury design"],
    color: "#9f1239",
    bgColor: "#fff1f2",
  },
  {
    id: "live-counter",
    icon: "🧑‍🍳",
    title: "Live Ice Cream Counter Setup",
    description:
      "Bring excitement to your event with interactive live stations, including rolled ice creams and waffle making.",
    features: ["Cold stone mixing", "Live waffle making", "Custom creations", "Interactive"],
    color: "#be123c",
    bgColor: "#fff1f2",
  },
  {
    id: "custom-dessert",
    icon: "✨",
    title: "Custom Event Dessert Setup",
    description:
      "A fully personalized dessert spread matched precisely to your event's theme and colour palette.",
    features: ["Themed decoration", "Assorted desserts", "Premium presentation", "Cohesive look"],
    color: "#7d4f12",
    bgColor: "#fef9e7",
  },
];

export const galleryImages: string[] = [
  "https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?w=600&q=80", // Wedding dessert serving / ice cream scoop
  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80", // Real event style dessert counter
  "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80", // Sliced ice cream or dessert in disposable cups
  "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80", // Live serving at an event
  "https://images.unsplash.com/photo-1620023647184-a16df169fbde?w=600&q=80", // Guest taking ice cream or holding it
  "https://images.unsplash.com/photo-1543362905-24e54cd3b782?w=600&q=80", // Simple vanilla/butterscotch looking serving
];

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Murugan",
    event: "Wedding Reception",
    quote:
      "Deva Ice Cream transformed our reception! Every guest was raving about the ice cream counter. The traditional setup looked stunning.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Selvi",
    event: "Birthday Party",
    quote:
      "The Modern Gen Z stall was the highlight. A hit with the youngsters, very hygienic, and absolutely delicious. Will definitely book again!",
    rating: 5,
  },
  {
    id: "t3",
    name: "Karthik",
    event: "Corporate Event",
    quote:
      "Punctual, super clean, and incredibly well-organised. The ice cream quality is uncompromised. Highly recommend for any event.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Priya",
    event: "Engagement Ceremony",
    quote:
      "The entrance stall setup welcomed our guests perfectly. Great flavours, great presentation, and very reasonable pricing from Deva Ice Cream team.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Gokul",
    event: "Family Function",
    quote:
      "Excellent service since years. They never disappoint with their quality and wide variety of flavors.",
    rating: 5,
  },
];

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

export const whyUsItems: WhyUsItem[] = [
  {
    icon: "🌟",
    title: "Trusted Experience",
    description:
      "Serving Tamil Nadu since 2005, we have perfected the art of creating sweet memories for weddings and celebrations big and small.",
  },
  {
    icon: "🧼",
    title: "Strict Hygiene Standards",
    description:
      "We maintain high hygiene standards in our own ice cream factory. All equipment is sanitised before every event for your safety.",
  },
  {
    icon: "🎨",
    title: "Custom Event Setups",
    description:
      "From colour-matched counters to branded signage, every installation is designed to complement your event's theme perfectly.",
  },
  {
    icon: "⏰",
    title: "Always On Time",
    description:
      "We understand events run on a tight schedule. Our team arrives early, sets up quietly, and is ready before your first guest arrives.",
  },
  {
    icon: "💬",
    title: "Friendly Dedicated Staff",
    description:
      "Our trained, well-groomed servers are more than just vendors — they are part of your event, keeping guests happy and smiling.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description:
      "No hidden charges. We provide clear packages with all-inclusive quotes so you can plan your event budget with confidence.",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
