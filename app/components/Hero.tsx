import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const ParticleEffect = () => {
  const createParticle = useCallback(() => {
    const particles = document.querySelector('.particles');
    if (!particles) return;

    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 1;
    const left = Math.random() * 100;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animation = `float-up ${Math.random() * 3 + 2}s linear`;
    
    particles.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 5000);
  }, []);

  useEffect(() => {
    const interval = setInterval(createParticle, 100);
    return () => clearInterval(interval);
  }, [createParticle]);

  return <div className="particles" />;
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[var(--sl-background)]">
      <ParticleEffect />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--sl-blue-glow)]/5 via-transparent to-transparent" />
      
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-level-up' : 'opacity-0'}`}>
        <div className="text-left space-y-6">
          <div className="space-y-2">
            <h2 className="text-[var(--sl-text-secondary)] text-xl font-medium">Hi, I'm</h2>
            <h1 className="text-4xl sm:text-6xl font-bold">
              <span className="blue-glow stat-text">Shashank</span>
            </h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl sm:text-2xl text-[var(--sl-blue-light)] font-semibold tracking-wide">
              Full-Stack Developer
            </p>
            <p className="text-[var(--sl-text-secondary)] max-w-2xl">
              Crafting digital experiences with code. Specializing in web development and creative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quests"
              className="inline-flex items-center justify-center px-6 py-3 border border-[var(--sl-blue-glow)] text-base font-medium rounded-md text-white bg-[var(--sl-blue-dark)] hover:bg-[var(--sl-blue-glow)] transition-colors duration-300 animate-glow"
            >
              View Quests
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-[var(--sl-border)] text-base font-medium rounded-md text-[var(--sl-text-primary)] hover:bg-[var(--sl-card-bg)] transition-colors duration-300"
            >
              Contact Gate
            </a>
          </div>
        </div>

        <div className="relative status-window rounded-lg p-4 aspect-square max-w-md mx-auto">
          {/* Replace the src with your actual image path */}
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/your-image.jpg"
              alt="Shashank"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-glow">
        <svg
          className="w-6 h-6 text-[var(--sl-blue-light)]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 