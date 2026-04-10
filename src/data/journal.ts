export interface JournalEntry {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
  content: string; // HTML content
}

export const journalEntries: JournalEntry[] = [
  {
    slug: "the-art-of-glassmorphism",
    title: "The Art of Glassmorphism in Modern Web Design",
    category: "Design",
    date: "March 24, 2024",
    author: "Aron Kedev",
    excerpt: "Exploring the delicate balance between transparency and readability in high-end UI design.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000",
    content: `
      <p>Glassmorphism has taken the design world by storm, offering a bridge between the physical and digital worlds. By simulating the properties of frosted glass, designers can create depth, hierarchy, and a sense of atmosphere that solid colors simply cannot achieve.</p>
      
      <h2>The Core Principles</h2>
      <p>Effective glassmorphism relies on four key attributes:</p>
      <ul>
        <li><strong>Transparency:</strong> Using a background blur to maintain context.</li>
        <li><strong>Layered Approach:</strong> Using shadows to create clear vertical separation.</li>
        <li><strong>Vivid Colors:</strong> Highlighting the blur effect with vibrant background elements.</li>
        <li><strong>Subtle Borders:</strong> A thin, light border to define the shape against a busy background.</li>
      </ul>

      <blockquote>
        "Minimalism isn't just about what you remove, but how the remaining elements interact with the space."
      </blockquote>

      <p>At Velorah, we use these principles to ensure our interfaces feel premium and immersive. It's not just about looking good—it's about creating a holistic experience that feels alive.</p>
    `
  },
  {
    slug: "why-performance-is-the-new-premium",
    title: "Why Performance is the New Premium",
    category: "Architecture",
    date: "April 02, 2024",
    author: "Aron Kedev",
    excerpt: "In an era of high-speed connections, speed isn't just a metric—it's a luxury experience.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
    content: `
      <p>When we talk about luxury digital experiences, we often think about animations, high-resolution imagery, and bespoke typography. However, the true mark of a premium product is how it handles time.</p>
      
      <h2>Latency as a Barrier</h2>
      <p>Every millisecond of delay is a friction point. For high-end brands, friction is the enemy. A website that takes three seconds to load isn't luxury—it's outdated. We believe that instantaneous feedback and buttery-smooth transitions are the foundation of modern prestige.</p>

      <p>Using technologies like Next.js and RSC (React Server Components), we've been able to ship complex visual experiences that load in the blink of an eye. The goal is to make the technology disappear, leaving only the brand story.</p>
    `
  },
  {
    slug: "minimalism-for-the-ambitious",
    title: "Minimalism for the Ambitious",
    category: "Philosophy",
    date: "April 08, 2024",
    author: "Aron Kedev",
    excerpt: "How reducing complexity can amplify your brand's core message.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=2000",
    content: `
      <p>Minimalism is often misunderstood as emptiness. True minimalism is about the intentionality of every single detail. For ambitious brands, this means stripping away the noise to let the excellence shine through.</p>

      <p>Our approach to design follows this philosophy. We don't hide behind cluttered layouts. We use white space—or in our case, deep dark space—to frame the content in a way that feels intentional and grand.</p>
    `
  }
];
