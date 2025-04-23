'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Thoughts from './components/Thoughts';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Thoughts />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
