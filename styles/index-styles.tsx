import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Name = styled.div`
  width: 22%;
  text-align: center;
  opacity: 0; /* Initial opacity */
  animation: ${fadeIn} 1s ease-in-out forwards; /* Add forwards to retain the final animation state */

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }
`;
