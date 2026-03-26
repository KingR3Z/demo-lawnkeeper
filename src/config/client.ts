export const client = {
  // Business Details
  name: "Lawnkeeper",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Aylesbury.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01296 821861",
  email: "",
  website: "",

  // Location
  address: "Aylesbury",
  city: "Aylesbury",
  county: "",
  postcode: "",
  basedIn: "Aylesbury",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "5",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Andrew Liversidge", rating: 5, text: "Having recently agreed to commit our lawn care this season to Lawnkeeper we report that we are totally delighted with the outcome to date. …  ", date: "9 years ago" },
    { name: "C&KHansen", rating: 5, text: "I can not recommend this service highly enough - brilliant. I have a newish house, cheap grass and awful topsoil. I spent hours and hours messing around with the lawn which was always terrible. I applied every treatment going, stuff which …  ", date: "8 years ago" },
    { name: "Louisa Moreton", rating: 5, text: "To say that the lawn looks extraordinary is an understatement! Our summer party went off brilliantly and without exaggerating, almost everyone commented on the lawn. It's simply beautiful- green, lush, thick with no weeds or moss. What you achieved i", date: "8 years ago" },
    { name: "Andy Mee", rating: 5, text: "Our lawn has been transformed and is now a pleasure to mow and look at.  Would thoroughly recommend Lawnkeeper to anyone wanting to revive their lawn. ", date: "Edited 6 years ago" },
    { name: "Gordon Findlay", rating: 5, text: "Highly recommended - good advice and great service. Nigel's a lovely man to deal with too! ", date: "11 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Lawnkeeper | Landscaper in Aylesbury",
    description: "Professional landscaper in Aylesbury. 5.0-star rated on Google. Call for a free quote.",
  },
};
