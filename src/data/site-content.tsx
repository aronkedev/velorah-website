import React from 'react';
import { 
  Check, 
  HelpCircle, 
  Globe, 
  Cpu, 
  Code, 
  Heart, 
  Zap, 
  ShieldCheck, 
  User 
} from 'lucide-react';

/**
 * Studio Page Content (/studio)
 */
export const pricingTiers = [
  {
    name: "Landing Page",
    description: "A single, high-converting page engineered for speed and precision. Perfect for personal brands or product launches.",
    price: "$200",
    features: ["1 Custom Page", "3-5 Day Delivery", "SEO Optimization", "Mobile Responsive", "Analytics Integration"],
    cta: "Start Promo",
    highlight: false
  },
  {
    name: "Business Website",
    description: "A complete digital hub for growing teams and brands. Multi-page architecture built for authority and results.",
    price: "$500",
    features: ["3-5 Custom Pages", "Contact Forms", "Advanced SEO", "CMS Integration", "2 Weeks Delivery"],
    cta: "Build My Brand",
    highlight: true
  },
  {
    name: "Custom Project",
    description: "Bespoke digital architecture for complex visions. Tailored functionality, discussed directly on a discovery call.",
    price: "Let's Talk",
    features: ["Unlimited Scope", "Dedicated Timeline", "Custom Functionality", "Priority Support", "Direct Strategy"],
    cta: "Schedule Call",
    highlight: false
  }
];

export const studioFAQs = [
  {
    q: "How long does it take?",
    a: "Landing pages usually ship within 3-5 days. Larger business sites take 2-3 weeks depending on complexity. We prioritize speed without sacrificing aesthetic quality."
  },
  {
    q: "Do you do redesigns?",
    a: "Absolutely. We can take your existing site and bring it into the modern era with premium aesthetics, better performance, and glassmorphic designs."
  },
  {
    q: "What if I need specialized features?",
    a: "Our Custom Projects are built for exactly that. Whether you need an e-commerce setup, a booking system, or a custom dashboard, we've got you covered."
  },
  {
    q: "Is hosting setup included?",
    a: "Yes. We'll handle the technical heavy lifting, from domain mapping to setting up high-performance hosting on platforms like Vercel or Netlify."
  }
];

/**
 * Work Page Content (/work)
 */
export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  icon: React.ReactNode;
}

export const portfolioProjects: Project[] = [
  {
    name: "Naevox",
    description: "A premium freelance agency platform featuring cinematic visuals and glassmorphic UI.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "High Performance"],
    link: "https://velorah-website.vercel.app",
    icon: <Globe className="h-8 w-8 text-sky-400" />
  },
  {
    name: "Aron Ke Portfolio",
    description: "A personal showcase for high-end web development and immersive 3D experiences.",
    tech: ["React", "Three.js", "Full-Stack", "3D Visualization"],
    link: "https://aronke.vercel.app",
    icon: <Cpu className="h-8 w-8 text-indigo-400" />
  }
];

/**
 * About Page Content (/about)
 */
export const companyValues = [
  {
    title: "Clean Code",
    description: "Architecture that's as beautiful behind the scenes as it is on the surface. Scalable, maintainable, and efficient.",
    icon: <Code className="h-6 w-6 text-sky-400" />
  },
  {
    title: "Honest Communication",
    description: "No corporate fluff. Direct collaboration, transparent timelines, and clear expectations every step of the way.",
    icon: <Heart className="h-6 w-6 text-indigo-400" />
  },
  {
    title: "Fast Delivery",
    description: "High-performance websites built at the speed of thought. We value your time as much as the end product.",
    icon: <Zap className="h-6 w-6 text-purple-400" />
  }
];

export const skillSet = [
  "HTML5 & Semantic Web",
  "CSS3 & Modern Styling",
  "JavaScript (ES6+)",
  "TypeScript",
  "React & Next.js",
  "Responsive Design",
  "Tailwind CSS",
  "Vercel Deployment",
  "Glassmorphic UI"
];

/**
 * Homepage Features (The "Why Naevox" Section)
 */
export const brandFeatures = [
  {
    title: "High Performance",
    description: "Built for speed and SEO optimization.",
    icon: <Zap className="h-5 w-5 text-zinc-400 shrink-0" />
  },
  {
    title: "Premium Design",
    description: "No templates. Only bespoke architecture.",
    icon: <ShieldCheck className="h-5 w-5 text-zinc-400 shrink-0" />
  },
  {
    title: "Direct Service",
    description: "Work directly with the artisans.",
    icon: <User className="h-5 w-5 text-zinc-400 shrink-0" />
  }
];
