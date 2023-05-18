import React, { useEffect, useRef } from 'react';
import { random } from 'lodash';
import styled, { keyframes } from 'styled-components';
import { ParticleContainer } from '../styles/index-styles'; 

const particleAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(1000);
  }
  100% {
    opacity: 1;
    transform: translateY(-100px);
  }
`;

const Particle = styled.div`
  width: 1px;
  height: 1px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  animation: ${particleAnimation} 3s linear infinite;
`;

const Home = () => {
  const particleRefs = useRef([]);

  useEffect(() => {
    const handleRandomizePosition = (particleElement) => {
      const { innerWidth } = window;
      const bottom = random(0, 100);
      const left = random(0, innerWidth);
      particleElement.style.bottom = `${bottom}%`;
      particleElement.style.left = `${left}px`;
    };

    const handleResize = () => {
      particleRefs.current.forEach((particleElement) => {
        handleRandomizePosition(particleElement);
      });
    };

    particleRefs.current.forEach((particleElement, index) => {
      handleRandomizePosition(particleElement);
      particleElement.style.animationDelay = `${index * 0.01}s`; // Adjust the delay value as needed
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const numParticles = 200;
  const particles = Array.from(Array(numParticles).keys());

  return (
    <ParticleContainer>
      <h1>
      <a href="https://github.com/Elijah10000">Elijah McNamara</a>
      </h1>
      {particles.map((index) => (
        <Particle key={index} ref={(element) => (particleRefs.current[index] = element)} />
      ))}
    </ParticleContainer>
  );
};

export default Home;
