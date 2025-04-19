'use client';

import { useEffect, useRef } from 'react';
import { FiCoffee, FiMail, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    emailjs.init('FDEYnN08cKpaFJiSy');
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current || !buttonRef.current) return;

    const btn = buttonRef.current;
    btn.disabled = true;
    btn.innerHTML = '<FiSend /> <span>Sending...</span>';

    try {
      await emailjs.sendForm(
        'default_service',
        'template_goc398r',
        form.current
      );
      
      toast.success('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error(error);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<FiSend /> <span>Send Message</span>';
    }
  };

  return (
    <section className="contact" id="contact">
      <Toaster position="bottom-right" />
      <div className="contact__header">
        <h2 className="contact__title">DROP A MESSAGE</h2>
        <p className="contact__subtitle">Let's Connect</p>
      </div>

      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-header">
              <FiMail className="contact__info-icon" />
              <h3>Get in Touch</h3>
            </div>
            <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
            
            <a 
              href="https://buymeacoffee.com/parmarshashank" 
              target="_blank" 
              rel="noopener noreferrer"
              className="coffee-button"
            >
              <FiCoffee />
              <span>Buy me a coffee</span>
            </a>
          </div>

          <form ref={form} className="contact__form" onSubmit={handleSubmit} id="form">
            <div className="form__group field">
              <label htmlFor="from_name" className="form__label">Name</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="form__input"
              />
            </div>

            <div className="form__group field">
              <label htmlFor="from_email" className="form__label">Email</label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                required
                className="form__input"
              />
            </div>

            <div className="form__group field">
              <label htmlFor="organisation" className="form__label">Organization</label>
              <input
                type="text"
                name="organisation"
                id="organisation"
                className="form__input"
              />
            </div>

            <div className="form__group field">
              <label htmlFor="message" className="form__label">Message</label>
              <textarea
                name="message"
                id="message"
                required
                className="form__input form__textarea"
                rows={5}
              />
            </div>

            <button 
              type="submit" 
              className="form__submit"
              id="button"
              ref={buttonRef}
            >
              <FiSend />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 