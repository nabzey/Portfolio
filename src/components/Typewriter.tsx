import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, speed = 100, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(text.substring(0, currentText.length + 1));
        if (currentText === text) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        setCurrentText(text.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, delay]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;