'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Profile />
      {/* Other sections will be added here */}
    </main>
  );
}
