import React, { useState, useEffect } from 'react';
import styles from './TextComponent.module.css';

const textArray = [
  "Farmers are the backbone of our nation.",
  "They work tirelessly to provide us with fresh and organic food.",
  "Supporting local farmers means supporting sustainability.",
  "Together, we can create a healthier and greener future."
];

const TextComponent = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < textArray[index].length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + textArray[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText('');
        setCharIndex(0);
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }, 2000);
    }
  }, [charIndex, index]);

  return (
    <div className={styles.textContainer}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default TextComponent;
