import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/TextComponent.css';

const TextComponent = () => {
  const [currentText, setCurrentText] = useState('');
  const texts = ["Data Analyst", "Software Developer", "Web Developer"];

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingInterval;

    const type = () => {
      const currentWord = texts[index];
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        clearInterval(typingInterval);
        setTimeout(() => {
          typingInterval = setInterval(type, 100);
        }, 500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        clearInterval(typingInterval);
        typingInterval = setInterval(type, 200);
      }
    };

    typingInterval = setInterval(type, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, It's <span>Hoogo</span></h1>
        <h3 className="typing-text">
          I'm a <span>{currentText}</span>
        </h3>
        <p>
          Hi! I'm <span style={{borderBottom: '2px solid #967bb6', color: 'white'}}>Hugo</span>, 
          a third-year computer engineering student and Data Analyst Apprentice. 
          I use data to drive insights in healthcare. Currently at{' '}
          <span style={{color: 'white', fontStyle: 'italic', borderBottom: '2px solid #967bb6'}}>Sanofi</span>.
        </p>
        <div className="social-icons">
          <a href="https://fr.linkedin.com/in/hugo-beroujon"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/GrosHoogo"><i className="fa-brands fa-github"></i></a>
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <a href="#" className="btn">Contact</a>
      </div>
    </section>
  );
};

export default TextComponent;