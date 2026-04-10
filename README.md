# Velorah UI: Professional Component Platform

Velorah UI is a production-level **Developer UI System & Component Platform** designed for modern engineering teams. It provides a highly interactive environment for browsing, previewing, and instantly exporting mobile-first UI components built with React and Tailwind CSS.

## 🎯 The Problem
Developers often struggle to find truly mobile-first, professional UI components that don't require heavy refactoring. Static libraries lack the interactivity needed to test components across breakpoints before integration.

## ✅ The Solution
Velorah UI offers a **Split-Preview Architecture** where every component can be tested live across simulated Mobile, Tablet, and Desktop viewports. 

## ✨ Key Features
- **Interactive Preview Engine**: Instant viewport switching (375px / 768px / 1280px) and dark/light mode toggling.
- **AI Component Generator (BETA)**: A high-fidelity "Generative UI" experience for prompt-based component architecting.
- **Mobile-First Registry**: A centralized registry of premium components (Navbars, Heros, Cards, Pricing) following a strict mobile-first paradigm.
- **Personalized Favorites**: A persistence system to curate and save components for future projects.

## 🧱 Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Persistence**: LocalStorage (Favorites System)
- **Components**: Radix UI Primitives

## 📁 Project Structure
- `/app/library`: The component explorer and preview engine.
- `/data/components`: Centralized registry of code strings and React nodes.
- `/components/library`: Isolated, reusable component implementations.

## 💼 Interview Explanation
This project demonstrates several senior-level engineering skills:
1. **Isolated Preview Architecture**: Using safe containers to simulate breakpoints without breaking the parent app's layout.
2. **Registry Pattern**: Managing UI as data for easy scalability and searchability.
3. **Mobile-First Strategy**: All components are architected for small screens first, using breakpoints only for additive scaling.
4. **Performance**: Optimized PrismJS syntax highlighting and Framer Motion micro-interactions.

---
Built by **Velorah Team** — *Crafting interfaces at the speed of thought.*
