import styled  from 'styled-components';

export const ParticleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: #ffffff;
    transition: color 0.5s ease, transform 0.5s ease;
  
    &:hover {
      transform: scale(1.3);
    }
  }
`;