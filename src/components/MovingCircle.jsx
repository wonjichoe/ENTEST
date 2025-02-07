import React, { useEffect, useRef } from 'react';

const MovingCircle = ({ color, size, speed, initialX, initialY }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const section = circleRef.current?.closest('section');
    
    const handleScroll = () => {
      if (!section || !circleRef.current) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY - sectionTop;
      
      if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
        const xOffset = Math.sin(scrollY * speed * 0.003) * 50;
        const yOffset = Math.sin((scrollY * speed * 0.003) + Math.PI / 4) * 30;

        circleRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const sizeValue = typeof size === 'string' ? parseInt(size) : size;
  
  // initialX와 initialY가 퍼센트 값인지 확인
  const isPercentX = typeof initialX === 'string' && initialX.includes('%');
  const isPercentY = typeof initialY === 'string' && initialY.includes('%');

  return (
    <div
      ref={circleRef}
      style={{
        position: 'absolute',
        left: isPercentX ? initialX : `${initialX}px`,
        top: isPercentY ? initialY : `${initialY}px`,
        width: sizeValue,
        height: sizeValue,
        borderRadius: '50%',
        backgroundColor: color,
        opacity: 0.1,
        transition: 'transform 0.4s ease-out',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default MovingCircle;