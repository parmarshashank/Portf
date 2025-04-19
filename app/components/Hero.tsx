'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <section className="hero">
      <div className="fog" />
      <div className="fog-2" />
      
      <div className="hero__content">
        <div className="hero__text">
          <div className="notification-box">
            <h2 className="hero__greeting">Hi, I'm</h2>
            <h1 className="hero__title">Shashank</h1>
          </div>
          
          <div className="hero__info">
            <p className="hero__subtitle">Full-Stack Developer</p>
            <p className="hero__description">
              Crafting digital experiences with code. Specializing in web development and creative solutions.
            </p>
          </div>

          <div className="hero__buttons">
            <a href="#quests" className="button button--primary">
              View Quests
            </a>
            <a href="#contact" className="button button--secondary">
              Contact Gate
            </a>
          </div>
        </div>

        <div className="hero__image status-window">
          <div className="hero__avatar">
            <div className="hero__avatar-letter">S</div>
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