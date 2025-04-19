'use client';

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
    <section className="hero" id="hero">
      <div className="fog" />
      <div className="fog-2" />
      
      <div className="hero__content">
        <div className="hero__text">
          <span className="hero__greeting">Welcome to my world</span>
          <h1 className="hero__title">
            Solo Developer,<br />
            Endless Possibilities
          </h1>
          <p className="hero__subtitle">Full-Stack Developer & UI/UX Enthusiast</p>
          <p className="hero__description">
            Transforming ideas into reality through elegant code and creative solutions. 
            Specializing in building exceptional digital experiences that combine form and function.
          </p>
          <div className="hero__buttons">
            <a href="#profile" className="button button--primary">
              View Profile
            </a>
            <a href="#projects" className="button button--secondary">
              See Projects
            </a>
          </div>
        </div>

        <div className="hero__image status-window">
          <div className="hero__avatar">
            <Image 
              src="/images/night3.jpg"
              alt="Night cityscape"
              fill
              className="hero__avatar-image"
              priority
              sizes="(max-width: 768px) 20rem, 28rem"
            />
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <svg
          className="hero__scroll-arrow"
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